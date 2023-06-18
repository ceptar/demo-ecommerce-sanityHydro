import {Steps} from './components/types';
import {BlueImg, RedImg, GreenImg} from './assets';

export const steps: Steps[] = [
  {
    target: 'body',
    url: null,
    placement: 'center',
    content: null,
    title: 'Welcome to a Sanity Studio',
    subtitle: 'This short tour in 3 steps will explain some basics',
    type: 'modal',
  },
  {
    target: "[data-ui='Navbar'] [data-ui='Button']", // logo
    url: null,
    chapter: 'The Studio',
    themeColor: '#4E91FC',
    chapterPosition: 1,
    chapterLength: 3,
    title: 'The Sanity Studio is where content editing happens',
    disableBeacon: true,
    placement: 'bottom-start',
    content:
      'Every Sanity Studio is different. This is a Studio for a ecommerce store called AKVA. ',
    type: 'step',
  },
  {
    target: 'form > [data-ui="Stack"] > [data-ui="Stack"]:nth-child(4)',
    url: '/studio/desk/pages;1051150e-042e-45a6-881a-49ca2759ea63',
    chapter: 'The Studio',
    themeColor: '#4E91FC',
    chapterPosition: 2,
    chapterLength: 3,
    title: 'An extremely flexible tool',
    disableBeacon: true,
    image: BlueImg,
    placement: 'left',
    externalLink: {
      url: 'https://www.sanity.io/docs/customization',
      text: 'Studio Customization',
    },
    content:
      'On smaller scales, like this custom page themer. And on larger scales, creating efficient workflows for your content, team and business. ',
    type: 'step',
  },
  {
    target: "[data-testid='permission-check-banner']",
    url: '/studio/desk/pages;1051150e-042e-45a6-881a-49ca2759ea63',
    chapter: 'The Studio',
    themeColor: '#4E91FC',
    chapterPosition: 3,
    chapterLength: 3,
    title: 'Define roles and access',
    disableBeacon: true,
    placement: 'bottom-start',
    content:
      'Start simple and tailor team roles as you need.\nIn this Studio you currently have ‘read only’ access.',
    type: 'step',
  },
  {
    target: '[data-testid="pane-content"]',
    url: '/studio/desk/pages;1051150e-042e-45a6-881a-49ca2759ea63',
    chapter: 'The Sanity Way',
    themeColor: '#F36458',
    chapterPosition: 1,
    chapterLength: 3,
    title: 'Create your own content model',
    disableBeacon: true,
    placement: 'right-start',
    type: 'step',
    externalLink: {
      url: 'https://www.sanity.io/content-modeling/content-modeling-foundations',
      text: 'Content Modeling Guide',
    },
    content:
      'Don’t confine your thinking to pages or templates. Structure your content for what it is and how it’ll be used.',
  },
  {
    target: "[data-testid='field-hero.content']",
    url: '/studio/desk/pages;1051150e-042e-45a6-881a-49ca2759ea63',
    chapter: 'The Sanity Way',
    themeColor: '#F36458',
    chapterPosition: 2,
    chapterLength: 3,
    title: 'Documents and references',
    disableBeacon: true,
    placement: 'left-end',
    image: RedImg,
    content:
      'Documents can piece in other documents – then called a reference. References enables  reusable and up-to-date content at scale.',
    type: 'step',
  },
  {
    target: "[data-ui='DialogCard']",
    url: '/studio/desk/pages;1051150e-042e-45a6-881a-49ca2759ea63%2Cinspect%3Don',
    chapter: 'The Sanity Way',
    themeColor: '#F36458',
    chapterPosition: 3,
    chapterLength: 3,
    title: 'Content is data',
    disableBeacon: true,
    placement: 'left-start',
    content:
      'Treating content like data makes it easy to  access, combine, assemble and reassemble that data – across all your products and channels.',
    type: 'step',
  },
  {
    target: "[data-testid='document-panel-portal'] fieldset",
    url: '/studio/desk/pages;1051150e-042e-45a6-881a-49ca2759ea63',
    afterLoad: async () =>
      Promise.resolve()
        .then(() => {
          document
            .querySelector<HTMLButtonElement>(
              "[data-testid='document-panel-portal'] button",
            )
            ?.click();
        })
        .then(() => setTimeout(() => {}, 500))
        .then(() => {
          document
            .querySelector<HTMLButtonElement>(
              "[data-testid='field-hero.content'] button",
            )
            ?.click();
        }),
    chapter: 'Ecommerce use cases',
    themeColor: '#43D675',
    chapterPosition: 1,
    chapterLength: 3,
    title: 'Shopping should be about exploration and serendipity',
    disableBeacon: true,
    placement: 'left-start',
    content:
      'Break out of stale ecommerce templates. Let visitors explore products through stories and rich interactive experiences.',
    type: 'step',
  },
  {
    target: "[data-testid='field-hero.content']",
    url: '/studio/desk/pages;1051150e-042e-45a6-881a-49ca2759ea63',
    afterLoad: async () => {
      const getTarget = () =>
        document.querySelector<HTMLButtonElement>(
          "[data-testid='document-panel-portal'] [data-as='button']",
        );
      const target = getTarget();

      Promise.resolve()
        .then(() => {
          if (!target) {
            document
              .querySelector<HTMLButtonElement>(
                "[data-testid='field-hero.content'] button",
              )
              ?.click();
            return new Promise((resolve) => setTimeout(resolve, 500));
          }
        })
        .then(() => getTarget()?.click());
    },
    chapter: 'Ecommerce use cases',
    themeColor: '#43D675',
    chapterPosition: 2,
    chapterLength: 3,
    title: 'Sync with any third party',
    disableBeacon: true,
    placement: 'left',
    image: GreenImg,
    externalLink: {
      url: 'https://www.sanity.io/docs/sanity-connect-for-shopify',
      text: 'Docs: Sanity Connect for Shopify',
    },
    content:
      'Ecommerce platforms are great for running a  store, but leave the editorial experience to Sanity – and create an enticing storefront. ',
    type: 'step',
  },
  {
    target: "[data-ui='TabList']",
    url: '/studio/desk/pages;1051150e-042e-45a6-881a-49ca2759ea63%2Cview%3Dpreview',
    hideWhileSpinning: true,
    afterLoad: async () => {
      Promise.resolve().then(() => {
        document
          .querySelector<HTMLButtonElement>(
            "[data-testid='document-panel-portal'] button",
          )
          ?.click();
      });
    },
    chapter: 'Ecommerce use cases',
    themeColor: '#43D675',
    chapterPosition: 3,
    chapterLength: 3,
    title: 'Live preview, side by side',
    disableBeacon: true,
    placement: 'left-start',
    content:
      'Remove abstractions and make and editing immediate, efficient and enjoyable',
    type: 'step',
  },
  {
    target: 'body',
    url: '/studio/desk',
    afterLoad: async () => {
      Promise.resolve().then(() => {
        document
          .querySelector<HTMLButtonElement>(
            "[data-testid='document-panel-portal'] button",
          )
          ?.click();
      });
    },
    placement: 'center',
    content: null,
    title: 'That’s the tour!.. ',
    subtitle:
      '... and we haven’t even gotten to features like workspaces, real time editing, revision history, image cropping, mobile responsiveness, accessibility, AI plugins ... and so much more!',
    type: 'modal',
  },
];