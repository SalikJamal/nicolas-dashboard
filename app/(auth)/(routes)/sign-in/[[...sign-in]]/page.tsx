'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSignIn } from "@clerk/nextjs"
import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
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


export default function SignInPage() {
    
    const router = useRouter()
    const { signIn } = useSignIn()

    const signInWithPasskey = async () => {
        try {
            await signIn?.authenticateWithPasskey({ flow: 'discoverable' })
            router.push('/')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="grid w-full grow items-center px-4 sm:justify-center">
            <SignIn.Root>
                <Clerk.Loading>
                    {(isGlobalLoading) => (
                        <>
                            <SignIn.Step name="start">
                                
                                <Card className="w-full sm:w-96">
                                    <CardHeader>
                                        <CardTitle>Sign in to Nicolas Dashboard</CardTitle>
                                        <CardDescription>Welcome back! Please sign in to continue</CardDescription>
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

                                        <p className="flex items-center gap-x-3 text-sm text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
                                            or
                                        </p>

                                        <Clerk.Field name="identifier" className="space-y-2">
                                            <Clerk.Label asChild>
                                                <Label>Email address</Label>
                                            </Clerk.Label>
                                            <Clerk.Input 
                                                name="identifier" 
                                                type="email"
                                                asChild
                                                placeholder="Your email address"
                                                required
                                            >
                                                <Input />
                                            </Clerk.Input>
                                            <Clerk.FieldError className="block text-sm text-destructive" />
                                        </Clerk.Field>

                                        <Button
                                            type="button"
                                            variant="link" 
                                            size="sm"
                                            onClick={signInWithPasskey}
                                        >
                                            Use passkeys instead
                                        </Button>
                                    </CardContent>

                                    <CardFooter>
                                        <div className="grid w-full gap-y-4">
                                            <SignIn.Action submit asChild>
                                                <Button disabled={isGlobalLoading}>
                                                    <Clerk.Loading>
                                                        {(isLoading) => {
                                                            return isLoading ? <Icons.spinner className="size-4 animate-spin" /> : 'Continue'
                                                        }}
                                                    </Clerk.Loading>
                                                </Button>
                                            </SignIn.Action>

                                            <Button variant="link" size="sm" asChild>
                                                <Link href="/sign-up">
                                                    Don&apos;t have an account? Sign up
                                                </Link>
                                            </Button>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </SignIn.Step>

                            <SignIn.Step name="verifications">
                                <SignIn.Strategy name="email_link">
                                    <Card className="w-full sm:w-96">
                                        <CardHeader>
                                            <CardTitle>Verify your email</CardTitle>
                                            <CardDescription>
                                                Use the link sent to your email address to complete your sign in.
                                            </CardDescription>
                                        </CardHeader>
                                    </Card>
                                </SignIn.Strategy>
                            </SignIn.Step>
                        </>
                    )}
                </Clerk.Loading>
            </SignIn.Root>
        </div>
    )
}