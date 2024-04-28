import { useLoaderData } from "react-router-dom";
import ArtCard from "./ArtCard";


const ArtSection = () => {
    const artData = useLoaderData()
    // console.log(artData);

    return (
        <div className="mt-20">
            <h2 className="text-5xl font-bold text-center fira-sans dark:text-gray-900">Craft Items</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 p-1 container mx-auto mt-10 gap-5">
                {
                    artData.map((data) => <ArtCard key={data._id} data={data}></ArtCard>)
                }
            </div>
        </div>
    );
};

export default ArtSection;