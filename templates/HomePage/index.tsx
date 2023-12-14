import { useRef } from "react";
import Layout from "@/components/Layout";
import Main from "./Main";
import Development from "./Development";
import AboutUs from "./AboutUs";
import Statistics from "./Statistics";
import Solutions from "./Solutions";
import Posts from "@/components/Posts";
import Reviews from "@/components/Reviews";
import JoinCommunity from "@/components/JoinCommunity";

import { posts } from "@/mocks/posts";
import { reviews } from "@/mocks/reviews";

const HomePage = () => {
    const scrollToRef = useRef(null);

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
            <Reviews reviews={reviews} />
            <JoinCommunity title="We're Hiring!" />
        </Layout>
    );
};

export default HomePage;
