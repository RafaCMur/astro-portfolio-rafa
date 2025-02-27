# Indroduction

This is a project developed with Astro, a new static site generator. The project implements SSR, which is a feature that allows Astro to make API calls work. It also uses **nodemailer** and **supabase** for the contact form. The project is deployed in **Vercel**. This project uses **bun** as a package manager.

## 📷 Preview

🔗 **https://astro-portfolio-rafa.vercel.app/**

## 🛠️ Tech stack

- 🖼️ **Astro** - Static HTML & CSS framework
- 📦 **Bun** - Package manager
- 📨 **Nodemailer** - Email sender
- 🌐 **Supabase** - Database
- 🚀 **Vercel** - Deployment

## Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Install dependencies                             |
| `bun run dev`             | Start local dev server at `localhost:4321`       |
| `bun run build`           | Build your production site to `./dist/`          |
| `bun run preview`         | Preview your build locally, before deploying     |
| `bun run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun run astro -- --help` | Get help using the Astro CLI                     |

## Contact

Feel free to contact me at **rafacabanillasm@gmail.com**.

## Good practices

- Responsive design
- Works on **Mobile** and **Desktop**
- Use of **Flexbox**
- Intuitive design, UX/UI
- Intuitive styling, readable code
- Use of versioning, branches, Pull Requests, releases and automatic deployment
- Consts file
- mini-tailwind.css
- .env file
- Global styles only when needed
- Use of Astro for SSR
- Use of Astro Icon library for SVG icons

## Supabase

To use supabase, you need to create a `.env` file with the following variables:

```
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
```

## Nodemailer

To use nodemailer, you need to create a `.env` file with the following variables:

```
EMAIL_USER=your_email
EMAIL_PASS=your_password
```

## Deploy (Vercel)

To deploy the project, you need to create a Vercel account and link it to your repository. The project is deployed in Vercel. Each time you push to the main branch, the project will be deployed automatically.
