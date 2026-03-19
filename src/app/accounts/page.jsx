"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

function formatCurrency(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(value);
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-GB");
}

export default function PublicAccounts() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/public/transactions?limit=20");
        const json = await res.json();

        setTransactions(json.data.transactions || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="py-20 text-center text-slate-500">
        Loading accounts...
      </section>
    );
  }

  return (
    <section className="bg-white py-20 sm:py-28 md:py-36">
        <Navbar />
      <div className="max-w-[1100px] min-h-[calc(100vh-200px)] mx-auto px-4 sm:px-6 md:px-12">

        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#05004c] mb-10">
          Accounts & Transactions
        </h2>

        {/* List */}
        <div className="space-y-4">
          {transactions.map((t) => (
            <div
              key={t.id}
              className="flex items-center justify-between border-b border-slate-200 pb-4"
            >
              <div>
                <p className="font-medium text-slate-900">{t.name}</p>
                <p className="text-xs text-slate-500">
                  {formatDate(t.transactionDate)}
                </p>
              </div>

              <div className="text-right">
                <p
                  className={`font-semibold ${
                    t.type === "income"
                      ? "text-emerald-600"
                      : "text-rose-600"
                  }`}
                >
                  {t.type === "income" ? "+" : "-"}{" "}
                  {formatCurrency(t.amount)}
                </p>

                <p className="text-xs text-slate-400 capitalize">
                  {t.type}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
      <Footer/>
    </section>
  );
}