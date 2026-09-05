const HOLDING_HOST = "tmk.oniyore.com";

export function GET(request: Request) {
  const raw = request.headers.get("host") ?? HOLDING_HOST;
  const host = (raw.split(":")[0] || HOLDING_HOST).toLowerCase();
  return Response.json({
    ok: true,
    site: "tmk-limited",
    host,
  });
}
