import { useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import cn from "classnames";
import styles from "./Header.module.sass";
import Logo from "@/components/Logo";
import Menu from "./Menu";

import { headerNavigation } from "@/constants/navigation";
import { socials } from "@/constants/socials";

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
    const [headerStyle, setHeaderStyle] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);

    useScrollPosition(({ currPos }) => {
        setHeaderStyle(currPos.y <= -2);
    });

    return (
        <header
            className={cn(
                {
                    [styles.visible]: headerStyle,
                    [styles.open]: open,
                },
                styles.header
            )}
        >
            <div
                className={cn("container-wide", styles.container)}
                data-scroll-lock-scrollable
                data-scroll-lock-fill-gap
            >   {/*@ts-ignore*/}
                <Logo className={styles.logo} />
                {/*@ts-ignore*/}
                <Menu
                    navigation={headerNavigation}
                    socials={socials}
                    onClick={() => setOpen(!open)}
                />
                <a
                    className={cn("button", styles.button)}
                    href="/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>Contact us</span>
                </a>
            </div>
        </header>
    );
};

export default Header;
