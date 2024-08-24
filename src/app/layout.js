// src/app/ClientProviders.js (Client Component)
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/lib/context/AuthProvider";
import "./globals.css"; // Import global styles if you have any

const queryClient = new QueryClient();

export default function ClientProviders({ children }) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>{children}</AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
