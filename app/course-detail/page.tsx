"use client"

import { ArrowLeft, Clock, DollarSign, Star, CheckCircle, Users, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import Image from "next/image"

interface CourseDetailPageProps {
  course: any
  onBackClick: () => void
}

export default function CourseDetailPage({ course, onBackClick }: CourseDetailPageProps) {
  if (!course) return null

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

  const modules = [
    "Data Analysis and Visualization",
    "Machine Learning Fundamentals",
    "Statistical Methods",
    "Database Management",
    "Programming for Data Science",
    "Big Data Technologies",
    "Research Methods",
    "Capstone Project",
  ]

  const careerOutcomes = [
    { title: "Data Scientist", salary: "$85,000 - $120,000" },
    { title: "Data Analyst", salary: "$65,000 - $90,000" },
    { title: "Business Intelligence Analyst", salary: "$70,000 - $95,000" },
    { title: "Machine Learning Engineer", salary: "$90,000 - $130,000" },
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
        <h1 className="text-xl font-semibold text-gray-900 ml-2">Course Details</h1>
      </motion.div>

      <div className="px-4 pt-6">
        {/* Course Hero */}
        <motion.div variants={itemVariants} className="mb-6">
          <Card className="bg-white border-0 shadow-sm overflow-hidden">
            <div className="relative h-48">
              <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h1 className="text-2xl font-bold mb-1">{course.title}</h1>
                <p className="text-lg opacity-90">{course.university}</p>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <span className="text-sm text-gray-600">{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600">{course.fee}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm text-gray-600">{course.rating}/5.0</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-purple-500" />
                  <span className="text-sm text-gray-600">{course.employmentRate} employment</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{course.description}</p>
              <div className="flex flex-wrap gap-2">
                {course.intakeMonths.map((month: string, index: number) => (
                  <Badge key={index} className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                    {month} Intake
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tabs */}
        <motion.div variants={itemVariants}>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="careers">Careers</TabsTrigger>
              <TabsTrigger value="requirements">Requirements</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">Program Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    This comprehensive program is designed to equip students with the essential skills and knowledge
                    needed to excel in the rapidly growing field of data science. Students will learn to analyze complex
                    datasets, build predictive models, and communicate insights effectively.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Study Mode</h4>
                      <p className="text-sm text-blue-700">Full-time, On-campus</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">CRICOS Code</h4>
                      <p className="text-sm text-green-700">012345A</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-500" />
                    Student Outcomes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">{course.employmentRate}</div>
                      <div className="text-sm text-gray-600">Employment Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">{course.avgSalary}</div>
                      <div className="text-sm text-gray-600">Average Salary</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">{course.rating}</div>
                      <div className="text-sm text-gray-600">Student Rating</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="curriculum" className="space-y-4">
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">Course Modules</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {modules.map((module, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{module}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="careers" className="space-y-4">
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">Career Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {careerOutcomes.map((career, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                      >
                        <div>
                          <h4 className="font-semibold text-gray-900">{career.title}</h4>
                          <p className="text-sm text-gray-600">High demand in Australia</p>
                        </div>
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-100">{career.salary}</Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="requirements" className="space-y-4">
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">Entry Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {course.requirements.map((requirement: string, index: number) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                      >
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                        <span className="text-gray-700">{requirement}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">Important Dates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-blue-700">Application Deadline</span>
                      <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">December 1, 2024</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-700">Course Commencement</span>
                      <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">February 2025</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex gap-4 mt-6">
          <Button variant="outline" className="flex-1 bg-transparent">
            Save Course
          </Button>
          <Button className="flex-1 bg-blue-500 hover:bg-blue-600">Apply Now</Button>
        </motion.div>
      </div>
    </motion.div>
  )
}
