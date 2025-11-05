"use client";

import React from "react";
import Link from "next/link";

export function TerminalBackButton() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2 rounded-sm border border-(--c-separator) px-3 py-2 transition-all hover:bg-(--c-background-hover)"
    >
      {/* Terminal prompt */}
      <div className="text-style-code flex items-center gap-2">
        <span>&gt;</span>
        <span>cd ..</span>
        <span className="animate-pulse">_</span>
      </div>
    </Link>
  );
}
