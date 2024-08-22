import * as Yup from "yup";

export const signUpSchema = Yup.object({
    course_title: Yup.string().required('Course title is required'),
    course_details: Yup.string().required('Course details is required'),
    age_group: Yup.string().required('Age group is required'),
    duration_period: Yup.string().required('Duration period is required'),
    introduction: Yup.string().required('Introduction is required'),
    keywords: Yup.string().required('Keywords are required'),
    course_effective_price: Yup.string().required('Course price is required'),
    about_course_details: Yup.string().required('About course details are required'),
    course_description: Yup.string().required('Course description is required'),
});