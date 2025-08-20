"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./Dashboard.module.scss";

const USER_KEY = "authUser";

const DashboardPage = () => {
    const router = useRouter();

    useEffect(() => {
        const userData = localStorage.getItem(USER_KEY);
        if (!userData) {
            router.replace("/auth");
        }
    }, [router]);

    return (
        <main className={styles.dashboardContainer}>
            <h1>🖐️Welcome to the Dashboard </h1>
        </main>
    );
};

export default DashboardPage;
