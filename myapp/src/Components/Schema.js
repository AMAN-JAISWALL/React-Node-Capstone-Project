import * as Yup from "yup";

export const ValiModule=Yup.object({
    course_title:Yup.string().min(3).max(32).required("*Please select a course title"),
    module_title:Yup.string().trim().min(3).max(32).required("*Module Title is required"),
    module_details:Yup.string().trim().min(3).max(32).required("*Module Details is required").trim(3),
    number_of_questions: Yup.number().transform((value, originalValue) => (/\s/.test(originalValue) ? NaN : value)).required('*Number of questions is required.').positive('*Number of questions should be a positive integer.').integer(),
    number_of_chapters: Yup.number().required('*Number of chapters is required.').positive('*Number of chapters should be a positive integer.').integer()
});


export const ValiMaterial=Yup.object({
    course_title:Yup.string().min(3).max(32).required("*Course Title is required"),
    module_title:Yup.string().trim().min(3).max(32).required("*Module Title is required"),
    material_title:Yup.string().trim().min(3).max(32).required("*Module Details is required").trim(),
    material_details:Yup.string().trim().min(3).max(32).required("*Module Details is required").trim(),
});

   