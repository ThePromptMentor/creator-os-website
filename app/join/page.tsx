'use client';

import React from 'react';

export default function JoinPage() {
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [source, setSource] = React.useState('website');
  const [message, setMessage] = React.useState<string | null>(null);
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'done'>('idle');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    setMessage(null);
    try {
      const res = await fetch('/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, source }),
      });
      const data = await res.json();
      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || 'Failed to join');
      }
      setMessage('Thanks! We’ll be in touch shortly.');
      setStatus('done');
      setEmail('');
      setName('');
    } catch (err: any) {
      setMessage(err.message || 'Something went wrong.');
      setStatus('idle');
    }
  }

  return (
    <main className="p-8 max-w-lg mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Join the waitlist</h1>
      <form onSubmit={onSubmit} className="space-y-3">
        <input
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
        <input
          type="text"
          placeholder="Your name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
        <input
          type="hidden"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="bg-black text-white px-4 py-2 rounded disabled:opacity-60"
        >
          {status === 'submitting' ? 'Submitting...' : 'Join'}
        </button>
      </form>
      {message && <p style={{ marginTop: 8, opacity: 0.9 }}>{message}</p>}
    </main>
  );
}
