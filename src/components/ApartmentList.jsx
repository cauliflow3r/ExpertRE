import React, { useEffect, useState } from "react";
import { useProducts } from "../contexts/ProductContextProvider";

const ApartmentList = () => {
  const { products, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const count = Math.ceil(products?.length / itemsPerPage);

  const handleChange = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  }

  return <div></div>;
};

export default ApartmentList;
