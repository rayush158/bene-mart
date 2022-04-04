import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../../Utils/Products";
import ProductCart from "./ProductCard";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getAllProducts();
      if (data.length) {
        setProducts([...data]);
      }
    })();
  }, []);
  console.log(products);
  return (
    <div className="page-section ff-open-sans ">
      <h2 className="section-title uppercase ">Best Deals</h2>

      <div className="product-card ">
        {products?.length &&
          products.map((product) => {
            return <ProductCart product={product} key={product._id} />;
          })}
      </div>
    </div>
  );
};

export default Products;
