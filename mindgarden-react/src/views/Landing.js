import CoreBar from "../components/CoreBar";
import LandingHero from "../components/Landing/Hero";
import AboutHero from "../components/Landing/About";
import ContactHero from "../components/Landing/Contact";
import CoreFooter from "../components/CoreFooter";

function Landing(){
    return (
        <>
            <CoreBar />
            <LandingHero />
            <AboutHero />
            <ContactHero />
            <CoreFooter />
        </>
    );
}

export default Landing;