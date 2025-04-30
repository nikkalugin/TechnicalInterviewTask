# TechnicalInterviewTask

Цей проект містить автоматизовані тести для UI та API, написані з використанням Playwright та TypeScript.

## Технології

- Playwright 1.40+
- TypeScript 5+
- Node.js 18+

## Встановлення

1. Переконайтеся, що у вас встановлено Node.js версії 18 або вище
2. Клонуйте репозиторій:
   ```bash
   git clone [repository-url]
   cd [repository-name]

3. Встановіть залежності:
    ```bash
    npm install

## Структура проекту

project-root/
├── tests/
│   ├── ui/                            # UI тести для saucedemo.com
│   │   └── saucedemoTests.spec.ts     # Тести авторизації
│   │
│   └── api/                    # API тести для jsonplaceholder
│       └── apiTests.spec.ts    # CRUD операції для постів
│
│── fixtures
│    ├── test-data.ts   # фікстури для api тестів
│
├── docs/
│   ├── TEST-CASES-DOCUMENTATION.md        # Документація тест кейсів
│   └── BUG-REPORT.md                      # Приклад звіту про баг
│
├── playwright.config.ts     # Конфігурація Playwright
├── package.json
└── README.md