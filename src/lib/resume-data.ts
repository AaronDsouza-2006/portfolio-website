/**
 * 📝 PORTFOLIO DATA CONFIGURATION GUIDE
 * 
 * This file acts as the single source of truth for all your portfolio data.
 * To update your portfolio (experiences, projects, education, etc.), simply modify 
 * the JSON-like structures below.
 * 
 * 💡 TIPS FOR QUICK MONTHLY UPDATES:
 * - Copy and paste one of the TEMPLATES below to add a new project or work experience.
 * - Make sure the 'slug' field contains unique, lowercase, URL-safe characters (e.g. "my-cool-project").
 * - Tag lists will auto-render as beautiful high-contrast badges throughout the site.
 * 
 * 📋 TEMPLATES TO COPY & PASTE:
 * 
 * -- NEW EXPERIENCE TEMPLATE:
 * {
 *   slug: "unique-slug-name",
 *   title: "Your Role Title",
 *   company: "Company Name",
 *   location: "City, Country",
 *   period: "Month Year – Present / Month Year",
 *   description: "A 1-sentence highlight of your main focus.",
 *   bullets: [
 *     "Detailed bullet describing a core achievement or task.",
 *     "Another detailed accomplishment bullet."
 *   ],
 *   skills: ["React", "Python", "ROS2"] // Tag list that will auto-generate badges
 * }
 * 
 * -- NEW PROJECT TEMPLATE:
 * {
 *   slug: "new-project-slug",
 *   title: "Cool Project Title",
 *   description: "Short 1-2 sentence overview for the grid cards.",
 *   fullDescription: "Detailed paragraphs shown on the dedicated project page.",
 *   bullets: [
 *     "Key feature or development achievement.",
 *     "Another major milestone."
 *   ],
 *   tags: ["YOLOv8", "OpenCV", "Robotics"],
 *   github: "https://github.com/...", // Optional
 *   demo: "https://...", // Optional
 *   media: [] // Set images here
 * }
 */

export const personalInfo = {
  name: "Aaron Chris Dsouza",
  title: "Robotics & AI Engineer",
  tagline: "",
  phone: "+852-65366419",
  email: "aaroncdesouza@gmail.com",
  linkedin: "https://www.linkedin.com/in/aaron-dsouza-014a20321/",
  github: "https://github.com/AaronDsouza-2006/", 
  summary: `Computer Science Engineering student building embodied AI and robotic systems. 
  My work spans VLA-based manipulation, autonomous navigation, robot perception, and deep learning, from building a hierarchical robotic agent framework to implementing Transformers from scratch.`,
};

export const skills = {
  roboticsStack: [
    {
      category: "Middleware",
      items: [
        { name: "ROS", description: "RoboClaw" },
        { name: "ROS 2", description: "Navigation and Mapping in Robot Dog, Pick-and-Drop Robot" }
      ]
    },
    {
      category: "Embodied AI",
      items: [
        { name: "Pi-Zero", description: "RoboClaw" },
        { name: "ACT", description: "RoboClaw" },
        { name: "LeRobot", description: "RoboClaw" }
      ]
    },
    {
      category: "Navigation",
      items: [
        { name: "Nav2", description: "Navigation and Mapping in Robot Dog" }
      ]
    },
    {
      category: "Odometry",
      items: [
        { name: "FAST-LIO2", description: "Navigation and Mapping in Robot Dog" }
      ]
    },
    {
      category: "Simulation",
      items: [
        { name: "MuJoCo", description: "ALOHA Digital Twin" },
        { name: "Gazebo", description: "" }
      ]
    },
    {
      category: "Vision",
      items: [
        { name: "Yolo", description: "Object Sorting Robot Arm" },
        { name: "OpenCV", description: "Objects Sorting Robot Arm, Gesture-Controlled Robotic Hand" }
      ]
    },
    {
      category: "Hardware",
      items: [
        { name: "ALOHA", description: "RoboClaw" },
        { name: "Unitree Go2", description: "Navigation and Mapping in Robot Dog" }
      ]
    }
  ],
  programmingLanguages: [
    { name: "Python", description: "" },
    { name: "C++", description: "" },
    { name: "C", description: "" },
    { name: "Java", description: "" }
  ],
  otherTools: [
    { name: "PyTorch", description: "Image Captioning Transformer, CNN and ResNet" },
    { name: "scikit-learn", description: "SVM Ensemble Learning CIFAR-10" },
    { name: "Docker", description: "" },
    { name: "Git" },
    { name: "Fusion 360", description: "Robotic Arm Gripper" },
    { name: "Arduino", description: "Gesture-Controlled Robotic Hand" },
    { name: "CUDA", description: "MLP in CUDA" }
  ]
};

