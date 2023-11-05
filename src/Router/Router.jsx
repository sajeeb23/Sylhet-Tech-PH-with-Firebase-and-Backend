import { createBrowserRouter } from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Home from "../Pages/Home";
import AddProduct from "../Pages/AddProduct";
import MyCart from "../Pages/MyCart";
import UpdateProducts from "../Components/UpdateProducts";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute";
import ProductDetails from "../Components/ProductDetails";
import BrandPage from "../Components/BrandPage";
import ErrorPage from "../Pages/ErrorPage";

const myRoute = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: ()=> fetch('https://assignment-10-server-giry0xffb-sjb.vercel.app/products')
            
        },
        {
            path: '/brandpage/:brandname',
            element: <BrandPage></BrandPage>,
            loader: ({params})=> fetch(`https://assignment-10-server-giry0xffb-sjb.vercel.app/product/${params.brandname}`)
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
            loader: ({params})=> fetch(`https://assignment-10-server-giry0xffb-sjb.vercel.app/products/${params.id}`)
        },
        {
            path: '/productDetails/:id',
            element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
            loader: ({params})=> fetch(`https://assignment-10-server-giry0xffb-sjb.vercel.app/products/${params.id}`)
        }
    ]
    }
])

export default myRoute;