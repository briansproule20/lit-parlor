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
    clientId: process.env.NEXT_PUBLIC_ECHO_APP_ID || '', // Add client_id for OAuth
    apiUrl: "https://echo.merit.systems",
    // Omit redirectUri to default to application root
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