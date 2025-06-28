"use client"

import { useState } from "react"
import {
  Sun,
  Lightbulb,
  Cloud,
  FileText,
  Home,
  Search,
  MessageCircle,
  User,
  Folder,
  Star,
  Target,
  BarChart3,
  Users,
  Calculator,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import VaultPage from "./vault/page"
import ChatPage from "./chat/page"
import PointsWalletPage from "./points-wallet/page"
import ExplorePage from "./explore/page"
import ProfilePage from "./profile/page"
import CareerRoadmapPage from "./roadmap/page"
import SkillGapAnalysisPage from "./skill-gap/page"
import CommunityForumPage from "./community/page"
import PostDetailPage from "./community/[postId]/page"
import CostOfLivingCalculatorPage from "./cost-calculator/page"
import PRElibilityCheckerPage from "./pr-eligibility/page"
import CourseDetailPage from "./course-detail/page"
import BlogDetailPage from "./blog-detail/page"
import EditProfilePage from "./profile/edit/page"
import NotificationsPage from "./profile/notifications/page"
import PrivacySecurityPage from "./profile/privacy/page"
import AppSettingsPage from "./profile/settings/page"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("home")
  const [selectedCourse, setSelectedCourse] = useState<any>(null)
  const [selectedBlog, setSelectedBlog] = useState<any>(null)
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0)
  
  const hotCourses = [
    {
      id: 1,
      title: "Master of Data Science",
      university: "University of Sydney",
      duration: "2 years",
      fee: "$45,000/year",
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=300",
      description: "Top-ranked program with industry partnerships",
      employmentRate: "92%",
      avgSalary: "$85,000",
      intakeMonths: ["February", "July"],
      requirements: ["Bachelor's degree", "IELTS 6.5", "Mathematics background"],
    },
    {
      id: 2,
      title: "Master of Engineering",
      university: "University of Melbourne",
      duration: "2 years",
      fee: "$42,000/year",
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=300",
      description: "Comprehensive engineering program",
      employmentRate: "90%",
      avgSalary: "$80,000",
      intakeMonths: ["March", "August"],
      requirements: ["Engineering degree", "IELTS 6.5", "Work experience preferred"],
    },
    {
      id: 3,
      title: "Master of Business Administration",
      university: "UNSW Sydney",
      duration: "1.5 years",
      fee: "$48,000/year",
      rating: 4.9,
      image: "/placeholder.svg?height=200&width=300",
      description: "Global business leadership program",
      employmentRate: "95%",
      avgSalary: "$95,000",
      intakeMonths: ["January", "September"],
      requirements: ["Bachelor's degree", "IELTS 7.0", "2+ years work experience"],
    },
    {
      id: 4,
      title: "Master of Information Technology",
      university: "Australian National University",
      duration: "2 years",
      fee: "$46,000/year",
      rating: 4.6,
      image: "/placeholder.svg?height=200&width=300",
      description: "Cutting-edge IT and software development",
      employmentRate: "88%",
      avgSalary: "$78,000",
      intakeMonths: ["February", "July"],
      requirements: ["Bachelor's degree", "IELTS 6.5", "Basic programming knowledge"],
    },
    {
      id: 5,
      title: "Master of Public Health",
      university: "University of Queensland",
      duration: "2 years",
      fee: "$40,000/year",
      rating: 4.5,
      image: "/placeholder.svg?height=200&width=300",
      description: "Healthcare leadership and policy",
      employmentRate: "85%",
      avgSalary: "$72,000",
      intakeMonths: ["February", "July"],
      requirements: ["Health-related degree", "IELTS 7.0", "Healthcare experience"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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

  const cardHoverVariants = {
    hover: {
      scale: 1.02,
      y: -2,
      transition: { duration: 0.2 },
    },
  }

  const handleCardClick = (cardType: string) => {
    setActiveTab(cardType)
  }

  const handleCourseClick = (course: any) => {
    setSelectedCourse(course)
    setActiveTab("course-detail")
  }

  const handleBlogClick = (blog: any) => {
    setSelectedBlog(blog)
    setActiveTab("blog-detail")
  }

  const handleBackToHome = () => {
    setActiveTab("home")
  }

  const nextCourse = () => {
    setCurrentCourseIndex((prev) => (prev + 1) % hotCourses.length)
  }

  const prevCourse = () => {
    setCurrentCourseIndex((prev) => (prev - 1 + hotCourses.length) % hotCourses.length)
  }

  const renderContent = () => {
    switch (activeTab) {
      case "vault":
        return <VaultPage onHomeClick={handleBackToHome} />
      case "chat":
        return <ChatPage onHomeClick={handleBackToHome} />
      case "points-wallet":
        return <PointsWalletPage onHomeClick={handleBackToHome} />
      case "explore":
        return <ExplorePage onHomeClick={handleBackToHome} onBlogClick={handleBlogClick} />
      case "profile":
        return <ProfilePage onHomeClick={handleBackToHome} />
      case "roadmap":
        return <CareerRoadmapPage onBackClick={handleBackToHome} />
      case "skill-gap":
        return <SkillGapAnalysisPage onBackClick={handleBackToHome} />
      case "community":
        return <CommunityForumPage onBackClick={handleBackToHome} />
      case "post-detail":
        return <PostDetailPage onBackClick={() => setActiveTab("community")} />
      case "cost-calculator":
        return <CostOfLivingCalculatorPage onBackClick={handleBackToHome} />
      case "pr-eligibility":
        return <PRElibilityCheckerPage onBackClick={handleBackToHome} />
      case "course-detail":
        return <CourseDetailPage course={selectedCourse} onBackClick={handleBackToHome} />
      case "blog-detail":
        return <BlogDetailPage blog={selectedBlog} onBackClick={() => setActiveTab("explore")} />
      case "edit-profile":
        return <EditProfilePage onBackClick={() => setActiveTab("profile")} />
      case "notifications":
        return <NotificationsPage onBackClick={() => setActiveTab("profile")} />
      case "privacy-security":
        return <PrivacySecurityPage onBackClick={() => setActiveTab("profile")} />
      case "app-settings":
        return <AppSettingsPage onBackClick={() => setActiveTab("profile")} />
      case "home":
      default:
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="pb-20">
            {/* Points Bar */}
            <motion.div variants={itemVariants} className="px-4 pt-12 pb-4">
              <motion.div
                className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-4 text-white"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => setActiveTab("points-wallet")}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Star className="w-5 h-5 text-white" />
                    </motion.div>
                    <div>
                      <p className="text-white/80 text-sm">Your Points</p>
                      <motion.p
                        className="text-xl font-bold"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        1,200 pts
                      </motion.p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white/80 text-sm">Level 2</p>
                    <div className="w-20 bg-white/20 rounded-full h-2 mt-1">
                      <motion.div
                        className="bg-white rounded-full h-2"
                        initial={{ width: 0 }}
                        animate={{ width: "60%" }}
                        transition={{ delay: 0.5, duration: 1 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <div className="px-4">
              {/* Header */}
              <motion.div variants={itemVariants} className="pb-8">
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                  >
                    <Sun className="w-6 h-6 text-blue-500" />
                  </motion.div>
                  <h1 className="text-2xl font-medium text-gray-700">
                    Good morning, <span className="text-orange-500 font-semibold">Alex!</span>
                  </h1>
                </div>
              </motion.div>

              {/* Action Cards Grid */}
              <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 mb-8">
                {[
                  {
                    icon: Target,
                    title: "Career Roadmap",
                    subtitle: "View your personalized path",
                    type: "roadmap",
                  },
                  {
                    icon: BarChart3,
                    title: "Skill Gap Analysis",
                    subtitle: "Identify missing skills",
                    type: "skill-gap",
                  },
                  {
                    icon: Lightbulb,
                    title: "Start New Consultation",
                    subtitle: "Explore new possibilities",
                    type: "chat",
                  },
                  {
                    icon: CheckCircle,
                    title: "PR Eligibility Checker",
                    subtitle: "Check your PR points",
                    type: "pr-eligibility",
                  },
                  {
                    icon: Users,
                    title: "Community Forum",
                    subtitle: "Connect with other students",
                    type: "community",
                  },
                  {
                    icon: Calculator,
                    title: "Cost Calculator",
                    subtitle: "Estimate living expenses",
                    type: "cost-calculator",
                  },
                  {
                    icon: Cloud,
                    title: "Upload Document",
                    subtitle: "Securely add your files",
                    type: "vault",
                  },
                  {
                    icon: FileText,
                    title: "Application Tracker",
                    subtitle: "Track your applications",
                  },
                ].map((item, index) => (
                  <motion.div key={index} variants={cardHoverVariants} whileHover="hover" whileTap={{ scale: 0.98 }}>
                    <Card
                      className="bg-white border-0 shadow-sm cursor-pointer"
                      onClick={() => item.type && handleCardClick(item.type)}
                    >
                      <CardContent className="p-6 text-center">
                        <motion.div
                          className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <item.icon className="w-6 h-6 text-blue-600" />
                        </motion.div>
                        <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-500">{item.subtitle}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>

              {/* Hot Courses Section */}
              <motion.div variants={itemVariants} className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      🔥
                    </motion.span>
                    Hot Courses in Demand
                  </h2>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" onClick={prevCourse} className="h-8 w-8 bg-transparent">
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={nextCourse} className="h-8 w-8 bg-transparent">
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="relative overflow-hidden">
                  <motion.div
                    className="flex gap-4"
                    animate={{ x: -currentCourseIndex * 320 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    {hotCourses.map((course, index) => (
                      <motion.div
                        key={course.id}
                        className="min-w-[300px]"
                        variants={cardHoverVariants}
                        whileHover="hover"
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleCourseClick(course)}
                      >
                        <Card className="bg-white border-0 shadow-sm overflow-hidden cursor-pointer">
                          <CardContent className="p-0">
                            <div className="relative h-48">
                              <Image
                                src={course.image || "/placeholder.svg"}
                                alt={course.title}
                                fill
                                className="object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                              <motion.div
                                className="absolute bottom-4 left-4 text-white"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                              >
                                <h3 className="text-lg font-semibold mb-1">{course.title}</h3>
                                <p className="text-sm opacity-90">{course.university}</p>
                                <div className="flex items-center gap-2 mt-2">
                                  <span className="text-xs bg-white/20 px-2 py-1 rounded">
                                    {course.employmentRate} employment
                                  </span>
                                  <span className="text-xs bg-white/20 px-2 py-1 rounded">⭐ {course.rating}</span>
                                </div>
                              </motion.div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Course indicators */}
                <div className="flex justify-center gap-2 mt-4">
                  {hotCourses.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentCourseIndex ? "bg-blue-500" : "bg-gray-300"
                      }`}
                      onClick={() => setCurrentCourseIndex(index)}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>

      {/* Bottom Navigation */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="grid grid-cols-5 py-2">
          {[
            { id: "home", icon: Home, label: "Home" },
            { id: "explore", icon: Search, label: "Explore" },
            { id: "vault", icon: Folder, label: "Your Vault" },
            { id: "chat", icon: MessageCircle, label: "Chat" },
            { id: "profile", icon: User, label: "Profile" },
          ].map((tab) => (
            <motion.button
              key={tab.id}
              className="flex flex-col items-center py-2 px-2"
              onClick={() => setActiveTab(tab.id)}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{
                  color: activeTab === tab.id ? "#3b82f6" : "#9ca3af",
                  scale: activeTab === tab.id ? 1.1 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                <tab.icon className="w-6 h-6 mb-1" />
              </motion.div>
              <motion.span
                className="text-xs font-medium"
                animate={{
                  color: activeTab === tab.id ? "#3b82f6" : "#9ca3af",
                }}
                transition={{ duration: 0.2 }}
              >
                {tab.label}
              </motion.span>
              {activeTab === tab.id && (
                <motion.div
                  className="absolute -top-1 w-1 h-1 bg-blue-500 rounded-full"
                  layoutId="activeIndicator"
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  )
}