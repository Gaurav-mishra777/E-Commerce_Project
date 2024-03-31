import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { Breadcrums } from "../Components/Breadcrums/Breadcrums";
import { ProductDisplay } from "../Components/ProductDisplay/ProductDisplay";
import { RelatedProducts } from "../Components/RelatedProducts/RelatedProducts";
import { Discriptionbox } from "../Components/DescriptionBox/DiscriptionBox";
export const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_products.find(
    (product) => product.id === Number(productId)
  ); // Renamed 'e' to 'product' for clarity
  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      {/* <Descriptionbox /> */}
      <RelatedProducts />
    </div>
  );
};
