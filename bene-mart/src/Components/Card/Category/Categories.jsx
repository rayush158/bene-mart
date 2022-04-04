import React, { useState, useEffect } from "react";
import { getAllCategories } from "../../../Utils/Category";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getAllCategories();
      if (data.length) {
        setCategory([...data]);
      }
    })();
  }, []);
  return (
    <div className="page-section">
      <div className="page-content-inner ">
        <div className="section-title uppercase ">
          <h2>Categories</h2>
        </div>
        <div className="category-card">
          {category?.length &&
            category.map((item) => {
              return <CategoryCard item={item} key={item._id} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
