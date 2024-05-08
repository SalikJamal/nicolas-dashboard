"use client"

import * as Clerk from '@clerk/elements/common'
import * as SignUp from '@clerk/elements/sign-up'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'


export default function SignUpPage() {
    return (
        <SignUp.Root path="/sign-up">
            <SignUp.Step className="flex flex-col gap-8" name="start">
                <h1 className="text-3xl font-medium">
                    Sign Up to Nicolas Dashboard
                </h1>

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
            </SignUp.Step>

            <SignUp.Step className="flex flex-col gap-5" name="verifications">
                <SignUp.Strategy name="email_link">
                    <p className="text-lg sm:text-base">Check your email for sign up link.</p>
                </SignUp.Strategy>
            </SignUp.Step>
        </SignUp.Root>
    )
}