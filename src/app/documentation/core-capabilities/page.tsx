import { readFileSync } from 'fs'
import path from 'path'
import MarkdownRenderer from '@/components/MarkdownRenderer'

export default function CoreCapabilitiesPage() {
  const content = readFileSync(
    path.join(process.cwd(), 'src/documentation/core-capabilities.md'),
    'utf-8'
  )

  return <MarkdownRenderer content={content} />
}
