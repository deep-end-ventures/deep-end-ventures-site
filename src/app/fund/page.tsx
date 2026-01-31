import type { Metadata } from "next";
import FundPageClient from "./FundPageClient";

export const metadata: Metadata = {
  title: "Fund Deep End Ventures — Crypto Payments",
  description:
    "Support Deep End Ventures with cryptocurrency. Accept ETH and USDC on Ethereum, Base, and Polygon. No KYC. No middlemen. Direct wallet-to-wallet.",
};

export default function FundPage() {
  return <FundPageClient />;
}
