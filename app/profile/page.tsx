"use client"

import { useState } from "react"
import {
  ArrowLeft,
  User,
  Edit3,
  Bell,
  Shield,
  Settings,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Calendar,
  GraduationCap,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import EditProfilePage from "./edit/page"
import NotificationsPage from "./notifications/page"
import PrivacySecurityPage from "./privacy/page"
import AppSettingsPage from "./settings/page"

interface ProfilePageProps {
  onHomeClick: () => void
}

export default function ProfilePage({ onHomeClick }: ProfilePageProps) {
  const [currentPage, setCurrentPage] = useState("profile")

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

  const handleBackToProfile = () => {
    setCurrentPage("profile")
  }

  if (currentPage === "edit") {
    return <EditProfilePage onBackClick={handleBackToProfile} />
  }

  if (currentPage === "notifications") {
    return <NotificationsPage onBackClick={handleBackToProfile} />
  }

  if (currentPage === "privacy") {
    return <PrivacySecurityPage onBackClick={handleBackToProfile} />
  }

  if (currentPage === "settings") {
    return <AppSettingsPage onBackClick={handleBackToProfile} />
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
        <motion.button whileTap={{ scale: 0.95 }} onClick={onHomeClick} className="p-2 -ml-2">
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </motion.button>
        <h1 className="text-xl font-semibold text-gray-900 ml-2">Profile</h1>
      </motion.div>

      <div className="px-4 pt-6">
        {/* Profile Header */}
        <motion.div variants={itemVariants} className="mb-6">
          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-6 text-center">
              <motion.div
                className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full overflow-hidden mx-auto mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <User className="w-12 h-12 text-white" />
                </div>
              </motion.div>
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Alex Johnson</h2>
              <p className="text-gray-600 mb-4">Computer Science Student</p>
              <motion.div whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={() => setCurrentPage("edit")}
                  variant="outline"
                  className="bg-transparent border-blue-500 text-blue-500"
                >
                  <Edit3 className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Personal Information */}
        <motion.div variants={itemVariants} className="mb-6">
          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-900">alex.johnson@email.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-gray-900">+61 412 345 678</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-gray-900">Sydney, Australia</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Date of Birth</p>
                    <p className="text-gray-900">June 15, 1995</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Education */}
        <motion.div variants={itemVariants} className="mb-6">
          <Card className="bg-white border-0 shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Education</h3>
              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-gray-900 font-medium">Bachelor of Computer Science</p>
                  <p className="text-sm text-gray-500">University of Sydney • 3rd Year</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Settings Options */}
        <motion.div variants={itemVariants} className="space-y-4">
          <motion.div
            whileHover={{ scale: 1.01, y: -2 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => setCurrentPage("notifications")}
          >
            <Card className="bg-white border-0 shadow-sm cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Bell className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Notifications</h3>
                      <p className="text-sm text-gray-500">Manage your notification preferences</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.01, y: -2 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => setCurrentPage("privacy")}
          >
            <Card className="bg-white border-0 shadow-sm cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Privacy & Security</h3>
                      <p className="text-sm text-gray-500">Control your privacy and security settings</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.01, y: -2 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => setCurrentPage("settings")}
          >
            <Card className="bg-white border-0 shadow-sm cursor-pointer">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Settings className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">App Settings</h3>
                      <p className="text-sm text-gray-500">Customize your app experience</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
