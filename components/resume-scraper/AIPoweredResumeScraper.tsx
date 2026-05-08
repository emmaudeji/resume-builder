// "use client"

// export async function parseResumeWithAI(text: string) {
//   console.log({ text })
//   const res = await fetch("/api/parse-resume", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ text }),
//   })

//   return res.json()
// }

// import { Resume } from "@/types/resume"
// import { SAMPLE_RESUME } from '@/constants/sample-resume'

// export function mapAIToResume(data: any): Resume {
//   return {
//     id: crypto.randomUUID(),
//     title: "Imported Resume",
//     createdAt: new Date().toISOString(),
//     updatedAt: new Date().toISOString(),

//     personal: {
//       label: "Personal",
//       visible: true,
//       order: 0,
//       ...data.personal,
//     },

//     summary: {
//       label: "Summary",
//       visible: true,
//       order: 1,
//       summary: data.summary || "",
//     },

//     experience: {
//       label: "Experience",
//       visible: true,
//       order: 2,
//       items: data.experience.map((e: any, i: number) => ({
//         id: String(i),
//         ...e,
//       })),
//     },

//     education: {
//       label: "Education",
//       visible: true,
//       order: 3,
//       items: data.education.map((e: any, i: number) => ({
//         id: String(i),
//         ...e,
//       })),
//     },

//     skills: {
//       label: "Skills",
//       visible: true,
//       order: 4,
//       show_level: false,
//       items: data.skills.map((s: string) => ({ name: s })),
//     },

//     projects: {
//       label: "Projects",
//       visible: true,
//       order: 5,
//       items:
//         data.projects?.map((p: any, i: number) => ({
//           id: String(i),
//           ...p,
//         })) || [],
//     },

//     languages: {
//       label: "Languages",
//       visible: true,
//       order: 6,
//       items: data.languages || [],
//     },

//     theme: SAMPLE_RESUME.theme,
 
//   }
// }

// import Image from 'next/image'

// import * as pdfjsLib from "pdfjs-dist"

// pdfjsLib.GlobalWorkerOptions.workerSrc =
//   "/pdf.worker.min.js"

// export async function extractTextFromPDF(file: File) {
//   const arrayBuffer = await file.arrayBuffer()
//   const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise

//   let fullText = ""

//   for (let i = 1; i <= pdf.numPages; i++) {
//     const page = await pdf.getPage(i)
//     const content = await page.getTextContent()

//     const pageText = content.items
//       .map((item: any) => item.str)
//       .join(" ")

//     fullText += pageText + "\n"
//   }

//   return fullText
// }

// import { useRef, useState } from "react"
// import { useRouter } from "next/navigation"
// import { useResumeBuilder } from '@/context/resume-builder.context'
// import { toast } from 'react-toastify'

// // import { extractTextFromPDF } from "@/lib/pdf"
// // import { parseResumeWithAI } from "@/lib/ai"
// // import { mapAIToResume } from "@/lib/mappers"

// export const AIPoweredResumeScraper = () => {
//   const inputRef = useRef<HTMLInputElement | null>(null)
//   const router = useRouter()
//   const {setResume} = useResumeBuilder()

//   const [loading, setLoading] = useState(false)
//   const [step, setStep] = useState<string>("")

//   const handleUpload = async (file: File) => {
//     // 🔒 Basic validation
//     if (file.type !== "application/pdf") {
//       toast.error("Please upload a PDF file")
//       return
//     }

//     if (file.size > 5 * 1024 * 1024) {
//       toast.error("File too large (max 5MB)")
//       return
//     }

//     try {
//       setLoading(true)

//       // 1. Extract text
//       setStep("Reading your resume...")
//       const text = await extractTextFromPDF(file)

//       if (!text || text.length < 50) {
//         throw new Error("Could not read resume content")
//       }

//       // 2. AI parse
//       setStep("Analyzing with AI...")
//       const aiData = await parseResumeWithAI(text)

//       if (!aiData || aiData.error) {
//         throw new Error("AI failed to parse resume")
//       }

//       // 3. Map to schema
//       setStep("Structuring your resume...")
//       const resume = mapAIToResume(aiData)

//       // 4. Store globally
//       setResume(resume)

//       // 5. Success feedback
//       toast.success("Resume imported successfully")

//       // 6. Redirect
//       router.push("/resume-builder")
//     } catch (err: any) {
//       console.error(err)

//       toast.error(
//         err?.message ||
//           "Something went wrong while processing your resume"
//       )
//     } finally {
//       setLoading(false)
//       setStep("")
//     }
//   }

//   return (
//     <>
//       {/* Hidden file input */}
//       <input
//         ref={inputRef}
//         type="file"
//         accept="application/pdf"
//         className="hidden"
//         onChange={(e) => {
//           const file = e.target.files?.[0]
//           if (file) handleUpload(file)
//         }}
//       />

//       {/* Card */}
//       <button
//         onClick={() => inputRef.current?.click()}
//         disabled={loading}
//         className="block w-full text-left rounded-md border border-primary p-6 space-y-3 hover:shadow-md bg-background transition disabled:opacity-70"
//       >
//         <Image
//           src={"/assets/upload-scrape-resume.png"}
//           alt="upload-resume"
//           height={360}
//           width={300}
//           className="h-32"
//         />

//         <h5 className="font-semibold">
//           {loading ? "Processing..." : "I already have a resume"}
//         </h5>

//         <p className="text-sm text-muted-foreground">
//           {loading
//             ? step || "Please wait..."
//             : "Upload your existing resume and let AI extract your information."}
//         </p>

//         {/* 🔥 Progress indicator */}
//         {loading && (
//           <div className="w-full h-1 bg-muted overflow-hidden rounded">
//             <div className="h-full bg-primary animate-pulse w-full" />
//           </div>
//         )}
//       </button>
//     </>
//   )
// }

 