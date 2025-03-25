"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Mic, Bell, MessageSquare } from "lucide-react"
import { Input } from "@/components/ui/input"
import Footer from "@/components/footer"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white py-2 px-4 md:px-8 lg:px-16 border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-[#0172af] text-xl font-bold">
              Care Connect
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/settings" className="text-gray-600 hover:text-[#0172af] text-sm">
                Settings & Privacy
              </Link>
              <Link href="/help" className="text-gray-600 hover:text-[#0172af] text-sm">
                Help
              </Link>
              <Link href="/posts" className="text-gray-600 hover:text-[#0172af] text-sm">
                Posts & Activity
              </Link>
              <Link href="/jobs" className="text-gray-600 hover:text-[#0172af] text-sm">
                Job Posting
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <Input
                type="search"
                placeholder="Search any keywords"
                className="w-64 rounded-full bg-[#f0f7fa] border-0 pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Mic className="w-4 h-4 text-gray-400" />
              </button>
            </div>
            <button className="relative">
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                1
              </span>
            </button>
            <button>
              <MessageSquare className="w-6 h-6 text-gray-600" />
            </button>
            <Link href="/connections" className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-gray-600"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                3
              </span>
            </Link>
            <Link href="/profile/me">
              <Image src="/images/user-avatar.png" alt="User Avatar" width={32} height={32} className="rounded-full" />
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  )
}

