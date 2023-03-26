import React from "react";
import Layout from "@theme/Layout";

import PricingPlans from "../components/PricingPlans";

export default function Pricing() {
  return (
    <Layout title="Pricing" description="TestSendr Pricing">
      <main>
        <PricingPlans />
      </main>
    </Layout>
  );
}
