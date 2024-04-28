import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/ContextProvider";
import MyCard from "../../components/MyCard/MyCard";

const MyArtAndCraft = () => {
    const { user } = useContext(AuthContext);
    const [myItem, setMyItem] = useState([]);
    const [originalData, setOriginalData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myArt/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyItem(data);
                setOriginalData(data); // Store original data
            });
    }, [user]);

    const filterByValue = (value) => {
        const filteredData = originalData.filter((item) => item.customization_example === value);
        setMyItem(filteredData); // Update myItem with filtered data
    };

    const handleAllData = () => {
        setMyItem(originalData)
    }

    return (
        <>
            <div className="flex justify-center items-center mt-10">
                <button onClick={handleAllData}>Filter All</button>
                <button onClick={() => filterByValue('yes')}>Filter Yes</button>
                <button onClick={() => filterByValue('no')}>Filter No</button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 p-1 container mx-auto mt-10 gap-5">
                {myItem.map(item => <MyCard key={item._id} item={item} />)}
            </div>
        </>
    );
};

export default MyArtAndCraft;
