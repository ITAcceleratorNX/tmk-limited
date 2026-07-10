import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg px-6 text-center">
      <div className="gold-line mx-auto mb-8" />
      <p className="text-8xl font-semibold text-gold/30">404</p>
      <h1 className="mt-4 text-3xl font-semibold text-text-heading">
        Страница не найдена
      </h1>
      <p className="mt-4 max-w-md text-sm text-text-muted">
        Запрашиваемая страница не существует или была перемещена.
      </p>
      <Link href="/" className="btn-primary mt-10">
        На главную
      </Link>
    </div>
  );
}
