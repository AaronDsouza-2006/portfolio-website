# 🚀 Portfolio Quick-Update Guide

Welcome! This guide explains how to quickly and easily update your portfolio. All content has been decoupled from the visual markup, allowing you to update your work experiences, projects, skills, and academic records in seconds.

---


## 📁 Core Content Files

All your portfolio data is stored in the `/src/lib` directory:

1. **`src/lib/resume-data.ts`**
   - **Contains:** Personal details (name, email, phone, links, summary), Core Technical Skills list, Work Experiences, Major Projects, Mini Projects, Education history, and Achievements/Awards.
2. **`src/lib/courses-data.ts`**
   - **Contains:** All university academic courses, divided by semester, complete with course codes, descriptions, and tag categories.

**IMPORTANT: Only change these two files, and not any other files**
---

## ✍️ How to Add or Edit Content

### 1. Work Experience & Internships
Open `src/lib/resume-data.ts`, go to `export const workExperience`, and add or edit entries.
```typescript
{
  slug: "my-new-internship",          // Lowercase, URL-friendly unique identifier
  title: "Robotics Intern",
  company: "Awesome Robotics Lab",
  location: "Hong Kong",
  period: "June 2026 – August 2026",
  description: "Brief 1-sentence summary.",
  bullets: [
    "Pioneered SLAM optimization using ROS 2.",
    "Integrated custom perception pipelines with PyTorch."
  ],
  skills: ["ROS 2", "SLAM", "PyTorch"] // Skills tag list for automatic badges
}
```

### 2. Projects & Mini-Projects
Major projects and mini-projects are located in `projects` and `miniProjects` arrays within `src/lib/resume-data.ts`.
- **Major Projects:** Include longer detailed paragraphs (`fullDescription`) and a bullet list of achievements, appearing on dedicated detail pages.
- **Mini-Projects:** Simple title-and-description cards ideal for quick hackathons, research setups, or experiments.

### 3. Adding University Courses
Open `src/lib/courses-data.ts`, go to `export const courses`, and copy/paste a course template:
```typescript
{
  code: "COMP 3314",
  name: "Introduction to Machine Learning",
  semester: "2025-26 Sem 2",
  tag: "CS Elective", // Must match one of the tags in CourseTag (e.g. CS Elective, Computer Science, Physics)
  description: "Course syllabus overview or description.",
  important: true,    // Highlights the course with a prominent golden star
}
```

---

## 🖼️ Media & Image Uploads
- Put project screenshots or videos in `/src/assets/Images (or Videos)`
- Reference them in the project's `media` array using a leading slash (e.g., `src: "/images/my-project.jpg"`).
