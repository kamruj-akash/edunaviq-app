"use client"

import { ArrowLeft, Check, Users, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface PointsWalletPageProps {
  onHomeClick: () => void
}

export default function PointsWalletPage({ onHomeClick }: PointsWalletPageProps) {
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: {
      width: "60%",
      transition: { duration: 1.5, delay: 0.5, ease: "easeOut" },
    },
  }

  const transactions = [
    {
      id: 1,
      icon: Check,
      title: "Application Submitted",
      subtitle: "University of Melbourne",
      points: "+100 pts",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      pointsColor: "text-green-500",
    },
    {
      id: 2,
      icon: Check,
      title: "Testimonial Approved",
      subtitle: "",
      points: "+50 pts",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      pointsColor: "text-green-500",
    },
    {
      id: 3,
      icon: Users,
      title: "Friend Referral",
      subtitle: "Jane Doe joined!",
      points: "+200 pts",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      pointsColor: "text-green-500",
    },
    {
      id: 4,
      icon: Mail,
      title: "Redeemed Voucher",
      subtitle: "Career Coaching Session",
      points: "-500 pts",
      bgColor: "bg-red-100",
      iconColor: "text-red-600",
      pointsColor: "text-red-500",
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
        <motion.button whileTap={{ scale: 0.95 }} onClick={onHomeClick} className="p-2 -ml-2">
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </motion.button>
        <h1 className="text-xl font-semibold text-gray-900 ml-2">Points Wallet</h1>
      </motion.div>

      <div className="px-4 pt-8">
        {/* Points Display */}
        <motion.div variants={itemVariants} className="text-center mb-8">
          <motion.div
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            LEVEL 2
          </motion.div>

          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              1,200 <span className="text-gray-500 text-2xl font-normal">points</span>
            </h2>
          </motion.div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>Next Level</span>
              <span>1,200 / 2,000 pts</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <motion.div
                className="h-3 bg-blue-500 rounded-full"
                variants={progressVariants}
                initial="hidden"
                animate="visible"
              />
            </div>
          </div>
        </motion.div>

        {/* Transaction History */}
        <motion.div variants={itemVariants} className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Transaction History</h3>

          <div className="space-y-4">
            {transactions.map((transaction, index) => (
              <motion.div
                key={transaction.id}
                variants={itemVariants}
                whileHover={{ scale: 1.01, x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="bg-white border-0 shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <motion.div
                        className={`w-12 h-12 ${transaction.bgColor} rounded-full flex items-center justify-center`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <transaction.icon className={`w-6 h-6 ${transaction.iconColor}`} />
                      </motion.div>

                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{transaction.title}</h4>
                        {transaction.subtitle && <p className="text-sm text-gray-500">{transaction.subtitle}</p>}
                      </div>

                      <motion.div className={`font-semibold ${transaction.pointsColor}`} whileHover={{ scale: 1.05 }}>
                        {transaction.points}
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="space-y-4">
          <motion.div whileTap={{ scale: 0.98 }}>
            <Button className="w-full bg-blue-500 hover:bg-blue-600 py-3">Redeem Points</Button>
          </motion.div>
          <motion.div whileTap={{ scale: 0.98 }}>
            <Button variant="outline" className="w-full py-3 bg-transparent">
              Refer a Friend
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
