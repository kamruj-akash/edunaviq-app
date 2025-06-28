"use client"

import { ArrowLeft, Clock, User, Calendar, Share, Bookmark, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface BlogDetailPageProps {
  blog: any
  onBackClick: () => void
}

export default function BlogDetailPage({ blog, onBackClick }: BlogDetailPageProps) {
  if (!blog) return null

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
          <h1 className="text-xl font-semibold text-gray-900 ml-2">Article</h1>
        </div>
        <div className="flex gap-2">
          <motion.button whileTap={{ scale: 0.95 }} className="p-2">
            <Share className="w-5 h-5 text-gray-600" />
          </motion.button>
          <motion.button whileTap={{ scale: 0.95 }} className="p-2">
            <Bookmark className="w-5 h-5 text-gray-600" />
          </motion.button>
        </div>
      </motion.div>

      <div className="px-4 pt-6">
        {/* Article Header */}
        <motion.div variants={itemVariants} className="mb-6">
          <Card className="bg-white border-0 shadow-sm overflow-hidden">
            <div className={`h-48 bg-gradient-to-br ${blog.bgColor} relative`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 rounded-full" />
              </div>
            </div>
            <CardContent className="p-6">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 mb-3">{blog.category}</Badge>
              <h1 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{blog.title}</h1>

              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(blog.publishDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{blog.readTime}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-medium"
                >
                  <Heart className="w-4 h-4" />
                  <span>Like</span>
                </motion.button>
                <span className="text-sm text-gray-500">234 likes</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Article Content */}
        <motion.div variants={itemVariants} className="mb-6">
          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-6">
              <div
                className="prose prose-gray max-w-none"
                dangerouslySetInnerHTML={{
                  __html: blog.content.replace(/\n/g, "<br>").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                }}
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* Related Articles */}
        <motion.div variants={itemVariants} className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Related Articles</h2>
          <div className="space-y-4">
            {[
              {
                title: "Understanding Australian Work Culture",
                category: "CAREER",
                readTime: "4 min read",
                bgColor: "from-blue-200 to-blue-300",
              },
              {
                title: "Student Visa Requirements 2024",
                category: "STUDY",
                readTime: "6 min read",
                bgColor: "from-green-200 to-green-300",
              },
            ].map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.01, x: 4 }}
                whileTap={{ scale: 0.99 }}
              >
                <Card className="bg-white border-0 shadow-sm cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-16 h-12 bg-gradient-to-br ${article.bgColor} rounded-lg flex items-center justify-center`}
                      >
                        <div className="w-6 h-6 bg-white/20 rounded-full" />
                      </div>
                      <div className="flex-1">
                        <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100 mb-2 text-xs">
                          {article.category}
                        </Badge>
                        <h3 className="font-semibold text-gray-900 mb-1">{article.title}</h3>
                        <p className="text-sm text-gray-500">{article.readTime}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex gap-4">
          <Button variant="outline" className="flex-1 bg-transparent">
            Save for Later
          </Button>
          <Button className="flex-1 bg-blue-500 hover:bg-blue-600">Share Article</Button>
        </motion.div>
      </div>
    </motion.div>
  )
}
