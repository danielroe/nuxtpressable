export default defineOAuthGitHubEventHandler({
  config: {
    scope: ['user:email'],
    emailRequired: true
  },
  async onSuccess(event, { user, tokens }) {
    await setUserSession(event, {
      user: {
        name: user.name,
        email: user.email,
        githubId: user.id
      }
    })
    return sendRedirect(event, '/')
  },
  // Optional, will return a json error and 401 status code by default
  onError(event, error) {
    console.error('GitHub OAuth error:', error)
    return sendRedirect(event, '/')
  },
})

declare module '#auth-utils' {
  interface User {
    name: string
    email: string
    githubId: string
  }

  interface UserSession {
    // Add your own fields
  }

  interface SecureSessionData {
    // Add your own fields
  }
}
