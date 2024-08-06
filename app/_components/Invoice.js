"use client";

import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

export default function Invoice({ booking, getInvoice, user }) {
  function handleclick() {
    getInvoice(booking, user);
  }
  return (
    <button
      onClick={handleclick}
      className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
    >
      <ArrowDownTrayIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
      invoice
    </button>
  );
}
