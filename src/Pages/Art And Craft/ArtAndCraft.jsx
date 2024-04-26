import { useLoaderData } from "react-router-dom";
import TBody from "../../components/TBody/TBody";


const ArtAndCraft = () => {

    const allArt = useLoaderData()

    return (
        <div>
            <div className="container mt-5 p-2 mx-auto sm:p-4 dark:text-gray-800">
                <h2 className="mb-4 text-2xl font-bold leading-tight fira-sans">All Art And Craft</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className="dark:bg-gray-300">
                            <tr className="text-left">
                                <th className="p-3">Item Name</th>
                                <th className="p-3">Subcategory Name</th>
                                <th className="p-3">Processing Time</th>
                                <th className="p-3">User Email</th>
                                <th className="p-3 text-right">Price</th>
                                <th className="p-3"></th>
                            </tr>
                        </thead>
                        {
                            allArt.map(art => <TBody key={art._id} art={art}></TBody> )
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ArtAndCraft;