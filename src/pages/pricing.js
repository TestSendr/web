import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";

import PricingPlans from "../components/PricingPlans";

export default function Pricing() {
  return (
    <Layout title="Pricing" description="TestSendr Pricing">
      <main>
        <div class="hero shadow--lw">
          <div class="container">
            <p class="hero__subtitle">
              The service is currently offered in <strong>beta</strong> for no
              cost. We are working on a <strong>free plan</strong> for small
              teams, and a <strong>paid plans</strong> for bigger teams (with
              more features - <i>attachments content</i>... )
            </p>
            <div>
              <Link
                className="button button--secondary button--outline button--lg"
                to="https://share.hsforms.com/1UcO8jNLYR7O-7yz9gBhh4Aebvko"
              >
                Contact us for more details on plans 🙃
              </Link>
            </div>
          </div>
        </div>

        <PricingPlans />
      </main>
    </Layout>
  );
}
