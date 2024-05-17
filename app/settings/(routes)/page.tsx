"use client"

import { z } from "zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { 
    Form, 
    FormControl, 
    FormField, 
    FormItem, 
    FormMessage
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PlusIcon } from "lucide-react"

type MetadataFormValues = z.infer<typeof formSchema>
const formSchema = z.object({
    emailAddress: z.string().min(1, { message: "Email is required" }).email({ message: "Invalid email" })
})


export default function SettingsPage() {
    
    const [loading, setLoading] = useState(false)

    const form = useForm<MetadataFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            emailAddress: ""
        }
    })

    const onSubmit = async (values: MetadataFormValues) => {
        try {
            console.log(values)
            toast.success("SUCCESS")
        } catch(err) {
            toast.error("Something went wrong.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="space-y-5 p-10 md:px-20">
            <Button 
                className="text-sm rounded-2xl py-3.5 px-2.5 border-2 w-auto bg-white cursor-pointer text-black" 
                type="button"
                variant="link"
            >
                <PlusIcon className="size-5" />
            </Button>
            <h1 className="w-3/4 font-bold text-6xl">
                We help build your community before you start building.
            </h1>
            <p className="text-sm text-stone-400">Enter your email below to be notified of updates and when we launch.</p>
        
            <Form {...form}>
                <form className="flex gap-5 w-full" onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            control={form.control}
                            name="emailAddress"
                            render={({ field }) => (
                                <FormItem className="w-1/2">
                                    <FormControl>
                                        <Input
                                            placeholder="Email Address"
                                            disabled={loading}
                                            {...field} 
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    <Button 
                        type="submit" 
                        disabled={loading}
                    >
                        Submit
                    </Button>
                </form>
            </Form>

            <p className="text-xs text-stone-400">Your email will not be shared with any third parties.</p>
        </div>
    )
}