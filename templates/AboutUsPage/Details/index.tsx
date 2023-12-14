import { Parallax } from "react-scroll-parallax";
import Link from "next/link";
import cn from "classnames";
import styles from "./Details.module.sass";
import Image from "@/components/Image";

type DetailsProps = {
    scrollToRef: any;
};

const Details = ({ scrollToRef }: DetailsProps) => (
    <div className={cn("section", styles.section)}>
        <div className={cn("anchor", styles.anchor)} ref={scrollToRef}></div>
        <div className={cn("container", styles.container)}>
            <div className={styles.details}>
                <div className={styles.counter}>1M</div>
                <div className={cn("h4", styles.info)}>DHL’s users</div>
            </div>
            <div className={styles.wrap}>
                <div className={cn("content", styles.content)}>
                    <h2>Scaling solutions, amplified.</h2>
                    <h3>Built by developers, for developers.</h3>
                    <p>
                        We are committed to fostering the growth of Web3
                        applications by providing the infrastructure and
                        security needed for Web3.
                    </p>
                    <p>
                        We believe in Web3 for all, and aspire to build decentralised
                        blockchain scaling platforms that enable developers to
                        build scalable user-friendly dApps with low transaction
                        fees without ever sacrificing on security.
                    </p>
                </div>
                <Link href="/contact">
                    <a className={cn("button", styles.button)}>
                        <span>contact us</span>
                    </a>
                </Link>
            </div>
            <Parallax
                className={styles.image}
                speed={1}
                easing="easeInQuad"
                rotate={[2, -15]}
            >
                <Image
                    src="/images/figures/figure-7.png"
                    layout="fill"
                    alt="Figure"
                />
            </Parallax>
        </div>
    </div>
);

export default Details;
