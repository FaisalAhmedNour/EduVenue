import Gallery from "../../../components/Gallery/Gallery";
import Research from "../../../components/Research/Research";
import Banner from "../Banner/Banner";
import CollegesSection from "../CollegesSection/CollegesSection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CollegesSection></CollegesSection>
            <Gallery></Gallery>
            <Research></Research>
        </div>
    );
};

export default Home;