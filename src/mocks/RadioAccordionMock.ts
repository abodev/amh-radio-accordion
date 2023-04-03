import { Options } from '../types/RadioAccordion';

export const RADIO_ACCORDIONS_MOCK: Options[] = [
  {
    value: 'value 1',
    title: "I'm looking to sell a property I own",
    subtitle: 'Awesome, we can get your listing published right now.',
    active: true,
    subOptions: [
      {
        title: 'Create a listing now',
        link: '#',
      },
      {
        title: 'Explore active listings in your area',
        link: '#',
      },
    ],
  },
  {
    value: 'value 2',
    title: "I'm looking for  a good deal to buy",
    subtitle:
      "Great! We're so glad you're here. Start browsing and happy hunting.",
    active: true,
    subOptions: [
      {
        title: 'Create a listing now',
        link: '#',
      },
      {
        title: 'Explore active listings in your area',
        link: '#',
      },
    ],
  },
  {
    value: 'value 3',
    title: "I'm just exploring",
    subtitle: "No problem, we'd love to help you learn about Aloha My Home.",
    active: true,
    subOptions: [
      {
        title: 'Create a listing now',
        link: '#',
      },
      {
        title: 'Explore active listings in your area',
        link: '#',
      },
    ],
  },
];
