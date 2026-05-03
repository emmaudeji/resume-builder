import ResumeBuilderLayout from '@/components/resume-builder/ResumeBuilderLayout'
import { SignUpModal } from '@/components/resume-builder/SignUpModal'
import { StartResumeModal } from '@/components/resume-builder/StartResumeModal'
import { Suspense } from 'react'

const page = ({searchParams}:{searchParams: Record<string,string>}) => {
  return (
    <main>
        <StartResumeModal/>
        <SignUpModal />

        <Suspense fallback={
          <>Loading</>
        }>
          <Wrapper searchParams={searchParams} />
        </Suspense>

    </main>
  )
}

export default page

const  Wrapper = async ({searchParams}:{searchParams: Record<string,string>}) => {
  const template =( await searchParams)?.template
console.log({template})
  // const {data, error} = await fetchResume(id)

  return (
    <ResumeBuilderLayout templateId={template} />
  )
}