import "./globals.css";
import AppShell from "@/components/appShell/appShell";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
