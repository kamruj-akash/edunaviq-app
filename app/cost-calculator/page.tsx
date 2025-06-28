"use client"

import { ArrowLeft, Home, Car, ShoppingCart, Calculator } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

interface CostOfLivingCalculatorPageProps {
  onBackClick: () => void
}

export default function CostOfLivingCalculatorPage({ onBackClick }: CostOfLivingCalculatorPageProps) {
  const [selectedCity, setSelectedCity] = useState("")
  const [selectedLifestyle, setSelectedLifestyle] = useState("")
  const [selectedAccommodation, setSelectedAccommodation] = useState("")
  const [showResult, setShowResult] = useState(false)
  const [calculatedCost, setCalculatedCost] = useState(0)

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

  const calculateCost = () => {
    if (!selectedCity || !selectedLifestyle || !selectedAccommodation) return

    // Simple calculation logic
    let baseCost = 0

    // City multiplier
    const cityMultipliers = {
      Sydney: 1.2,
      Melbourne: 1.0,
      Brisbane: 0.8,
    }

    // Lifestyle costs
    const lifestyleCosts = {
      Budget: 1500,
      Standard: 2500,
      Luxury: 4000,
    }

    // Accommodation costs
    const accommodationCosts = {
      "Shared Apartment": 800,
      Studio: 1500,
    }

    baseCost =
      lifestyleCosts[selectedLifestyle as keyof typeof lifestyleCosts] +
      accommodationCosts[selectedAccommodation as keyof typeof accommodationCosts]

    const finalCost = Math.round(baseCost * cityMultipliers[selectedCity as keyof typeof cityMultipliers])

    setCalculatedCost(finalCost)
    setShowResult(true)
  }

  const getCostBreakdown = () => {
    const rent = Math.round(calculatedCost * 0.4)
    const food = Math.round(calculatedCost * 0.25)
    const transport = Math.round(calculatedCost * 0.15)
    const other = calculatedCost - rent - food - transport

    return { rent, food, transport, other }
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
        <h1 className="text-xl font-semibold text-gray-900 ml-2">Cost of Living Calculator</h1>
      </motion.div>

      <div className="px-4 pt-6">
        {/* Calculator Form */}
        <motion.div variants={itemVariants} className="mb-6">
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-blue-500" />
                Calculate Your Living Costs
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* City Selection */}
              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">Select City</Label>
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Sydney">Sydney</SelectItem>
                    <SelectItem value="Melbourne">Melbourne</SelectItem>
                    <SelectItem value="Brisbane">Brisbane</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Lifestyle Selection */}
              <div>
                <Label className="text-sm font-medium text-gray-700 mb-3 block">Lifestyle</Label>
                <RadioGroup value={selectedLifestyle} onValueChange={setSelectedLifestyle}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Budget" id="budget" />
                    <Label htmlFor="budget">Budget</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Standard" id="standard" />
                    <Label htmlFor="standard">Standard</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Luxury" id="luxury" />
                    <Label htmlFor="luxury">Luxury</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Accommodation Selection */}
              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">Accommodation Type</Label>
                <Select value={selectedAccommodation} onValueChange={setSelectedAccommodation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose accommodation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Shared Apartment">Shared Apartment</SelectItem>
                    <SelectItem value="Studio">Studio</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Calculate Button */}
              <motion.div whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={calculateCost}
                  disabled={!selectedCity || !selectedLifestyle || !selectedAccommodation}
                  className="w-full bg-blue-500 hover:bg-blue-600 py-3 disabled:opacity-50"
                >
                  Calculate Estimated Cost
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Result Display */}
        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white border-0 shadow-sm">
                <CardContent className="p-6">
                  {/* Total Cost */}
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Total Estimated Monthly Cost</h2>
                    <motion.div
                      className="text-4xl font-bold text-blue-500"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      ${calculatedCost.toLocaleString()}
                    </motion.div>
                    <p className="text-sm text-gray-500 mt-2">AUD per month in {selectedCity}</p>
                  </div>

                  {/* Cost Breakdown */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900 mb-3">Cost Breakdown</h3>
                    {[
                      { icon: Home, label: "Rent", amount: getCostBreakdown().rent, color: "text-blue-500" },
                      { icon: ShoppingCart, label: "Food", amount: getCostBreakdown().food, color: "text-green-500" },
                      { icon: Car, label: "Transport", amount: getCostBreakdown().transport, color: "text-orange-500" },
                      { icon: Calculator, label: "Other", amount: getCostBreakdown().other, color: "text-purple-500" },
                    ].map((item, index) => (
                      <motion.div
                        key={item.label}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className={`w-5 h-5 ${item.color}`} />
                          <span className="font-medium text-gray-700">{item.label}</span>
                        </div>
                        <span className="font-semibold text-gray-900">${item.amount}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Disclaimer */}
                  <motion.div
                    className="mt-6 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <p className="text-sm text-yellow-700">
                      <strong>Disclaimer:</strong> These are estimated costs based on average data. Actual costs may
                      vary depending on personal lifestyle choices and market conditions.
                    </p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
