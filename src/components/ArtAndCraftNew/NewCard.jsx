/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const NewCard = ({ data }) => {

    const { image, subcategory_Name, short_description } = data;

    return (
        <Link to={`/artCategory/${subcategory_Name}`} >
            <div className="rounded-md p-1 shadow-md dark:bg-gray-50 dark:text-gray-800">
                <img data-aos="flip-up" src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{subcategory_Name}</h2>
                        <p className="dark:text-gray-800">{short_description}</p>
                    </div>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Read More</button>
                </div>
            </div>
        </Link>
    );
};

export default NewCard;