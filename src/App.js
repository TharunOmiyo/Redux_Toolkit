import logo from "./logo.svg";
import "./App.css";
import Product from "./components/product";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import DashBoard from "./components/DashBoard";
import RootLayout from "./components/RootLayout";
import Cart from "./components/cart";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<DashBoard />} />
        <Route path="/products" element={<Product />} />
        <Route path="/carts" element={<Cart />} />
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
