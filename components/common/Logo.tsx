import { urls } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

const Logo = ({src='/logo.png', className, href=urls.base }: {src?:string, className?: string, href?: string }) => {
  return (
    <Link href={href} className=' relative'>
      {/* <h4 className="text-primary font-montserrat font-bold ">JobsBrekete</h4> */}
      <Image 
      src={src} height={100} width={150} alt='logo' className={cn('w-44 ', className) }/>
      {/* <small className='absolute -bottom-2  right-10 italic text-muted-foreground'>Job Search</small> */}
    </Link>
  )
}

export default Logo
