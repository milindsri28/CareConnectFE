"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, UserPlus, Check, X, MoreHorizontal, Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import DashboardLayout from "@/components/layouts/dashboard-layout"

export default function ConnectionsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterType, setFilterType] = useState("all")

  const pendingConnections = [
    {
      id: 1,
      name: "Dr. Amit Patel",
      role: "Cardiologist - Max Healthcare",
      avatar: "/images/avatar-1.png",
      mutualConnections: 12,
      timeAgo: "2 days ago",
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      role: "Pediatrician - Apollo Hospital",
      avatar: "/images/avatar-2.png",
      mutualConnections: 8,
      timeAgo: "3 days ago",
    },
    {
      id: 3,
      name: "Dr. Rajesh Kumar",
      role: "Orthopedic Surgeon - AIIMS",
      avatar: "/images/avatar-3.png",
      mutualConnections: 5,
      timeAgo: "1 week ago",
    },
  ]

  const connections = [
    {
      id: 1,
      name: "Dr. Richa Sharma",
      role: "Neurologist - Apollo Delhi",
      avatar: "/images/doctor-avatar.png",
      mutualConnections: 23,
      connected: "1 month ago",
    },
    {
      id: 2,
      name: "Dr. P.C. Joseph",
      role: "General Medicine - Orchid Medicity",
      avatar: "/images/doctor-avatar-2.png",
      mutualConnections: 15,
      connected: "2 months ago",
    },
    {
      id: 3,
      name: "Dr. Pooja K H",
      role: "MBBS, MD - Dermatology",
      avatar: "/images/doctor-profile.png",
      mutualConnections: 7,
      connected: "3 months ago",
    },
    {
      id: 4,
      name: "Dr. Suresh Menon",
      role: "Gastroenterologist - Fortis Hospital",
      avatar: "/images/avatar-1.png",
      mutualConnections: 19,
      connected: "4 months ago",
    },
    {
      id: 5,
      name: "Dr. Anita Desai",
      role: "Gynecologist - Manipal Hospital",
      avatar: "/images/avatar-2.png",
      mutualConnections: 11,
      connected: "5 months ago",
    },
    {
      id: 6,
      name: "Dr. Vikram Singh",
      role: "Psychiatrist - NIMHANS",
      avatar: "/images/avatar-3.png",
      mutualConnections: 9,
      connected: "6 months ago",
    },
  ]

  const suggestions = [
    {
      id: 1,
      name: "Dr. Meera Reddy",
      role: "Oncologist - Tata Memorial",
      avatar: "/images/avatar-1.png",
      mutualConnections: 18,
      reason: "Based on your profile",
    },
    {
      id: 2,
      name: "Dr. Sanjay Gupta",
      role: "Neurologist - NIMHANS",
      avatar: "/images/avatar-2.png",
      mutualConnections: 14,
      reason: "People you may know",
    },
    {
      id: 3,
      name: "Dr. Kavita Nair",
      role: "Dermatologist - Manipal Hospital",
      avatar: "/images/avatar-3.png",
      mutualConnections: 7,
      reason: "Similar to your connections",
    },
    {
      id: 4,
      name: "Dr. Rahul Mehta",
      role: "Cardiologist - Fortis Hospital",
      avatar: "/images/doctor-avatar.png",
      mutualConnections: 9,
      reason: "From your alma mater",
    },
  ]

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto p-4 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-bold">Connections</h1>
            <p className="text-gray-600">Manage your professional network</p>
          </div>
          <Button className="bg-[#0172af] hover:bg-[#015d8c] flex items-center gap-2">
            <UserPlus className="w-4 h-4" />
            Add Connections
          </Button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="search"
              placeholder="Search connections by name or role"
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant={filterType === "all" ? "default" : "outline"}
              className={filterType === "all" ? "bg-[#0172af] hover:bg-[#015d8c]" : ""}
              onClick={() => setFilterType("all")}
            >
              All
            </Button>
            <Button
              variant={filterType === "recent" ? "default" : "outline"}
              className={filterType === "recent" ? "bg-[#0172af] hover:bg-[#015d8c]" : ""}
              onClick={() => setFilterType("recent")}
            >
              Recent
            </Button>
            <Button
              variant={filterType === "mutual" ? "default" : "outline"}
              className={filterType === "mutual" ? "bg-[#0172af] hover:bg-[#015d8c]" : ""}
              onClick={() => setFilterType("mutual")}
            >
              Mutual
            </Button>
          </div>
        </div>

        {/* Tabs for Connections, Pending, and Suggestions */}
        <Tabs defaultValue="connections" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="connections">Your Connections</TabsTrigger>
            <TabsTrigger value="pending">
              Pending
              {pendingConnections.length > 0 && (
                <Badge className="ml-2 bg-[#0172af]">{pendingConnections.length}</Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
          </TabsList>

          <TabsContent value="connections" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {connections.map((connection) => (
                <Card key={connection.id}>
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <Image
                        src={connection.avatar || "/placeholder.svg"}
                        alt={connection.name}
                        width={64}
                        height={64}
                        className="rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-medium">
                              <Link href={`/profile/${connection.id}`} className="hover:text-[#0172af]">
                                {connection.name}
                              </Link>
                            </h3>
                            <p className="text-sm text-gray-500">{connection.role}</p>
                            <p className="text-xs text-gray-400 mt-1">
                              {connection.mutualConnections} mutual connections • Connected {connection.connected}
                            </p>
                          </div>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="w-5 h-5 text-gray-500" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View Profile</DropdownMenuItem>
                              <DropdownMenuItem>Send Message</DropdownMenuItem>
                              <DropdownMenuItem>Recommend</DropdownMenuItem>
                              <DropdownMenuItem className="text-red-500">Remove Connection</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                        <div className="flex gap-2 mt-3">
                          <Button variant="outline" size="sm" className="rounded-full flex items-center gap-1">
                            <MessageCircle className="w-3 h-3" />
                            Message
                          </Button>
                          <Button variant="outline" size="sm" className="rounded-full flex items-center gap-1">
                            <Mail className="w-3 h-3" />
                            Email
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button variant="outline" className="w-full">
              Load More Connections
            </Button>
          </TabsContent>

          <TabsContent value="pending" className="space-y-4">
            {pendingConnections.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <h3 className="font-medium mb-2">No pending connection requests</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    When someone sends you a connection request, it will appear here
                  </p>
                </CardContent>
              </Card>
            ) : (
              pendingConnections.map((request) => (
                <Card key={request.id}>
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <Image
                        src={request.avatar || "/placeholder.svg"}
                        alt={request.name}
                        width={64}
                        height={64}
                        className="rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-medium">
                              <Link href={`/profile/${request.id}`} className="hover:text-[#0172af]">
                                {request.name}
                              </Link>
                            </h3>
                            <p className="text-sm text-gray-500">{request.role}</p>
                            <p className="text-xs text-gray-400 mt-1">
                              {request.mutualConnections} mutual connections • Requested {request.timeAgo}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2 mt-3">
                          <Button
                            size="sm"
                            className="rounded-full bg-[#0172af] hover:bg-[#015d8c] flex items-center gap-1"
                          >
                            <Check className="w-3 h-3" />
                            Accept
                          </Button>
                          <Button variant="outline" size="sm" className="rounded-full flex items-center gap-1">
                            <X className="w-3 h-3" />
                            Ignore
                          </Button>
                          <Button variant="outline" size="sm" className="rounded-full flex items-center gap-1">
                            <MessageCircle className="w-3 h-3" />
                            Message
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          <TabsContent value="suggestions" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {suggestions.map((suggestion) => (
                <Card key={suggestion.id}>
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <Image
                        src={suggestion.avatar || "/placeholder.svg"}
                        alt={suggestion.name}
                        width={64}
                        height={64}
                        className="rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-medium">
                              <Link href={`/profile/${suggestion.id}`} className="hover:text-[#0172af]">
                                {suggestion.name}
                              </Link>
                            </h3>
                            <p className="text-sm text-gray-500">{suggestion.role}</p>
                            <p className="text-xs text-gray-400 mt-1">
                              {suggestion.mutualConnections} mutual connections • {suggestion.reason}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2 mt-3">
                          <Button
                            size="sm"
                            className="rounded-full bg-[#0172af] hover:bg-[#015d8c] flex items-center gap-1"
                          >
                            <UserPlus className="w-3 h-3" />
                            Connect
                          </Button>
                          <Button variant="outline" size="sm" className="rounded-full flex items-center gap-1">
                            <X className="w-3 h-3" />
                            Dismiss
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button variant="outline" className="w-full">
              View More Suggestions
            </Button>
          </TabsContent>
        </Tabs>

        {/* Network Statistics */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">Your Network Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#0172af]">{connections.length}</span>
                <span className="text-sm text-gray-500">Total Connections</span>
                <span className="text-xs text-green-500 mt-1">↑ 12% from last month</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#0172af]">43</span>
                <span className="text-sm text-gray-500">Profile Views from Network</span>
                <span className="text-xs text-green-500 mt-1">↑ 8% from last month</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#0172af]">12</span>
                <span className="text-sm text-gray-500">New Connections This Month</span>
                <span className="text-xs text-green-500 mt-1">↑ 5% from last month</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

