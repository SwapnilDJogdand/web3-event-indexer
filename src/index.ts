import { ponder } from "ponder:registry";
import { messages } from "ponder:schema";

ponder.on("ExampleContract:MessageCreated", async ({ event, context }) => {
  const { db } = context;

  await db.insert(messages).values({
    id: Number(event.args.id),
    author: event.args.author,
    content: event.args.content,
    timestamp: event.args.timestamp,
    exists: true,
  });
});

ponder.on("ExampleContract:MessageUpdated", async ({ event, context }) => {
  const { db } = context;

  await db
    .update(messages, { id: Number(event.args.id) })
    .set({
      content: event.args.newContent,
      timestamp: event.args.timestamp,
    });
});

ponder.on("ExampleContract:MessageDeleted", async ({ event, context }) => {
  const { db } = context;

  await db
    .update(messages, { id: Number(event.args.id) })
    .set({
      exists: false,
      timestamp: event.args.timestamp,
    });
});