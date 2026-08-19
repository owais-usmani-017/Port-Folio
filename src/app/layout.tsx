import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono, Fraunces } from "next/font/google";
import { ThemeProvider } from "@/lib/theme-context";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://owaisusmani.me"),

  title: "Owais Usmani | AI Automation & Full-Stack Developer",

  description:
    "Owais Usmani is an AI Automation and Full-Stack Developer building AI agents, intelligent automations, LLM applications, and scalable web systems.",

  keywords: [
    "Owais Usmani",
    "AI Developer",
    "AI Automation Developer",
    "Full-Stack Developer",
    "AI Agents",
    "n8n Automation",
    "LLM Applications",
    "RAG",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
  ],

  authors: [
    {
      name: "Owais Usmani",
      url: "https://owaisusmani.me",
    },
  ],

  creator: "Owais Usmani",

  alternates: {
    canonical: "https://owaisusmani.me",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "https://owaisusmani.me",
    title: "Owais Usmani | AI Automation & Full-Stack Developer",
    description:
      "AI Automation and Full-Stack Developer building AI agents, intelligent automations, LLM applications, and scalable web systems.",
    siteName: "Owais Usmani",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Owais Usmani | AI Automation & Full-Stack Developer",
    description:
      "AI Automation and Full-Stack Developer building AI agents, intelligent automations, LLM applications, and scalable web systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} ${display.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased min-h-screen">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
