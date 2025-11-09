import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FAQs - ResumeCraft',
  description: 'Frequently asked questions about ResumeCraft - AI-powered resume builder',
};

export default function FAQPage() {
  const faqs = [
    {
      question: 'What file formats does ResumeCraft support?',
      answer: 'ResumeCraft currently supports DOCX (Microsoft Word) and PDF formats. Simply upload your existing resume in either format, and our system will automatically extract and parse all the information.',
    },
    {
      question: 'Is my resume data secure and private?',
      answer: 'Yes, absolutely. ResumeCraft is built with privacy as a core principle. All processing happens locally on your device, and we never store your resume content on our servers. Your data stays private and secure throughout the entire process. We only use authentication (Google or GitHub) to save your session preferences, not your resume content.',
    },
    {
      question: 'How does the AI tailor my resume for a specific job?',
      answer: 'When you provide a job URL, our AI analyzes the job description to identify key requirements, skills, and qualifications. It then compares your resume against these requirements and optimizes your content by: highlighting relevant skills, restructuring experience to match job priorities, optimizing keywords for ATS systems, and creating bullet points that demonstrate alignment with the role. The AI explains all changes so you understand what was modified and why.',
    },
    {
      question: 'Do I need to provide a job URL?',
      answer: 'No, providing a job URL is optional. You can still use ResumeCraft to improve your resume with general instructions like "make my experience more concise" or "emphasize my leadership skills." However, providing a job URL allows our AI to create a more targeted, job-specific resume that better matches what employers are looking for.',
    },
    {
      question: 'Can I make multiple revisions to my resume?',
      answer: 'Yes! You can iterate as many times as you need. After seeing the initial results, you can ask for additional changes like "make it more concise," "emphasize technical skills," or "tailor it for a different role." Each revision builds on your previous resume, allowing you to refine it until it\'s perfect.',
    },
    {
      question: 'How accurate is the resume parsing?',
      answer: 'Our AI-powered parsing system uses advanced natural language processing to extract information from your resume with high accuracy. It identifies sections like work experience, education, skills, and contact information. However, we recommend reviewing the parsed content to ensure everything is correct, especially if your resume has a unique format.',
    },
    {
      question: 'Will my resume pass Applicant Tracking Systems (ATS)?',
      answer: 'Yes, our AI optimizes resumes specifically for ATS compatibility. This includes: using standard section headings, optimizing keywords based on job descriptions, maintaining clean formatting, and ensuring proper structure. The exported PDF maintains an ATS-friendly format while still looking professional.',
    },
    {
      question: 'What if I don\'t like the changes the AI made?',
      answer: 'You have full control over your resume. You can: request revisions with specific instructions, compare the original and revised versions side-by-side, and manually edit the exported PDF if needed. The AI provides explanations for all changes, so you can understand the reasoning and decide what to keep.',
    },
    {
      question: 'Do I need to create an account?',
      answer: 'Yes, you need to sign in with either Google or GitHub to use ResumeCraft. This allows us to save your session and resume submissions so you can access them later. However, your actual resume content is processed locally and never stored on our servers.',
    },
    {
      question: 'How long does it take to optimize a resume?',
      answer: 'The entire process typically takes just a few minutes. Uploading and parsing your resume happens in seconds, and AI optimization usually completes within 1-2 minutes, depending on the complexity of your resume and the job description. You\'ll see results in real-time as the AI processes your request.',
    },
    {
      question: 'Can I use ResumeCraft for multiple resumes?',
      answer: 'Yes, you can create and optimize multiple resumes for different job applications. Each resume submission is independent, so you can tailor different versions of your resume for various roles or industries. Simply upload a new resume or start a new session to begin working on another resume.',
    },
    {
      question: 'What makes ResumeCraft different from other resume builders?',
      answer: 'ResumeCraft stands out in several ways: Privacy-first local processing - your data never leaves your device, AI-powered job-specific tailoring using actual job descriptions, Real-time preview with side-by-side comparison, No templates or forms - just upload and describe what you need, Free to use with no hidden costs, and Built with modern, fast technology for the best user experience.',
    },
    {
      question: 'Is ResumeCraft free to use?',
      answer: 'Yes, ResumeCraft is completely free to use. There are no subscription fees, hidden costs, or premium features. Simply sign in with Google or GitHub and start optimizing your resume.',
    },
    {
      question: 'Can I export my resume in formats other than PDF?',
      answer: 'Currently, ResumeCraft exports resumes as PDF files, which is the standard format for job applications. PDF format ensures your resume looks the same on all devices and is compatible with ATS systems. If you need other formats, you can copy the content from the preview and paste it into your preferred document editor.',
    },
    {
      question: 'What if the AI makes a mistake or changes something incorrectly?',
      answer: 'While our AI is highly accurate, it\'s not perfect. If you notice any errors or unwanted changes, you can: request a revision with specific corrections, review the comparison view to see exactly what changed, and manually edit the exported PDF if needed. The AI always explains its changes, so you can identify and correct any issues quickly.',
    },
  ];

  return (
    <main className="min-h-screen relative w-full overflow-hidden transition-colors duration-300">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/40 via-purple-50/30 to-pink-50/40 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-all duration-500" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-indigo-200/30 via-purple-200/20 to-transparent rounded-full blur-3xl dark:hidden" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-pink-200/30 via-purple-200/20 to-transparent rounded-full blur-3xl dark:hidden" />
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl hidden dark:block" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-pink-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl hidden dark:block" />
      </div>

      <Header />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-50/80 via-purple-50/80 to-pink-50/80 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-pink-500/10 border border-indigo-200/40 dark:border-indigo-500/20 mb-8 backdrop-blur-sm shadow-sm">
              <HelpCircle className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
              <span className="text-xs font-semibold tracking-wide bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent uppercase">
                Common Questions
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 dark:from-white dark:via-gray-50 dark:to-gray-100 bg-clip-text text-transparent">
                Frequently Asked
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              Everything you need to know about ResumeCraft
            </p>
          </div>

          {/* FAQs Card */}
          <div className="mb-16">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/50 dark:border-gray-800/50 rounded-3xl p-8 md:p-10 shadow-2xl">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl px-6 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 dark:text-white hover:no-underline py-6">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 dark:text-gray-400 leading-relaxed pb-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>

          {/* Still Have Questions */}
          <section className="text-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 rounded-3xl p-12 md:p-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                  Still Have Questions?
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                  Can't find the answer you're looking for? Try using ResumeCraft yourself - it's the best way to see how it works!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/how-it-works">
                    <Button
                      variant="outline"
                      className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
                    >
                      Learn How It Works
                    </Button>
                  </Link>
                  <Link href="/">
                    <Button className="group bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white shadow-lg shadow-purple-500/25 font-medium px-8 py-6 text-lg transition-all duration-300 hover:scale-105">
                      Get Started Now
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
