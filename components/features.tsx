import {
  BadgeCheck,
  BarChart,
  Bot,
  Code,
  GitGraph,
  Hand,
  MapPin,
  Video,
  Workflow,
} from "lucide-react";

export interface Feature {
  name: string;
  description: string;
  icon: React.ReactNode;
}

export type Features = Feature[];

export const FEATURES: Features = [
  {
    name: "Intelligently locate elements",
    description: `Instead of XPath or CSS selectors, our AI to locate elements based on their visual appearance and accessibility attributes.`,
    icon: <MapPin className="w-16 h-16 text-[#2971C7]" />,
  },
  {
    name: "Powerful assertions",
    description: `Craft assertions from any logical statement or visual condition.`,
    icon: <BadgeCheck className="w-16 h-16 text-[#2971C7]" />,
  },
  {
    name: "Test recording",
    description: `Record your interactions and let Momentic generate the test for you.`,
    icon: <Video className="w-16 h-16 text-[#2971C7]" />,
  },
  {
    name: "Auto-waiting",
    description: `Momentic automatically tracks in-flight requests and waits for them to complete.`,
    icon: <Hand className="w-16 h-16 text-[#2971C7]" />,
  },
  {
    name: "Autogenerate steps",
    description: `Use AI actions to generate steps to achieve a goal. Update the steps to fit your needs.`,
    icon: <Bot className="w-16 h-16 text-[#2971C7]" />,
  },
  {
    name: "Extract data",
    description: `Extract data from the page and use it in your tests. Great for testing data visualizations and tables.`,
    icon: <BarChart className="w-16 h-16 text-[#2971C7]" />,
  },
  {
    name: "Execute JavaScript",
    description: `Run arbitrary JavaScript to set up the environment for a test. You have access to libraries like Moment and Axios.`,
    icon: <Code className="w-16 h-16 text-[#2971C7]" />,
  },
  {
    name: "Run in CI/CD pipelines",
    description: `Use the Momentic CLI to run tests in any CI/CD provider. We support GitHub Actions, CircleCI, and more.`,
    icon: <Workflow className="w-16 h-16 text-[#2971C7]" />,
  },
  {
    name: `In sync with your codebase`,
    description: `Save Momentic tests in your codebase and keep them in sync with your applications during development.`,
    icon: <GitGraph className="w-16 h-16 text-[#2971C7]" />,
  },
];
