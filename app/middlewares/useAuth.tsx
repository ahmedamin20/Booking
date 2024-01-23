import { useRouter } from "next/router";
import { useEffect } from "react";
import React from 'react'
export default function Auth({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("AccessToken");

    if (!isAuthenticated) {
      router.push("/");
    }
  }, []);

  return {children};
}