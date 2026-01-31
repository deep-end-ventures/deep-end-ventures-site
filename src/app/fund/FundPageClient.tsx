"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

// ============================================================
// CONFIGURE YOUR WALLET ADDRESS HERE
// This is the single EVM address that receives ETH + USDC
// on all supported networks (Ethereum, Base, Polygon, Arbitrum).
// ============================================================
const WALLET_ADDRESS = "0x3F5A2110f637ED0aEAcFF50b8B86F2baF72d7F4F";

type Network = {
  id: string;
  name: string;
  chainLabel: string;
  color: string;
  bgColor: string;
  icon: string;
  gasNote: string;
  explorerUrl: string;
};

const networks: Network[] = [
  {
    id: "ethereum",
    name: "Ethereum",
    chainLabel: "Mainnet",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10 border-blue-500/20",
    icon: "⟠",
    gasNote: "Higher gas fees (~$1-5)",
    explorerUrl: `https://etherscan.io/address/${WALLET_ADDRESS}`,
  },
  {
    id: "base",
    name: "Base",
    chainLabel: "L2",
    color: "text-blue-300",
    bgColor: "bg-blue-400/10 border-blue-400/20",
    icon: "🔵",
    gasNote: "Very low fees (~$0.01)",
    explorerUrl: `https://basescan.org/address/${WALLET_ADDRESS}`,
  },
  {
    id: "polygon",
    name: "Polygon",
    chainLabel: "PoS",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10 border-purple-500/20",
    icon: "⬡",
    gasNote: "Very low fees (~$0.01)",
    explorerUrl: `https://polygonscan.com/address/${WALLET_ADDRESS}`,
  },
  {
    id: "arbitrum",
    name: "Arbitrum",
    chainLabel: "L2",
    color: "text-sky-400",
    bgColor: "bg-sky-500/10 border-sky-500/20",
    icon: "🔷",
    gasNote: "Low fees (~$0.05)",
    explorerUrl: `https://arbiscan.io/address/${WALLET_ADDRESS}`,
  },
];

type Asset = {
  id: string;
  name: string;
  symbol: string;
  icon: string;
  description: string;
};

const assets: Asset[] = [
  {
    id: "eth",
    name: "Ethereum",
    symbol: "ETH",
    icon: "⟠",
    description: "Native gas token",
  },
  {
    id: "usdc",
    name: "USD Coin",
    symbol: "USDC",
    icon: "💵",
    description: "Stablecoin pegged to USD",
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const el = document.createElement("textarea");
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={copy}
      className={`
        inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all
        ${
          copied
            ? "bg-green-500/20 text-green-400 border border-green-500/30"
            : "bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20"
        }
      `}
    >
      {copied ? (
        <>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M20 6L9 17l-5-5" />
          </svg>
          Copied!
        </>
      ) : (
        <>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
          </svg>
          Copy Address
        </>
      )}
    </button>
  );
}

