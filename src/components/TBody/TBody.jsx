/* eslint-disable react/prop-types */


const TBody = ({ art }) => {

    return (
        <tbody>
            <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                <td className="p-3">
                    <p>{art?.item_name}</p>
                </td>
                <td className="p-3">
                    <p>{art?.subcategory_Name}</p>
                </td>
                <td className="p-3">
                    <p className="dark:text-gray-600">{art?.
                        processing_time}</p>
                </td>
                <td className="p-3">
                    <p className="dark:text-gray-600">{art?.
                        user_email}</p>
                </td>
                <td className="p-3 text-right">
                    <p>{art?.price}</p>
                </td>
                <td className="p-3 text-right">
                    <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                        <span><button>Details</button></span>
                    </span>
                </td>
            </tr>
        </tbody>
    );
};

export default TBody;