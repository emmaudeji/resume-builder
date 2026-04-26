"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

export default function GlobalAlert() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const msg = searchParams.get("msg");
  const type = searchParams.get("type") || "info";
  const desc = searchParams.get("desc") || "";
  const redirectedFrom = searchParams.get("redirectedFrom") || "";

  useEffect(() => {
    if (!msg) return;

    const options = {
      position: "top-right" as const,
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored" as const,
    };

    // Trigger toast
    switch (type) {
      case "success":
        toast.success(`${msg}${desc ? ` — ${desc}` : ""}`, options);
        break;
      case "error":
        toast.error(`${msg}${desc ? ` — ${desc}` : ""}`, options);
        break;
      case "warning":
        toast.warning(`${msg}${desc ? ` — ${desc}` : ""}`, options);
        break;
      default:
        toast.info(`${msg}${desc ? ` — ${desc}` : ""}`, options);
    }

    // Clear search params after toast disappears
    const timeout = setTimeout(() => {
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.delete("msg");
      newParams.delete("type");
      newParams.delete("desc");
      newParams.delete("redirectedFrom");

      const newUrl = `${window.location.pathname}${
        newParams.toString() ? `?${newParams.toString()}` : ""
      }`;

      router.replace(newUrl, { scroll: false });
    }, 4200); // slightly longer than toast duration

    return () => clearTimeout(timeout);
  }, [msg, type, desc, router, searchParams]);

  return null;
}
