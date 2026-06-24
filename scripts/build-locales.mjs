import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const siteUrl = "https://www.raihanbarishifa.net";
const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const languages = [
    { code: "id", hreflang: "id", htmlLang: "id", dir: "ltr", flag: "🇮🇩", native: "Bahasa Indonesia" },
    { code: "ms", hreflang: "ms", htmlLang: "ms", dir: "ltr", flag: "🇲🇾", native: "Bahasa Melayu" },
    { code: "en", hreflang: "en", htmlLang: "en", dir: "ltr", flag: "🇬🇧", native: "English" },
    { code: "th", hreflang: "th", htmlLang: "th", dir: "ltr", flag: "🇹🇭", native: "ภาษาไทย" },
    { code: "zh", hreflang: "zh-Hans", htmlLang: "zh-Hans", dir: "ltr", flag: "🇨🇳", native: "中文" },
    { code: "ja", hreflang: "ja", htmlLang: "ja", dir: "ltr", flag: "🇯🇵", native: "日本語" },
    { code: "ko", hreflang: "ko", htmlLang: "ko", dir: "ltr", flag: "🇰🇷", native: "한국어" },
    { code: "ar", hreflang: "ar", htmlLang: "ar", dir: "rtl", flag: "🇸🇦", native: "العربية" },
    { code: "ru", hreflang: "ru", htmlLang: "ru", dir: "ltr", flag: "🇷🇺", native: "Русский" },
    { code: "nl", hreflang: "nl", htmlLang: "nl", dir: "ltr", flag: "🇳🇱", native: "Nederlands" },
    { code: "de", hreflang: "de", htmlLang: "de", dir: "ltr", flag: "🇩🇪", native: "Deutsch" },
    { code: "fr", hreflang: "fr", htmlLang: "fr", dir: "ltr", flag: "🇫🇷", native: "Français" },
    { code: "es", hreflang: "es", htmlLang: "es", dir: "ltr", flag: "🇪🇸", native: "Español" },
    { code: "it", hreflang: "it", htmlLang: "it", dir: "ltr", flag: "🇮🇹", native: "Italiano" },
    { code: "pt", hreflang: "pt", htmlLang: "pt", dir: "ltr", flag: "🇵🇹", native: "Português" }
];

const blogLinks = [
    "https://blog.raihanbarishifa.net/2025/06/sekapur-sirih-raibari-blog.html",
    "https://blog.raihanbarishifa.net/2025/10/kesalahan-umum-dalam-belajar-bahasa.html",
    "https://blog.raihanbarishifa.net/2025/08/jika-nusantara-tidak-dijajah.html"
];

const productLinks = [
    "https://www.raihanbarishifa.net/pencarian.html",
    "https://app.raihanbarishifa.net/stpn",
    "https://web.raihanbarishifa.net/celahmalaka",
    "https://web.raihanbarishifa.net/ptf",
    "https://web.raihanbarishifa.net/gci"
];

const blogKeywords = [
    "blog pengantar sekapur sirih introduction",
    "bahasa belajar linguistik kesalahan umum language learning",
    "sejarah nusantara kolonial geopolitik alternate history"
];

const productKeywords = [
    "search pencarian internet web",
    "buku strategi teknik pembinaan negara stpn",
    "buku celah malaka geopolitik",
    "kursus penerjemahan bahasa translation",
    "kursus literasi fungsional komunikasi global"
];

const projectKeywords = [
    "metafisika kemajuan negara metaphysics",
    "semiotika warna infrastruktur semiotics color",
    "ibu kota politik kinerja capital city politics",
    "ikn superhub nusantara",
    "jakarta bandung cirebon koridor",
    "singapura batam sumatra koridor",
    "asean transportasi telekomunikasi infrastructure",
    "nusantara raya integrasi asia tenggara",
    "asean pertahanan acda defense",
    "asean penegakan hukum aseanapol",
    "kamus komodo aplikasi bahasa dictionary",
    "pencarian multimoda ai search",
    "peringkas video rangkum summary"
];

