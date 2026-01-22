"use client";

import { Toaster } from "react-hot-toast";

const Providers = () => {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        duration: 3000,
        style: {
          background: "#000000",
          color: "#ffffff",
        },
      }}
    />
  );
};

export default Providers;
