# TripPartner Deployment and Local Setup

## What I set up for you
- Added `.gitignore` to ignore `node_modules`, env files, and build output.
- Added `server/.env.example` and `client/.env.example` for safe environment variable setup.
- Added this `README.md` with commands and deployment guidance.

## Local setup commands
Run from the repository root:

1. Install dependencies

```bash
npm install
npm install --prefix client
npm install --prefix server
```

2. Create local env files

```bash
copy server\.env.example server\.env
copy client\.env.example client\.env
```

3. Edit `server/.env` and set your real MongoDB URI plus JWT secret.
4. Run the app locally

```bash
npm run dev
```

This starts:
- frontend: `http://localhost:5173`
- backend: `http://localhost:5000`

## Production build commands

Build only the frontend:

```bash
npm --prefix client run build
```

Start the backend only:

```bash
npm --prefix server run start
```

Or from root:

```bash
npm start
```

## Environment variables

### `server/.env`
- `PORT=5000`
- `MONGODB_URI=your_mongodb_connection_string`
- `JWT_SECRET=your_jwt_secret`
- `CLIENT_URL=http://localhost:5173`

### `client/.env`
- `VITE_API_URL=http://localhost:5000/api`

## Deployment guidance

### Best simple deployment
- Deploy frontend to: Vercel or Netlify
- Deploy backend to: Render, Railway, Fly.io, or Azure App Service

Set these in the deployed services:
- backend: `MONGODB_URI`, `JWT_SECRET`, `CLIENT_URL`
- frontend: `VITE_API_URL`

### If you want a combined app later
You can also deploy using one service that hosts both:
- build `client` and serve it from Express
- keep backend endpoints under `/api`

## JWT support added
Your backend now includes:
- `/api/register` to create a new user
- `/api/login` to receive a JWT token
- `/api/profile` to fetch user data with a Bearer token

### How to use it
- Register: `POST /api/register` with `{ name, email, password }`
- Login: `POST /api/login` with `{ email, password }`
- Get profile: `GET /api/profile` with header `Authorization: Bearer <token>`

## What to do now
1. Run the install commands above.
2. Create `server/.env` and set a real MongoDB URI and `JWT_SECRET`.
3. Build the frontend for production if you want static hosting:

```bash
npm --prefix client run build
```

4. Run `npm run dev` for local development.
5. Test backend routes:
- `http://localhost:5000/api/health`
- `http://localhost:5000/api/register`
- `http://localhost:5000/api/login`
- `http://localhost:5000/api/profile`

If you want, I can also add frontend login/register pages and connect them to the JWT auth.
