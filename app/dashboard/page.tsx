"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { User, Clock, ThumbsUp, MessageCircle, Share, Flag } from "lucide-react"
import { Button } from "@/components/ui/button"
import DashboardLayout from "@/components/layouts/dashboard-layout"
import { Card, CardContent } from "@/components/ui/card"

export default function Dashboard() {
  const [postText, setPostText] = useState("")

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        {/* Left Column - User Profile */}
        <div className="md:col-span-1">
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-r from-[#0172af] to-[#34a353] p-4 text-white">
              <div className="flex justify-center">
                <Image
                  src="/images/user-avatar.png"
                  alt="User Avatar"
                  width={80}
                  height={80}
                  className="rounded-full border-2 border-white"
                />
              </div>
              <h2 className="text-center font-bold mt-2">User's Name</h2>
              <p className="text-center text-sm">User's Designation & Profile</p>
            </div>
            <div className="p-4 flex justify-center">
              <Button className="bg-gradient-to-r from-[#0172af] to-[#34a353] text-white rounded-full">
                View Profile
              </Button>
            </div>
            <div className="p-4">
              <nav className="space-y-4">
                <Link href="/dashboard" className="flex items-center gap-2 text-[#545454] font-medium">
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
                    className="w-5 h-5"
                  >
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                  Dashboard
                </Link>
                <Link href="/reminders" className="flex items-center gap-2 text-[#545454] font-medium">
                  <Clock className="w-5 h-5" />
                  Reminders
                </Link>
                <Link href="/applications" className="flex items-center gap-2 text-[#545454] font-medium">
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
                    className="w-5 h-5"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                  Applications
                </Link>
                <Link href="/settings" className="flex items-center gap-2 text-[#545454] font-medium">
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
                    className="w-5 h-5"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                  Settings
                </Link>
              </nav>
            </div>
            <div className="p-4 bg-gradient-to-r from-[#0172af] to-[#34a353] text-white">
              <h3 className="font-medium mb-2">Refine your Profile</h3>
              <p className="text-sm mb-4">Enrich your profile and benefit from better visibility on the platform</p>
              <div className="w-full bg-white/20 h-2 rounded-full">
                <div className="bg-white h-2 rounded-full w-[60%]"></div>
              </div>
              <div className="flex justify-between text-xs mt-1">
                <span>60%</span>
                <span>100%</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Middle Column - Feed */}
        <div className="md:col-span-1">
          {/* Carousel */}
          <Card className="mb-6 overflow-hidden">
            <div className="bg-gradient-to-r from-[#0172af] to-[#34a353] p-6 text-white relative">
              <h2 className="text-xl font-bold mb-2">Discover your Dream Job with CareConnect</h2>
              <p className="text-sm mb-4">
                Don't let your career dreams remain dreams; turn them into reality with our product and discover your
                dream job today.
              </p>
              <Button className="bg-white text-[#0172af] hover:bg-white/90 rounded-full">Discover</Button>
              <div className="absolute bottom-2 right-2">
                <Image src="/images/job-discovery.png" alt="Job Discovery" width={100} height={100} />
              </div>
              <div className="flex justify-center gap-1 mt-4">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <div className="w-2 h-2 rounded-full bg-white/50"></div>
                <div className="w-2 h-2 rounded-full bg-white/50"></div>
              </div>
            </div>
          </Card>

          {/* Create Post */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 p-2 bg-gray-100 rounded-full mb-4">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                  <User className="w-4 h-4 text-gray-600" />
                </div>
                <input
                  type="text"
                  placeholder="Share a Post"
                  className="bg-transparent flex-1 outline-none text-sm"
                  value={postText}
                  onChange={(e) => setPostText(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" className="rounded-full text-xs flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  Write Article
                </Button>
                <Button variant="outline" className="rounded-full text-xs flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="23 7 16 12 23 17 23 7" />
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                  </svg>
                  Video
                </Button>
                <Button variant="outline" className="rounded-full text-xs flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                  Link
                </Button>
                <Button variant="outline" className="rounded-full text-xs flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  Photo
                </Button>
                <Button className="ml-auto rounded-full bg-[#0172af] hover:bg-[#015d8c]">Post</Button>
              </div>
            </CardContent>
          </Card>

          {/* Posts */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex items-start gap-3 mb-4">
                <Image
                  src="/images/doctor-avatar.png"
                  alt="Dr. Richa Sharma"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-medium">Dr. Richa Sharma</h3>
                  <p className="text-sm text-gray-500">Neurologist - Apollo Delhi</p>
                  <p className="text-xs text-gray-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> 10 min
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm mb-2">
                  🔬 Embracing Digital Technologies in Healthcare: From Trials to Treatment 🔬
                </p>
                <p className="text-sm text-gray-700">
                  In today's rapidly evolving world, digital technologies are not just tools; they are game-changers.
                  The potential they hold to revolutionize healthcare is immense, and nowhere is this more evident than
                  in the journey from clinical trials to patient treatment.
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  Imagine an entire ecosystem where data seamlessly flows from research{" "}
                  <Link href="#" className="text-[#0172af]">
                    read more
                  </Link>
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-b py-2 mb-2">
                <div className="flex items-center gap-1">
                  <div className="flex -space-x-2">
                    <Image
                      src="/images/avatar-1.png"
                      alt="User"
                      width={24}
                      height={24}
                      className="rounded-full border border-white"
                    />
                    <Image
                      src="/images/avatar-2.png"
                      alt="User"
                      width={24}
                      height={24}
                      className="rounded-full border border-white"
                    />
                    <Image
                      src="/images/avatar-3.png"
                      alt="User"
                      width={24}
                      height={24}
                      className="rounded-full border border-white"
                    />
                  </div>
                  <span className="text-xs text-gray-500">23 Comments</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="text-gray-500 flex items-center gap-1">
                  <ThumbsUp className="w-4 h-4" />
                  Like
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-500 flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  Comment
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-500 flex items-center gap-1">
                  <Share className="w-4 h-4" />
                  Share
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-500 flex items-center gap-1 ml-auto">
                  <Flag className="w-4 h-4" />
                  Report
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex items-start gap-3 mb-4">
                <Image
                  src="/images/doctor-avatar-2.png"
                  alt="Dr. P.C. Joseph"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-medium">Dr. P.C. Joseph</h3>
                  <p className="text-sm text-gray-500">General Medicine - Orchid Medicity</p>
                  <p className="text-xs text-gray-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> 40 min
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm mb-2">New Article on Brain Stroke and Research</p>
                <div className="border rounded-md overflow-hidden">
                  <Image
                    src="/images/brain-stroke-article.png"
                    alt="Brain Stroke Article"
                    width={600}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Stats and Recommendations */}
        <div className="md:col-span-1">
          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <h3 className="text-2xl font-bold text-[#0172af]">210</h3>
                <p className="text-sm text-gray-500">Profile Views</p>
                <p className="text-xs text-gray-400 flex items-center gap-1 mt-2">
                  <Clock className="w-3 h-3" /> Past 10 days
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="text-2xl font-bold text-[#0172af]">90</h3>
                <p className="text-sm text-gray-500">Post Impressions</p>
                <p className="text-xs text-gray-400 flex items-center gap-1 mt-2">
                  <Clock className="w-3 h-3" /> Past 12 days
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Job Recommendations */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Jobs</h3>
                <Link href="/jobs" className="text-sm text-[#0172af] bg-[#e6f7ff] px-3 py-1 rounded-full">
                  View all
                </Link>
              </div>
              <p className="text-sm text-gray-500 mb-4">365 job recommendations for you</p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <Image
                    src="/images/hospital-1.png"
                    alt="Amrita Hospital"
                    width={50}
                    height={50}
                    className="rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium">Consultant - Neuro Surgery</h4>
                    <p className="text-sm text-gray-500">Faridabad - Amrita Hospital</p>
                    <p className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> 10 min
                    </p>
                  </div>
                  <Button variant="ghost" size="icon" className="text-gray-400">
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
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </Button>
                </div>

                <div className="flex gap-3">
                  <Image
                    src="/images/hospital-2.png"
                    alt="Apollo Hospital"
                    width={50}
                    height={50}
                    className="rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium">Optomologist Surgeon - Ophthalmology</h4>
                    <p className="text-sm text-gray-500">Chennai - Apollo Hospital</p>
                    <p className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> 20 min
                    </p>
                  </div>
                  <Button variant="ghost" size="icon" className="text-gray-400">
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
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </Button>
                </div>

                <div className="flex gap-3">
                  <Image
                    src="/images/hospital-3.png"
                    alt="Fortis Hospital"
                    width={50}
                    height={50}
                    className="rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium">Radiologist - Interventional Radiology</h4>
                    <p className="text-sm text-gray-500">Delhi - Fortis Hospital</p>
                    <p className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> 40 min
                    </p>
                  </div>
                  <Button variant="ghost" size="icon" className="text-gray-400">
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
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Events */}
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Events</h3>
                <Link href="/events" className="text-sm text-[#0172af] bg-[#e6f7ff] px-3 py-1 rounded-full">
                  View all
                </Link>
              </div>
              <p className="text-sm text-gray-500 mb-4">97 events this week</p>

              <div className="space-y-4">
                <div className="border rounded-lg overflow-hidden">
                  <div className="flex gap-3 p-3">
                    <div className="bg-[#e6f7ff] p-2 rounded text-center min-w-[60px]">
                      <p className="text-xs text-[#0172af]">Tue, Sep 24</p>
                      <p className="text-xs text-[#0172af]">4:30 PM</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Pharma-SOS Indian Conference</h4>
                      <p className="text-xs text-gray-500">JD Grand Oasis, Chennai</p>
                      <p className="text-xs text-gray-400 mt-1">21 participants</p>
                    </div>
                  </div>
                  <div className="flex justify-end gap-2 p-2 bg-gray-50">
                    <Button variant="ghost" size="icon" className="w-6 h-6 text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                      </svg>
                    </Button>
                    <Button variant="ghost" size="icon" className="w-6 h-6 text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                        <polyline points="16 6 12 2 8 6" />
                        <line x1="12" y1="2" x2="12" y2="15" />
                      </svg>
                    </Button>
                  </div>
                </div>

                <div className="border rounded-lg overflow-hidden">
                  <div className="flex gap-3 p-3">
                    <div className="bg-[#e6f7ff] p-2 rounded text-center min-w-[60px]">
                      <p className="text-xs text-[#0172af]">Tue, Jan 21</p>
                      <p className="text-xs text-[#0172af]">9:00 AM</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Vaccines World Summit 2025</h4>
                      <p className="text-xs text-gray-500">Ballroom Blv, Pune</p>
                      <p className="text-xs text-gray-400 mt-1">37 participants</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

