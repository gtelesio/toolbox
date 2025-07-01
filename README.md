# Toolbox Challenge

This project is a fullstack solution for the requested challenge. It includes:
- **Backend**: Node.js + Express (DDD, Robert C. Martin)
- **Frontend**: React + Bootstrap (DDD)
- **Docker Compose** to run both services
- **start.sh script** to start the entire environment
- **Postman collection** with ready-to-use curl requests for backend endpoints (see `backend/postman/toolbox-backend-collection.json`)

## Project Structure

```
toolbox/
│
├── backend/         # Node.js + Express API (DDD)
│   └── postman/     # Postman collection for backend API
├── frontend/        # React + Bootstrap (DDD)
├── docker-compose.yml
├── start.sh
└── README.md
```

## How to start the environment?

1. Make sure you have Docker and Docker Compose installed.
2. Run:

```sh
./start.sh
```

This will start the frontend and backend in separate containers.

## How to run the tests?

- **Backend**:
  ```sh
  cd backend
  npm test
  ```
- **Frontend**:
  ```sh
  cd frontend
  npm test
  ```

## Running all tests (backend and frontend)

You can run all tests for both backend and frontend at once by executing the following command in the root of the project:

```
yarn test
```

This will run the backend and frontend test suites together.

## Notes
- The backend exposes the endpoints `/api/v1/files/data` and `/api/v1/files/list`.
- The frontend consumes the backend and allows filtering by file name.
- Node 20 LTS is used for both projects.
- Optional features included: Redux, Jest, fileName filter, StandardJS linter.
- **You can import the Postman collection from `backend/postman/toolbox-backend-collection.json` to test all backend endpoints easily.**

---

For more details, check the documentation in each subfolder. 