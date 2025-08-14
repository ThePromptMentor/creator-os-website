
import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory storage for demo purposes (replace with database in production)
const waitlistSignups = new Set<string>();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, source } = body;

    // Validate input
    if (!email || !email.includes('@')) {
      return NextResponse.json({ ok: false, error: 'Valid email is required' }, { status: 400 });
    }

    // Check if email already exists
    if (waitlistSignups.has(email)) {
      return NextResponse.json({ 
        ok: true, 
        message: 'You are already on our waitlist!' 
      });
    }

    // Add to waitlist
    waitlistSignups.add(email);
    console.log(`New waitlist signup: ${email} (${name || 'No name provided'}) from ${source || 'website'}`);

    return NextResponse.json({ 
      ok: true, 
      message: 'Successfully joined the waitlist! We\'ll be in touch soon.',
      total: waitlistSignups.size
    });

  } catch (error: any) {
    console.error('Waitlist signup error:', error);
    
    return NextResponse.json({ 
      ok: false, 
      error: 'Failed to join waitlist. Please try again.' 
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ 
    ok: true, 
    message: 'Join waitlist API is running',
    totalSignups: waitlistSignups.size
  });
}
