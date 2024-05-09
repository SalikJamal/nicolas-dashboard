"use client"

import * as Clerk from '@clerk/elements/common'
import * as SignUp from '@clerk/elements/sign-up'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'


export default function SignUpPage() {
    return (
        <>
            <h1 className="text-3xl font-medium mb-5">
                Sign Up to Nicolas Dashboard
            </h1>

            <SignUp.Root>
                <SignUp.Step className="flex flex-col gap-8" name="start">
                    <Clerk.GlobalError className="block text-sm text-red-400" />
                    
                    <Clerk.Field name="firstName">
                        <Clerk.Label>First Name</Clerk.Label>
                        <Clerk.Input asChild>
                            <Input
                                name="firstName"
                                type="text"
                                placeholder="Your first name"
                                required
                            />
                        </Clerk.Input>
                        <Clerk.FieldError className="block mt-2 text-sm text-red-600" />
                    </Clerk.Field>

                    <Clerk.Field name="lastName">
                        <Clerk.Label>Last Name</Clerk.Label>
                        <Clerk.Input asChild>
                            <Input
                                name="lastName"
                                type="text"
                                placeholder="Your last name"
                                required
                            />
                        </Clerk.Input>
                        <Clerk.FieldError className="block mt-2 text-sm text-red-600" />
                    </Clerk.Field>

                    <Clerk.Field name="emailAddress">
                        <Clerk.Label>Email</Clerk.Label>
                        <Clerk.Input asChild>
                            <Input
                                name="emailAddress"
                                type="email"
                                placeholder="Your email address"
                                required
                            />
                        </Clerk.Input>
                        <Clerk.FieldError className="block mt-2 text-sm text-red-600" />
                    </Clerk.Field>

                    <SignUp.Action submit asChild>
                        <Button>
                            Send Magic Link
                        </Button>
                    </SignUp.Action>
                    <p className="text-center text-sm text-zinc-500">
                        Have an account? {" "} 
                        <Link className="font-medium text-zinc-950 decoration-zinc-950/20 underline-offset-4 outline-none hover:text-zinc-700 hover:underline focus-visible:underline" href="/sign-in">
                            Sign In
                        </Link>
                    </p>
                </SignUp.Step>

                <SignUp.Step className="flex flex-col items-center gap-5" name="verifications">
                    <SignUp.Strategy name="email_link">
                        <p className="text-lg sm:text-base">Check your email for sign up link.</p>
                    </SignUp.Strategy>
                </SignUp.Step>
            </SignUp.Root>
        </>
        
    )
}