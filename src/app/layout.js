import Footer from "@/components/Shared/Footer";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";
import BackToTop from "@/components/Shared/BackToTop";
import AuthProvider from "@/Providers/AuthProvider";
export const metadata = {
  title: "DND Task Management",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <Navbar />
          <main className="container min-h-screen mx-auto text-white">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </body>
      </html>
    </AuthProvider>
  );
}
