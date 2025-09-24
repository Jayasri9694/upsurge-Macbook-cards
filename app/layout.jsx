import "./globals.css";

export const metadata = {
  title: "Upsurge Media",
  description: "Why Choose Upsurge Media section",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
