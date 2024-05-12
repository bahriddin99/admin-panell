import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import { Main, Category, Products, Workers, LoginIn } from "../pages";

const Root = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<LoginIn />} />
        <Route path="/main/*" element={<Main />}>
          <Route index element={<Workers />} />
          <Route path="category" element={<Category />} />
          <Route path="product" element={<Products />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
export default Root;
