"use client"

import { ArrowLeft, Bell, Mail, MessageSquare, Calendar, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { motion } from "framer-motion"
import { useState } from "react"

interface NotificationsPageProps {
  onBackClick: () => void
}

export default function NotificationsPage({ onBackClick }: NotificationsPageProps) {
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    courseUpdates: true,
    applicationStatus: true,
    communityActivity: false,
    marketingEmails: false,
    weeklyDigest: true,
    documentExpiry: true,
    prPointsUpdates: true,
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
    setNotifications((prev) => ({ ...prev, [key]: !prev[key as keyof typeof prev] }))
  }

  const notificationCategories = [
    {
      title: "General Notifications",
      icon: Bell,
      items: [
        {
          key: "emailNotifications",
          title: "Email Notifications",
          description: "Receive notifications via email",
          icon: Mail,
        },
        {
          key: "pushNotifications",
          title: "Push Notifications",
          description: "Receive push notifications on your device",
          icon: Bell,
        },
        {
          key: "smsNotifications",
          title: "SMS Notifications",
          description: "Receive important updates via SMS",
          icon: MessageSquare,
        },
      ],
    },
    {
      title: "Content Updates",
      icon: TrendingUp,
      items: [
        {
          key: "courseUpdates",
          title: "Course Updates",
          description: "New courses and program changes",
          icon: Calendar,
        },
        {
          key: "applicationStatus",
          title: "Application Status",
          description: "Updates on your application progress",
          icon: TrendingUp,
        },
        {
          key: "communityActivity",
          title: "Community Activity",
          description: "New posts and replies in forums",
          icon: MessageSquare,
        },
      ],
    },
    {
      title: "Important Alerts",
      icon: Bell,
      items: [
        {
          key: "documentExpiry",
          title: "Document Expiry Alerts",
          description: "Reminders when documents are expiring",
          icon: Calendar,
        },
        {
          key: "prPointsUpdates",
          title: "PR Points Updates",
          description: "Changes to your PR eligibility score",
          icon: TrendingUp,
        },
        {
          key: "weeklyDigest",
          title: "Weekly Digest",
          description: "Summary of your weekly activity",
          icon: Mail,
        },
      ],
    },
    {
      title: "Marketing",
      icon: Mail,
      items: [
        {
          key: "marketingEmails",
          title: "Marketing Emails",
          description: "Promotional content and special offers",
          icon: Mail,
        },
      ],
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
      <motion.div variants={itemVariants} className="flex items-center p-4 pt-12 bg-white">
        <motion.button whileTap={{ scale: 0.95 }} onClick={onBackClick} className="p-2 -ml-2">
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </motion.button>
        <h1 className="text-xl font-semibold text-gray-900 ml-2">Notifications</h1>
      </motion.div>

      <div className="px-4 pt-6">
        {notificationCategories.map((category, categoryIndex) => (
          <motion.div key={categoryIndex} variants={itemVariants} className="mb-6">
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
                  <category.icon className="w-5 h-5 text-blue-500" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.key}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: itemIndex * 0.1, duration: 0.5 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                    </div>
                    <Switch
                      checked={notifications[item.key as keyof typeof notifications]}
                      onCheckedChange={() => handleToggle(item.key)}
                    />
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {/* Notification Schedule */}
        <motion.div variants={itemVariants} className="mb-6">
          <Card className="bg-blue-50 border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-blue-900">Notification Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-blue-800 mb-4">
                Choose when you'd like to receive notifications to avoid interruptions during important times.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-900">Quiet Hours</span>
                  <span className="text-sm text-blue-700">10:00 PM - 8:00 AM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-900">Weekend Notifications</span>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  )
}
