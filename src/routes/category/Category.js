import { Fragment, useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-cart/ProductCard";
import { CategoriesContext } from "../../context/categories.context";
import { CategoryContainer, CategoryTitle } from "./Category.styles.js";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
