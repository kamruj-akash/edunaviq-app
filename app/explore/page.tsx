"use client"

import { Search, ArrowLeft } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface ExplorePageProps {
  onHomeClick: () => void
  onBlogClick: (blog: any) => void
}

export default function ExplorePage({ onHomeClick, onBlogClick }: ExplorePageProps) {
  const containerRef = useRef(null)

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const categories = ["Tech", "Healthcare", "Creative"]
  const tabs = ["All", "Career", "Study", "Life", "Finance"]

  const articles = [
    {
      id: 1,
      category: "CAREER",
      title: "Navigating the Australian Job Market",
      description: "Understand the nuances of the Australian job market, including industry trends, in-demand...",
      image: "/placeholder.svg?height=120&width=200",
      bgColor: "from-orange-200 to-orange-300",
      content: `
        <h2>Understanding the Australian Job Market</h2>
        <p>Australia's job market is dynamic and diverse, offering opportunities across various sectors. The country's strong economy and growing population create a demand for skilled workers in multiple industries.</p>
        
        <h3>Key Industries in Demand</h3>
        <ul>
          <li><strong>Healthcare:</strong> With an aging population, healthcare professionals are in high demand</li>
          <li><strong>Technology:</strong> Digital transformation drives demand for IT professionals</li>
          <li><strong>Construction:</strong> Infrastructure projects create opportunities for skilled trades</li>
          <li><strong>Education:</strong> Growing international student population increases demand for educators</li>
        </ul>
        
        <h3>Job Search Strategies</h3>
        <p>Successful job hunting in Australia requires understanding local practices:</p>
        <ul>
          <li>Tailor your resume to Australian standards</li>
          <li>Network through professional associations</li>
          <li>Use job boards like SEEK, Indeed, and LinkedIn</li>
          <li>Consider recruitment agencies for specialized roles</li>
        </ul>
        
        <h3>Workplace Culture</h3>
        <p>Australian workplace culture values work-life balance, direct communication, and egalitarian relationships. Understanding these cultural nuances can help you integrate successfully into your new workplace.</p>
      `,
      readTime: "5 min read",
      author: "Sarah Johnson",
      publishDate: "2024-01-15",
    },
    {
      id: 2,
      category: "STUDY",
      title: "Choosing the Right University Course",
      description: "Explore factors to consider when selecting a university course, such as career goals, course...",
      image: "/placeholder.svg?height=120&width=200",
      bgColor: "from-green-200 to-green-300",
      content: `
        <h2>Making the Right Course Choice</h2>
        <p>Selecting the right university course is one of the most important decisions you'll make. It affects your career prospects, earning potential, and personal satisfaction for years to come.</p>
        
        <h3>Factors to Consider</h3>
        <ul>
          <li><strong>Career Goals:</strong> Align your course with your long-term career aspirations</li>
          <li><strong>Industry Demand:</strong> Research job market trends and growth sectors</li>
          <li><strong>Personal Interests:</strong> Choose subjects you're passionate about</li>
          <li><strong>Entry Requirements:</strong> Ensure you meet academic prerequisites</li>
          <li><strong>University Reputation:</strong> Consider rankings and industry connections</li>
        </ul>
        
        <h3>Research Methods</h3>
        <p>Thorough research is essential for making an informed decision:</p>
        <ul>
          <li>Attend university open days and information sessions</li>
          <li>Speak with current students and graduates</li>
          <li>Review course curricula and assessment methods</li>
          <li>Investigate internship and placement opportunities</li>
        </ul>
        
        <h3>Financial Considerations</h3>
        <p>Understanding the financial implications of your course choice is crucial. Consider tuition fees, living expenses, and potential return on investment through future earnings.</p>
      `,
      readTime: "7 min read",
      author: "Michael Chen",
      publishDate: "2024-01-12",
    },
    {
      id: 3,
      category: "LIFE",
      title: "Work-Life Balance in Australia",
      description: "Discover tips for maintaining a healthy work-life balance in Australia, including managing...",
      image: "/placeholder.svg?height=120&width=200",
      bgColor: "from-pink-200 to-pink-300",
      content: `
        <h2>Achieving Work-Life Balance Down Under</h2>
        <p>Australia is renowned for its emphasis on work-life balance. Understanding how to maintain this balance is essential for your well-being and long-term success.</p>
        
        <h3>Australian Work Culture</h3>
        <p>Australian workplaces typically value:</p>
        <ul>
          <li>Flexible working arrangements</li>
          <li>Annual leave and long service leave</li>
          <li>Reasonable working hours</li>
          <li>Mental health awareness</li>
        </ul>
        
        <h3>Strategies for Balance</h3>
        <ul>
          <li><strong>Set Boundaries:</strong> Clearly separate work and personal time</li>
          <li><strong>Use Your Leave:</strong> Take advantage of Australia's generous leave entitlements</li>
          <li><strong>Stay Active:</strong> Embrace Australia's outdoor lifestyle</li>
          <li><strong>Build Social Connections:</strong> Develop friendships outside of work</li>
        </ul>
        
        <h3>Managing Stress</h3>
        <p>Recognize signs of stress and take proactive steps to manage it. Australia offers excellent mental health resources and support services for those who need them.</p>
      `,
      readTime: "6 min read",
      author: "Emma Wilson",
      publishDate: "2024-01-10",
    },
    {
      id: 4,
      category: "CAREER",
      title: "The Future of Work: Emerging Skills",
      description: "Stay ahead of the curve by identifying emerging skills and trends in the job market, and learn...",
      image: "/placeholder.svg?height=120&width=200",
      bgColor: "from-blue-200 to-blue-300",
      content: `
        <h2>Preparing for Tomorrow's Workplace</h2>
        <p>The future of work is rapidly evolving, driven by technological advancement, changing demographics, and shifting economic priorities. Staying ahead requires continuous learning and adaptation.</p>
        
        <h3>Emerging Skills in Demand</h3>
        <ul>
          <li><strong>Digital Literacy:</strong> Understanding of digital tools and platforms</li>
          <li><strong>Data Analysis:</strong> Ability to interpret and use data effectively</li>
          <li><strong>Artificial Intelligence:</strong> Knowledge of AI applications and implications</li>
          <li><strong>Emotional Intelligence:</strong> Skills in empathy, communication, and leadership</li>
          <li><strong>Sustainability:</strong> Understanding of environmental and social responsibility</li>
        </ul>
        
        <h3>Industry Trends</h3>
        <p>Key trends shaping the future workplace include:</p>
        <ul>
          <li>Remote and hybrid work models</li>
          <li>Automation and AI integration</li>
          <li>Focus on mental health and well-being</li>
          <li>Emphasis on diversity and inclusion</li>
        </ul>
        
        <h3>Continuous Learning</h3>
        <p>Embrace lifelong learning through online courses, professional development programs, and industry certifications to stay competitive in the evolving job market.</p>
      `,
      readTime: "8 min read",
      author: "David Kim",
      publishDate: "2024-01-08",
    },
    {
      id: 5,
      category: "FINANCE",
      title: "Financial Planning for Students",
      description: "Learn essential financial planning strategies for students, including budgeting, managing...",
      image: "/placeholder.svg?height=120&width=200",
      bgColor: "from-purple-200 to-purple-300",
      content: `
        <h2>Smart Financial Planning for Students</h2>
        <p>Managing finances as a student can be challenging, but developing good financial habits early will benefit you throughout your life. Here's how to take control of your money.</p>
        
        <h3>Creating a Budget</h3>
        <p>A budget is your financial roadmap:</p>
        <ul>
          <li>Track your income from all sources</li>
          <li>List all expenses (fixed and variable)</li>
          <li>Identify areas where you can cut costs</li>
          <li>Set aside money for emergencies</li>
        </ul>
        
        <h3>Managing Student Debt</h3>
        <ul>
          <li><strong>Understand Your Loans:</strong> Know the terms and conditions</li>
          <li><strong>Minimize Borrowing:</strong> Only borrow what you need</li>
          <li><strong>Consider Part-time Work:</strong> Balance work with studies</li>
          <li><strong>Explore Scholarships:</strong> Apply for financial aid opportunities</li>
        </ul>
        
        <h3>Building Financial Literacy</h3>
        <p>Invest time in learning about personal finance, including savings accounts, credit cards, and investment basics. This knowledge will serve you well beyond your student years.</p>
        
        <h3>Student Discounts and Benefits</h3>
        <p>Take advantage of student discounts on transport, entertainment, software, and other services to stretch your budget further.</p>
      `,
      readTime: "6 min read",
      author: "Lisa Thompson",
      publishDate: "2024-01-05",
    },
  ]

  const AnimatedCard = ({ article, index }: { article: any; index: number }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ scale: 1.02, y: -4 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onBlogClick(article)}
      >
        <Card className="bg-white border-0 shadow-sm overflow-hidden cursor-pointer">
          <CardContent className="p-0">
            <div className={`h-32 bg-gradient-to-br ${article.bgColor} relative`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 rounded-full" />
              </div>
            </div>
            <div className="p-4">
              <p className="text-xs font-medium text-blue-500 mb-2">{article.category}</p>
              <h3 className="font-semibold text-gray-900 mb-2 leading-tight">{article.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{article.description}</p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-xs text-gray-500">{article.readTime}</span>
                <span className="text-xs text-gray-500">{article.author}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between p-4 pt-12 bg-white sticky top-0 z-10"
      >
        <div className="flex items-center">
          <motion.button whileTap={{ scale: 0.95 }} onClick={onHomeClick} className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </motion.button>
          <h1 className="text-xl font-semibold text-gray-900 ml-2">Explore</h1>
        </div>
        <motion.button whileTap={{ scale: 0.95 }} className="p-2">
          <Search className="w-6 h-6 text-gray-600" />
        </motion.button>
      </motion.div>

      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="px-4 pt-6"
      >
        {/* Career Interest Question */}
        <motion.div variants={itemVariants} className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            What career path are you most interested in exploring?
          </h2>
          <div className="flex gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                whileHover={{ scale: 1.05, backgroundColor: "#e5e7eb" }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="flex gap-6 overflow-x-auto pb-2">
            {tabs.map((tab, index) => (
              <motion.button
                key={tab}
                className={`text-sm font-medium whitespace-nowrap pb-2 border-b-2 ${
                  index === 0 ? "text-gray-900 border-gray-900" : "text-gray-500 border-transparent"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {tab}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Articles Grid */}
        <div className="space-y-6">
          {articles.map((article, index) => (
            <AnimatedCard key={article.id} article={article} index={index} />
          ))}
        </div>

        {/* Loading More Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center py-8"
        >
          <div className="inline-flex items-center gap-2 text-gray-500">
            <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
            <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
