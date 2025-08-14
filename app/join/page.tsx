"use client";
import { useState } from "react";

export default function JoinPage() {
const [email, setEmail] = useState("");
const [name, setName] = useState("");
const [status, setStatus] = useState("idle");
const [message, setMessage] = useState("");

async function onSubmit(e) {
e.preventDefault();
setStatus("submitting");
setMessage("");
try {
const res = await fetch("/api/join", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ email, name, source: "website" })
});
const data = await res.json();
if (!res.ok) throw new Error(data.error || "Failed to join");
setStatus("done");
setMessage("Thanks! You're on the list.");
setEmail("");
setName("");
} catch (err) {
setStatus("error");
setMessage(err.message || "Something went wrong.");
}
}

return (
<main style={{ padding: "64px 24px", maxWidth: 640, margin: "0 auto" }}>
<h1 style={{ fontSize: 36, marginBottom: 16 }}>Join the Founders Circle
<p style={{ opacity: 0.9, marginBottom: 24 }}>
Early access, updates, and an invite to the presale.

<form onSubmit={onSubmit} style={{ display: "grid", gap: 12 }}>
<input
type="text"
placeholder="Your name (optional)"
value={name}
onChange={(e) => setName(e.target.value)}
style={{ padding: 12, borderRadius: 8, border: "1px solid #333", background: "#111", color: "#fff" }}
/>
<input
type="email"
placeholder="Email"
required
value={email}
onChange={(e) => setEmail(e.target.value)}
style={{ padding: 12, borderRadius: 8, border: "1px solid #333", background: "#111", color: "#fff" }}
/>
<button
type="submit"
disabled={status === "submitting"}
style={{ padding: "12px 20px", borderRadius: 8, background: "#fff", color: "#111", fontWeight: 600 }}
>
{status === "submitting" ? "Submitting..." : "Join"}

{message && <p style={{ marginTop: 8, opacity: 0.9 }}>{message}}


);
}