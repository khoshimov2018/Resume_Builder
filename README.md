# Resume Revamp

A local-first, privacy-focused resume improvement tool built with Next.js (App Router), TypeScript, Shadcn UI, Radix UI, and Tailwind CSS. Instantly upload your resume (PDF/DOCX), chat with an AI to tailor it for your next job, preview changes, and export as PDF—all on your device.

## Features

- **Local-first:** All processing happens in your browser or on your device. No resumes are stored on a server.
- **Resume Upload:** Supports DOCX and PDF formats. Extracts structured data for editing.
- **AI-Powered Revamp:** Chat interface to request resume improvements, tailoring, or rewrites for specific jobs (optionally paste a job URL).
- **Live Preview:** See your resume updates in real time, compare with previous versions.
- **PDF Export:** Download your improved resume as a professionally formatted PDF.
- **Responsive UI:** Mobile-first, accessible, and fast. Built with Shadcn UI, Radix UI, and Tailwind CSS.
- **Modern Stack:** Next.js App Router, React 19, TypeScript, pnpm, Zod, Lucide icons, and more.

## Tech Stack

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/docs/app)
- **UI:** [Shadcn UI](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/), [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide](https://lucide.dev/)
- **AI/Parsing:** [ai-sdk](https://sdk.vercel.ai/), [officeparser](https://www.npmjs.com/package/officeparser), [mammoth](https://www.npmjs.com/package/mammoth)
- **PDF Generation:** [puppeteer](https://pptr.dev/)
- **Validation:** [Zod](https://zod.dev/)
- **Package Manager:** [pnpm](https://pnpm.io/)

## Getting Started

1. **Install dependencies:**

   ```bash
   pnpm install
   ```

2. **Set up environment variables:**

   Create a `.env.local` file in the root directory and add the following:

   ```bash
   # Database
   DATABASE_URL="postgresql://user:password@localhost:5432/resume_builder?schema=public"

   # NextAuth.js
   AUTH_SECRET="your-secret-key-here-generate-with-openssl-rand-base64-32"
   AUTH_URL="http://localhost:3000"

   # Google OAuth
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"

   # GitHub OAuth
   GITHUB_CLIENT_ID="your-github-client-id"
   GITHUB_CLIENT_SECRET="your-github-client-secret"

   # Google AI (for resume parsing/revamping)
   GOOGLE_GENERATIVE_AI_API_KEY=your_api_key_here
   ```

   **Generate AUTH_SECRET:**
   ```bash
   openssl rand -base64 32
   ```

   **Set up Google OAuth:**
   1. Go to [Google Cloud Console](https://console.cloud.google.com/)
   2. Create a new project or select an existing one
   3. Enable Google+ API
   4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client ID"
   5. Set authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
   6. Copy Client ID and Client Secret to `.env.local`

   **Set up GitHub OAuth:**
   1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
   2. Click "New OAuth App"
   3. Set Authorization callback URL: `http://localhost:3000/api/auth/callback/github`
   4. Copy Client ID and generate Client Secret
   5. Add both to `.env.local`

   Get your Google AI API key from [Google AI Studio](https://aistudio.google.com/app/apikey).

3. **Set up the database:**

   ```bash
   # Generate Prisma Client
   pnpm prisma generate

   # Run database migrations
   pnpm prisma migrate dev --name init
   ```

4. **Run the development server:**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Authentication

The app uses [Auth.js v5](https://authjs.dev/) (NextAuth.js) with Google and GitHub OAuth providers. Users can sign in with either provider to access the workspace and save their resume submissions.

- **Sign In Flow:** Users submit their resume data on the home page, then authenticate via the modal
- **Session Management:** Sessions are stored in the database using Prisma
- **Protected Routes:** The workspace page requires authentication

## Usage

1. **Upload Resume:** Click or drag-and-drop your DOCX or PDF file.
2. **Chat to Revamp:** Use the chat to request changes (e.g., "Tailor for software engineer at Google" or "Make my experience more concise"). Optionally, paste a job URL.
3. **Preview & Compare:** Instantly see the improved resume and compare with the previous version.
4. **Download PDF:** Export your new resume as a PDF.

## Project Structure

```
resume-revamp/
├── src/
│   ├── app/                # Next.js App Router, pages, API routes
│   │   ├── api/
│   │   │   ├── parse-document/route.ts   # DOCX/PDF parsing endpoint
│   │   │   ├── revamp/route.ts           # AI resume revamp endpoint
│   │   │   └── generate-pdf/route.ts     # PDF export endpoint
│   │   ├── page.tsx        # Main UI (upload, chat, preview)
│   │   └── layout.tsx      # App layout
│   ├── components/
│   │   ├── document-uploader.tsx         # Upload UI
│   │   ├── resume-preview.tsx            # Resume preview & compare
│   │   ├── chat-interface.tsx            # AI chat interface
│   │   ├── app-sidebar.tsx               # Sidebar navigation
│   │   └── ui/                           # Shadcn/Radix UI components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utilities
│   ├── agents/             # AI/LLM logic
│   └── types.ts            # Zod schemas & types
├── tailwind.config.ts      # Tailwind CSS config
├── package.json            # Scripts & dependencies
├── pnpm-lock.yaml          # pnpm lockfile
└── README.md
```

## Scripts

- `pnpm dev` – Start development server
- `pnpm build` – Build for production
- `pnpm start` – Start production server
- `pnpm lint` – Lint codebase

## Customization & Extensibility

- **UI:** Easily extend with new Shadcn/Radix components in `src/components/ui/`.
- **AI Logic:** Modify or extend resume transformation logic in `src/agents/structured-resume.ts`.
- **API:** Add new endpoints in `src/app/api/`.
- **Types:** Update Zod schemas in `src/types.ts` for new resume fields.

## Contributing

Contributions are welcome! Please open issues or PRs for improvements, bug fixes, or new features.

## License

MIT
