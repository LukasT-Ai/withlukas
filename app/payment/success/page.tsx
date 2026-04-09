import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export const metadata = { title: "Payment Successful" };

export default function SuccessPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="text-5xl mb-6">&#10003;</div>
          <h1 className="text-2xl font-bold mb-3">Payment Received</h1>
          <p className="text-zinc-400 mb-6">
            Thank you for your payment. We&apos;ll be in touch within 24 hours
            to kick off your project.
          </p>
          <Link
            href="/"
            className="inline-block bg-blue-500 hover:bg-blue-400 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
