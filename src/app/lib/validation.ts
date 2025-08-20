import { z } from "zod";

export const phoneSchema = z
  .string()
  .regex(/^09\d{9}$/, "شماره موبایل باید 11 رقم و با 09 شروع شود");

