import { Disclosure, Transition } from "@headlessui/react";
import { Container } from "./container";

const faq = [
  {
    question: <>How does it work?</>,
    answer: (
      <>
        We use cutting-edge AI models to create autonomous agents that run in
        the browser and interact with your application just like a real user
        would.
      </>
    ),
  },
  {
    question: (
      <>
        How does it compare to{" "}
        <code
          className="nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10"
          dir="ltr"
          data-language="jsx"
          data-theme="default"
        >
          <span className="line">[insert browser automation framework]</span>
        </code>
        ?
      </>
    ),
    answer: (
      <>
        Test scripts (Cypress, Playwright, Puppeteer, Selenium) are flakey and
        are a burden to maintain as your application grows. Our AI agent is able
        to adapt to your application and only surface real issues.
      </>
    ),
  },
  {
    question: (
      <>
        How does it compare to{" "}
        <code
          className="nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10"
          dir="ltr"
          data-language="jsx"
          data-theme="default"
        >
          <span className="line">[insert production monitoring tool]</span>
        </code>
        ?
      </>
    ),
    answer: (
      <>
        Production monitoring tools (Datadog, Rainforest QA, New Relic) are
        primarily used to alert you when your production app is down. Momentic
        supports developers, QA engineers, and product managers through the
        entire application lifecycle. Our tests can be invoked on local
        machines, CI/CD pipelines, and production environments. Momentic tests
        can even live alongside your codebase and be version controlled.
      </>
    ),
  },
  {
    question: <>Do you offer an enterprise tier?</>,
    answer: (
      <>
        We offer a custom-priced enterprise tier that includes white-glove
        onboarding, priority support, custom SLAs, SAML/SSO, unlimited runs, and
        on-prem deployment options.
      </>
    ),
  },
  {
    question: <>How do I create tests?</>,
    answer: (
      <>
        Describe a user flow using natural language and our AI agent will do the
        rest. Zero code required.
      </>
    ),
  },
  {
    question: <>How do I debug tests?</>,
    answer: (
      <>
        Review every test run directly in the Momentic app. When a test fails,
        we show you exactly what happened in the browser so you can immediately
        identify what needs to be fixed.
      </>
    ),
  },
  {
    question: <>Do you need access to my codebase?</>,
    answer: (
      <>
        We store and run all tests on our infrastructure. No access to your
        codebase is required.
      </>
    ),
  },
];

export function FAQ() {
  return (
    <div className="mt-32" id="faq">
      <Container>
        <div className="mt-32 flex flex-col gap-12 lg:flex-row">
          <div className="text-center lg:w-5/12 lg:text-left">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl lg:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              You can find more specific information about the platform by
              digging into the documentation and reading our blog articles.
            </p>
          </div>
          <div className="lg:w-7/12">
            <Disclosures />
          </div>
        </div>
      </Container>
    </div>
  );
}

export function Disclosures({ full = false }) {
  return (
    <div className="divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
      {faq.map((item, i) => (
        <Disclosure
          as="div"
          key={String(i)}
          className={`mx-auto text-lg ${full ? "" : "max-w-2xl"}`}
        >
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full items-start justify-between py-6 text-left text-gray-400">
                <span className="font-medium text-gray-900 dark:text-white">
                  {item.question}
                </span>
                <span className="ml-6 flex h-7 items-center">
                  <svg
                    className={`arrow-down h-6 w-6 transform duration-300 ${
                      open ? "rotate-180" : "rotate-0"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    ></path>
                  </svg>
                </span>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel
                  className={`pr-12 duration-300 ease-in-out ${
                    open ? "" : "hidden"
                  }`}
                >
                  <p className="pb-6 text-base text-gray-600 dark:text-gray-400">
                    {item.answer}
                  </p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
