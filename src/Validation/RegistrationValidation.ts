import { z } from "zod";

const RegisterSchema = z
  .object({
    FullName: z.string().min(5, { message: "عفوا الإسم بالكامل مطلوب " }),
    age: z.string().min(1, { message: "عفوا السن مطلوب " }),
    Phone: z.string().min(6, { message: "عفوا رقم الهاتف مطلوب مطلوب " }),
    Address: z.string().min(6, { message: "عفوا العنوان مطلوب " }),
    NiD: z.string().min(10, { message: "عفوا الرقم القومي للطفل مطلوب " }),
    Gender: z.string().min(3, { message: "عفوا النوع مطلوب مطلوب " }),
    Email: z
      .string()
      .min(5, { message: "عفوا البريد الإلكتروني مطلوب " })
      .email(),
    Password: z
      .string()
      .min(8, { message: "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل" })
      .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {
        message: "يجب أن تحتوي كلمة المرور على حرف خاص واحد على الأقل",
      }),
    confirmPassword: z
      .string()
      .min(1, { message: "عفوا تاكيد الرقم السري مطلوب" }),
  })
  .refine((data) => data.Password === data.confirmPassword, {
    message: "كلمة المرور وتأكيد كلمة المرور لا يتطابقان",
    path: ["confirmPassword"],
  });

type RegisterType = z.infer<typeof RegisterSchema>;
export { RegisterSchema, type RegisterType };
