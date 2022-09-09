import React from "react";
import { useNavigate } from "react-router-dom";
import {
  DirectoryBodyContainer,
  DirectoryItemContainer,
  BackgroundImage,
} from "./DirectoryItem.styles.js";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, id, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer key={id} onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <DirectoryBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryBodyContainer>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
