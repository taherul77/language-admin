import { z } from "zod";

// Define Address schema using zod

export const addressSchema = z.object({
  _id: z.string(),
  name: z.string(),
  email: z.string(),
  phoneNumber: z.string(),
  address: z.string(),
  createdAt: z.string().transform((val) => new Date(val)),
  updatedAt: z.string().transform((val) => new Date(val)),
});

export const applySchema = z.object({
  _id: z.string(),
  name: z.string(),
  email: z.string(),
  phoneNumber: z.string(),
  message: z.string(),
  createdAt: z.string().transform((val) => new Date(val)),
  updatedAt: z.string().transform((val) => new Date(val)),
});
export const mailSchema = z.object({
  _id: z.string(),
  name: z.string(),
  email: z.string(),
  phoneNumber: z.string(),
  message: z.string(),
  createdAt: z.string().transform((val) => new Date(val)),
  updatedAt: z.string().transform((val) => new Date(val)),
});

const seminarSchema = z.object({
  _id: z.string(),
  title: z.string(),
  content: z.string(),
  date: z.string().transform((val) => new Date(val)),
  venue: z.string(), // Corrected spelling from "vanue"
  contact: z.string(),
  image: z.string(),
  author: z.object({
    _id: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    email: z.string(),
    password: z.string(),
    role: z.string(),
    profile_pic: z.string(),
    createdAt: z.string().transform((val) => new Date(val)),
    updatedAt: z.string().transform((val) => new Date(val)),
    __v: z.number(),
  }),
  createdAt: z.string().transform((val) => new Date(val)),
  updatedAt: z.string().transform((val) => new Date(val)),
  __v: z.number(),
});



const userSchema = z.object({
  _id: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  email: z.string(),
  role: z.string(),

  profile_pic: z.string(),

  createdAt: z.string().transform((val) => new Date(val)),
  updatedAt: z.string().transform((val) => new Date(val)),
  __v: z.number(),
});


// Export inferred TypeScript type from Zod schema
export type Address = z.infer<typeof addressSchema>;
export type Apply = z.infer<typeof applySchema>;
export type Mail = z.infer<typeof mailSchema>;
export type Seminar = z.infer<typeof seminarSchema>;
export type User = z.infer<typeof userSchema>;
