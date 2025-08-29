import { readFileSync } from 'fs'
import path from 'path'
import MarkdownRenderer from '@/components/MarkdownRenderer'

export default function ResearchMethodologiesPage() {
  const content = readFileSync(
    path.join(process.cwd(), 'src/documentation/research-methodologies.md'),
    'utf-8'
  )

  return <MarkdownRenderer content={content} />
}
