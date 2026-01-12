"use client";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Dialog, DialogPanel } from "@headlessui/react";
import { IoCloseSharp } from "react-icons/io5";
import { navigation } from "@/constance";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const parthname = usePathname();

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="text-2xl md:hidden cursor-pointer p-2 rounded hover:bg-gray-200"
      >
        <AiOutlineMenu />
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50 md:hidden"
      >
        <DialogPanel
          className="
            fixed top-0 left-0 w-1/2
            h-full
            bg-black text-white
            p-6 space-y-4
            border-b border-lightText
            flex  justify-between 
          "
        >
          <div className="space-y-3 capitalize ">
            <div className="flex items-center justify-between gap-40 p-2">
              <h1>Menu</h1>
              <IoCloseSharp
                onClick={() => setIsOpen(false)}
                size={30}
                className="cursor-pointer"
              />
            </div>
            {navigation.map((item, index) => (
              <div
                key={index}
                onClick={() => setIsOpen(false)}
                className={`border-b border-gray-200 py-3 ${
                  parthname === item.href ? "text-[#0C55AA] font-semibold" : ""
                }`}
              >
                <Link href={item.href}>{item.tittle}</Link>
              </div>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
};

export default MobileNavigation;
