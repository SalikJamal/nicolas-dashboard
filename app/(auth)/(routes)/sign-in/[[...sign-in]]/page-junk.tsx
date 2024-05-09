"use client"

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useSignIn } from "@clerk/nextjs"
import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'


export default function SignInPage() {

    const router = useRouter()
    const { signIn } = useSignIn()

    const signInWithPasskey = async () => {
        try {
            const response = signIn?.authenticateWithPasskey()
            console.log(response)
        } catch (err) {
          console.log(err)
        }
      }

    return (
        <>
            <h1 className="text-3xl font-medium mb-5">
                Sign In to Nicolas Dashboard
            </h1>
            
            <SignIn.Root>
                <SignIn.Step className="flex flex-col gap-5" name="start">
                    
                    <Clerk.GlobalError className="block text-sm text-red-400" />

                    <Clerk.Field name="identifier">
                        <Clerk.Label>Email</Clerk.Label>
                        <Clerk.Input asChild>
                            <Input
                                name="identifier"
                                type="email"
                                placeholder="Your email address"
                                required
                            />
                        </Clerk.Input>
                        <Clerk.FieldError className="block mt-2 text-sm text-red-600" />
                    </Clerk.Field>

                    <Button 
                        variant="link" 
                        type="button" 
                        onClick={signInWithPasskey}
                    >
                        Use passkeys instead
                    </Button>

                    <SignIn.Action submit asChild>
                        <Button>
                            Send Magic Link
                        </Button>
                    </SignIn.Action>

                    <p className="text-center text-sm text-zinc-500">
                        <Link className="font-medium text-zinc-950 decoration-zinc-950/20 underline-offset-4 outline-none hover:text-zinc-700 hover:underline focus-visible:underline" href="/sign-up">
                            Create an account
                        </Link>
                    </p>
                </SignIn.Step>

                

                <SignIn.Step className="flex items-center flex-col gap-5" name="verifications">
                    <SignIn.Strategy name="email_link">
                        <p className="text-lg sm:text-base">Check your email for sign in link.</p>
                    </SignIn.Strategy>
                </SignIn.Step>
            </SignIn.Root>
        </>
        
    )
}