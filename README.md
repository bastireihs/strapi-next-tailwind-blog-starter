# Strapi, Next.js, and Tailwind CSS Blog Starter

This repository contains two main projects: a frontend application built with Next.js and a CMS (Content Management System) built with Strapi.

## Introduction

This project aims to provide a seamless integration between a Next.js frontend and a Strapi backend, allowing for easy content management and dynamic content delivery.

The blog website features a main page that showcases the latest article as a hero, followed by sections with featured and recent articles displayed as cards. There is a categories subpage where all articles are shown, and you can filter them by categories. Additionally, there is an about page and a theme switch feature.

## Prerequisites

Ensure you have the following installed:

- Node.js
- npm or yarn

# Setup

To set up the project, follow these steps:

## 1. Clone the repository

```bash
git clone https://github.com/bastireihs/strapi-next-tailwind-blog-starter.git
cd strapi-next-tailwind-blog-starter
```

## 2. CMS (Strapi Backend)

Navigate to the `cms` directory and install the dependencies:

```bash
cd cms/
npm install
```

Create an `.env` file from the example file:

```bash
cp .env.example .env
```

In the `.env` file, set the secret variables. You can generate the values using `openssl rand -base64 32`:

```properties
# Server
HOST=0.0.0.0
PORT=1337

# Secrets
APP_KEYS=$(openssl rand -base64 32)
API_TOKEN_SALT=$(openssl rand -base64 32)
ADMIN_JWT_SECRET=$(openssl rand -base64 32)
TRANSFER_TOKEN_SALT=$(openssl rand -base64 32)

# Database
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
JWT_SECRET=$(openssl rand -base64 32)
```

Run the following command for each secret variable to generate a key:

```bash
openssl rand -base64 32
```

### Start Strapi CMS

To start the Strapi CMS, run:

```bash
npm run develop
```

Visit `http://localhost:1337/admin/auth/register-admin` to register an admin user. Follow the steps to complete the setup.

### Generate API Token

1. In the Strapi admin panel, navigate to `Settings` > `API Tokens`.
2. Click on `Create new API Token`.
3. Fill in the details and click `Save`.
4. Copy the generated API token.

Add the API token to the frontend `.env` file.

### Set Permissions

1. In the Strapi admin panel, navigate to `Plugins` > `Users & Permissions`.
2. Click on `Roles` and select the `Authenticated` role.
3. Under `Permissions`, enable `find` and `findone` for the `article` content type.
4. Save the changes.

## 3. Frontend (Next.js)

Navigate to the `frontend` directory and install the dependencies:

```bash
cd frontend/
npm install
```

Create an `.env` file from the example file:

```bash
cp .env.example .env
```

Add the API token from Strapi to the frontend `.env` file.

### Start the Frontend

To start the frontend development server, run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
