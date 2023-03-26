import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const PlanList = [
  {
    title: "Basic",
    features: [
      "Send 500 emails (per month) to @testsendr.link",
      "Retrieve subject of the email",
      "Retrieve sender of the email",
      "Retrieve date of the email",
      "Retrieve text body content of the email",
    ],
    price: "Free",
  },
  {
    title: "Pro",
    features: [
      "Send 5.000 emails (per month) to @testsendr.link",
      "Retrieve subject of the email",
      "Retrieve sender of the email",
      "Retrieve date of the email",
      "Retrieve text body content of the email",
      "Retrieve html body content of the email",
      "Retrieve attachment list of the email",
      "Retrieve each attachment file of the email",
    ],
    price: "$USD 8 / month / domain",
    help: "The subscription is per sender domain. For example, if you send from a single domain, you will need to subscribe to one plan. If you send from multiple domains, you will need to subscribe to a plan for each domain.",
    cta: "https://buy.stripe.com/7sI9C4dQ09CI2t2144",
  },
];

function Plan({ title, features, price, cta, help }) {
  return (
    <div className={clsx("col col--6 padding-horiz--lg padding-top--sm")}>
      <div className={clsx("text--center padding-horiz--md", styles.plan)}>
        <h2 className={clsx("padding-top--lg", styles.title)}>{title}</h2>
        <div className="text--left">
          {features.map((feature, idx) => (
            <div key={idx} className="margin-vert--md">
              {feature === "" ? "--- " : "✅"} {feature}
            </div>
          ))}
        </div>

        <div className={styles.price}>{price}</div>
        {cta && (
          <Link
            className="button button--secondary button--outline button--lg margin-vert--md"
            to={cta}
          >
            Subscribe!
          </Link>
        )}
        {help && <div className={styles.help}>{help}</div>}
      </div>
    </div>
  );
}

export default function PricingPlans() {
  return (
    <section className={styles.pricing}>
      <div className="container">
        <div className="row">
          {PlanList.map((props, idx) => (
            <Plan key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
