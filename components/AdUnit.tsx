"use client";

import { useEffect } from "react";

interface AdUnitProps {
  slot: string;
  format?: "auto" | "fluid" | "rectangle" | "horizontal" | "vertical";
  className?: string;
  style?: React.CSSProperties;
  layoutKey?: string;
}

// Set NEXT_PUBLIC_ADSENSE_CLIENT_ID in your .env.local once you have a real publisher ID.
// Until then, ads show a grey placeholder and no 400 errors are thrown.
const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "";
const ADS_ENABLED =
  ADSENSE_CLIENT.startsWith("ca-pub-") &&
  ADSENSE_CLIENT !== "ca-pub-XXXXXXXXXXXXXXXXX";

export default function AdUnit({
  slot,
  format = "auto",
  className = "",
  style,
  layoutKey,
}: AdUnitProps) {
  useEffect(() => {
    if (!ADS_ENABLED) return;
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }, []);

  if (!ADS_ENABLED) {
    return (
      <div
        className={`ad-unit-wrapper ${className}`}
        style={{
          overflow: "hidden",
          textAlign: "center",
          background: "#F3F4F6",
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#9CA3AF",
          fontSize: 12,
          minHeight: 60,
          ...style,
        }}
      >
        Ad Placeholder
      </div>
    );
  }

  return (
    <div
      className={`ad-unit-wrapper ${className}`}
      style={{ overflow: "hidden", textAlign: "center", ...style }}
    >
      <ins
        className="adsbygoogle"
        style={{ display: "block", ...style }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
        {...(layoutKey ? { "data-ad-layout-key": layoutKey } : {})}
      />
    </div>
  );
}

export function AdTopBanner() {
  return (
    <div className="w-full bg-gray-50 border-y border-gray-200 py-2 my-3">
      <p className="text-[10px] text-gray-400 text-center mb-1">Advertisement</p>
      <AdUnit slot="TOP_BANNER_SLOT" format="horizontal" style={{ minHeight: 90 }} />
    </div>
  );
}

export function AdMidContent() {
  return (
    <div className="my-6 flex justify-center">
      <div>
        <p className="text-[10px] text-gray-400 text-center mb-1">Advertisement</p>
        <AdUnit slot="MID_CONTENT_SLOT" format="rectangle" style={{ width: 300, height: 250 }} />
      </div>
    </div>
  );
}

export function AdInFeed() {
  return (
    <div className="my-4 rounded-lg overflow-hidden border border-gray-100">
      <p className="text-[10px] text-gray-400 text-center pt-1">Advertisement</p>
      <AdUnit slot="IN_FEED_SLOT" format="fluid" layoutKey="-fb+5w+4e-db+86" />
    </div>
  );
}

export function AdSidebar() {
  return (
    <div className="sticky top-4">
      <p className="text-[10px] text-gray-400 text-center mb-1">Advertisement</p>
      <AdUnit slot="SIDEBAR_SLOT" format="vertical" style={{ width: 300, height: 600 }} />
    </div>
  );
}

export function AdEndArticle() {
  return (
    <div className="w-full mt-6">
      <p className="text-[10px] text-gray-400 text-center mb-1">Advertisement</p>
      <AdUnit slot="END_ARTICLE_SLOT" format="auto" />
    </div>
  );
}

export function AdMobileSticky() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 md:hidden">
      <p className="text-[10px] text-gray-400 text-center">Advertisement</p>
      <AdUnit slot="MOBILE_STICKY_SLOT" format="horizontal" style={{ height: 50 }} />
    </div>
  );
}
