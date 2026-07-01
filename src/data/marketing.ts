export const marketingFeatures = {
  clientCRM: [
    "Complete client profiles",
    "Notes & communication history",
    "Invoice and payment tracking",
    "Projects linked to every client",
  ],

  projectManagement: [
    "Visual Kanban workflow",
    "Track project progress",
    "Due dates & priorities",
    "Client-linked projects",
  ],

  invoicing: [
    "Create professional invoices",
    "Accept online payments",
    "Recurring billing",
    "Automatic payment reminders",
  ],

  analytics: [
    "Revenue insights",
    "Project performance",
    "Client growth tracking",
    "Business reports",
  ],

  clientPortal: [
    "Dedicated client portal",
    "Project progress updates",
    "Invoices & contracts",
    "Secure file sharing",
  ],

  automation: [
    "Automated workflows",
    "Payment reminders",
    "Email notifications",
    "Project status updates",
  ],
  integrations: [
    "Stripe payments",
    "Google Calendar sync",
    "Zapier automation",
  ],
  faqs: [
    {
      question: "Can I try ClientFlow for free?",
      answer:
        "Yes. Every plan includes a 14-day free trial with full access. No credit card is required.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Absolutely. You can upgrade, downgrade, or cancel your subscription whenever you want.",
    },
    {
      question: "Does ClientFlow support team collaboration?",
      answer:
        "Yes. Invite teammates, assign permissions, and collaborate on projects in real time.",
    },
    {
      question: "Can my clients access their own portal?",
      answer:
        "Yes. Every client gets a secure portal where they can view projects, invoices, files, and updates.",
    },
    {
      question: "Which payment providers do you support?",
      answer:
        "ClientFlow integrates with Stripe and other payment providers to help you accept payments securely.",
    },
  ],
} as const;
