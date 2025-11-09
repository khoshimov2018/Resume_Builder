import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { FileText, Shield, Zap, Sparkles, Lock, Heart, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About - ResumeCraft',
  description: 'Learn about ResumeCraft - AI-powered resume builder that helps you craft the perfect resume',
};

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your resume data stays on your device. We process everything locally and never store your personal information or resume content on our servers. Your privacy is our top priority.',
      gradient: 'from-indigo-500/20 via-purple-500/20 to-pink-500/20',
      borderGradient: 'from-indigo-500/30 via-purple-500/30 to-pink-500/30',
    },
    {
      icon: Zap,
      title: 'AI-Powered Intelligence',
      description: 'Leveraging advanced AI technology to analyze job descriptions and tailor your resume accordingly. Get personalized suggestions that highlight your most relevant skills and experiences.',
      gradient: 'from-purple-500/20 via-pink-500/20 to-indigo-500/20',
      borderGradient: 'from-purple-500/30 via-pink-500/30 to-indigo-500/30',
    },
    {
      icon: Sparkles,
      title: 'Easy to Use',
      description: 'No complicated forms or lengthy questionnaires. Simply upload your resume, describe what you need, and let our AI do the work. Get professional results in minutes, not hours.',
      gradient: 'from-pink-500/20 via-indigo-500/20 to-purple-500/20',
      borderGradient: 'from-pink-500/30 via-indigo-500/30 to-purple-500/30',
    },
    {
      icon: FileText,
      title: 'Professional Results',
      description: 'Export your optimized resume as a beautifully formatted PDF ready for applications. Compare versions side-by-side to see exactly what changed and why.',
      gradient: 'from-indigo-500/20 via-pink-500/20 to-purple-500/20',
      borderGradient: 'from-indigo-500/30 via-pink-500/30 to-purple-500/30',
    },
  ];

  const differentiators = [
    {
      icon: Lock,
      title: 'Local-First Architecture',
      description: 'Unlike traditional resume builders that store your data in the cloud, ResumeCraft processes everything locally on your device. Your resume never leaves your browser until you choose to export it.',
    },
    {
      icon: Sparkles,
      title: 'Job-Specific Tailoring',
      description: 'Simply paste a job URL, and our AI analyzes the job description to tailor your resume accordingly. We highlight relevant skills, optimize keywords, and restructure content to match what employers are looking for.',
    },
    {
      icon: Heart,
      title: 'Built for Everyone',
      description: 'Whether you\'re a recent graduate, career changer, or seasoned professional, ResumeCraft adapts to your needs. Our AI understands context and helps you present your experience in the best possible light.',
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
              <span className="text-xs font-semibold tracking-wide bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent uppercase">
                About ResumeCraft
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 dark:from-white dark:via-gray-50 dark:to-gray-100 bg-clip-text text-transparent">
                Empowering Job Seekers
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                With AI-Powered Tools
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              We believe everyone deserves a resume that truly represents their skills and potential. Built with privacy, powered by AI.
            </p>
          </div>

          {/* Mission Card */}
          <div className="mb-20">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/50 dark:border-gray-800/50 rounded-3xl p-10 md:p-14 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Our Mission
                  </h2>
                </div>
                <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    At ResumeCraft, we believe that everyone deserves a resume that truly represents their skills and potential. We've built an AI-powered platform that helps job seekers create tailored, professional resumes without compromising their privacy or data security.
                  </p>
                  <p>
                    Our mission is to democratize access to professional resume optimization tools, making it easy for anyone—regardless of their background or experience—to craft resumes that stand out to employers and land their dream jobs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values Grid */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                What We Stand For
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Four core principles guide everything we do
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="group relative"
                  >
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${value.borderGradient} rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <div className="relative bg-white/70 dark:bg-gray-900/40 backdrop-blur-xl border border-white/50 dark:border-gray-800/50 rounded-2xl p-8 h-full shadow-xl shadow-indigo-500/5 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.gradient} border border-indigo-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-indigo-500 dark:text-indigo-400" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Why ResumeCraft Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Why ResumeCraft?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                What makes us different from traditional resume builders
              </p>
            </div>
            <div className="space-y-6">
              {differentiators.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="group relative"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative bg-white/70 dark:bg-gray-900/40 backdrop-blur-xl border border-white/50 dark:border-gray-800/50 rounded-2xl p-8 shadow-xl shadow-indigo-500/5 hover:shadow-2xl transition-all duration-300">
                      <div className="flex items-start gap-6">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                            {item.title}
                          </h3>
                          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
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
              <div className="relative bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 rounded-3xl p-12 md:p-16">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <CheckCircle2 className="w-8 h-8 text-indigo-500 dark:text-indigo-400" />
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    Ready to Transform Your Resume?
                  </h2>
                </div>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                  Join thousands of job seekers who have successfully optimized their resumes with ResumeCraft
                </p>
                <Link href="/">
                  <Button className="group bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white shadow-lg shadow-purple-500/25 font-medium px-8 py-6 text-lg transition-all duration-300 hover:scale-105">
                    Get Started Free
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
