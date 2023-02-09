import { Route, Routes } from "react-router-dom";
import { Home, Dashboard, PageError } from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductsProvider from "../context/ProductsProvider.component";
import OrdersProvider from "../context/OrdersProvider.component";
import UsersProvider from "../context/UsersProvider.component";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="dashboard"
        element={
          <ProductsProvider>
            <OrdersProvider>
              <UsersProvider>
                <Dashboard />
              </UsersProvider>
            </OrdersProvider>
          </ProductsProvider>
        }
      />

      <Route path="*" element={<PageError />} />
    </Routes>
  );
}
