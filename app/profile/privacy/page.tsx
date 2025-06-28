"use client"

import { ArrowLeft, Shield, Lock, Eye, UserCheck, Database, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useState } from "react"

interface PrivacySecurityPageProps {
  onBackClick: () => void
}

export default function PrivacySecurityPage({ onBackClick }: PrivacySecurityPageProps) {
  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: true,
    dataSharing: false,
    analyticsTracking: true,
    thirdPartyAccess: false,
    locationTracking: false,
    activityStatus: true,
  })

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

  const handleToggle = (key: string) => {
    setPrivacySettings((prev) => ({ ...prev, [key]: !prev[key as keyof typeof prev] }))
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
        <h1 className="text-xl font-semibold text-gray-900 ml-2">Privacy & Security</h1>
      </motion.div>

      <div className="px-4 pt-6">
        {/* Account Security */}
        <motion.div variants={itemVariants} className="mb-6">
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-500" />
                Account Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <motion.div
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Lock className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Change Password</h3>
                    <p className="text-sm text-gray-500">Update your account password</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="bg-transparent">
                  Change
                </Button>
              </motion.div>

              <motion.div
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <UserCheck className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Two-Factor Authentication</h3>
                    <p className="text-sm text-gray-500">Add an extra layer of security</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="bg-transparent">
                  Setup
                </Button>
              </motion.div>

              <motion.div
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Eye className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Login Activity</h3>
                    <p className="text-sm text-gray-500">View recent login attempts</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="bg-transparent">
                  View
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Privacy Settings */}
        <motion.div variants={itemVariants} className="mb-6">
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
                <Eye className="w-5 h-5 text-blue-500" />
                Privacy Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900">Profile Visibility</h3>
                  <p className="text-sm text-gray-500">Make your profile visible to other users</p>
                </div>
                <Switch
                  checked={privacySettings.profileVisibility}
                  onCheckedChange={() => handleToggle("profileVisibility")}
                />
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900">Activity Status</h3>
                  <p className="text-sm text-gray-500">Show when you're online</p>
                </div>
                <Switch
                  checked={privacySettings.activityStatus}
                  onCheckedChange={() => handleToggle("activityStatus")}
                />
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900">Location Tracking</h3>
                  <p className="text-sm text-gray-500">Allow location-based features</p>
                </div>
                <Switch
                  checked={privacySettings.locationTracking}
                  onCheckedChange={() => handleToggle("locationTracking")}
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Data Management */}
        <motion.div variants={itemVariants} className="mb-6">
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
                <Database className="w-5 h-5 text-orange-500" />
                Data Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900">Data Sharing</h3>
                  <p className="text-sm text-gray-500">Share anonymized data for research</p>
                </div>
                <Switch checked={privacySettings.dataSharing} onCheckedChange={() => handleToggle("dataSharing")} />
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900">Analytics Tracking</h3>
                  <p className="text-sm text-gray-500">Help improve the app with usage data</p>
                </div>
                <Switch
                  checked={privacySettings.analyticsTracking}
                  onCheckedChange={() => handleToggle("analyticsTracking")}
                />
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900">Third-Party Access</h3>
                  <p className="text-sm text-gray-500">Allow third-party integrations</p>
                </div>
                <Switch
                  checked={privacySettings.thirdPartyAccess}
                  onCheckedChange={() => handleToggle("thirdPartyAccess")}
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Data Rights */}
        <motion.div variants={itemVariants} className="mb-6">
          <Card className="bg-red-50 border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-red-900 flex items-center gap-2">
                <Globe className="w-5 h-5 text-red-500" />
                Your Data Rights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                <Button variant="outline" className="w-full justify-start bg-transparent border-red-200 text-red-700">
                  Download My Data
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                <Button variant="outline" className="w-full justify-start bg-transparent border-red-200 text-red-700">
                  Request Data Deletion
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                <Button variant="outline" className="w-full justify-start bg-transparent border-red-200 text-red-700">
                  Privacy Policy
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  )
}
