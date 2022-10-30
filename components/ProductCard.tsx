import { StarIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import Currency from "react-currency-formatter";
import { useDispatch } from 'react-redux'
import { addToBasket, } from "../slices/basketSlice";

interface props {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

function ProductCard({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}: props) {
  const [rated, setRated] = useState();
  const val = Math.floor((Math.random() * (5 - 1) + 1) % 5);
  useEffect(() => setRated(val), [rated]);
  const [hasPrime, setPrime] = useState(false);
  useEffect(() => setPrime(Math.random() < 0.5));

  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
      hasPrime
    };
    dispatch(addToBasket(product))
  }
  
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 ">
      <p className="absolute top-2 right-2 text-sm italic text-gray-600">{category}</p>
      <img src={image} className="  h-40 w-40 self-center "  />
      <h4 className="my-4">{title}</h4>
      <div className="flex">
        {Array(Math.floor(rating.rate) || rated)
          .fill("")
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-sm my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="GBP" />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img src="https://links.papareact.com/fdw" alt="" className="w-12" />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}
      <button  onClick={addItemToBasket} className="button mt-auto">Add to Basket</button>
    </div>
  );
}

export default ProductCard;
