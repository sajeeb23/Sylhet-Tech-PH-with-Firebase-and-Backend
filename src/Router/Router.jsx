import { createBrowserRouter } from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Home from "../Pages/Home";
import AddProduct from "../Pages/AddProduct";
import MyCart from "../Pages/MyCart";
import UpdateProducts from "../Components/UpdateProducts";
import SignUp from "../Pages/SignUp";

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
            element: <AddProduct></AddProduct>
        },

        {
            path:'/mycart',
            element:<MyCart></MyCart>
        },

        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        
        {
            path: '/updateProducts/:id',
            element: <UpdateProducts></UpdateProducts>,
            loader: ({params})=> fetch(`http://localhost:5000/products/${params.id}`)
        }
    ]
    }
])

export default myRoute;