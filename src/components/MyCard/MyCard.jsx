/* eslint-disable react/prop-types */


const MyCard = ({ item }) => {

    console.log(item);

    const { item_name, price, rating, customization_example, stock_status, image_url } = item;


    return (
        <div className="card card-side bg-base-100 shadow-xl space-y-3">
            <figure>
                <img className="w-[250px] h-[270px]" src={image_url} alt="loading" />
            </figure>
            <div className="card-body">
                <h2 className="card-title lg:flex hidden">Item Name: <span className="font-bold">{item_name}</span></h2>
                <h2 className="card-title lg:hidden flex font-bold">{item_name}</h2>
                <div className="flex lg:flex-row flex-col gap-3">
                    <h4 className="font-medium">Price: <span className="text-red-600 font-bold">{price}</span></h4>
                    <h4 className="font-medium">Rating: <span className="text-yellow-500 font-bold">{rating}</span></h4>
                </div>
                <div>
                    <p className="font-semibold">Customization - {customization_example}</p>
                    <p className="font-semibold">Stock - {stock_status}.</p>
                </div>
                <div className="card-actions justify-end mt-5">
                    <button type="button" className="px-8 py-3 font-semibold border rounded dark:border-gray-800 dark:text-gray-800 lg:flex hidden hover:scale-105 transition-all">Update</button>
                    <button type="button" className="px-8 py-3 font-semibold rounded dark:bg-red-600 dark:text-gray-100 hover:scale-105 transition-all">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyCard;