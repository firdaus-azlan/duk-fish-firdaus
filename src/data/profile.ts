export type Expertise = { title: string; description: string; items: string[]; icon: 'layers' | 'database' | 'network' | 'arrow' | 'code' }
export type Experience = { project: string; role: string; period: string; environment: string; responsibilities: string[]; technologies: string[] }
export type Project = { title: string; label: string; description: string; tags: string[]; role?: string; stack?: string[]; achievements?: string[]; flow?: string[] }

export const profile = {
  name: 'Firdaus Azlan',
  title: 'Infor SyteLine & Enterprise Systems Developer',
  role: 'ERP Development & Customization · CloudSuite Industrial, Data & Integration',
  intro: 'Infor SyteLine developer specializing in ERP customization, Mongoose forms, IDOs, event handlers, SQL Server, integrations, automation, and data migration.',
  about: 'I specialize in Infor SyteLine ERP development and customization, with experience across SQL and database development, system integration, automation, and data migration. My work focuses on solving real-world business requirements by extending ERP functionality, connecting systems, improving workflows, and building reliable tools around enterprise data.',
  location: '[LOCATION]',
  email: 'contact@firdausazlan.my',
  linkedIn: 'https://www.linkedin.com/in/firdaus-azlan-b29241193',
  github: '[GITHUB URL]',
  resume: '/resume/Firdaus_Azlan_Resume.pdf',
}

export const expertise: Expertise[] = [
  { title: 'Infor SyteLine Development', description: 'Extending SyteLine with maintainable forms, business logic, and ERP workflows.', icon: 'layers', items: ['Mongoose / WinStudio', 'Forms, IDOs & IDO Methods', 'Event Handlers', 'Custom Assemblies · C# / .NET'] },
  { title: 'ERP Integration', description: 'Connecting SyteLine with banking, external systems, and operational services.', icon: 'network', items: ['Bank H2H & ACK Processing', 'SOAP / REST · XML / JSON', 'File-based Integrations', 'Data Exchange & Automation'] },
  { title: 'Data Migration', description: 'Moving and validating ERP data across staging and live environments.', icon: 'arrow', items: ['Transformation & Mapping', 'Validation & Reconciliation', 'High-volume Processing', 'Migration Utilities'] },
  { title: 'SQL & Database Development', description: 'Supporting ERP operations with structured data processing and troubleshooting.', icon: 'database', items: ['SQL Server', 'Complex Queries & Procedures', 'Data Validation', 'Performance Troubleshooting'] },
  { title: 'Enterprise Software & Automation', description: 'Building supporting tools that improve ERP workflows and data management.', icon: 'code', items: ['React · TypeScript', 'Node.js · Express · NestJS', 'MySQL', 'Internal Tools & Automation'] },
]

export const modules = ['Manufacturing', 'Job Management', 'Inventory', 'Purchasing', 'Sales', 'Planning / MRP', 'Finance', 'Accounts Payable', 'Accounts Receivable', 'General Ledger', 'Bank Reconciliation', 'Production & Scheduling']

export const experience: Experience[] = [
  { project: 'Infor SyteLine ERP Development & Customization', role: 'ERP Development & Customization', period: 'Core experience', environment: 'Infor SyteLine / CloudSuite Industrial', responsibilities: ['Developing and extending Infor SyteLine to meet customer-specific business requirements through Mongoose forms, IDOs, IDO methods, event handlers, custom assemblies, SQL, and server-side business logic.'], technologies: ['Mongoose Forms', 'IDOs', 'Event Handlers', 'C# / .NET'] },
  { project: 'ERP Integration & Automation', role: 'Integration Development', period: 'Core experience', environment: 'SyteLine and external enterprise systems', responsibilities: ['Building integrations between SyteLine and external systems, including banking H2H, ACK processing, SOAP/REST APIs, file-based integrations, automated workflows, and system-to-system data exchange.'], technologies: ['Banking H2H', 'SOAP / REST', 'ACK Processing', 'Automation'] },
  { project: 'Data Migration & Reconciliation', role: 'Data & Migration Development', period: 'Core experience', environment: 'ERP staging and live environments', responsibilities: ['Developing tools and processes for ERP data migration, transformation, validation, mapping, high-volume transfers, and reconciliation between staging and live environments.'], technologies: ['Data Migration', 'Transformation', 'Validation', 'Reconciliation'] },
  { project: 'SQL & Database Development', role: 'SQL & Database Development', period: 'Core experience', environment: 'SQL Server and ERP databases', responsibilities: ['Designing complex SQL queries, stored procedures, data-processing logic, validation routines, and troubleshooting solutions to support ERP operations and custom business processes.'], technologies: ['SQL Server', 'Stored Procedures', 'Data Processing', 'Troubleshooting'] },
  { project: 'Enterprise Software Development', role: 'Enterprise Software Development', period: 'Selected capabilities', environment: 'React, TypeScript, Node.js, Express, NestJS, and MySQL', responsibilities: ['Building internal applications and tools using React, TypeScript, Node.js, Express, NestJS, and MySQL to improve ERP-related workflows, automation, administration, and data management.'], technologies: ['React', 'TypeScript', 'Node.js', 'MySQL'] },
]

export const projects: Project[] = [
  {
    title: 'Data Migration Tools',
    label: '03 · Data engineering',
    description: 'A full-stack platform for secure, high-volume ERP data migration, reconciliation, and synchronization validation across staging and live environments.',
    role: 'Developer',
    stack: ['React', 'TypeScript', 'Vite', 'Node.js', 'Express', 'NestJS', 'MySQL', 'SOAP / REST'],
    achievements: [
      'Re-engineered legacy n8n webhook workflows into a scalable microservices architecture with an Express/Node.js API gateway, NestJS validation service, and TypeScript upload handler.',
      'Architected Reconciliation Engine v2 to compare staging data with live ERP records using composite primary keys and property-level MATCH, DIFFERENT, and MISSING results.',
      'Built a type-aware SOAP/REST driver for Infor SyteLine, using keyset-paged loaders and metadata caching for high-volume transfers without exceeding API or memory limits.',
      'Strengthened enterprise security with stateless Bearer token authentication, hashed portal passwords, and protected ERP credentials from client-side exposure.',
      'Created a metadata-driven inheritance engine for configurable parent-child propagation, such as Blanket → Header → Line, managed through an admin interface.',
      'Developed an interactive React and TypeScript side-by-side comparison grid with mapping tools to make data-sync mismatches easy to investigate.',
    ],
    tags: ['Data reconciliation', 'ERP integration', 'Microservices'],
  },
  {
    title: 'Infor SyteLine Customization',
    label: '01 · Core ERP expertise',
    description: 'Enterprise ERP customization and extension work using Infor SyteLine’s native customization framework and supporting technologies.',
    role: 'Developer',
    stack: ['Infor SyteLine', 'Mongoose', 'WinStudio', 'IDOs', 'IDO Methods', 'Event Handlers', 'C# / .NET', 'SQL Server', 'Custom Assemblies'],
    achievements: [
      'Developed and customized Infor SyteLine forms using Mongoose, extending standard ERP screens with custom fields, calculations, buttons, filters, workflow-specific functionality, and form-level validation to enforce customer-specific business rules.',
      'Designed custom IDOs and IDO extensions to expose business data and operations while maintaining SyteLine’s native business-object architecture.',
      'Built custom IDO methods and server-side business logic for complex transactional processes, keeping business rules centralized and reducing client-side workarounds.',
      'Implemented SyteLine event handlers for pre- and post-processing, including validation, automatic field updates, data propagation, and custom transactional logic.',
      'Built custom .NET and C# assemblies to extend SyteLine beyond standard configuration capabilities and integrate external processing into ERP workflows.',
      'Developed and maintained SQL stored procedures, queries, views, and data-processing logic for reporting, validation, data correction, and custom ERP processes.',
      'Customized workflows across Jobs, Job Operations, Job Materials, Customers, Orders, Purchase Orders, Inventory, and Planning to match operational requirements.',
      'Automated parent-child data propagation, status-based updates, quantity calculations, and synchronization between related SyteLine records.',
      'Created REST and SOAP integrations to exchange data between SyteLine and external applications, including authentication, validation, and error handling.',
      'Troubleshot and optimized complex processes by tracing form events, IDO calls, event handlers, stored procedures, and database transactions to identify root causes and bottlenecks.',
      'Worked with SyteLine metadata and configuration to deliver maintainable customizations while minimizing changes to standard ERP functionality and improving upgrade compatibility.',
      'Developed reusable customization patterns and utilities to reduce duplicated logic across forms and modules and simplify future customer-specific enhancements.',
    ],
    tags: ['Forms', 'IDOs', 'Event handlers'],
  },
  {
    title: 'ERP Integration & Banking H2H',
    label: '02 · Enterprise integration',
    description: 'Integration and automation solutions connecting ERP systems with banking and external enterprise services.',
    role: 'Developer',
    stack: ['Bank H2H', 'SOAP', 'REST', 'XML', 'JSON', 'SFTP', 'SQL', 'Infor SyteLine'],
    flow: ['Bank', 'H2H', 'Integration', 'Validation / Mapping', 'ERP', 'Reconciliation'],
    achievements: [
      'Developed and maintained Bank Host-to-Host (H2H) integrations to automate the exchange of banking transaction data between financial institutions and ERP environments.',
      'Designed workflows to validate, transform, and map external banking data into SyteLine-compatible structures before processing.',
      'Developed integration logic using SyteLine IDOs and REST APIs to exchange master and transactional data with external applications.',
      'Implemented XML and JSON workflows with request and response handling, field mapping, validation, and error processing.',
      'Developed integration error handling, logging, retry processing, and transaction traceability to simplify troubleshooting of failed interfaces.',
      'Created custom SyteLine IDO methods and event-driven processes to trigger integration logic from ERP transactions and business events.',
      'Developed SQL procedures and validation logic for integration staging, transformation, reconciliation, and exception handling.',
      'Worked across ERP, database, API, file-based, and banking interfaces to maintain consistent data mapping and transaction integrity.',
      'Investigated integration failures by tracing the complete flow from external system through interface, transformation, SyteLine IDO, and database layers.',
    ],
    tags: ['REST API', 'Banking H2H', 'Automation'],
  },
]

