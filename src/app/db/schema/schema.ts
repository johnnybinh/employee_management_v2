import { pgTable, text, timestamp, numeric } from "drizzle-orm/pg-core";

export const UserSalaries = pgTable("user_salaries", {
  user_id: text("user_id").primaryKey().notNull(),
  createTs: timestamp("create_ts").defaultNow().notNull(),
  salary: numeric("salary").notNull(),
});
