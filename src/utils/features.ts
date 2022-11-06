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
  }
] as Feature[];