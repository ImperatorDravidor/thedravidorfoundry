import { readFileSync } from 'fs'
import path from 'path'
import MarkdownRenderer from '@/components/MarkdownRenderer'

export default function InstitutionalOverviewPage() {
  const content = readFileSync(
    path.join(process.cwd(), 'src/documentation/institutional-overview.md'),
    'utf-8'
  )

  return <MarkdownRenderer content={content} />
}
