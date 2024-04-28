import { useLoaderData } from "react-router-dom";
import CategoryCard from "../CategoryCard/CategoryCard";



const ArtCraftCategory = () => {

    const artCategory = useLoaderData()

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 p-1 container mx-auto mt-10 gap-5">
            {

                artCategory.map(ac => <CategoryCard key={ac._id} ac={ac} ></CategoryCard>)
            }
        </div>
    );
};

export default ArtCraftCategory;