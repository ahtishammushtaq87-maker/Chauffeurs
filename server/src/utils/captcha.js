import crypto from "node:crypto";

// Self-hosted "I'm not a robot" verification — no external service or API key.
// A short-lived, HMAC-signed math challenge is issued by GET /api/captcha/challenge
// and verified here when the form it protects is actually submitted, so the
// check can't be bypassed by calling the API directly and skipping the widget.
const SECRET = `${process.env.JWT_SECRET}:captcha`;
const TTL_MS = 10 * 60 * 1000; // 10 minutes

function sign(payload) {
  return crypto.createHmac("sha256", SECRET).update(payload).digest("hex");
}

export function createChallenge() {
  const a = Math.floor(Math.random() * 8) + 1; // 1-8
  const b = Math.floor(Math.random() * 8) + 1; // 1-8
  const answer = String(a + b);
  const exp = Date.now() + TTL_MS;
  const payload = `${answer}.${exp}`;
  const token = Buffer.from(`${payload}.${sign(payload)}`).toString("base64url");
  return { question: `${a} + ${b}`, token };
}

export function verifyChallenge(token, answer) {
  if (!token || answer === undefined || answer === null || String(answer).trim() === "") return false;

  let decoded;
  try {
    decoded = Buffer.from(String(token), "base64url").toString("utf8");
  } catch {
    return false;
  }

  const parts = decoded.split(".");
  if (parts.length !== 3) return false;
  const [expectedAnswer, exp, signature] = parts;

  const expectedSignature = sign(`${expectedAnswer}.${exp}`);
  const sigBuf = Buffer.from(signature, "hex");
  const expectedSigBuf = Buffer.from(expectedSignature, "hex");
  if (sigBuf.length !== expectedSigBuf.length || !crypto.timingSafeEqual(sigBuf, expectedSigBuf)) {
    return false;
  }

  if (Date.now() > Number(exp)) return false;
  return String(answer).trim() === expectedAnswer;
}
