import { Route, Routes } from "react-router-dom";
import { Home, Dashboard, PageError } from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductsProvider from "../context/ProductsProvider.component";
import OrdersProvider from "../context/OrdersProvider.component";

export default function Router() {
  return (
    <Routes>
      <Route path="/" 
      element={
        <ProductsProvider>
          <OrdersProvider>
            <Dashboard />
          </OrdersProvider>
        </ProductsProvider>
      }
      />

      <Route
        path="/home"
        element={
          <Home />
        }
      />

      <Route path="*" element={<PageError />} />
    </Routes>
  );
}
