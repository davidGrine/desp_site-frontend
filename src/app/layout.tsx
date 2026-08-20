import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ 
  variable: "--font-roboto",
  subsets: ["latin", "cyrillic"] 
});

export const metadata: Metadata = {
  title: {
    template: "%s | Devlog.exe",
    default: "Devlog.exe",
  },
  description: "Practice my skills",
  icons: {
    icon: "/avatar.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
