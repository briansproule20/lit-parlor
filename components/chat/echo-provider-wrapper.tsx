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
    redirectUri: process.env.NEXT_PUBLIC_ECHO_REDIRECT_URI || (mounted ? `${window.location.origin}/chat` : 'https://narrative-exploration.vercel.app/chat'),
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