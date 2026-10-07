/** Neutralize Discord mention abuse in user-supplied text. */
export function sanitizeDiscordMentions(text: string): string {
  return text
    .replace(/@everyone/gi, "@\u200beveryone")
    .replace(/@here/gi, "@\u200bhere")
    .replace(/<@!?\d+>/g, "")
    .replace(/<@&\d+>/g, "")
    .replace(/<#\d+>/g, "");
}

export async function postDiscordWebhook(
  webhookUrl: string,
  content: string,
): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: sanitizeDiscordMentions(content) }),
    });
    if (!res.ok) {
      return { ok: false, error: "Couldn’t reach Discord. Try again in a moment." };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "Couldn’t reach Discord. Check your connection and try again." };
  }
}
