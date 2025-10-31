import express from "express";
import { pool } from "../db.js";
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

const router = express.Router();

const ensureString = (v) => (v == null ? "" : String(v));

const safeStringifyArray = (val) => {
  if (Array.isArray(val)) return JSON.stringify(val);

  if (val == null) return JSON.stringify([]);

  if (typeof val === "string") {
    const s = val.trim();
    if (s.startsWith("[") || s.startsWith("{") || s.startsWith('"')) {
      try {
        const parsed = JSON.parse(s);
        if (Array.isArray(parsed)) return JSON.stringify(parsed);
        if (typeof parsed === "string") return JSON.stringify([parsed]);
        return JSON.stringify(parsed);
      } catch (e) {}
    }
    const parts = s
      .split(",")
      .map((p) => p.trim())
      .filter(Boolean);
    return JSON.stringify(parts);
  }

  try {
    return JSON.stringify(val);
  } catch (e) {
    return JSON.stringify([]);
  }
};

const safeParseArray = (val) => {
  if (Array.isArray(val)) return val;

  if (val == null) return [];

  if (typeof val === "object") return [val];

  if (typeof val === "string") {
    const s = val.trim();
    if (s === "") return [];
    try {
      const parsed = JSON.parse(s);
      if (Array.isArray(parsed)) return parsed;
      if (typeof parsed === "string") return [parsed];
      if (parsed == null) return [];
      return [parsed];
    } catch (e) {
      const parts = s
        .split(",")
        .map((p) => p.trim())
        .filter(Boolean);
      return parts;
    }
  }

  return [val];
};

const prepareProductData = (data) => {
  const product = { ...data };
  product.images = safeStringifyArray(product.images);
  product.sizes = safeStringifyArray(product.sizes);
  product.colors = safeStringifyArray(product.colors);
  product.originalPrice =
    product.originalPrice === "" ? null : product.originalPrice || null;
  product.status = product.status || "Còn hàng";
  product.imageUrl = product.imageUrl || null;
  return product;
};

const parseProduct = (product) => ({
  ...product,
  images: safeParseArray(product.images || "[]"),
  sizes: safeParseArray(product.sizes || "[]"),
  colors: safeParseArray(product.colors || "[]"),
});

router.get("/", [authMiddleware, adminMiddleware], async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM products ORDER BY category, name"
    );
    const products = rows.map(parseProduct);
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).send("Lỗi Server");
  }
});

router.post("/", [authMiddleware, adminMiddleware], async (req, res) => {
  try {
    const newProductData = prepareProductData(req.body);
    const newId = `p${Date.now()}`;
    const {
      name,
      category,
      brand,
      price,
      originalPrice,
      status,
      imageUrl,
      images,
      sizes,
      colors,
    } = newProductData;

    await pool.query(
      `INSERT INTO products (id, name, category, brand, price, originalPrice, status, imageUrl, images, sizes, colors, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())`,
      [
        newId,
        name,
        category,
        brand,
        price,
        originalPrice,
        status,
        imageUrl,
        images,
        sizes,
        colors,
      ]
    );

    const [rows] = await pool.query("SELECT * FROM products WHERE id = ?", [
      newId,
    ]);
    res.status(201).json(parseProduct(rows[0]));
  } catch (err) {
    console.error(err);
    res.status(500).send("Lỗi Server khi thêm sản phẩm");
  }
});

router.put("/:id", [authMiddleware, adminMiddleware], async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProductData = prepareProductData(req.body);
    const {
      name,
      category,
      brand,
      price,
      originalPrice,
      status,
      imageUrl,
      images,
      sizes,
      colors,
    } = updatedProductData;

    await pool.query(
      `UPDATE products SET 
       name = ?, category = ?, brand = ?, price = ?, originalPrice = ?, 
       status = ?, imageUrl = ?, images = ?, sizes = ?, colors = ?, updated_at = NOW()
       WHERE id = ?`,
      [
        name,
        category,
        brand,
        price,
        originalPrice,
        status,
        imageUrl,
        images,
        sizes,
        colors,
        id,
      ]
    );

    const [rows] = await pool.query("SELECT * FROM products WHERE id = ?", [
      id,
    ]);
    res.json(parseProduct(rows[0]));
  } catch (err) {
    console.error(err);
    res.status(500).send("Lỗi Server khi cập nhật sản phẩm");
  }
});

router.delete("/:id", [authMiddleware, adminMiddleware], async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM products WHERE id = ?", [id]);
    res.json({ message: "Sản phẩm đã được xóa" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Lỗi Server");
  }
});

router.get("/public", async (req, res) => {
  try {
    const { category, brand } = req.query;

    const page = parseInt(req.query.page || "1", 10);
    const limit = 9;
    const offset = (page - 1) * limit;

    let whereClause = "";
    const queryParams = [];

    if (category) {
      whereClause += " WHERE category = ?";
      queryParams.push(category);
      if (brand) {
        whereClause += " AND brand = ?";
        queryParams.push(brand);
      }
    }

    const [countRows] = await pool.query(
      `SELECT COUNT(*) as total FROM products${whereClause}`,
      queryParams
    );
    const totalProducts = countRows[0].total;
    const totalPages = Math.ceil(totalProducts / limit);

    const [rows] = await pool.query(
      `SELECT * FROM products${whereClause} LIMIT ? OFFSET ?`,
      [...queryParams, limit, offset]
    );

    const products = rows.map(parseProduct);

    res.json({
      products: products,
      totalPages: totalPages,
      currentPage: page,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Lỗi Server");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM products WHERE id = ?", [
      id,
    ]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
    }

    res.json(parseProduct(rows[0]));
  } catch (err) {
    console.error(err);
    res.status(500).send("Lỗi Server");
  }
});

export default router;
