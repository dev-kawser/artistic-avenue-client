import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/HTBtMqJ/err.webp)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div>
                    <section className="flex items-center h-full sm:p-16">
                        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
                            <p className="text-4xl font-bold text-white">Sorry, we unable to find this page</p>
                            <Link to="/" rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Back to homepage</Link>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;