export type WorkExperience = {
  slug: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string; // Short summary for cards
  bullets: string[];
  skills?: string[];
};

export const workExperience: WorkExperience[] = [
  {
    slug: "hku-innowing",
    title: "Student Research Assistant",
    company: "HKU Innowing",
    location: "Hong Kong",
    period: "January 2026 – May 2026",
    description: "Worked on the development and deployment of autonomous capabilities for a Unitree Go2 quadruped.",
    bullets: [
      "Developed a mapping and autonomous navigation system using FAST-LIO2 for odometry and 3D mapping, integrated with Nav2 for localization and navigation.",
      "Integrated and debugged multiple ROS 2 packages across perception, localization, mapping, and navigation",
      "Resolved real-world deployment challenges involving sensor configuration, coordinate transforms, and navigation behavior."
    ],
    skills: ["Robot Deployment", "SLAM", "System Integration"],
  },
  {
    slug: "seekr-ai",
    title: "Business Development Intern",
    company: "Seekr AI",
    location: "Hong Kong",
    period: "January 2026 – May 2026",
    description: "Contributed to business development, marketing and accessibility initiatives at an assistive technology startup.",
    bullets: [
      "Conducted market research to support product and business development decisions.",
      "Contributed to digital literacy initiatives and gathered insights through interactions with visually impaired users.",
      "Assisted in researching, drafting, and refining the co-founder's TEDx talk."
    ],
    skills: ["Market Research", "Accessibility", "Business Development"]
  },
  {
    slug: "embtron-india",
    title: "Intern",
    company: "Embtron India",
    location: "Bangalore, India",
    period: "June 2025 – August 2025",
    description: "Contributed to robotic automation development and industrial robot safety compliance.",
    bullets: [
      "Collaborated with a team to develop a robotic arm for automated segregation.",
      "Studied ISO 10218 industrial robot safety standards and created a compliance checklist to ensure safe, user-friendly design.",
    ],
    skills: ["Embedded Systems", "Safety Standards", "Robotic Arms"],
  },
];

// Helper function to get work experience by slug
export function getWorkExperienceBySlug(slug: string): WorkExperience | undefined {
  return workExperience.find((w) => w.slug === slug);
}

// Media type for images and videos in projects
export type MediaItem = {
  type: "image" | "video";
  src: string; // Path to image or video
  alt?: string; // Alt text for images
  caption?: string; // Optional caption
  poster?: string; // Optional poster for videos
};

// Project type with slug for individual pages
export type Project = {
  slug: string; // URL-friendly identifier
  title: string;
  description: string; // Short summary for cards
  fullDescription?: string; // Longer description for project page
  bullets: string[];
  tags: string[];
  github?: string; // GitHub repo URL
  demo?: string; // Live demo URL
  media: MediaItem[]; // Images and videos
};

