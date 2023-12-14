import Layout from "@/components/Layout";
import Main from "./Main";
import Content from "./Content";
import Posts from "@/components/Posts";
import JoinCommunity from "@/components/JoinCommunity";

import { posts } from "@/mocks/posts";

const ArticlePage = () => {
    return (
        <Layout>
            <Main />
            <Content />
            <Posts
                title="You may also like"
                info="Stay current on the latest DHL project developments, news, and content, updated daily."
                posts={posts}
                background
            />
            <JoinCommunity title="We're Hiring, Join Us." />
        </Layout>
    );
};

export default ArticlePage;
