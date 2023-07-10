import { createTRPCRouter } from '@/server/api/trpc';
import { thingsRouter } from '@/server/api/routers/things';

export const appRouter = createTRPCRouter({
  things: thingsRouter,
});

export type AppRouter = typeof appRouter;
