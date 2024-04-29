import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Banner } from "../components/Banner";
import { Product } from "../components/Product";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    setProducts(data.data)
  }, [data]);

  // console.log(data.data);
  return (
    <div>
      <Banner />
      <Product products={products} />
    </div>
  );
};
