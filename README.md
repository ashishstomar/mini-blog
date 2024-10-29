# Blog App

A blog application built with Node.js, Express, EJS, JWT, and MongoDB. It allows users to create, view, and comment on blog posts, using JWT for secure authentication.

## Features

- **User Authentication**: Secured with JWT
- **Blog Management**: Create, read, update, and delete posts
- **Comments**: Users can comment on posts
- **File Uploads**: Supports cover image uploads using Multer
- **Environment Configuration**: Managed with dotenv

## Technologies

- **Node.js** - Server-side JavaScript runtime
- **Express** - Web framework for API creation
- **EJS** - Templating engine for HTML rendering
- **MongoDB & Mongoose** - Database and object modeling
- **JWT (jsonwebtoken)** - Authentication
- **Multer** - File upload middleware

## Installation

1. **Clone the Repository**:

   ```bash
   git clone <repo-url>
   cd blog-app
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory:

   ```plaintext
   MONGO_URL=your_mongo_database_uri
   JWT_SECRET=your_jwt_secret
   PORT=your_preferred_port
   ```

4. **Run the Server**:
   - Development: `npm run dev`
   - Production: `npm start`

## Scripts

- `npm start` - Runs the app with Node.js
- `npm run dev` - Runs the app with Nodemon for development
