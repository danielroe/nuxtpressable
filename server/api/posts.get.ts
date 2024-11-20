import type { Post } from '#shared/post'

const storage = useStorage()

export default defineEventHandler(async () => {
  const postKeys = await storage.getKeys('posts')
  const posts = await storage.getItems(postKeys)
  return posts.map(p => p.value as Post)
})
