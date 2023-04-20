# Backend API

Exppress boilerplate from: [DevSkills](https://devskills.co).

## Getting started

```sh
git clone https://github.com/gagocarrilloedgar/managemet-system-test
```

Install and start the server (it runs an InMemory DB)

```sh
# Modify .env accordingly
cd app-express & cp .env.example .env

# Install and exectute
npm i
npm run start
```

## Endpoints

### accounts:

- GET: `http://localhost:3001/api/accounts/:id`
  - Get account by id

```sh
curl --location 'http://localhost:3001/api/accounts/b86464c5-4122-4528-be4f-23ed72f5d1e0'
```

### transactions:

- GET: `http://localhost:3001/api/transactions/`
  - List of transactions

```sh
curl --location 'http://localhost:3001/api/transactions'
```

- GET: `http://localhost:3001/api/transactions/:id`
  - Get transaction by its id

```sh
curl --location 'http://localhost:3001/api/transactions/:id'
```

- POST: `http://localhost:3001/api/transactions`
  - Adds a new transaction (if there's not an account creates one)

```sh
curl --location 'http://localhost:3001/api/transactions' \
--header 'Content-Type: application/json' \
--data '{
    "account_id": "f0e98e2c-d90b-11ed-afa1-0242ac120002",
    "amount": 15
}'
```

### check

- GET: `http://localhost:3001/api/ping`

```sh
curl --location 'http://localhost:3001/api/ping'
```
