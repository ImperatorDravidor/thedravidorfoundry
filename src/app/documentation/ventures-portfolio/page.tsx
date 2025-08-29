import { readFileSync } from 'fs'
import path from 'path'
import MarkdownRenderer from '@/components/MarkdownRenderer'

export default function VenturesPortfolioPage() {
  const content = readFileSync(
    path.join(process.cwd(), 'src/documentation/ventures-portfolio.md'),
    'utf-8'
  )

  return <MarkdownRenderer content={content} />
}