//Keep top 3
export const projects: Project[] = [
  {
    slug: "roboclaw",
    title: "RoboClaw: A Robotic Agent Framework",
    description: "A hierarchical robotic agent framework combining LLM-based orchestration with VLA policies for multi-step physical task execution.",
    fullDescription: `Developing a robotic agent framework that combines LLM-based orchestration and planning with VLA models for physical task execution`,
    bullets: [
      "Designed a hierarchical architecture where an LLM orchestrator decomposes high-level goals into executable robotic subtasks.",
      "Employs a VLA model to translate the executable subtasks into robotic actions.",
      "Developed perception, memory, and orchestration modules for multi-step task execution.",
      "Integrated Pi0 and ACT policies on an AgileX Cobot Magic (ALOHA) bimanual platform."
    ],
    tags: ["VLA", "Orchestration", "ALOHA"],
    media: [],
  },
  {
    slug: "robotic-dog",
    title: "Mapping and Navigation on Unitree Go2",
    description: "Developed a SLAM-based autonomous navigation system for a Unitree Go2 robot dog using FAST-LIO2 and Nav2.",
    fullDescription: `Developed and deployed a mapping and autonomous navigation stack on a Unitree Go2 quadruped using FAST-LIO2 for LiDAR–IMU odometry and 3D mapping, integrated with Nav2 for autonomous navigation.`,
    bullets: [
        "Integrated a Livox Mid-70 LiDAR with the Unitree Go2 for real-world mapping and navigation",
        "Deployed FAST-LIO2 for LiDAR–IMU odometry and dense 3D mapping",
        "Integrated the resulting map representation with Nav2 for autonomous navigation",
        "Debugged ROS 2 transforms, sensor pipelines, and navigation behavior on physical hardware"
    ],
    tags: ["Unitree Go2", "FAST-LIO2", "Nav2"],
    media: [
      { type: "image", src: "/src/assets/Images/Unitree_go2.jpg"},
      { type: "image", src: "/src/assets/Images/3D_map.png"},
      { type: "video", src: "/src/assets/Videos/3D_map_creation.mp4"}
    ],
  },
  {
    slug: "sorting-robot-arm",
    title: "Object Sorting Robot Arm",
    description: "A vision-guided robotic system for autonomous object detection, classification, and sorting.",
    fullDescription: `Programmed a Dobot robotic arm to automatically detect, classify, and sort nuts, bolts, and screws. The system uses computer vision with YOLOv8 and OpenCV for object recognition, and AprilTags for spatial calibration.`,
    bullets: [
      "Trained a YOLOv8 model to detect and classify nuts, bolts, and screws.",
      "Used AprilTags and depth cameras to estimate spatial transformations between the camera and robot",
      "Integrated perception and manipulation pipelines to autonomously sort detected objects using a Dobot robotic arm."
    ],
    tags: ["YOLOv8", "OpenCV", "Robotic Arm"],
    media: [
      { type: "image", src: "/src/assets/Images/Yolo_demo.jpg"},
      { type: "video", src: "/src/assets/Videos/Sorting_demo.mp4"}
    ],
  },
];

// Helper function to get project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

// Mini Project type - simpler structure for smaller projects
export type MiniProject = {
  slug: string;
  title: string;
  description: string;
  fullDescription?: string;
  bullets?: string[];
  tags: string[];
  github?: string;
  media?: MediaItem[];
};

