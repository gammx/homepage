export interface Feature {
  id: string;
  title: string;
  description: string;
}

export default [
  {
    id: 'responsive',
    title: 'Fully Responsive',
    description: 'A custom UI for each desktop, tablet, and mobile screens.',
  },
  {
    id: 'performant',
    title: 'Performant',
    description: 'Optimized. Made to be blazingly fast. Green on all lighthouse benchmarks.',
  },
  {
    id: 'practices',
    title: 'Best Practices',
    description: "Doin' it the right way because that's the only way to do it.",
  },
  {
    id: 'parallax',
    title: 'Batteries Included',
    description: 'Parallax animation effects without any external libraries.',
  },
  {
    id: 'dynamic',
    title: "Born Dynamic",
    description: "It connects to a database to bring the necessary data."
  },
  {
    id: 'cached',
    title: "0% Patience",
    description: "The queries are cached so we don't waste time/user resources."
  },
  {
    id: 'animated',
    title: "Always Moving",
    description: "Animated elements moving around the page, you got 'em."
  }
] as Feature[];