import "./globals.css";

export const metadata = {
  title: "Tag der offenen Tür Bildschirm",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
