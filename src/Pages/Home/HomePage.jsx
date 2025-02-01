import FeatureProject from "./FeatureProject/FeatureProject";
import Hero from "./Hero/Hero";

const HomePage = () => {
    return (
        <div>
            <div className="bg-gray-100">
            <Hero />
            <div className="border-b border-gray-200 my-5"></div>
        <FeatureProject />
            </div>
        </div>
    );
};

export default HomePage;