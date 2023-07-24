import Gallery from "../../../components/Gallery/Gallery";
import Research from "../../../components/Research/Research";
import Banner from "../Banner/Banner";
import CollegesSection from "../CollegesSection/CollegesSection";
import RatingSection from "../RatingSection/RatingSection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CollegesSection></CollegesSection>
            <Gallery></Gallery>
            <Research></Research>
            <RatingSection></RatingSection>
        </div>
    );
};

export default Home;