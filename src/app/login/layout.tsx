import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hagiz",
  description: "Generated by imad - yacine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
