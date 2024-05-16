import { z } from "zod"
import { useState } from "react"
import toast from "react-hot-toast"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
    Form, 
    FormControl, 
    FormDescription, 
    FormField, 
    FormItem, 
    FormLabel, 
    FormMessage
} from "@/components/ui/form"
import FaviconUpload from "@/components/ui/favicon-upload"
import OGImageUpload from "@/components/ui/og-image-upload"
import { Textarea } from "@/components/ui/textarea"


type MetadataFormValues = z.infer<typeof formSchema>
const formSchema = z.object({
    pageTitle: z.string().min(1, { message: "Page title is required" }),
    metaDescription: z.string().min(1, { message: "Meta description is required" }),
    metaKeywords: z.string().min(1, { message: "Meta keyword is required" }),
    ogTitle: z.string().min(1, { message: "OG title is required" }),
    ogDescription: z.string().min(1, { message: "OG description is required" }),
    faviconImageURL: z.string().min(1, { message: "Favicon is required" }),
    ogImageURL: z.string().min(1, { message: "OG Image is required" })
})


export default function MetadataEditor() {

    const [loading, setLoading] = useState(false)

    const form = useForm<MetadataFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            pageTitle: "Startt - We help build your community",
            metaDescription: "We help build your community before you start building",
            metaKeywords: "Startup, landing page, page builder",
            ogTitle: "Startt - We help build your community",
            ogDescription: "We help build your community before you start building",
            faviconImageURL: "",
            ogImageURL: ""
        }
    })

    const onSubmit = async (values: MetadataFormValues) => {
        try {
            console.log(values)
            toast.success("SUCCESS.")
        } catch(err) {
            toast.error("Something went wrong.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex flex-col p-5">
            <Form {...form}>
                <form className="flex flex-col gap-20 w-full" onSubmit={form.handleSubmit(onSubmit)}>
                    <div>
                        <FormField
                            control={form.control}
                            name="faviconImageURL"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel className="text-base">Favicon</FormLabel>
                                    <FormControl>
                                        <FaviconUpload 
                                            value={field.value}
                                            disabled={loading}
                                            onChange={value => field.onChange(value)}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="space-y-6">
                        <h1 className="text-base font-medium">Meta data</h1>

                        <FormField 
                            control={form.control}
                            name="pageTitle"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-stone-400">Page title</FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={loading}
                                            {...field} 
                                        />
                                    </FormControl>
                                    <FormDescription className="text-xs text-stone-400">
                                        We&apos;ll use your product name for the page title unless you add a value above.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField 
                            control={form.control}
                            name="metaDescription"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-stone-400">Meta description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            className="resize-none"
                                            disabled={loading}
                                            {...field} 
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField 
                            control={form.control}
                            name="metaKeywords"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-stone-400">Meta keywords</FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={loading}
                                            {...field} 
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="space-y-6">
                        <h1 className="text-base font-medium">Open Graph</h1>

                        <FormField 
                            control={form.control}
                            name="ogTitle"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-stone-400">OG title</FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={loading}
                                            {...field} 
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField 
                            control={form.control}
                            name="ogDescription"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-stone-400">OG description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            className="resize-none"
                                            disabled={loading}
                                            {...field} 
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="ogImageURL"
                            render={({ field }) => (
                                <FormItem >
                                    <FormLabel className="flex justify-between text-base">
                                        Open Graph image
                                        <span
                                            className="text-xs text-gray-400 cursor-pointer"
                                            onClick={() => field.onChange("")}
                                        >
                                            Remove
                                        </span>
                                    </FormLabel>
                                    <FormControl>
                                        <OGImageUpload 
                                            value={field.value}
                                            disabled={loading}
                                            onChange={value => field.onChange(value)}
                                        />
                                    </FormControl>
                                    <FormDescription className="text-xs text-stone-400">
                                        OG:image dimensions 1200px x 630px.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <Button 
                        type="submit" 
                        disabled={loading}
                    >
                        Submit
                    </Button>
                </form>
            </Form>
        </div>
    )
}