import { useContext, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/ContextProvider";
import Swal from "sweetalert2";


const UpdateArt = () => {

    const { user } = useContext(AuthContext);
    const updateArt = useLoaderData();

    const [selectedCustomizationUpdateOption, setSelectedCustomizationUpdateOption] = useState('');
    const [selectedStockOption, setSelectedStockOption] = useState('');
    const [selectedSubUpdateOption, setSubcategoryOption] = useState('');

    const handleCustomizationSelectChange = (event) => {
        setSelectedCustomizationUpdateOption(event.target.value);
    };

    const handleStockSelectChange = (event) => {
        setSelectedStockOption(event.target.value);
    };

    const handleSubSelectChange = (event) => {
        setSubcategoryOption(event.target.value);
    };

    const { item_name, short_description, price, rating, image_url, processing_time, _id } = updateArt;
    const handleUpdateItem = e => {
        e.preventDefault();
        const form = e.target;
        const item_name = form.item.value;
        const subcategory_Name = selectedSubUpdateOption;
        const short_description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization_example = selectedCustomizationUpdateOption;
        const processing_time = form.processing.value;
        const user_name = user.displayName;
        const user_email = user.email;
        const stock_status = selectedStockOption;
        const image_url = form.image.value;

        const updateItemInfo = { item_name, subcategory_Name, short_description, price, rating, customization_example, processing_time, user_email, user_name, stock_status, image_url };

        fetch(`https://art-and-craft-server-indol.vercel.app/newItem/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateItemInfo)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Data Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Next'
                    })
                }
            })

    }

    return (
        <div>
            <section className="p-6 text-gray-900 mt-10">
                <form onSubmit={handleUpdateItem} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-10 rounded-md shadow-sm bg-gray-100">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium text-gray-900 text-xl">Update Your Information</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 text-black">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-sm">Item Name</label>
                                <input name="item" id="firstname" type="text" defaultValue={item_name} className="w-full text-black rounded-md focus:ring focus:ring-opacity-75  focus:ring-violet-600 border-gray-300 outline-slate-200 outline" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="state" className="text-sm">Subcategory</label>
                                <select value={selectedSubUpdateOption} onChange={handleSubSelectChange} className="outline-slate-200 outline">
                                    <option value="" className="p-1">Select</option>
                                    <option value="Landscape Painting" className="p-1">Landscape Painting</option>
                                    <option value="Portrait Drawing" className="p-1">Portrait Drawing</option>
                                    <option value="Watercolour Painting" className="p-1">Watercolour Painting</option>
                                    <option value="Oil Painting" className="p-1">Oil Painting</option>
                                    <option value="Charcoal Sketching" className="p-1">Charcoal Sketching</option>
                                    <option value="Cartoon Drawing" className="p-1">Cartoon Drawing</option>
                                </select>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">User Name</label>
                                <input name="username" disabled id="email" type="email" className="w-full rounded-md  focus:ring focus:ring-opacity-75 text-black focus:ring-violet-600 border-gray-300 outline-slate-200 outline" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">User Email</label>
                                <input name="email" disabled id="email" type="email" className="w-full rounded-md  focus:ring focus:ring-opacity-75 text-black focus:ring-violet-600 border-gray-300 outline-slate-200 outline" />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="address" className="text-sm">Short Description</label>
                                <input name="description" id="address" type="text" defaultValue={short_description} className="w-full rounded-md  focus:ring focus:ring-opacity-75 text-black focus:ring-violet-600 border-gray-300 outline-slate-200 outline" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="city" className="text-sm">Price</label>
                                <input name="price" id="city" type="text" defaultValue={price} className="w-full rounded-md focus:ring  focus:ring-opacity-75 text-black focus:ring-violet-600 border-gray-300 outline-slate-200 outline" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="state" className="text-sm">Rating</label>
                                <input name="rating" id="state" type="text" defaultValue={rating} className="w-full rounded-md focus:ring  focus:ring-opacity-75 text-black focus:ring-violet-600 border-gray-300 outline-slate-200 outline" />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="state" className="text-sm">Customization</label>
                                <select value={selectedCustomizationUpdateOption} onChange={handleCustomizationSelectChange} className="outline-slate-200 outline">
                                    <option value="" className="p-1">Select</option>
                                    <option value="yes" className="p-1">Yes</option>
                                    <option value="no" className="p-1">No</option>
                                </select>
                            </div>

                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="zip" className="text-sm">Processing Time</label>
                                <input name="processing" id="zip" type="text" defaultValue={processing_time} className="w-full rounded-md focus:ring  focus:ring-opacity-75 text-black focus:ring-violet-600 border-gray-300 outline-slate-200 outline" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="state" className="text-sm">Stock Status</label>
                                <select value={selectedStockOption} onChange={handleStockSelectChange} className="outline-slate-200 outline">
                                    <option value="" className="p-1">Select</option>
                                    <option value="in stock" className="p-1">In Stock</option>
                                    <option value="out of stock" className="p-1">Out of stock</option>
                                </select>
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="zip" className="text-sm">Image</label>
                                <input name="image" id="zip" type="url" defaultValue={image_url} className="w-full rounded-md focus:ring  focus:ring-opacity-75 text-black focus:ring-violet-600 border-gray-300 outline-slate-200 outline" />
                            </div>
                            <div className="lg:flex hidden">
                                <button type="submit" className="px-8 py-3 font-semibold rounded dark:bg-gray-800 dark:text-gray-100 hover:scale-105 transition-all">Update Item</button>
                            </div>
                            <div className="lg:hidden flex">
                                <button type="submit" className="btn btn-circle btn-outline">
                                    <FaArrowRight />
                                </button>
                            </div>
                        </div>

                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default UpdateArt;