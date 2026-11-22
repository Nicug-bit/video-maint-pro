import "./globals.css";

export const metadata = {
  title: "VideoMaint Pro",
  description:
    "Sistem management mentenanta CCTV",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  );
}