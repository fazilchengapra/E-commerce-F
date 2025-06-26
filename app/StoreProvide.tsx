// app/StoreProvider.tsx
"use client"; // This directive is crucial for client-side rendering
import appStore from "@/lib/appStore";
import { Provider } from "react-redux";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={appStore}>{children}</Provider>;
}
