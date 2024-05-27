import CourseImgOne from "../../public/assets/img/course/course-1.jpg";
import CourseImgTwo from "../../public/assets/img/course/course-2.jpg";
import CourseImgThree from "../../public/assets/img/course/course-3.jpg";
import CourseImgFour from "../../public/assets/img/course/course-4.jpg";
import CourseImgFive from "../../public/assets/img/course/course-5.jpg";
import CourseImgSix from "../../public/assets/img/course/course-6.jpg";
import CourseImgSeven from "../../public/assets/img/course/home-3/course-1.jpg";
import CourseImgEight from "../../public/assets/img/course/home-3/course-2.jpg";
import CourseImgNine from "../../public/assets/img/course/course-7.jpg";
import CourseImgTen from "../../public/assets/img/course/course-8.jpg";
import CourseImgEleven from "../../public/assets/img/course/course-9.jpg";
import ListCourseOne from "../../public/assets/img/course/list/course-1.jpg";
import ListCourseTwo from "../../public/assets/img/course/list/course-2.jpg";
import ListCourseThree from "../../public/assets/img/course/list/course-3.jpg";
import ListCourseFour from "../../public/assets/img/course/list/course-4.jpg";
import ListCourseFive from "../../public/assets/img/course/list/course-5.jpg";
import ListCourseSix from "../../public/assets/img/course/list/course-6.jpg";

import TeacherImgOne from "../../public/assets/img/course/teacher/teacher-1.jpg";
import TeacherImgTwo from "../../public/assets/img/course/teacher/teacher-2.jpg";
import TeacherImgOnThree from "../../public/assets/img/course/teacher/teacher-3.jpg";
import TeacherImgFour from "../../public/assets/img/course/teacher/teacher-4.jpg";
import TeacherImgFive from "../../public/assets/img/course/teacher/teacher-5.jpg";
import TeacherImgSix from "../../public/assets/img/course/teacher/teacher-6.jpg";
import TeacherImgSeven from "../../public/assets/img/course/teacher/home-3/teacher-1.jpg";
import TeacherImgEight from "../../public/assets/img/course/teacher/home-3/teacher-2.jpg";
import TeacherImgNine from "../../public/assets/img/course/teacher/teacher-7.jpg";
import TeacherImgTen from "../../public/assets/img/course/teacher/teacher-8.jpg";
import TeacherImgEleven from "../../public/assets/img/course/teacher/teacher-9.jpg";
import CourseSm from "../../public/assets/img/course/sm/course-sm-1.jpg";
import CourseSmTwo from "../../public/assets/img/course/sm/course-sm-2.jpg";
import CourseSmThree from "../../public/assets/img/course/sm/course-sm-3.jpg";

import { coursesType } from "@/interFace/interFace";

