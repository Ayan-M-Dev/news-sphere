## Stack: Node.js (TypeScript), React/Next.js (TypeScript), Redis, Bull MQ, Lingo CLI/API, OpenAI API, PostgreSQL/MongoDB

## 1) Purpose & Competencies

Creating a multilingual newsletter campaign system that scrapes content, processes it with AI, localizes it using Lingo, and delivers personalized newsletters to global contacts.

It assesses:

● Backend design (REST API, validation, business logic, async job processing, tests)  
● Frontend implementation (React/Next.js UI/UX, accessibility, state mgmt, multilingual UI)  
● Data modeling & persistence (contacts, campaigns, content, translations)  
● Code quality (readability, structure, security basics, error handling)  
● Integration skills (Lingo CLI/API, OpenAI API, scraping services, email services)  
● Optional AWS skills (IaC, serverless/container packaging, storage, queues)

Target time: ~13–16 hours (hackathon duration). Core MVP can be done in 8–10 hours; extras are optional.

## 2) Scenario (What to build)

Build "Locale Letter" — a multilingual newsletter campaign platform:

**Campaign Creation Flow:**

1. **User creates campaign** by specifying:

   - Topics of interest (e.g., "AI news", "EdTech", "Digital SaaS")
   - Source URLs for each topic (blogs, RSS feeds)
   - Style preferences (brief summary, long-form, bullet points)
   - Campaign frequency (daily, weekly, bi-weekly, monthly)

2. **User uploads/imports contacts** with basic information:

   - Name, Email, Phone Number, City, Country
   - (No topics assigned to contacts - topics are campaign-level)

3. **Campaign Engine Pipeline** (automated):

   - **Scraping**: Scrape content from specified source URLs (via Apify or custom scraper)
   - **AI Processing**: Feed scraped data to OpenAI to generate newsletter content based on topics and style preferences
   - **Segmentation & Relevance**: Segment and check relevance based on:
     - Topic matching (content relevance to campaign topics)
     - Hot/trending topics detection
   - **Localization**: Use Lingo CLI/API to translate content based on contact's Country/City metadata
   - **Email Formatting**: Use Gemini (or similar) to format content into HTML email templates
   - **Queue & Send**: Queue campaigns via Bull MQ/Redis and send emails to contacts based on schedule

4. **Analytics**: Track campaign metrics (open rates, click-through by language/region)

### Business Rules (deliberately simplified for the exercise)

These are not production-grade—use them exactly as defined here.

● **Content Scraping**  
 ○ Support RSS feeds and blog URLs (limit to 2–3 source types for MVP)  
 ○ Scrape frequency: on-demand or scheduled (daily/weekly based on campaign config)  
 ○ Store raw content with metadata (source URL, publish date, title, body)

● **User Accounts**  
 ○ Each user/organization has their own account  
 ○ Users can create multiple campaigns with different topics and settings

● **Campaigns & Topics**  
 ○ Topics are specified when creating a campaign (not stored separately)  
 ○ Each campaign can have multiple topics, each with:

- Topic name (e.g., "AI news", "EdTech")
- Source URLs (RSS feeds or blog URLs)
- Style preference (brief summary, long-form, bullet points)
  ○ Topics are campaign-specific and used to guide content generation

● **Contacts**  
 ○ Contacts only contain basic information: Name, Email, Phone, City, Country  
 ○ No topics are assigned to contacts  
 ○ Language preference is inferred from Country (e.g., India → Hindi, Spain → Spanish, USA → English)

● **AI Processing**  
 ○ Use OpenAI API (GPT-4 or GPT-3.5-turbo) for content summarization/generation  
 ○ Style options: "brief summary" (100–200 words), "long-form" (500–800 words), "bullet points" (5–10 items)  
 ○ Topic relevance scoring: classify scraped content against campaign topics (0–1 score)  
 ○ Trending detection: simple keyword frequency analysis over last 7 days

● **Segmentation & Relevance**  
 ○ Segment content based on: topic matching (content relevance to campaign topics), hot/trending topics  
 ○ All contacts in a campaign receive newsletters, but content is personalized by:

