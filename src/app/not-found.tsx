"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // redirect to home after 5 seconds
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#081826] text-center text-slate-100 px-6">
      <h1 className="text-7xl font-extrabold text-[#F5C518] mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-white mb-2">
        Och aye! Yer a wee bit lost, pal.
      </h2>
      <p className="text-slate-400 mb-6 max-w-md">
        Looks like ye’ve wandered off the airway and ended up in the heather.  
        Dinnae worry — we’ll get ye vectored back tae the main page in a moment!
      </p>
      <a
        href="/"
        className="px-6 py-3 rounded-xl font-semibold text-slate-900"
        style={{ backgroundColor: "#F5C518" }}
      >
        Back tae Home →
      </a>
      <p className="mt-4 text-xs text-slate-500">
        (Auto-redirecting in 5 seconds… grab a cuppa!)
      </p>
    </div>
  );
}
