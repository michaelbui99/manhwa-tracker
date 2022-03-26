import type { NextPage } from "next";
import Meta from "../components/Meta";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
    return (
        <>
            <Meta />
            <h1>Hello world</h1>
        </>
    );
};

export default Home;
