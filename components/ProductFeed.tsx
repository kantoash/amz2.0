import React from "react";
import { Product } from "../typing";
import ProductCard from "./ProductCard";

interface props {
  products: Product[];
}
function ProductFeed({ products }: props) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-30 mx-auto">
      {products
        .slice(0, 4)
        .map(({ rating, id, title, price, description, category, image }) => (
          <ProductCard
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            rating={rating}
          />
        ))}

      <img
        className="md:col-span-full "
        src="https://links.papareact.com/dyz"
        alt=""
      />
      <div className=" md:col-span-2 mx-auto">
        {products
          .slice(4, 5)
          .map(({ rating, id, title, price, description, category, image }) => (
            <ProductCard
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
              rating={rating}
            />
          ))}
      </div>
      {products
        .slice(5, products.length)
        .map(({ rating, id, title, price, description, category, image }) => (
          <ProductCard
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            rating={rating}
          />
        ))}
    </div>
  );
}

export default ProductFeed;
