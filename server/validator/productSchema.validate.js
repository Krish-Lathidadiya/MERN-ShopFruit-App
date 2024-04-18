const { z } = require("zod");

const productSchemaValidate = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "name is required" })
    .regex(/^[A-Za-z]+$/, {
      message: "Name must contain only alphabetic characters",
    }),

  type: z
    .string()
    .trim()
    .refine((value) => ["Vegetable", "Fruit"].includes(value), {
      message: 'Type must be one of "Vegetable" or "Fruit"',
      path: ["type"],
    }),

  description: z
    .string({ required_error: "description is required" })
    .trim()
    .min(5, { message: "description min 5 character required" })
    .max(20, { message: "description max 20 character required" }),

  price: z.string().min(1, { message: "Price is required" }),

  image: z
    .string()
    .trim()
    .url({ message: "Invalid url" })
    .min(1, { message: "image is required" }),
});
module.exports = productSchemaValidate;
