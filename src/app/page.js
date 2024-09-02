import { LandingPageV2 } from "@/components/landing-page-v2";
import { ThemeProvider } from "@/components/ThemeProvider";
import Image from "next/image";
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <LandingPageV2 />
      <Toaster />
    </ThemeProvider>
  );
}
