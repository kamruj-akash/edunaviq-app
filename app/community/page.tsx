"use client"

import { ArrowLeft, Plus, MessageCircle, ThumbsUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import { useState } from "react"

interface CommunityForumPageProps {
  onBackClick: () => void
}

export default function CommunityForumPage({ onBackClick }: CommunityForumPageProps) {
  const [showCreatePost, setShowCreatePost] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const forumPosts = [
    {
      id: 1,
      author: "Sarah Chen",
      avatar: "SC",
      title: "Tips for IELTS Speaking Test",
      content: "Just completed my IELTS and scored 8.5 in speaking! Here are some tips that really helped me...",
      replies: 12,
      upvotes: 24,
      timeAgo: "2 hours ago",
      category: "Study Tips",
    },
    {
      id: 2,
      author: "Mike Johnson",
      avatar: "MJ",
      title: "Best areas to live in Melbourne for students",
      content:
        "Moving to Melbourne next month for my Masters. Looking for recommendations on student-friendly areas...",
      replies: 8,
      upvotes: 15,
      timeAgo: "5 hours ago",
      category: "Accommodation",
    },
    {
      id: 3,
      author: "Priya Sharma",
      avatar: "PS",
      title: "Part-time job opportunities while studying",
      content: "What are the best part-time jobs for international students? Share your experiences!",
      replies: 18,
      upvotes: 31,
      timeAgo: "1 day ago",
      category: "Career",
    },
    {
      id: 4,
      author: "David Kim",
      avatar: "DK",
      title: "Student visa processing time - 2024 update",
      content: "Applied for my student visa 3 weeks ago. Anyone else waiting? Let's share our timelines...",
      replies: 22,
      upvotes: 45,
      timeAgo: "2 days ago",
      category: "Visa",
    },
  ]

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gray-50 pb-20"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="flex items-center justify-between p-4 pt-12 bg-white">
        <div className="flex items-center">
          <motion.button whileTap={{ scale: 0.95 }} onClick={onBackClick} className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </motion.button>
          <h1 className="text-xl font-semibold text-gray-900 ml-2">Community Forums</h1>
        </div>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowCreatePost(true)}
          className="bg-blue-500 text-white p-2 rounded-full"
        >
          <Plus className="w-5 h-5" />
        </motion.button>
      </motion.div>

      <div className="px-4 pt-6">
        {/* Posts List */}
        <div className="space-y-4">
          {forumPosts.map((post, index) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              whileHover={{ scale: 1.01, y: -2 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="bg-white border-0 shadow-sm cursor-pointer">
                <CardContent className="p-4">
                  {/* Post Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-blue-100 text-blue-600 text-sm font-medium">
                        {post.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{post.author}</p>
                      <p className="text-sm text-gray-500">{post.timeAgo}</p>
                    </div>
                    <div className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </div>
                  </div>

                  {/* Post Content */}
                  <h3 className="font-semibold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.content}</p>

                  {/* Post Stats */}
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.replies} replies</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="w-4 h-4" />
                      <span>{post.upvotes} upvotes</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Create Post Button */}
        <motion.div variants={itemVariants} className="mt-6">
          <motion.div whileTap={{ scale: 0.98 }}>
            <Button onClick={() => setShowCreatePost(true)} className="w-full bg-blue-500 hover:bg-blue-600 py-3">
              <Plus className="w-5 h-5 mr-2" />
              Create New Post
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
