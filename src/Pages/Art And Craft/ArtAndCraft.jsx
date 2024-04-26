import { useLoaderData } from "react-router-dom";


const ArtAndCraft = () => {

    const allArt = useLoaderData()

    return (
        <div>
            <h1>{allArt.length}</h1>
        </div>
    );
};

export default ArtAndCraft;