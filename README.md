# TMK Limited

Сайт TMK Limited на Next.js (клон tmk-limited.com).

## Быстрый старт

```bash
npm install
cp .env.example .env.local
npm run dev
```

Языки: **RU** (`/`, `/ru`), **EN** (`/en`), **KK** (`/kk`). Суффиксы работают и для `/about`, `/projects`, `/contacts` и публичных URL проектов.

## Production checklist

1. Скопируйте `.env.example` → `.env.local`
2. Укажите `NEXT_PUBLIC_SITE_URL`
3. Настройте SMTP для формы заявки
4. (Опционально) `NEXT_PUBLIC_GA_ID`
5. `npm run build && npm start`

## Форма заявки

- Письмо только на `CONTACT_TO` (по умолчанию `tokpanov.k@tmk-limited.com`) — посетителю копия не уходит
- Клиент видит только `{ ok: true }` / общую ошибку — без деталей доставки
- Honeypot + rate limit (5 req/min/IP)
- Маска телефона +7 (KZ)
- Без SMTP в development — заявка в консоли сервера; в production без SMTP — ошибка

## Страницы

| URL | Описание |
|-----|----------|
| `/`, `/ru`, `/en`, `/kk` | Лендинг |
| `/about`, `/about/ru\|en\|kk` | О компании |
| `/projects`, `/projects/ru\|en\|kk` | Список проектов |
| `/projects/[slug]` | Карточки проектов (streamline, valar, …) |
| `/projects/kazagris`, `/projects/horeca` | KazAgris / Table 61 (полный i18n) |
| `/contacts`, `/contacts/ru\|en\|kk` | Контакты + карта |
| `/policy` | Политика конфиденциальности |

## SEO

- `sitemap.xml`, `robots.txt`
- Open Graph (`/opengraph-image`)
- JSON-LD Organization
- Canonical из `NEXT_PUBLIC_SITE_URL`

## Стек

Next.js 16 · TypeScript · Tailwind CSS 4 · Framer Motion · Nodemailer
