import { NextRequest, NextResponse } from 'next/server';
import { revampResume } from '@/agents/structured-resume';

export const maxDuration = 60;

export async function POST(request: NextRequest) {
  try {
    const { resume, message, jobUrl } = await request.json();

    // Validate required fields
    if (!resume) {
      return NextResponse.json(
        { error: 'Resume data is required' },
        { status: 400 }
      );
    }

    if (!message || message.trim().length === 0) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    let result;
    try {
      // Use the jobUrl directly from the request body
      result = await revampResume(resume, message, jobUrl || '');
    } catch (aiError) {
      console.error('AI revamp error:', aiError);
      const errorMessage = aiError instanceof Error ? aiError.message : 'Unknown error';
      
      // Check if it's an API key error
      if (errorMessage.includes('API key') || errorMessage.includes('GOOGLE_GENERATIVE_AI_API_KEY')) {
        return NextResponse.json(
          { 
            error: 'Google AI API key is not configured. Please set GOOGLE_GENERATIVE_AI_API_KEY environment variable.' 
          },
          { status: 500 }
        );
      }
      
      return NextResponse.json(
        { 
          error: `Failed to revamp resume: ${errorMessage}` 
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      result: result.object.resume,
      message: result.object.message,
    });
  } catch (error) {
    console.error('Revamp API error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: `Failed to revamp resume: ${errorMessage}` },
      { status: 500 }
    );
  }
}
