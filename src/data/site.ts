// All editable site content lives here.
// Placeholders to replace: email, social links, location, project details.

export const person = {
  name: 'Jonnel Oliva',
  handle: '@jonneloliva',
  role: 'Virtual Assistant',
  tagline: 'Data Entry · Web Research · Admin Support · Customer Service',
  location: 'Philippines',
  email: 'jonnelolivavirtualassistant@gmail.com',
  availability: 'Open to new clients',
  hours: 'Flexible hours across US, UK & AU time zones',
};

export const socials = [
  { label: 'LinkedIn', icon: 'ph-linkedin-logo', href: 'https://www.onlinejobs.ph/jobseekers/info/4921195' },
  { label: 'Facebook', icon: 'ph-facebook-logo', href: 'https://www.facebook.com/CYASTO/' },
  { label: 'WhatsApp', icon: 'ph-whatsapp-logo', href: 'https://wa.me/639770730269' },
];

export const nav = [
  { label: 'Home', href: '#top', icon: 'ph-house' },
  { label: 'Projects', href: '#projects', icon: 'ph-folder-open' },
  { label: 'Services', href: '#services', icon: 'ph-briefcase' },
  { label: 'About', href: '#about', icon: 'ph-user-circle' },
  { label: 'Contact', href: '#contact', icon: 'ph-chat-circle-text' },
];

// Brand colours for the marquee logos.
// `color` = single-colour brand. `gradient` = multi-colour brand, painted through the icon shape.
// `ink` = black logo that flips to white in dark mode.
export type Tool = { name: string; icon: string; color?: string; gradient?: string; ink?: boolean };

export const tools: Tool[] = [
  { name: 'Claude', icon: 'ph-asterisk', color: '#D97757' },
  { name: 'ChatGPT', icon: 'ph-open-ai-logo', ink: true },
  {
    name: 'Gemini',
    icon: 'ph-sparkle',
    gradient: 'linear-gradient(135deg, #4796E3 20%, #9177C7 55%, #CA6673 85%)',
  },
  { name: 'GoHighLevel', icon: 'ph-rocket-launch', color: '#188BF6' },
  {
    name: 'Google Workspace',
    icon: 'ph-google-logo',
    gradient: 'conic-gradient(from -40deg, #EA4335 0 25%, #FBBC05 0 45%, #34A853 0 70%, #4285F4 0)',
  },
  {
    name: 'Google Drive',
    icon: 'ph-google-drive-logo',
    gradient: 'conic-gradient(from 30deg, #FFBA00 0 33%, #0066DA 0 66%, #00AC47 0)',
  },
  { name: 'Excel', icon: 'ph-microsoft-excel-logo', color: '#107C41' },
  {
    name: 'Slack',
    icon: 'ph-slack-logo',
    gradient: 'conic-gradient(from 0deg, #36C5F0 0 25%, #2EB67D 0 50%, #ECB22E 0 75%, #E01E5A 0)',
  },
  { name: 'Notion', icon: 'ph-notion-logo', ink: true },
  { name: 'Microsoft Teams', icon: 'ph-microsoft-teams-logo', color: '#5059C9' },
  {
    name: 'Figma',
    icon: 'ph-figma-logo',
    gradient: 'linear-gradient(180deg, #F24E1E 0 33%, #A259FF 0 66%, #0ACF83 0)',
  },
];

export const services = [
  {
    title: 'Data Entry',
    icon: 'ph-keyboard',
    text: 'Accurate, consistent data entry into spreadsheets, CRMs and databases, with every record checked twice.',
  },
  {
    title: 'Web Research',
    icon: 'ph-magnifying-glass',
    text: 'Lead lists, competitor research, product sourcing and fact-finding, organised into clean, ready-to-use sheets.',
  },
  {
    title: 'Admin Support',
    icon: 'ph-calendar-check',
    text: 'Inbox and calendar management, file organisation, document preparation and the day-to-day tasks that keep you moving.',
  },
  {
    title: 'Customer Service',
    icon: 'ph-headset',
    text: 'Friendly, timely replies by email and chat, ticket handling and follow-ups that keep your customers happy.',
  },
  {
    title: 'GoHighLevel (GHL)',
    icon: 'ph-rocket-launch',
    text: 'Contact imports, pipelines, tags, calendars and simple follow-up automations set up inside GHL.',
  },
  {
    title: 'AI-Assisted Workflows',
    icon: 'ph-robot',
    text: 'Using Claude, ChatGPT and Gemini to draft, summarise and research faster, always reviewed by a human before it reaches you.',
  },
];

// Sample projects: replace with Jonnel's real work.
export const projects = [
  {
    title: 'CRM Clean-up & Migration',
    icon: 'ph-database',
    category: 'Data Entry',
    text: 'Cleaned, de-duplicated and standardised a large contact list, then imported it into GoHighLevel with the correct tags and pipeline stages.',
    tags: ['GHL', 'Google Sheets', 'Data Cleaning'],
  },
  {
    title: 'Targeted Lead Research',
    icon: 'ph-target',
    category: 'Web Research',
    text: 'Built a verified lead list of local businesses with names, roles, websites and contact details, sorted by priority.',
    tags: ['Web Research', 'Excel', 'Lead Gen'],
  },
  {
    title: 'Follow-up Automation',
    icon: 'ph-flow-arrow',
    category: 'GHL Automation',
    text: 'Set up a GHL workflow that sends a welcome email and SMS, books a call and reminds the lead, so no enquiry is forgotten.',
    tags: ['GHL', 'Workflows', 'Calendars'],
  },
  {
    title: 'AI-Assisted Support Inbox',
    icon: 'ph-chats-circle',
    category: 'Customer Service',
    text: 'Created reply templates and a Claude / ChatGPT drafting process that cut response times while keeping a warm, human tone.',
    tags: ['Claude', 'ChatGPT', 'Email Support'],
  },
];

export const strengths = [
  { icon: 'ph-seal-check', text: 'Detail-oriented and accurate' },
  { icon: 'ph-clock-countdown', text: 'Reliable and on time' },
  { icon: 'ph-chats-circle', text: 'Clear, friendly communication' },
  { icon: 'ph-shield-check', text: 'Respects confidential data' },
];
