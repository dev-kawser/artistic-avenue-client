import { useEffect, useState } from "react";
import NewCard from "./NewCard";


const ArtAndCraftNew = () => {

    const [newData, setNewData] = useState([])

    useEffect(() => {
        fetch('https://art-and-craft-server-indol.vercel.app/allItem')
            .then(res => res.json())
            .then(data => {
                setNewData(data);
            })
    }, [])


    return (
        <>
            <h2 className="lg:text-5xl text-3xl mt-20 font-bold text-center fira-sans dark:text-gray-900">Art &Craft Categories</h2>
            
            <div className="mt-10 grid lg:grid-cols-3 grid-cols-1 gap-8">
                {
                    newData.map(data => <NewCard key={data._id} data={data} ></NewCard>)
                }
            </div>
        </>
    );
};

export default ArtAndCraftNew;