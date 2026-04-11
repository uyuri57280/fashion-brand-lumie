"use client"

import Link from "next/link";
import { useEffect, useState } from "react"
import { LuMenu } from "react-icons/lu";
import { PiDna } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";

const menuItems = [
  {
    label: 'TOP',
    href: '/',
  },
  {
    label: 'CATEGORY',
    href: '/',
  },
  {
    label: 'NEW IN',
    href: '/',
  },
  {
    label: 'BEST SELLER',
    href: '/',
  },
  {
    label: 'TOPICS',
    href: '/',
  },
  {
    label: 'COLLECTION',
    href: '/',
  },
  {
    label: 'CONCEPT',
    href: '/main/concept',
  },
]

interface HamburgerMenuProps {
  isSidebarOpen:boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function HamburgerMenu(props:HamburgerMenuProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [])

  // 背景のスクロールを止める
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open])

  return (
    <div>
      {/* <button
        onClick={() => setOpen(true)}
        className="p-2 rounded-md hover:bg-gray-100"
        aria-label="menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        <LuMenu size={30} />
      </button> */}
      <div
        // pointer-events-auto||none:ボタン有効、無効化
        className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div
          className="absolute inset-0 bg-black/50"
          // 背景クリックで閉じる
          onClick={() => setOpen(false)}
        />
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          className={`absolute left-0 top-0 h-full w-64 bg-white p-6 shadow-lg transform
            transition-transform duration-300
            ${open ? "translate-x-0" : "-translate-x-full"}`}
        // translate-x-full:自分の横幅分(w-64)左にずれる
        >
          <button
            onClick={() => setOpen(false)}
            className="mb-4 text-sm text-gray-500"
          >
            閉じる
          </button>

          <nav className="flex flex-col gap-4">
            {menuItems.map((item, index) => (
              <Link
                onClick={() => setOpen(false)}
                href={item.href}
                className="flex flex-row gap-4 items-center "
                key={index}
              >
                <p className="text-gray-500 text-sm">{item.label}</p>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}