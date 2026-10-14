const hits = new Map<string, { count: number; resetAt: number }>();

const WINDOW_MS = 60_000;
const MAX_REQUESTS = process.env.NODE_ENV === "development" ? 200 : 20;

export function rateLimit(ip: string): boolean {
  // Local Next often has no real IP → all clients share "unknown".
  // Don't block legitimate form testing in development.
  if (process.env.NODE_ENV === "development" && ip === "unknown") {
    return true;
  }

  const now = Date.now();
  const entry = hits.get(ip);

  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  if (entry.count >= MAX_REQUESTS) return false;

  entry.count += 1;
  return true;
}

export function getClientIp(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}
