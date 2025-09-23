"use client";

import { EchoProvider } from "@merit-systems/echo-react-sdk";
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
  };

  if (!mounted) {
    return (
      <EchoProvider config={echoConfig}>
        <div style={{ visibility: 'hidden' }}>{children}</div>
      </EchoProvider>
    );
  }

  return (
    <EchoProvider config={echoConfig}>
      {children}
    </EchoProvider>
  );
} 