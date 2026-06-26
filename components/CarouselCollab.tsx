import Image from 'next/image'
import { publicUrl } from '@/lib/supabase/storage'
import listImages from '@/lib/supabase/listImages'

interface params {
  BUCKET: string
  PREFIX: string
}

const CarouselCollab = async ({ BUCKET, PREFIX }: params) => {
  const files = await listImages(BUCKET, PREFIX)

  return (
    <div className='snap-x snap-mandatory scroll-ps-6 flex gap-4 overflow-x-auto p-4'>
      {files.length > 0 &&
        files.map((f, index) => {
          const filePath = PREFIX.endsWith('/')
            ? `${PREFIX}${f.name}`
            : `${PREFIX}/${f.name}`
          const url = publicUrl(BUCKET, filePath)
          return (
            <figure
              key={f.id}
              className='snap-center flex shrink-0 w-[80vw] rounded-lg overflow-hidden bg-background md:w-[40vw] lg:w-[30vw]'
            >
              <div className='relative w-full h-[60vh]'>
                <Image
                  src={url}
                  alt={f.name}
                  fill
                  className='object-cover'
                  priority={index < 3 ? true : false}
                  loading={index < 3 ? 'eager' : 'lazy'}
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
              </div>
            </figure>
          )
        })}
    </div>
  )
}

export default CarouselCollab
