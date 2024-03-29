import Providers from "@/redux/Providers";
import "./globals.css";
export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-800 text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
