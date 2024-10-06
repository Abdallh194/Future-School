import { z } from "zod";

const LoginSchema = z.object({
  email: z.string().min(5, { message: "البريد الإلكتروني مطلوب" }).email(),
  password: z
    .string()
    .min(8, { message: "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل" }),
});

type LoginType = z.infer<typeof LoginSchema>;
export { LoginSchema, type LoginType };
