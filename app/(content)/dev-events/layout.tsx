import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dev Events",
  description:
    "Photos and memories from hackathons, demos, and other coding events.",
  openGraph: {
    title: "Dev Events | Alex Whalen",
    description:
      "Photos and memories from hackathons, demos, and other coding events.",
  },
  twitter: {
    title: "Dev Events | Alex Whalen",
    description:
      "Photos and memories from hackathons, demos, and other coding events.",
  },
};

export default function DevEventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
