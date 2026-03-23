import { joinURL } from 'ufo'

export const withBase = (path: string) => {
  if (!path) return ''
  if (path.startsWith('http')) return path
  
  const config = useRuntimeConfig()
  const baseURL = config.app.baseURL
  
  // Ensure path doesn't start with leading slash if baseURL already has trailing slash or vice versa
  return joinURL(baseURL, path)
}
