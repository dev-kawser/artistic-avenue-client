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
                setOriginalData(data);
            });
    }, [user]);

    const filterByValue = (value) => {
        const filteredData = originalData.filter((item) => item.customization_example === value);
        setMyItem(filteredData);
    };

    const handleAllData = () => {
        setMyItem(originalData)
    }


    return (
        <>

            <div className="flex justify-center items-center">
                <details className="dropdown mt-10">
                    <summary className="m-1 btn btn-outline px-10">Filter</summary>
                    <ul className="p-2 block shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li>
                            <button onClick={handleAllData}>All</button>
                        </li>
                        <li>
                            <button onClick={() => filterByValue('yes')}>Yes</button>
                        </li>
                        <li>
                            <button onClick={() => filterByValue('no')}>No</button>
                        </li>
                    </ul>
                </details>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 p-1 container mx-auto mt-10 gap-5">
                {myItem.map(item => <MyCard key={item._id} item={item} />)}
            </div>
        </>
    );
};

export default MyArtAndCraft;
