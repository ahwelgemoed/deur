import { t, publicProcedure } from './helpers/createRouter';
import { CountryFindUniqueSchema } from '../schemas/findUniqueCountry.schema';
import { CountryFindFirstSchema } from '../schemas/findFirstCountry.schema';
import { CountryFindManySchema } from '../schemas/findManyCountry.schema';
import { CountryCreateOneSchema } from '../schemas/createOneCountry.schema';
import { CountryDeleteOneSchema } from '../schemas/deleteOneCountry.schema';
import { CountryUpdateOneSchema } from '../schemas/updateOneCountry.schema';
import { CountryDeleteManySchema } from '../schemas/deleteManyCountry.schema';
import { CountryUpdateManySchema } from '../schemas/updateManyCountry.schema';
import { CountryUpsertSchema } from '../schemas/upsertOneCountry.schema';
import { CountryAggregateSchema } from '../schemas/aggregateCountry.schema';
import { CountryGroupBySchema } from '../schemas/groupByCountry.schema';

export const countriesRouter = t.router({
  aggregateCountry: publicProcedure.input(CountryAggregateSchema).query(async ({ ctx, input }) => {
    const aggregateCountry = await ctx.prisma.country.aggregate(input);
    return aggregateCountry;
  }),
  createOneCountry: publicProcedure
    .input(CountryCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneCountry = await ctx.prisma.country.create(input);
      return createOneCountry;
    }),
  deleteManyCountry: publicProcedure
    .input(CountryDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyCountry = await ctx.prisma.country.deleteMany(input);
      return deleteManyCountry;
    }),
  deleteOneCountry: publicProcedure
    .input(CountryDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneCountry = await ctx.prisma.country.delete(input);
      return deleteOneCountry;
    }),
  findFirstCountry: publicProcedure.input(CountryFindFirstSchema).query(async ({ ctx, input }) => {
    const findFirstCountry = await ctx.prisma.country.findFirst(input);
    return findFirstCountry;
  }),
  findFirstCountryOrThrow: publicProcedure
    .input(CountryFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstCountryOrThrow = await ctx.prisma.country.findFirstOrThrow(input);
      return findFirstCountryOrThrow;
    }),
  findManyCountry: publicProcedure.input(CountryFindManySchema).query(async ({ ctx, input }) => {
    const findManyCountry = await ctx.prisma.country.findMany(input);
    return findManyCountry;
  }),
  findUniqueCountry: publicProcedure
    .input(CountryFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueCountry = await ctx.prisma.country.findUnique(input);
      return findUniqueCountry;
    }),
  findUniqueCountryOrThrow: publicProcedure
    .input(CountryFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueCountryOrThrow = await ctx.prisma.country.findUniqueOrThrow(input);
      return findUniqueCountryOrThrow;
    }),
  groupByCountry: publicProcedure.input(CountryGroupBySchema).query(async ({ ctx, input }) => {
    const groupByCountry = await ctx.prisma.country.groupBy({
      where: input.where,
      orderBy: input.orderBy,
      by: input.by,
      having: input.having,
      take: input.take,
      skip: input.skip,
    });
    return groupByCountry;
  }),
  updateManyCountry: publicProcedure
    .input(CountryUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyCountry = await ctx.prisma.country.updateMany(input);
      return updateManyCountry;
    }),
  updateOneCountry: publicProcedure
    .input(CountryUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneCountry = await ctx.prisma.country.update(input);
      return updateOneCountry;
    }),
  upsertOneCountry: publicProcedure.input(CountryUpsertSchema).mutation(async ({ ctx, input }) => {
    const upsertOneCountry = await ctx.prisma.country.upsert(input);
    return upsertOneCountry;
  }),
});
