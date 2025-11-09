import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Upload, MessageSquare, Eye, Download, Link as LinkIcon, FileText, Sparkles, CheckCircle2, ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How It Works - ResumeCraft',
  description: 'Learn how ResumeCraft helps you create the perfect resume in minutes',
};

export default function HowItWorksPage() {
  const steps = [
    {
      number: 1,
      icon: Upload,
      title: 'Upload Your Resume',
      description: 'Start by uploading your existing resume in DOCX or PDF format. Our system extracts all your information automatically, so you don\'t need to retype anything.',
      details: [
        'Supports DOCX and PDF formats',
        'Automatic text extraction and parsing',
        'Preserves your original formatting',
      ],
      gradient: 'from-indigo-500/20 via-purple-500/20 to-pink-500/20',
    },
    {
      number: 2,
      icon: LinkIcon,
      title: 'Add Job URL (Optional)',
      description: 'Paste the URL of the job you\'re applying for. Our AI will analyze the job description to understand what the employer is looking for.',
      details: [
        'Automatically extracts job requirements',
        'Identifies key skills and keywords',
        'Understands job-specific preferences',
      ],
      gradient: 'from-purple-500/20 via-pink-500/20 to-indigo-500/20',
    },
    {
      number: 3,
      icon: MessageSquare,
      title: 'Describe What You Need',
      description: 'Tell our AI what changes you want. You can ask to tailor your resume for the job, improve specific sections, or make general improvements.',
      details: [
        'Natural language instructions',
        'Tailor for specific roles or companies',
        'Improve clarity and impact',
      ],
      gradient: 'from-pink-500/20 via-indigo-500/20 to-purple-500/20',
    },
    {
      number: 4,
      icon: Sparkles,
      title: 'AI Processing',
      description: 'Our AI analyzes your resume, the job description (if provided), and your instructions. It then optimizes your resume by highlighting relevant skills, restructuring content, and improving wording.',
      details: [
        'Keyword optimization for ATS systems',
        'Content restructuring for better flow',
        'Skill highlighting based on job requirements',
      ],
      gradient: 'from-indigo-500/20 via-purple-500/20 to-pink-500/20',
    },
    {
      number: 5,
      icon: Eye,
      title: 'Preview & Compare',
      description: 'See your optimized resume instantly. Compare it side-by-side with your original to see exactly what changed. Our AI explains each modification so you understand the improvements.',
      details: [
        'Real-time preview of changes',
        'Side-by-side comparison view',
        'Detailed explanation of modifications',
      ],
      gradient: 'from-purple-500/20 via-pink-500/20 to-indigo-500/20',
    },
    {
      number: 6,
      icon: Download,
      title: 'Export as PDF',
      description: 'Download your professionally formatted resume as a PDF. Your optimized resume is ready to submit to employers immediately.',
      details: [
        'Professional PDF formatting',
        'Ready for job applications',
        'Maintains clean, ATS-friendly structure',
      ],
      gradient: 'from-pink-500/20 via-indigo-500/20 to-purple-500/20',
    },
  ];

  const processSteps = [
    'Extracts and analyzes the job description to identify key requirements, skills, and qualifications',
    'Compares your resume against the job requirements to find alignment opportunities',
    'Restructures your experience to highlight the most relevant skills and achievements',
    'Optimizes keywords to ensure your resume passes Applicant Tracking Systems (ATS)',
    'Creates concise, impactful bullet points that demonstrate your value to employers',
  ];

  const tips = [
    {
      icon: FileText,
      title: 'Provide Context',
      description: 'The more specific you are in your instructions, the better the results. Mention the role, company, or specific skills you want to emphasize.',
    },
    {
      icon: LinkIcon,
      title: 'Use Job URLs',
      description: 'Always include the job URL when available. This allows our AI to tailor your resume specifically to what the employer is seeking.',
    },
    {
      icon: MessageSquare,
      title: 'Iterate and Refine',
      description: 'Don\'t hesitate to ask for multiple revisions. You can request changes like "make it more concise" or "emphasize leadership skills" to fine-tune your resume.',
    },
    {
      icon: Eye,
      title: 'Review Changes',
      description: 'Always review the AI\'s suggestions. While our AI is powerful, you know your experience best. Make sure all changes accurately represent your background.',
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
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-50/80 via-purple-50/80 to-pink-50/80 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-pink-500/10 border border-indigo-200/40 dark:border-indigo-500/20 mb-8 backdrop-blur-sm shadow-sm">
              <Zap className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
              <span className="text-xs font-semibold tracking-wide bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent uppercase">
                Simple Process
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 dark:from-white dark:via-gray-50 dark:to-gray-100 bg-clip-text text-transparent">
                How It Works
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              Transform your resume in minutes with our simple, AI-powered process
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-8 mb-20">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/50 dark:border-gray-800/50 rounded-3xl p-8 md:p-10 shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300">
                    <div className="flex flex-col md:flex-row gap-8">
                      {/* Step Number & Icon */}
                      <div className="flex items-start gap-6 md:w-64 flex-shrink-0">
                        <div className="relative">
                          <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} border border-indigo-500/30 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-10 h-10 text-indigo-500 dark:text-indigo-400" />
                          </div>
                          <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg border-2 border-white dark:border-gray-900">
                            <span className="text-sm font-bold text-white">{step.number}</span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                          {step.title}
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                          {step.description}
                        </p>
                        <ul className="space-y-3">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-indigo-500 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600 dark:text-gray-400">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Process Flow Card */}
          <section className="mb-20">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/50 dark:border-gray-800/50 rounded-3xl p-10 md:p-14 shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    The Complete Process
                  </h2>
                </div>
                <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400 mb-6">
                  <p className="leading-relaxed">
                    ResumeCraft uses advanced AI technology powered by Google's Gemini models to understand both your resume and job requirements. When you provide a job URL, our system:
                  </p>
                </div>
                <ul className="space-y-4 ml-4">
                  {processSteps.map((step, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-bold text-white">{index + 1}</span>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400 leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    All processing happens securely, and your data remains private throughout the entire process.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Tips Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Pro Tips for Best Results
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Get the most out of ResumeCraft with these expert recommendations
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {tips.map((tip, index) => {
                const Icon = tip.icon;
                return (
                  <div
                    key={index}
                    className="group relative"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative bg-white/70 dark:bg-gray-900/40 backdrop-blur-xl border border-white/50 dark:border-gray-800/50 rounded-2xl p-8 shadow-xl shadow-indigo-500/5 hover:shadow-2xl transition-all duration-300 h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 border border-indigo-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {tip.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {tip.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/50 dark:border-gray-800/50 rounded-3xl p-12 md:p-16 shadow-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                  Upload your resume and see the difference AI-powered optimization can make
                </p>
                <Link href="/">
                  <Button className="group bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white shadow-lg shadow-purple-500/25 font-medium px-8 py-6 text-lg transition-all duration-300 hover:scale-105">
                    Start Optimizing Your Resume
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
