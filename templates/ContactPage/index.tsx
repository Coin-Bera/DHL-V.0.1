import { useRef } from "react";
import Layout from "@/components/Layout";
import Main from "./Main";
import Details from "./Details";
import Reviews from "@/components/Reviews";
import JoinCommunity from "@/components/JoinCommunity";

import { reviews } from "@/mocks/reviews";
import LogoMarquee from "@/components/LogoMarquee";

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

const ContactPage = () => {
    const scrollToRef = useRef(null);

    return (
        <Layout>
            <Main scrollToRef={scrollToRef} />
            <Details scrollToRef={scrollToRef} />
            <div style={{ padding: '200px 0', backgroundColor: '#362535' }}>
                <LogoMarquee logos={logos} />
            </div>
            <JoinCommunity title="Want to get involved?" />
        </Layout>
    );
};

export default ContactPage;
