// metadata.tsx
import { Metadata } from "next";
import { lessons } from "@/lib/constants/lessons";
import { getCourseById } from "@/lib/helpers/get-courses";

const aditionalKeywords = ["DeFiU", "Solidity", "Production", "Python"];

const metadataKeywords = [
  "Web3 courses",
  "blockchain development",
  "DeFi training",
  "smart contract development",
  "Ethereum programming",
  "Solidity course",
  "NFT development",
  "crypto coding",
];

metadataKeywords.join(...aditionalKeywords);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const stats = {
  totalClients: 10000,
  totalBusinessPartners: 500,
  totalYearsExperience: 9,
};

export const homepageMetadata: Metadata = {
  title:
    "DeFiU | Learn Web3 Development – Enroll in Blockchain & DeFi Courses Today!",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  description: `We are a B2B SaaS that fast-tracks business growth with analytics tools, marketing strategies, and dedicated mentorship for success.`,
  openGraph: {
    title:
      "DeFiU | Learn Web3 Development – Enroll in Blockchain & DeFi Courses Today!",
    description: `We are a B2B SaaS that fast-tracks business growth with analytics tools, marketing strategies, and dedicated mentorship for success.`,
  },
  keywords: metadataKeywords,
};

export const aboutMetadata: Metadata = {
  title:
    "About Us - Empowering Web3 Developers with Expert-Led Courses | DeFiU",
  description:
    "DeFiU is a platform for Web3 education, offering expert-led courses on blockchain, DeFi, and smart contracts. Join us and build the future of decentralized technology.",
  openGraph: {
    title:
      "About Us - Empowering Web3 Developers with Expert-Led Courses | DeFiU",
    description:
      "DeFiU is a platform for Web3 education, offering expert-led courses on blockchain, DeFi, and smart contracts. Join us and build the future of decentralized technology.",
  },
  keywords: metadataKeywords,
  robots: "index, follow",
};

export const loginMetadata: Metadata = {
  title: "Login to DeFiU - Access Your Web3 Courses",
  description:
    "Sign in to DeFiU and continue learning Web3 development, blockchain, and DeFi. Access your enrolled courses, track progress, and grow your skills.",
  openGraph: {
    title: "Login to DeFiU - Access Your Web3 Courses",
    description:
      "Sign in to DeFiU and continue learning Web3 development, blockchain, and DeFi. Access your enrolled courses, track progress, and grow your skills.",
  },
  keywords: metadataKeywords,
  robots: "noindex, nofollow",
};
export const registerMetadata: Metadata = {
  title: "Register to DeFiU - Access Your Web3 Courses",
  description:
    "Sign up to DeFiU and continue learning Web3 development, blockchain, and DeFi. Access your enrolled courses, track progress, and grow your skills.",
  openGraph: {
    title: "Register to DeFiU - Access Your Web3 Courses",
    description:
      "Sign up to DeFiU and continue learning Web3 development, blockchain, and DeFi. Access your enrolled courses, track progress, and grow your skills.",
  },
  keywords: metadataKeywords,
  robots: "noindex, nofollow",
};

export const coursesMetadata: Metadata = {
  title: "Web3 Courses - Learn Blockchain, DeFi, and Smart Contracts | DeFiU",
  description:
    "Explore our expert-led Web3 courses on blockchain development, DeFi, and smart contracts. Enroll today and start building the future of decentralized technology.",
  openGraph: {
    title: "Web3 Courses - Learn Blockchain, DeFi, and Smart Contracts | DeFiU",
    description:
      "Explore our expert-led Web3 courses on blockchain development, DeFi, and smart contracts. Enroll today and start building the future of decentralized technology.",
  },
  keywords: metadataKeywords,
  robots: "index, follow",
};
export const termsAndConditionsMetadata: Metadata = {
  title: "Terms & Conditions - DeFiU Course and Service Guidelines",
  description:
    "Review DeFiU's Terms & Conditions for using our fintech education platform. Understand the rules for course access, payments, user responsibilities, and compliance.",
  openGraph: {
    title: "Terms & Conditions - DeFiU Course and Service Guidelines",
    description:
      "Learn about DeFiU's Terms & Conditions, including user agreements, content usage, and platform policies.",
  },
  robots: "index, follow",
};

export const privacyPolicyMetadata: Metadata = {
  title: "Privacy Policy - How DeFiU Handles Your Data",
  description:
    "DeFiU's Privacy Policy explains how we collect, store, and protect your personal data while ensuring compliance with privacy regulations.",
  openGraph: {
    title: "Privacy Policy - How DeFiU Handles Your Data",
    description:
      "Understand how DeFiU collects, processes, and safeguards your data while maintaining transparency and security.",
  },
  robots: "index, follow",
};

export async function courseMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  let title = slug.replace(/-/g, " ");
  title = title.replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word

  let description = `Master ${title} with expert guidance, hands-on projects, and real-world applications.`;

  const courseDescriptions: Record<string, string> = {
    "Noob Solidity":
      "Learn Solidity from scratch and start building smart contracts.",
    "Intermediate Solidity":
      "Enhance your Solidity skills with advanced smart contract techniques.",
    "Advanced Solidity":
      "Become an expert in Solidity and optimize your blockchain applications.",
    "Noob Python": "Get started with Python programming and basic scripting.",
    "Intermediate Python":
      "Improve your Python skills with real-world applications and OOP.",
    "Advanced Python": "Master Python with advanced concepts and automation.",
    "Noob Production": "Learn the basics of production systems and workflows.",
    "Intermediate Production":
      "Enhance your production knowledge with real-world case studies.",
    "Advanced Production":
      "Master production-level systems and scalability strategies.",
  };

  if (courseDescriptions[title]) {
    description = courseDescriptions[title];
  }

  return {
    title: `${title} - Comprehensive Course`,
    description,
    keywords: metadataKeywords,
    robots: "index, follow",
  };
}

export async function chapterMetadata({
  params,
}: {
  params: { slug: string; lesson: string; chapter: string };
}): Promise<Metadata> {
  const { slug, lesson, chapter } = await params;
  const course = await getCourseById(slug);
  const lessonData = lessons.find((l) => l.id === lesson);
  const chapterData = lessonData?.chapters.find((c) => c.id === chapter);

  if (!course || !lessonData || !chapterData) {
    return {
      title: "Chapter Not Found - DeFiU",
      description: "The requested chapter could not be found in DeFiU courses.",
      robots: "noindex, nofollow",
    };
  }

  return {
    title: `${chapterData.title} - ${lessonData.title} | DeFiU`,
    description: `Learn ${chapterData.title} in ${lessonData.title}, part of the ${course.name} course on DeFiU. Enhance your skills in blockchain, Solidity, Python, and fintech.`,
    openGraph: {
      title: `${chapterData.title} - ${lessonData.title} | DeFiU`,
      description: `Explore ${chapterData.title} in ${lessonData.title} and advance your knowledge in fintech, blockchain, and programming.`,
    },
    keywords: metadataKeywords,
    robots: "index, follow",
  };
}
