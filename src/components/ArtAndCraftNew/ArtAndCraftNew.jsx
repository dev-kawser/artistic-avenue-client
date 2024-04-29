import { useEffect, useState } from "react";
import NewCard from "./NewCard";
import { Typewriter } from "react-simple-typewriter";


const ArtAndCraftNew = () => {

    const [newData, setNewData] = useState([])

    useEffect(() => {
        fetch('https://art-and-craft-server-indol.vercel.app/allItem')
            .then(res => res.json())
            .then(data => {
                setNewData(data);
            })
    }, [])


    return (
        <>
            <h2 className="lg:text-5xl lg:hidden block text-3xl mt-20 font-bold text-center fira-sans dark:text-gray-900">Art &Craft Categories</h2>
            
            <div className="mt-20 lg:block hidden text-4xl text-center">
                <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                Art & Craft Categories:{' '}
                    <span style={{ color: 'red', fontWeight: 'bold' }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={['Landscape Painting', 'Portrait Drawing', 'Watercolour Painting', 'Charcoal Sketching!']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            // onLoopDone={handleDone}
                            // onType={handleType}
                        />
                    </span>
                </h1>
            </div>
            <div className="mt-10 grid lg:grid-cols-3 grid-cols-1 gap-8">
                {
                    newData.map(data => <NewCard key={data._id} data={data} ></NewCard>)
                }
            </div>
        </>
    );
};

export default ArtAndCraftNew;