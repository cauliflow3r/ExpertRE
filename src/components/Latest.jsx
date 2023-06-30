import React from "react";
import ApartmentItem from "./ApartmentItem";
import { Link } from "react-router-dom";
import { margin } from "@mui/system";

const Latest = () => {
  return (
    <div style={{ width: "100%", justifyContent: "center" }}>
      <div
        style={{
          marginTop: 100,
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "blue",
        }}
      >
        <h2 style={{}}>Cвежие объявления</h2>
        <Link to="/products">
          <button>Посмотреть всё</button>
        </Link>
      </div>
      <ApartmentItem />
    </div>
  );
};

export default Latest;