export const skills = [
  { group: 'ERP', items: ['Infor SyteLine', 'Infor CloudSuite Industrial', 'Mongoose', 'WinStudio', 'IDOs', 'IDO Methods', 'Event Handlers', 'Custom Assemblies'] },
  { group: 'Development', items: ['C#', '.NET', 'TypeScript', 'React', 'Node.js', 'Express', 'NestJS'] },
  { group: 'Database', items: ['SQL Server', 'MySQL', 'SQL Development', 'Stored Procedures', 'Data Validation'] },
  { group: 'Integration', items: ['SOAP', 'REST', 'XML', 'JSON', 'Bank H2H', 'SFTP'] },
  { group: 'Engineering', items: ['Data Migration', 'Automation', 'Reconciliation', 'API Development', 'System Integration', 'Enterprise Applications'] },
]

export const approach = [
  ['01', 'Understand', 'Understand the business requirement and existing process before choosing a technical direction.'],
  ['02', 'Investigate', 'Trace the issue through applications, databases, integrations, and operational workflows.'],
  ['03', 'Build', 'Develop a practical solution with maintainability and future support in mind.'],
  ['04', 'Validate', 'Test the solution against meaningful business scenarios, data rules, and edge cases.'],
  ['05', 'Deliver', 'Document the solution so it can be supported and improved with confidence.'],
]
