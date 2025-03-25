"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Search,
  Filter,
  Calendar,
  Clock,
  ThumbsUp,
  MessageCircle,
  Share,
  MoreHorizontal,
  FileText,
  ImageIcon,
  Video,
  Link2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import DashboardLayout from "@/components/layouts/dashboard-layout"

export default function PostsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [newPostContent, setNewPostContent] = useState("")
  const [postVisibility, setPostVisibility] = useState("connections")

  const posts = [
    {
      id: 1,
      author: {
        name: "Dr. Richa Sharma",
        role: "Neurologist - Apollo Delhi",
        avatar: "/images/doctor-avatar.png",
      },
      timeAgo: "10 min",
      content:
        "🔬 Embracing Digital Technologies in Healthcare: From Trials to Treatment 🔬\n\nIn today's rapidly evolving world, digital technologies are not just tools; they are game-changers. The potential they hold to revolutionize healthcare is immense, and nowhere is this more evident than in the journey from clinical trials to patient treatment.",
      likes: 45,
      comments: 23,
      shares: 7,
      hasLiked: true,
    },
    {
      id: 2,
      author: {
        name: "Dr. P.C. Joseph",
        role: "General Medicine - Orchid Medicity",
        avatar: "/images/doctor-avatar-2.png",
      },
      timeAgo: "40 min",
      content: "New Article on Brain Stroke and Research",
      image: "/images/brain-stroke-article.png",
      likes: 32,
      comments: 14,
      shares: 5,
      hasLiked: false,
    },
    {
      id: 3,
      author: {
        name: "Dr. Pooja K H",
        role: "MBBS, MD - Dermatology",
        avatar: "/images/doctor-profile.png",
      },
      timeAgo: "2 days",
      content:
        "Excited to share that I've successfully completed my internship at ITM Hospital, Gwalior (M.P). During the training I experienced valuable insights into dermatological transition diseases and their treatments.",
      image: "/images/certificate-1.png",
      likes: 78,
      comments: 31,
      shares: 12,
      hasLiked: true,
    },
  ]

  const activities = [
    {
      id: 1,
      type: "like",
      content: "You liked Dr. Richa Sharma's post about Digital Technologies in Healthcare",
      timeAgo: "5 min",
    },
    {
      id: 2,
      type: "comment",
      content: "You commented on Dr. P.C. Joseph's article about Brain Stroke Research",
      timeAgo: "30 min",
    },
    {
      id: 3,
      type: "share",
      content: "You shared Dr. Pooja K H's post about her internship completion",
      timeAgo: "1 day",
    },
    {
      id: 4,
      type: "connection",
      content: "You connected with Dr. Amit Patel, Cardiologist at Max Healthcare",
      timeAgo: "2 days",
    },
  ]

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto p-4 md:p-8 bg-[#f0f7fa] min-h-screen">
        <h1 className="text-2xl font-bold mb-6">Posts & Activity</h1>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="search"
              placeholder="Search your posts and activity"
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Date Range
            </Button>
          </div>
        </div>

        {/* Create New Post */}
        <Card className="mb-8">
          <CardContent className="p-4">
            <Dialog>
              <DialogTrigger asChild>
                <div className="flex items-center gap-3 p-2 bg-gray-100 rounded-full mb-4 cursor-pointer">
                  <Image
                    src="/images/user-avatar.png"
                    alt="User Avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <span className="text-gray-500">Start a post...</span>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                  <DialogTitle>Create a post</DialogTitle>
                  <DialogDescription>Share your thoughts, articles, or updates with your network</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="flex items-start gap-3">
                    <Image
                      src="/images/user-avatar.png"
                      alt="User Avatar"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-medium">Your Name</h3>
                      <Select value={postVisibility} onValueChange={setPostVisibility}>
                        <SelectTrigger className="w-[180px] h-8 mt-1">
                          <SelectValue placeholder="Post visibility" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="connections">Connections only</SelectItem>
                          <SelectItem value="public">Anyone</SelectItem>
                          <SelectItem value="private">Only me</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Textarea
                    placeholder="What do you want to talk about?"
                    className="min-h-[150px]"
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Button variant="outline" size="sm" className="rounded-full">
                    <ImageIcon className="w-4 h-4 mr-1" /> Add Image
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                    <Video className="w-4 h-4 mr-1" /> Add Video
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                    <FileText className="w-4 h-4 mr-1" /> Add Document
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                    <Link2 className="w-4 h-4 mr-1" /> Add Link
                  </Button>
                </div>
                <DialogFooter>
                  <Button type="submit" className="bg-[#0172af] hover:bg-[#015d8c]">
                    Post
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <div className="flex flex-wrap gap-2">
              <Button variant="outline" className="rounded-full text-xs flex items-center gap-1">
                <FileText className="w-4 h-4" />
                Write Article
              </Button>
              <Button variant="outline" className="rounded-full text-xs flex items-center gap-1">
                <ImageIcon className="w-4 h-4" />
                Image
              </Button>
              <Button variant="outline" className="rounded-full text-xs flex items-center gap-1">
                <Video className="w-4 h-4" />
                Video
              </Button>
              <Button variant="outline" className="rounded-full text-xs flex items-center gap-1">
                <Link2 className="w-4 h-4" />
                Link
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tabs for Posts and Activity */}
        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="posts">Your Posts</TabsTrigger>
            <TabsTrigger value="activity">Your Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="space-y-6">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-3">
                      <Image
                        src={post.author.avatar || "/placeholder.svg"}
                        alt={post.author.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="font-medium">{post.author.name}</h3>
                        <p className="text-sm text-gray-500">{post.author.role}</p>
                        <p className="text-xs text-gray-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {post.timeAgo}
                        </p>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="w-5 h-5 text-gray-500" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit Post</DropdownMenuItem>
                        <DropdownMenuItem>Delete Post</DropdownMenuItem>
                        <DropdownMenuItem>Hide from Profile</DropdownMenuItem>
                        <DropdownMenuItem>Who can see this post?</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm whitespace-pre-line">{post.content}</p>
                  </div>

                  {post.image && (
                    <div className="mb-4">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt="Post image"
                        width={600}
                        height={400}
                        className="w-full h-auto rounded-md"
                      />
                    </div>
                  )}

                  <div className="flex items-center justify-between text-sm text-gray-500 py-2 border-t border-b">
                    <div className="flex items-center gap-1">
                      <div className="flex -space-x-1">
                        <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                          👍
                        </div>
                      </div>
                      <span>{post.likes} likes</span>
                    </div>
                    <div className="flex gap-4">
                      <span>{post.comments} comments</span>
                      <span>{post.shares} shares</span>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`flex-1 flex items-center justify-center gap-1 ${post.hasLiked ? "text-blue-500" : "text-gray-500"}`}
                    >
                      <ThumbsUp className="w-4 h-4" />
                      Like
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1 flex items-center justify-center gap-1 text-gray-500"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Comment
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-1 flex items-center justify-center gap-1 text-gray-500"
                    >
                      <Share className="w-4 h-4" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="activity" className="space-y-4">
            {activities.map((activity) => (
              <Card key={activity.id}>
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#f0f7fa] flex items-center justify-center text-[#0172af]">
                    {activity.type === "like" && <ThumbsUp className="w-5 h-5" />}
                    {activity.type === "comment" && <MessageCircle className="w-5 h-5" />}
                    {activity.type === "share" && <Share className="w-5 h-5" />}
                    {activity.type === "connection" && (
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
                        <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">{activity.content}</p>
                    <p className="text-xs text-gray-400 mt-1">{activity.timeAgo} ago</p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="w-5 h-5 text-gray-500" />
                  </Button>
                </CardContent>
              </Card>
            ))}

            <Button variant="outline" className="w-full mt-4">
              Load More Activity
            </Button>
          </TabsContent>
        </Tabs>

        {/* Analytics */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">Post Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#0172af]">156</span>
                <span className="text-sm text-gray-500">Post Views (Last 30 days)</span>
                <span className="text-xs text-green-500 mt-1">↑ 12% from last month</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#0172af]">43</span>
                <span className="text-sm text-gray-500">Engagements (Last 30 days)</span>
                <span className="text-xs text-green-500 mt-1">↑ 8% from last month</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[#0172af]">12</span>
                <span className="text-sm text-gray-500">New Profile Views from Posts</span>
                <span className="text-xs text-green-500 mt-1">↑ 5% from last month</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

