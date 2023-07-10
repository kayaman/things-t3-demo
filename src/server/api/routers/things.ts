import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';

export const thingsRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.thing.findMany();
  }),
});
