"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, Filter, MapPin, Clock, Bookmark, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import DashboardLayout from "@/components/layouts/dashboard-layout"

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [location, setLocation] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        <h1 className="text-2xl font-bold mb-6">Find Your Dream Medical Job</h1>

        {/* Search Bar */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by title, skill, or company"
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Location"
                className="pl-10"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <Button className="bg-[#0172af] hover:bg-[#015d8c]">Search</Button>
            <Button variant="outline" className="flex items-center gap-2" onClick={() => setShowFilters(!showFilters)}>
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>

          {showFilters && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t">
              <div>
                <h3 className="font-medium mb-2">Date Posted</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="past24h" />
                    <label htmlFor="past24h" className="text-sm">
                      Past 24 hours
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="past3days" />
                    <label htmlFor="past3days" className="text-sm">
                      Past 3 days
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="pastWeek" />
                    <label htmlFor="pastWeek" className="text-sm">
                      Past week
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="pastMonth" />
                    <label htmlFor="pastMonth" className="text-sm">
                      Past month
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Experience Level</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="internship" />
                    <label htmlFor="internship" className="text-sm">
                      Internship
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="entry" />
                    <label htmlFor="entry" className="text-sm">
                      Entry level
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="associate" />
                    <label htmlFor="associate" className="text-sm">
                      Associate
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="mid-senior" />
                    <label htmlFor="mid-senior" className="text-sm">
                      Mid-Senior level
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="director" />
                    <label htmlFor="director" className="text-sm">
                      Director
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Job Type</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="fullTime" />
                    <label htmlFor="fullTime" className="text-sm">
                      Full-time
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="partTime" />
                    <label htmlFor="partTime" className="text-sm">
                      Part-time
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="contract" />
                    <label htmlFor="contract" className="text-sm">
                      Contract
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="temporary" />
                    <label htmlFor="temporary" className="text-sm">
                      Temporary
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="volunteer" />
                    <label htmlFor="volunteer" className="text-sm">
                      Volunteer
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
            <div className="flex gap-4">
              <Image src="/images/hospital-1.png" alt="Amrita Hospital" width={80} height={80} className="rounded" />
              <div className="flex-1">
                <div className="flex justify-between">
                  <h2 className="text-lg font-medium">
                    <Link href="/jobs/1" className="text-[#0172af] hover:underline">
                      Consultant - Neuro Surgery
                    </Link>
                  </h2>
                  <Button variant="ghost" size="icon">
                    <Bookmark className="w-5 h-5 text-gray-400" />
                  </Button>
                </div>
                <p className="text-gray-600">Amrita Hospital</p>
                <p className="text-gray-500 flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> Faridabad, Haryana, India
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="bg-[#e6f7ff] text-[#0172af] text-xs px-2 py-1 rounded-full">Full-time</span>
                  <span className="bg-[#e6f7ff] text-[#0172af] text-xs px-2 py-1 rounded-full">On-site</span>
                  <span className="bg-[#e6f7ff] text-[#0172af] text-xs px-2 py-1 rounded-full">Medical</span>
                </div>
                <div className="mt-2 flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" /> Posted 10 minutes ago
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
            <div className="flex gap-4">
              <Image src="/images/hospital-2.png" alt="Apollo Hospital" width={80} height={80} className="rounded" />
              <div className="flex-1">
                <div className="flex justify-between">
                  <h2 className="text-lg font-medium">
                    <Link href="/jobs/2" className="text-[#0172af] hover:underline">
                      Optomologist Surgeon - Ophthalmology
                    </Link>
                  </h2>
                  <Button variant="ghost" size="icon">
                    <Bookmark className="w-5 h-5 text-gray-400" />
                  </Button>
                </div>
                <p className="text-gray-600">Apollo Hospital</p>
                <p className="text-gray-500 flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> Chennai, Tamil Nadu, India
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="bg-[#e6f7ff] text-[#0172af] text-xs px-2 py-1 rounded-full">Full-time</span>
                  <span className="bg-[#e6f7ff] text-[#0172af] text-xs px-2 py-1 rounded-full">On-site</span>
                  <span className="bg-[#e6f7ff] text-[#0172af] text-xs px-2 py-1 rounded-full">Medical</span>
                </div>
                <div className="mt-2 flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" /> Posted 20 minutes ago
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
            <div className="flex gap-4">
              <Image src="/images/hospital-3.png" alt="Fortis Hospital" width={80} height={80} className="rounded" />
              <div className="flex-1">
                <div className="flex justify-between">
                  <h2 className="text-lg font-medium">
                    <Link href="/jobs/3" className="text-[#0172af] hover:underline">
                      Radiologist - Interventional Radiology
                    </Link>
                  </h2>
                  <Button variant="ghost" size="icon">
                    <Bookmark className="w-5 h-5 text-gray-400" />
                  </Button>
                </div>
                <p className="text-gray-600">Fortis Hospital</p>
                <p className="text-gray-500 flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> Delhi, India
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="bg-[#e6f7ff] text-[#0172af] text-xs px-2 py-1 rounded-full">Full-time</span>
                  <span className="bg-[#e6f7ff] text-[#0172af] text-xs px-2 py-1 rounded-full">On-site</span>
                  <span className="bg-[#e6f7ff] text-[#0172af] text-xs px-2 py-1 rounded-full">Medical</span>
                </div>
                <div className="mt-2 flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" /> Posted 40 minutes ago
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
            <div className="flex gap-4">
              <Image src="/images/hospital-4.png" alt="AIIMS" width={80} height={80} className="rounded" />
              <div className="flex-1">
                <div className="flex justify-between">
                  <h2 className="text-lg font-medium">
                    <Link href="/jobs/4" className="text-[#0172af] hover:underline">
                      Cardiologist - Interventional Cardiology
                    </Link>
                  </h2>
                  <Button variant="ghost" size="icon">
                    <Bookmark className="w-5 h-5 text-gray-400" />
                  </Button>
                </div>
                <p className="text-gray-600">AIIMS</p>
                <p className="text-gray-500 flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> New Delhi, India
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="bg-[#e6f7ff] text-[#0172af] text-xs px-2 py-1 rounded-full">Full-time</span>
                  <span className="bg-[#e6f7ff] text-[#0172af] text-xs px-2 py-1 rounded-full">On-site</span>
                  <span className="bg-[#e6f7ff] text-[#0172af] text-xs px-2 py-1 rounded-full">Medical</span>
                </div>
                <div className="mt-2 flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" /> Posted 1 hour ago
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
            <div className="flex gap-4">
              <Image src="/images/hospital-5.png" alt="Max Healthcare" width={80} height={80} className="rounded" />
              <div className="flex-1">
                <div className="flex justify-between">
                  <h2 className="text-lg font-medium">
                    <Link href="/jobs/5" className="text-[#0172af] hover:underline">
                      Pediatrician - Neonatal Care
                    </Link>
                  </h2>
                  <Button variant="ghost" size="icon">
                    <Bookmark className="w-5 h-5 text-gray-400" />
                  </Button>
                </div>
                <p className="text-gray-600">Max Healthcare</p>
                <p className="text-gray-500 flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> Gurgaon, Haryana, India
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="bg-[#e6f7ff] text-[#0172af] text-xs px-2 py-1 rounded-full">Full-time</span>
                  <span className="bg-[#e6f7ff] text-[#0172af] text-xs px-2 py-1 rounded-full">On-site</span>
                  <span className="bg-[#e6f7ff] text-[#0172af] text-xs px-2 py-1 rounded-full">Medical</span>
                </div>
                <div className="mt-2 flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" /> Posted 2 hours ago
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <Button variant="outline" className="flex items-center gap-2">
            Show more jobs <ChevronDown className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </DashboardLayout>
  )
}

