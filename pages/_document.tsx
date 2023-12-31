import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            // @ts-ignore
            <Html>
                {/* @ts-ignore */}
                <Head>
                    <meta
                        content="Transform your ideas into cutting-edge digital solutions."
                        name="Dev House Labs"
                    />
                    <meta
                        content="Transform your ideas into cutting-edge digital solutions."
                        property="og:title"
                    />
                    <meta
                        content="Transform your ideas into cutting-edge digital solutions."
                        property="og:description"
                    />
                    <meta
                        content="%PUBLIC_URL%/fb-og-image.png"
                        property="og:image"
                    />
                    <meta
                        property="og:url"
                        content="https://careers.devhouselabs.io/"
                    />
                    <meta
                        property="og:site_name"
                        content="Dev House Labs"
                    />
                    <meta
                        content="Dev House Labs"
                        property="twitter:title"
                    />
                    <meta
                        content="Transform your ideas into cutting-edge digital solutions."
                        property="twitter:description"
                    />
                    <meta
                        content="%PUBLIC_URL%/twitter-card.png"
                        property="twitter:image"
                    />
                    <meta property="og:type" content="Article" />
                    <meta content="summary" name="twitter:card" />
                    <meta name="twitter:site" content="@DevHouseLabs" />
                    <meta name="twitter:creator" content="@DevHouseLabs" />
                    <meta property="fb:admins" content="132951670226590" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <meta name="theme-color" content="#000000" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@700;900&family=Karla:wght@400;500;800&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body className="app">
                    {/* @ts-ignore */}
                    <Main />
                    {/* @ts-ignore */}
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
