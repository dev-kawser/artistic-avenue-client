

const AddCraftItem = () => {


    const handleAddItem = e => {
        e.preventDefault();
        const form = e.target;
        const item_name = form.item.value;
        const subcategory_Name = form.subcategory.value;
        const short_description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization_example = form.customization.value;
        const processing_time = form.processing.value;
        const user_name = form.username.value;
        const user_email = form.email.value;
        const stock_status = form.stock.value;
        const image_url = form.image.value;

        const addItemInfo = { item_name, subcategory_Name, short_description, price, rating, customization_example, processing_time, user_email, user_name, stock_status, image_url };
        console.log(addItemInfo);
    }
    return (
        <div>
            <section className="p-6 text-gray-900 mt-10">
                <form onSubmit={handleAddItem} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">Personal Inormation</p>
                            <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 text-black">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-sm">Item Name</label>
                                <input name="item" id="firstname" type="text" placeholder="Item Name" className="w-full text-black rounded-md focus:ring focus:ring-opacity-75  focus:ring-violet-600 border-gray-300 outline-slate-200 outline" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-sm">Subcategory Name</label>
                                <input name="subcategory" id="lastname" type="text" placeholder="Subcategory Name" className="w-full text-black rounded-md focus:ring focus:ring-opacity-75  focus:ring-violet-600 border-gray-300 outline-slate-200 outline" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">User Name</label>
                                <input name="username" id="email" type="email" placeholder="User Name" className="w-full rounded-md  focus:ring focus:ring-opacity-75 text-black focus:ring-violet-600 border-gray-300 outline-slate-200 outline" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">User Email</label>
                                <input name="email" id="email" type="email" placeholder="user Email" className="w-full rounded-md  focus:ring focus:ring-opacity-75 text-black focus:ring-violet-600 border-gray-300 outline-slate-200 outline" />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="address" className="text-sm">Short Description</label>
                                <input name="description" id="address" type="text" placeholder="" className="w-full rounded-md  focus:ring focus:ring-opacity-75 text-black focus:ring-violet-600 border-gray-300 outline-slate-200 outline" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="city" className="text-sm">Price</label>
                                <input name="price" id="city" type="text" placeholder="Price" className="w-full rounded-md focus:ring  focus:ring-opacity-75 text-black focus:ring-violet-600 border-gray-300 outline-slate-200 outline" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="state" className="text-sm">Rating</label>
                                <input name="rating" id="state" type="text" placeholder="Rating" className="w-full rounded-md focus:ring  focus:ring-opacity-75 text-black focus:ring-violet-600 border-gray-300 outline-slate-200 outline" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="zip" className="text-sm">Customization</label>
                                <input name="customization" id="zip" type="text" placeholder="Yes/ No" className="w-full rounded-md focus:ring  focus:ring-opacity-75 text-black focus:ring-violet-600 border-gray-300 outline-slate-200 outline" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="zip" className="text-sm">Processing Time</label>
                                <input name="processing" id="zip" type="text" placeholder="Processing Time" className="w-full rounded-md focus:ring  focus:ring-opacity-75 text-black focus:ring-violet-600 border-gray-300 outline-slate-200 outline" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="zip" className="text-sm">Stock Status</label>
                                <input name="stock" id="zip" type="text" placeholder="In stock/ Out of stock" className="w-full rounded-md focus:ring  focus:ring-opacity-75 text-black focus:ring-violet-600 border-gray-300 outline-slate-200 outline" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="zip" className="text-sm">Image</label>
                                <input name="image" id="zip" type="text" placeholder="Image url" className="w-full rounded-md focus:ring  focus:ring-opacity-75 text-black focus:ring-violet-600 border-gray-300 outline-slate-200 outline" />
                            </div>
                            <button type="submit" className="px-8 py-3 font-semibold rounded bg-gray-800 text-gray-100 hover:scale-105">Add Item</button>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default AddCraftItem;