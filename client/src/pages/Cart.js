import React from "react";
import { CartItem } from "../components/CartItem";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import axios from "axios";
let token = {
  id: "tok_1FlM3yDbZnUGiCm0LMM4gqzs",
  object: "token",
};
export const Cart = () => {
  //
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);

  const [totalAmt, setTotalAmt] = useState("");
  const [payNow, setPayNow] = useState(false);

  const payment = async (token) => {
    console.log(token);
    await axios.post("http://localhost:8000/pay", {
      amount: totalAmt * 100,
      token: token,
    });
  };

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);
  const handleCheckOut = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("please Login");
    }
  };
  return (
    <div>
      <img
        className="w-full h-60 object-cover"
        src="https://images.pexels.com/photos/7875215/pexels-photo-7875215.jpeg?auto=compress&cs=tinysrgb&w=150&lazy=load%20150w,%20https://images.pexels.com/photos/7875215/pexels-photo-7875215.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load%20300w,%20https://images.pexels.com/photos/7875215/pexels-photo-7875215.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load%20400w,%20https://images.pexels.com/photos/7875215/pexels-photo-7875215.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load%20600w,%20https://images.pexels.com/photos/7875215/pexels-photo-7875215.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load%20800w,%20https://images.pexels.com/photos/7875215/pexels-photo-7875215.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load%201200w,%20https://images.pexels.com/photos/7875215/pexels-photo-7875215.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load%201600w"
        alt=""
      />
      <div className="max-w-screen-xl mx-auto py-20 flex">
        <CartItem />
        <div className="w-1/3 bg-[#fafafa] py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium ">Cat Total</h2>
            <p className="felx items-center gap-4 text-base">
              subTotal{"  "}
              <span className="font-titleFont font-bold text-lg">
                $ {totalAmt}
              </span>
            </p>
            <p className="flex items-start gap-4 text-base">
              Shipping{" "}
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex,
                perspiciatis!
              </span>
            </p>
          </div>
          <p>
            Total <span className="text-xl font-bold">$ {totalAmt}</span>
          </p>
          <button
            onClick={handleCheckOut}
            className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-150"
          >
            proceed to checkout{" "}
          </button>
          {payNow && (
            <div className="w-full  mt-6 flex items-center justify-center">
              <StripeCheckout
                stripeKey="pk_live_51PAUzRSIKUHfiuD3TQiWqiTXSocIQ3eToVEL8jE8FYSgs5vKFC67zTjvJZoiFadS9P2RUjEfKfcRb2IFeoXMXVXR00GSkNN5eq"
                name="Exitron"
                label="pay to Exitron"
                amount={totalAmt * 100} // cents
                token={payment(token)}
                description={`Your Payment Amount is${totalAmt}`}
                email={userInfo.email}
              />
            </div>
          )}
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoclose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