//Keep top 6; The rest can go to src/assets/Old_Data/Old_Data.txt
export const miniProjects: MiniProject[] = [

  {
    slug: "image-captioning-transformer",
    title: "Image Captioning Transformer",
    description: "Image captioning model combining a ResNet-18 visual encoder with an autoregressive Transformer decoder.",
    fullDescription: "Built an image captioning model combining a ResNet-18 visual encoder with an autoregressive Transformer decoder using self-attention and cross-attention.",
    bullets: [
      "Implemented the Transformer decoder architecture from scratch in PyTorch, including multi-head self-attention and cross-attention.",
      "Encodes images using a pre-trained ResNet-18 backbone",
      "Generates a vocabulary using training data and creates learned embeddings",
      "Trained the image-to-text model on Flickr8K using teacher forcing"
    ],
    tags: ["Transformer", "PyTorch"],
    github: "https://github.com/AaronDsouza-2006/Image-Captioning-Transformer",
    media: [
      { type: "image", src: "/src/assets/Images/Image_Caption_Example.jpg", caption: "A not-so-great example of the results"},
    ]
  },
  {
    slug: "cuda-mlp",
    title: "MLP in CUDA",
    description: "A Multi-Layer Perceptron Neural Network implemented from scratch using CUDA for GPU-acceleration",
    fullDescription: "Implemented a Multi-Layer Perceptron (MLP) neural network written from scratch using C++ and NVIDIA CUDA. This project focuses on utilizing parallel GPU computation to accelerate the computationally intensive forward and backpropagation training passes of an artificial neural network",
    bullets: [
      "Implemented custom CUDA kernels for matrix multiplication, bias addition, and activation operations.",
      "Manually derived and implemented gradients for weights and biases (no autograd).",
      "Built the complete training pipeline, including forward propagation, backpropagation, parameter updates, and GPU memory management.",
      "Achieved a 97.00% accuracy on MNIST test set"
    ],
    tags: ["CUDA", "Deep Learning"],
    github: "https://github.com/AaronDsouza-2006/CUDA-MLP",
    media: [],
  },
  {
    slug: "robotic-hand",
    title: "Gesture-Controlled Robotic Hand",
    description: "Vision-controlled robotic hand that mirrors hand movements using MediaPipe and Arduino ",
    fullDescription: "Built a robotic hand control pipeline that detects hand landmarks with MediaPipe, estimates finger joint angles, and sends commands to an Arduino controlling seven servo motors.",
    bullets: [
      "Developed a Python vision pipeline utilizing MediaPipe and OpenCV to track human hand gestures",
      "Programmed the Arduino to map incoming commands to seven servo motors controlling the robotic hand.",
    ],
    tags: ["Arduino", "MediaPipe"],
    github: "https://github.com/AaronDsouza-2006/Robotic_Hand",
    media: [
      { type: "image", src: "/src/assets/Images/robotic-hand.jpg"},
      { type: "video", src: "/src/assets/Videos/Robotic_Hand_demo_video.mp4"}
    ],
  },
  {
    slug: "mlp-cnn-pytorch",
    title: "CNN and ResNet in PyTorch",
    description: "Implementation of CNN and ResNet architectures using PyTorch for image classification",
    fullDescription: "Implemented and trained CNN and ResNet architectures in PyTorch to study deep convolutional networks and the effect of residual connections.",
    bullets: [
      "Achieved 68.40% accuracy using CNNs and 88.91% accuracy using an 18-layer ResNet on CIFAR-10",
      "The ResNet features 18-Layer Deep network with skip connections"
    ],
    tags: ["PyTorch", "Deep Learning"],
    github: "https://github.com/AaronDsouza-2006/PyTorch-Neural-Networks",
    media: [],
  },
  {
    slug: "pick-and-drop-robot",
    title: "Pick-and-Drop Robot",
    description: "A ROS2-based robotic system for teleoperated movement and pick-and-place operations.",
    fullDescription: "Developed a ROS2-based control system that maps controller inputs to robot motion and pneumatic gripper actuation for pick-and-place tasks.",
    bullets: [
      "Maps joystick inputs directly to robot velocity and pneumatic control",
      "Integrated motion control and pneumatic valve actuation for pick-and-place operations."
    ],
    tags: ["ROS2", "Motion Control"],
    media: [
      { type: "video", src: "/src/assets/Videos/pick_drop_robot_demo.mp4"}
    ],
  },
  {
    slug: "robotic-arm-gripper",
    title: "Robotic Arm Gripper in Fusion 360",
    description: "3D CAD design of a robotic arm gripper mechanism in Autodesk Fusion 360",
    fullDescription: "Designed a robotic arm gripper in Autodesk Fusion 360 to develop practical experience with CAD modeling, mechanical assemblies, and robotic mechanism design.",
    bullets: [
      "Implemented as a project to learn Computer-aided design (CAD) and Fusion 360.",
    ],
    tags: ["Fusion 360", "CAD", "Robotics"],
    media: [
        { type: "video", src: "/src/assets/Videos/Gripper_demo.mp4"}
    ],
  },
];

// Helper function to get mini project by slug
export function getMiniProjectBySlug(slug: string): MiniProject | undefined {
  return miniProjects.find((p) => p.slug === slug);
}

export const education = [
  {
    degree: "Bachelor of Engineering (Computer Science)",
    institution: "The University of Hong Kong",
    location: "Hong Kong",
    period: "2024 – 2028",
    grade: "CGPA: 3.51 / 4.3",
  },
  {
    degree: "Senior Secondary (12th)",
    institution: "RV Pre-University College (PUE)",
    location: "Bangalore, India",
    period: "2022 – 2024",
    grade: "Percentage: 97%",
  },
  {
    degree: "Secondary School (10th)",
    institution: "Holy Spirit School (CICSE)",
    location: "Bangalore, India",
    period: "2012 – 2022",
    grade: "Percentage: 95%",
  },
];

//Keep top 4
export const achievements = [
  {
    title: "Full-Tuition Entrance Scholarship",
    description: "Awarded a full-tuition scholarship for undergraduate study at the University of Hong Kong.",
    icon: "scholarship",
  },
  {
    title: "Robot Arm Challenge Runner-up",
    description: "Built a vision-guided robotic system for autonomous object detection and sorting.",
    icon: "trophy",
  },
  {
    title: "Gen AI Hackathon Top 10",
    description: "Led the development of ArtRevive, an AI-assisted art restoration system, to a top-10 finish..",
    icon: "award",
  },
  {
    title: "HKSEC semi-finalist",
    description: "Developed NAVI, an AI-powered navigation assistant for visually impaired users.",
    icon: "lightbulb",
  }
];
