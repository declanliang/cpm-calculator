import CPMCalculator from "../components/CPMCalculator"
import CPMInfo from "../components/CPMInfo"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CPM Calculator | Understand and Calculate Cost Per Mille",
  description:
    "Calculate and understand Cost Per Mille (CPM) with our free online calculator. Learn what CPM is, how it's calculated, and why it's important in advertising.",
  openGraph: {
    title: "CPM Calculator | Understand and Calculate Cost Per Mille",
    description:
      "Calculate and understand Cost Per Mille (CPM) with our free online calculator. Learn what CPM is, how it's calculated, and why it's important in advertising.",
    url: "https://your-domain.com",
    siteName: "CPM Calculator",
    locale: "en_US",
    type: "website",
  },
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">CPM Calculator</h1>
      <CPMCalculator />
      <CPMInfo />
    </main>
  )
}

