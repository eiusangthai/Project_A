import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { allProducts } from "../../../data/productData";
import "./styles.css";

const ProductDetails = () => {
    const { id } = useParams();
    const product = allProducts.find((item) => String(item.id) === String(id));
    const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [mainImage, setMainImage] = useState(product ? product.imageUrl : "");

    const handleAddToCart = () => {
        // Nếu sản phẩm có nhiều màu thì bắt buộc chọn màu
        if (product.colors?.length > 0 && !selectedColor) {
            alert("Vui lòng chọn màu trước khi thêm vào giỏ hàng!");
            return;
        }

        // Nếu sản phẩm có size thì bắt buộc chọn size
        if (product.sizes?.length > 0 && !selectedSize) {
            alert("Vui lòng chọn size trước khi thêm vào giỏ hàng!");
            return;
        }

        const cart = JSON.parse(localStorage.getItem("cartItems")) || [];

        const colorName = selectedColor?.name || "Mặc định";
        const sizeName = selectedSize || "Free size";
        const colorPrice = selectedColor?.price || product.price;
        const imageSrc =
            mainImage ||
            selectedColor?.images?.[0] ||
            selectedColor?.img ||
            product.imageUrl;

        const variantKey = `${product.id}-${colorName}-${sizeName}`;

        const existing = cart.find((item) => item.variantKey === variantKey);

        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: colorPrice,
                image: imageSrc,
                quantity: 1,
                color: colorName,
                size: sizeName,
                variantKey,
            });
        }

        localStorage.setItem("cartItems", JSON.stringify(cart));
        window.dispatchEvent(new Event("storage"));
        alert("Đã thêm sản phẩm vào giỏ hàng!");
    };


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
                {/* Hiển thị hình ảnh sản phẩm */}
                <div className="col-md-5 text-center">
                    {/* Ảnh lớn hiển thị chính */}
                    <img
                        src={mainImage}
                        alt={product.name}
                        className="img-fluid big-img mb-3"
                    />

                    {/* Danh sách ảnh thu nhỏ */}
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
                {/* Thông tin sản phẩm */}
                <div className="col-md-7">
                    <h4 className="fw-bold">{product.name}</h4>
                    <p>
                        Mã: <span className="text-danger fw-semibold">{product.id || "—"}</span>
                        <br />
                        Thương hiệu: <span className="fw-semibold">{product.brand}</span> |{" "}
                        <span className="text-success">{product.status}</span>
                    </p>

                    <p className="price mb-1">
                        {product.price.toLocaleString()} đ{" "}
                        {product.originalPrice && (
                            <span className="text-muted text-decoration-line-through ms-2">Giá niêm yết: {product.originalPrice.toLocaleString()} đ</span>
                        )}
                    </p>
                    {/* Sản phẩm biến thể */}
                    {/* chọn sản phẩm */}
                    {product.colors && (
                        <div className="color-section mb-3">
                            <h6 className="fw-semibold mb-2">Chọn [Màu sắc]:</h6>
                            <div className="d-flex flex-wrap gap-2">
                                {product.colors.map((color, i) => (
                                    <div
                                        key={i}
                                        className={`color-box ${selectedColor?.name === color.name ? "active" : ""}`}
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
                    {/* Chọn size */}
                    {product.sizes && (
                        <div className="size-section mb-3">
                            <h6 className="fw-semibold mb-2">Chọn [Size]:</h6>
                            <div className="d-flex flex-wrap gap-2">
                                {product.sizes.map((size, i) => (
                                    <button
                                        key={i}
                                        className={`btn btn-outline-secondary size-btn ${selectedSize === size ? "active" : ""}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                    {/* Ưu đãi */}
                    <div className="promo-box p-3 mb-3">
                        <h6 className="text-danger fw-bold mb-2">🎁 ƯU ĐÃI</h6>
                        <ul className="mb-0">
                            <li>Mua vợt tặng quấn cán, mua giày tặng vớ</li>
                            <li>Sản phẩm cam kết chính hãng</li>
                            <li>Thanh toán sau khi kiểm tra và nhận hàng</li>
                        </ul>
                    </div>
                    {/* Nút */}
                    <div className="action-buttons d-flex flex-wrap gap-2 mt-3">
                        <button className="btn btn-danger btn-lg" onClick={handleAddToCart}>
                            🛒 THÊM VÀO GIỎ HÀNG
                        </button>
                        <button className="btn btn-warning btn-lg text-white">⚡ MUA NGAY</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductDetails;
