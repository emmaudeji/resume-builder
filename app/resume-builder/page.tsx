import ResumeBuilderLayout from '@/components/resume-builder/ResumeBuilderLayout'
import { StartResumeModal } from '@/components/resume-builder/StartResumeModal'
import { ResumeBuilderProvider } from '@/context/resume-builder.context'
import { Suspense } from 'react'

const page = ({searchParams}:{searchParams: Record<string,string>}) => {
  return (
    <main>
        <StartResumeModal/>

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
  const id=( await searchParams)?.id

  // const {data, error} = await fetchResume(id)

  return (
    <ResumeBuilderProvider>
      <ResumeBuilderLayout />
    </ResumeBuilderProvider>
  )
}