test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();

  let parsedDate = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toBe(parsedDate);

  expect(responseBody.database_version).toEqual("16.0");
  expect(responseBody.database_version).not.toBeNull();

  const usedConnections = responseBody.used_connections;
  expect(usedConnections).toBeDefined();
  expect(usedConnections).toEqual(1);

  const maxConnections = responseBody.max_connections;
  expect(maxConnections).toBeDefined();
  expect(maxConnections).toBeGreaterThan(0);
});
