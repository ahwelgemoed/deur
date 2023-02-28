import { t, publicProcedure } from "./helpers/createRouter";
import { DeviceTypesAggregateSchema } from "../schemas/aggregateDeviceTypes.schema";
import { DeviceTypesCreateOneSchema } from "../schemas/createOneDeviceTypes.schema";
import { DeviceTypesDeleteManySchema } from "../schemas/deleteManyDeviceTypes.schema";
import { DeviceTypesDeleteOneSchema } from "../schemas/deleteOneDeviceTypes.schema";
import { DeviceTypesFindFirstSchema } from "../schemas/findFirstDeviceTypes.schema";
import { DeviceTypesFindManySchema } from "../schemas/findManyDeviceTypes.schema";
import { DeviceTypesFindUniqueSchema } from "../schemas/findUniqueDeviceTypes.schema";
import { DeviceTypesGroupBySchema } from "../schemas/groupByDeviceTypes.schema";
import { DeviceTypesUpdateManySchema } from "../schemas/updateManyDeviceTypes.schema";
import { DeviceTypesUpdateOneSchema } from "../schemas/updateOneDeviceTypes.schema";
import { DeviceTypesUpsertSchema } from "../schemas/upsertOneDeviceTypes.schema";

export const devicetypesRouter = t.router({
  aggregateDeviceTypes: publicProcedure
    .input(DeviceTypesAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateDeviceTypes = await ctx.prisma.deviceTypes.aggregate(input);
      return aggregateDeviceTypes;
    }),
  createOneDeviceTypes: publicProcedure
    .input(DeviceTypesCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneDeviceTypes = await ctx.prisma.deviceTypes.create(input);
      return createOneDeviceTypes;
    }),
  deleteManyDeviceTypes: publicProcedure
    .input(DeviceTypesDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyDeviceTypes = await ctx.prisma.deviceTypes.deleteMany(input);
      return deleteManyDeviceTypes;
    }),
  deleteOneDeviceTypes: publicProcedure
    .input(DeviceTypesDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneDeviceTypes = await ctx.prisma.deviceTypes.delete(input);
      return deleteOneDeviceTypes;
    }),
  findFirstDeviceTypes: publicProcedure
    .input(DeviceTypesFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstDeviceTypes = await ctx.prisma.deviceTypes.findFirst(input);
      return findFirstDeviceTypes;
    }),
  findFirstDeviceTypesOrThrow: publicProcedure
    .input(DeviceTypesFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstDeviceTypesOrThrow = await ctx.prisma.deviceTypes.findFirstOrThrow(input);
      return findFirstDeviceTypesOrThrow;
    }),
  findManyDeviceTypes: publicProcedure
    .input(DeviceTypesFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyDeviceTypes = await ctx.prisma.deviceTypes.findMany(input);
      return findManyDeviceTypes;
    }),
  findUniqueDeviceTypes: publicProcedure
    .input(DeviceTypesFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueDeviceTypes = await ctx.prisma.deviceTypes.findUnique(input);
      return findUniqueDeviceTypes;
    }),
  findUniqueDeviceTypesOrThrow: publicProcedure
    .input(DeviceTypesFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueDeviceTypesOrThrow = await ctx.prisma.deviceTypes.findUniqueOrThrow(input);
      return findUniqueDeviceTypesOrThrow;
    }),
  groupByDeviceTypes: publicProcedure
    .input(DeviceTypesGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByDeviceTypes = await ctx.prisma.deviceTypes.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByDeviceTypes;
    }),
  updateManyDeviceTypes: publicProcedure
    .input(DeviceTypesUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyDeviceTypes = await ctx.prisma.deviceTypes.updateMany(input);
      return updateManyDeviceTypes;
    }),
  updateOneDeviceTypes: publicProcedure
    .input(DeviceTypesUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneDeviceTypes = await ctx.prisma.deviceTypes.update(input);
      return updateOneDeviceTypes;
    }),
  upsertOneDeviceTypes: publicProcedure
    .input(DeviceTypesUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneDeviceTypes = await ctx.prisma.deviceTypes.upsert(input);
      return upsertOneDeviceTypes;
    }),

})
