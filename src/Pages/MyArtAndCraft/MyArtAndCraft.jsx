import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/ContextProvider";
import MyCard from "../../components/MyCard/MyCard";


const MyArtAndCraft = () => {

    const { user } = useContext(AuthContext);
    const [myItem, setMyItem] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/myArt/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setMyItem(data);
        })
    }, [user])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 p-1 container mx-auto mt-10 gap-5">
            {
                myItem.map(item => <MyCard key={item._id} item={item} ></MyCard> )
            }
        </div>
    );
};

export default MyArtAndCraft;