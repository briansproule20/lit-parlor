"use client";

import { EchoProvider } from "@zdql/echo-react-sdk";
import { useEffect, useState } from "react";

interface EchoProviderWrapperProps {
  children: React.ReactNode;
}

export default function EchoProviderWrapper({ children }: EchoProviderWrapperProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const echoConfig = {
    appId: process.env.NEXT_PUBLIC_ECHO_APP_ID || '',
    apiUrl: "https://echo.merit.systems",
    redirectUri: mounted ? window.location.origin : "http://localhost:3000",
  };

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }

  return (
    <EchoProvider config={echoConfig}>
      {children}
    </EchoProvider>
  );
} 