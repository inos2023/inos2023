// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'INOS',
  tagline: 'Intelligence Native Operating System',
  favicon: 'img/01-1LOGO.svg',

  // Set the production url of your site here
  url: 'https://inos2023.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'inos2023', // Usually your GitHub org/user name.
  projectName: 'inos2023.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['en', 'zh-cn'],
  },

  plugins: ['docusaurus-plugin-sass'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/inos2023/blog',
          editLocalizedFiles: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/inos2023/blog',
          editLocalizedFiles: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-BYY7CCPJZ6',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/编组4.svg',
      navbar: {
        title: 'INOS',
        hideOnScroll: false,
        logo: {
          alt: 'INOS Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction/inos-brief',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blogs', label: 'Blog', position: 'left' },
          { to: '/community', label: 'Community', position: 'left' },
          // 禁用用户tab页面
          // { to: '/users', label: 'Users', position: 'left' },
          // 禁用版本号下拉框
          // {
          //   position: 'right',
          //   html: '<select><option>111</option><option value="http://localhost:3004/">222</option></select>',
          //   // to:`${window.location.pathname}`
          //   to:'/docs/introduction/inos-brief'
          // },
          // 禁用中文/英文下拉框
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // },
          {
            href: 'https://github.com/inos2023?tab=repositories',
            position: 'right',

            // These allows adding Github icon using custom styles
            html: '<span>GitHub</span>',
            className: 'header-github-link',
          },
          // 禁用搜索框
          // {
          //   position: 'right',
          //   html: '<div class="SearchBarClass"><img src="/img/01-11搜索.svg" width="18px" height="18px"><input class="inputClass" placeholder="搜索"></div>',
          //   className: 'search-input',
          //   // to:`${window.location.pathname}`
          //   to: '/docs/introduction/inos-brief',
          // },
        ],
      },
      footer: {
        style: 'dark',
        // logo: {
        //   alt: 'ZJLab Logo',
        //   src: 'img/footer-logo.svg',
        // },
        links: [
          // {
          //   title: '联系我们'
          // },
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Docs',
          //       to: '/docs/introduction/inos-brief',
          //     },
          //   ],
          // },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Community',
          //       href: '/community',
          //     },
          //     {
          //       label: 'Users',
          //       href: '/users',
          //     },
          //     {
          //       label: 'Bilibili',
          //       href: 'https://space.bilibili.com/2065226922?spm_id_from=333.1007.0.0',
          //     },
          //     // {
          //     //   label: "Twitter",
          //     //   href: "",
          //     // },
          //     // {
          //     //   label: "Slack",
          //     //   href: "",
          //     // },
          //     // {
          //     //   label: "Meetup",
          //     //   href: "",
          //     // },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/inos2023?tab=repositories',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} INOS`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // colorMode: {
      //   disableSwitch: true,
      // },
    }),
};

module.exports = config;
