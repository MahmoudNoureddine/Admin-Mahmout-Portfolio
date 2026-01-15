import { Project, SkillCategory, Certification, Experience, Article } from './types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Security & Monitoring",
    skills: ["Splunk", "Wazuh SIEM", "Nmap", "Wireshark", "Antivirus/Endpoint Protection"]
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["AWS (EC2, S3, IAM, VPC)", "Azure", "Windows Server 2016-2022", "Linux (Ubuntu, Kali, Rocky)"]
  },
  {
    title: "Administration",
    skills: ["Microsoft 365 (Intune, Entra ID, Teams)", "Active Directory", "Group Policy", "PowerShell Scripting"]
  },
  {
    title: "Networking",
    skills: ["TCP/IP", "DNS", "VPN", "Firewalls (pfSense)", "Network Troubleshooting"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Google Cybersecurity Professional Certificate",
    status: "Completed",
    date: "2024",
    issuer: "Google"
  },
  {
    name: "AWS Cloud Technology Consultant Professional Certificate",
    status: "Completed",
    date: "2024",
    issuer: "AWS"
  },
  {
    name: "CCNA (Cisco Certified Network Associate)",
    status: "In Progress",
    issuer: "Cisco"
  },
  {
    name: "ISC2 Certified in Cybersecurity (CC)",
    status: "In Progress",
    issuer: "ISC2"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Cloud & Network Specialist",
    company: "Nation Enterprises AB",
    location: "Stockholm, Sweden",
    duration: "January 2026 – Present",
    impact: [
      "Managed AWS cloud environments, focusing on IAM user management and EC2/S3 configuration.",
      "Implemented security best practices for cloud resources and network infrastructure to harden the environment.",
      "Authored technical documentation for IT procedures and troubleshooting guides to standardize operations."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "SEC-01",
    title: "SOC Implementation",
    category: "Security Operations",
    summary: "Designed a centralized log management system using Splunk SIEM to monitor security events. Integrated security automation tools (Shuffle SOAR) and case management (TheHive) to streamline incident response.",
    status: "SUCCESS",
    tags: ["Splunk", "SOAR", "SIEM", "TheHive"]
  },
  {
    id: "ENT-02",
    title: "Enterprise Microsoft 365 Infrastructure",
    category: "Cloud Administration",
    summary: "Deployed a secure Microsoft 365 tenant with Entra ID and Hybrid Identity synchronization. Enhanced security posture by implementing Conditional Access policies and Multi-Factor Authentication (MFA).",
    status: "COMPLETE",
    tags: ["Entra ID", "M365", "Intune", "MFA"]
  }
];

export const ARTICLES: Article[] = [
  {
    title: "Hardening Cloud Environments: A Security-First Approach to AWS IAM",
    description: "Deep dive into implementing least-privileged access and securing cloud infrastructure using AWS Identity and Access Management.",
    date: "2024-05-15",
    url: "https://medium.com",
    tags: ["AWS", "Security", "Cloud"]
  },
  {
    title: "The SIEM Revolution: Monitoring Active Threats in Real-Time",
    description: "An overview of how modern SOCs utilize Splunk and Wazuh to detect and respond to infrastructure breaches before they escalate.",
    date: "2024-04-20",
    url: "https://medium.com",
    tags: ["SIEM", "Splunk", "CyberSecurity"]
  }
];

export const SOCIAL_LINKS = {
  linkedin: "http://www.linkedin.com/in/mahmoud-noureddine-a66714365",
  github: "https://github.com/MahmoudNoureddine/Portfolio",
  email: "mahmoudnourdein@gmail.com"
};