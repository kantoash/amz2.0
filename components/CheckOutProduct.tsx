import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Currency from "react-currency-formatter";
import React from "react";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

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
  hasPrime: boolean;
}

function CheckOutProduct({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
  hasPrime,
}: props) {
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
  };
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }))
  }
  return (
    <div className="grid grid-cols-5 justify-between">
      <Image src={image} height={200} width={200} alt={""} />
      {/* Middle  */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(Math.floor(rating.rate))
            .fill("")
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <div className="mb-5">
          <Currency quantity={price} currency="GBP" />
        </div>
        {hasPrime && (
          <div className="flex items-center space-x-2 -mt-5">
            <img
              src="https://links.papareact.com/fdw"
              alt=""
              className="w-12"
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      <div className=" flex-col space-y-3 my-auto justify-self-end">
        <button onClick={addItemToBasket} className=" button rounded-lg ">Add to Basket</button>
        <button onClick={removeItemFromBasket} className="button rounded-lg">Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckOutProduct;
