import Link from "next/link";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <header className="text-gray-600 body-font">
          
        </header>
        {children}
      </body>
    </html>
  );
}
