import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { buyers } from "../data/buyers";
import PageNotFound from "./PageNotFound";

export default function Buyer() {
  const [buyer, setBuyer] = useState({});
  const buyerId = useParams();
  useEffect(() => {
    setBuyer(buyers.find((e) => String(e.id) === buyerId.buyerId));
  }, [buyerId]);
  if (!buyer) {
    return <PageNotFound />;
  }
  return (
    <div className="page buyer">
      <h1>
        {buyer.name} [ID:{buyer.id}]
      </h1>
      <p> Average check: {buyer.averageCheck}</p>
      <p> Number of purchases: {buyer.numberOfPurchases}</p>
      <p> Total revenues: {buyer.totalRevenues}</p>
    </div>
  );
}
