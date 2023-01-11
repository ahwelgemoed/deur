import * as z from "zod"

export const Local_UserLocalModel = z.object({
  id: z.number().int(),
  birthDay: z.date(),
  name: z.string().nullish(),
  cardNumber: z.string(),
  isAllowed: z.boolean(),
  location: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