const courses_data: coursesType[] = [
  {
    id: 1,
    image: CourseImgOne,
    category: "Art & Design",
    lesson: 43,
    ratingAve: 4.5,
    ratingCount: 44,
    ratings: 5,
    title: "Become a product Manager learn the skills & job.",
    tutorImg: TeacherImgOne,
    author: "Jim Séchen",
    videoUrl: "a-CEyHSNrx0",
    price: 0,
    oldPrice: 0,
    quantity: 0,
  },
  {
    id: 2,
    image: CourseImgTwo,
    category: "Art & Design",
    categoryClass: "sky-blue",
    lesson: 72,
    ratingAve: 4.6,
    ratingCount: 48,
    ratings: 5,
    title: "Fundamentals of music theory Learn new",
    tutorImg: TeacherImgTwo,
    author: "Barry Tone",
    price: 32.0,
    priceClass: "sky-blue",
    oldPrice: 68.0,
    videoUrl: "a-CEyHSNrx0",
    quantity: 0,
  },
  {
    id: 3,
    image: CourseImgThree,
    category: "Development",
    categoryClass: "green",
    lesson: 14,
    ratingAve: 4.3,
    ratingCount: 42,
    ratings: 5,
    title: "Strategy law and organization Foundation",
    tutorImg: TeacherImgOnThree,
    author: "Elon Gated",
    price: 36.0,
    priceClass: "green",
    oldPrice: 56.0,
    videoUrl: "dDTWCbtAh2Y",
    quantity: 0,
  },
  {
    id: 4,
    image: CourseImgSix,
    category: "UX Design",
    categoryClass: "pink",
    lesson: 13,
    ratingAve: 4.2,
    ratingCount: 32,
    ratings: 5,
    title: "Creative writing through Storytelling",
    tutorImg: TeacherImgSix,
    author: "Shahnewaz Sakil",
    price: 77.0,
    priceClass: "pink",
    oldPrice: 57.0,
    videoUrl: "lvYM9tHRz0M",
    quantity: 0,
  },
  {
    id: 5,
    image: CourseImgFour,
    category: "Marketing",
    categoryClass: "blue",
    lesson: 18,
    ratingAve: 4.4,
    ratingCount: 35,
    ratings: 5,
    title: "The business Intelligence analyst Course 2023",
    tutorImg: TeacherImgFour,
    author: "Eleanor Fant",
    price: 62.0,
    priceClass: "blue",
    videoUrl: "ybTdykZpbII",
    oldPrice: 97.0,
    quantity: 0,
  },
  {
    id: 6,
    image: CourseImgFive,
    category: "Business",
    categoryClass: "orange",
    lesson: 22,
    ratingAve: 4.3,
    ratingCount: 37,
    ratings: 5,
    title: "Optimizing Business Insights Through Sorting",
    tutorImg: TeacherImgFive,
    author: "Pelican Steve",
    price: 66.0,
    priceClass: "orange",
    oldPrice: 86.0,
    videoUrl: "Egy-jJUNJ3A",
    quantity: 0,
  },

  //home there data
  {
    id: 7,
    image: CourseImgSeven,
    category: "Product Designer",
    lesson: 43,
    ratingAve: 4.2,
    ratingCount: 32,
    ratings: 5,
    title: "Product Manager Learn the Skills & job.",
    desc: "Top instructors from around the world teach millions of students on Quillow. Get unlimited.",
    tutorImg: TeacherImgSeven,
    author: "Jim Séchen",
    price: 77.0,
    priceClass: "pink",
    videoUrl: "hh7V878lAIY",
    oldPrice: 57.0,
    quantity: 0,
  },
  {
    id: 8,
    image: CourseImgEight,
    category: "UX Design",
    lesson: 30,
    ratingAve: 4.2,
    ratingCount: 32,
    ratings: 5,
    title: "The Importance Of Intrinsic for Students.",
    desc: " Top instructors from around the world teach millions of students on Quillow. Get unlimited.",
    tutorImg: TeacherImgEight,
    author: "JCraig Weber",
    price: 77.0,
    priceClass: "pink",
    oldPrice: 57.0,
    videoUrl: "lvYM9tHRz0M",
    quantity: 0,
  },
  //course grid data
  {
    id: 9,
    image: CourseImgOne,
    category: "Art & Design",
    lesson: 42,
    ratingAve: 4.5,
    ratingCount: 40,
    ratings: 5,
    title: "Become a product Manager learn the skills & job.",
    tutorImg: TeacherImgOne,
    author: "Jim Séchen",
    price: 0,
    oldPrice: 0,
    desc: " Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem",
    quantity: 0,
    videoUrl: "a-CEyHSNrx0",
  },
  {
    id: 10,
    image: CourseImgTwo,
    category: "Mechanical",
    categoryClass: "sky-blue",
    lesson: 72,
    ratingAve: 4.7,
    ratingCount: 48,
    ratings: 4,
    title: "Fundamentals of music theory Learn new",
    tutorImg: TeacherImgTwo,
    author: "Barry Tone",
    videoUrl: "NDa3AGPobS4",
    price: 32.0,
    priceClass: "sky-blue",
    oldPrice: 68.0,
    desc: " Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem",
    quantity: 0,
  },
  {
    id: 11,
    image: CourseImgNine,
    category: "Development",
    categoryClass: "blue-2",
    lesson: 72,
    ratingAve: 4.8,
    ratingCount: 55,
    ratings: 4,
    title: "Bases Matemáticas dios Álgebra Ecuacion",
    tutorImg: TeacherImgNine,
    author: "Samuel Serif",
    videoUrl: "w0eeQ0Tgk7E",
    price: 45.0,
    priceClass: "blue-2",
    oldPrice: 72.0,
    desc: " Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem",
    quantity: 0,
  },
  {
    id: 12,
    image: CourseImgThree,
    category: "Development",
    categoryClass: "green",
    lesson: 35,
    ratingAve: 4.7,
    ratingCount: 48,
    ratings: 4,
    title: "Strategy law and organization Foundation",
    tutorImg: TeacherImgOnThree,
    author: "Elon Gated",
    price: 52.0,
    priceClass: "green",
    oldPrice: 66.0,
    desc: " Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem",
    quantity: 0,
    videoUrl: "BGjTboXjH28",
  },
  {
    id: 13,
    image: CourseImgFour,
    category: "Marketing",
    categoryClass: "blue",
    lesson: 45,
    ratingAve: 4.8,
    ratingCount: 35,
    ratings: 4,
    title: "The business Intelligence analyst Course 2023",
    tutorImg: TeacherImgFour,
    author: "Eleanor Fant",
    price: 36.0,
    priceClass: "blue",
    oldPrice: 56.0,
    videoUrl: "w0eeQ0Tgk7E",
    desc: " Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem",
    quantity: 0,
  },
  {
    id: 14,
    image: CourseImgTen,
    category: "Marketing",
    categoryClass: "yellow",
    lesson: 50,
    ratingAve: 4.9,
    ratingCount: 45,
    ratings: 5,
    title: "The business Intelligence analyst Course 2023",
    tutorImg: TeacherImgTen,
    author: "Brian Cumin",
    price: 42.0,
    priceClass: "yellow",
    oldPrice: 57.0,
    videoUrl: "KzlwvKX_P6k",
    desc: " Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem",
    quantity: 0,
  },
  {
    id: 15,
    image: CourseImgFive,
    category: "Business",
    categoryClass: "orange",
    lesson: 56,
    ratingAve: 4.7,
    ratingCount: 36,
    ratings: 5,
    title: "Build your media and Public presence",
    tutorImg: TeacherImgFive,
    author: " Pelican Steve",
    videoUrl: "BGjTboXjH28",
    price: 45.0,
    priceClass: "orange",
    oldPrice: 62.0,
    desc: " Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem",
    quantity: 0,
  },
  {
    id: 16,
    image: CourseImgSix,
    category: " UX Design",
    categoryClass: "pink",
    lesson: 58,
    ratingAve: 4.8,
    ratingCount: 52,
    ratings: 4,
    title: "Creative writing through Storytelling",
    tutorImg: TeacherImgFive,
    author: " Shahnewaz Sakil",
    price: 56.0,
    priceClass: "pink",
    videoUrl: "ChAWdmplhwY",
    oldPrice: 76.0,
    desc: " Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem",
    quantity: 0,
  },
  {
    id: 17,
    image: CourseImgEleven,
    category: " UX Design",
    categoryClass: "blue-2",
    lesson: 48,
    ratingAve: 5.0,
    ratingCount: 62,
    ratings: 5,
    title: " Creative writing through Storytelling",
    tutorImg: TeacherImgEleven,
    author: " Hilary Ouse",
    price: 72.0,
    videoUrl: "BGjTboXjH28",
    priceClass: "blue-2",
    oldPrice: 92.0,
    desc: " Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem",
    quantity: 0,
  },

  {
    id: 18,
    image: ListCourseOne,
    category: "Art & Design",
    lesson: 42,
    ratingAve: 4.5,
    ratingCount: 40,
    ratings: 5,
    title: "Become a product Manager learn the skills & job.",
    tutorImg: TeacherImgOne,
    author: "Jim Séchen",
    price: 0,
    videoUrl: "a-CEyHSNrx0",
    oldPrice: 0,
    desc: " Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem",
    quantity: 0,
  },
  {
    id: 19,
    image: ListCourseTwo,
    category: "Mechanical",
    categoryClass: "sky-blue",
    lesson: 72,
    ratingAve: 4.7,
    ratingCount: 48,
    ratings: 4,
    title: "Fundamentals of music theory Learn new",
    tutorImg: TeacherImgTwo,
    author: "Barry Tone",
    videoUrl: "NDa3AGPobS4",
    price: 32.0,
    priceClass: "sky-blue",
    oldPrice: 68.0,
    desc: " Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem",
    quantity: 0,
  },
  {
    id: 20,
    image: ListCourseThree,
    category: "Development",
    categoryClass: "blue-2",
    lesson: 72,
    ratingAve: 4.8,
    ratingCount: 55,
    ratings: 4,
    title: "Bases Matemáticas dios Álgebra Ecuacion",
    tutorImg: TeacherImgNine,
    author: "Samuel Serif",
    price: 45.0,
    priceClass: "blue-2",
    oldPrice: 72.0,
    desc: " Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem",
    quantity: 0,
    videoUrl: "KzlwvKX_P6k",
  },
  {
    id: 21,
    image: ListCourseFour,
    category: "Development",
    categoryClass: "green",
    lesson: 35,
    ratingAve: 4.7,
    ratingCount: 48,
    ratings: 4,
    title: "Strategy law and organization Foundation",
    tutorImg: TeacherImgOnThree,
    author: "Elon Gated",
    price: 52.0,
    priceClass: "green",
    oldPrice: 66.0,
    desc: " Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem",
    quantity: 0,
    videoUrl: "BGjTboXjH28",
  },
  {
    id: 22,
    image: ListCourseFive,
    category: "Marketing",
    categoryClass: "blue",
    lesson: 45,
    ratingAve: 4.8,
    ratingCount: 35,
    ratings: 4,
    title: "The business Intelligence analyst Course 2023",
    tutorImg: TeacherImgFour,
    author: "Eleanor Fant",
    price: 36.0,
    priceClass: "blue",
    oldPrice: 56.0,
    desc: " Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem",
    quantity: 0,
    videoUrl: "ChAWdmplhwY&t=53s",
  },
  {
    id: 23,
    image: ListCourseSix,
    category: "Marketing",
    categoryClass: "yellow",
    lesson: 50,
    ratingAve: 4.9,
    ratingCount: 45,
    ratings: 5,
    title: "The business Intelligence analyst Course 2023",
    tutorImg: TeacherImgTen,
    author: "Brian Cumin",
    price: 42.0,
    priceClass: "yellow",
    oldPrice: 57.0,
    desc: " Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem",
    quantity: 0,
    videoUrl: "BGjTboXjH28",
  },
  // course details sidebar data
  {
    id: 24,
    image: CourseImgThree,
    category: "Development",
    categoryClass: "yellow",
    lesson: 50,
    ratingAve: 4.9,
    ratingCount: 45,
    ratings: 5,
    title: "The business Intelligence analyst Course 2023",
    tutorImg: TeacherImgTen,
    author: "Brian Cumin",
    price: 54.0,
    priceClass: "yellow",
    oldPrice: 57.0,
    desc: " Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem",
    quantity: 0,
    videoUrl: "BGjTboXjH28",
  },
  {
    id: 25,
    image: CourseImgFour,
    category: "Data Science",
    categoryClass: "yellow",
    lesson: 50,
    ratingAve: 4.9,
    ratingCount: 45,
    ratings: 5,
    title: "The business Intelligence analyst Course 2023",
    tutorImg: TeacherImgTen,
    author: "Brian Cumin",
    price: 72.0,
    priceClass: "yellow",
    oldPrice: 57.0,
    desc: " Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem",
    quantity: 0,
    videoUrl: "ChAWdmplhwY",
  },
  {
    id: 26,
    image: CourseImgFive,
    category: "UX Design",
    categoryClass: "yellow",
    lesson: 50,
    ratingAve: 4.9,
    ratingCount: 45,
    ratings: 5,
    title: "The business Intelligence analyst Course 2023",
    tutorImg: TeacherImgTen,
    author: "Brian Cumin",
    price: 0,
    priceClass: "yellow",
    oldPrice: 0,
    desc: " Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem",
    quantity: 0,
    videoUrl: "BGjTboXjH28",
  },
  //course related data
  {
    id: 27,
    image: CourseSm,
    category: "Development",
    categoryClass: "yellow",
    lesson: 50,
    ratingAve: 4.9,
    ratingCount: 45,
    ratings: 5,
    title: "The business Intelligence analyst Course 2023",
    tutorImg: TeacherImgTen,
    author: "Brian Cumin",
    price: 54.0,
    priceClass: "yellow",
    oldPrice: 0,
    desc: " Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem",
    quantity: 0,
    videoUrl: "ChAWdmplhwY",
  },
  {
    id: 28,
    image: CourseSmTwo,
    category: "Data Science",
    categoryClass: "yellow",
    lesson: 50,
    ratingAve: 4.9,
    ratingCount: 45,
    ratings: 4,
    title: "The business Intelligence analyst Course 2023",
    tutorImg: TeacherImgTen,
    author: "Brian Cumin",
    price: 72.0,
    priceClass: "yellow",
    oldPrice: 0,
    desc: " Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem",
    quantity: 0,
    videoUrl: "BGjTboXjH28",
  },
  {
    id: 29,
    image: CourseSmThree,
    category: "UX Design",
    categoryClass: "yellow",
    lesson: 50,
    ratingAve: 4.9,
    ratingCount: 45,
    ratings: 5,
    title: "Bases Matemáticas dios Álgebra Ecuacion",
    tutorImg: TeacherImgTen,
    author: "Brian Cumin",
    price: 72.0,
    priceClass: "yellow",
    oldPrice: 0,
    desc: " Communia virtutes tutiorem declarat stoicorum sanabat oblivisci nostris tamquam iucunditatem",
    quantity: 0,
    videoUrl: "KzlwvKX_P6k",
  },
];
export default courses_data;