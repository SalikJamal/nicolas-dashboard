"use client"

import { useState } from "react"
import { EditorContent, EditorRoot } from "novel"


export default function Editor() {

    const [content, setContent] = useState(null)

    return (
        <EditorRoot>
            <EditorContent
                initialContent={content}
                onUpdate={({ editor }: any) => {
                const json = editor.getJSON()
                setContent(json)
                }}
            />
        </EditorRoot>
    )
}
