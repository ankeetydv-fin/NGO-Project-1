/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *  REPORTS & TRANSPARENCY
 *  Edit this file to update annual reports,
 *  financial statements, and certifications.
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

import type { ReportItem } from "@/types/content";

export const annualReports: ReportItem[] = [
  { title: "Annual Report 2024–25", year: "2024-25", pages: "48 pages", size: "PDF • 4.2 MB", type: "annual" },
  { title: "Annual Report 2023–24", year: "2023-24", pages: "42 pages", size: "PDF • 3.8 MB", type: "annual" },
  { title: "Annual Report 2022–23", year: "2022-23", pages: "38 pages", size: "PDF • 3.5 MB", type: "annual" },
  { title: "Annual Report 2021–22", year: "2021-22", pages: "34 pages", size: "PDF • 3.1 MB", type: "annual" },
];

export const financialReports: ReportItem[] = [
  { title: "Audited Financial Statement FY 2024", year: "FY 2024", type: "financial" },
  { title: "Audited Financial Statement FY 2023", year: "FY 2023", type: "financial" },
  { title: "Audited Financial Statement FY 2022", year: "FY 2022", type: "financial" },
];

export const impactReports: ReportItem[] = [
  { title: "Impact Assessment Report 2024", year: "2024", type: "impact" },
  { title: "Program Evaluation: Education", year: "2024", type: "impact" },
  { title: "Program Evaluation: Healthcare", year: "2024", type: "impact" },
  { title: "Clean Water Initiative — Outcomes Report", year: "2023", type: "impact" },
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
    year: "2024",
  },
];

export const reportsPageMeta = {
  title: "Reports & Transparency",
  subtitle:
    "We believe in complete openness. Explore our annual reports, financial statements, and impact assessments.",
  breadcrumb: "Open Books",
};
