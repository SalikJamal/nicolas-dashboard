"use client"

import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'


export default function SignInPage() {

    return (
        <SignIn.Root path="/sign-in">
            <SignIn.Step className="flex flex-col gap-10" name="start">
                <h1 className="text-3xl font-medium">
                    Sign In to Nicolas Dashboard
                </h1>

                <Clerk.GlobalError className="block text-sm text-red-400" />

                <Clerk.Field name="identifier">
                    <Clerk.Label>Email</Clerk.Label>
                    <Clerk.Input asChild>
                        <Input 
                            type="email"
                            placeholder="Your email address"
                        />
                    </Clerk.Input>
                    <Clerk.FieldError>
                        {({ message, code }: { message: string; code: string; }) => (
                            <span className="block mt-2 text-sm text-red-600">
                                {code === "form_param_nil" ? "Email is required" : message}
                            </span>
                        )}
                    </Clerk.FieldError>
                </Clerk.Field>

                <SignIn.Action submit asChild>
                    <Button>
                        Sign In with Email
                    </Button>
                </SignIn.Action>
            </SignIn.Step>

            <SignIn.Step name="verifications">
                <SignIn.Strategy name="email_link">
                    Send link to your email
                </SignIn.Strategy>
            </SignIn.Step>
        </SignIn.Root>
    )
}