import Image from 'next/image'
import { createClient } from '@/lib/supabase/server'
import { publicUrl } from '@/lib/supabase/storage'

import TypeImage from '@/types/Storage'

const BUCKET = 'assets'
const PREFIX = 'collabs/sethtwo'

const listImages = async (
  bucket: string,
  path: string
): Promise<TypeImage[]> => {
  const supabase = await createClient()
  const { data, error } = await supabase.storage.from(bucket).list(path, {
    limit: 10,
    offset: 0,
    sortBy: { column: 'name', order: 'asc' }
  })
  if (error) {
    console.error('Supabase storage.list error', error)
    return []
  }
  return data || []
}

const CollabsSethtwo = async () => {
  const files = await listImages(BUCKET, PREFIX)

  return (
    <div className='snap-x snap-mandatory scroll-ps-6 flex gap-4 overflow-x-auto p-4'>
      {files.map((f, index) => {
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

export default CollabsSethtwo
