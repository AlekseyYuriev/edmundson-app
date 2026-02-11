import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(2, { message: 'Name is required' }),
  email: z
    .string()
    .trim()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email' }),
  phoneNumber: z
    .string()
    .trim()
    .min(1, { message: 'Phone number is required' }),
  postCode: z.string().trim().min(1, { message: 'Post code is required' }),
  message: z.string().trim().optional(),
});
