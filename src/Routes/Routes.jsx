import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistic from "../Pages/Statistic/Statistic";



const Routes = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout></MainLayout>,
        children : [
            {
                path : "/",
                element : <Home></Home>,
                loader : ()=> fetch('./donation.json')
                
            },
            {
                path : "/donation",
                element : <Donation></Donation>
            },
            {
                path : "/statistic",
                element : <Statistic></Statistic>
            }
        ]
    }
])
export default Routes;