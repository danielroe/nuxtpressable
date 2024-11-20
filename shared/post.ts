import * as v from 'valibot'

const postSchema = v.object({
  slug: v.string(),
  title: v.string(),
  body: v.string(),
})

export const validatePost = (data: unknown) => v.parse(postSchema, data)

export type Post = v.InferInput<typeof postSchema> & {
  author: string
  createdAt: string
}
