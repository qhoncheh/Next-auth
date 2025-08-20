import { z } from "zod";

export const phoneSchema = z
  .string()
  .regex(/^09\d{9}$/, "The mobile number must be 11 digits and start with 09.");

