import Image from 'next/image'
 

const UploadScrapeResume = () => {
  return (
    <div  className="block rounded-md  border-primary p-6 border space-y-3 hover:shadow-md bg-background ">
        <Image src={'/assets/upload-scrape-resume.png'} alt='upload-scrape-resume' height={360} width={300} className='h-32' />
        <h5 className="font-semibold">
            I already have a resume
        </h5>  
        <p className="text-sm text-muted-foreground">
            Upload your existing resume and let our AI extract the information for you.
        </p>
    </div>
  )
}

export default UploadScrapeResume