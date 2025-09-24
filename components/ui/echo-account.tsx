'use client';

import { EchoAccountButtonPopover } from './echo-popover';
import { Button } from './echo-button';
import { Popover, PopoverTrigger } from './popover';
import { Skeleton } from './skeleton';
import { type EchoContextValue } from '@merit-systems/echo-react-sdk';
import { Gift } from 'lucide-react';

// Utility function for formatting currency
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(amount / 100); // Assuming amount is in cents
};

// Echo logo component matching the screenshot
const Logo = ({ className }: { className?: string }) => (
  <div className={`bg-blue-500 text-white rounded-full flex items-center justify-center ${className}`}>
    <div className="w-3 h-3 bg-white rounded-full"></div>
  </div>
);

export function EchoAccountButton({ echo }: { echo: EchoContextValue }) {
  const { user, balance, freeTierBalance, signIn, isLoading } = echo;

  const totalBalance =
    (balance?.balance || 0) + (freeTierBalance?.userSpendInfo.amountLeft || 0);
  const hasFreeCredits = freeTierBalance?.userSpendInfo.amountLeft ?? 0 > 0;

  const buttonContent = isLoading ? (
    <>
      <Skeleton className="h-4 w-4 rounded-full" />
      <Skeleton className="h-4 w-14" />
    </>
  ) : !user ? (
    <>
      <Logo className="w-5 h-5" />
      <span>Sign In</span>
    </>
  ) : (
    <>
      <Logo className="w-5 h-5" />
      <span className="font-semibold">{formatCurrency(totalBalance)}</span>
    </>
  );

  const button = (
    <div className="relative inline-flex">
      <Button
        variant="outline"
        onClick={!user ? signIn : undefined}
        disabled={isLoading}
        className="bg-white/95 border border-gray-200 hover:bg-gray-50 text-gray-900 px-4 py-2 h-10 rounded-xl shadow-sm font-medium min-w-[120px] justify-start gap-3"
      >
        {buttonContent}
      </Button>
      {hasFreeCredits ? (
        <div className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-green-500">
          <Gift className="w-2.5 h-2.5 text-white" />
        </div>
      ) : null}
    </div>
  );

  if (!user || isLoading) {
    return button;
  }

  return (
    <Popover>
      <PopoverTrigger asChild>{button}</PopoverTrigger>
      <EchoAccountButtonPopover echo={echo} />
    </Popover>
  );
}