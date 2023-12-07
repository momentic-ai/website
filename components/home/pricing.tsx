import { Check } from "lucide-react";
import Link from "next/link";
import { Container } from "./container";

const tiers = [
  {
    name: "Hobby",
    id: "tier-hobby",
    href: "https://momentic.ai/waitlist",
    price: "Free",
    description:
      "Get started, no credit card required. Great for hobby projects and POCs.",
    features: [
      "10 tests",
      "100 runs / month",
      "1 seat",
      "Basic support",
      "Access to Discord community",
    ],
    featured: false,
    cta: "Join the waitlist",
  },
  {
    name: "Team",
    id: "tier-team",
    href: "https://momentic.ai/demo",
    price: "$300",
    description:
      "For serious teams and projects. Includes access to support and onboarding.",
    features: [
      "Unlimited tests",
      "1000 runs / month",
      "10 seats",
      "Scheduled runs",
      "CI/CD integrations",
      "Dedicated support channel",
      "White-glove onboarding support",
    ],
    featured: true,
    cta: "Book a call",
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "https://momentic.ai/demo",
    price: "Contact us",
    description:
      "Dedicated solutions and support for your team. Contact us to learn more.",
    features: [
      "All Team features",
      "Unlimited runs",
      "Unlimited seats",
      "Support SLAs",
      "Compliance and security reviews",
      "Custom domains, advanced RBAC, and more (soon)",
    ],
    featured: false,
    cta: "Talk to founders",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Pricing = () => {
  return (
    <div className="mt-32" id="faq">
      <Container>
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white md:text-3xl lg:text-4xl">
          Pricing
        </h2>

        <p className="mt-4 text-gray-600 text-center dark:text-gray-300">
          Simple pricing for projects and teams of all sizes.
        </p>

        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                "rounded-3xl p-8 ring-1 xl:p-10",
                tier.featured ? "ring-[#2971c7] ring-2" : "ring-gray-200"
              )}
            >
              <h3
                id={tier.id}
                className={classNames("text-lg font-semibold leading-8")}
              >
                {tier.name}
              </h3>
              <p
                className={classNames(
                  "text-primary/80",
                  "mt-4 text-sm leading-6"
                )}
              >
                {tier.description}
              </p>
              <p className={classNames("mt-6 flex items-baseline gap-x-2")}>
                {typeof tier.price !== "string" ? (
                  <span
                    className={classNames(
                      "text-primary/80",
                      "text-sm font-semibold leading-6"
                    )}
                  >
                    Starts at
                  </span>
                ) : null}
                <span
                  className={classNames("text-4xl font-bold tracking-tight")}
                >
                  {tier.price}
                </span>
                {tier.price === "$300" ? (
                  <span
                    className={classNames(
                      "text-primary/80",
                      "text-sm font-semibold leading-6"
                    )}
                  >
                    /month
                  </span>
                ) : null}
              </p>

              <Link
                target="_blank"
                href={tier.href}
                className="mt-6 relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-blue-600/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-[#2971c7]">
                  {tier.cta}
                </span>
              </Link>

              <ul
                role="list"
                className={classNames(
                  "text-primary/80",
                  "mt-8 space-y-3 text-sm leading-6 xl:mt-10"
                )}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check
                      className={classNames(
                        "text-primary",
                        "h-6 w-5 flex-none"
                      )}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
