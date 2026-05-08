import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {
  const { text } = await req.json()

  const response = await openai.chat.completions.create({
    model: "gpt-5-mini", // fast + cheap
    messages: [
      {
        role: "user",
        content: RESUME_SCRAPER_PROMPT(text),
      },
    ],
    temperature: 0.2, // 🔥 important (reduce hallucination)
  })

  const raw = response.choices[0].message.content || "{}"

  try {
    const parsed = JSON.parse(raw)
    return Response.json(parsed)
  } catch {
    return Response.json({ error: "Invalid JSON from AI" }, { status: 500 })
  }
}

const RESUME_SCRAPER_PROMPT = (text:string) => `
You are a resume parser.

Extract structured data from the resume text below.

Return ONLY valid JSON. No explanations.

Follow this exact schema:

{
  "personal": {
    "first_name": "",
    "last_name": "",
    "job_title": "",
    "email": "",
    "phone": "",
    "linkedin": "",
    "github": "",
    "address": "",
    "city": ""
  },
  "summary": "",
  "experience": [
    {
      "company_name": "",
      "role": "",
      "start_date": "",
      "end_date": "",
      "current": false,
      "description": "",
      "highlights": []
    }
  ],
  "education": [
    {
      "institution": "",
      "degree": "",
      "field_of_study": "",
      "start_date": "",
      "end_date": ""
    }
  ],
  "skills": [],
  "projects": [],
  "languages": []
}

Rules:
- If data is missing, use empty string or empty array
- Dates should be human readable (e.g. "Jan 2022")
- Do NOT hallucinate
- Keep content concise
- Extract bullet points into highlights if present

Resume text:
"""
${text}
"""
`