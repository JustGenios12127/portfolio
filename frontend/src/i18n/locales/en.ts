const en = {
  meta: {
    title: 'Artem Shirin — Fullstack & Mobile Developer',
    description:
      'Artem Shirin — fullstack and mobile developer based in Almaty. React, Next.js, TypeScript, Go, Flutter, PostgreSQL, Docker.',
  },
  nav: {
    aria: 'Main navigation',
    about: 'Profile',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
    toLight: 'Switch to light theme',
    toDark: 'Switch to dark theme',
    language: 'Interface language',
  },
  person: {
    name: 'Artem Shirin',
    initials: 'AS',
    role: 'Fullstack & Mobile Developer',
    location: 'Almaty, Kazakhstan',
    status: 'Open to opportunities',
  },
  hero: {
    download: 'Download CV',
    write: 'Email me',
    scroll: 'Go to profile',
    trackAria: 'Development track',
  },
  tracks: {
    fullstack: {
      label: 'Fullstack',
      title: 'Fullstack Developer',
      tagline: 'Web applications from the interface down to production infrastructure.',
      summary:
        'I build web products end to end: the interface in React and TypeScript, the backend in Go and PostgreSQL, the deployment on a VPS. I like solutions that not only work, but still make sense six months later.',
      highlights: [
        { value: '1 month', label: 'from zero to the SkillPass MVP' },
        { value: 'Go + React', label: 'full cycle: frontend, backend, database' },
        { value: 'VPS', label: 'Docker, nginx, Cloudflare, CI/CD' },
      ],
    },
    mobile: {
      label: 'Mobile',
      title: 'Mobile Developer',
      tagline: 'Cross-platform Flutter apps — from the UI to the backend.',
      summary:
        'I build mobile products end to end with Flutter: interface, state, integrations and the backend behind them. I like apps that feel equally smooth on both platforms and stay readable in code.',
      highlights: [
        { value: '7 services', label: 'microservice Go backend for Lucky' },
        { value: 'iOS + Android', label: 'release builds from a single codebase' },
        { value: 'HLS', label: 'video pipeline: MinIO, Kafka, FFmpeg' },
      ],
    },
  },
  about: {
    eyebrow: 'Profile',
    title: 'About me',
    bio: [
      'Since April 2025 I have been a fullstack developer at AKE GROUP LLP. I took SkillPass from a one-month MVP to a product used by corporate clients, and I keep developing it in a team.',
      'Alongside that I run commercial freelance projects — RCPKiP and SHE — and my own Flutter products: AntiBullying KZ and Lucky.',
    ],
    factsTitle: 'At a glance',
    facts: [
      { label: 'Location', value: 'Almaty, Kazakhstan' },
      { label: 'Currently', value: 'Fullstack Developer, AKE GROUP LLP' },
      { label: 'Education', value: 'Almaty Polytechnic College' },
      { label: 'Languages', value: 'Russian, English (Intermediate)' },
    ],
  },
  skills: {
    eyebrow: 'Skills',
    title: 'The stack I work with',
    description: 'Technologies I use on the {{track}} track',
    groups: {
      frontend: 'Frontend',
      backend: 'Backend',
      infrastructure: 'Infrastructure',
      mobile: 'Mobile',
    },
  },
  experience: {
    eyebrow: 'Experience',
    title: 'Where and what I worked on',
    description: 'Products I carried from the first line of code to production and support.',
    openSite: 'Visit site',
    items: {
      ake: {
        company: 'AKE GROUP LLP',
        role: 'Fullstack Developer',
        period: 'April 2025 — present',
        bullets: [
          'Built the MVP of SkillPass, a B2B safety and compliance platform (employee training and certification, digital logbook, compliance with Kazakhstan regulations), single-handedly in 1 month — React + TypeScript frontend, Supabase backend. Two months later the first corporate clients were taking courses on the platform.',
          'Migrated the backend from Supabase to a custom server (Go + PostgreSQL, ~100 tables, 220 indexes, 184 API endpoints) together with a senior developer, and deployed it to a VPS behind Docker, nginx and Cloudflare.',
          'Integrated biometric user verification: first Biometric, later switched to Verigram.',
          'Automated the core processes: video training, employee testing, generation of certificates, protocols and digital signatures.',
          'The platform serves 196 corporate clients and 540+ users; the CRM module holds 1900+ deals, 380+ completed tests and 50+ issued certificates.',
          'I now develop the product in a team of 3 engineers.',
        ],
      },
      rcpkip: {
        company: 'RCPKiP — mandatory training system',
        role: 'Fullstack Developer · Freelance · B2B SaaS / EdTech',
        period: 'Project work',
        bullets: [
          'Designed and built a platform for training required by Kazakhstan law: a public site for the centre, a catalogue of 12+ programmes with pricing, course applications carrying company details, and personal dashboards.',
          'Implemented RBAC across three roles (employee / organisation / super admin): course assignment, testing, digital logbook, training calendar, invoices and access requests.',
          'Automated the issuing of PDF certificates — both personal and company-wide — via Supabase Edge Functions with storage in Supabase Storage.',
          'Added RU / KZ / EN localisation and the legal layer: public offer, privacy policy and consent checkboxes in the application form.',
          'Covered the centre back office: news and programme documents, employee import from Excel, reports and dashboard statistics.',
          'Stack: React 18 + TypeScript + Vite + Tailwind CSS, React Router, i18next, Supabase (Auth, Postgres, Storage, Edge Functions), Zod, React Hook Form, Recharts, jsPDF, export to Excel and DOCX.',
          'The product covers training for government bodies, city administrations and commercial companies.',
        ],
      },
      she: {
        company: 'SHE — clothing online store',
        role: 'Fullstack Developer · Freelance · e-commerce',
        period: 'Project work',
        bullets: [
          'Built a brand storefront instead of an off-the-shelf template: home page, catalogue with categories and filters (new in / sale / collection), product page with colours, sizes and a gallery, lookbook, brand story, stores, FAQ, delivery and returns, ambassadors, gift cards. RU / KZ localisation and a cached PWA shell.',
          'Implemented the purchase flow: cart, wishlist, guest and signed-in scenarios, a 3-step checkout (contacts → delivery → payment), email confirmation via OTP, server-side validation of promo codes and gift cards, and order tracking in the account.',
          'Wired up payments: Kaspi Pay and 0-0-12 instalments through the Public QR API (QR on desktop, app deep link on mobile) plus cards via TipTop Pay with no card data stored; Kaspi refunds are issued from the admin panel.',
          'Set up delivery: CDEK with price calculation and pickup point selection, Yandex Delivery and in-store pickup; carrier statuses arrive through webhooks.',
          'Built a 12-module admin panel (overview, catalogue, orders, returns, customers, marketing, ambassadors, analytics, Bitrix, finance, access, settings) with RBAC: customer / manager / marketer / super admin.',
          'Integrated Bitrix24 for form leads, Resend for transactional email and campaigns, a WhatsApp handoff to a manager, and GA4 / Meta / TikTok / Clarity analytics fired only after cookie consent.',
          'Stack: React 19 + TypeScript, TanStack Router and Query, Tailwind CSS 4, Vite, PWA; Go + PostgreSQL 16 + Redis backend with JWT; Docker, nginx, VPS, GitHub Actions.',
        ],
      },
      lucky: {
        company: 'Lucky — streaming platform',
        role: 'Flutter Developer / Full-stack, pet project',
        period: '2026 — present',
        bullets: [
          'Designed and built a VOD platform in the spirit of a mini Twitch: channels, video upload and playback, search and notifications.',
          'Developed a backend of 7 Go microservices (Auth, Channel, Catalog, Transcoding, Notification, Search) with gRPC and a REST gateway.',
          'Assembled the video pipeline: upload to MinIO, Kafka, FFmpeg transcoding to HLS, indexing in Elasticsearch.',
          'Built the Flutter client with a feature-first architecture, JWT session and an HLS player.',
          'Added resilience (retries, circuit breaker) and CI on GitHub Actions.',
        ],
      },
      antibulling: {
        company: 'AntiBullying KZ',
        role: 'Flutter Developer, personal project',
        period: '2025 — present',
        bullets: [
          'Built a mobile app in Flutter and Dart on my own, from the idea to a release-ready product.',
          'Implemented the UI, state management and REST API integration.',
          'Implemented the backend logic on Supabase along with the account modules.',
          'Produced release builds for iOS and Android.',
          'The app is being prepared for publication on Google Play and the App Store.',
        ],
      },
    },
  },
  projects: {
    eyebrow: 'Projects',
    title: 'What is already shipped',
    description: 'Commercial products and personal projects: platforms, stores and mobile apps.',
    openSite: 'Visit site',
    items: {
      skillpass: {
        name: 'SkillPass',
        kind: 'Platform · AKE GROUP LLP',
        description:
          'An MVP built from scratch in a month: personal dashboards, a Go REST backend, PostgreSQL, biometric integrations and a production deployment on a VPS.',
      },
      lucky: {
        name: 'Lucky',
        kind: 'Streaming platform · pet project',
        description:
          'A VOD platform in the spirit of a mini Twitch: 7 Go microservices over gRPC, a MinIO → Kafka → FFmpeg → HLS video pipeline and a Flutter client with a player.',
      },
      antibulling: {
        name: 'AntiBullying KZ',
        kind: 'Mobile app',
        description:
          'A cross-platform app from idea to release builds: UI, state management, a Supabase backend and account modules. Being prepared for the stores.',
      },
      rcpkip: {
        name: 'RCPKiP',
        kind: 'B2B SaaS · mandatory training',
        description:
          'A training platform for Kazakhstan regulations: a catalogue of 12+ programmes, company applications, dashboards for three roles, tests, a digital logbook and automated PDF certificates. RU / KZ / EN.',
      },
      she: {
        name: 'SHE',
        kind: 'E-commerce · fashion brand',
        description:
          'A turnkey womenswear store: storefront and lookbook, 3-step checkout, Kaspi Pay and card payments, CDEK and Yandex delivery, a 12-module admin panel with RBAC. RU / KZ, PWA.',
      },
    },
  },
  education: {
    eyebrow: 'Education',
    title: 'Background and languages',
    school: 'Almaty Polytechnic College',
    degree: 'Major in Software Development',
    details: [
      { label: 'Study period', value: 'September 2022 — July 2026' },
      { label: 'Duration', value: '4 years' },
      { label: 'City', value: 'Almaty' },
    ],
    languagesTitle: 'Languages',
    languagesSubtitle: 'Everyday and professional communication',
    languages: [
      { name: 'Russian', level: 'Native' },
      { name: 'English', level: 'Intermediate' },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's talk about your project",
    text: 'Open to fullstack and mobile development work. I reply within a day.',
    copy: 'Copy',
    copied: 'Copied',
    subject: 'Message from the portfolio site',
  },
  footer: {
    top: 'Back to top',
  },
}

export default en
