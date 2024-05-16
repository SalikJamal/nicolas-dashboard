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
    FormField, 
    FormItem, 
    FormLabel, 
    FormMessage
} from "@/components/ui/form"
import FaviconUpload from "@/components/ui/favicon-upload"


type MetadataFormValues = z.infer<typeof formSchema>
const formSchema = z.object({
    label: z.string().min(1, { message: "Name is required" }),
    imageURL: z.string().min(1, { message: "Favicon is required" })
})


export default function MetadataEditor() {

    const [loading, setLoading] = useState(false)

    const form = useForm<MetadataFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            label: "",
            imageURL: ""
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
        <div className="flex flex-col gap-14 px-5">
            <Form {...form}>
                <form className="space-y-8 w-full" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField 
                        control={form.control}
                        name="imageURL"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Favicon</FormLabel>
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
                    <FormField 
                        control={form.control}
                        name="label"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-stone-400">Page title</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Billboard label"
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
        </div>
    )
}