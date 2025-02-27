import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ArtAndCraft from "../Pages/Art And Craft/ArtAndCraft";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import AddCraftItem from "../Pages/AddCraftItem/AddCraftItem";
import MyArtAndCraft from "../Pages/MyArtAndCraft/MyArtAndCraft";
import DetailsItem from "../components/DetailsItem/DetailsItem";
import UpdateArt from "../Pages/UpdateArt/UpdateArt";
import ArtCraftCategory from "../components/ArtCraftCategory/ArtCraftCategory";
import Error from "../Pages/ErrorPage/Error";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://art-and-craft-server-indol.vercel.app/newItem')
            },
            {
                path: "/all-art-craft",
                element: <ArtAndCraft></ArtAndCraft>,
                loader: () => fetch('https://art-and-craft-server-indol.vercel.app/newItem')
            },
            {
                path: "/artItem/:id",
                element: <ProtectedRoute>
                    <DetailsItem></DetailsItem>
                </ProtectedRoute>,
                loader: ({ params }) => fetch(`https://art-and-craft-server-indol.vercel.app/newItem/${params.id}`)
            },
            {
                path: "/updateArt/:id",
                element: <ProtectedRoute>
                    <UpdateArt></UpdateArt>
                </ProtectedRoute>,
                loader: ({ params }) => fetch(`https://art-and-craft-server-indol.vercel.app/newItem/${params.id}`)
            },
            {
                path: "/artCategory/:subcategory_Name",
                element: <ArtCraftCategory></ArtCraftCategory>,
                loader: ({ params }) => fetch(`https://art-and-craft-server-indol.vercel.app/artItem/${params.subcategory_Name}`)
            },
            {
                path: "/add-craft-item",
                element: <ProtectedRoute>
                    <AddCraftItem></AddCraftItem>
                </ProtectedRoute>,
            },
            {
                path: "/my-art-and-craft-list",
                element: <ProtectedRoute>
                    <MyArtAndCraft></MyArtAndCraft>
                </ProtectedRoute>,
            },
            {
                path: "/artCategory/:subcategory_Name",
                element: <MyArtAndCraft></MyArtAndCraft>
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
        ]
    },
]);

export default router;