export default function FundPageClient() {
  const [selectedNetwork, setSelectedNetwork] = useState<string>("base");
  const [selectedAsset, setSelectedAsset] = useState<string>("usdc");

  const currentNetwork = networks.find((n) => n.id === selectedNetwork)!;
  const currentAsset = assets.find((a) => a.id === selectedAsset)!;

  // Build the QR code value - for ETH we use ethereum: URI, for tokens just the address
  const qrValue =
    selectedAsset === "eth"
      ? `ethereum:${WALLET_ADDRESS}`
      : WALLET_ADDRESS;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-green-700/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Accepting Crypto
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 gradient-text">
            Fund Deep End Ventures
          </h1>

          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-2">
            Direct wallet-to-wallet. No KYC. No middlemen. No fees.
          </p>
          <p className="text-sm text-white/30 max-w-lg mx-auto">
            Send ETH or USDC on your preferred network. Funds go directly to our treasury wallet.
          </p>
        </div>
      </section>

      {/* Payment Section */}
      <section className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left: Controls */}
            <div className="lg:col-span-2 space-y-6">
              {/* Asset Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">
                  Select Asset
                </label>
                <div className="space-y-2">
                  {assets.map((asset) => (
                    <button
                      key={asset.id}
                      onClick={() => setSelectedAsset(asset.id)}
                      className={`
                        w-full flex items-center gap-3 px-4 py-3 rounded-xl border transition-all text-left
                        ${
                          selectedAsset === asset.id
                            ? "bg-blue-700/20 border-blue-500/30 text-white"
                            : "bg-white/[0.02] border-white/5 text-white/60 hover:border-white/10 hover:text-white/80"
                        }
                      `}
                    >
                      <span className="text-2xl">{asset.icon}</span>
                      <div>
                        <div className="font-semibold text-sm">{asset.symbol}</div>
                        <div className="text-xs text-white/40">{asset.description}</div>
                      </div>
                      {selectedAsset === asset.id && (
                        <svg className="ml-auto w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Network Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">
                  Select Network
                </label>
                <div className="space-y-2">
                  {networks.map((network) => (
                    <button
                      key={network.id}
                      onClick={() => setSelectedNetwork(network.id)}
                      className={`
                        w-full flex items-center gap-3 px-4 py-3 rounded-xl border transition-all text-left
                        ${
                          selectedNetwork === network.id
                            ? `${network.bgColor} text-white`
                            : "bg-white/[0.02] border-white/5 text-white/60 hover:border-white/10 hover:text-white/80"
                        }
                      `}
                    >
                      <span className="text-xl">{network.icon}</span>
                      <div className="flex-1">
                        <div className="font-semibold text-sm">
                          {network.name}
                          <span className="ml-2 text-xs text-white/30">{network.chainLabel}</span>
                        </div>
                        <div className="text-xs text-white/40">{network.gasNote}</div>
                      </div>
                      {selectedNetwork === network.id && (
                        <svg className={`w-5 h-5 ${network.color}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Recommended badge */}
              <div className="rounded-xl border border-green-500/10 bg-green-500/5 p-4">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-lg">💡</span>
                  <div>
                    <p className="text-sm font-medium text-green-400 mb-1">Recommended</p>
                    <p className="text-xs text-white/40 leading-relaxed">
                      For lowest fees, send <strong className="text-white/60">USDC on Base</strong>.
                      Transaction costs are typically under $0.01.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: QR + Address */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-8">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{currentAsset.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg">
                      Send {currentAsset.symbol}
                    </h3>
                    <p className="text-sm text-white/40">
                      via {currentNetwork.name} ({currentNetwork.chainLabel})
                    </p>
                  </div>
                </div>

                {/* QR Code */}
                <div className="flex justify-center mb-8">
                  <div className="bg-white rounded-2xl p-5 shadow-2xl shadow-blue-500/10">
                    <QRCodeSVG
                      value={qrValue}
                      size={220}
                      bgColor="#ffffff"
                      fgColor="#0a1628"
                      level="M"
                      includeMargin={false}
                    />
                  </div>
                </div>

                {/* Address */}
                <div className="mb-6">
                  <label className="block text-xs font-semibold uppercase tracking-widest text-white/40 mb-2">
                    Wallet Address
                  </label>
                  <div className="bg-black/30 rounded-xl border border-white/5 p-4">
                    <code className="text-sm md:text-base text-blue-400 break-all font-mono leading-relaxed">
                      {WALLET_ADDRESS}
                    </code>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3">
                  <CopyButton text={WALLET_ADDRESS} />
                  <a
                    href={currentNetwork.explorerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                      <polyline points="15,3 21,3 21,9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    View on Explorer
                  </a>
                </div>

                {/* Warning */}
                <div className="mt-6 rounded-xl border border-amber-500/10 bg-amber-500/5 p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-amber-400">⚠️</span>
                    <div className="text-xs text-white/50 leading-relaxed">
                      <strong className="text-amber-400/80">Important:</strong> Only send{" "}
                      <strong className="text-white/70">{currentAsset.symbol}</strong> on the{" "}
                      <strong className="text-white/70">{currentNetwork.name}</strong> network to this
                      address. Sending tokens on the wrong network may result in permanent loss
                      of funds. Always double-check the network in your wallet before confirming.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Choose Asset & Network",
                desc: "Select ETH or USDC and your preferred network. We recommend USDC on Base for the lowest fees.",
              },
              {
                step: "02",
                title: "Scan or Copy",
                desc: "Scan the QR code with your wallet app, or copy the address manually. Always verify the address matches.",
              },
              {
                step: "03",
                title: "Send & Confirm",
                desc: "Send any amount. Transactions are confirmed on-chain — transparent, verifiable, and permanent.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-white/5 bg-white/[0.02] p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-700/20 text-blue-400 font-bold text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Crypto */}
      <section className="py-16 md:py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-2xl border border-white/5 bg-gradient-to-b from-blue-900/10 to-transparent p-10 md:p-14">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Why We Accept Crypto
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {[
                {
                  icon: "🔒",
                  title: "No KYC Required",
                  desc: "Send funds without identity verification. Your privacy is respected.",
                },
                {
                  icon: "⚡",
                  title: "Instant Settlement",
                  desc: "No 3-5 business day holds. Funds arrive in seconds to minutes.",
                },
                {
                  icon: "🌍",
                  title: "Borderless",
                  desc: "Anyone, anywhere in the world can participate. No bank restrictions.",
                },
                {
                  icon: "🔍",
                  title: "Fully Transparent",
                  desc: "Every transaction is verifiable on-chain. Full accountability, always.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "What cryptocurrencies do you accept?",
                a: "We accept ETH (Ethereum) and USDC (USD Coin) on Ethereum mainnet, Base, Polygon, and Arbitrum networks.",
              },
              {
                q: "Which network should I use?",
                a: "For the lowest fees, we recommend Base or Polygon. Ethereum mainnet works too but has higher gas costs. The same wallet address works on all networks.",
              },
              {
                q: "Is there a minimum amount?",
                a: "No minimum. Send any amount you'd like. Just make sure it covers network gas fees so the transaction goes through.",
              },
              {
                q: "How do I verify my transaction went through?",
                a: "Click 'View on Explorer' to see all transactions to our wallet address. Your transaction will appear once confirmed on-chain.",
              },
              {
                q: "Can I get a receipt?",
                a: "The blockchain IS your receipt. Every transaction is permanently recorded with timestamp, amount, and sender address. Contact us at our email if you need a formal acknowledgment.",
              },
              {
                q: "Why not traditional payment methods?",
                a: "As an AI-operated venture fund, crypto aligns with our ethos: fast, borderless, transparent, and permissionless. We may add traditional methods in the future.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-xl border border-white/5 bg-white/[0.02] p-6"
              >
                <h3 className="font-semibold mb-2 text-white/90">{item.q}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
