# Task Management Backend

This is the backend for the **Task Management System**, built using **Node.js, TypeScript, Express, Postgres, and Prisma**. It provides authentication and CRUD operations for managing tasks.

## Features
- User authentication (Register, Login)
- CRUD operations for tasks (title, description, status, due date)
- Postgres database with Prisma ORM
- RESTful API with Express

## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Docker](https://www.docker.com/) (if running Postgres in a container)
- [Postgres](https://www.postgres.com/) (if running locally)

## Installation & Setup

### 1. Clone the Repository
```sh
git clone https://github.com/sandeep0009/task-management-backend.git
cd task-management-backend
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory and add the following:
```env
PORT=4000
DATABASE_URL="Postgres://username:password@localhost:3306/task_management"
JWT_SECRET="your_secret_key"
```
- Replace `username`, `password`, and `task_management` with your Postgres credentials.
- `JWT_SECRET` is used for authentication.

### 4. Set Up the Database
#### If using Docker:
Run Postgres in a container:
```sh
docker run --name Postgres-db -e Postgres_ROOT_PASSWORD=root -e Postgres_DATABASE=task_management -p 3306:3306 -d Postgres:latest
```

#### If using a local Postgres database:
Ensure Postgres is running and create a database named `task_management`.

Then, run database migrations:
```sh
npx prisma migrate dev --name init
```

### 5. Start the Server
```sh
npm run dev
```
The server will start at `http://localhost:4000`.

## API Endpoints

### Authentication
- **POST** `/signup` - Register a new user
- **POST** `/login` - Login and get a JWT token

### Tasks (Requires Authentication)
- **GET** `/tasks` - Get all tasks
- **POST** `/tasks` - Create a new task
- **PUT** `/tasks/:id` - Update a task
- **DELETE** `/tasks/:id` - Delete a task

## Deployment (Render)
If deploying on Render, ensure you:
1. Add environment variables in Render Dashboard.
2. Use a cloud-hosted Postgres database like [PlanetScale](https://planetscale.com/).
3. Deploy the backend as a web service on Render.

## License
MIT License

