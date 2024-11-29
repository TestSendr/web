// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "TestSendr",
  tagline: "Test the reception of your emails via the TestSendr API",
  url: "https://testsendr.link",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  plugins: ["docusaurus-plugin-goatcounter"],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "testsendr", // Usually your GitHub org/user name.
  projectName: "web", // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: "https://github.com/testsendr/web/tree/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: "https://github.com/testsendr/web/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/logo.png",
      navbar: {
        title: "TestSendr",
        logo: {
          alt: "TestSendr Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "quick-start",
            position: "left",
            label: "Docs",
          },
          { to: "/pricing", label: "Pricing", position: "left" },
          { to: "/contact", label: "Contact & FAQ", position: "left" },
          { to: "/blog", label: "Blog", position: "left" },
          // {
          //   href: "https://github.com/testsendr/web",
          //   label: "GitHub",
          //   position: "right",
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Quick Start",
                to: "/docs/quick-start",
              },
            ],
          },
          {
            title: "Community",
            items: [
              // {
              //   label: "Stack Overflow",
              //   href: "https://stackoverflow.com/questions/tagged/docusaurus",
              // },
              // {
              //   label: "Discord",
              //   href: "https://discord.gg/kS7ss5KvuQ",
              // },
              {
                label: "Twitter",
                href: "https://twitter.com/testsendr",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Support",
                href: "mailto:testsendr@sidoine.org",
              },
              {
                label: "Billing",
                href: "https://billing.stripe.com/p/login/14k9DW7j01wi8IofYY",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TestSendr`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      goatcounter: {
        code: "testsendr",
      },
    }),
};

module.exports = config;
