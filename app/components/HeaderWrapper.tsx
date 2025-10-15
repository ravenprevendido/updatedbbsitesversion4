"use client";

import { usePathname, useRouter } from "next/navigation";
import Header from "./Header";
import { useEffect, useRef, useState } from "react";

export default function HeaderWrapper() {
  const pathname = usePathname();
  const router =useRouter();
  const [allowAdmin, setAllowAdmin] = useState(false);
  // hide header for all admin routes
  
  
  // mobile gesture password pattern to make admin accesible
  const touchStartRef = useRef<{x: number; y:number} | null>(null);
  const patternRef = useRef<string>("");

  // useeffect for the keyboard shortcus access key for admin
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if(e.ctrlKey && e.altKey && e.key.toLowerCase() === "a") {
        setAllowAdmin(true);
        router.push('/admin')
      }
    }


    window.addEventListener("keydown", handleKeydown);

    return() => {
      window.removeEventListener("keydown", handleKeydown)
    };
  }, [router])


  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStartRef.current) return;
      const touch = e.changedTouches[0];
      const dx = touch.clientX - touchStartRef.current.x;
      const dy = touch.clientY - touchStartRef.current.y;

      let dir = "";
      if (Math.abs(dx) > Math.abs(dy)) {
        dir = dx > 0 ? "R" : "L"; // Right or Left
      } else {
        dir = dy > 0 ? "D" : "U"; // Down or Up
      }

      patternRef.current += dir;

      // Check if the pattern matches "UDLR" for example
      if (patternRef.current.includes("UUDDLRLR")) {
        setAllowAdmin(true);
        router.push("/admin");
        patternRef.current = "";
      }

      // Reset pattern after 2 seconds idle
      setTimeout(() => (patternRef.current = ""), 2000);
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [router]);


  //block admin if shortcut key hasn't been use dapat short cutkey gagamitin
  useEffect(() => {
    if(pathname.startsWith("/admin") && !allowAdmin) {
      router.push("/");
    }
  })


  // naka hide dito si header kahit globally
  if (pathname.startsWith("/admin")) return null;

  return <Header />;
}

