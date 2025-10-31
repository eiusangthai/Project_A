import React, { useState, useEffect, memo } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../../utils/api.js";
import { useCart } from "../../../context/CartContext.jsx";
import "./styles.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [mainImage, setMainImage] = useState("");

  const [error, setError] = useState(null);
  const [cartMessage, setCartMessage] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error("Lỗi tải sản phẩm:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (product) {
      const defaultColor = product.colors?.[0] || null;
      setSelectedColor(defaultColor);
      setMainImage(defaultColor?.img || product.imageUrl);
    }
  }, [product]);

  const handleAddToCart = () => {
    setError(null);
    setCartMessage(null);

    if (product.colors?.length > 0 && !selectedColor) {
      setError("Vui lòng chọn màu trước khi thêm vào giỏ hàng!");
      return;
    }
    if (product.sizes?.length > 0 && !selectedSize) {
      setError("Vui lòng chọn size trước khi thêm vào giỏ hàng!");
      return;
    }

    const colorName = selectedColor?.name || "Mặc định";
    const sizeName = selectedSize || "Free size";
    const colorPrice = selectedColor?.price || product.price;
    const imageSrc =
      mainImage ||
      selectedColor?.images?.[0] ||
      selectedColor?.img ||
      product.imageUrl;

    const variantKey = `${product.id}-${colorName}-${sizeName}`;

    const productToAdd = {
      id: product.id,
      name: product.name,
      price: colorPrice,
      image: imageSrc,
      quantity: 1,
      color: colorName,
      size: sizeName,
      variantKey,
    };

    addToCart(productToAdd);

    setCartMessage("Đã thêm sản phẩm vào giỏ hàng!");
    setTimeout(() => setCartMessage(null), 3000);
  };

  if (loading) {
    return (
      <div className="container py-4">
        <p>Đang tải chi tiết sản phẩm...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Không tìm thấy sản phẩm!</h2>
        <Link to="/product" className="back-link">
          Quay lại cửa hàng
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-5 text-center">
          <img
            src={mainImage}
            alt={product.name}
            className="img-fluid big-img mb-3"
          />
          {product.images && product.images.length > 0 && (
            <div className="d-flex justify-content-center gap-2 flex-wrap">
              {(selectedColor?.images || product.images).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Image ${index + 1}`}
                  className={`thumb-img ${mainImage === img ? "active" : ""}`}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          )}
        </div>

        <div className="col-md-7">
          <h4 className="fw-bold">{product.name}</h4>
          <p>
            Mã:{" "}
            <span className="text-danger fw-semibold">{product.id || "—"}</span>
            <br />
            Thương hiệu: <span className="fw-semibold">
              {product.brand}
            </span> | <span className="text-success">{product.status}</span>
          </p>

          <p className="price mb-1">
            {product.price.toLocaleString()} đ{" "}
            {product.originalPrice && (
              <span className="text-muted text-decoration-line-through ms-2">
                Giá niêm yết: {product.originalPrice.toLocaleString()} đ
              </span>
            )}
          </p>

          {product.colors && product.colors.length > 0 && (
            <div className="color-section mb-3">
              <h6 className="fw-semibold mb-2">Chọn [Màu sắc]:</h6>
              <div className="d-flex flex-wrap gap-2">
                {product.colors.map((color, i) => (
                  <div
                    key={i}
                    className={`color-box ${
                      selectedColor?.name === color.name ? "active" : ""
                    }`}
                    onClick={() => {
                      setSelectedColor(color);
                      setMainImage(color.img || product.imageUrl);
                    }}
                  >
                    <img src={color.img} alt={color.name} />
                    <div className="color-info">
                      <span>{color.name}</span>
                      <br />
                      <strong>{color.price.toLocaleString()} đ</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {product.sizes && product.sizes.length > 0 && (
            <div className="size-section mb-3">
              <h6 className="fw-semibold mb-2">Chọn [Size]:</h6>
              <div className="d-flex flex-wrap gap-2">
                {product.sizes.map((size, i) => (
                  <button
                    key={i}
                    className={`btn btn-outline-secondary size-btn ${
                      selectedSize === size ? "active" : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="promo-box p-3 mb-3">
            <h6 className="text-danger fw-bold mb-2">🎁 ƯU ĐÃI</h6>
            <ul className="mb-0">
              <li>Mua vợt tặng quấn cán, mua giày tặng vớ</li>
              <li>Sản phẩm cam kết chính hãng</li>
              <li>Thanh toán sau khi kiểm tra và nhận hàng</li>
            </ul>
          </div>

          {error && <div className="cart-error-message">{error}</div>}
          {cartMessage && (
            <div className="cart-success-message">{cartMessage}</div>
          )}

          <div className="action-buttons d-flex flex-wrap gap-2 mt-3">
            <button className="btn btn-danger btn-lg" onClick={handleAddToCart}>
              🛒 THÊM VÀO GIỎ HÀNG
            </button>
            <button className="btn btn-warning btn-lg text-white">
              ⚡ MUA NGAY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductDetails);
