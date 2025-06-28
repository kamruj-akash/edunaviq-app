"use client"

import { ArrowLeft, ThumbsUp, MessageCircle, Send } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import { useState } from "react"

interface PostDetailPageProps {
  onBackClick: () => void
}

export default function PostDetailPage({ onBackClick }: PostDetailPageProps) {
  const [newReply, setNewReply] = useState("")

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

  const post = {
    id: 1,
    author: "Sarah Chen",
    avatar: "SC",
    title: "Tips for IELTS Speaking Test",
    content: `Just completed my IELTS and scored 8.5 in speaking! Here are some tips that really helped me:

1. Practice speaking English daily - even if it's just talking to yourself
2. Record yourself and listen back to identify areas for improvement
3. Learn common IELTS speaking topics and prepare ideas
4. Focus on fluency over perfect grammar
5. Use a variety of vocabulary and don't repeat the same words

The key is confidence and natural conversation flow. Don't overthink it!`,
    replies: 12,
    upvotes: 24,
    timeAgo: "2 hours ago",
    category: "Study Tips",
  }

  const replies = [
    {
      id: 1,
      author: "Mike Johnson",
      avatar: "MJ",
      content: "Thanks for sharing! I'm taking IELTS next month. How long did you prepare?",
      timeAgo: "1 hour ago",
      upvotes: 3,
    },
    {
      id: 2,
      author: "Priya Sharma",
      avatar: "PS",
      content: "Great tips! I especially agree with point 4. Fluency is more important than perfect grammar.",
      timeAgo: "45 minutes ago",
      upvotes: 5,
    },
    {
      id: 3,
      author: "David Kim",
      avatar: "DK",
      content: "Did you use any specific apps or resources for practice?",
      timeAgo: "30 minutes ago",
      upvotes: 2,
    },
  ]

  const handleSubmitReply = () => {
    if (newReply.trim()) {
      // Handle reply submission
      setNewReply("")
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gray-50 pb-20"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="flex items-center p-4 pt-12 bg-white">
        <motion.button whileTap={{ scale: 0.95 }} onClick={onBackClick} className="p-2 -ml-2">
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </motion.button>
        <h1 className="text-xl font-semibold text-gray-900 ml-2">Post Details</h1>
      </motion.div>

      <div className="px-4 pt-6">
        {/* Main Post */}
        <motion.div variants={itemVariants} className="mb-6">
          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-4">
              {/* Post Header */}
              <div className="flex items-center gap-3 mb-4">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-blue-100 text-blue-600 font-medium">{post.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{post.author}</p>
                  <p className="text-sm text-gray-500">{post.timeAgo}</p>
                </div>
                <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </div>
              </div>

              {/* Post Content */}
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{post.title}</h2>
              <div className="text-gray-700 whitespace-pre-line mb-4">{post.content}</div>

              {/* Post Stats */}
              <div className="flex items-center gap-6 text-sm text-gray-500 pt-4 border-t">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1 hover:text-blue-500"
                >
                  <ThumbsUp className="w-4 h-4" />
                  <span>{post.upvotes} upvotes</span>
                </motion.button>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>{post.replies} replies</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Replies */}
        <motion.div variants={itemVariants} className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Replies</h3>
          <div className="space-y-4">
            {replies.map((reply, index) => (
              <motion.div
                key={reply.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.01 }}
              >
                <Card className="bg-white border-0 shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-gray-100 text-gray-600 text-sm font-medium">
                          {reply.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <p className="font-medium text-gray-900">{reply.author}</p>
                          <p className="text-sm text-gray-500">{reply.timeAgo}</p>
                        </div>
                        <p className="text-gray-700 mb-3">{reply.content}</p>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-500"
                        >
                          <ThumbsUp className="w-3 h-3" />
                          <span>{reply.upvotes}</span>
                        </motion.button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Reply Form */}
        <motion.div variants={itemVariants}>
          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-4">
              <h4 className="font-medium text-gray-900 mb-3">Add a reply</h4>
              <Textarea
                placeholder="Share your thoughts..."
                value={newReply}
                onChange={(e) => setNewReply(e.target.value)}
                className="mb-3 min-h-[100px]"
              />
              <motion.div whileTap={{ scale: 0.98 }}>
                <Button onClick={handleSubmitReply} className="bg-blue-500 hover:bg-blue-600">
                  <Send className="w-4 h-4 mr-2" />
                  Post Reply
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  )
}
