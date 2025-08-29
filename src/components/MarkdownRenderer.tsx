'use client'

import { useEffect, useState } from 'react'

interface MarkdownRendererProps {
  content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const [processedContent, setProcessedContent] = useState<string>('')

  useEffect(() => {
    // Process markdown content to HTML
    const processMarkdown = (text: string) => {
      let html = text

      // Headers
      html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-medium mt-8 mb-4 text-gray-100">$1</h3>')
      html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-light mt-12 mb-6 text-gray-100 border-b border-gray-900 pb-4">$1</h2>')
      html = html.replace(/^# (.*$)/gim, '<h1 class="text-4xl font-light mb-8 text-gray-100">$1</h1>')

      // Bold and Italic
      html = html.replace(/\*\*\*(.*)\*\*\*/gim, '<strong class="font-semibold text-gray-200"><em>$1</em></strong>')
      html = html.replace(/\*\*(.*)\*\*/gim, '<strong class="font-semibold text-gray-200">$1</strong>')
      html = html.replace(/\*(.*)\*/gim, '<em class="italic">$1</em>')

      // Lists
      html = html.replace(/^\* (.+)/gim, '<li class="ml-6 mb-2 text-gray-300">$1</li>')
      html = html.replace(/^- (.+)/gim, '<li class="ml-6 mb-2 text-gray-300">$1</li>')
      html = html.replace(/(<li.*<\/li>)/s, '<ul class="list-disc list-inside mb-6">$1</ul>')

      // Paragraphs
      html = html.replace(/\n\n/gim, '</p><p class="mb-6 text-gray-300 leading-relaxed">')
      html = '<p class="mb-6 text-gray-300 leading-relaxed">' + html + '</p>'

      // Clean up empty paragraphs
      html = html.replace(/<p class="[^"]*"><\/p>/gim, '')
      html = html.replace(/<p class="[^"]*">(<h[1-3])/gim, '$1')
      html = html.replace(/(<\/h[1-3]>)<\/p>/gim, '$1')
      html = html.replace(/<p class="[^"]*">(<ul)/gim, '$1')
      html = html.replace(/(<\/ul>)<\/p>/gim, '$1')

      return html
    }

    setProcessedContent(processMarkdown(content))
  }, [content])

  return (
    <div 
      className="prose-content"
      dangerouslySetInnerHTML={{ __html: processedContent }}
    />
  )
}
