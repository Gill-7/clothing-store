import React from "react";
import "./Directory.styles.scss";
import DirectoryItem from "../directoryItem/DirectoryItem";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Directory;
