import { onchainTable } from "ponder";

export const messages = onchainTable("messages", (t) => ({
  id: t.integer().primaryKey(),
  author: t.hex(),
  content: t.text(),
  timestamp: t.bigint(),
  exists: t.boolean(),
}));