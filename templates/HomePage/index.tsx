import { useRef } from "react";
import Layout from "@/components/Layout";
import Main from "./Main";
import Development from "./Development";
import AboutUs from "./AboutUs";
import Statistics from "./Statistics";
// import Solutions from "./Solutions";
// import Posts from "@/components/Posts";
// import Reviews from "@/components/Reviews";
import JoinCommunity from "@/components/JoinCommunity";
import LogoMarquee from "@/components/LogoMarquee"; // Import the LogoMarquee component
// import { posts } from "@/mocks/posts";
// import { reviews } from "@/mocks/reviews";

const HomePage = () => {
    const scrollToRef = useRef(null);

    // Define your logos here
    const logos = [
        "/images/coinbase.png",
        "/images/okx.png",
        "/images/shima.png",
        "/images/polychain.png",
        "/images/delphi.svg",
        "/images/sequoia.png",
        "/images/steelperlot.png",
        "/images/tribe.svg",
        // Add more logo paths here
    ];

    return (
        <Layout>
            <Main scrollToRef={scrollToRef} />
            <Statistics />
            <Development scrollToRef={scrollToRef} />
            <AboutUs />
            {/* <Solutions /> */}
            {/* <Posts
                className="section"
                title="Your gateway to everything Dev House Labs."
                info="Stay current on the latest Dev House Labs project developments, news, and content, updated daily."
                posts={posts}
            /> */}
            {/* <Reviews reviews={reviews} /> */}
            <div style={{ padding: '200px 0' }}>
                <LogoMarquee logos={logos} />
            </div>
            <JoinCommunity title="We're Hiring!" />
        </Layout>
    );
};

export default HomePage;
