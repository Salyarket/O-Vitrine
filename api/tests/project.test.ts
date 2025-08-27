// api/tests/project.test.ts
import { test } from "node:test";
import assert from "node:assert";
import app from "../src/app";
import request from "supertest";

test("GET /api/projects should return 200 and an array", async () => {
  const res = await request(app).get("/api/projects");

  // On vérifie que la route répond bien
  assert.strictEqual(res.status, 200);
  assert.ok(Array.isArray(res.body));
});
