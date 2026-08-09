# 📚 Learning Logs

---

## feature/project-setup

### Objective

Set up the project foundation.

### Completed

- React + Express setup
- TypeScript
- Folder structure
- Git Flow
- Modular routing
- API response helper
- Global error handling

### Learned

- Feature branches
- Express architecture
- Controllers
- Error middleware

---

## feature/auth-foundation

### Objective

Prepare the authentication layer by setting up the database foundation.

### Completed

- Installed Prisma ORM
- Connected PostgreSQL
- Designed the User model
- Created the first migration
- Generated Prisma Client

### Learned

- Prisma workflow
- Database migrations
- Schema-first development

# Auth Register

## Objective

Allow new users to create an account securely.

## Endpoint

POST /api/v1/auth/register

## Required Fields

- fullName
- username
- email
- password

## Flow

Request
→ Validation
→ Controller
→ Service
→ Duplicate check
→ Password hashing
→ Database
→ Safe response

## Security

- Passwords are hashed before storage.
- Password is never returned in the response.
- Email and username must be unique.
