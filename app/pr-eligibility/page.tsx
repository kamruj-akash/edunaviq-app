"use client"

import { ArrowLeft, User, GraduationCap, Globe, MapPin, Briefcase, Users, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface PRElibilityCheckerPageProps {
  onBackClick: () => void
}

export default function PRElibilityCheckerPage({ onBackClick }: PRElibilityCheckerPageProps) {
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

  const circleVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  }

  const progressVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 0.3, // 30 out of 100
      transition: { duration: 2, ease: "easeInOut" },
    },
  }

  const categories = [
    {
      icon: User,
      title: "Age",
      points: "15/30",
      description: "25-32 years: 30 points, 33-39 years: 25 points",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Globe,
      title: "English Language Proficiency",
      points: "10/20",
      description: "IELTS 8.0+: 20 points, IELTS 7.0+: 10 points",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Briefcase,
      title: "Skilled Employment",
      points: "5/20",
      description: "8+ years: 20 points, 5-7 years: 15 points, 3-4 years: 10 points",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: GraduationCap,
      title: "Educational Qualifications",
      points: "0/20",
      description: "Doctoral: 20 points, Masters: 15 points, Bachelor: 15 points",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: MapPin,
      title: "Australian Study Requirement",
      points: "0/5",
      description: "2+ years study in Australia: 5 points",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Users,
      title: "Partner Skills",
      points: "0/10",
      description: "Partner with skills assessment: 10 points, Partner with English: 5 points",
      color: "bg-indigo-100 text-indigo-600",
    },
  ]

  const suggestions = [
    "Complete IELTS test to improve English proficiency score",
    "Consider studying in Australia for additional points",
    "Gain more skilled work experience",
    "Explore state nomination opportunities",
  ]

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
        <h1 className="text-xl font-semibold text-gray-900 ml-2">PR Eligibility Checker</h1>
      </motion.div>

      <div className="px-4 pt-6">
        {/* Points Circle */}
        <motion.div variants={itemVariants} className="mb-8">
          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-8 text-center">
              <motion.div
                className="relative w-48 h-48 mx-auto mb-6"
                variants={circleVariants}
                initial="hidden"
                animate="visible"
              >
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle cx="50" cy="50" r="40" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                  {/* Progress circle */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#3b82f6"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    variants={progressVariants}
                    initial="hidden"
                    animate="visible"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <motion.div
                    className="text-4xl font-bold text-gray-900"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    30
                  </motion.div>
                  <motion.div
                    className="text-sm text-gray-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                  >
                    out of 100
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Current PR Points</h2>
                <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">
                  Need 35 more points for eligibility
                </Badge>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Eligibility Information */}
        <motion.div variants={itemVariants} className="mb-6">
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-gray-900">PR Eligibility Requirements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                To be eligible for an Australian Permanent Residency (PR) visa, you generally need a minimum score of{" "}
                <span className="font-semibold text-blue-600">65 points</span>. This score is determined by a
                points-based system that assesses factors like age, English language proficiency, skilled employment,
                and educational qualifications.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Categories Breakdown */}
        <motion.div variants={itemVariants} className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Points Breakdown</h2>
          <div className="space-y-3">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
              >
                <Card className="bg-white border-0 shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <motion.div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${category.color}`}
                        whileHover={{ scale: 1.1 }}
                      >
                        <category.icon className="w-6 h-6" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-900">{category.title}</h3>
                          <Badge variant="outline">{category.points}</Badge>
                        </div>
                        <p className="text-sm text-gray-600">{category.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Factors */}
        <motion.div variants={itemVariants} className="mb-6">
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-500" />
                Additional Factors
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">State/Territory Nomination</span>
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100">+5 points</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">Regional Study</span>
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100">+5 points</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">Community Language</span>
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100">+5 points</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Suggestions */}
        <motion.div variants={itemVariants} className="mb-6">
          <Card className="bg-blue-50 border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-blue-900">Suggestions to Improve Your Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {suggestions.map((suggestion, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 1, duration: 0.5 }}
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm text-blue-800">{suggestion}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Action Button */}
        <motion.div variants={itemVariants}>
          <Button className="w-full bg-blue-500 hover:bg-blue-600 py-3">Explore Courses That Add Points</Button>
        </motion.div>
      </div>
    </motion.div>
  )
}
