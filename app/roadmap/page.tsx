"use client"

import { ArrowLeft, Check, Clock, Circle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface CareerRoadmapPageProps {
  onBackClick: () => void
}

export default function CareerRoadmapPage({ onBackClick }: CareerRoadmapPageProps) {
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

  const roadmapSteps = [
    {
      id: 1,
      title: "Complete English Proficiency Test",
      description: "Take IELTS or PTE Academic test",
      status: "completed",
      date: "Completed 2 months ago",
    },
    {
      id: 2,
      title: "Submit University Application",
      description: "Apply to University of Melbourne",
      status: "completed",
      date: "Completed 1 month ago",
    },
    {
      id: 3,
      title: "Receive Letter of Offer",
      description: "Get conditional offer from university",
      status: "in-progress",
      date: "Expected in 2 weeks",
    },
    {
      id: 4,
      title: "Apply for Student Visa",
      description: "Submit visa application with documents",
      status: "todo",
      date: "Start after receiving offer",
    },
    {
      id: 5,
      title: "Arrange Accommodation",
      description: "Book student housing or apartment",
      status: "todo",
      date: "2 months before arrival",
    },
    {
      id: 6,
      title: "Book Flight & Prepare for Departure",
      description: "Final preparations for Australia",
      status: "todo",
      date: "1 month before semester",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <Check className="w-4 h-4 text-white" />
      case "in-progress":
        return <Clock className="w-4 h-4 text-white" />
      default:
        return <Circle className="w-4 h-4 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500"
      case "in-progress":
        return "bg-blue-500"
      default:
        return "bg-gray-300"
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Completed</Badge>
      case "in-progress":
        return <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">In Progress</Badge>
      default:
        return <Badge variant="secondary">To Do</Badge>
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
        <h1 className="text-xl font-semibold text-gray-900 ml-2">My Career Roadmap</h1>
      </motion.div>

      <div className="px-4 pt-6">
        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />

          <div className="space-y-6">
            {roadmapSteps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                whileHover={{ scale: 1.01, x: 4 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                {/* Status Circle */}
                <motion.div
                  className={`absolute left-4 w-6 h-6 rounded-full flex items-center justify-center ${getStatusColor(
                    step.status,
                  )} z-10`}
                  whileHover={{ scale: 1.1 }}
                  animate={step.status === "in-progress" ? { scale: [1, 1.1, 1] } : {}}
                  transition={
                    step.status === "in-progress"
                      ? { duration: 2, repeat: Number.POSITIVE_INFINITY }
                      : { duration: 0.2 }
                  }
                >
                  {getStatusIcon(step.status)}
                </motion.div>

                {/* Card */}
                <div className="ml-16">
                  <Card className="bg-white border-0 shadow-sm">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 flex-1">{step.title}</h3>
                        {getStatusBadge(step.status)}
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                      <p className="text-xs text-gray-500">{step.date}</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Share Button */}
        <motion.div variants={itemVariants} className="mt-8">
          <motion.div whileTap={{ scale: 0.98 }}>
            <Button className="w-full bg-blue-500 hover:bg-blue-600 py-3">Share My Roadmap</Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
