import { memo, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { allProducts } from "../../../data/productData";

import "./style.css";

const formatPrice = (price) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
};

const ProductPage = () => {
  const { category, brand } = useParams();

  const filteredProducts = useMemo(() => {
    let products = allProducts;
    if (category) {
      products = products.filter((p) => p.category === category);
    }
    if (brand) {
      products = products.filter((p) => p.brand === brand);
    }
    return products;
  }, [category, brand]);

  const getTitle = () => {
    if (brand) return `${brand} / ${category}`;
    if (category) return category;
    return "Tất cả sản phẩm";
  };

  return (
    <div className="product-page-container">
      <h1 className="product-page-title">{getTitle()}</h1>

      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <Link
              to={`/product/product-details/${product.id}`}
              key={product.id}
              className="product-card"
            >
              <div className="product-card-image-wrapper">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="product-card-image"
                />
              </div>
              <div className="product-card-body">
                <h3 className="product-card-name">{product.name}</h3>
                <p className="product-card-price">
                  {formatPrice(product.price)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="no-products-message">
          <p>Không tìm thấy sản phẩm nào phù hợp.</p>
        </div>
      )}
    </div>
  );
};

export default memo(ProductPage);
