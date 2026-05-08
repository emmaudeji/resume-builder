import { ResumeBuilderProvider } from "@/context/resume-builder.context"
import { defaultUrl } from "@/utils/config"
import { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),

  title: {
    default: "Resume Geek | AI Resume Builder & Career Tools",
    template: "%s | Resume Geek",
  },

  description:
    "Build professional resumes with AI, get expert career advice, and land jobs faster with Resume Geek by Gogrene Technology. Your all-in-one platform for resume creation, job search, and career growth.",

  keywords: [
    "AI resume builder",
    "Resume generator",
    "CV builder online",
    "Career advice platform",
    "Job search tools",
    "Resume optimization AI",
    "Professional resume templates",
    "Job hunt platform",
    "Gogrene Technology",
    "Resume Geek",
  ],

  authors: [{ name: "Gogrene Technology" }],
  creator: "Gogrene Technology",
  publisher: "Gogrene Technology",

  applicationName: "Resume Geek",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: defaultUrl,
    title: "Resume Geek | AI-Powered Resume Builder & Career Platform",
    description:
      "Create standout resumes with AI, explore career insights, and accelerate your job search with Resume Geek.",
    siteName: "Resume Geek",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Resume Geek – AI Resume Builder & Career Tools",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Resume Geek | AI Resume Builder",
    description:
      "Craft winning resumes, get career advice, and land your next job faster with AI-powered tools.",
    images: ["/og-image.png"],
  },

  category: "Technology",
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ResumeBuilderProvider>
      {children} 
    </ResumeBuilderProvider>
  )
}
