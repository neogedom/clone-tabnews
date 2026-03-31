import migrationRunner from "node-pg-migrate";
import { join } from "node:path";
import database from "infra/database";

export default async function migrations(request, response) {
  let dbClient;
  try {
    dbClient = await database.getNewClient();

    const defaultMigrationOptions = {
      dbClient: dbClient,
      dryRun: true,
      dir: join("infra", "migrations"),
      direction: "up",
      verbose: true,
      migrationsTable: "pgmigrations",
      schema: "public",
    };

    const allowedMethods = ["GET", "POST"];

    if (!allowedMethods.includes(request.method)) {
      console.error(
        `Método ${request.method} não permitido para /api/v1/migrations`,
      );
      if (dbClient) {
        await dbClient.end();
      }
      return response.status(405).end();
    }

    if (request.method === "GET") {
      const pendingMigrations = await migrationRunner(defaultMigrationOptions);
      if (dbClient) {
        await dbClient.end();
      }
      return response.status(200).json(pendingMigrations);
    }

    if (request.method === "POST") {
      const migratedMigrations = await migrationRunner({
        ...defaultMigrationOptions,
        dryRun: false,
      });

      if (dbClient) {
        await dbClient.end();
      }

      if (migratedMigrations.length > 0) {
        return response.status(201).json(migratedMigrations);
      }

      return response.status(200).json(migratedMigrations);
    }
  } catch (error) {
    console.error("Erro ao executar migrações:", error);
    return response.status(500).json({ error: "Erro ao executar migrações" });
  } finally {
    if (dbClient) {
      await dbClient.end();
    }
  }
}
