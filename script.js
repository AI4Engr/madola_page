const translations = {
    en: {
        "nav.features": "Features",
        "nav.comparison": "Comparison",
        "nav.github": "GitHub",
        "nav.try": "Try It Online",
        "hero.title": "Math-Driven Coding with <br> Automatic Documentation",
        "hero.subtitle": "MADOLA integrates mathematical notation, computation, documentation, and code generation within a single file. It’s not another wheel — it’s the hub connecting them all.",
        "hero.get_started": "Get Started",
        "hero.view_github": "View on GitHub",
        "demo.title": "Calculating π Using the Leibniz Series",
        "demo.result": "Result:",
        "demo.source_title": "Source Code",
        "demo.cpp_title": "Generated C++ code and can be compiled to WASM module",
        "demo.import_title": "Import WASM module and gain 20X speed",
        "demo.output_title": "HTML Output",
        "feat.math.title": "Mathematical Syntax",
        "feat.math.desc": "Write equations exactly as you would on paper. MADOLA understands standard mathematical notation natively.",
        "feat.lit.title": "Literate Programming",
        "feat.lit.desc": "Built-in documentation generation. Create HTML with LaTeX-style formatting and equations directly from your code.",
        "feat.perf.title": "High Performance",
        "feat.perf.desc": "WASM execution can be 5–25× faster than standard AST evaluation. Compile directly to C++ or WebAssembly.",
        "feat.cross.title": "Cross-Platform",
        "feat.cross.desc": "Works on Windows, Linux, and macOS. Run locally or deploy to the web with native WASM support.",
        "comp.title": "Why MADOLA?",
        "comp.feature": "Feature",
        "comp.madola": "MADOLA",
        "comp.latex": "LaTeX / Typst",
        "comp.python": "Python / Julia",
        "comp.mathcad": "Mathcad",
        "comp.syntax": "Mathematical Syntax",
        "comp.native": "✅ Native",
        "comp.excellent": "✅ Excellent",
        "comp.library": "⚠️ Library-based",
        "comp.visual": "✅ Visual",
        "comp.exec": "Executable Code",
        "comp.yes": "✅ Yes",
        "comp.static": "❌ Static",
        "comp.web": "Web Export (WASM)",
        "comp.toolchain": "⚠️ Toolchain",
        "comp.heavy": "⚠️ Heavy",
        "comp.no": "❌ No",
        "comp.open": "Open Source",
        "comp.apache": "✅ Apache 2.0",
        "comp.prop": "❌ Proprietary",
        "footer.desc": "Mathematical Domain Language for the modern era.",
        "footer.resources": "Resources",
        "footer.docs": "Documentation",
        "footer.guide": "Language Guide",
        "footer.community": "Community",
        "footer.contribute": "Contribute",
        "footer.copyright": "&copy; 2025 MADOLA Project. Released under the Apache License."
    },
    zh: {
        "nav.features": "特性",
        "nav.comparison": "对比",
        "nav.github": "GitHub",
        "nav.try": "在线尝试",
        "hero.title": "数学编程<br>和自动文档生成",
        "hero.subtitle": "MADOLA 将数学符号、计算、文档和代码生成集成在一个文件中。它不是重新造轮子——它是连接它们的枢纽。",
        "hero.get_started": "开始使用",
        "hero.view_github": "查看 GitHub",
        "demo.title": "使用莱布尼茨级数计算 π",
        "demo.result": "结果：",
        "demo.source_title": "源代码",
        "demo.cpp_title": "生成的 C++ 代码，可编译为 WASM 模块",
        "demo.import_title": "导入 WASM 模块，获得 20 倍速度提升",
        "demo.output_title": "HTML 输出",
        "feat.math.title": "数学语法",
        "feat.math.desc": "像在纸上一样书写公式。MADOLA 原生理解标准数学符号。",
        "feat.lit.title": "文学编程",
        "feat.lit.desc": "内置文档生成。直接从代码生成带有 LaTeX 风格格式和公式的 HTML。",
        "feat.perf.title": "高性能",
        "feat.perf.desc": "WASM 执行速度比标准 AST 评估快 5–25 倍。直接编译为 C++ 或 WebAssembly。",
        "feat.cross.title": "跨平台",
        "feat.cross.desc": "支持 Windows、Linux 和 macOS。本地运行或通过原生 WASM 支持部署到 Web。",
        "comp.title": "为什么选择 MADOLA？",
        "comp.feature": "特性",
        "comp.madola": "MADOLA",
        "comp.latex": "LaTeX / Typst",
        "comp.python": "Python / Julia",
        "comp.mathcad": "Mathcad",
        "comp.syntax": "数学语法",
        "comp.native": "✅ 原生",
        "comp.excellent": "✅ 优秀",
        "comp.library": "⚠️ 基于库",
        "comp.visual": "✅ 可视化",
        "comp.exec": "可执行代码",
        "comp.yes": "✅ 是",
        "comp.static": "❌ 静态",
        "comp.web": "Web 导出 (WASM)",
        "comp.toolchain": "⚠️ 工具链",
        "comp.heavy": "⚠️ 繁重",
        "comp.no": "❌ 否",
        "comp.open": "开源",
        "comp.apache": "✅ Apache 2.0",
        "comp.prop": "❌ 专有",
        "footer.desc": "现代数学领域语言。",
        "footer.resources": "资源",
        "footer.docs": "文档",
        "footer.guide": "语言指南",
        "footer.community": "社区",
        "footer.contribute": "贡献",
        "footer.copyright": "&copy; 2025 MADOLA Project. Apache 协议发布。"
    }
};

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    localStorage.setItem('madola-lang', lang);
    document.documentElement.lang = lang;
}

function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.toggle('dark-theme');
    localStorage.setItem('madola-theme', isDark ? 'dark' : 'light');
    updateThemeIcon(isDark);
}

function updateThemeIcon(isDark) {
    const icon = document.getElementById('theme-icon');
    if (icon) {
        icon.textContent = isDark ? '☀️' : '🌙';
    }
}

function setAccentColor(color) {
    document.body.setAttribute('data-accent', color);
    localStorage.setItem('madola-accent', color);
    // Close dropdown
    document.getElementById('color-dropdown').classList.remove('show');
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Theme
    const savedTheme = localStorage.getItem('madola-theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-theme');
        updateThemeIcon(true);
    } else {
        updateThemeIcon(false);
    }

    // Initialize Language
    const savedLang = localStorage.getItem('madola-lang') || 'en';
    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
        langSelect.value = savedLang;
        langSelect.addEventListener('change', (e) => setLanguage(e.target.value));
    }
    setLanguage(savedLang);

    // Initialize Accent Color
    const savedAccent = localStorage.getItem('madola-accent') || 'teal';
    setAccentColor(savedAccent);

    // Theme Toggle Listener
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Color Picker Listeners
    const colorBtn = document.getElementById('color-btn');
    const colorDropdown = document.getElementById('color-dropdown');

    if (colorBtn && colorDropdown) {
        colorBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            colorDropdown.classList.toggle('show');
        });

        document.addEventListener('click', (e) => {
            if (!colorBtn.contains(e.target) && !colorDropdown.contains(e.target)) {
                colorDropdown.classList.remove('show');
            }
        });

        document.querySelectorAll('.color-option').forEach(btn => {
            btn.addEventListener('click', () => {
                setAccentColor(btn.getAttribute('data-color'));
            });
        });
    }

    // Mobile Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
});
