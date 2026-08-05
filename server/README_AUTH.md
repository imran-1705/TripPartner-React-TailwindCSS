# Authentication Endpoints

## Register
POST `/api/register`

Body:
```json
{
  "name": "Your Name",
  "email": "you@example.com",
  "password": "securePassword123"
}
```

Response:
```json
{
  "message": "User registered",
  "token": "<jwt_token>",
  "user": { "id": "...", "name": "...", "email": "..." }
}
```

## Login
POST `/api/login`

Body:
```json
{
  "email": "you@example.com",
  "password": "securePassword123"
}
```

Response:
```json
{
  "message": "Login successful",
  "token": "<jwt_token>",
  "user": { "id": "...", "name": "...", "email": "..." }
}
```

## Profile
GET `/api/profile`

Headers:
```
Authorization: Bearer <jwt_token>
```

Response:
```json
{
  "user": { "id": "...", "name": "...", "email": "..." }
}
```
