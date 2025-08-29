import { readFileSync } from 'fs'
import path from 'path'
import MarkdownRenderer from '@/components/MarkdownRenderer'

export default function EngagementModelPage() {
  const content = readFileSync(
    path.join(process.cwd(), 'src/documentation/engagement-model.md'),
    'utf-8'
  )

  return <MarkdownRenderer content={content} />
}
