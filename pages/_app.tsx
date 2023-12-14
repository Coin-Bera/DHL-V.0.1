import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";
import "../styles/app.sass";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        // @ts-ignore
        <ParallaxProvider>
            {/* @ts-ignore */}
            <Component {...pageProps} />
        </ParallaxProvider>
    );
}

export default MyApp;
