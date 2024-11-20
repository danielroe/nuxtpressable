import type { Post } from '#shared/post'

const storage = useStorage()

export default defineCachedEventHandler(async () => {
  const postKeys = await storage.getKeys('posts')
  const posts = await storage.getItems(postKeys)
  return posts.map(p => p.value as Post).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
}, { swr: true })
