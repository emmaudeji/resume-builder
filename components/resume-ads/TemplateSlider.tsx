'use client'

import Slider from 'react-slick'
import Image from 'next/image'
import { LinkButton } from '../shared/LinkButton'
import { TEMPLATES } from '../resume-builder/TemplateRegistry'
import { useRouter } from 'next/navigation'

export const TemplateSlider = () => {
    const {push} = useRouter()
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",

    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2.2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1.4 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1.05 },
      },
    ],
  }


  return (
    <div className="w-full">
      <Slider {...settings}>
        {TEMPLATES.map((template) => (
          <div key={template.id} className="px-3">

            {/* A4 CARD CONTAINER */}
            <div className="relative group mx-auto w-full max-w-[240px] sm:max-w-[280px] md:max-w-[300px]">

              {/* A4 ASPECT RATIO */}
              <div className="relative w-full aspect-[210/297] overflow-hidden rounded-xl bg-white shadow-md">
                <Image
                  src={template.preview}
                  alt={template.name}
                  width={300}
                  height={300}
                  className="object-cover aspect-[210/297] size-full transition duration-300 group-hover:scale-[1.03]"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex flex-col items-center justify-center gap-3">

                  <p className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition">
                    {template.name}
                  </p>

                  <div className="opacity-0 group-hover:opacity-100 transition" onClick={()=>push(`/resume-builder?template=${template.id}`)} >
                    <LinkButton href={`/resume-builder?template=${template.id}`}  >
                      Use Template
                    </LinkButton>
                  </div>

                </div>

              </div>

            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}