- Location-based translation (Country/City → Language)
- Relevance filtering (most relevant content per contact's inferred interests)
  ○ Default language mapping: Country → Language (e.g., India → Hindi, Spain → Spanish, USA → English)  
  ○ Fallback: if translation fails or language not supported, use English

● **Localization (Lingo Integration)**  
 ○ Use Lingo CLI or Lingo API to translate newsletter content  
 ○ Target languages: minimum 2–3 for MVP (English, Hindi, Spanish recommended)  
 ○ Translate: email subject, body content, template strings  
 ○ Store translations for reuse (cache translated content by source + target language)

● **Campaign Scheduling**  
 ○ Frequency options: daily, weekly, bi-weekly, monthly  
 ○ Time zone: use contact's inferred timezone from Country/City (or default to UTC)  
 ○ Queue management: use Bull MQ with Redis for job scheduling  
 ○ Retry logic: 3 retries with exponential backoff for failed email sends

● **Email Personalization**  
 ○ Template tokens: `{{name}}`, `{{city}}`, `{{country}}`, `{{topic}}`  
 ○ HTML email generation with responsive design  
 ○ Plain text fallback for email clients that don't support HTML

## 3) Deliverables

● **Backend (Node.js + TypeScript)**  
 ○ REST API (see OpenAPI below)  
 ○ Validation (e.g., zod schemas shared client/server)  
 ○ Persistence: PostgreSQL or MongoDB (SQLite acceptable for local dev only)  
 ○ Background job processing: Bull MQ + Redis for campaign queue  
 ○ Integration: Lingo CLI/API for translations, OpenAI API for content processing  
 ○ Scraping service: Apify integration or custom scraper (RSS parser minimum)  
 ○ Email service: SendGrid, Resend, or SMTP integration  
 ○ Unit tests for AI processing logic, segmentation, translation caching & at least one endpoint  
 ○ Structured logging; comprehensive error handling with retries

● **Frontend (React/Next.js + TypeScript)**  
 ○ Pages: Contacts (import/list), Topics & Sources (configure), Campaigns (create/view), Dashboard (metrics), Newsletter Preview  
 ○ Use fetch/axios + React Query (or SWR) for data fetching  
 ○ Multilingual UI: support UI in 2–3 languages (English, Hindi, Spanish)  
 ○ Accessible forms/tables (labels, keyboard nav, focus states, ARIA attributes)  
 ○ File upload for CSV contact import

● **Docs**  
 ○ README.md: setup, run, decisions, trade-offs, time spent, Lingo integration details  
 ○ DECISIONS.md (short): key decisions, Lingo usage, what you would do next  
 ○ API documentation (OpenAPI/Swagger)

● **(Optional) Advanced Features**  
 ○ Analytics dashboard: open rates by language/region, click-through by format  
 ○ A/B testing: different styles (brief vs long) by region/language  
 ○ PDF export of newsletters  
 ○ Webhook support for campaign events

● **(Optional) AWS**  
 ○ IaC (CDK/SAM/Terraform) to deploy API (Lambda/API Gateway) and host UI (S3/CloudFront)  
 ○ RDS (Postgres) or DynamoDB for persistence  
 ○ ElastiCache (Redis) for Bull MQ  
 ○ S3 for storing scraped content and generated newsletters  
 ○ LocalStack support is a plus

● **(Optional) CI**  
 ○ GitHub Actions for lint, typecheck, test

## 4) Sample Data (use to seed the app)

### Users/Accounts (users.json)

```json
[
  {
    "id": "user-001",
    "email": "marketer@example.com",
    "name": "Tech Marketing Org",
    "organization": "Tech Marketing Org",
    "createdAt": "2025-01-01T00:00:00Z"
  }
]
```

### Contacts (contacts.json)

```json
[
  {
    "id": "c-001",
    "userId": "user-001",
    "name": "Rajesh Kumar",
    "email": "rajesh.kumar@example.com",
    "phone": "+91-9876543210",
    "city": "Mumbai",
    "country": "India"
  },
  {
    "id": "c-002",
    "userId": "user-001",
    "name": "Maria Garcia",
    "email": "maria.garcia@example.com",
    "phone": "+34-612345678",
    "city": "Madrid",
    "country": "Spain"
  },
  {
    "id": "c-003",
    "userId": "user-001",
    "name": "John Smith",
    "email": "john.smith@example.com",
    "phone": "+1-555-123-4567",
    "city": "San Francisco",
    "country": "USA"
  }
]
```

### Sample Scraped Content (content.json)

```json
[
  {
    "id": "content-001",
    "campaignId": "campaign-001",
    "topicName": "AI news",
    "sourceUrl": "https://techcrunch.com/2025/01/15/ai-breakthrough/",
    "title": "New AI Breakthrough in Language Models",
    "body": "Researchers have announced a significant advancement in large language models...",
    "publishedAt": "2025-01-15T10:00:00Z",
    "scrapedAt": "2025-01-15T12:00:00Z",
    "relevanceScore": 0.95
  }
]
```

### Sample Campaign (campaign.json)

```json
{
  "id": "campaign-001",
  "userId": "user-001",
  "name": "Weekly AI & EdTech Newsletter",
  "topics": [
    {
      "name": "AI news",
      "sources": [
        {
          "url": "https://techcrunch.com/tag/artificial-intelligence/feed/",
          "type": "rss"
        },
        {
          "url": "https://www.theverge.com/ai-artificial-intelligence",
          "type": "blog"
        }
      ],
      "style": "brief summary"
    },
    {
      "name": "EdTech",
      "sources": [
        {
          "url": "https://www.edweek.org/technology/rss",
          "type": "rss"
        }
      ],
      "style": "bullet points"
    }
  ],
  "frequency": "weekly",
  "scheduleTime": "09:00",
  "timezone": "UTC",
  "status": "active",
  "createdAt": "2025-01-10T00:00:00Z",
  "lastRunAt": "2025-01-17T09:00:00Z",
  "nextRunAt": "2025-01-24T09:00:00Z"
}
```

## 5) API Contract (OpenAPI 3.1)

Use this as a guide; you can extend it.

```yaml
openapi: 3.1.0
info:
  title: Locale Letter API
  version: 1.0.0
servers:
  - url: http://localhost:4000
components:
  securitySchemes:
    bearerAuth:
      type: http
      scheme: bearer
  schemas:
    User:
      type: object
      required: [id, email, name]
      properties:
        id: { type: string }
        email: { type: string, format: email }
        name: { type: string }
        organization: { type: string }
        createdAt: { type: string, format: date-time }
    Contact:
      type: object
      required: [id, userId, name, email, country]
      properties:
        id: { type: string }
        userId: { type: string }
        name: { type: string }
        email: { type: string, format: email }
        phone: { type: string }
        city: { type: string }
        country: { type: string }
    Source:
      type: object
      required: [url, type]
      properties:
        url: { type: string, format: uri }
        type: { type: string, enum: [rss, blog] }
    CampaignTopic:
      type: object
      required: [name, sources, style]
      properties:
        name: { type: string }
        sources:
          type: array
          items: { $ref: "#/components/schemas/Source" }
        style: { type: string, enum: [brief summary, long-form, bullet points] }
    ScrapedContent:
      type: object
      properties:
        id: { type: string }
        campaignId: { type: string }
        topicName: { type: string }
        sourceUrl: { type: string, format: uri }
        title: { type: string }
        body: { type: string }
        publishedAt: { type: string, format: date-time }
        scrapedAt: { type: string, format: date-time }
        relevanceScore: { type: number, minimum: 0, maximum: 1 }
    Campaign:
      type: object
      required: [userId, name, topics, frequency]
      properties:
        id: { type: string }
        userId: { type: string }
        name: { type: string }
        topics:
          type: array
          items: { $ref: "#/components/schemas/CampaignTopic" }
        frequency: { type: string, enum: [daily, weekly, bi-weekly, monthly] }
        scheduleTime: { type: string, example: "09:00" }
        timezone: { type: string, default: "UTC" }
        status: { type: string, enum: [active, paused, completed] }
        createdAt: { type: string, format: date-time }
        lastRunAt: { type: string, format: date-time }
        nextRunAt: { type: string, format: date-time }
    CampaignRequest:
      type: object
      required: [userId, name, topics, frequency]
      properties:
        userId: { type: string }
        name: { type: string }
        topics:
          type: array
          items: { $ref: "#/components/schemas/CampaignTopic" }
        frequency: { type: string, enum: [daily, weekly, bi-weekly, monthly] }
        scheduleTime: { type: string, example: "09:00" }
        timezone: { type: string, default: "UTC" }
        contactIds:
          type: array
          items: { type: string }
    Newsletter:
      type: object
      properties:
        id: { type: string }
        campaignId: { type: string }
        contactId: { type: string }
        subject: { type: string }
        content: { type: string }
        language: { type: string }
        sentAt: { type: string, format: date-time }
        openedAt: { type: string, format: date-time }
        clickedAt: { type: string, format: date-time }
    CampaignMetrics:
      type: object
      properties:
        campaignId: { type: string }
        totalSent: { type: integer }
        totalOpened: { type: integer }
        totalClicked: { type: integer }
        openRate: { type: number }
        clickRate: { type: number }
        metricsByLanguage:
          type: object
          additionalProperties:
            type: object
            properties:
              sent: { type: integer }
              opened: { type: integer }
              clicked: { type: integer }
security:
  - bearerAuth: []
paths:
  /health:
    get:
      summary: Liveness
      responses:
        "200": { description: OK }
  /users:
    get:
      summary: Get current user (from auth token)
      responses:
        "200":
          description: OK
          content:
            application/json:
              schema: { $ref: "#/components/schemas/User" }
    post:
      summary: Create or register user account
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [email, name]
              properties:
                email: { type: string, format: email }
                name: { type: string }
                organization: { type: string }
      responses:
        "201":
          description: Created
          content:
            application/json:
              schema: { $ref: "#/components/schemas/User" }
  /users/{id}:
    get:
      summary: Get user by id
      parameters:
        - in: path
          name: id
          required: true
          schema: { type: string }
      responses:
        "200":
          description: OK
          content:
            application/json:
              schema: { $ref: "#/components/schemas/User" }
  /contacts:
    get:
      summary: List contacts for current user
      responses:
        "200":
          description: OK
          content:
            application/json:
              schema:
                type: array
                items: { $ref: "#/components/schemas/Contact" }
    post:
      summary: Create or import contacts
      requestBody:
        required: true
        content:
          application/json:
            schema:
              oneOf:
                - { $ref: "#/components/schemas/Contact" }
                - type: array
                  items: { $ref: "#/components/schemas/Contact" }
      responses:
        "201": { description: Created }
  /contacts/import:
    post:
      summary: Import contacts from CSV
      requestBody:
        required: true
        content:
          multipart/form-data:
            schema:
              type: object
              properties:
                file: { type: string, format: binary }
      responses:
        "201": { description: Created }
  /content/scrape:
    post:
      summary: Trigger content scraping for a campaign
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [campaignId]
              properties:
                campaignId: { type: string }
      responses:
        "202": { description: Accepted, scraping queued }
  /content:
    get:
      summary: List scraped content
      parameters:
        - in: query
          name: campaignId
          schema: { type: string }
        - in: query
          name: limit
          schema: { type: integer, default: 50 }
      responses:
        "200":
          description: OK
          content:
            application/json:
              schema:
                type: array
                items: { $ref: "#/components/schemas/ScrapedContent" }
  /campaigns:
    get:
      summary: List campaigns for current user
      responses:
        "200":
          description: OK
          content:
            application/json:
              schema:
                type: array
                items: { $ref: "#/components/schemas/Campaign" }
    post:
      summary: Create campaign
      requestBody:
        required: true
        content:
          application/json:
            schema: { $ref: "#/components/schemas/CampaignRequest" }
      responses:
        "201":
          description: Created
          content:
            application/json:
              schema: { $ref: "#/components/schemas/Campaign" }
  /campaigns/{id}:
    get:
      summary: Get campaign by id
      parameters:
        - in: path
          name: id
          required: true
          schema: { type: string }
      responses:
        "200":
          description: OK
          content:
            application/json:
              schema: { $ref: "#/components/schemas/Campaign" }
    patch:
      summary: Update campaign (e.g., pause/resume)
      parameters:
        - in: path
          name: id
          required: true
          schema: { type: string }
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                status: { type: string, enum: [active, paused, completed] }
      responses:
        "200": { description: OK }
  /campaigns/{id}/run:
    post:
      summary: Manually trigger campaign run
      parameters:
        - in: path
          name: id
          required: true
          schema: { type: string }
      responses:
        "202": { description: Accepted, campaign queued }
  /campaigns/{id}/newsletters:
    get:
      summary: List newsletters for a campaign
      parameters:
        - in: path
          name: id
          required: true
          schema: { type: string }
      responses:
        "200":
          description: OK
          content:
            application/json:
              schema:
                type: array
                items: { $ref: "#/components/schemas/Newsletter" }
  /campaigns/{id}/metrics:
    get:
      summary: Get campaign metrics
      parameters:
        - in: path
          name: id
          required: true
          schema: { type: string }
      responses:
        "200":
          description: OK
          content:
            application/json:
              schema: { $ref: "#/components/schemas/CampaignMetrics" }
  /newsletters/{id}:
    get:
      summary: Get newsletter by id
      parameters:
        - in: path
          name: id
          required: true
          schema: { type: string }
      responses:
        "200":
          description: OK
          content:
            application/json:
              schema: { $ref: "#/components/schemas/Newsletter" }
  /newsletters/{id}/preview:
    get:
      summary: Preview newsletter HTML
      parameters:
        - in: path
          name: id
          required: true
          schema: { type: string }
      responses:
        "200":
          description: OK
          content:
            text/html:
              schema: { type: string }
  /translate:
    post:
      summary: Translate content using Lingo
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [text, targetLanguage]
              properties:
                text: { type: string }
                targetLanguage: { type: string, enum: [en, hi, es, fr, de] }
                sourceLanguage:
                  { type: string, enum: [en, hi, es, fr, de], default: "en" }
      responses:
        "200":
          description: OK
          content:
            application/json:
              schema:
                type: object
                properties:
                  translatedText: { type: string }
                  sourceLanguage: { type: string }
                  targetLanguage: { type: string }
```

**Auth (simplified)**: Accept any Bearer token (non-empty). Bonus: implement real JWT with a static public key.

## 6) Frontend Requirements

● **User Account**: registration/login, view/edit account settings (name, organization), user profile page  
● **Settings/Configuration**:

- Email service configuration (SendGrid, Resend, SMTP) with API keys, from email/name, domain verification
- API keys management (OpenAI, Lingo, Apify) with secure storage
- Integrations status and connection management
- Webhook configuration for campaign events
- Account preferences (notifications, dark mode, language)
  ● **Contacts**: list + import (CSV upload) + add/edit (name, email, phone, city, country) - filtered by current user, no topics assigned  
  ● **Campaigns**: create/edit campaigns with:
- Campaign name and frequency settings
- Add topics (each topic has: name, source URLs (RSS/blog), style preference)
- Select contacts to include in campaign
- View campaign list, pause/resume, manually trigger run
  ● **Content**: view scraped content for campaigns, trigger manual scraping for a campaign, filter by campaign  
  ● **Newsletters**: view sent newsletters for a campaign, preview HTML, filter by language/contact  
  ● **Dashboard**: campaign metrics (open rates, click-through by language/region), recent activity  
  ● **Multilingual UI**: language switcher (English, Hindi, Spanish minimum), translate UI strings using Lingo  
  ● **Accessibility**: labeled inputs, keyboard navigation, visible focus, table headers (`<th scope>`), color-contrast friendly, ARIA labels

## 7) Non-functional Requirements

● TypeScript everywhere  
● Lint/format (eslint + prettier)  
● Validation for all inputs (e.g., zod schemas shared client/server)  
● Basic security: avoid eval/SSRFi, validate/escape, don't log secrets, use Helmet/CORS properly, sanitize user inputs  
● Logging: JSON logs (level, msg, reqId, campaignId, contactId)  
● Error handling: graceful degradation (fallback to English if translation fails), retry logic for external APIs  
● Testing:  
 ○ Unit tests for AI processing logic, segmentation, translation caching, content relevance scoring  
 ○ 1–2 API tests (happy path + validation error)  
 ○ Integration test for campaign flow (scrape → process → translate → send)  
 ○ (Optional) minimal UI test with Playwright
● Performance:  
 ○ Cache translations (avoid re-translating same content)  
 ○ Index database queries (contacts by country, campaigns by status)  
 ○ Rate limiting for external APIs (OpenAI, Lingo, email service)

## 8) Optional AWS Track (bonus)

● **API**: Lambda + API Gateway (Node18+), or ECS Fargate  
● **Storage**: RDS (Postgres) or DynamoDB; ElastiCache (Redis) for Bull MQ  
● **Static UI**: S3 + CloudFront  
● **Content Storage**: S3 for scraped content and generated newsletter HTML  
● **IaC**: CDK/Terraform/SAM with README deploy steps  
● **Observability**: CloudWatch logs/metrics; structured JSON; simple /metrics endpoint  
● **Scheduled Jobs**: EventBridge for campaign scheduling (alternative to Bull MQ cron)

## 9) Grading Rubric (100 pts)

● **Correctness & Business Logic (30)** – content scraping works, AI processing generates relevant content, Lingo integration translates correctly, segmentation groups contacts properly, campaigns send as scheduled  
● **Lingo Integration & Localization (20)** – proper use of Lingo CLI/API, translations are accurate, multilingual support (2–3 languages minimum), fallback logic works  
● **Code Quality & Architecture (15)** – modularity, typing, separation of concerns, async job processing, queue management  
● **Validation, Security & Errors (10)** – schema validation, safe defaults, error responses, input sanitization  
● **Testing (10)** – coverage of core logic (AI processing, segmentation, translation); integration test for campaign flow  
● **Frontend UX & Accessibility (10)** – clean flows, accessible forms/tables, multilingual UI, intuitive navigation  
● **Docs & DevEx (5)** – clear README, scripts, decisions, Lingo integration documentation  
● **Bonus: AWS/IaC/CI/Analytics (up to +10)** – deployable stack, S3 storage, GH Actions, analytics dashboard

## 10) Getting Started (suggested structure)

```
/api
  src/
    domain/ (ai processing, segmentation, translation, types)
    routes/ (contacts, topics, content, campaigns, newsletters)
    jobs/ (scraper, processor, translator, email sender)
    lib/ (db, logger, auth, lingo client, openai client, email service)
    queue/ (bull mq setup, job definitions)
  test/ (unit + integration)
  prisma/ (if using Prisma)
  package.json
/web
  src/
    pages/ (Contacts, Topics, Content, Campaigns, Dashboard, NewsletterPreview)
    api/ (client)
    components/ (Table, Form, Field, LanguageSwitcher)
    lib/ (lingo client for UI translations)
    locales/ (i18n strings)
  package.json
/openapi.yaml
/README.md
/DECISIONS.md
/docker-compose.yml  # optional (Postgres, Redis)
/infra/              # optional (CDK/Terraform/SAM)
/data/               # sample JSON files for seeding
```

### NPM Scripts (example)

● `api:dev`, `api:test`, `api:lint`, `api:typecheck`, `api:queue:worker`  
● `web:dev`, `web:build`  
● `dev` (concurrently run api + web + queue worker)  
● `seed` (import sample contacts and topics)

## 11) What to Submit

● Link to a Git repo (public or with an invited reviewer account)  
● Include:  
 ○ Working app (local instructions, environment variables documented)  
 ○ Tests  
 ○ Sample data files (contacts.json, sources.json) and commands to import/seed  
 ○ Lingo integration demonstration (show translations in action)  
 ○ Short Loom/GIF demo (1–2 minutes) showing: import contacts → configure topics → run campaign → view multilingual newsletters → analytics  
 ○ Highlight Lingo usage in code and documentation

## 12) Notes & Tips

● Keep it production-ish but don't overbuild; use stubs where needed (e.g., mock email service for local dev).  
● Prefer correctness, clarity, and tests over polishing every edge.  
● **Lingo Integration is Key**: The more Lingo products you use (CLI, API, platform features), the more points you get. Document your Lingo usage clearly.  
● Start with 2–3 languages (English, Hindi, Spanish) for MVP; you can add more later.  
● For scraping, RSS feeds are simpler than full web scraping—prioritize RSS for MVP.  
● Use Bull MQ for reliable job processing; Redis can run locally via Docker.  
● Cache translations aggressively—same content shouldn't be translated twice.  
● Show multilingual capability clearly in demo: same newsletter in different languages side-by-side.  
● Analytics don't need to be real-time; batch updates are fine for MVP.
