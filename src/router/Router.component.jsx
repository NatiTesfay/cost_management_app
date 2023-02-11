import { Route, Routes } from "react-router-dom";
import { Home, Dashboard, PageError, Dashboard2 , ContactPage} from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import OrdersProvider from "../context/OrdersProvider.component";
import UsersProvider from "../context/UsersProvider.component";
import ProductsProvider from "../context/ProductsProvider.component";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="dashboard"
        element={
          <OrdersProvider>
            <Dashboard />
          </OrdersProvider>
        }
      />
      <Route
        path="/dashboard2"
        element={
          <UsersProvider>
            <ProductsProvider>
              <Dashboard2 />
            </ProductsProvider>
          </UsersProvider>
        }
      />
      <Route path="contact" element={<ContactPage />} />

      <Route path="*" element={<PageError />} />
    </Routes>
  );
}
