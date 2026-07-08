/**
 * 📚 ACADEMIC COURSES DATA GUIDE
 * 
 * To add courses for a new semester, simply add a new object to the `courses` array below.
 * 
 * 📋 NEW COURSE TEMPLATE:
 * {
 *   code: "COMP 1234",               // Course Code
 *   name: "Course Title Here",       // Full Course Title
 *   semester: "2026-27 Sem 1",       // Semester text
 *   tag: "Computer Science",         // Must match one of the tags defined in CourseTag list below
 *   description: "Brief course description.",
 *   important: false,                 // Set to true to highlight with a gold star
 * },
 */

export type CourseTag = 
  | "Computer Science" 
  | "CS Elective" 
  | "Engineering" 
  | "Physics" 
  | "Common Core" 
  | "Others";

export type Course = {
  code: string;
  name: string;
  semester: string;
  tag: CourseTag;
  description?: string;
  important?: boolean; // Mark with a star if true
};

export const courses: Course[] = [
    // 2025-26 Semester 2
  {
    code: "BUSI 2812",
    name: "Impact Lab",
    semester: "2025-26 Sem 2",
    tag: "Others",
    description: "Worked at Seekr AI as a business development intern",
    important: true,
  },
  {
    code: "COMP 2120",
    name: "Computer Organization",
    semester: "2025-26 Sem 2",
    tag: "Computer Science",
    important: false,
  },
  {
    code: "COMP 3314",
    name: "Introduction to Machine Learning",
    semester: "2025-26 Sem 2",
    tag: "CS Elective",
    description: "Implemented an ensemble of SVM classifiers on the CIFAR-10 dataset",
    important: true,
  },
  {
    code: "COMP 3520",
    name: "Special Topics in Data Science",
    semester: "2025-26 Sem 2",
    tag: "CS Elective",
    description: "Developed Roboclaw, a VLM-VLA orchestrator that integrates vision-language models with action planning for robotic tasks.",
    important: true,
  },
  {
    code: "PHYS 2055",
    name: "Introductory Relativity",
    semester: "2025-26 Sem 2",
    tag: "Physics",
    important: false,
  },
  // 2025-26 Semester 1
  {
    code: "CCGL 9078",
    name: "Games in Everyday Life: Exploring Game Theory, Behavioural Finance and Global Issues",
    semester: "2025-26 Sem 1",
    tag: "Common Core",
    important: false,
  },
  {
    code: "CCST 9077",
    name: "The Quantum Revolution: From Secret Codes to Black Holes",
    semester: "2025-26 Sem 1",
    tag: "Common Core",
    important: false,
  },
  {
    code: "COMP 2119",
    name: "Introduction to Data Structures and Algorithms",
    semester: "2025-26 Sem 1",
    tag: "Computer Science",
    important: true,
  },
  {
    code: "COMP 2121",
    name: "Discrete Mathematics",
    semester: "2025-26 Sem 1",
    tag: "Computer Science",
    important: false,
  },
  {
    code: "COMP 2396",
    name: "Object-Oriented Programming and Java",
    semester: "2025-26 Sem 1",
    tag: "Computer Science",
    description: "Built a cloud-based multi-player Tic-Tac-Toe game with Java GUI and client-server networking",
    important: false,
  },
  {
    code: "PHYS 2265",
    name: "Introductory Quantum Physics",
    semester: "2025-26 Sem 1",
    tag: "Physics",
    important: false,
  },

    // 2024-25 Semester 2
  {
    code: "CCGL 9031",
    name: "Entrepreneurship: Global and Social Development",
    semester: "2024-25 Sem 2",
    tag: "Common Core",
    important: false,
  },
  {
    code: "CCST 9066",
    name: "Big Data Solutions to Social Problems: the Good, the Bad and the Ugly",
    semester: "2024-25 Sem 2",
    tag: "Common Core",
    important: false,
  },
  {
    code: "ENGG 1300",
    name: "Fundamental Mechanics",
    semester: "2024-25 Sem 2",
    tag: "Engineering",
    important: false,
  },
  {
    code: "ENGG 1320",
    name: "Engineers in the Modern World",
    semester: "2024-25 Sem 2",
    tag: "Engineering",
    description: "Ideated our AI-assistant for the blind product- NAVI",
    important: false,
  },
  {
    code: "ENGG 1340",
    name: "Computer Programming II",
    semester: "2024-25 Sem 2",
    tag: "Computer Science",
    important: false,
  },
  {
    code: "MATH 1853",
    name: "Linear Algebra, Probability and Statistics",
    semester: "2024-25 Sem 2",
    tag: "Engineering",
    important: false,
  },
      // 2024-25 Semester 1
  {
    code: "CAES 1000",
    name: "Core University English",
    semester: "2024-25 Sem 1",
    tag: "Common Core",
    important: false,
  },
  {
    code: "ELEC 3845",
    name: "Economics, Finance and Marketing for Engineers",
    semester: "2024-25 Sem 1",
    tag: "Engineering",
    important: false,
  },
  {
    code: "ENGG 1310",
    name: "Electricity and Electronics",
    semester: "2024-25 Sem 1",
    tag: "Engineering",
    important: false,
  },
    {
    code: "ENGG 1330",
    name: "Computer Programming I",
    semester: "2024-25 Sem 1",
    tag: "Computer Science",
    important: false,
  },
  {
    code: "MATH 1851",
    name: "Calculus and Ordinary Differential Equations",
    semester: "2024-25 Sem 1",
    tag: "Engineering",
    important: false,
  },
];

// All available tags for filtering
export const courseTags: CourseTag[] = [
  "Computer Science",
  "CS Elective",
  "Engineering",
  "Physics",
  "Common Core",
  "Others",
];
