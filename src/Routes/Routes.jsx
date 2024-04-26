import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ArtAndCraft from "../Pages/Art And Craft/ArtAndCraft";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import AddCraftItem from "../Pages/AddCraftItem/AddCraftItem";
import MyArtAndCraft from "../Pages/MyArtAndCraft/MyArtAndCraft";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/data.json'),
            },
            {
                path: "/all-art-craft",
                element: <ArtAndCraft></ArtAndCraft>,
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