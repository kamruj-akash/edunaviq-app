"use client"

import { ArrowLeft, Palette, Globe, Download, Smartphone, Moon, Sun } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"
import { useState } from "react"

interface AppSettingsPageProps {
  onBackClick: () => void
}

export default function AppSettingsPage({ onBackClick }: AppSettingsPageProps) {
  const [settings, setSettings] = useState({
    darkMode: false,
    autoSync: true,
    offlineMode: false,
    highContrast: false,
    reducedMotion: false,
    language: "en",
    currency: "AUD",
    timezone: "Australia/Sydney",
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
    setSettings((prev) => ({ ...prev, [key]: !prev[key as keyof typeof prev] }))
  }

  const handleSelectChange = (key: string, value: string) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
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
        <h1 className="text-xl font-semibold text-gray-900 ml-2">App Settings</h1>
      </motion.div>

      <div className="px-4 pt-6">
        {/* Appearance */}
        <motion.div variants={itemVariants} className="mb-6">
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
                <Palette className="w-5 h-5 text-purple-500" />
                Appearance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    {settings.darkMode ? (
                      <Moon className="w-5 h-5 text-gray-600" />
                    ) : (
                      <Sun className="w-5 h-5 text-yellow-500" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Dark Mode</h3>
                    <p className="text-sm text-gray-500">Use dark theme for better night viewing</p>
                  </div>
                </div>
                <Switch checked={settings.darkMode} onCheckedChange={() => handleToggle("darkMode")} />
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900">High Contrast</h3>
                  <p className="text-sm text-gray-500">Increase contrast for better visibility</p>
                </div>
                <Switch checked={settings.highContrast} onCheckedChange={() => handleToggle("highContrast")} />
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900">Reduced Motion</h3>
                  <p className="text-sm text-gray-500">Minimize animations and transitions</p>
                </div>
                <Switch checked={settings.reducedMotion} onCheckedChange={() => handleToggle("reducedMotion")} />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Language & Region */}
        <motion.div variants={itemVariants} className="mb-6">
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-500" />
                Language & Region
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Language</label>
                <Select value={settings.language} onValueChange={(value) => handleSelectChange("language", value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="de">Deutsch</SelectItem>
                    <SelectItem value="zh">中文</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Currency</label>
                <Select value={settings.currency} onValueChange={(value) => handleSelectChange("currency", value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="AUD">Australian Dollar (AUD)</SelectItem>
                    <SelectItem value="USD">US Dollar (USD)</SelectItem>
                    <SelectItem value="EUR">Euro (EUR)</SelectItem>
                    <SelectItem value="GBP">British Pound (GBP)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Timezone</label>
                <Select value={settings.timezone} onValueChange={(value) => handleSelectChange("timezone", value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Australia/Sydney">Sydney (GMT+10)</SelectItem>
                    <SelectItem value="Australia/Melbourne">Melbourne (GMT+10)</SelectItem>
                    <SelectItem value="Australia/Perth">Perth (GMT+8)</SelectItem>
                    <SelectItem value="Australia/Brisbane">Brisbane (GMT+10)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* App Behavior */}
        <motion.div variants={itemVariants} className="mb-6">
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-green-500" />
                App Behavior
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900">Auto Sync</h3>
                  <p className="text-sm text-gray-500">Automatically sync data when connected</p>
                </div>
                <Switch checked={settings.autoSync} onCheckedChange={() => handleToggle("autoSync")} />
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900">Offline Mode</h3>
                  <p className="text-sm text-gray-500">Enable offline functionality</p>
                </div>
                <Switch checked={settings.offlineMode} onCheckedChange={() => handleToggle("offlineMode")} />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Storage & Cache */}
        <motion.div variants={itemVariants} className="mb-6">
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
                <Download className="w-5 h-5 text-orange-500" />
                Storage & Cache
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900">Cache Size</h3>
                  <p className="text-sm text-gray-500">45.2 MB used</p>
                </div>
                <Button variant="outline" size="sm" className="bg-transparent">
                  Clear Cache
                </Button>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900">Downloaded Content</h3>
                  <p className="text-sm text-gray-500">128 MB used</p>
                </div>
                <Button variant="outline" size="sm" className="bg-transparent">
                  Manage
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* About */}
        <motion.div variants={itemVariants} className="mb-6">
          <Card className="bg-gray-100 border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-gray-900">About</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">App Version</span>
                <span className="text-sm font-medium text-gray-900">2.1.0</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Build Number</span>
                <span className="text-sm font-medium text-gray-900">2024.01.15</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Last Updated</span>
                <span className="text-sm font-medium text-gray-900">January 15, 2024</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Reset Settings */}
        <motion.div variants={itemVariants}>
          <Card className="bg-red-50 border-0 shadow-sm">
            <CardContent className="p-4">
              <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                <Button variant="outline" className="w-full bg-transparent border-red-200 text-red-700">
                  Reset All Settings
                </Button>
              </motion.div>
              <p className="text-xs text-red-600 text-center mt-2">
                This will reset all app settings to their default values
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  )
}
