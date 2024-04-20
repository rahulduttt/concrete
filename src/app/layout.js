import { Poppins } from "next/font/google";
import "./globals.css";

const lato = Poppins({
  weight: ["100","200","500","300", "800","400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
export const metadata = {
  title: "Wise Concreting Services",
  description: "Wise Concreting Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
