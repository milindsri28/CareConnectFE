"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

export default function SignupPage() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would validate and create account here
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0172af] to-[#34a353] flex flex-col">
      <header className="p-6">
        <Link href="/" className="text-white text-3xl font-bold">
          Care Connect
        </Link>
      </header>

      <main className="flex-1 flex flex-col md:flex-row items-center justify-center p-6 gap-8">
        <div className="w-full max-w-md">
          <form onSubmit={handleSignup} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-white text-lg">
                First name
              </label>
              <Input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="bg-white/10 border-white/30 text-white"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="lastName" className="text-white text-lg">
                Last name
              </label>
              <Input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="bg-white/10 border-white/30 text-white"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-white text-lg">
                Phone Number
              </label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-white/10 border-white/30 text-white"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-white text-lg">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/30 text-white"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-white text-lg">
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white/10 border-white/30 text-white"
                required
              />
            </div>

            <Button type="submit" className="w-full bg-[#34a353] hover:bg-[#2a8442] text-white rounded-full">
              Verify Mobile No.
            </Button>

            <div className="flex items-center justify-center gap-4">
              <div className="h-px bg-white/30 flex-1"></div>
              <span className="text-white text-sm">or</span>
              <div className="h-px bg-white/30 flex-1"></div>
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full bg-white text-[#545454] hover:bg-white/90 rounded-full flex items-center justify-center gap-2"
              onClick={() => router.push("/api/auth/google")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="w-5 h-5">
                <path
                  fill="#4280ef"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34a353"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#f6b704"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                />
                <path
                  fill="#e54335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Sign in with Google
            </Button>
          </form>
        </div>

        <div className="hidden md:block">
          <div className="bg-white rounded-lg p-4 shadow-lg relative">
            <div className="flex justify-center mb-4">
              <Image
                src="/images/telemedicine.png"
                alt="Medical professional with digital health tools"
                width={300}
                height={200}
                className="rounded"
              />
            </div>

            <div className="flex justify-center gap-1 mb-2">
              <div className="w-2 h-2 rounded-full bg-[#0172af]"></div>
              <div className="w-2 h-2 rounded-full bg-[#d9d9d9]"></div>
              <div className="w-2 h-2 rounded-full bg-[#d9d9d9]"></div>
            </div>

            <button className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center bg-white/80 rounded-full">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center bg-white/80 rounded-full">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

