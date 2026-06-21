import { createClient } from '@/lib/supabase/server'
import TypeImage from '@/types/Storage'

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

export default listImages
