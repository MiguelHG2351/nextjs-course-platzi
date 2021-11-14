import React, { useState, useEffect } from "react";
import Navbar from "components/Navbar/Navbar";

const HomePage = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const data = fetch("/api/avo");
    data
      .then((res) => res.json())
      .then(({ data, length }) => setProductList(data));
  }, []);

  return (
    <div>
      <Navbar />
      <div>Platzi and Next.js!</div>
      {productList.map((product) => (
        <div key={product?.id}>
          <h1>{product?.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
