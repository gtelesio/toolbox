import { config } from './config'

export async function fetchFilesData(fileName) {
  const url = fileName
    ? `${config.apiUrl}/api/v1/files/data?fileName=${encodeURIComponent(fileName)}`
    : `${config.apiUrl}/api/v1/files/data`;
  const res = await fetch(url)
  if (!res.ok) throw new Error('Error fetching files')
  return await res.json()
} 