const { default: database } = require("infra/database");

async function cleanDatabase() {
  await database.query(
    "drop schema if exists public cascade; create schema public;",
  );
}

beforeAll(async () => {
  await cleanDatabase();
});

test("DELETE to /api/v1/migrations should return 405", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "DELETE",
  });
  expect(response.status).toBe(405);
});

test("PUT to /api/v1/migrations should return 405", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "PUT",
  });
  expect(response.status).toBe(405);
});

test("PATCH to /api/v1/migrations should return 405", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "PATCH",
  });
  expect(response.status).toBe(405);
});

test("HEAD to /api/v1/migrations should return 405", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "HEAD",
  });
  expect(response.status).toBe(405);
});

test("OPTIONS to /api/v1/migrations should return 405", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "OPTIONS",
  });
  expect(response.status).toBe(405);
});

test("COPY to /api/v1/migrations should return 405", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "COPY",
  });
  expect(response.status).toBe(405);
});

test("LINK to /api/v1/migrations should return 405", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "LINK",
  });
  expect(response.status).toBe(405);
});

test("UNLINK to /api/v1/migrations should return 405", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "UNLINK",
  });
  expect(response.status).toBe(405);
});

test("PURGE to /api/v1/migrations should return 405", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "PURGE",
  });
  expect(response.status).toBe(405);
});

test("LOCK to /api/v1/migrations should return 405", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "LOCK",
  });
  expect(response.status).toBe(405);
});

test("UNLOCK to /api/v1/migrations should return 405", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "UNLOCK",
  });
  expect(response.status).toBe(405);
});

test("PROPFIND to /api/v1/migrations should return 405", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "PROPFIND",
  });
  expect(response.status).toBe(405);
});

test("PROPPATCH to /api/v1/migrations should return 405", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "PROPPATCH",
  });
  expect(response.status).toBe(405);
});

test("MKCOL to /api/v1/migrations should return 405", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "MKCOL",
  });
  expect(response.status).toBe(405);
});

test("COPY to /api/v1/migrations should return 405", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "COPY",
  });
  expect(response.status).toBe(405);
});

test("MOVE to /api/v1/migrations should return 405", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "MOVE",
  });
  expect(response.status).toBe(405);
});
