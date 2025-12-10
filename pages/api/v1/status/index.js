import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const dbVersionResult = await database.query("SHOW server_version;");
  const dbVersion = dbVersionResult.rows[0].server_version;

  const databaseName = process.env.POSTGRES_DB;
  const usedConnectionsResult = await database.query({
    text: "SELECT COUNT(*) AS used_connections FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });
  const usedConnections = Number.parseInt(
    usedConnectionsResult.rows[0].used_connections,
  );

  const maxConnectionsResult = await database.query("SHOW max_connections;");
  const maxConnections = Number.parseInt(
    maxConnectionsResult.rows[0].max_connections,
  );

  response.status(200).json({
    updated_at: updatedAt,
    database_version: dbVersion,
    used_connections: usedConnections,
    max_connections: maxConnections,
  });
}

export default status;
