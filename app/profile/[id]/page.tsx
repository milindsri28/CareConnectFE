"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Pencil, MapPin, Plus, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DashboardLayout from "@/components/layouts/dashboard-layout"

export default function ProfilePage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("posts")

  return (
    <DashboardLayout>
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-[#0172af] to-[#34a353] h-32 relative">
        <div className="absolute bottom-0 left-8 transform translate-y-1/2">
          <div className="relative">
            <Image
              src="/images/doctor-profile.png"
              alt="Dr. Pooja K H"
              width={100}
              height={100}
              className="rounded-full border-4 border-white"
            />
            <button className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow">
              <Pencil className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16 px-8">
        <div className="flex flex-wrap justify-between items-start gap-4">
          <div>
            <h1 className="text-xl font-bold">Dr. Pooja K H</h1>
            <p className="text-gray-600">MBBS, MD - Dermatology, FRGUHS | Aesthetic Dermatology</p>
            <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
              <MapPin className="w-4 h-4" /> Koramangala, Bangalore, India
              <Link href="/contact" className="text-[#0172af] ml-2">
                Contact Info
              </Link>
            </p>
            <p className="text-gray-500 text-sm mt-1">430 connections</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button className="bg-[#0172af] hover:bg-[#015d8c] rounded-full">Open to</Button>
            <Button variant="outline" className="rounded-full border-[#0172af] text-[#0172af]">
              Add Profile Section
            </Button>
            <Button variant="outline" className="rounded-full border-[#0172af] text-[#0172af]">
              More
            </Button>
          </div>
        </div>

        <div className="mt-4 p-4 bg-[#f0f7fa] rounded-lg">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Geolocation</h2>
            <div className="flex items-center">
              <div className="w-10 h-5 bg-[#0172af] rounded-full relative">
                <div className="absolute right-1 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-1">Address</p>
        </div>

        {/* Analytics Section */}
        <div className="mt-6 p-6 border rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium">Analytics</h2>
            <Button variant="ghost" size="sm" className="text-[#0172af]">
              <Pencil className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-sm text-gray-500 mb-4">Private to you</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-2">
              <div className="p-2 bg-gray-100 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <div>
                <p className="font-medium">210 profile views</p>
                <p className="text-xs text-gray-500">Discover who's viewed your profile</p>
                <p className="text-xs text-gray-400 mt-1">Past 7 days</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="p-2 bg-gray-100 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                </svg>
              </div>
              <div>
                <p className="font-medium">30 posts impression</p>
                <p className="text-xs text-gray-500">Check out who's engaging with your posts</p>
                <p className="text-xs text-gray-400 mt-1">Past 7 days</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="p-2 bg-gray-100 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <div>
                <p className="font-medium">30 search appearances</p>
                <p className="text-xs text-gray-500">See how often you appear in search results</p>
                <p className="text-xs text-gray-400 mt-1">Past 7 days</p>
              </div>
            </div>
          </div>

          <Button variant="link" className="text-[#0172af] mt-4 px-0">
            Show all analytics <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* About Section */}
        <div className="mt-6 p-6 border rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium">About</h2>
            <Button variant="ghost" size="sm" className="text-[#0172af]">
              <Pencil className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-sm">
            MBBS, MD - Dermatology, FRGUHS (Aesthetic Dermatology) | Krishna Institute of Medical Sciences, Karad | KMC,
            Mangaluru
          </p>
        </div>

        {/* Activity Section */}
        <div className="mt-6 p-6 border rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium">Activity</h2>
            <Button variant="ghost" size="sm" className="text-[#0172af]">
              <Pencil className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-sm text-gray-500 mb-4">430 connections</p>

          <Tabs defaultValue="posts" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="posts">Posts</TabsTrigger>
              <TabsTrigger value="comments">Comments</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>
            <TabsContent value="posts" className="space-y-6">
              <div className="border-b pb-4">
                <div className="flex items-start gap-2 mb-2">
                  <Image
                    src="/images/doctor-profile.png"
                    alt="Dr. Pooja K H"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm">
                      <span className="font-medium">Dr. Pooja K H</span> posted •{" "}
                      <span className="text-gray-500">2d</span>
                    </p>
                  </div>
                </div>
                <p className="text-sm mb-2">
                  Excited to share that I've successfully completed my internship at ITM Hospital, Gwalior (M.P). During
                  the training I experienced...
                </p>
                <p className="text-sm text-gray-500 text-right">... show more</p>

                <div className="mt-4 flex gap-4">
                  <div className="border rounded p-2 flex-shrink-0">
                    <Image
                      src="/images/certificate-1.png"
                      alt="ITM Internship Certificate"
                      width={100}
                      height={140}
                      className="object-cover"
                    />
                    <p className="text-xs text-gray-500 mt-1">ITM Internship Certificate</p>
                    <p className="text-xs text-gray-400">1 year</p>
                  </div>
                </div>

                <div className="flex items-center mt-2">
                  <div className="flex -space-x-1">
                    <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                      👍
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 ml-1">20 likes</span>
                  <span className="text-xs text-gray-500 ml-auto">6 comments</span>
                </div>
              </div>

              <div className="border-b pb-4">
                <div className="flex items-start gap-2 mb-2">
                  <Image
                    src="/images/doctor-profile.png"
                    alt="Dr. Pooja K H"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm">
                      <span className="font-medium">Dr. Pooja K H</span> posted •{" "}
                      <span className="text-gray-500">1w</span>
                    </p>
                  </div>
                </div>
                <p className="text-sm mb-2">
                  Recently attended as Delegate in online Medical Legal Conference held in Nashik by Indian Medical
                  Association. As governed by order...
                </p>
                <p className="text-sm text-gray-500 text-right">... show more</p>

                <div className="mt-4 flex gap-4">
                  <div className="border rounded p-2 flex-shrink-0">
                    <Image
                      src="/images/certificate-2.png"
                      alt="Participation Certificate"
                      width={100}
                      height={140}
                      className="object-cover"
                    />
                    <p className="text-xs text-gray-500 mt-1">Participation Certificate</p>
                    <p className="text-xs text-gray-400">1 year</p>
                  </div>
                </div>

                <div className="flex items-center mt-2">
                  <div className="flex -space-x-1">
                    <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center text-white text-xs">
                      ❤️
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 ml-1">Dr. Shilpa and 63 others</span>
                  <span className="text-xs text-gray-500 ml-auto">18 comments</span>
                </div>
              </div>

              <Button variant="link" className="text-[#0172af] px-0">
                Show Activity <ChevronRight className="w-4 h-4" />
              </Button>
            </TabsContent>
            <TabsContent value="comments">
              <p className="text-sm text-gray-500">No comments to show</p>
            </TabsContent>
            <TabsContent value="documents">
              <p className="text-sm text-gray-500">No documents to show</p>
            </TabsContent>
          </Tabs>
        </div>

        {/* Experience Section */}
        <div className="mt-6 p-6 border rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium">Experience</h2>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="text-[#0172af]">
                <Plus className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-[#0172af]">
                <Pencil className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="flex gap-4 mb-6">
            <Image src="/images/hospital-1.png" alt="ITM Govt Hospital" width={60} height={60} className="rounded" />
            <div>
              <h3 className="font-medium">Intern</h3>
              <p className="text-sm text-gray-600">ITM Govt Hospital • Internship</p>
              <p className="text-xs text-gray-500">Aug 2024 - Oct 2024 • 2 mos</p>
              <p className="text-xs text-gray-500">Gwalior</p>
              <p className="text-xs text-gray-600 mt-2">Dermatological Transition Diseases Intern</p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-6 p-6 border rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium">Education</h2>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="text-[#0172af]">
                <Plus className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-[#0172af]">
                <Pencil className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="flex gap-4 mb-6">
            <Image
              src="/images/university-1.png"
              alt="Krishna Institute of Medical Sciences"
              width={60}
              height={60}
              className="rounded"
            />
            <div>
              <h3 className="font-medium">Krishna Institute of Medical Sciences, Karad</h3>
              <p className="text-sm text-gray-600">MD - Dermatology</p>
              <p className="text-xs text-gray-500">2016 - 2019</p>
            </div>
          </div>

          <div className="flex gap-4 mb-4">
            <Image src="/images/university-2.png" alt="KMC, Mangaluru" width={60} height={60} className="rounded" />
            <div>
              <h3 className="font-medium">KMC, Mangaluru</h3>
              <p className="text-sm text-gray-600">MBBS</p>
              <p className="text-xs text-gray-500">2011 - 2016</p>
            </div>
          </div>

          <Button variant="link" className="text-[#0172af] px-0">
            Show all 3 educations <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Interests Section */}
        <div className="mt-6 mb-8 p-6 border rounded-lg">
          <h2 className="font-medium mb-4">Interests</h2>

          <div className="space-y-4">
            <div className="flex gap-2 items-center">
              <Button variant="outline" size="sm" className="rounded-full text-xs">
                Top Voices
              </Button>
              <Button variant="outline" size="sm" className="rounded-full text-xs">
                Companies
              </Button>
              <Button variant="outline" size="sm" className="rounded-full text-xs">
                Newsletter
              </Button>
              <Button variant="outline" size="sm" className="rounded-full text-xs">
                Schools
              </Button>
            </div>

            <div className="flex gap-4 items-center">
              <Image
                src="/images/doctor-avatar.png"
                alt="Dr. Richa Sharma"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="flex-1">
                <h3 className="font-medium">Dr. Richa Sharma</h3>
                <p className="text-sm text-gray-500">Neurologist - Apollo Delhi</p>
                <p className="text-xs text-gray-400">5,701,254 followers</p>
              </div>
              <Button size="sm" className="rounded-full bg-[#0172af] hover:bg-[#015d8c]">
                Following
              </Button>
            </div>

            <div className="flex gap-4 items-center">
              <Image
                src="/images/doctor-avatar-2.png"
                alt="Dr. P.C. Joseph"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="flex-1">
                <h3 className="font-medium">Dr. P.C. Joseph</h3>
                <p className="text-sm text-gray-500">General Medicine - Orchid Medicity</p>
                <p className="text-xs text-gray-400">891,254 followers</p>
              </div>
              <Button size="sm" className="rounded-full bg-[#0172af] hover:bg-[#015d8c]">
                Following
              </Button>
            </div>
          </div>

          <Button variant="link" className="text-[#0172af] mt-4 px-0">
            Show all top voices <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </DashboardLayout>
  )
}

