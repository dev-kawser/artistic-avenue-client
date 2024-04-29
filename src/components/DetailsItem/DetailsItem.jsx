import { Link, useLoaderData } from "react-router-dom";


const DetailsItem = () => {

    const singleArt = useLoaderData();
    

    const { item_name, subcategory_Name, short_description, price, rating, customization_example, processing_time, user_email, user_name, stock_status, image_url } = singleArt;

    return (
        <div>
            <div className="flex p-7 rounded-md lg:flex-row bg-slate-100 mt-5 lg:mt-10 flex-col gap-12 container mx-auto ">
                <div className="flex items-center justify-center">
                    <img className="lg:h-[600px] rounded-xl" src={image_url} alt="" />
                </div>
                <div>
                    <div className="space-y-3">
                        <h2 className="card-title text-4xl text-emerald-500 font-bold mt-5">{item_name}</h2>
                        <p className="font-semibold text-xl">Subcategory Name: {subcategory_Name}</p>
                    </div>
                    <div className="mt-5 space-y-3">
                        <p className="text-sm">{short_description}</p>
                        <h4 className="font-medium">Rating: <span className="text-yellow-500 font-bold">{rating}</span></h4>
                    </div>
                    <div className="flex flex-col lg:flex-row mt-5 gap-10">
                        <h4 className="font-medium">Price: <span className="text-red-400 font-bold">{price}</span></h4>
                        <h4 className="font-medium">Stock: {stock_status}</h4>
                    </div>
                    <div className="mt-5 space-y-3">
                        <h3 className="text-lg font-semibold">Processing Time: {processing_time}</h3>
                        <h3 className="text-lg font-semibold">Customization: {customization_example}</h3>
                    </div>
                    <div className="lg:items-end flex flex-col lg:flex-row gap-3 mt-5">
                        <h3 className="border-4 p-1 rounded-md border-blue-500">{user_name}</h3>
                        <h3 className="border-4 p-1 rounded-md border-red-500">{user_email || "Email not fund"}</h3>
                    </div>
                    <div className="mt-7">
                        <Link to="/all-art-craft">
                            <button className="btn btn-info w-full">Go Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsItem;