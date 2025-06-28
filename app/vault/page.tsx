"use client"

import type React from "react"

import { useState } from "react"
import {
  ArrowLeft,
  AlertTriangle,
  ChevronRight,
  FileText,
  GraduationCap,
  Calendar,
  User2,
  Plus,
  Upload,
  X,
  Eye,
  Download,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"

interface VaultPageProps {
  onHomeClick: () => void
  documents: any[]
  onDocumentAdd: (document: any) => void
}

export default function VaultPage({ onHomeClick, documents, onDocumentAdd }: VaultPageProps) {
  const [showUploadModal, setShowUploadModal] = useState(false)
  const [showDocumentDetail, setShowDocumentDetail] = useState(false)
  const [selectedDocument, setSelectedDocument] = useState<any>(null)
  const [selectedDocType, setSelectedDocType] = useState("")
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [hoveredDocument, setHoveredDocument] = useState<string | null>(null)

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  const progressVariants = {
    hidden: { width: 0 },
    visible: (width: number) => ({
      width: `${width}%`,
      transition: { duration: 1, delay: 0.5, ease: "easeOut" },
    }),
  }

  const documentTypes = [
    { value: "passport", label: "Passport", icon: FileText, color: "blue" },
    { value: "visa", label: "Visa", icon: GraduationCap, color: "green" },
    { value: "certificate", label: "Certificate", icon: Calendar, color: "purple" },
    { value: "resume", label: "Resume", icon: User2, color: "orange" },
    { value: "transcript", label: "Transcript", icon: FileText, color: "red" },
    { value: "other", label: "Other", icon: FileText, color: "gray" },
  ]

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setUploadedFile(file)
    }
  }

  const handleDocumentSubmit = () => {
    if (selectedDocType && uploadedFile) {
      const docType = documentTypes.find((type) => type.value === selectedDocType)
      const newDocument = {
        icon: docType?.icon || FileText,
        title: docType?.label || "Document",
        status: "Recently uploaded",
        statusColor: "text-green-500",
        progress: 100,
        progressColor: "bg-green-500",
        bgColor: `bg-${docType?.color}-100`,
        iconColor: `text-${docType?.color}-600`,
        image: "/placeholder.svg?height=40&width=60",
        uploadDate: new Date().toISOString().split("T")[0],
        fileSize: `${(uploadedFile.size / 1024 / 1024).toFixed(1)} MB`,
        fileType: uploadedFile.type.includes("pdf") ? "PDF" : "Image",
      }

      onDocumentAdd(newDocument)
      setShowUploadModal(false)
      setSelectedDocType("")
      setUploadedFile(null)
    }
  }

  const handleDocumentClick = (document: any) => {
    setSelectedDocument(document)
    setShowDocumentDetail(true)
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
        <h1 className="text-xl font-semibold text-gray-900 ml-2">Your Vault</h1>
      </motion.div>

      <div className="px-4 pt-6">
        {/* Warning Banner */}
        <motion.div variants={itemVariants} className="mb-6">
          <motion.div
            className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-start gap-3">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
              >
                <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5" />
              </motion.div>
              <p className="text-orange-700 text-sm leading-relaxed">
                Your Confirmation of Enrollment is expiring soon! Expires in 6 months. Consider renewing it.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Documents List */}
        <div className="space-y-4 mb-6">
          {documents.map((doc, index) => (
            <motion.div
              key={doc.id}
              variants={itemVariants}
              whileHover={{ scale: 1.01, y: -2 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onClick={() => handleDocumentClick(doc)}
              onMouseEnter={() => setHoveredDocument(doc.id)}
              onMouseLeave={() => setHoveredDocument(null)}
            >
              <Card
                className={`bg-white border-0 shadow-sm cursor-pointer transition-all duration-200 hover:shadow-md ${
                  doc.isExpiring && hoveredDocument === doc.id ? "ring-2 ring-red-200" : ""
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <motion.div
                      className={`w-12 h-12 ${doc.bgColor} rounded-full flex items-center justify-center`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <doc.icon className={`w-6 h-6 ${doc.iconColor}`} />
                    </motion.div>

                    {/* Document Image */}
                    <motion.div
                      className="w-12 h-8 bg-gray-200 rounded overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{doc.title}</h3>
                      <p className={`text-sm ${doc.statusColor || "text-gray-500"}`}>{doc.status}</p>

                      {/* Progress Bar */}
                      <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full ${doc.progressColor}`}
                          variants={progressVariants}
                          custom={doc.progress}
                          initial="hidden"
                          animate="visible"
                        />
                      </div>
                    </div>

                    {/* Arrow */}
                    <motion.div whileHover={{ x: 2 }} transition={{ duration: 0.2 }}>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Add Document Button */}
        <motion.div variants={itemVariants}>
          <motion.div whileTap={{ scale: 0.98 }}>
            <Button onClick={() => setShowUploadModal(true)} className="w-full bg-blue-500 hover:bg-blue-600 py-3">
              <Plus className="w-5 h-5 mr-2" />
              Add Document
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Document Detail Modal */}
      <AnimatePresence>
        {showDocumentDetail && selectedDocument && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 w-full max-w-md"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Document Details</h2>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowDocumentDetail(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </motion.button>
              </div>

              {/* Document Preview */}
              <div className="mb-6">
                <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <selectedDocument.icon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">Document Preview</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Title:</span>
                    <span className="text-sm font-medium text-gray-900">{selectedDocument.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Status:</span>
                    <Badge
                      className={
                        selectedDocument.isExpiring ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
                      }
                    >
                      {selectedDocument.status}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Upload Date:</span>
                    <span className="text-sm text-gray-900">{selectedDocument.uploadDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">File Size:</span>
                    <span className="text-sm text-gray-900">{selectedDocument.fileSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">File Type:</span>
                    <span className="text-sm text-gray-900">{selectedDocument.fileType}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <motion.div whileTap={{ scale: 0.98 }} className="flex-1">
                  <Button variant="outline" className="w-full bg-transparent">
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </Button>
                </motion.div>
                <motion.div whileTap={{ scale: 0.98 }} className="flex-1">
                  <Button variant="outline" className="w-full bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Upload Modal */}
      <AnimatePresence>
        {showUploadModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 w-full max-w-md"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Add Document</h2>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowUploadModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </motion.button>
              </div>

              {/* Document Type Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Document Type</label>
                <div className="grid grid-cols-2 gap-3">
                  {documentTypes.map((type) => (
                    <motion.button
                      key={type.value}
                      className={`p-3 rounded-lg border-2 text-left transition-colors ${
                        selectedDocType === type.value
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setSelectedDocType(type.value)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-2">
                        <type.icon className="w-4 h-4 text-gray-600" />
                        <span className="text-sm font-medium">{type.label}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* File Upload */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Upload File</label>
                <motion.div
                  className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors"
                  whileHover={{ scale: 1.01 }}
                >
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">
                    {uploadedFile ? uploadedFile.name : "Click to upload or drag and drop"}
                  </p>
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                  />
                  <p className="text-xs text-gray-500">PDF, JPG, PNG, DOC up to 10MB</p>
                </motion.div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <motion.div whileTap={{ scale: 0.98 }} className="flex-1">
                  <Button variant="outline" onClick={() => setShowUploadModal(false)} className="w-full">
                    Cancel
                  </Button>
                </motion.div>
                <motion.div whileTap={{ scale: 0.98 }} className="flex-1">
                  <Button
                    onClick={handleDocumentSubmit}
                    disabled={!selectedDocType || !uploadedFile}
                    className="w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-50"
                  >
                    Upload
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
