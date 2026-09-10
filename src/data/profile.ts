export type Expertise = { title: string; description: string; items: string[]; icon: 'layers' | 'database' | 'network' | 'arrow' | 'code' }
export type Experience = { project: string; role: string; period: string; environment: string; responsibilities: string[]; technologies: string[] }
export type Project = { title: string; label: string; description: string; tags: string[] }

export const profile = {
  name: 'Firdaus Azlan',
  title: 'Enterprise Systems & Software Developer',
  role: 'Infor SyteLine / CloudSuite Industrial · ERP, Data & Integration',
  intro: 'I build practical software solutions for enterprise systems through data migration tools, SQL and database development, system integration, automation, and ERP customization.',
  about: 'I work at the intersection of software development, enterprise systems, and data. I enjoy understanding how a business process operates, tracing the technical details behind a problem, and delivering practical solutions that are reliable and supportable over time.',
  location: '[LOCATION]',
  email: '[EMAIL]',
  linkedIn: '[LINKEDIN URL]',
  github: '[GITHUB URL]',
  resume: '[RESUME URL]',
}

export const expertise: Expertise[] = [
  { title: 'ERP & SyteLine', description: 'Configuration and extension points within enterprise ERP workflows.', icon: 'layers', items: ['Infor SyteLine / CloudSuite Industrial', 'Forms & IDOs', 'Event Handlers & Workflows', 'Background Tasks & Reports'] },
  { title: 'Database & SQL', description: 'Structured investigation and data-focused problem solving.', icon: 'database', items: ['Microsoft SQL Server', 'SQL Queries & Stored Procedures', 'Data Analysis', 'Performance Troubleshooting'] },
  { title: 'System Integration', description: 'Connecting ERP processes with the wider application landscape.', icon: 'network', items: ['REST APIs & Web Services', 'ERP Integrations', 'External System Integrations', 'Email / SMTP Integrations'] },
  { title: 'Data Migration', description: 'Careful movement of data between legacy and ERP environments.', icon: 'arrow', items: ['Data Extraction & Transformation', 'Data Validation', 'Data Loading', 'Migration Utilities'] },
  { title: 'Application Development', description: 'Business-focused software and automation for repeatable operational work.', icon: 'code', items: ['Web Applications', 'REST API Development', 'Workflow Automation', 'Maintainable Utilities'] },
]

export const modules = ['Manufacturing', 'Job Management', 'Inventory', 'Purchasing', 'Sales', 'Planning / MRP', 'Finance', 'Accounts Payable', 'Accounts Receivable', 'General Ledger', 'Bank Reconciliation', 'Production & Scheduling']

export const experience: Experience[] = [
  { project: 'Enterprise ERP Delivery', role: 'ERP Technical Consulting', period: 'Core experience', environment: 'Infor SyteLine / CloudSuite Industrial', responsibilities: ['Translate business processes into practical ERP solutions', 'Develop SQL, data support, and issue investigations', 'Prepare, validate, and load data for migration workflows', 'Support integrations and user-facing troubleshooting'], technologies: ['SyteLine', 'SQL Server', 'Data migration'] },
  { project: 'Software & Data Solutions', role: 'Enterprise Systems Development', period: 'Selected capabilities', environment: 'SQL, APIs, automation, and web applications', responsibilities: ['Build maintainable forms, reports, utilities, and workflows', 'Connect enterprise processes through APIs and services', 'Automate repeatable operational tasks and data handling', 'Document technical changes for long-term support'], technologies: ['CloudSuite Industrial', 'REST APIs', 'Automation'] },
]

export const projects: Project[] = [
  { title: 'Data Migration Tools', label: 'Enterprise data workflow', description: 'Utilities designed to support ERP data extraction, transformation, validation, and loading.', tags: ['Data validation', 'Transformation', 'Loading'] },
  { title: 'SyteLine Customization', label: 'ERP application development', description: 'Custom ERP functionality using forms, IDOs, event handlers, stored procedures, and business logic.', tags: ['Forms', 'IDOs', 'Event handlers'] },
  { title: 'ERP Integration', label: 'Systems integration', description: 'Integration between SyteLine and external systems using APIs and related integration technologies.', tags: ['REST API', 'Web services', 'Integration'] },
]

export const skills = [
  { group: 'Enterprise Systems', items: ['Infor SyteLine', 'Infor CloudSuite Industrial', 'Infor OS', 'ERP'] },
  { group: 'Database & Data', items: ['SQL Server', 'SQL', 'Stored Procedures', 'MySQL', 'Data Transformation'] },
  { group: 'Software Development', items: ['JavaScript', 'TypeScript', 'React', 'REST API', 'VB.NET', 'C#'] },
  { group: 'Tools & Automation', items: ['Git', 'GitHub', 'Visual Studio Code', 'n8n', 'Airtable', 'Supabase'] },
  { group: 'AI Tools', items: ['Codex', 'Claude Code', 'Gemini'] },
]

export const approach = [
  ['01', 'Understand', 'Understand the business requirement and existing process before choosing a technical direction.'],
  ['02', 'Investigate', 'Trace the issue through applications, databases, integrations, and operational workflows.'],
  ['03', 'Build', 'Develop a practical solution with maintainability and future support in mind.'],
  ['04', 'Validate', 'Test the solution against meaningful business scenarios, data rules, and edge cases.'],
  ['05', 'Deliver', 'Document the solution so it can be supported and improved with confidence.'],
]
