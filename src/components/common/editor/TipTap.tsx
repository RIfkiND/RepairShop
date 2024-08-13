'use client'

import { useEditor, EditorContent } from '@tiptap/react'

import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text' 

const Tiptap = () => {
  const editor:any = useEditor({
    extensions: [Document, Paragraph, Text],
    content: '<p>Hello World! 🌎️</p>',
  })

  return <EditorContent editor={editor} />
}

export default Tiptap
    