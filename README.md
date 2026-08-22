# MORA

**Status (current)**

- Minimal backend present in the `backend/` folder.
- Prisma schema and an initial migration exist under `prisma/`.
- Generated Prisma client is available in `backend/generated/prisma/`.

**Repository structure**

- backend/
  - app.js — application entry / Express app (implementation file)
  - index.js — server bootstrap
  - package.json — backend dependencies and scripts
  - prisma.config.ts — local Prisma config (project-specific)
  - generated/prisma/ — generated Prisma client files
- prisma/
  - schema.prisma — Prisma schema
  - migrations/ — migration history (initial migration included)

**Quicksetup**

1. Install dependencies (from repository root):

```bash
cd backend
npm install
```

2. Provide a database connection string via environment variable `DATABASE_URL` (for example in a `.env` file in `backend/`).

3. Generate the Prisma client (run from `backend/`):

```bash
npx prisma generate --schema=../prisma/schema.prisma
```

4. Apply migrations (development):

```bash
npx prisma migrate deploy --schema=../prisma/schema.prisma
```

Or for development iteratively:

```bash
npx prisma migrate dev --schema=../prisma/schema.prisma
```

5. Start the backend (example):

```bash
node index.js
# or use any npm script defined in backend/package.json, e.g. npm run start
```
