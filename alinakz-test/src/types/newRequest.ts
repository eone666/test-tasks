import * as z from "zod";

export const formSchema = z.object({
  name: z.string().min(1, {
    message: "Обязательное поле",
  }),
  sum: z.string(),
  type: z.string(),
  phone: z.string().min(1, {
    message: "Обязательное поле",
  }),
  viewersCount: z.string(),
  city: z.string().or(z.undefined()),
  date: z.date(),
  callMe: z.string(),
  receiveAdditionalInfo: z.array(z.string()),
});

export type FormType = z.infer<typeof formSchema>;
