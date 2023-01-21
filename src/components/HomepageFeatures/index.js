import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Test your Emails",
    Svg: require("@site/static/img/undraw_mailbox_re_dvds.svg").default,
    description: (
      <>
        TestSendr is a useful service if you need to check in your tests that
        emails are correctly sent with the right content. Ideal for your QA
        team.
      </>
    ),
  },
  {
    title: "API First",
    Svg: require("@site/static/img/undraw_connected_world_wuay.svg").default,
    description: (
      <>
        TestSendr is providing an easy-to-use single point API to retrieve
        programmatically the content of the emails sent to{" "}
        <strong>@testsendr.link</strong> address.
      </>
    ),
  },
  {
    title: "Attachments supported",
    Svg: require("@site/static/img/undraw_folder_files_re_2cbm.svg").default,
    description: (
      <>
        TestSendr is supporting attachments in emails. See the number, name,
        disposition of each attachments.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
