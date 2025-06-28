"use client"

import type React from "react"

import { ArrowLeft, Briefcase, DollarSign, Send, Mic, Paperclip, MoreVertical } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"

interface ChatPageProps {
  onHomeClick: () => void
}

export default function ChatPage({ onHomeClick }: ChatPageProps) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content:
        "Hi there! I'm CareerBot, your guide to navigating career paths in Australia. Based on your profile, here are some potential career paths and courses you might find interesting:",
      timestamp: "10:30 AM",
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
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

  const messageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        id: messages.length + 1,
        type: "user",
        content: inputMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }
      setMessages([...messages, newMessage])
      setInputMessage("")

      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          type: "bot",
          content:
            "Thanks for your question! Let me help you with that. Based on your interests, I'd recommend exploring data science programs which are in high demand in Australia.",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        }
        setMessages((prev) => [...prev, botResponse])
      }, 1000)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gray-50 flex flex-col"
    >
      {/* Fixed Header */}
      <motion.div
        variants={itemVariants}
        className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between p-4 pt-12 bg-white border-b"
      >
        <div className="flex items-center">
          <motion.button whileTap={{ scale: 0.95 }} onClick={onHomeClick} className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </motion.button>
          <div className="flex items-center gap-3 ml-2">
            <motion.div className="w-10 h-10 bg-gray-800 rounded-full overflow-hidden" whileHover={{ scale: 1.05 }}>
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="CareerBot"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">CareerBot</h1>
              <p className="text-sm text-green-500">Online</p>
            </div>
          </div>
        </div>
        <motion.button whileTap={{ scale: 0.95 }} className="p-2">
          <MoreVertical className="w-5 h-5 text-gray-600" />
        </motion.button>
      </motion.div>

      {/* Scrollable Chat Messages */}
      <div className="flex-1 overflow-y-auto pt-24 pb-24 px-4 space-y-4">
        <AnimatePresence>
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              variants={messageVariants}
              initial="hidden"
              animate="visible"
              className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-xs lg:max-w-md ${message.type === "user" ? "order-2" : "order-1"}`}>
                {message.type === "bot" && (
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-gray-800 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=24&width=24"
                        alt="CareerBot"
                        width={24}
                        height={24}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-xs text-gray-500">CareerBot</span>
                  </div>
                )}
                <motion.div
                  className={`p-3 rounded-2xl ${
                    message.type === "user"
                      ? "bg-blue-500 text-white rounded-br-md"
                      : "bg-white text-gray-900 rounded-bl-md shadow-sm"
                  }`}
                  whileHover={{ scale: 1.01 }}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  <p className={`text-xs mt-2 ${message.type === "user" ? "text-blue-100" : "text-gray-500"}`}>
                    {message.timestamp}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Course Suggestions */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Course Suggestions</h2>

          <div className="space-y-4">
            {/* University of Sydney */}
            <motion.div whileHover={{ scale: 1.01, y: -2 }} whileTap={{ scale: 0.99 }} transition={{ duration: 0.2 }}>
              <Card className="bg-white border-0 shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <p className="text-sm text-blue-500 font-medium mb-1">UNIVERSITY OF SYDNEY</p>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Bachelor of Science</h3>

                      <div className="flex items-center gap-6 mb-3">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600">92% employment</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600">85k avg. salary</span>
                        </div>
                      </div>
                    </div>

                    <motion.div className="w-16 h-16 rounded-lg overflow-hidden" whileHover={{ scale: 1.05 }}>
                      <Image
                        src="/placeholder.svg?height=64&width=64"
                        alt="University of Sydney"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* University of Melbourne */}
            <motion.div whileHover={{ scale: 1.01, y: -2 }} whileTap={{ scale: 0.99 }} transition={{ duration: 0.2 }}>
              <Card className="bg-white border-0 shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <p className="text-sm text-blue-500 font-medium mb-1">UNIVERSITY OF MELBOURNE</p>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Bachelor of Engineering</h3>

                      <div className="flex items-center gap-6 mb-3">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600">90% employment</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600">80k avg. salary</span>
                        </div>
                      </div>
                    </div>

                    <motion.div className="w-16 h-16 rounded-lg overflow-hidden" whileHover={{ scale: 1.05 }}>
                      <Image
                        src="/placeholder.svg?height=64&width=64"
                        alt="University of Melbourne"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        {/* PR Points Estimation */}
        <motion.div variants={itemVariants} className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">PR Points Estimation</h2>

          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      Estimated PR Points: <span className="text-blue-500">65</span>
                    </p>
                    <p className="text-sm text-green-500 font-medium">Good Outlook</p>
                  </div>
                  <motion.div whileHover={{ x: 2 }}>
                    <ArrowLeft className="w-5 h-5 text-gray-400 rotate-180" />
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex gap-4 pb-4">
          <motion.div whileTap={{ scale: 0.98 }} className="flex-1">
            <Button variant="outline" className="w-full bg-transparent">
              Compare
            </Button>
          </motion.div>
          <motion.div whileTap={{ scale: 0.98 }} className="flex-1">
            <Button className="w-full bg-blue-500 hover:bg-blue-600">1-Click Apply</Button>
          </motion.div>
        </motion.div>

        <div ref={messagesEndRef} />
      </div>

      {/* Fixed Chat Input */}
      <motion.div variants={itemVariants} className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg">
        <div className="flex items-center gap-3">
          <motion.button whileTap={{ scale: 0.95 }} className="p-2 text-gray-500">
            <Paperclip className="w-5 h-5" />
          </motion.button>
          <div className="flex-1 relative">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="pr-12 border-gray-200 focus:border-blue-500"
            />
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-500"
            >
              <Mic className="w-4 h-4" />
            </motion.button>
          </div>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleSendMessage}
            disabled={!inputMessage.trim()}
            className="p-2 bg-blue-500 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}