const content = {
    id: {
        metaDescription: "Portal pribadi Raihan Barishifa: artikel, proyek, produk digital, dan kanal kontak dalam satu halaman yang lebih mudah digunakan.",
        metaKeywords: "Raihan Barishifa, geopolitik, pembangunan nasional, blog, proyek, produk",
        ogDescription: "Selamat datang di portal pribadi Raihan Barishifa. Akses cepat ke artikel, proyek, produk, dan kontak.",
        brandTitle: "Portal Raihan Barishifa",
        aria: {
            mainNav: "Navigasi utama",
            searchDrawer: "Laci Pencarian",
            openSearch: "Buka pencarian",
            openNav: "Buka navigasi",
            quickAccess: "Akses cepat",
            chooseLanguage: "Pilih bahasa",
            languageList: "Pilihan bahasa"
        },
        nav: ["Beranda", "Tentang", "Blog", "Proyek", "Produk", "Kontak"],
        searchPlaceholder: "Cari...",
        hero: {
            eyebrow: "Selamat datang",
            title: "Semua kanal Raihan Barishifa dalam satu halaman yang ringkas.",
            body: "Gunakan navigasi cepat, cari konten yang relevan, dan akses langsung blog, proyek, serta produk digital tanpa perlu membuka banyak halaman.",
            primary: "Lihat Produk",
            secondary: "Hubungi Saya"
        },
        quick: {
            title: "Akses Cepat",
            blog: "RaiBari Blog ↗",
            search: "Pencarian Internet ↗",
            email: "ask@raihanbarishifa.net"
        },
        filter: {
            all: "Menampilkan semua item.",
            results: "Menampilkan {count} hasil untuk \"{query}\"."
        },
        about: {
            title: "Tentang Saya",
            body: "Saya memiliki minat di bidang geopolitik, pembangunan nasional, infrastruktur transportasi, sastra, dan bahasa. Situs ini adalah ruang untuk berbagi gagasan, eksperimen, serta inisiatif yang sedang dikembangkan."
        },
        blogTitle: "Artikel Blog Pilihan",
        blogCards: [
            ["Sekapur Sirih", "Pengantar resmi RaiBari Blog dan latar belakang penulisan.", "Baca artikel blog ↗"],
            ["Kesalahan Umum dalam Belajar Bahasa", "Catatan praktis agar proses belajar bahasa lebih efektif.", "Baca artikel blog ↗"],
            ["Jika Nusantara \"Tidak Dijajah\"", "Eksplorasi skenario alternatif sejarah dan dampaknya hari ini.", "Baca artikel blog ↗"]
        ],
        projectsTitle: "Proyek & Riset",
        projects: [
            "Pengaruh Metafisika terhadap Kemajuan Negara",
            "Semiotika, Pengodean Warna, dan Pembangunan Infrastruktur",
            "Pengaruh Ibu Kota Negara terhadap Kinerja Politik",
            "Superhub Ibu Kota Nusantara",
            "Koridor Jakarta-Bandung-Cirebon",
            "Koridor Singapura-Batam-Sumatra",
            "Jaringan Infrastruktur Transportasi dan Telekomunikasi Asia Tenggara",
            "Kawasan Nusantara Raya: Integrasi Asia Tenggara berdasarkan Perjanjian Nusantara",
            "Susunan Pertahanan Umum ASEAN (ACDA)",
            "Badan Kerjasama Penegakan Hukum ASEAN (ASEANAPOL)",
            "Kamus Komodo: Aplikasi Kamus Dwibahasa Indonesia-Inggris & Inggris-Indonesia",
            "Pencarian Multimoda A.I.",
            "Peringkas/Perangkum Video"
        ],
        productsTitle: "Produk Digital",
        productCards: [
            ["Pencarian Internet", "Alat pencarian cepat untuk menjelajahi web dari satu antarmuka.", "Buka produk ↗"],
            ["Buku: Strategi dan Teknik Pembinaan Negara", "Bahan pelajaran untuk Indonesia.", "Buka produk ↗"],
            ["Buku \"Celah Malaka\"", "Menelusuri ketimpangan ekonomi dan peluang strategis.", "Buka produk ↗"],
            ["Kursus Penerjemahan Bahasa", "\"Kerangka Penerjemahan Profesional\"", "Buka produk ↗"],
            ["Kursus Literasi Fungsional & Komunikasi", "\"Kecerdasan Komunikasi Global\"", "Buka produk ↗"]
        ],
        contactTitle: "Kontak & Media Sosial",
        contact: {
            email: "Sur-el: ask@raihanbarishifa.net",
            facebook: "Facebook: Raihan Barishifa",
            twitter: "X (Twitter): @raihanbari98",
            instagram: "Instagram: @raihanbari98",
            tiktok: "TikTok: raihanbari98",
            linkedin: "LinkedIn: Raihan Barishifa"
        },
        footer: "© 2026 Raihan Barishifa. Semua Hak Dilindungi."
    },
    ms: {
        metaDescription: "Portal peribadi Raihan Barishifa: artikel, projek, produk digital, dan saluran hubungan dalam satu halaman yang mudah digunakan.",
        metaKeywords: "Raihan Barishifa, geopolitik, pembangunan negara, blog, projek, produk",
        ogDescription: "Selamat datang ke portal peribadi Raihan Barishifa. Akses pantas kepada artikel, projek, produk, dan hubungan.",
        brandTitle: "Portal Raihan Barishifa",
        aria: {
            mainNav: "Navigasi utama",
            searchDrawer: "Panel carian",
            openSearch: "Buka carian",
            openNav: "Buka navigasi",
            quickAccess: "Akses pantas",
            chooseLanguage: "Pilih bahasa",
            languageList: "Pilihan bahasa"
        },
        nav: ["Laman Utama", "Tentang", "Blog", "Projek", "Produk", "Hubungi"],
        searchPlaceholder: "Cari...",
        hero: {
            eyebrow: "Selamat datang",
            title: "Semua saluran Raihan Barishifa dalam satu halaman yang ringkas.",
            body: "Gunakan navigasi pantas, cari kandungan yang relevan, dan akses terus blog, projek, serta produk digital tanpa perlu membuka banyak halaman.",
            primary: "Lihat Produk",
            secondary: "Hubungi Saya"
        },
        quick: {
            title: "Akses Pantas",
            blog: "RaiBari Blog ↗",
            search: "Carian Internet ↗",
            email: "ask@raihanbarishifa.net"
        },
        filter: {
            all: "Memaparkan semua item.",
            results: "Memaparkan {count} hasil untuk \"{query}\"."
        },
        about: {
            title: "Tentang Saya",
            body: "Saya berminat dalam geopolitik, pembangunan negara, infrastruktur pengangkutan, sastera, dan bahasa. Laman ini ialah ruang untuk berkongsi gagasan, eksperimen, serta inisiatif yang sedang dibangunkan."
        },
        blogTitle: "Artikel Blog Pilihan",
        blogCards: [
            ["Sekapur Sirih", "Pengenalan rasmi RaiBari Blog dan latar belakang penulisan.", "Baca artikel blog ↗"],
            ["Kesilapan Umum dalam Belajar Bahasa", "Catatan praktikal supaya proses belajar bahasa menjadi lebih berkesan.", "Baca artikel blog ↗"],
            ["Jika Nusantara \"Tidak Dijajah\"", "Penerokaan senario sejarah alternatif dan kesannya pada hari ini.", "Baca artikel blog ↗"]
        ],
        projectsTitle: "Projek & Penyelidikan",
        projects: [
            "Pengaruh Metafizik terhadap Kemajuan Negara",
            "Semiotik, Pengekodan Warna, dan Pembangunan Infrastruktur",
            "Pengaruh Ibu Kota Negara terhadap Prestasi Politik",
            "Superhub Ibu Kota Nusantara",
            "Koridor Jakarta-Bandung-Cirebon",
            "Koridor Singapura-Batam-Sumatra",
            "Rangkaian Infrastruktur Pengangkutan dan Telekomunikasi Asia Tenggara",
            "Kawasan Nusantara Raya: Integrasi Asia Tenggara berdasarkan Perjanjian Nusantara",
            "Susunan Pertahanan Umum ASEAN (ACDA)",
            "Badan Kerjasama Penguatkuasaan Undang-undang ASEAN (ASEANAPOL)",
            "Kamus Komodo: Aplikasi Kamus Dwibahasa Indonesia-Inggeris & Inggeris-Indonesia",
            "Carian Multimodal A.I.",
            "Peringkas Video"
        ],
        productsTitle: "Produk Digital",
        productCards: [
            ["Carian Internet", "Alat carian pantas untuk meneroka web daripada satu antara muka.", "Buka produk ↗"],
            ["Buku: Strategi dan Teknik Pembinaan Negara", "Bahan pembelajaran untuk Indonesia.", "Buka produk ↗"],
            ["Buku \"Celah Malaka\"", "Menelusuri ketidakseimbangan ekonomi dan peluang strategik.", "Buka produk ↗"],
            ["Kursus Terjemahan Bahasa", "\"Kerangka Terjemahan Profesional\"", "Buka produk ↗"],
            ["Kursus Literasi Fungsional & Komunikasi", "\"Kecerdasan Komunikasi Global\"", "Buka produk ↗"]
        ],
        contactTitle: "Hubungan & Media Sosial",
        contact: {
            email: "E-mel: ask@raihanbarishifa.net",
            facebook: "Facebook: Raihan Barishifa",
            twitter: "X (Twitter): @raihanbari98",
            instagram: "Instagram: @raihanbari98",
            tiktok: "TikTok: raihanbari98",
            linkedin: "LinkedIn: Raihan Barishifa"
        },
        footer: "© 2026 Raihan Barishifa. Semua Hak Terpelihara."
    },
    en: {
        metaDescription: "Raihan Barishifa's personal portal: articles, projects, digital products, and contact channels in one easier-to-use page.",
        metaKeywords: "Raihan Barishifa, geopolitics, national development, blog, projects, products",
        ogDescription: "Welcome to Raihan Barishifa's personal portal. Quick access to articles, projects, products, and contact links.",
        brandTitle: "Raihan Barishifa Portal",
        aria: {
            mainNav: "Main navigation",
            searchDrawer: "Search drawer",
            openSearch: "Open search",
            openNav: "Open navigation",
            quickAccess: "Quick access",
            chooseLanguage: "Choose language",
            languageList: "Language choices"
        },
        nav: ["Home", "About", "Blog", "Projects", "Products", "Contact"],
        searchPlaceholder: "Search...",
        hero: {
            eyebrow: "Welcome",
            title: "All of Raihan Barishifa's channels on one concise page.",
            body: "Use quick navigation, search relevant content, and jump straight to the blog, projects, and digital products without opening lots of pages.",
            primary: "View Products",
            secondary: "Contact Me"
        },
        quick: {
            title: "Quick Access",
            blog: "RaiBari Blog ↗",
            search: "Internet Search ↗",
            email: "ask@raihanbarishifa.net"
        },
        filter: {
            all: "Showing all items.",
            results: "Showing {count} results for \"{query}\"."
        },
        about: {
            title: "About Me",
            body: "I am interested in geopolitics, national development, transportation infrastructure, literature, and languages. This site is a space for sharing ideas, experiments, and initiatives currently in development."
        },
        blogTitle: "Featured Blog Articles",
        blogCards: [
            ["Opening Note", "The official introduction to RaiBari Blog and the background behind the writing.", "Read blog article ↗"],
            ["Common Mistakes in Language Learning", "Practical notes to make the language learning process more effective.", "Read blog article ↗"],
            ["If Nusantara Had \"Never Been Colonized\"", "An exploration of alternate history scenarios and their impact today.", "Read blog article ↗"]
        ],
        projectsTitle: "Projects & Research",
        projects: [
            "The Influence of Metaphysics on National Progress",
            "Semiotics, Color Coding, and Infrastructure Development",
            "The Influence of a National Capital on Political Performance",
            "Nusantara Capital Superhub",
            "Jakarta-Bandung-Cirebon Corridor",
            "Singapore-Batam-Sumatra Corridor",
            "Southeast Asian Transportation and Telecommunications Infrastructure Network",
            "Greater Nusantara Region: Southeast Asian Integration under the Nusantara Treaty",
            "ASEAN Common Defence Arrangement (ACDA)",
            "ASEAN Law Enforcement Cooperation Agency (ASEANAPOL)",
            "Komodo Dictionary: Indonesian-English & English-Indonesian Bilingual Dictionary App",
            "Multimodal A.I. Search",
            "Video Summarizer"
        ],
        productsTitle: "Digital Products",
        productCards: [
            ["Internet Search", "A fast search tool for exploring the web from one interface.", "Open product ↗"],
            ["Book: Strategy and Techniques for Nation Building", "Learning material for Indonesia.", "Open product ↗"],
            ["Book \"Celah Malaka\"", "Tracing economic inequality and strategic opportunities.", "Open product ↗"],
            ["Language Translation Course", "\"Professional Translation Framework\"", "Open product ↗"],
            ["Functional Literacy & Communication Course", "\"Global Communication Intelligence\"", "Open product ↗"]
        ],
        contactTitle: "Contact & Social Media",
        contact: {
            email: "Email: ask@raihanbarishifa.net",
            facebook: "Facebook: Raihan Barishifa",
            twitter: "X (Twitter): @raihanbari98",
            instagram: "Instagram: @raihanbari98",
            tiktok: "TikTok: raihanbari98",
            linkedin: "LinkedIn: Raihan Barishifa"
        },
        footer: "© 2026 Raihan Barishifa. All Rights Reserved."
    },
    th: {
        metaDescription: "พอร์ทัลส่วนตัวของ Raihan Barishifa: บทความ โครงการ ผลิตภัณฑ์ดิจิทัล และช่องทางติดต่อในหน้าเดียวที่ใช้งานง่ายขึ้น",
        metaKeywords: "Raihan Barishifa, ภูมิรัฐศาสตร์, การพัฒนาชาติ, บล็อก, โครงการ, ผลิตภัณฑ์",
        ogDescription: "ยินดีต้อนรับสู่พอร์ทัลส่วนตัวของ Raihan Barishifa เข้าถึงบทความ โครงการ ผลิตภัณฑ์ และช่องทางติดต่อได้อย่างรวดเร็ว",
        brandTitle: "พอร์ทัล Raihan Barishifa",
        aria: {
            mainNav: "การนำทางหลัก",
            searchDrawer: "แถบค้นหา",
            openSearch: "เปิดการค้นหา",
            openNav: "เปิดการนำทาง",
            quickAccess: "เข้าถึงด่วน",
            chooseLanguage: "เลือกภาษา",
            languageList: "ตัวเลือกภาษา"
        },
        nav: ["หน้าแรก", "เกี่ยวกับ", "บล็อก", "โครงการ", "ผลิตภัณฑ์", "ติดต่อ"],
        searchPlaceholder: "ค้นหา...",
        hero: {
            eyebrow: "ยินดีต้อนรับ",
            title: "ทุกช่องทางของ Raihan Barishifa รวมอยู่ในหน้าเดียวอย่างกระชับ",
            body: "ใช้การนำทางด่วน ค้นหาเนื้อหาที่เกี่ยวข้อง และเข้าสู่บล็อก โครงการ รวมถึงผลิตภัณฑ์ดิจิทัลได้โดยไม่ต้องเปิดหลายหน้า",
            primary: "ดูผลิตภัณฑ์",
            secondary: "ติดต่อฉัน"
        },
        quick: {
            title: "เข้าถึงด่วน",
            blog: "บล็อก RaiBari ↗",
            search: "ค้นหาอินเทอร์เน็ต ↗",
            email: "ask@raihanbarishifa.net"
        },
        filter: {
            all: "แสดงรายการทั้งหมด",
            results: "แสดง {count} ผลลัพธ์สำหรับ \"{query}\""
        },
        about: {
            title: "เกี่ยวกับฉัน",
            body: "ฉันสนใจภูมิรัฐศาสตร์ การพัฒนาชาติ โครงสร้างพื้นฐานด้านคมนาคม วรรณกรรม และภาษา เว็บไซต์นี้เป็นพื้นที่สำหรับแบ่งปันแนวคิด การทดลอง และโครงการริเริ่มที่กำลังพัฒนา"
        },
        blogTitle: "บทความบล็อกที่คัดสรร",
        blogCards: [
            ["คำเปิด", "บทนำอย่างเป็นทางการของ RaiBari Blog และที่มาของงานเขียน", "อ่านบทความบล็อก ↗"],
            ["ข้อผิดพลาดทั่วไปในการเรียนภาษา", "บันทึกเชิงปฏิบัติเพื่อให้การเรียนภาษามีประสิทธิภาพมากขึ้น", "อ่านบทความบล็อก ↗"],
            ["หากนูซันตารา \"ไม่เคยถูกยึดครอง\"", "การสำรวจฉากทัศน์ประวัติศาสตร์ทางเลือกและผลกระทบในปัจจุบัน", "อ่านบทความบล็อก ↗"]
        ],
        projectsTitle: "โครงการและงานวิจัย",
        projects: [
            "อิทธิพลของอภิปรัชญาต่อความก้าวหน้าของชาติ",
            "สัญศาสตร์ การกำหนดรหัสสี และการพัฒนาโครงสร้างพื้นฐาน",
            "อิทธิพลของเมืองหลวงต่อประสิทธิภาพทางการเมือง",
            "ซูเปอร์ฮับเมืองหลวงนูซันตารา",
            "ระเบียงจาการ์ตา-บันดุง-จิเรบอน",
            "ระเบียงสิงคโปร์-บาตัม-สุมาตรา",
            "เครือข่ายโครงสร้างพื้นฐานคมนาคมและโทรคมนาคมเอเชียตะวันออกเฉียงใต้",
            "ภูมิภาคนูซันตาราใหญ่: การบูรณาการเอเชียตะวันออกเฉียงใต้ตามสนธิสัญญานูซันตารา",
            "การจัดระบบป้องกันร่วมของอาเซียน (ACDA)",
            "หน่วยงานความร่วมมือด้านการบังคับใช้กฎหมายอาเซียน (ASEANAPOL)",
            "พจนานุกรม Komodo: แอปพจนานุกรมสองภาษาอินโดนีเซีย-อังกฤษและอังกฤษ-อินโดนีเซีย",
            "การค้นหา A.I. แบบหลายรูปแบบ",
            "เครื่องสรุปวิดีโอ"
        ],
        productsTitle: "ผลิตภัณฑ์ดิจิทัล",
        productCards: [
            ["ค้นหาอินเทอร์เน็ต", "เครื่องมือค้นหาอย่างรวดเร็วสำหรับสำรวจเว็บจากอินเทอร์เฟซเดียว", "เปิดผลิตภัณฑ์ ↗"],
            ["หนังสือ: กลยุทธ์และเทคนิคการสร้างชาติ", "สื่อการเรียนรู้สำหรับอินโดนีเซีย", "เปิดผลิตภัณฑ์ ↗"],
            ["หนังสือ \"Celah Malaka\"", "สำรวจความเหลื่อมล้ำทางเศรษฐกิจและโอกาสเชิงยุทธศาสตร์", "เปิดผลิตภัณฑ์ ↗"],
            ["หลักสูตรการแปลภาษา", "\"กรอบการแปลมืออาชีพ\"", "เปิดผลิตภัณฑ์ ↗"],
            ["หลักสูตรการรู้เท่าทันเชิงหน้าที่และการสื่อสาร", "\"ปัญญาการสื่อสารระดับโลก\"", "เปิดผลิตภัณฑ์ ↗"]
        ],
        contactTitle: "ติดต่อและโซเชียลมีเดีย",
        contact: {
            email: "อีเมล: ask@raihanbarishifa.net",
            facebook: "Facebook: Raihan Barishifa",
            twitter: "X (Twitter): @raihanbari98",
            instagram: "Instagram: @raihanbari98",
            tiktok: "TikTok: raihanbari98",
            linkedin: "LinkedIn: Raihan Barishifa"
        },
        footer: "© 2026 Raihan Barishifa สงวนลิขสิทธิ์"
    },
    zh: {
        metaDescription: "Raihan Barishifa 的个人门户：文章、项目、数字产品和联系方式集中在一个更易使用的页面中。",
        metaKeywords: "Raihan Barishifa, 地缘政治, 国家发展, 博客, 项目, 产品",
        ogDescription: "欢迎访问 Raihan Barishifa 的个人门户。快速进入文章、项目、产品和联系方式。",
        brandTitle: "Raihan Barishifa 门户",
        aria: {
            mainNav: "主导航",
            searchDrawer: "搜索抽屉",
            openSearch: "打开搜索",
            openNav: "打开导航",
            quickAccess: "快速访问",
            chooseLanguage: "选择语言",
            languageList: "语言选项"
        },
        nav: ["首页", "关于", "博客", "项目", "产品", "联系"],
        searchPlaceholder: "搜索...",
        hero: {
            eyebrow: "欢迎",
            title: "Raihan Barishifa 的所有频道集中在一个简洁页面中。",
            body: "使用快速导航，搜索相关内容，并直接访问博客、项目和数字产品，无需打开许多页面。",
            primary: "查看产品",
            secondary: "联系我"
        },
        quick: {
            title: "快速访问",
            blog: "RaiBari 博客 ↗",
            search: "互联网搜索 ↗",
            email: "ask@raihanbarishifa.net"
        },
        filter: {
            all: "显示所有项目。",
            results: "显示与 \"{query}\" 相关的 {count} 个结果。"
        },
        about: {
            title: "关于我",
            body: "我关注地缘政治、国家发展、交通基础设施、文学和语言。这个网站是分享想法、实验和正在发展的倡议的空间。"
        },
        blogTitle: "精选博客文章",
        blogCards: [
            ["开篇说明", "RaiBari Blog 的正式介绍以及写作背景。", "阅读博客文章 ↗"],
            ["语言学习中的常见错误", "让语言学习过程更有效的实用笔记。", "阅读博客文章 ↗"],
            ["如果努山塔拉「未曾被殖民」", "探索另类历史情景及其对今天的影响。", "阅读博客文章 ↗"]
        ],
        projectsTitle: "项目与研究",
        projects: [
            "形而上学对国家进步的影响",
            "符号学、颜色编码与基础设施发展",
            "国家首都对政治绩效的影响",
            "努山塔拉首都超级枢纽",
            "雅加达-万隆-井里汶走廊",
            "新加坡-巴淡-苏门答腊走廊",
            "东南亚交通与电信基础设施网络",
            "大努山塔拉地区：基于努山塔拉条约的东南亚一体化",
            "东盟共同防务安排 (ACDA)",
            "东盟执法合作机构 (ASEANAPOL)",
            "Komodo 词典：印尼语-英语与英语-印尼语双语词典应用",
            "多模态 A.I. 搜索",
            "视频摘要工具"
        ],
        productsTitle: "数字产品",
        productCards: [
            ["互联网搜索", "从一个界面快速探索网络的搜索工具。", "打开产品 ↗"],
            ["图书：国家建设的战略与技术", "面向印度尼西亚的学习材料。", "打开产品 ↗"],
            ["图书《Celah Malaka》", "追踪经济不平衡与战略机会。", "打开产品 ↗"],
            ["语言翻译课程", "“专业翻译框架”", "打开产品 ↗"],
            ["功能性素养与传播课程", "“全球传播智能”", "打开产品 ↗"]
        ],
        contactTitle: "联系与社交媒体",
        contact: {
            email: "电子邮件: ask@raihanbarishifa.net",
            facebook: "Facebook: Raihan Barishifa",
            twitter: "X (Twitter): @raihanbari98",
            instagram: "Instagram: @raihanbari98",
            tiktok: "TikTok: raihanbari98",
            linkedin: "LinkedIn: Raihan Barishifa"
        },
        footer: "© 2026 Raihan Barishifa。保留所有权利。"
    },
    ja: {
        metaDescription: "Raihan Barishifa の個人ポータル。記事、プロジェクト、デジタル製品、連絡先を使いやすい1ページにまとめています。",
        metaKeywords: "Raihan Barishifa, 地政学, 国家開発, ブログ, プロジェクト, 製品",
        ogDescription: "Raihan Barishifa の個人ポータルへようこそ。記事、プロジェクト、製品、連絡先へすばやくアクセスできます。",
        brandTitle: "Raihan Barishifa ポータル",
        aria: {
            mainNav: "メインナビゲーション",
            searchDrawer: "検索ドロワー",
            openSearch: "検索を開く",
            openNav: "ナビゲーションを開く",
            quickAccess: "クイックアクセス",
            chooseLanguage: "言語を選択",
            languageList: "言語の選択肢"
        },
        nav: ["ホーム", "概要", "ブログ", "プロジェクト", "製品", "連絡先"],
        searchPlaceholder: "検索...",
        hero: {
            eyebrow: "ようこそ",
            title: "Raihan Barishifa のすべてのチャンネルを簡潔な1ページに。",
            body: "クイックナビゲーションで関連コンテンツを検索し、ブログ、プロジェクト、デジタル製品へ多くのページを開かずに直接アクセスできます。",
            primary: "製品を見る",
            secondary: "連絡する"
        },
        quick: {
            title: "クイックアクセス",
            blog: "RaiBari Blog ↗",
            search: "インターネット検索 ↗",
            email: "ask@raihanbarishifa.net"
        },
        filter: {
            all: "すべての項目を表示しています。",
            results: "\"{query}\" の結果を {count} 件表示しています。"
        },
        about: {
            title: "私について",
            body: "私は地政学、国家開発、交通インフラ、文学、言語に関心があります。このサイトは、現在進行中のアイデア、実験、取り組みを共有する場です。"
        },
        blogTitle: "注目のブログ記事",
        blogCards: [
            ["はじめに", "RaiBari Blog の公式紹介と執筆の背景。", "ブログ記事を読む ↗"],
            ["語学学習でよくある間違い", "語学学習をより効果的にするための実践的なメモ。", "ブログ記事を読む ↗"],
            ["もしヌサンタラが「植民地化されなかった」なら", "代替歴史シナリオと現代への影響を探ります。", "ブログ記事を読む ↗"]
        ],
        projectsTitle: "プロジェクトと研究",
        projects: [
            "形而上学が国家の進歩に与える影響",
            "記号論、色分け、インフラ開発",
            "首都が政治的パフォーマンスに与える影響",
            "ヌサンタラ首都スーパー ハブ",
            "ジャカルタ-バンドン-チルボン回廊",
            "シンガポール-バタム-スマトラ回廊",
            "東南アジアの交通・通信インフラネットワーク",
            "大ヌサンタラ地域：ヌサンタラ条約に基づく東南アジア統合",
            "ASEAN 共通防衛体制 (ACDA)",
            "ASEAN 法執行協力機関 (ASEANAPOL)",
            "Komodo 辞書：インドネシア語-英語・英語-インドネシア語二言語辞書アプリ",
            "マルチモーダル A.I. 検索",
            "動画要約ツール"
        ],
        productsTitle: "デジタル製品",
        productCards: [
            ["インターネット検索", "1つのインターフェースからウェブをすばやく探索する検索ツール。", "製品を開く ↗"],
            ["書籍：国家建設の戦略と技法", "インドネシア向けの学習教材。", "製品を開く ↗"],
            ["書籍「Celah Malaka」", "経済格差と戦略的機会をたどります。", "製品を開く ↗"],
            ["言語翻訳コース", "「プロフェッショナル翻訳フレームワーク」", "製品を開く ↗"],
            ["機能的リテラシーとコミュニケーションコース", "「グローバル・コミュニケーション・インテリジェンス」", "製品を開く ↗"]
        ],
        contactTitle: "連絡先とソーシャルメディア",
        contact: {
            email: "メール: ask@raihanbarishifa.net",
            facebook: "Facebook: Raihan Barishifa",
            twitter: "X (Twitter): @raihanbari98",
            instagram: "Instagram: @raihanbari98",
            tiktok: "TikTok: raihanbari98",
            linkedin: "LinkedIn: Raihan Barishifa"
        },
        footer: "© 2026 Raihan Barishifa. All Rights Reserved."
    },
    ko: {
        metaDescription: "Raihan Barishifa의 개인 포털: 기사, 프로젝트, 디지털 제품, 연락 채널을 더 쉽게 사용할 수 있는 한 페이지에 모았습니다.",
        metaKeywords: "Raihan Barishifa, 지정학, 국가 개발, 블로그, 프로젝트, 제품",
        ogDescription: "Raihan Barishifa의 개인 포털에 오신 것을 환영합니다. 기사, 프로젝트, 제품, 연락처로 빠르게 이동하세요.",
        brandTitle: "Raihan Barishifa 포털",
        aria: {
            mainNav: "기본 내비게이션",
            searchDrawer: "검색 패널",
            openSearch: "검색 열기",
            openNav: "내비게이션 열기",
            quickAccess: "빠른 접근",
            chooseLanguage: "언어 선택",
            languageList: "언어 선택 목록"
        },
        nav: ["홈", "소개", "블로그", "프로젝트", "제품", "연락처"],
        searchPlaceholder: "검색...",
        hero: {
            eyebrow: "환영합니다",
            title: "Raihan Barishifa의 모든 채널을 간결한 한 페이지에 담았습니다.",
            body: "빠른 내비게이션을 사용하고 관련 콘텐츠를 검색하며, 여러 페이지를 열지 않고 블로그, 프로젝트, 디지털 제품으로 바로 이동하세요.",
            primary: "제품 보기",
            secondary: "문의하기"
        },
        quick: {
            title: "빠른 접근",
            blog: "RaiBari Blog ↗",
            search: "인터넷 검색 ↗",
            email: "ask@raihanbarishifa.net"
        },
        filter: {
            all: "모든 항목을 표시합니다.",
            results: "\"{query}\"에 대한 결과 {count}개를 표시합니다."
        },
        about: {
            title: "소개",
            body: "저는 지정학, 국가 개발, 교통 인프라, 문학, 언어에 관심이 있습니다. 이 사이트는 아이디어, 실험, 개발 중인 이니셔티브를 공유하는 공간입니다."
        },
        blogTitle: "추천 블로그 글",
        blogCards: [
            ["시작의 글", "RaiBari Blog의 공식 소개와 글쓰기 배경입니다.", "블로그 글 읽기 ↗"],
            ["언어 학습의 흔한 실수", "언어 학습 과정을 더 효과적으로 만드는 실용적인 기록입니다.", "블로그 글 읽기 ↗"],
            ["누산타라가 \"식민지화되지 않았다면\"", "대체 역사 시나리오와 오늘날의 영향을 탐구합니다.", "블로그 글 읽기 ↗"]
        ],
        projectsTitle: "프로젝트 및 연구",
        projects: [
            "형이상학이 국가 발전에 미치는 영향",
            "기호학, 색상 코딩, 인프라 개발",
            "수도가 정치 성과에 미치는 영향",
            "누산타라 수도 슈퍼허브",
            "자카르타-반둥-치레본 회랑",
            "싱가포르-바탐-수마트라 회랑",
            "동남아시아 교통 및 통신 인프라 네트워크",
            "대누산타라 지역: 누산타라 조약에 따른 동남아시아 통합",
            "ASEAN 공동 방위 체계 (ACDA)",
            "ASEAN 법 집행 협력 기관 (ASEANAPOL)",
            "Komodo 사전: 인도네시아어-영어 및 영어-인도네시아어 이중언어 사전 앱",
            "멀티모달 A.I. 검색",
            "동영상 요약 도구"
        ],
        productsTitle: "디지털 제품",
        productCards: [
            ["인터넷 검색", "하나의 인터페이스에서 웹을 빠르게 탐색하는 검색 도구입니다.", "제품 열기 ↗"],
            ["책: 국가 건설의 전략과 기술", "인도네시아를 위한 학습 자료입니다.", "제품 열기 ↗"],
            ["책 \"Celah Malaka\"", "경제적 불균형과 전략적 기회를 추적합니다.", "제품 열기 ↗"],
            ["언어 번역 과정", "\"전문 번역 프레임워크\"", "제품 열기 ↗"],
            ["기능적 문해력 및 커뮤니케이션 과정", "\"글로벌 커뮤니케이션 지능\"", "제품 열기 ↗"]
        ],
        contactTitle: "연락처 및 소셜 미디어",
        contact: {
            email: "이메일: ask@raihanbarishifa.net",
            facebook: "Facebook: Raihan Barishifa",
            twitter: "X (Twitter): @raihanbari98",
            instagram: "Instagram: @raihanbari98",
            tiktok: "TikTok: raihanbari98",
            linkedin: "LinkedIn: Raihan Barishifa"
        },
        footer: "© 2026 Raihan Barishifa. 모든 권리 보유."
    },
    ar: {
        metaDescription: "البوابة الشخصية لـ Raihan Barishifa: مقالات ومشاريع ومنتجات رقمية وقنوات تواصل في صفحة واحدة سهلة الاستخدام.",
        metaKeywords: "Raihan Barishifa, الجغرافيا السياسية, التنمية الوطنية, مدونة, مشاريع, منتجات",
        ogDescription: "مرحبًا بك في البوابة الشخصية لـ Raihan Barishifa. وصول سريع إلى المقالات والمشاريع والمنتجات ووسائل التواصل.",
        brandTitle: "بوابة Raihan Barishifa",
        aria: {
            mainNav: "التنقل الرئيسي",
            searchDrawer: "لوحة البحث",
            openSearch: "فتح البحث",
            openNav: "فتح التنقل",
            quickAccess: "وصول سريع",
            chooseLanguage: "اختر اللغة",
            languageList: "خيارات اللغة"
        },
        nav: ["الرئيسية", "نبذة", "المدونة", "المشاريع", "المنتجات", "تواصل"],
        searchPlaceholder: "ابحث...",
        hero: {
            eyebrow: "مرحبًا",
            title: "كل قنوات Raihan Barishifa في صفحة واحدة موجزة.",
            body: "استخدم التنقل السريع، وابحث عن المحتوى المناسب، وانتقل مباشرة إلى المدونة والمشاريع والمنتجات الرقمية دون فتح صفحات كثيرة.",
            primary: "عرض المنتجات",
            secondary: "تواصل معي"
        },
        quick: {
            title: "وصول سريع",
            blog: "مدونة RaiBari ↗",
            search: "بحث الإنترنت ↗",
            email: "ask@raihanbarishifa.net"
        },
        filter: {
            all: "يتم عرض كل العناصر.",
            results: "يتم عرض {count} نتيجة لـ \"{query}\"."
        },
        about: {
            title: "نبذة عني",
            body: "أهتم بالجغرافيا السياسية، والتنمية الوطنية، وبنية النقل التحتية، والأدب، واللغات. هذا الموقع مساحة لمشاركة الأفكار والتجارب والمبادرات قيد التطوير."
        },
        blogTitle: "مقالات مختارة من المدونة",
        blogCards: [
            ["كلمة افتتاحية", "المقدمة الرسمية لمدونة RaiBari وخلفية الكتابة.", "اقرأ المقال ↗"],
            ["أخطاء شائعة في تعلم اللغات", "ملاحظات عملية لجعل تعلم اللغة أكثر فاعلية.", "اقرأ المقال ↗"],
            ["لو أن نوسانتارا \"لم تُستعمر\"", "استكشاف سيناريوهات تاريخية بديلة وتأثيرها اليوم.", "اقرأ المقال ↗"]
        ],
        projectsTitle: "المشاريع والبحوث",
        projects: [
            "تأثير الميتافيزيقا في تقدم الدولة",
            "السيميائيات، وترميز الألوان، وتطوير البنية التحتية",
            "تأثير العاصمة الوطنية في الأداء السياسي",
            "المركز الفائق لعاصمة نوسانتارا",
            "ممر جاكرتا-باندونغ-شيريبون",
            "ممر سنغافورة-باتام-سومطرة",
            "شبكة البنية التحتية للنقل والاتصالات في جنوب شرق آسيا",
            "منطقة نوسانتارا الكبرى: تكامل جنوب شرق آسيا وفق معاهدة نوسانتارا",
            "ترتيب الدفاع المشترك لرابطة آسيان (ACDA)",
            "هيئة التعاون في إنفاذ القانون لرابطة آسيان (ASEANAPOL)",
            "قاموس Komodo: تطبيق قاموس ثنائي اللغة إندونيسي-إنجليزي وإنجليزي-إندونيسي",
            "بحث A.I. متعدد الوسائط",
            "ملخص الفيديو"
        ],
        productsTitle: "المنتجات الرقمية",
        productCards: [
            ["بحث الإنترنت", "أداة بحث سريعة لاستكشاف الويب من واجهة واحدة.", "افتح المنتج ↗"],
            ["كتاب: الاستراتيجيات والتقنيات لبناء الدولة", "مادة تعليمية لإندونيسيا.", "افتح المنتج ↗"],
            ["كتاب \"Celah Malaka\"", "تتبع التفاوت الاقتصادي والفرص الاستراتيجية.", "افتح المنتج ↗"],
            ["دورة ترجمة اللغات", "\"إطار الترجمة الاحترافية\"", "افتح المنتج ↗"],
            ["دورة محو الأمية الوظيفية والتواصل", "\"ذكاء التواصل العالمي\"", "افتح المنتج ↗"]
        ],
        contactTitle: "التواصل ووسائل التواصل الاجتماعي",
        contact: {
            email: "البريد الإلكتروني: ask@raihanbarishifa.net",
            facebook: "Facebook: Raihan Barishifa",
            twitter: "X (Twitter): @raihanbari98",
            instagram: "Instagram: @raihanbari98",
            tiktok: "TikTok: raihanbari98",
            linkedin: "LinkedIn: Raihan Barishifa"
        },
        footer: "© 2026 Raihan Barishifa. جميع الحقوق محفوظة."
    },
    ru: {
        metaDescription: "Личный портал Raihan Barishifa: статьи, проекты, цифровые продукты и контакты на одной удобной странице.",
        metaKeywords: "Raihan Barishifa, геополитика, национальное развитие, блог, проекты, продукты",
        ogDescription: "Добро пожаловать на личный портал Raihan Barishifa. Быстрый доступ к статьям, проектам, продуктам и контактам.",
        brandTitle: "Портал Raihan Barishifa",
        aria: {
            mainNav: "Основная навигация",
            searchDrawer: "Панель поиска",
            openSearch: "Открыть поиск",
            openNav: "Открыть навигацию",
            quickAccess: "Быстрый доступ",
            chooseLanguage: "Выбрать язык",
            languageList: "Варианты языка"
        },
        nav: ["Главная", "Обо мне", "Блог", "Проекты", "Продукты", "Контакты"],
        searchPlaceholder: "Поиск...",
        hero: {
            eyebrow: "Добро пожаловать",
            title: "Все каналы Raihan Barishifa на одной лаконичной странице.",
            body: "Используйте быструю навигацию, ищите релевантный контент и переходите прямо к блогу, проектам и цифровым продуктам без множества открытых страниц.",
            primary: "Смотреть продукты",
            secondary: "Связаться со мной"
        },
        quick: {
            title: "Быстрый доступ",
            blog: "Блог RaiBari ↗",
            search: "Интернет-поиск ↗",
            email: "ask@raihanbarishifa.net"
        },
        filter: {
            all: "Показаны все элементы.",
            results: "Показано результатов: {count} для \"{query}\"."
        },
        about: {
            title: "Обо мне",
            body: "Меня интересуют геополитика, национальное развитие, транспортная инфраструктура, литература и языки. Этот сайт служит пространством для идей, экспериментов и инициатив, которые находятся в разработке."
        },
        blogTitle: "Избранные статьи блога",
        blogCards: [
            ["Вступительное слово", "Официальное введение в RaiBari Blog и предыстория публикаций.", "Читать статью ↗"],
            ["Распространенные ошибки при изучении языков", "Практические заметки, которые помогают учить языки эффективнее.", "Читать статью ↗"],
            ["Если бы Нусантара \"не была колонизирована\"", "Исследование альтернативных исторических сценариев и их влияния сегодня.", "Читать статью ↗"]
        ],
        projectsTitle: "Проекты и исследования",
        projects: [
            "Влияние метафизики на прогресс государства",
            "Семиотика, цветовое кодирование и развитие инфраструктуры",
            "Влияние столицы на политическую эффективность",
            "Суперхаб столицы Нусантара",
            "Коридор Джакарта-Бандунг-Чиребон",
            "Коридор Сингапур-Батам-Суматра",
            "Инфраструктурная сеть транспорта и телекоммуникаций Юго-Восточной Азии",
            "Регион Большая Нусантара: интеграция Юго-Восточной Азии на основе Нусантараского договора",
            "Общее оборонное устройство ASEAN (ACDA)",
            "Агентство сотрудничества ASEAN в сфере правоохранительной деятельности (ASEANAPOL)",
            "Словарь Komodo: двуязычное приложение индонезийско-английского и англо-индонезийского словаря",
            "Мультимодальный поиск A.I.",
            "Суммаризатор видео"
        ],
        productsTitle: "Цифровые продукты",
        productCards: [
            ["Интернет-поиск", "Быстрый инструмент для поиска в интернете из одного интерфейса.", "Открыть продукт ↗"],
            ["Книга: стратегии и техники государственного строительства", "Учебный материал для Индонезии.", "Открыть продукт ↗"],
            ["Книга \"Celah Malaka\"", "Исследование экономического неравенства и стратегических возможностей.", "Открыть продукт ↗"],
            ["Курс языкового перевода", "\"Профессиональная рамка перевода\"", "Открыть продукт ↗"],
            ["Курс функциональной грамотности и коммуникации", "\"Глобальный коммуникационный интеллект\"", "Открыть продукт ↗"]
        ],
        contactTitle: "Контакты и социальные сети",
        contact: {
            email: "Email: ask@raihanbarishifa.net",
            facebook: "Facebook: Raihan Barishifa",
            twitter: "X (Twitter): @raihanbari98",
            instagram: "Instagram: @raihanbari98",
            tiktok: "TikTok: raihanbari98",
            linkedin: "LinkedIn: Raihan Barishifa"
        },
        footer: "© 2026 Raihan Barishifa. Все права защищены."
    },
    nl: {
        metaDescription: "Het persoonlijke portaal van Raihan Barishifa: artikelen, projecten, digitale producten en contactkanalen op één gebruiksvriendelijke pagina.",
        metaKeywords: "Raihan Barishifa, geopolitiek, nationale ontwikkeling, blog, projecten, producten",
        ogDescription: "Welkom op het persoonlijke portaal van Raihan Barishifa. Snelle toegang tot artikelen, projecten, producten en contact.",
        brandTitle: "Raihan Barishifa Portaal",
        aria: {
            mainNav: "Hoofdnavigatie",
            searchDrawer: "Zoekpaneel",
            openSearch: "Zoeken openen",
            openNav: "Navigatie openen",
            quickAccess: "Snelle toegang",
            chooseLanguage: "Taal kiezen",
            languageList: "Taalkeuzes"
        },
        nav: ["Start", "Over", "Blog", "Projecten", "Producten", "Contact"],
        searchPlaceholder: "Zoeken...",
        hero: {
            eyebrow: "Welkom",
            title: "Alle kanalen van Raihan Barishifa op één compacte pagina.",
            body: "Gebruik snelle navigatie, zoek relevante inhoud en ga direct naar blog, projecten en digitale producten zonder veel pagina's te openen.",
            primary: "Bekijk Producten",
            secondary: "Neem Contact Op"
        },
        quick: {
            title: "Snelle Toegang",
            blog: "RaiBari Blog ↗",
            search: "Internetzoeken ↗",
            email: "ask@raihanbarishifa.net"
        },
        filter: {
            all: "Alle items worden weergegeven.",
            results: "{count} resultaten voor \"{query}\"."
        },
        about: {
            title: "Over Mij",
            body: "Ik ben geïnteresseerd in geopolitiek, nationale ontwikkeling, vervoersinfrastructuur, literatuur en talen. Deze site is een plek om ideeën, experimenten en initiatieven in ontwikkeling te delen."
        },
        blogTitle: "Uitgelichte Blogartikelen",
        blogCards: [
            ["Openingswoord", "De officiële introductie van RaiBari Blog en de achtergrond van het schrijven.", "Lees blogartikel ↗"],
            ["Veelvoorkomende Fouten bij Taal Leren", "Praktische notities om het taalleerproces effectiever te maken.", "Lees blogartikel ↗"],
            ["Als Nusantara \"Niet Gekoloniseerd\" Was", "Een verkenning van alternatieve historische scenario's en hun impact vandaag.", "Lees blogartikel ↗"]
        ],
        projectsTitle: "Projecten & Onderzoek",
        projects: [
            "De invloed van metafysica op nationale vooruitgang",
            "Semiotiek, kleurcodering en infrastructuurontwikkeling",
            "De invloed van een hoofdstad op politieke prestaties",
            "Superhub van de hoofdstad Nusantara",
            "Corridor Jakarta-Bandung-Cirebon",
            "Corridor Singapore-Batam-Sumatra",
            "Infrastructuurnetwerk voor vervoer en telecommunicatie in Zuidoost-Azië",
            "Groot-Nusantara-regio: integratie van Zuidoost-Azië op basis van het Nusantara-verdrag",
            "ASEAN Common Defence Arrangement (ACDA)",
            "ASEAN-samenwerkingsorgaan voor wetshandhaving (ASEANAPOL)",
            "Komodo Dictionary: Indonesisch-Engels & Engels-Indonesisch tweetalig woordenboek",
            "Multimodale A.I.-zoekfunctie",
            "Videosamenvatter"
        ],
        productsTitle: "Digitale Producten",
        productCards: [
            ["Internetzoeken", "Een snelle zoektool om het web vanuit één interface te verkennen.", "Open product ↗"],
            ["Boek: Strategie en technieken voor staatsopbouw", "Leermateriaal voor Indonesië.", "Open product ↗"],
            ["Boek \"Celah Malaka\"", "Een verkenning van economische ongelijkheid en strategische kansen.", "Open product ↗"],
            ["Cursus Taalvertaling", "\"Professioneel Vertaalraamwerk\"", "Open product ↗"],
            ["Cursus Functionele Geletterdheid & Communicatie", "\"Global Communication Intelligence\"", "Open product ↗"]
        ],
        contactTitle: "Contact & Sociale Media",
        contact: {
            email: "E-mail: ask@raihanbarishifa.net",
            facebook: "Facebook: Raihan Barishifa",
            twitter: "X (Twitter): @raihanbari98",
            instagram: "Instagram: @raihanbari98",
            tiktok: "TikTok: raihanbari98",
            linkedin: "LinkedIn: Raihan Barishifa"
        },
        footer: "© 2026 Raihan Barishifa. Alle rechten voorbehouden."
    },
    de: {
        metaDescription: "Das persönliche Portal von Raihan Barishifa: Artikel, Projekte, digitale Produkte und Kontaktkanäle auf einer benutzerfreundlichen Seite.",
        metaKeywords: "Raihan Barishifa, Geopolitik, nationale Entwicklung, Blog, Projekte, Produkte",
        ogDescription: "Willkommen im persönlichen Portal von Raihan Barishifa. Schneller Zugriff auf Artikel, Projekte, Produkte und Kontakt.",
        brandTitle: "Raihan Barishifa Portal",
        aria: {
            mainNav: "Hauptnavigation",
            searchDrawer: "Suchbereich",
            openSearch: "Suche öffnen",
            openNav: "Navigation öffnen",
            quickAccess: "Schnellzugriff",
            chooseLanguage: "Sprache wählen",
            languageList: "Sprachauswahl"
        },
        nav: ["Start", "Über", "Blog", "Projekte", "Produkte", "Kontakt"],
        searchPlaceholder: "Suchen...",
        hero: {
            eyebrow: "Willkommen",
            title: "Alle Kanäle von Raihan Barishifa auf einer kompakten Seite.",
            body: "Nutzen Sie die schnelle Navigation, suchen Sie relevante Inhalte und öffnen Sie Blog, Projekte und digitale Produkte direkt, ohne viele Seiten aufzurufen.",
            primary: "Produkte ansehen",
            secondary: "Kontakt aufnehmen"
        },
        quick: {
            title: "Schnellzugriff",
            blog: "RaiBari Blog ↗",
            search: "Internetsuche ↗",
            email: "ask@raihanbarishifa.net"
        },
        filter: {
            all: "Alle Einträge werden angezeigt.",
            results: "{count} Ergebnisse für \"{query}\"."
        },
        about: {
            title: "Über Mich",
            body: "Ich interessiere mich für Geopolitik, nationale Entwicklung, Verkehrsinfrastruktur, Literatur und Sprachen. Diese Website ist ein Raum für Ideen, Experimente und Initiativen, die sich in Entwicklung befinden."
        },
        blogTitle: "Ausgewählte Blogartikel",
        blogCards: [
            ["Einleitende Notiz", "Die offizielle Einführung in den RaiBari Blog und der Hintergrund des Schreibens.", "Blogartikel lesen ↗"],
            ["Häufige Fehler beim Sprachenlernen", "Praktische Notizen, damit der Lernprozess effektiver wird.", "Blogartikel lesen ↗"],
            ["Wenn Nusantara \"Nicht Kolonisiert\" Worden Wäre", "Eine Erkundung alternativer Geschichtsszenarien und ihrer heutigen Auswirkungen.", "Blogartikel lesen ↗"]
        ],
        projectsTitle: "Projekte & Forschung",
        projects: [
            "Der Einfluss der Metaphysik auf den Fortschritt des Staates",
            "Semiotik, Farbcodierung und Infrastrukturentwicklung",
            "Der Einfluss einer Hauptstadt auf politische Leistung",
            "Superhub der Hauptstadt Nusantara",
            "Korridor Jakarta-Bandung-Cirebon",
            "Korridor Singapur-Batam-Sumatra",
            "Infrastrukturnetz für Verkehr und Telekommunikation in Südostasien",
            "Großraum Nusantara: Integration Südostasiens auf Grundlage des Nusantara-Vertrags",
            "ASEAN Common Defence Arrangement (ACDA)",
            "ASEAN-Kooperationsorgan für Strafverfolgung (ASEANAPOL)",
            "Komodo Dictionary: Indonesisch-Englisch & Englisch-Indonesisch zweisprachige Wörterbuch-App",
            "Multimodale A.I.-Suche",
            "Video-Zusammenfasser"
        ],
        productsTitle: "Digitale Produkte",
        productCards: [
            ["Internetsuche", "Ein schnelles Suchwerkzeug zum Erkunden des Webs über eine Oberfläche.", "Produkt öffnen ↗"],
            ["Buch: Strategien und Techniken des Staatsaufbaus", "Lernmaterial für Indonesien.", "Produkt öffnen ↗"],
            ["Buch \"Celah Malaka\"", "Eine Untersuchung wirtschaftlicher Ungleichheit und strategischer Chancen.", "Produkt öffnen ↗"],
            ["Kurs für Sprachübersetzung", "\"Professioneller Übersetzungsrahmen\"", "Produkt öffnen ↗"],
            ["Kurs für funktionale Alphabetisierung & Kommunikation", "\"Globale Kommunikationsintelligenz\"", "Produkt öffnen ↗"]
        ],
        contactTitle: "Kontakt & Soziale Medien",
        contact: {
            email: "E-Mail: ask@raihanbarishifa.net",
            facebook: "Facebook: Raihan Barishifa",
            twitter: "X (Twitter): @raihanbari98",
            instagram: "Instagram: @raihanbari98",
            tiktok: "TikTok: raihanbari98",
            linkedin: "LinkedIn: Raihan Barishifa"
        },
        footer: "© 2026 Raihan Barishifa. Alle Rechte vorbehalten."
    },
    fr: {
        metaDescription: "Le portail personnel de Raihan Barishifa : articles, projets, produits numériques et contacts réunis sur une page plus facile à utiliser.",
        metaKeywords: "Raihan Barishifa, géopolitique, développement national, blog, projets, produits",
        ogDescription: "Bienvenue sur le portail personnel de Raihan Barishifa. Accès rapide aux articles, projets, produits et contacts.",
        brandTitle: "Portail Raihan Barishifa",
        aria: {
            mainNav: "Navigation principale",
            searchDrawer: "Panneau de recherche",
            openSearch: "Ouvrir la recherche",
            openNav: "Ouvrir la navigation",
            quickAccess: "Accès rapide",
            chooseLanguage: "Choisir la langue",
            languageList: "Choix de langue"
        },
        nav: ["Accueil", "À propos", "Blog", "Projets", "Produits", "Contact"],
        searchPlaceholder: "Rechercher...",
        hero: {
            eyebrow: "Bienvenue",
            title: "Tous les canaux de Raihan Barishifa sur une seule page concise.",
            body: "Utilisez la navigation rapide, cherchez les contenus pertinents et accédez directement au blog, aux projets et aux produits numériques sans ouvrir de nombreuses pages.",
            primary: "Voir les produits",
            secondary: "Me contacter"
        },
        quick: {
            title: "Accès rapide",
            blog: "RaiBari Blog ↗",
            search: "Recherche Internet ↗",
            email: "ask@raihanbarishifa.net"
        },
        filter: {
            all: "Tous les éléments sont affichés.",
            results: "{count} résultats pour \"{query}\"."
        },
        about: {
            title: "À propos de moi",
            body: "Je m'intéresse à la géopolitique, au développement national, aux infrastructures de transport, à la littérature et aux langues. Ce site est un espace pour partager des idées, des expériences et des initiatives en cours de développement."
        },
        blogTitle: "Articles de blog sélectionnés",
        blogCards: [
            ["Mot d'ouverture", "L'introduction officielle du RaiBari Blog et le contexte de l'écriture.", "Lire l'article ↗"],
            ["Erreurs courantes dans l'apprentissage des langues", "Notes pratiques pour rendre l'apprentissage des langues plus efficace.", "Lire l'article ↗"],
            ["Si le Nusantara \"n'avait pas été colonisé\"", "Exploration de scénarios historiques alternatifs et de leurs effets aujourd'hui.", "Lire l'article ↗"]
        ],
        projectsTitle: "Projets & Recherche",
        projects: [
            "L'influence de la métaphysique sur le progrès de l'État",
            "Sémiotique, codage des couleurs et développement des infrastructures",
            "L'influence d'une capitale sur la performance politique",
            "Superhub de la capitale Nusantara",
            "Corridor Jakarta-Bandung-Cirebon",
            "Corridor Singapour-Batam-Sumatra",
            "Réseau d'infrastructures de transport et de télécommunications en Asie du Sud-Est",
            "Région du Grand Nusantara : intégration de l'Asie du Sud-Est selon le traité de Nusantara",
            "Arrangement commun de défense de l'ASEAN (ACDA)",
            "Agence de coopération policière de l'ASEAN (ASEANAPOL)",
            "Dictionnaire Komodo : application bilingue indonésien-anglais et anglais-indonésien",
            "Recherche A.I. multimodale",
            "Résumé vidéo"
        ],
        productsTitle: "Produits numériques",
        productCards: [
            ["Recherche Internet", "Un outil de recherche rapide pour explorer le Web depuis une seule interface.", "Ouvrir le produit ↗"],
            ["Livre : Stratégies et techniques de construction nationale", "Matériel d'apprentissage pour l'Indonésie.", "Ouvrir le produit ↗"],
            ["Livre \"Celah Malaka\"", "Explorer les inégalités économiques et les opportunités stratégiques.", "Ouvrir le produit ↗"],
            ["Cours de traduction linguistique", "\"Cadre de traduction professionnelle\"", "Ouvrir le produit ↗"],
            ["Cours de littératie fonctionnelle & communication", "\"Intelligence de communication globale\"", "Ouvrir le produit ↗"]
        ],
        contactTitle: "Contact & Réseaux sociaux",
        contact: {
            email: "E-mail : ask@raihanbarishifa.net",
            facebook: "Facebook : Raihan Barishifa",
            twitter: "X (Twitter) : @raihanbari98",
            instagram: "Instagram : @raihanbari98",
            tiktok: "TikTok : raihanbari98",
            linkedin: "LinkedIn : Raihan Barishifa"
        },
        footer: "© 2026 Raihan Barishifa. Tous droits réservés."
    },
    es: {
        metaDescription: "Portal personal de Raihan Barishifa: artículos, proyectos, productos digitales y canales de contacto en una página más fácil de usar.",
        metaKeywords: "Raihan Barishifa, geopolítica, desarrollo nacional, blog, proyectos, productos",
        ogDescription: "Bienvenido al portal personal de Raihan Barishifa. Acceso rápido a artículos, proyectos, productos y contacto.",
        brandTitle: "Portal Raihan Barishifa",
        aria: {
            mainNav: "Navegación principal",
            searchDrawer: "Panel de búsqueda",
            openSearch: "Abrir búsqueda",
            openNav: "Abrir navegación",
            quickAccess: "Acceso rápido",
            chooseLanguage: "Elegir idioma",
            languageList: "Opciones de idioma"
        },
        nav: ["Inicio", "Acerca de", "Blog", "Proyectos", "Productos", "Contacto"],
        searchPlaceholder: "Buscar...",
        hero: {
            eyebrow: "Bienvenido",
            title: "Todos los canales de Raihan Barishifa en una sola página concisa.",
            body: "Usa la navegación rápida, busca contenido relevante y accede directamente al blog, los proyectos y los productos digitales sin abrir muchas páginas.",
            primary: "Ver productos",
            secondary: "Contactarme"
        },
        quick: {
            title: "Acceso rápido",
            blog: "RaiBari Blog ↗",
            search: "Búsqueda en Internet ↗",
            email: "ask@raihanbarishifa.net"
        },
        filter: {
            all: "Se muestran todos los elementos.",
            results: "Se muestran {count} resultados para \"{query}\"."
        },
        about: {
            title: "Acerca de mí",
            body: "Me interesan la geopolítica, el desarrollo nacional, la infraestructura de transporte, la literatura y los idiomas. Este sitio es un espacio para compartir ideas, experimentos e iniciativas en desarrollo."
        },
        blogTitle: "Artículos destacados del blog",
        blogCards: [
            ["Nota de apertura", "La introducción oficial de RaiBari Blog y el contexto de la escritura.", "Leer artículo ↗"],
            ["Errores comunes al aprender idiomas", "Notas prácticas para hacer más eficaz el aprendizaje de idiomas.", "Leer artículo ↗"],
            ["Si Nusantara \"no hubiera sido colonizada\"", "Exploración de escenarios históricos alternativos y su impacto actual.", "Leer artículo ↗"]
        ],
        projectsTitle: "Proyectos e Investigación",
        projects: [
            "La influencia de la metafísica en el progreso del Estado",
            "Semiótica, codificación de colores y desarrollo de infraestructura",
            "La influencia de una capital nacional en el desempeño político",
            "Superhub de la capital Nusantara",
            "Corredor Yakarta-Bandung-Cirebon",
            "Corredor Singapur-Batam-Sumatra",
            "Red de infraestructura de transporte y telecomunicaciones del Sudeste Asiático",
            "Región de Gran Nusantara: integración del Sudeste Asiático según el Tratado de Nusantara",
            "Arreglo Común de Defensa de ASEAN (ACDA)",
            "Agencia de Cooperación en Aplicación de la Ley de ASEAN (ASEANAPOL)",
            "Diccionario Komodo: aplicación bilingüe indonesio-inglés e inglés-indonesio",
            "Búsqueda A.I. multimodal",
            "Resumidor de video"
        ],
        productsTitle: "Productos Digitales",
        productCards: [
            ["Búsqueda en Internet", "Una herramienta de búsqueda rápida para explorar la web desde una sola interfaz.", "Abrir producto ↗"],
            ["Libro: Estrategias y técnicas para la construcción nacional", "Material de aprendizaje para Indonesia.", "Abrir producto ↗"],
            ["Libro \"Celah Malaka\"", "Explora la desigualdad económica y las oportunidades estratégicas.", "Abrir producto ↗"],
            ["Curso de traducción de idiomas", "\"Marco de traducción profesional\"", "Abrir producto ↗"],
            ["Curso de alfabetización funcional y comunicación", "\"Inteligencia de comunicación global\"", "Abrir producto ↗"]
        ],
        contactTitle: "Contacto y Redes Sociales",
        contact: {
            email: "Correo: ask@raihanbarishifa.net",
            facebook: "Facebook: Raihan Barishifa",
            twitter: "X (Twitter): @raihanbari98",
            instagram: "Instagram: @raihanbari98",
            tiktok: "TikTok: raihanbari98",
            linkedin: "LinkedIn: Raihan Barishifa"
        },
        footer: "© 2026 Raihan Barishifa. Todos los derechos reservados."
    },
    it: {
        metaDescription: "Il portale personale di Raihan Barishifa: articoli, progetti, prodotti digitali e canali di contatto in una pagina più facile da usare.",
        metaKeywords: "Raihan Barishifa, geopolitica, sviluppo nazionale, blog, progetti, prodotti",
        ogDescription: "Benvenuto nel portale personale di Raihan Barishifa. Accesso rapido ad articoli, progetti, prodotti e contatti.",
        brandTitle: "Portale Raihan Barishifa",
        aria: {
            mainNav: "Navigazione principale",
            searchDrawer: "Pannello di ricerca",
            openSearch: "Apri ricerca",
            openNav: "Apri navigazione",
            quickAccess: "Accesso rapido",
            chooseLanguage: "Scegli lingua",
            languageList: "Scelte lingua"
        },
        nav: ["Home", "Chi sono", "Blog", "Progetti", "Prodotti", "Contatti"],
        searchPlaceholder: "Cerca...",
        hero: {
            eyebrow: "Benvenuto",
            title: "Tutti i canali di Raihan Barishifa in una sola pagina concisa.",
            body: "Usa la navigazione rapida, cerca contenuti pertinenti e accedi direttamente al blog, ai progetti e ai prodotti digitali senza aprire molte pagine.",
            primary: "Vedi prodotti",
            secondary: "Contattami"
        },
        quick: {
            title: "Accesso rapido",
            blog: "RaiBari Blog ↗",
            search: "Ricerca Internet ↗",
            email: "ask@raihanbarishifa.net"
        },
        filter: {
            all: "Tutti gli elementi sono visualizzati.",
            results: "{count} risultati per \"{query}\"."
        },
        about: {
            title: "Chi sono",
            body: "Mi interessano geopolitica, sviluppo nazionale, infrastrutture di trasporto, letteratura e lingue. Questo sito è uno spazio per condividere idee, esperimenti e iniziative in fase di sviluppo."
        },
        blogTitle: "Articoli del blog in evidenza",
        blogCards: [
            ["Nota introduttiva", "L'introduzione ufficiale di RaiBari Blog e il contesto della scrittura.", "Leggi articolo ↗"],
            ["Errori comuni nell'apprendimento delle lingue", "Note pratiche per rendere più efficace l'apprendimento linguistico.", "Leggi articolo ↗"],
            ["Se Nusantara \"non fosse stata colonizzata\"", "Esplorazione di scenari storici alternativi e del loro impatto oggi.", "Leggi articolo ↗"]
        ],
        projectsTitle: "Progetti e Ricerca",
        projects: [
            "L'influenza della metafisica sul progresso dello Stato",
            "Semiotica, codifica dei colori e sviluppo delle infrastrutture",
            "L'influenza della capitale sul rendimento politico",
            "Superhub della capitale Nusantara",
            "Corridoio Giacarta-Bandung-Cirebon",
            "Corridoio Singapore-Batam-Sumatra",
            "Rete infrastrutturale di trasporti e telecomunicazioni del Sud-est asiatico",
            "Regione della Grande Nusantara: integrazione del Sud-est asiatico secondo il Trattato di Nusantara",
            "Assetto comune di difesa ASEAN (ACDA)",
            "Agenzia di cooperazione per l'applicazione della legge ASEAN (ASEANAPOL)",
            "Dizionario Komodo: app dizionario bilingue indonesiano-inglese e inglese-indonesiano",
            "Ricerca A.I. multimodale",
            "Riassuntore video"
        ],
        productsTitle: "Prodotti Digitali",
        productCards: [
            ["Ricerca Internet", "Uno strumento di ricerca veloce per esplorare il web da un'unica interfaccia.", "Apri prodotto ↗"],
            ["Libro: Strategie e tecniche per la costruzione nazionale", "Materiale didattico per l'Indonesia.", "Apri prodotto ↗"],
            ["Libro \"Celah Malaka\"", "Esplora disuguaglianze economiche e opportunità strategiche.", "Apri prodotto ↗"],
            ["Corso di traduzione linguistica", "\"Quadro di traduzione professionale\"", "Apri prodotto ↗"],
            ["Corso di alfabetizzazione funzionale e comunicazione", "\"Intelligenza della comunicazione globale\"", "Apri prodotto ↗"]
        ],
        contactTitle: "Contatti e Social Media",
        contact: {
            email: "E-mail: ask@raihanbarishifa.net",
            facebook: "Facebook: Raihan Barishifa",
            twitter: "X (Twitter): @raihanbari98",
            instagram: "Instagram: @raihanbari98",
            tiktok: "TikTok: raihanbari98",
            linkedin: "LinkedIn: Raihan Barishifa"
        },
        footer: "© 2026 Raihan Barishifa. Tutti i diritti riservati."
    },
    pt: {
        metaDescription: "Portal pessoal de Raihan Barishifa: artigos, projetos, produtos digitais e canais de contato em uma página mais fácil de usar.",
        metaKeywords: "Raihan Barishifa, geopolítica, desenvolvimento nacional, blog, projetos, produtos",
        ogDescription: "Bem-vindo ao portal pessoal de Raihan Barishifa. Acesso rápido a artigos, projetos, produtos e contato.",
        brandTitle: "Portal Raihan Barishifa",
        aria: {
            mainNav: "Navegação principal",
            searchDrawer: "Painel de pesquisa",
            openSearch: "Abrir pesquisa",
            openNav: "Abrir navegação",
            quickAccess: "Acesso rápido",
            chooseLanguage: "Escolher idioma",
            languageList: "Opções de idioma"
        },
        nav: ["Início", "Sobre", "Blog", "Projetos", "Produtos", "Contato"],
        searchPlaceholder: "Pesquisar...",
        hero: {
            eyebrow: "Bem-vindo",
            title: "Todos os canais de Raihan Barishifa em uma única página concisa.",
            body: "Use a navegação rápida, pesquise conteúdo relevante e acesse diretamente o blog, os projetos e os produtos digitais sem abrir muitas páginas.",
            primary: "Ver produtos",
            secondary: "Fale comigo"
        },
        quick: {
            title: "Acesso rápido",
            blog: "RaiBari Blog ↗",
            search: "Pesquisa na Internet ↗",
            email: "ask@raihanbarishifa.net"
        },
        filter: {
            all: "Mostrando todos os itens.",
            results: "Mostrando {count} resultados para \"{query}\"."
        },
        about: {
            title: "Sobre mim",
            body: "Tenho interesse por geopolítica, desenvolvimento nacional, infraestrutura de transporte, literatura e idiomas. Este site é um espaço para compartilhar ideias, experimentos e iniciativas em desenvolvimento."
        },
        blogTitle: "Artigos em destaque no blog",
        blogCards: [
            ["Nota de abertura", "A introdução oficial do RaiBari Blog e o contexto da escrita.", "Ler artigo ↗"],
            ["Erros comuns ao aprender idiomas", "Notas práticas para tornar o aprendizado de idiomas mais eficaz.", "Ler artigo ↗"],
            ["Se Nusantara \"não tivesse sido colonizada\"", "Exploração de cenários históricos alternativos e seu impacto hoje.", "Ler artigo ↗"]
        ],
        projectsTitle: "Projetos e Pesquisa",
        projects: [
            "A influência da metafísica no progresso do Estado",
            "Semiótica, codificação de cores e desenvolvimento de infraestrutura",
            "A influência da capital nacional no desempenho político",
            "Superhub da capital Nusantara",
            "Corredor Jacarta-Bandung-Cirebon",
            "Corredor Singapura-Batam-Sumatra",
            "Rede de infraestrutura de transporte e telecomunicações do Sudeste Asiático",
            "Região da Grande Nusantara: integração do Sudeste Asiático segundo o Tratado de Nusantara",
            "Arranjo Comum de Defesa da ASEAN (ACDA)",
            "Agência de Cooperação em Aplicação da Lei da ASEAN (ASEANAPOL)",
            "Dicionário Komodo: aplicativo de dicionário bilíngue indonésio-inglês e inglês-indonésio",
            "Pesquisa A.I. multimodal",
            "Resumidor de vídeo"
        ],
        productsTitle: "Produtos Digitais",
        productCards: [
            ["Pesquisa na Internet", "Uma ferramenta de pesquisa rápida para explorar a web em uma única interface.", "Abrir produto ↗"],
            ["Livro: Estratégias e técnicas para construção nacional", "Material de aprendizagem para a Indonésia.", "Abrir produto ↗"],
            ["Livro \"Celah Malaka\"", "Explora desigualdade econômica e oportunidades estratégicas.", "Abrir produto ↗"],
            ["Curso de tradução de idiomas", "\"Estrutura de tradução profissional\"", "Abrir produto ↗"],
            ["Curso de alfabetização funcional e comunicação", "\"Inteligência de comunicação global\"", "Abrir produto ↗"]
        ],
        contactTitle: "Contato e Redes Sociais",
        contact: {
            email: "E-mail: ask@raihanbarishifa.net",
            facebook: "Facebook: Raihan Barishifa",
            twitter: "X (Twitter): @raihanbari98",
            instagram: "Instagram: @raihanbari98",
            tiktok: "TikTok: raihanbari98",
            linkedin: "LinkedIn: Raihan Barishifa"
        },
        footer: "© 2026 Raihan Barishifa. Todos os direitos reservados."
    }
};

