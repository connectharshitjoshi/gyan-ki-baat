# ☕ Gyaan Ki Baat (ज्ञान की बात)

> **Bite-Sized & Deep-Dive Technical Engineering Insights for Developers, Engineers, and Tech Enthusiasts.**

[![GitHub Pages Deployment](https://img.shields.io/badge/Hosted%20On-GitHub%20Pages-blue?logo=github)](https://connectharshitjoshi.github.io/gyan-ki-baat/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![LinkedIn](https://img.shields.io/badge/Connect-LinkedIn-0A66C2?logo=linkedin)](https://www.linkedin.com/in/harshit-joshi-140aa0217/)

---

## 📌 About Gyaan Ki Baat

**Gyaan Ki Baat** is a modern, high-performance static technical blog platform built from scratch without heavy frameworks. Created by **Harshit Joshi**, it breaks down complex computer science and web engineering topics: ranging from HTTP protocols and security architectures to browser rendering pipelines and system design caching patterns.

---

## ✨ Features

- ⚡ **Blazing Fast Performance:** 100% static HTML5, vanilla CSS3, and JavaScript with zero external runtime dependencies.
- 🎨 **Modern Glassmorphic Dark UI:** Premium aesthetic featuring custom HSL color tokens, glowing gradients, Google Fonts (`Outfit` & `Inter`), and custom technical diagrams.
- 🔍 **Real-Time Client-Side Search:** Instant title, excerpt, and tag filtering with zero page reloads.
- 📱 **100% Mobile Responsive:** Adaptive layout with responsive navigation containers across desktop, tablet, and mobile devices.
- 📋 **One-Click Code Snippets:** Built-in copy-to-clipboard functionality for code blocks (Node.js, Playwright, Redis, HTTP headers).
- 🏷️ **LinkedIn Content Playbook:** Accompanied by polished short-form LinkedIn posts for content creators.

---

## 📚 Published Articles

| # | Article Title | Category | Est. Read Time |
| :--- | :--- | :--- | :--- |
| **#1** | [The "Degree vs. Skills" Reality Check](blogs/degree-vs-skills.html) | Career & Growth | 5 min read |
| **#2** | [Cookies, Web Storage, SSL/TLS & HTTPS: The Masterclass Guide](blogs/cookies-vs-session-storage.html) | Web Security | 12 min read |
| **#3** | [HTTP Status Codes Masterclass: 401 vs. 403, 502 vs. 504 & Method Idempotency](blogs/http-status-codes.html) | HTTP Protocols | 14 min read |
| **#4** | [JWT & OAuth 2.0 Security Architecture: Tokens, Payloads & Attacks](blogs/jwt-and-oauth-security.html) | Security & Auth | 15 min read |
| **#5** | [Under the Hood: The Browser Rendering Pipeline (DOM, CSSOM, Layout)](blogs/browser-rendering-pipeline.html) | Web Performance | 13 min read |
| **#6** | [System Design Essentials: Caching Strategies, Eviction & Thundering Herds](blogs/system-design-caching-strategies.html) | System Design | 15 min read |
| **#7** | [How UPI Works Under the Hood: Architecture, NPCI Switch & UPI vs. UPI Apps](blogs/how-upi-works.html) | Fintech & Systems | 14 min read |
| **#8** | [How Instagram & Social Media Apps Scale to 100M+ Concurrent Users](blogs/how-social-media-scales.html) | System Design | 15 min read |
| **#9** | [What Actually Happens When You Pay via Credit Card on Amazon or Zomato?](blogs/credit-card-payment-gateway-lifecycle.html) | Fintech & Payments | 14 min read |
| **#10** | [Real-Time Communication Explained Simply: WebSockets vs. SSE vs. gRPC](blogs/realtime-protocols-websockets-sse-grpc.html) | Web Protocols | 13 min read |
| **#11** | [Virtual Machines vs. Docker Containers Under the Hood](blogs/virtual-machines-vs-docker-containers.html) | DevOps & Linux | 14 min read |
| **#12** | [What If VS Code Was Built by the Indian Government? 🇮🇳](blogs/what-if-vscode-was-built-in-india.html) | Special Edition & Web Tech | 12 min read |
| **#13** | [How Netflix Streams 4K Video Globally Without Crashing the Internet](blogs/how-netflix-streams-video-open-connect.html) | Distributed Systems & Media | 15 min read |

---

## 📁 Repository Structure

```text
gyan-ki-baat/
├── index.html                           # Homepage with article grid, search & category filters
├── README.md                             # Repository documentation
├── eighthpost.txt                        # LinkedIn Post #8 (How Social Media Apps Scale)
├── ninthpost.txt                         # LinkedIn Post #9 (Credit Card Checkout Lifecycle)
├── tenthpost.txt                         # LinkedIn Post #10 (WebSockets vs SSE vs gRPC)
├── eleventhpost.txt                      # LinkedIn Post #11 (VMs vs Docker Containers)
├── thirteenthpost.txt                    # LinkedIn Post #13 (How Netflix Streams 4K Video)
│
├── blogs/                               # Deep-dive long-form technical articles
│   ├── degree-vs-skills.html
│   ├── cookies-vs-session-storage.html
│   ├── http-status-codes.html
│   ├── jwt-and-oauth-security.html
│   ├── browser-rendering-pipeline.html
│   ├── system-design-caching-strategies.html
│   ├── how-upi-works.html
│   ├── how-social-media-scales.html
│   ├── credit-card-payment-gateway-lifecycle.html
│   ├── realtime-protocols-websockets-sse-grpc.html
│   ├── virtual-machines-vs-docker-containers.html
│   ├── what-if-vscode-was-built-in-india.html
│   └── how-netflix-streams-video-open-connect.html
│
├── css/
│   └── style.css                        # Modern CSS design system & media queries
│
├── js/
│   └── main.js                          # Search filtering, card clicks & copy code logic
│
└── assets/
    └── images/                          # Visual diagrams, hero banners & author photo
        ├── harshit.jpg
        ├── degree_vs_skills.jpg
        ├── gyan_ki_baat_hero.jpg
        ├── http_status_codes_hero.jpg
        ├── jwt_anatomy.jpg
        ├── critical_rendering_path.jpg
        ├── caching_patterns.jpg
        └── ...
```

---

## 🛠️ Local Setup & Running

No build steps, node_modules, or compilation required!

1. **Clone the repository:**
   ```bash
   git clone https://github.com/connectharshitjoshi/gyan-ki-baat.git
   cd gyan-ki-baat
   ```

2. **Serve locally using Python:**
   ```bash
   python -m http.server 8000
   ```
   *Then open `http://localhost:8000` in your web browser.*

3. **Or serve using Node `npx serve`:**
   ```bash
   npx serve .
   ```

---

## 🚀 Deploying to GitHub Pages

To host this blog for free under `https://yourusername.github.io/gyan-ki-baat/`:

1. Push code to your `main` branch on GitHub:
   ```bash
   git add .
   git commit -m "Publish Gyaan Ki Baat technical blog platform"
   git push origin main
   ```
2. Go to **Repository Settings** → **Pages**.
3. Under **Source**, select **Deploy from a branch** (`main` / `/ (root)`).
4. Save, and your blog will be live in seconds!

---

## 👤 Author & Connect

**Harshit Joshi**
- 🌐 **LinkedIn:** [harshit-joshi-140aa0217](https://www.linkedin.com/in/harshit-joshi-140aa0217/)
- 💻 **GitHub:** [@connectharshitjoshi](https://github.com/connectharshitjoshi)

---

*⭐ If you find these technical breakdowns helpful, give this repository a star on GitHub!*
