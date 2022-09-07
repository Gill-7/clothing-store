import React from "react";
import "./DirectoryItem.styles.scss";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, id } = category;

  return (
    <div className="directory-item-container" key={id}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="directory-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
