'use client';

import * as React from 'react';
import { X, Loader2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/header';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGoogleSignIn?: () => void;
  onGitHubSignIn?: () => void;
  isLoading?: boolean;
}

export function AuthModal({
  isOpen,
  onClose,
  onGoogleSignIn,
  onGitHubSignIn,
  isLoading = false,
}: AuthModalProps) {
  const [isGoogleLoading, setIsGoogleLoading] = React.useState(false);
  const [isGitHubLoading, setIsGitHubLoading] = React.useState(false);

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    try {
      if (onGoogleSignIn) {
        await onGoogleSignIn();
      } else {
        // Redirect to Auth.js Google sign-in
        const callbackUrl = window.location.origin + '/workspace';
        window.location.href = `/api/auth/signin/google?callbackUrl=${encodeURIComponent(callbackUrl)}`;
      }
    } catch (error) {
      console.error('Google sign-in error:', error);
      setIsGoogleLoading(false);
    }
  };

  const handleGitHubSignIn = async () => {
    setIsGitHubLoading(true);
    try {
      if (onGitHubSignIn) {
        await onGitHubSignIn();
      } else {
        // Redirect to Auth.js GitHub sign-in
        const callbackUrl = window.location.origin + '/workspace';
        window.location.href = `/api/auth/signin/github?callbackUrl=${encodeURIComponent(callbackUrl)}`;
      }
    } catch (error) {
      console.error('GitHub sign-in error:', error);
      setIsGitHubLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl border-gray-200/50 dark:border-gray-800/50 shadow-2xl transition-all duration-300 ease-in-out">
        <DialogHeader className="space-y-6">
          <div className="flex items-center justify-center mb-2">
            <Logo size="large" iconOnly />
          </div>
          <DialogTitle className="text-3xl font-bold text-gray-900 dark:text-white text-center tracking-tight transition-colors duration-300">
            Welcome to ResumeCraft
          </DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-400 text-center text-base font-light transition-colors duration-300">
            Sign in to start crafting your perfect resume
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-8">
          {/* Google Sign In Button */}
          <Button
            type="button"
            variant="outline"
            className="w-full h-14 bg-gray-50/80 dark:bg-gray-800/40 hover:bg-gray-100/80 dark:hover:bg-gray-800/60 border-gray-200/50 dark:border-gray-700/50 hover:border-gray-300/50 dark:hover:border-gray-600/50 text-gray-900 dark:text-white justify-start gap-4 transition-all duration-300 ease-in-out group backdrop-blur-sm font-medium hover:scale-[1.02] active:scale-[0.98]"
            onClick={handleGoogleSignIn}
            disabled={isGoogleLoading || isGitHubLoading || isLoading}
          >
            {isGoogleLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
            )}
            <span className="flex-1 text-left transition-colors duration-300">
              Continue with Google
            </span>
          </Button>

          {/* GitHub Sign In Button */}
          <Button
            type="button"
            variant="outline"
            className="w-full h-14 bg-gray-50/80 dark:bg-gray-800/40 hover:bg-gray-100/80 dark:hover:bg-gray-800/60 border-gray-200/50 dark:border-gray-700/50 hover:border-gray-300/50 dark:hover:border-gray-600/50 text-gray-900 dark:text-white justify-start gap-4 transition-all duration-300 ease-in-out group backdrop-blur-sm font-medium hover:scale-[1.02] active:scale-[0.98]"
            onClick={handleGitHubSignIn}
            disabled={isGoogleLoading || isGitHubLoading || isLoading}
          >
            {isGitHubLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            <span className="flex-1 text-left transition-colors duration-300">
              Continue with GitHub
            </span>
          </Button>
        </div>

        {/* Terms and Privacy */}
        <p className="text-xs text-gray-500 dark:text-gray-500 text-center mt-8 transition-colors duration-300">
          By continuing, you agree to the{' '}
          <a
            href="/terms"
            className="underline hover:text-gray-700 dark:hover:text-gray-400 transition-colors duration-300"
          >
            Terms of Service
          </a>{' '}
          and{' '}
          <a
            href="/privacy"
            className="underline hover:text-gray-700 dark:hover:text-gray-400 transition-colors duration-300"
          >
            Privacy Policy
          </a>
          .
        </p>
      </DialogContent>
    </Dialog>
  );
}

