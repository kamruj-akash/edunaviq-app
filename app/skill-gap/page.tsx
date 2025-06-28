"use client"

import { ArrowLeft, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface SkillGapAnalysisPageProps {
  onBackClick: () => void
}

export default function SkillGapAnalysisPage({ onBackClick }: SkillGapAnalysisPageProps) {
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

  const currentSkills = ["Python", "SQL", "Excel", "Statistics", "Machine Learning"]
  const requiredSkills = ["Python", "R", "SQL", "Power BI", "Tableau", "Statistics", "Machine Learning", "AWS"]
  const skillGaps = requiredSkills.filter((skill) => !currentSkills.includes(skill))

  const recommendedCourses = [
    {
      id: 1,
      title: "R Programming for Data Science",
      provider: "DataCamp",
      duration: "4 weeks",
      price: "$49",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Power BI Complete Course",
      provider: "Udemy",
      duration: "6 weeks",
      price: "$89",
      rating: 4.7,
    },
    {
      id: 3,
      title: "AWS Cloud Practitioner",
      provider: "AWS Training",
      duration: "8 weeks",
      price: "$199",
      rating: 4.9,
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
        <h1 className="text-xl font-semibold text-gray-900 ml-2">Skill Gap Analysis</h1>
      </motion.div>

      <div className="px-4 pt-6">
        {/* Skills Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Current Skills */}
          <motion.div variants={itemVariants}>
            <Card className="bg-white border-0 shadow-sm h-full">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">Your Current Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {currentSkills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">{skill}</Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Required Skills */}
          <motion.div variants={itemVariants}>
            <Card className="bg-white border-0 shadow-sm h-full">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">Skills Required for Data Analyst</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {requiredSkills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Badge
                        className={
                          currentSkills.includes(skill)
                            ? "bg-green-100 text-green-700 hover:bg-green-100"
                            : "bg-red-100 text-red-700 hover:bg-red-100"
                        }
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Skill Gaps */}
        <motion.div variants={itemVariants} className="mb-6">
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-orange-500" />
                Your Skill Gaps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skillGaps.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">{skill}</Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recommended Courses */}
        <motion.div variants={itemVariants}>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recommended Courses to Fill Gaps</h2>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {recommendedCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="min-w-[280px]"
              >
                <Card className="bg-white border-0 shadow-sm cursor-pointer">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{course.provider}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{course.duration}</span>
                      <span className="font-semibold text-blue-500">{course.price}</span>
                    </div>
                    <div className="flex items-center mt-2">
                      <div className="flex text-yellow-400">{"★".repeat(Math.floor(course.rating))}</div>
                      <span className="text-sm text-gray-500 ml-1">{course.rating}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
