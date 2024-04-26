

import ArtWork from "../../components/ArtWork/ArtWork";
import Contact from "../../components/Contact/Contact";
import Slide from "../../components/Slider/Slide";


const Home = () => {
    return (
        <div className="container mx-auto">
            <Slide></Slide>
            <ArtWork></ArtWork>
            <Contact></Contact>
        </div>
    );
};

export default Home;