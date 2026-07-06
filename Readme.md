# Connect Cart Monorepo

This is a **monorepo** for the Connect Cart project, managed with [Turborepo](https://turbo.build/), [pnpm workspaces](https://pnpm.io/workspaces), and TypeScript.  

It contains:

- `packages/db` — Shared database package using [Prisma](https://www.prisma.io/), exposing types and enums for frontend and backend.  
- `apps/backend` — NestJS backend API.  
- `apps/frontend` — Vue 3 frontend with Vite.  

The repo is fully **workspace-aware** and supports incremental builds and caching with Turbo.

## Requirements

- Node.js >= 20.x  
- pnpm >= 8.x  
- PostgreSQL or your preferred database supported by Prisma  

## Setup

Clone the repo:

```bash
git clone <repo-url>
cd connect-cart
```

# db
1. after schema change run pnpm generate
   
   a. pnpm migrate to create migration for push 

   b. pnpm push to reflect schema on database
      
   c. pnpm build to create types/enums for projects