import UploadScrapeResume from '@/components/resume-builder/UploadScrapeResume'
// import { AIPoweredResumeScraper } from '@/components/resume-scraper/AIPoweredResumeScraper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NewResumePage = () => {
  return (
    <main className='grid md:grid-cols-2 min-h-screen'>
        <aside className="h-full p-8 bg-gradient-to-tr from-blue-950 to-primary flex flex-col gap-4 justify-between">
            <div className="flex flex-col gap-4 max-w-md">
                <h1 className="text-3xl font-bold text-white">Welcome to Resume Builder</h1>
                <p className="text-white/90">
                    Create a professional resume in minutes. Choose from customizable templates, add your experience, and download your resume in PDF format.
                </p>
            </div>

            <Image 
                src="/assets/resume-illustration.png"
                alt="Resume Illustration"
                width={400}
                height={300}
                className="self-center opacity-80"
            />
        </aside>

        <article className="h-full p-4 sm:p-8 flex flex-col items-center justify-center">
            <div className="max-w-lg w-full  ">
                <h2 className="  font-semibold mb-4">Let's get you started!</h2>
                <p className="  mb-6">
                    How do want to start building your resume?
                </p>

                <div className="flex flex-col gap-4 w-full">
                    <Link href="/new" className="block rounded-md p-6 border space-y-3 hover:shadow-md bg-background border-primary">
                        <Image src={'/assets/start-from-scratch.png'} alt='start-from-scratch' height={360} width={300} className='h-32' />
                        <h3 className="font-semibold">Start from Scratch</h3>
                        <p className="text-sm text-muted-foreground">
                            Build your resume step by step with our AI guided form.
                        </p>
                    </Link>

                    <button
                            // onClick={() => inputRef.current?.click()}
                            // disabled={loading}
                            className="block w-full text-left rounded-md border border-primary p-6 space-y-3 hover:shadow-md bg-background transition disabled:opacity-70"
                          >
                            <Image
                              src={"/assets/upload-scrape-resume.png"}
                              alt="upload-resume"
                              height={360}
                              width={300}
                              className="h-32"
                            />
                    
                            <h5 className="font-semibold">
                              {
                            //   loading ? "Processing..." : 
                              "I already have a resume"}
                            </h5>
                    
                            <p className="text-sm text-muted-foreground">
                              {
                            //   loading
                            //     ? step || "Please wait...": 
                                "Upload your existing resume and let AI extract your information."}
                            </p>
                    
                            {/* 🔥 Progress indicator */}
                            {
                            // loading && 
                            
                            
                              <div className="w-full h-1 bg-muted overflow-hidden rounded">
                                <div className="h-full bg-primary animate-pulse w-full" />
                              </div>
                            }
                          </button>
                </div>
            </div>
        </article>
        
    </main>
  )
}

export default NewResumePage