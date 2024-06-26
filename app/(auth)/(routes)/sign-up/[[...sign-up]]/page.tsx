'use client'

import Link from 'next/link'
import * as Clerk from '@clerk/elements/common'
import * as SignUp from '@clerk/elements/sign-up'
import { Button } from '@/components/ui/button'
import { 
    Card, 
    CardContent, 
    CardDescription, 
    CardFooter, 
    CardHeader, 
    CardTitle 
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Icons } from '@/components/ui/icons'


export default function SignUpPage() {
    return (
        <div className="grid w-full grow items-center px-4 sm:justify-center">
            <SignUp.Root>
                <Clerk.Loading>
                    {(isGlobalLoading) => (
                        <>
                            <SignUp.Step name="start">
                                <Card className="w-full sm:w-96">
                                    <CardHeader>
                                        <CardTitle>
                                            Create your account
                                        </CardTitle>
                                        <CardDescription>
                                            Welcome! Sign up to get started
                                        </CardDescription>
                                    </CardHeader>
                                    
                                    <Clerk.GlobalError className="block mx-2.5 mb-2.5 text-center text-sm text-destructive" />

                                    <CardContent className="grid gap-y-4">

                                        <div className="grid grid-cols-1 gap-x-4">
                                            <Clerk.Connection name="google" asChild>
                                                <Button size="sm" variant="outline" disabled={isGlobalLoading}>
                                                    <Clerk.Loading scope="provider:google">
                                                        {(isLoading) =>
                                                            isLoading ? (
                                                                <Icons.spinner className="size-4 animate-spin" />
                                                            ) : (
                                                                <>
                                                                    <Icons.google className="mr-2 size-4" />
                                                                    Google
                                                                </>
                                                            )
                                                        }
                                                    </Clerk.Loading>
                                                </Button>
                                            </Clerk.Connection>
                                        </div>
                                        
                                        {/* <p className="flex items-center gap-x-3 text-sm text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
                                            or
                                        </p>

                                        <Clerk.Field name="firstName" className="space-y-2">
                                            <Clerk.Label asChild>
                                                <Label>First Name</Label>
                                            </Clerk.Label>
                                            <Clerk.Input
                                                name="firstName"
                                                placeholder="Your first name" 
                                                asChild 
                                            >
                                                <Input />
                                            </Clerk.Input>
                                            <Clerk.FieldError className="block text-sm text-destructive" />
                                        </Clerk.Field>

                                        <Clerk.Field name="lastName" className="space-y-2">
                                            <Clerk.Label asChild>
                                                <Label>Last Name</Label>
                                            </Clerk.Label>
                                            <Clerk.Input 
                                                name="lastName"
                                                placeholder="Your last name" 
                                                asChild 
                                            >
                                                <Input />
                                            </Clerk.Input>
                                            <Clerk.FieldError className="block text-sm text-destructive" />
                                        </Clerk.Field>

                                        <Clerk.Field name="emailAddress" className="space-y-2">
                                            <Clerk.Label asChild>
                                                <Label>Email address</Label>
                                            </Clerk.Label>
                                            <Clerk.Input
                                                name="emailAddress" 
                                                type="email"
                                                asChild
                                                placeholder="Your email address"
                                            >
                                                <Input />
                                            </Clerk.Input>
                                            <Clerk.FieldError className="block text-sm text-destructive" />
                                        </Clerk.Field> */}
                                    </CardContent>

                                    <CardFooter>
                                        <div className="grid w-full gap-y-4">
                                            {/* <SignUp.Action submit asChild>
                                                <Button disabled={isGlobalLoading}>
                                                    <Clerk.Loading>
                                                        {(isLoading) => {
                                                            return isLoading ? <Icons.spinner className="size-4 animate-spin" /> : 'Continue'
                                                        }}
                                                    </Clerk.Loading>
                                                </Button>
                                            </SignUp.Action> */}
                                            
                                            <Button variant="link" size="sm" asChild>
                                                <Link href="/sign-in">Already have an account? Sign in</Link>
                                            </Button>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </SignUp.Step>

                            <SignUp.Step name="continue">
                                <Card className="w-full sm:w-96">
                                    <CardHeader>
                                        <CardTitle>Continue registration</CardTitle>
                                    </CardHeader>

                                    <CardContent>
                                        <Clerk.Field name="username" className="space-y-2">
                                            <Clerk.Label>
                                                <Label>Username</Label>
                                            </Clerk.Label>
                                            <Clerk.Input type="text" required asChild>
                                                <Input />
                                            </Clerk.Input>
                                            <Clerk.FieldError className="block text-sm text-destructive" />
                                        </Clerk.Field>
                                    </CardContent>
                                    
                                    <CardFooter>
                                        <div className="grid w-full gap-y-4">
                                            <SignUp.Action submit asChild>
                                                <Button disabled={isGlobalLoading}>
                                                    <Clerk.Loading>
                                                        {(isLoading) => {
                                                            return isLoading ? <Icons.spinner className="size-4 animate-spin" /> : 'Continue';
                                                        }}
                                                    </Clerk.Loading>
                                                </Button>
                                            </SignUp.Action>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </SignUp.Step>

                            <SignUp.Step name="verifications">
                                <SignUp.Strategy name="email_link">
                                    <Card className="w-full sm:w-96">
                                        <CardHeader>
                                            <CardTitle>Verify your email</CardTitle>
                                            <CardDescription>
                                                Use the link sent to your email address to complete the sign up.
                                            </CardDescription>
                                        </CardHeader>
                                    </Card>
                                </SignUp.Strategy>
                            </SignUp.Step>
                        </>
                    )}
                </Clerk.Loading>
            </SignUp.Root>
        </div>
    )
}