const escapeHtml = (value = "") => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;");

const languageUrl = code => `${siteUrl}/${code}/`;
const languagePath = code => `/${code}/`;

const renderAlternateLinks = canonical => [
    `<link rel="canonical" href="${canonical}">`,
    `<link rel="alternate" hreflang="x-default" href="${siteUrl}/">`,
    ...languages.map(language => `<link rel="alternate" hreflang="${language.hreflang}" href="${languageUrl(language.code)}">`)
].join("\n    ");

const renderLanguageMenu = currentCode => {
    const currentLanguage = languages.find(language => language.code === currentCode);
    const t = content[currentCode];

    return `<li class="language-nav">
                        <details class="language-menu">
                            <summary aria-label="${escapeHtml(t.aria.chooseLanguage)}">
                                <span aria-hidden="true">🌐</span>
                                <span>${escapeHtml(currentLanguage.native)}</span>
                            </summary>
                            <ul class="language-links" aria-label="${escapeHtml(t.aria.languageList)}">
${languages.map(language => `                                <li><a href="${languagePath(language.code)}"${language.code === currentCode ? " aria-current=\"page\"" : ""}><span aria-hidden="true">${language.flag}</span><span>${escapeHtml(language.native)}</span></a></li>`).join("\n")}
                            </ul>
                        </details>
                    </li>`;
};

