
import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory storage for demo purposes (replace with database in production)
const contactSubmissions: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, subject, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Name, email, and message are required' }, { status: 400 });
    }

    if (!email.includes('@')) {
      return NextResponse.json({ ok: false, error: 'Valid email is required' }, { status: 400 });
    }

    // Store the contact submission
    const submission = {
      id: contactSubmissions.length + 1,
      name,
      email,
      company: company || '',
      subject: subject || 'general',
      message,
      timestamp: new Date().toISOString(),
      status: 'new'
    };

    contactSubmissions.push(submission);
    console.log(`New contact submission from ${name} (${email}): ${subject || 'general'}`);

    return NextResponse.json({ 
      ok: true, 
      message: 'Thank you for your message! We\'ll get back to you within 24 hours.',
      id: submission.id
    });

  } catch (error: any) {
    console.error('Contact submission error:', error);
    
    return NextResponse.json({ 
      ok: false, 
      error: 'Failed to send message. Please try again.' 
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ 
    ok: true, 
    message: 'Contact API is running',
    totalSubmissions: contactSubmissions.length
  });
}
