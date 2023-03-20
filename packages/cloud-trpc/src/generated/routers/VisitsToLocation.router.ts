import { t, publicProcedure } from "./helpers/createRouter";
import { VisitsToLocationAggregateSchema } from "../schemas/aggregateVisitsToLocation.schema";
import { VisitsToLocationCreateOneSchema } from "../schemas/createOneVisitsToLocation.schema";
import { VisitsToLocationDeleteManySchema } from "../schemas/deleteManyVisitsToLocation.schema";
import { VisitsToLocationDeleteOneSchema } from "../schemas/deleteOneVisitsToLocation.schema";
import { VisitsToLocationFindFirstSchema } from "../schemas/findFirstVisitsToLocation.schema";
import { VisitsToLocationFindManySchema } from "../schemas/findManyVisitsToLocation.schema";
import { VisitsToLocationFindUniqueSchema } from "../schemas/findUniqueVisitsToLocation.schema";
import { VisitsToLocationGroupBySchema } from "../schemas/groupByVisitsToLocation.schema";
import { VisitsToLocationUpdateManySchema } from "../schemas/updateManyVisitsToLocation.schema";
import { VisitsToLocationUpdateOneSchema } from "../schemas/updateOneVisitsToLocation.schema";
import { VisitsToLocationUpsertSchema } from "../schemas/upsertOneVisitsToLocation.schema";

export const visitstolocationsRouter = t.router({
  aggregateVisitsToLocation: publicProcedure
    .input(VisitsToLocationAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateVisitsToLocation = await ctx.prisma.visitsToLocation.aggregate(input);
      return aggregateVisitsToLocation;
    }),
  createOneVisitsToLocation: publicProcedure
    .input(VisitsToLocationCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneVisitsToLocation = await ctx.prisma.visitsToLocation.create(input);
      return createOneVisitsToLocation;
    }),
  deleteManyVisitsToLocation: publicProcedure
    .input(VisitsToLocationDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyVisitsToLocation = await ctx.prisma.visitsToLocation.deleteMany(input);
      return deleteManyVisitsToLocation;
    }),
  deleteOneVisitsToLocation: publicProcedure
    .input(VisitsToLocationDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneVisitsToLocation = await ctx.prisma.visitsToLocation.delete(input);
      return deleteOneVisitsToLocation;
    }),
  findFirstVisitsToLocation: publicProcedure
    .input(VisitsToLocationFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstVisitsToLocation = await ctx.prisma.visitsToLocation.findFirst(input);
      return findFirstVisitsToLocation;
    }),
  findFirstVisitsToLocationOrThrow: publicProcedure
    .input(VisitsToLocationFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstVisitsToLocationOrThrow = await ctx.prisma.visitsToLocation.findFirstOrThrow(input);
      return findFirstVisitsToLocationOrThrow;
    }),
  findManyVisitsToLocation: publicProcedure
    .input(VisitsToLocationFindManySchema).query(async ({ ctx, input }) => {
      const findManyVisitsToLocation = await ctx.prisma.visitsToLocation.findMany(input);
      return findManyVisitsToLocation;
    }),
  findUniqueVisitsToLocation: publicProcedure
    .input(VisitsToLocationFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueVisitsToLocation = await ctx.prisma.visitsToLocation.findUnique(input);
      return findUniqueVisitsToLocation;
    }),
  findUniqueVisitsToLocationOrThrow: publicProcedure
    .input(VisitsToLocationFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueVisitsToLocationOrThrow = await ctx.prisma.visitsToLocation.findUniqueOrThrow(input);
      return findUniqueVisitsToLocationOrThrow;
    }),
  groupByVisitsToLocation: publicProcedure
    .input(VisitsToLocationGroupBySchema).query(async ({ ctx, input }) => {
      const groupByVisitsToLocation = await ctx.prisma.visitsToLocation.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByVisitsToLocation;
    }),
  updateManyVisitsToLocation: publicProcedure
    .input(VisitsToLocationUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyVisitsToLocation = await ctx.prisma.visitsToLocation.updateMany(input);
      return updateManyVisitsToLocation;
    }),
  updateOneVisitsToLocation: publicProcedure
    .input(VisitsToLocationUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneVisitsToLocation = await ctx.prisma.visitsToLocation.update(input);
      return updateOneVisitsToLocation;
    }),
  upsertOneVisitsToLocation: publicProcedure
    .input(VisitsToLocationUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneVisitsToLocation = await ctx.prisma.visitsToLocation.upsert(input);
      return upsertOneVisitsToLocation;
    }),

}) 
