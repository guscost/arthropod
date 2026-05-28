import { StrictMode } from "react";
import { createRoot } from "react-dom";
import { ThemeProvider } from "next-themes";
import { Router } from "wouter";
import { Toaster } from "@/components/ui/sonner";
import { App } from "@/components/app";

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Missing #root mount element");

createRoot(rootEl).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="light">
      <Router base={__ROOT_PATH__}>
        <App />
      </Router>
      <Toaster />
    </ThemeProvider>
  </StrictMode>,
);
