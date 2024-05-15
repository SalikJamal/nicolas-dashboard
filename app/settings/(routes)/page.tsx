"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Form,
    FormField,
    FormItem,
} from "@/components/ui/form"
import { Separator } from "@/components/ui/separator"
import MetadataEditor from "@/components/settings/metadata-editor"

const formSchema = z.object({
    setting: z.string({ required_error: "Please select an option."})
})


export default function SettingsPage() {
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            setting: "metadata"
        }
    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log(data)
    }
    
    return (
        <div className="flex flex-col py-5 space-y-5 w-[400px] border-r h-full">
            <div className="px-5">
                <Form {...form}>
                    <form onChange={form.handleSubmit(onSubmit)} onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            control={form.control}
                            name="setting"
                            render={({ field }) => (
                                <FormItem>
                                    <Select
                                        onValueChange={field.onChange} 
                                        defaultValue={field.value}
                                    >
                                        <SelectTrigger className="w-full border border-gray-300 shadow-lg rounded-lg">
                                            <SelectValue defaultValue={field.value} />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="metadata">Meta Data</SelectItem>
                                                <SelectItem value="seo">SEO</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                        />
                    </form>
                </Form>
            </div>
            
            <Separator />

            <MetadataEditor />
        </div>
    )
}