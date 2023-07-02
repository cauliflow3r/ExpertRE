import React, { useEffect, useState } from "react";
import { useProducts } from "../contexts/ProductContextProvider";
import ApartmentItem from "./ApartmentItem";

const ApartmentList = () => {
  const { products, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  const [page, setPage] = useState(1);
  const itemsPerPage = 12;
  const count = Math.ceil(products?.length / itemsPerPage);

  const handleChange = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  }

  return (
    <div>
      {currentData().map((product) => (
        <ApartmentItem key={product.id} product={product} />
      ))}
      {/* Pagination UI */}
      <div>
        <ul>
          {Array.from({ length: count }, (_, index) => (
            <li
              key={index + 1}
              onClick={(e) => handleChange(e, index + 1)}
              style={{
                cursor: "pointer",
                display: "inline-block",
                margin: "0.5rem",
              }}
            >
              {index + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ApartmentList;
