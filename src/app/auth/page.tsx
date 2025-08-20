"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Auth.module.scss";
import { ApiResponse } from "../lib/type";
import { useAuth } from "../hooks/useAuth";
import { phoneSchema } from "../lib/validation";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

export type User = {
    name: string;
    email: string;
    picture: string;
};


const AuthPage = () => {
    const router = useRouter();
    const phoneRef = useRef<HTMLInputElement>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const { saveUser } = useAuth();

    const handleLogin = async () => {
        const phone = phoneRef.current?.value || "";
        try {
            phoneSchema.parse(phone);
            setError(null);
        } catch (e: any) {
            setError(e.errors[0].message);
            return;
        }

        setLoading(true);
        try {
            const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
            const data: ApiResponse = await res.json();
            const user = data.results[0];
            saveUser(user);
            router.push("/dashboard");
        } catch (e) {
            setError("Login to your account");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className={styles.authContainer}>
            <h1> Login to your account  </h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleLogin();
                }}
                noValidate
            >
                <Input
                    type="text"
                    label=" Phone Number : "
                    placeholder="09xxxxxxxxx"
                    ref={phoneRef}
                    error={error ?? undefined}
                    maxLength={11}
                    inputMode="numeric"
                />
                <Button type="submit" disabled={loading}>
                    {loading ? "Loading.." : "Login"}
                </Button>
            </form>
        </main>
    );
};

export default AuthPage;
