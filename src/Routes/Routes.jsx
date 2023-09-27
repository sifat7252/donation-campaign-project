import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistic from "../Pages/Statistic/Statistic";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Card from "../Pages/Card/Card";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("./donation.json"),
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistic",
        element: <Statistic></Statistic>,
      },
      {
        path : "/cards/:id",
        element : <Card></Card>,
        loader: () => fetch("./donation.json"),
      },
    ],
  },
]);
export default Routes;
