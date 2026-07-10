# TMK Limited

Production-ready сайт TMK Limited на Next.js.

## Быстрый старт

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Production checklist

1. Скопируйте `.env.example` → `.env.local`
2. Укажите `NEXT_PUBLIC_SITE_URL` — ваш домен
3. Настройте SMTP для формы заявки
4. (Опционально) `NEXT_PUBLIC_GA_ID` для Google Analytics
5. `npm run build && npm start`

## Форма заявки

- Отправка на `tokpanov.k@tmk-limited.com`
- Honeypot + rate limit (5 req/min/IP)
- Маска телефона +7 (KZ)
- Без SMTP в dev — лог в консоль

## Страницы

| URL | Описание |
|-----|----------|
| `/` | Главный лендинг RU/EN |
| `/projects` | Список проектов |
| `/projects/kazagris` | KazAgris Ventures |
| `/projects/horeca` | Table 61 Catering |
| `/policy` | Политика конфиденциальности |

## SEO

- `sitemap.xml`, `robots.txt`
- Open Graph image (`/opengraph-image`)
- JSON-LD Organization schema
- Canonical URL из `NEXT_PUBLIC_SITE_URL`

## Медиа

Локальные файлы в `public/images/tmk/`:
- `hero/slides/` — слайды главного экрана
- `directions/` — фото направлений
- `projects/` — фото проектов
- `partners/` — логотипы партнёров

## Стек

Next.js 16 · TypeScript · Tailwind CSS 4 · Framer Motion · Nodemailer
