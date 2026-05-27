/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *  REPORTS & TRANSPARENCY
 *  Edit this file to update annual reports,
 *  financial statements, and certifications.
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

import type { ReportItem } from "@/types/content";

export const annualReports: ReportItem[] = [
  { title: "Annual Report 2024–25", year: "2024-25", pages: "32 pages", size: "PDF • 2.8 MB", type: "annual" },
  { title: "Founding Year Report (Feb–Mar 2025)", year: "2025", pages: "16 pages", size: "PDF • 1.4 MB", type: "annual" },
];

export const financialReports: ReportItem[] = [
  { title: "Audited Financial Statement FY 2024-25", year: "FY 2024-25", type: "financial" },
  { title: "Initial Funding Report FY 2024-25", year: "FY 2024-25", type: "financial" },
];

export const impactReports: ReportItem[] = [
  { title: "Impact Assessment Report 2024-25", year: "2024-25", type: "impact" },
  { title: "Program Evaluation: Education", year: "2024-25", type: "impact" },
  { title: "Program Evaluation: Healthcare", year: "2024-25", type: "impact" },
];

export const certifications: string[] = [
  "FCRA Registered Organization",
  "80G Tax Exemption Certificate",
  "12A Registration under IT Act",
  "Registered under Societies Registration Act, 1860",
  "CSR-1 Registration with MCA",
];

export const transparencyReports = [
  {
    title: "Annual Report 2024–25",
    description: "Complete overview of our programs, financials, and impact for the past year.",
    iconName: "FileText",
    year: "2024-25",
  },
  {
    title: "Audited Financial Statement",
    description: "CA-audited financial statements showing how every rupee was used.",
    iconName: "Download",
    year: "FY 2024-25",
  },
  {
    title: "Impact Assessment Report",
    description: "Third-party evaluation of our programs and their measurable outcomes.",
    iconName: "ShieldCheck",
    year: "2024-25",
  },
];

export const reportsPageMeta = {
  title: "Reports & Transparency",
  subtitle:
    "We believe in complete openness. Explore our annual reports, financial statements, and impact assessments.",
  breadcrumb: "Open Books",
};
