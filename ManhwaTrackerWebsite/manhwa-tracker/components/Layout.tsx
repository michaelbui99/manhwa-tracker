import React from "react";
import Navbar from "./Navbar";
import styles from "../styles/Layout.module.scss";

export const Layout: React.FC = ({ children }) => {
    return (
        <>
            <div>
                <Navbar />
                <main className={styles.main}>{children}</main>
            </div>
        </>
    );
};
