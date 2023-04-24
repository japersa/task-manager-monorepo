# Task Manager Monorepo

This monorepo contains the Task Manager application, which includes a user authentication microservice, a task management microservice, and a React frontend app. The project uses Docker to containerize each service and run them together.

## Structure

```bash
task-manager-monorepo/
│
├── user-auth-microservice/
│ ├── controllers/
│ ├── middlewares/
│ ├── models/
│ ├── routes/
│ ├── app.js
│ ├── package.json
│ └── Dockerfile
│
├── task-management-microservice/
│ ├── controllers/
│ ├── middlewares/
│ ├── models/
│ ├── routes/
│ ├── app.js
│ ├── package.json
│ └── Dockerfile
│
├── task-manager-frontend/
│ ├── public/
│ ├── src/
│ ├── .gitignore
│ ├── package.json
│ ├── Dockerfile
│ └── nginx.conf
│
├── .gitignore
├── docker-compose.yml
└── package.json
```

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/japersa/task-manager-monorepo.git
```

2.Change to the repository directory:

```bash
cd task-manager-monorepo
```

3. Install dependencies:

```bash
npm install
```

4. Build and run the containers:

```bash
docker-compose up --build
```

The user authentication microservice will run on port 3001, the task management microservice on port 3002, and the React frontend app on port 8080.

## Usage
Access the frontend application at http://localhost:8080.

# Contributing

We welcome contributions to this project! Here's how you can get started:

1. Fork the repository on GitHub
2. Clone your forked repository to your local machine
3. Create a new branch for your feature or bug fix (`git checkout -b feature/my-new-feature`)
4. Make changes to the codebase, following the project's coding standards and best practices
5. Test your changes thoroughly
6. Commit your changes (`git commit -am 'Add some feature'`)
7. Push your branch to your forked repository (`git push origin feature/my-new-feature`)
8. Submit a new pull request to the main repository

Please be sure to include a detailed description of your changes and any relevant information in your pull request. We will review your changes as soon as possible and provide feedback or merge them into the main repository. Thank you for your contributions!


License
This project is licensed under the MIT License. See the [LICENSE](https://github.com/japersa/task-manager-monorepo/blob/main/LICENSE) file for details.

This README file provides an overview of the monorepo, explains the folder structure, and gives instructions on how to install and run the application. Feel free to modify the contents to better suit your needs.# task-manager-monorepo
