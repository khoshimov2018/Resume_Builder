import { NextRequest, NextResponse } from 'next/server';
import { parseOfficeAsync, type OfficeParserConfig } from 'officeparser';
import { structuredResume } from '@/agents/structured-resume';
const SUPPORTED_MIME_TYPES = [
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // DOCX
  'application/pdf', // PDF
];

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Check file type
    if (!SUPPORTED_MIME_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: 'Please upload a DOCX or PDF file' },
        { status: 400 }
      );
    }

    // Convert File to ArrayBuffer
    const arrayBuffer = await file.arrayBuffer();

    // Configure officeparser
    const config: OfficeParserConfig = {
      outputErrorToConsole: false,
      newlineDelimiter: '\n',
      ignoreNotes: false,
      putNotesAtLast: false,
    };

    // Note: PDF extraction might not work in browser bundles according to officeparser docs
    let content: string;
    try {
      content = await parseOfficeAsync(Buffer.from(arrayBuffer), config);
      if (!content || content.trim().length === 0) {
        return NextResponse.json(
          { error: 'Failed to extract text from document. The file might be empty or corrupted.' },
          { status: 400 }
        );
      }
    } catch (parseError) {
      console.error('Office parser error:', parseError);
      return NextResponse.json(
        { 
          error: `Failed to parse document: ${parseError instanceof Error ? parseError.message : 'Unknown error'}` 
        },
        { status: 400 }
      );
    }

    let result;
    try {
      result = await structuredResume(content);
    } catch (aiError) {
      console.error('AI parsing error:', aiError);
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
          error: `Failed to process resume with AI: ${errorMessage}` 
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ result: result.object });
  } catch (error) {
    console.error('Document parsing error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: `Failed to parse document: ${errorMessage}` },
      { status: 500 }
    );
  }
}
