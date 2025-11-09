'use client';

import * as React from 'react';
import { useState, useRef } from 'react';
import {
  Link as LinkIcon,
  Paperclip,
  ArrowUp,
  Loader2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

export interface SubmissionData {
  jobUrl: string;
  message: string;
  file: File | null;
}

interface HomeFormProps {
  onSubmit: (data: SubmissionData) => void;
  isSubmitting?: boolean;
}

const SUPPORTED_MIME_TYPES = {
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
    'DOCX',
  'application/pdf': 'PDF',
};

const ACCEPT_STRING =
  '.docx,.pdf,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document';

export function HomeForm({ onSubmit, isSubmitting = false }: HomeFormProps) {
  const [jobUrl, setJobUrl] = useState('');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) return;

    // Check file type
    if (!Object.keys(SUPPORTED_MIME_TYPES).includes(selectedFile.type)) {
      setError('Please upload a DOCX or PDF file');
      return;
    }

    setFile(selectedFile);
    setError(null);
  };

  const handleAttachClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = () => {
    // Validate that at least message or file is provided
    if (!message.trim() && !file) {
      setError('Please provide a message or attach a resume file');
      return;
    }

    setError(null);
    onSubmit({
      jobUrl: jobUrl.trim(),
      message: message.trim(),
      file,
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const removeFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-50/80 via-purple-50/80 to-pink-50/80 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-pink-500/10 border border-indigo-200/40 dark:border-indigo-500/20 mb-8 backdrop-blur-sm shadow-sm shadow-indigo-500/10 transition-all duration-300">
          <span className="text-xs font-semibold tracking-wide bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent uppercase transition-all duration-300">
            ✨ AI-Powered Resume Crafting
          </span>
        </div>
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tight">
          <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 dark:from-white dark:via-gray-50 dark:to-gray-100 bg-clip-text text-transparent transition-all duration-300">
            Craft Your Perfect
          </span>
          <br />
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent transition-all duration-300">
            Resume
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed font-light transition-colors duration-300">
          Transform your resume into a masterpiece tailored for any role. Simply upload, describe, and let AI craft perfection.
        </p>
      </div>

      {/* Form */}
      <div className="space-y-4">
        {/* Job URL Input */}
        <div className="relative flex items-center group">
          <div className="flex items-center w-full gap-3 bg-white/70 dark:bg-gray-900/40 backdrop-blur-xl border border-white/50 dark:border-gray-800/50 rounded-2xl px-5 py-4 transition-all group-hover:border-indigo-200/60 dark:group-hover:border-gray-700/50 group-focus-within:border-indigo-400/60 dark:group-focus-within:border-indigo-500/50 group-focus-within:ring-2 group-focus-within:ring-indigo-500/20 shadow-xl shadow-indigo-500/5 dark:shadow-lg">
            <LinkIcon className="w-5 h-5 text-gray-500 dark:text-gray-500 group-focus-within:text-indigo-500 dark:group-focus-within:text-indigo-400 transition-colors flex-shrink-0" />
            <Input
              value={jobUrl}
              onChange={(e) => setJobUrl(e.target.value)}
              placeholder="Paste job URL you're applying for (optional)"
              className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-0 text-gray-900 dark:text-gray-200 placeholder:text-gray-500 dark:placeholder:text-gray-500 text-base font-light transition-colors duration-300"
              disabled={isSubmitting}
            />
          </div>
        </div>

        {/* Main Input Area */}
        <div className="relative group">
          <div className="flex items-start gap-4 bg-white/70 dark:bg-gray-900/40 backdrop-blur-xl border border-white/50 dark:border-gray-800/50 rounded-2xl p-5 transition-all group-hover:border-indigo-200/60 dark:group-hover:border-gray-700/50 group-focus-within:border-indigo-400/60 dark:group-focus-within:border-indigo-500/50 group-focus-within:ring-2 group-focus-within:ring-indigo-500/20 shadow-xl shadow-indigo-500/5 dark:shadow-lg">
            {/* Attach Button */}
            <button
              type="button"
              onClick={handleAttachClick}
              disabled={isSubmitting}
              className="flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed group/attach"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 dark:from-indigo-500/20 dark:via-purple-500/20 dark:to-pink-500/20 border border-indigo-500/30 dark:border-indigo-500/30 flex items-center justify-center group-hover/attach:from-indigo-500/30 group-hover/attach:via-purple-500/30 group-hover/attach:to-pink-500/30 transition-all">
                <Paperclip className="w-4 h-4" />
              </div>
              <span className="hidden sm:inline font-medium">Attach</span>
            </button>

            {/* Textarea */}
            <div className="flex-1 relative">
              <Textarea
                ref={textareaRef}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Describe what you need... e.g., 'Tailor my resume for a Senior Software Engineer role at Google'"
                className="min-h-[160px] max-h-[340px] pr-16 resize-none border-0 bg-transparent text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-500 text-base focus-visible:ring-0 focus-visible:ring-offset-0 leading-relaxed font-light transition-colors duration-300"
                disabled={isSubmitting}
              />

              {/* Submit Button */}
              <div className="absolute right-4 bottom-4">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={handleSubmit}
                  disabled={isSubmitting || (!message.trim() && !file)}
                  className="rounded-xl w-12 h-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white shadow-lg shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none transition-all duration-300"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <ArrowUp className="w-5 h-5" />
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* File Input (Hidden) */}
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            accept={ACCEPT_STRING}
            onChange={handleFileSelect}
            disabled={isSubmitting}
          />

          {/* File Preview */}
          {file && (
            <div className="mt-4 flex items-center gap-3 px-5 py-3.5 bg-gradient-to-r from-indigo-50/80 via-purple-50/80 to-pink-50/80 dark:from-indigo-500/10 dark:via-purple-500/10 dark:to-pink-500/10 border border-indigo-200/40 dark:border-indigo-500/20 rounded-2xl backdrop-blur-sm shadow-sm shadow-indigo-500/10 transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 dark:from-indigo-500/20 dark:via-purple-500/20 dark:to-pink-500/20 border border-indigo-500/30 dark:border-indigo-500/30 flex items-center justify-center">
                <Paperclip className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
              </div>
              <span className="text-sm text-gray-800 dark:text-gray-200 flex-1 truncate font-medium transition-colors duration-300">
                {file.name}
              </span>
              <button
                type="button"
                onClick={removeFile}
                className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 text-sm font-medium transition-colors duration-300 px-3 py-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10"
                disabled={isSubmitting}
              >
                Remove
              </button>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mt-4 px-5 py-3.5 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-2xl backdrop-blur-sm transition-all duration-300">
              <p className="text-sm text-red-600 dark:text-red-400 font-medium transition-colors duration-300">{error}</p>
            </div>
          )}
        </div>

        {/* Helper Text */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
          <span className="text-xs text-gray-500 dark:text-gray-500 font-light transition-colors duration-300">
            Press <kbd className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 rounded-lg text-gray-700 dark:text-gray-300 font-mono text-xs transition-colors duration-300">Cmd/Ctrl + Enter</kbd> to submit
          </span>
          <span className="hidden sm:inline text-gray-400 dark:text-gray-600">•</span>
          <span className="text-xs text-gray-500 dark:text-gray-500 font-light transition-colors duration-300">
            Supports DOCX and PDF files
          </span>
        </div>
      </div>
    </div>
  );
}

