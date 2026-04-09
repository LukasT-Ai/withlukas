import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export const metadata = { title: "Payment Cancelled" };

export default function CancelPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold mb-3">Payment Cancelled</h1>
          <p className="text-zinc-400 mb-6">
            No charges were made. If you have questions about our services,
            feel free to reach out.
          </p>
          <Link
            href="/pricing"
            className="inline-block bg-blue-500 hover:bg-blue-400 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors"
          >
            View Pricing
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