const renderBlogCards = t => t.blogCards.map((card, index) => `            <article class="card" data-keywords="${escapeHtml(blogKeywords[index])}">
                <h3>${escapeHtml(card[0])}</h3>
                <p>${escapeHtml(card[1])}</p>
                <a href="${blogLinks[index]}" target="_blank" rel="noopener noreferrer">${escapeHtml(card[2])}</a>
            </article>`).join("\n");

const renderProjectItems = t => t.projects.map((item, index) => `            <div class="list-item" data-keywords="${escapeHtml(projectKeywords[index])}">${escapeHtml(item)}</div>`).join("\n");

const renderProductCards = t => t.productCards.map((card, index) => `            <article class="card" data-keywords="${escapeHtml(productKeywords[index])}">
                <h3>${escapeHtml(card[0])}</h3>
                <p>${escapeHtml(card[1])}</p>
                <a href="${productLinks[index]}" target="_blank" rel="noopener noreferrer">${escapeHtml(card[2])}</a>
            </article>`).join("\n");

const renderPage = ({ locale, canonical, assetPrefix }) => {
    const t = content[locale];
    const language = languages.find(item => item.code === locale);
    const navTargets = ["beranda", "tentang", "blog", "proyek", "produk", "kontak"];

    return `<!DOCTYPE html>
<html lang="${language.htmlLang}" dir="${language.dir}">
<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-YPX62F447W"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-YPX62F447W');
    </script>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${escapeHtml(t.metaDescription)}">
    <meta name="keywords" content="${escapeHtml(t.metaKeywords)}">
    <meta property="og:title" content="Raihan Barishifa">
    <meta property="og:description" content="${escapeHtml(t.ogDescription)}">
    <meta property="og:image" content="${siteUrl}/rb-icon.jpg">
    <meta property="og:url" content="${canonical}">
    ${renderAlternateLinks(canonical)}
    <title>Raihan Barishifa</title>
    <link rel="shortcut icon" href="${assetPrefix}rb-icon.jpg" type="image/jpeg">
    <link rel="stylesheet" href="${assetPrefix}style.css">
</head>
<body>
    <header class="site-header" role="banner">
        <div class="header-top">
            <a href="#beranda" class="brand">
                <img src="${assetPrefix}rb-icon.jpg" alt="Logo Raihan Barishifa" class="brand-logo">
                <div>
                    <h1>${escapeHtml(t.brandTitle)}</h1>
                    <p>www.raihanbarishifa.net</p>
                </div>
            </a>
            
            <div class="header-toggles">
                <button
                    class="search-toggle"
                    type="button"
                    aria-label="${escapeHtml(t.aria.openSearch)}"
                    aria-expanded="false"
                    aria-controls="search-drawer">
                    🔎
                </button>
                <button
                    class="menu-toggle"
                    type="button"
                    aria-label="${escapeHtml(t.aria.openNav)}"
                    aria-expanded="false"
                    aria-controls="main-nav">
                    ☰
                </button>
            </div>
        </div>
        
        <div class="header-drawers">
            <nav id="main-nav" class="main-nav" aria-label="${escapeHtml(t.aria.mainNav)}">
                <ul class="nav-links">
${navTargets.map((target, index) => `                    <li><a href="#${target}">${escapeHtml(t.nav[index])}</a></li>`).join("\n")}
                    ${renderLanguageMenu(locale)}
                </ul>
            </nav>
            
            <div id="search-drawer" class="search-drawer" aria-label="${escapeHtml(t.aria.searchDrawer)}">
                <input
                    id="site-filter"
                    type="search"
                    placeholder="${escapeHtml(t.searchPlaceholder)}"
                    autocomplete="off">
            </div>
        </div>
    </header>

<main role="main">
    <section id="beranda" class="hero">
        <div>
            <p class="eyebrow">${escapeHtml(t.hero.eyebrow)}</p>
            <h2>${escapeHtml(t.hero.title)}</h2>
            <p>${escapeHtml(t.hero.body)}</p>
            <div class="hero-actions">
                <a class="btn btn-primary" href="#produk">${escapeHtml(t.hero.primary)}</a>
                <a class="btn btn-secondary" href="#kontak">${escapeHtml(t.hero.secondary)}</a>
            </div>
        </div>
        <aside class="quick-panel" aria-label="${escapeHtml(t.aria.quickAccess)}">
            <h3>${escapeHtml(t.quick.title)}</h3>
            <ul>
                <li>📝<a href="https://blog.raihanbarishifa.net" target="_blank" rel="noopener noreferrer">${escapeHtml(t.quick.blog)}</a></li>
                <li>🔍<a href="https://www.raihanbarishifa.net/pencarian.html" target="_blank" rel="noopener noreferrer">${escapeHtml(t.quick.search)}</a></li>
                <li>✉️<a href="mailto:ask@raihanbarishifa.net">${escapeHtml(t.quick.email)}</a></li>
            </ul>
        </aside>
    </section>

    <section class="search-panel" aria-label="${escapeHtml(t.aria.searchDrawer)}">
        <p
            id="filter-status"
            class="filter-status"
            data-status-all="${escapeHtml(t.filter.all)}"
            data-status-results="${escapeHtml(t.filter.results)}">${escapeHtml(t.filter.all)}</p>
    </section>

    <section id="tentang" class="section">
        <h2>${escapeHtml(t.about.title)}</h2>
        <p>${escapeHtml(t.about.body)}</p>
    </section>

    <section id="blog" class="section">
        <h2>${escapeHtml(t.blogTitle)}</h2>
        <div class="card-grid filterable" data-group="Artikel">
${renderBlogCards(t)}
        </div>
    </section>

    <section id="proyek" class="section">
        <h2>${escapeHtml(t.projectsTitle)}</h2>
        <div class="list-grid filterable" data-group="Proyek">
${renderProjectItems(t)}
        </div>
    </section>

    <section id="produk" class="section">
        <h2>${escapeHtml(t.productsTitle)}</h2>
        <div class="card-grid filterable" data-group="Produk">
${renderProductCards(t)}
        </div>
    </section>

    <section id="kontak" class="section">
        <h2>${escapeHtml(t.contactTitle)}</h2>
        <div class="contact-grid">
            <a href="mailto:ask@raihanbarishifa.net">${escapeHtml(t.contact.email)}</a>
            <a href="https://facebook.com/raihan.bari.09" target="_blank" rel="noopener noreferrer">${escapeHtml(t.contact.facebook)}</a>
            <a href="https://twitter.com/raihanbari98" target="_blank" rel="noopener noreferrer">${escapeHtml(t.contact.twitter)}</a>
            <a href="https://instagram.com/raihanbari98" target="_blank" rel="noopener noreferrer">${escapeHtml(t.contact.instagram)}</a>
            <a href="https://tiktok.com/@raihanbari98" target="_blank" rel="noopener noreferrer">${escapeHtml(t.contact.tiktok)}</a>
            <a href="https://linkedin.com/in/raihan-bari" target="_blank" rel="noopener noreferrer">${escapeHtml(t.contact.linkedin)}</a>
        </div>
    </section>
</main>

<footer role="contentinfo">
    <p>${escapeHtml(t.footer)}</p>
</footer>

<script src="${assetPrefix}scroll-center.js"></script>
</body>
</html>
`;
};

const writePage = async ({ locale, relativePath, canonical, assetPrefix }) => {
    const outputPath = path.join(rootDir, relativePath);
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, renderPage({ locale, canonical, assetPrefix }), "utf8");
};

await writePage({
    locale: "id",
    relativePath: "index.html",
    canonical: `${siteUrl}/`,
    assetPrefix: ""
});

for (const language of languages) {
    await writePage({
        locale: language.code,
        relativePath: path.join(language.code, "index.html"),
        canonical: languageUrl(language.code),
        assetPrefix: "../"
    });
}
