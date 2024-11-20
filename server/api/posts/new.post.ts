import { Post, validatePost } from "~~/shared/post"

const storage = useStorage('posts')

export default defineEventHandler(async event => {
  const session = await getUserSession(event)
  if (!session.user) {
    throw createError({
      message: 'Not logged in',
      status: 401
    })
  }
  const { body, slug, title } = await readValidatedBody(event, validatePost)

  await storage.setItem(slug, {
    title,
    body,
    slug,
    author: session.user.name,
    createdAt: new Date().toISOString()
  } satisfies Post)
  
  return null
})
