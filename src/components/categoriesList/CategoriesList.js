import React from "react";
import "./CategoriesList.styles.scss";
import CategoryItem from "../categoryItem/CategoryItem";

const CategoriesList = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem category={category} />
      ))}
    </div>
  );
};

export default CategoriesList;