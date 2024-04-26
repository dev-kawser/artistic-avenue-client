/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/ContextProvider";


const ProtectedRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <div>
            <span className="loading flex lg:h-[500px] justify-center items-center lg:mt-20 mx-auto loading-spinner loading-lg"></span>
        </div>
    }

    if (user) {
        return children
    }
    return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>
};

export default ProtectedRoute;