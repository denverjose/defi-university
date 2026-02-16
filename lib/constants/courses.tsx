import { lessons } from "./lessons";

export const courses = [
  {
    id: "1",
    name: "Solidity",
    description: "Learn to write smart contracts on Ethereum.",
    levels: [
      {
        id: "noob-solidity",
        level: "Noob",
        description:
          "Start here if you’re new to writing smart contracts! Learn Solidity programming language and smart contract development from industry-leading experts and kickstart your career as a web3 developer.",
        lessons: lessons,
      },
      {
        id: "intermediate-solidity",
        level: "Intermediate",
        description:
          "Take your Solidity skills to the next level! Build more complex smart contracts, optimize gas efficiency, and deepen your understanding of security best practices. Learn from industry-leading experts and advance your journey as a web3 developer.",
        lessons: lessons,
      },
      {
        id: "advanced-solidity",
        level: "Advanced",
        description:
          "Master Solidity and become a blockchain expert! Tackle advanced smart contract design patterns, security vulnerabilities, and performance optimizations. Learn from top industry professionals and refine your skills to develop high-performance decentralized applications.",
        lessons: lessons,
      },
    ],
  },
  {
    id: "2",
    name: "Python",
    description: "Master Python programming from basics to advanced topics.",
    levels: [
      {
        id: "noob-python",
        level: "Noob",
        description:
          "Start your journey into blockchain development with Python! Learn the fundamentals of Python programming and how to interact with smart contracts using web3 libraries. Build a strong foundation for blockchain automation, scripting, and backend development.",
        lessons: lessons,
      },
      {
        id: "intermediate-python",
        level: "Intermediate",
        description:
          "Take your Python skills further! Learn how to develop secure and efficient blockchain applications using frameworks like Web3.py. Dive into real-world use cases, optimize contract interactions, and enhance your understanding of blockchain automation.",
        lessons: lessons,
      },
      {
        id: "advanced-python",
        level: "Advanced",
        description:
          " Master Python for blockchain development! Work on advanced DeFi Applications, integrate smart contracts with backend systems, and implement cutting-edge security measures. Learn from industry experts and push the limits of Python in the Web3 ecosystem.",
        lessons: lessons,
      },
    ],
  },
  {
    id: "3",
    name: "Production",
    description: "Best practices for taking your project to production.",
    levels: [
      {
        id: "noob-production",
        level: "Noob",
        description:
          "Learn the essential principles of deploying and maintaining smart contracts in production! Understand test networks, contract verification, and basic security best practices to ensure your dApps are reliable and scalable.",
        lessons: lessons,
      },
      {
        id: "intermediate-production",
        level: "Intermediate",
        description:
          "Go beyond the basics and optimize your smart contracts for production. Learn gas-efficient coding techniques, advanced debugging, upgradeable contracts, and smart contract auditing. Develop secure and performant decentralized applications with confidence.",
        lessons: lessons,
      },
      {
        id: "advanced-production",
        level: "Advanced",
        description:
          "Become a pro at deploying high-performance smart contracts in real-world scenarios! Tackle complex security vulnerabilities, implement robust access control mechanisms, and ensure scalability. Gain hands-on experience with auditing tools, best practices, and enterprise-grade deployments.",
        lessons: lessons,
      },
    ],
  },
];
