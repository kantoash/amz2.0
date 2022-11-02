import { useSession } from "next-auth/react";
import React from "react";
import { useSelector } from "react-redux";
import CheckOutProduct from "../components/CheckOutProduct";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
import { selectItems } from "../slices/basketSlice";
import { Product } from "../typing";
import CheckOut from "./CheckOut";

function Orders() {
  const items = useSelector(selectItems);
  const { data: session } = useSession();
  console.log(items);

  return (
    <div>
      <Header />
      <main className="max-w-screen-lg mx-auto p-10 ">
        <h1 className="text-3xl mb-5 pb-2 border-b border-yellow-400">
          Your Order
        </h1>

        {session ? (
          <h2>x Orders</h2>
        ) : (
          <h2>Please Sign In to See your Orders</h2>
        )}
        <div className="mt-5 space-y-4 ">
          {items?.map((item: Product, i: number) => (
            <CheckOutProduct
              key={i}
              id={item.id}
              category={item.category}
              description={item.description}
              image={item.image}
              price={item.price}
              rating={item.rating}
              title={item.title} 
              
              />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Orders;
