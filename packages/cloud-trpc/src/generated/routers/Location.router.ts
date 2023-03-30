import { t, publicProcedure } from "./helpers/createRouter";
import { LocationAggregateSchema } from "../schemas/aggregateLocation.schema";
import { LocationCreateOneSchema } from "../schemas/createOneLocation.schema";
import { LocationDeleteManySchema } from "../schemas/deleteManyLocation.schema";
import { LocationDeleteOneSchema } from "../schemas/deleteOneLocation.schema";
import { LocationFindFirstSchema } from "../schemas/findFirstLocation.schema";
import { LocationFindManySchema } from "../schemas/findManyLocation.schema";
import { LocationFindUniqueSchema } from "../schemas/findUniqueLocation.schema";
import { LocationGroupBySchema } from "../schemas/groupByLocation.schema";
import { LocationUpdateManySchema } from "../schemas/updateManyLocation.schema";
import { LocationUpdateOneSchema } from "../schemas/updateOneLocation.schema";
import { LocationUpsertSchema } from "../schemas/upsertOneLocation.schema";

export const locationsRouter = t.router({
  aggregateLocation: publicProcedure
    .input(LocationAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateLocation = await ctx.prisma.location.aggregate(input);
      return aggregateLocation;
    }),
  createOneLocation: publicProcedure
    .input(LocationCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneLocation = await ctx.prisma.location.create(input);
      return createOneLocation;
    }),
  deleteManyLocation: publicProcedure
    .input(LocationDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyLocation = await ctx.prisma.location.deleteMany(input);
      return deleteManyLocation;
    }),
  deleteOneLocation: publicProcedure
    .input(LocationDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneLocation = await ctx.prisma.location.delete(input);
      return deleteOneLocation;
    }),
  findFirstLocation: publicProcedure
    .input(LocationFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstLocation = await ctx.prisma.location.findFirst(input);
      return findFirstLocation;
    }),
  findFirstLocationOrThrow: publicProcedure
    .input(LocationFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstLocationOrThrow = await ctx.prisma.location.findFirstOrThrow(input);
      return findFirstLocationOrThrow;
    }),
  findManyLocation: publicProcedure
    .input(LocationFindManySchema).query(async ({ ctx, input }) => {
      const findManyLocation = await ctx.prisma.location.findMany(input);
      return findManyLocation;
    }),
  findUniqueLocation: publicProcedure
    .input(LocationFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueLocation = await ctx.prisma.location.findUnique(input);
      return findUniqueLocation;
    }),
  findUniqueLocationOrThrow: publicProcedure
    .input(LocationFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueLocationOrThrow = await ctx.prisma.location.findUniqueOrThrow(input);
      return findUniqueLocationOrThrow;
    }),
  groupByLocation: publicProcedure
    .input(LocationGroupBySchema).query(async ({ ctx, input }) => {
      const groupByLocation = await ctx.prisma.location.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByLocation;
    }),
  updateManyLocation: publicProcedure
    .input(LocationUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyLocation = await ctx.prisma.location.updateMany(input);
      return updateManyLocation;
    }),
  updateOneLocation: publicProcedure
    .input(LocationUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneLocation = await ctx.prisma.location.update(input);
      return updateOneLocation;
    }),
  upsertOneLocation: publicProcedure
    .input(LocationUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneLocation = await ctx.prisma.location.upsert(input);
      return upsertOneLocation;
    }),

}) 
