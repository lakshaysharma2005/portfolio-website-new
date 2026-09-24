import { readFile } from 'fs/promises'
import path from 'path'

export const dynamic = 'force-dynamic'

const PDF_PATH = path.join(process.cwd(), 'public', 'Lakshay_Sharma_Resume.pdf')

export async function GET() {
  const pdf = await readFile(PDF_PATH)

  return new Response(pdf, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="Lakshay_Sharma_Resume.pdf"',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  })
}
