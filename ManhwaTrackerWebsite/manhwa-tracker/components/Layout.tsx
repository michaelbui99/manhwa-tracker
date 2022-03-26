import React from "react";
import Navbar from "./Navbar";
import styles from "../styles/Layout.module.scss";
import Meta from "./Meta";
import { useRouter } from "next/router";

export const Layout: React.FC = ({ children }) => {
    const router = useRouter();
    const currentRoute = router.asPath;

    return (
        <>
            <Meta
                title={
                    currentRoute
                        ? `${currentRoute.substring(1)} - Manhwa Tracker`
                        : "Manhwa Tracker"
                }
            />
            <div>
                <Navbar />
                <main className={styles.main}>{children}</main>
            </div>
        </>
    );
};
