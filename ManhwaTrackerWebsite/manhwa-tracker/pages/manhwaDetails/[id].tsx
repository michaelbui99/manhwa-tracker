import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { ManhwaServiceImpl } from "../../services/ManhwaServiceImpl";
import Manhwa from "../../models/manhwa/manhwa";

interface ManhwaDetailsProps {
    manhwa: Manhwa;
}

const ManhwaDetails: NextPage<ManhwaDetailsProps> = ({ manhwa }) => {
    const router = useRouter();
    const { id: manhwaId } = router.query;

    useEffect(() => {}, []);

    return <div>{manhwa.title}</div>;
};

export default ManhwaDetails;

export async function getServerSideProps({ params }) {
    const manhwaService = new ManhwaServiceImpl();
    const manhwa = await manhwaService.getManhwaById(params.id);

    return {
        props: {
            manhwa,
        },
    };
}
