"use client";

import { Toaster as SonnerToaster } from "sonner";
import type { ToasterProps } from "sonner";

export function Toaster(props: ToasterProps) {
  return <SonnerToaster {...props} />;
}
