import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <header className="p-4 bg-blue-400 text-2xl text-white">
        Header
      </header>
        {children}
        <footer className="p-4 bg-black text-white text-2xl">
          Footer
        </footer>
      </body>
    </html>
  );
}
