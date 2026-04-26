'use client'

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import DOMPurify from 'dompurify'
import 'react-quill-new/dist/quill.snow.css'
import { Label } from '../ui/label'
import { cn } from '@/lib/utils'

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false })

/* ---------------------------
   Default Quill Toolbar Modules
---------------------------- */
const defaultModules = {
  toolbar: [
    [{ font: [] }, { size: ['small', false, 'large', 'huge'] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ script: 'sub' }, { script: 'super' }],
    ['blockquote', 'code-block'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ indent: '-1' }, { indent: '+1' }],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    ['link', 'formula'],
    ['clean'],
  ],
}

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'script',
  'blockquote',
  'code-block',
  'list',
  'indent',
  'align',
  'color',
  'background',
  'link',
  'formula',
]

/* ---------------------------
   RichTextEditor Component
---------------------------- */
interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
  className?: string
  placeholder?: string
  disabled?: boolean
  modules?: any
  label?: string
  description?: string
  labelStyle?: string
  name?: string
  error?: string
  required?: boolean
  id?: string
}

export const RichTextEditor: React.FC<RichTextEditorProps> = ({
  value,
  onChange,
  className,
  disabled,
  modules = defaultModules,
  placeholder = 'Write your content here...',
  label,
  description,
  labelStyle,
  name,
  error,
  required,
  id,
}) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => setIsMounted(true), [])

  if (!isMounted) {
    return (
      <div className="min-h-[300px] border p-4 rounded-md bg-gray-50">
        Loading editor...
      </div>
    )
  }

  return (
    <div className="pb-2">
      {label && (
        <div className="mb-1">
          <Label htmlFor={name} className={cn('flex items-center text-base gap-1', labelStyle)}>
            {label} {required && <span className="text-red-500">*</span>}
          </Label>
          {description && <small className="text-foreground/60">{description}</small>}
        </div>
      )}

      <ReactQuill
        id={id}
        theme="snow"
        value={value}
        onChange={onChange}
        readOnly={disabled}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
        className={cn('editor-content no-scrollbar', className)}
      />

      {error && <small className="text-red-500">{error}</small>}
    </div>
  )
}

/* ---------------------------
   RichTextRead Component
---------------------------- */
interface RichTextReadProps {
  content: string
  className?: string
}

export const RichTextRead: React.FC<RichTextReadProps> = ({ content, className }) => {
  const [sanitized, setSanitized] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSanitized(DOMPurify.sanitize(content))
    }
  }, [content])

  return <div className={className} dangerouslySetInnerHTML={{ __html: sanitized }} />
}