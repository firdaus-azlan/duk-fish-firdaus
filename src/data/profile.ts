export type Expertise = { title: string; description: string; items: string[]; icon: 'layers' | 'database' | 'network' | 'arrow' }
export type Experience = { project: string; role: string; period: string; environment: string; responsibilities: string[]; technologies: string[] }
export type Project = { title: string; label: string; description: string; tags: string[] }

// Replace bracketed placeholders here with your actual professional information.
export const profile = {
  name: 'Firdaus Azlan',
  title: 'Infor SyteLine / CloudSuite Industrial',
  role: 'ERP Technical Consultant',
  intro: 'I help teams get more value from SyteLine ERP through technical troubleshooting, thoughtful customizations, reliable integrations, reporting, SQL, and data migration.',
  about: 'I work at the intersection of ERP technology and business process. My focus is understanding how a manufacturing environment operates, diagnosing the technical details behind a problem, and delivering practical solutions that are supportable over time.',
  location: '[LOCATION]',
  email: '[EMAIL]',
  linkedIn: '[LINKEDIN URL]',
  github: '[GITHUB URL]',
}

export const expertise: Expertise[] = [
  { title: 'ERP & SyteLine', description: 'Configuration and extension points within the ERP platform.', icon: 'layers', items: ['Infor SyteLine / CloudSuite Industrial', 'Forms & IDOs', 'Event Handlers & Workflows', 'Background Tasks & Reports'] },
  { title: 'Database & Technical', description: 'Structured investigation and data-focused problem solving.', icon: 'database', items: ['Microsoft SQL Server', 'SQL Queries & Stored Procedures', 'Data Analysis', 'Performance Troubleshooting'] },
  { title: 'Integration', description: 'Connecting ERP processes with the wider application landscape.', icon: 'network', items: ['REST APIs & Web Services', 'ERP Integrations', 'External System Integrations', 'Email / SMTP Integrations'] },
  { title: 'Data Migration', description: 'Careful movement of data between legacy and ERP environments.', icon: 'arrow', items: ['Data Extraction & Transformation', 'Data Validation', 'Data Loading', 'Migration Utilities'] },
]

// Mark these as editable until you confirm the modules you have worked with.
export const modules = ['Manufacturing', 'Job Management', 'Inventory', 'Purchasing', 'Sales', 'Planning / MRP', 'Finance', 'Accounts Payable', 'Accounts Receivable', 'General Ledger', 'Bank Reconciliation', 'Production & Scheduling']

export const experience: Experience[] = [
  { project: '[PROJECT / COMPANY]', role: 'ERP / SyteLine Implementation', period: '[YEAR] – [YEAR]', environment: '[SYTELINE VERSION / ENVIRONMENT]', responsibilities: ['SyteLine customization and technical configuration', 'SQL development, data support, and issue investigation', 'Data migration preparation, validation, and loading', 'Integration and user-facing troubleshooting'], technologies: ['SyteLine', 'SQL Server', '[TECHNOLOGY]'] },
  { project: '[PROJECT / COMPANY]', role: 'ERP Technical Support / Enhancement', period: '[YEAR] – [YEAR]', environment: '[SYTELINE VERSION / ENVIRONMENT]', responsibilities: ['Investigate business process and application issues', 'Build maintainable forms, event handlers, and reports', 'Support data analysis and operational reporting', 'Document technical changes and handover details'], technologies: ['CloudSuite Industrial', 'SQL', '[TECHNOLOGY]'] },
]

export const projects: Project[] = [
  { title: 'Data Migration Tools', label: 'Example project — replace with your details', description: 'Utilities designed to support ERP data extraction, transformation, validation, and loading.', tags: ['Data validation', 'Transformation', 'Loading'] },
  { title: 'SyteLine Customization', label: 'Example project — replace with your details', description: 'Custom ERP functionality using forms, IDOs, event handlers, stored procedures, and business logic.', tags: ['Forms', 'IDOs', 'Event handlers'] },
  { title: 'ERP Integration', label: 'Example project — replace with your details', description: 'Integration between SyteLine and external systems using APIs and related integration technologies.', tags: ['REST API', 'Web services', 'Integration'] },
]

export const skills = [
  { group: 'ERP', items: ['Infor SyteLine', 'Infor CloudSuite Industrial', 'Infor OS'] },
  { group: 'Database', items: ['SQL Server', 'SQL', 'Stored Procedures', 'MySQL'] },
  { group: 'Development', items: ['JavaScript', 'TypeScript', 'React', 'REST API', 'VB.NET', 'C#'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'Visual Studio Code', 'n8n', 'Airtable', 'Supabase'] },
  { group: 'AI', items: ['Codex', 'Claude Code', 'Gemini'] },
]

export const approach = [
  ['01', 'Understand', 'Understand the business requirement and existing ERP process.'],
  ['02', 'Investigate', 'Trace the issue through forms, IDOs, event handlers, SQL, integrations, and logs.'],
  ['03', 'Solve', 'Develop a practical solution with future maintenance in mind.'],
  ['04', 'Validate', 'Test the solution against meaningful business scenarios.'],
  ['05', 'Document', 'Record the solution so it can be supported with confidence.'],
]
