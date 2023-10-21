import { createBrowserRouter } from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Home from "../Pages/Home";
import AddProduct from "../Pages/AddProduct";
import MyCart from "../Pages/MyCart";
import UpdateProducts from "../Components/UpdateProducts";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute";

const myRoute = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: ()=> fetch('http://localhost:5000/products')
            
        },

        {
            path: '/addproduct',
            element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
        },

        {
            path:'/mycart',
            element:<PrivateRoute><MyCart></MyCart></PrivateRoute>
        },

        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path : '/login',
            element: <Login></Login>
        },
        
        {
            path: '/updateProducts/:id',
            element: <PrivateRoute><UpdateProducts></UpdateProducts></PrivateRoute>,
            loader: ({params})=> fetch(`http://localhost:5000/products/${params.id}`)
        }
    ]
    }
])

export default myRoute;