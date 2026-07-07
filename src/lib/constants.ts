export const shapes = [
  { name: 'Round', facets: '58 Facets', kind: 'round' },
  { name: 'Princess', facets: '76 Facets', kind: 'princess' },
  { name: 'Emerald', facets: 'Step Cut', kind: 'emerald' },
  { name: 'Oval', facets: '58 Facets', kind: 'oval' },
  { name: 'Cushion', facets: '64 Facets', kind: 'cushion' },
  { name: 'Pear', facets: '58 Facets', kind: 'pear' },
  { name: 'Marquise', facets: '56 Facets', kind: 'marquise' },
] as const;

export const colors = [
  { name: 'White', rarity: 'D–F Colourless', glow: 'radial-gradient(circle at 32% 28%, #ffffff, #dfe6ef 55%, #aab4c2)', shadow: '0 0 34px 4px rgba(220,230,245,0.45)' },
  { name: 'Yellow', rarity: 'Fancy Vivid', glow: 'radial-gradient(circle at 32% 28%, #fff6cf, #f2d24e 55%, #c9971f)', shadow: '0 0 34px 4px rgba(242,210,78,0.5)' },
  { name: 'Pink', rarity: 'Argyle Rare', glow: 'radial-gradient(circle at 32% 28%, #ffe6ef, #f4a6c4 55%, #d16a97)', shadow: '0 0 34px 4px rgba(244,166,196,0.5)' },
  { name: 'Blue', rarity: 'Type IIb', glow: 'radial-gradient(circle at 32% 28%, #dff0ff, #7fb4e6 55%, #3f74b8)', shadow: '0 0 34px 4px rgba(127,180,230,0.5)' },
] as const;

export const csData = [
  {
    letter: 'C', name: 'Cut',
    desc: 'The only C shaped by human hand. Precise angles and proportions release a diamond\u2019s fire \u2014 its return of white and coloured light. A superior cut can make a smaller stone outshine a larger one.',
    stat: 'Light in, brilliance out',
  },
  {
    letter: 'C', name: 'Colour',
    desc: 'Graded from D (icy colourless) through Z, the finest white diamonds show no hue at all \u2014 a rarity that lets light pass utterly unclouded. Beyond Z lies the realm of fancy colour.',
    stat: 'D — the absence of colour',
  },
  {
    letter: 'C', name: 'Clarity',
    desc: 'Nature\u2019s fingerprint. Under 10\u00d7 magnification, inclusions and blemishes tell each stone\u2019s story. Flawless (FL) diamonds \u2014 free of any internal marks \u2014 are exceedingly rare.',
    stat: 'Flawless under the loupe',
  },
  {
    letter: 'C', name: 'Carat',
    desc: 'A measure of weight, not size \u2014 one carat equals 0.2 grams. As carat rises, rarity climbs steeply; a stone twice the weight is far more than twice as rare.',
    stat: '0.2g of the extraordinary',
  },
] as const;

export const quotes = [
  { q: 'They did not sell me a diamond. They revealed one \u2014 turning it in the light until I understood exactly what I was holding.', a: 'Ananya R. · Private Client' },
  { q: 'The bespoke ring they crafted from my grandmother\u2019s stone is the most treasured object I own. Flawless in every sense.', a: 'Marcus L. · Commission, 2025' },
  { q: 'An education as much as a purchase. I have never trusted a house more completely.', a: 'Priya & Devan · Engagement' },
] as const;

export const auroraSpecs = [
  { k: 'Shape & Cut', v: 'Round Brilliant' },
  { k: 'Measurements', v: '13.02 – 13.08 × 8.01 mm' },
  { k: 'Table', v: '57%' },
  { k: 'Depth', v: '61.4%' },
  { k: 'Girdle', v: 'Thin – Medium, Faceted' },
  { k: 'Culet', v: 'None' },
  { k: 'Fluorescence', v: 'None' },
  { k: 'Polish / Symmetry', v: 'Excellent / Excellent' },
] as const;

export const auroraGrades = [
  { name: 'Cut', note: 'Proportion · Symmetry · Polish', grade: '3EX', pct: '100%' },
  { name: 'Colour', note: 'Grade scale D–Z', grade: 'D', pct: '100%' },
  { name: 'Clarity', note: 'Flawless under 10×', grade: 'FL', pct: '100%' },
  { name: 'Carat', note: 'Weight · 8.02ct', grade: '8.02', pct: '88%' },
] as const;
