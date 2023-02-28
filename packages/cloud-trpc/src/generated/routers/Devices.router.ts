import { t, publicProcedure } from './helpers/createRouter';
import { DevicesAggregateSchema } from '../schemas/aggregateDevices.schema';
import { DevicesCreateOneSchema } from '../schemas/createOneDevices.schema';
import { DevicesDeleteManySchema } from '../schemas/deleteManyDevices.schema';
import { DevicesDeleteOneSchema } from '../schemas/deleteOneDevices.schema';
import { DevicesFindFirstSchema } from '../schemas/findFirstDevices.schema';
import { DevicesFindManySchema } from '../schemas/findManyDevices.schema';
import { DevicesFindUniqueSchema } from '../schemas/findUniqueDevices.schema';
import { DevicesGroupBySchema } from '../schemas/groupByDevices.schema';
import { DevicesUpdateManySchema } from '../schemas/updateManyDevices.schema';
import { DevicesUpdateOneSchema } from '../schemas/updateOneDevices.schema';
import { DevicesUpsertSchema } from '../schemas/upsertOneDevices.schema';

export const devicesRouter = t.router({
  aggregateDevices: publicProcedure.input(DevicesAggregateSchema).query(async ({ ctx, input }) => {
    const aggregateDevices = await ctx.prisma.devices.aggregate(input);
    return aggregateDevices;
  }),
  createOneDevices: publicProcedure
    .input(DevicesCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneDevices = await ctx.prisma.devices.create(input);
      return createOneDevices;
    }),
  deleteManyDevices: publicProcedure
    .input(DevicesDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyDevices = await ctx.prisma.devices.deleteMany(input);
      return deleteManyDevices;
    }),
  deleteOneDevices: publicProcedure
    .input(DevicesDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneDevices = await ctx.prisma.devices.delete(input);
      return deleteOneDevices;
    }),
  findFirstDevices: publicProcedure.input(DevicesFindFirstSchema).query(async ({ ctx, input }) => {
    const findFirstDevices = await ctx.prisma.devices.findFirst(input);
    return findFirstDevices;
  }),
  findFirstDevicesOrThrow: publicProcedure
    .input(DevicesFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstDevicesOrThrow = await ctx.prisma.devices.findFirstOrThrow(input);
      return findFirstDevicesOrThrow;
    }),
  findManyDevices: publicProcedure.input(DevicesFindManySchema).query(async ({ ctx, input }) => {
    const findManyDevices = await ctx.prisma.devices.findMany(input);
    return findManyDevices;
  }),
  findUniqueDevices: publicProcedure
    .input(DevicesFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueDevices = await ctx.prisma.devices.findUnique(input);
      return findUniqueDevices;
    }),
  findUniqueDevicesOrThrow: publicProcedure
    .input(DevicesFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueDevicesOrThrow = await ctx.prisma.devices.findUniqueOrThrow(input);
      return findUniqueDevicesOrThrow;
    }),
  groupByDevices: publicProcedure.input(DevicesGroupBySchema).query(async ({ ctx, input }) => {
    const groupByDevices = await ctx.prisma.devices.groupBy({
      where: input.where,
      orderBy: input.orderBy,
      by: input.by,
      having: input.having,
      take: input.take,
      skip: input.skip,
    });
    return groupByDevices;
  }),
  updateManyDevices: publicProcedure
    .input(DevicesUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyDevices = await ctx.prisma.devices.updateMany(input);
      return updateManyDevices;
    }),
  updateOneDevices: publicProcedure
    .input(DevicesUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneDevices = await ctx.prisma.devices.update(input);
      return updateOneDevices;
    }),
  upsertOneDevices: publicProcedure.input(DevicesUpsertSchema).mutation(async ({ ctx, input }) => {
    const upsertOneDevices = await ctx.prisma.devices.upsert(input);
    return upsertOneDevices;
  }),
});
