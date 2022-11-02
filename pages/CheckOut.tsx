import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import CheckOutProduct from "../components/CheckOutProduct";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slices/basketSlice";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function CheckOut() {
  const items = useSelector(selectItems);
  const { data: session } = useSession();
  const total = useSelector(selectTotal);
  const router = useRouter();
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto ">
        {/* left */}
        <div className="flex-grow m-5 shadow-md ">
          <Image
            src={"https://links.papareact.com/ikj"}
            width={1020}
            height={250}
            alt={""}
          />
          <div className="flex-col flex-grow p-5 space-y-10  bg-white ">
            <div>
              <h1 className="text-3xl border-b pb-4 whitespace-nowrap">
                {items.length === 0
                  ? "Your Amazon Basket is empty"
                  : "Shopping Basket"}
              </h1>
            </div>
            {items.map((item: any, i: any) => (
              <CheckOutProduct
                key={i}
                id={item.id}
                title={item.title}
                category={item.category}
                description={item.description}
                image={item.image}
                price={item.price}
                rating={item.rating}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col bg-white p-10 shadow-md">
         {items.length > 0 && (
          <>
            <h2 className="whitespace-nowrap">
              Subtotal ({items.length} items): {" "}
              <span>
                <Currency quantity={total} currency="GBP"/>
              </span>
            </h2>
            <button 
            onClick={() => router.push('/success')}
            disabled={!session} className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed '}`}>
              {!session ? "Sign in to checkout" : "Proceed to checkout"}
            </button>
          </>
         )}
        </div>
      </main>
    </div>
  );
}

export default CheckOut;
