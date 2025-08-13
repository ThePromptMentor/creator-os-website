export default function Home() {
  return (
    <main style={{ padding: "64px 24px", maxWidth: 960, margin: "0 auto" }}>
      <h1 style={{ fontSize: 48, marginBottom: 16 }}>CreatorOS</h1>
      <p style={{ fontSize: 20, opacity: 0.9, marginBottom: 24 }}>
        Unify your creator stack: Stripe, Meta, TikTok — one place to launch and grow.
      </p>
      <a
        href="/join"
        style={{
          display: "inline-block",
          background: "#111",
          color: "#fff",
          padding: "12px 20px",
          borderRadius: 8,
          textDecoration: "none",
        }}
      >
        Join the Founder’s Circle
      </a>

      <section style={{ marginTop: 48 }}>
        <h2 style={{ fontSize: 28, marginBottom: 12 }}>Why CreatorOS</h2>
        <ul style={{ lineHeight: 1.8 }}>
          <li>Connect Stripe, Meta, TikTok in minutes, not weeks.</li>
          <li>Track growth with a unified dashboard.</li>
          <li>Built for creators starting out and scaling up.</li>
        </ul>
      </section>
    </main>
  );
}