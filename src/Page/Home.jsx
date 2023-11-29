import { Helmet } from "react-helmet";
import Banner from "./Banner";
import CardSection from "./CardSection";
import ContactUs from "./ContactUs";
import FeaturedSection from "./FeaturedSection ";


const Home = () => {
    
    return (
        <div>
            <Helmet>
                <title>Blood Donation</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <Banner></Banner>
            <CardSection></CardSection>
            <FeaturedSection></FeaturedSection>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;