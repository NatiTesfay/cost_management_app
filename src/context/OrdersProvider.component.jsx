import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { getAllOrders } from "../service/orders-rest";

export const ordersContext = createContext();

export default function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getAllOrders().then((res) => setOrders(res?.orders));
  }, []);

  return (
    <ordersContext.Provider value={{ orders, setOrders }}>
      {children}
    </ordersContext.Provider>
  );
}