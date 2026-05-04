import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://qurbanihat-kappa.vercel.app"
})

export const { signIn, signUp, signOut, useSession } = createAuthClient()
// https://qurbanihat-kappa.vercel.app
// http://localhost:3000