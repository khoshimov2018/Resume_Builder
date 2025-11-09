'use client';

import { useState } from 'react';
import { HomeForm, type SubmissionData } from '@/components/home-form';
import { AuthModal } from '@/components/auth/auth-modal';
import { Header } from '@/components/header';

// Utility function to convert file to base64 for storage
async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
}

// Store submission data in sessionStorage
async function storeSubmission(data: SubmissionData) {
  const fileData = data.file ? await fileToBase64(data.file) : null;
  
  const submission = {
    jobUrl: data.jobUrl,
    message: data.message,
    fileData,
    fileName: data.file?.name,
    fileType: data.file?.type,
  };
  
  sessionStorage.setItem('pendingResumeSubmission', JSON.stringify(submission));
}

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleFormSubmit = async (data: SubmissionData) => {
    try {
      setIsSubmitting(true);
      
      // Store submission data in sessionStorage for auth flow
      await storeSubmission(data);
      
      // Show auth modal
      setShowAuthModal(true);
      
    } catch (error) {
      console.error('Error storing submission:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    const callbackUrl = `${window.location.origin}/workspace`;
    window.location.href = `/api/auth/signin/google?callbackUrl=${encodeURIComponent(callbackUrl)}`;
  };

  const handleGitHubSignIn = async () => {
    const callbackUrl = `${window.location.origin}/workspace`;
    window.location.href = `/api/auth/signin/github?callbackUrl=${encodeURIComponent(callbackUrl)}`;
  };

  const handleCloseAuthModal = () => {
    setShowAuthModal(false);
  };

  const handleLoginClick = () => {
    setShowAuthModal(true);
  };

  const handleGetStartedClick = () => {
    setShowAuthModal(true);
  };

  return (
    <main className="min-h-screen relative w-full overflow-hidden transition-colors duration-300">
      {/* Elegant Background with Gradients and Shapes */}
      <div className="fixed inset-0 -z-10">
        {/* Base Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/40 via-purple-50/30 to-pink-50/40 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-all duration-500" />
        
        {/* Decorative Gradient Blobs - Light Mode */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-indigo-200/30 via-purple-200/20 to-transparent rounded-full blur-3xl dark:hidden" style={{ animation: 'pulse-slow 8s ease-in-out infinite' }} />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-pink-200/30 via-purple-200/20 to-transparent rounded-full blur-3xl dark:hidden" style={{ animation: 'pulse-slow 8s ease-in-out infinite', animationDelay: '2s' }} />
        <div className="absolute bottom-0 left-1/3 w-[700px] h-[700px] bg-gradient-to-tr from-purple-200/25 via-indigo-200/20 to-transparent rounded-full blur-3xl dark:hidden" style={{ animation: 'pulse-slow 8s ease-in-out infinite', animationDelay: '4s' }} />
        
        {/* Subtle Grid Pattern - Light Mode */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03] dark:opacity-0 transition-opacity duration-500" />
        
        {/* Dark Mode Gradient Orbs */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl hidden dark:block" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-pink-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl hidden dark:block" />
      </div>

      <Header 
        onLoginClick={handleLoginClick}
        onGetStartedClick={handleGetStartedClick}
      />
      
      <div className="flex items-center justify-center min-h-screen py-12 pt-32 relative z-10">
        <HomeForm onSubmit={handleFormSubmit} isSubmitting={isSubmitting} />
      </div>
      
      <AuthModal
        isOpen={showAuthModal}
        onClose={handleCloseAuthModal}
        onGoogleSignIn={handleGoogleSignIn}
        onGitHubSignIn={handleGitHubSignIn}
        isLoading={isSubmitting}
      />
    </main>
  );
}
