export const shapes = [
  { name: 'Round', facets: '58 Facets', kind: 'round' },
  { name: 'Princess', facets: '76 Facets', kind: 'princess' },
  { name: 'Emerald', facets: 'Step Cut', kind: 'emerald' },
  { name: 'Oval', facets: '58 Facets', kind: 'oval' },
  { name: 'Cushion', facets: '64 Facets', kind: 'cushion' },
  { name: 'Pear', facets: '58 Facets', kind: 'pear' },
  { name: 'Marquise', facets: '56 Facets', kind: 'marquise' },
] as const;

// Per-shape copy for the stone detail hero. `title2` is the italic word under
// "The Aurora"; `cut` is the full descriptor used in the blurb + Shape spec.
export const shapeInfo: Record<
  string,
  { title2: string; cut: string; blurb: string }
> = {
  round: {
    title2: 'Brilliant',
    cut: 'round brilliant',
    blurb:
      'A round brilliant of extraordinary presence — D colour, internally flawless, and cut to triple-excellent proportions that return light with rare intensity. One of the finest stones ever to pass through Gopinathji Diamonds.',
  },
  princess: {
    title2: 'Princess',
    cut: 'princess cut',
    blurb:
      'A princess cut with crisp, architectural corners and a lattice of fire beneath the table — D colour, internally flawless, engineered to hold brilliance edge to edge.',
  },
  emerald: {
    title2: 'Emerald',
    cut: 'emerald step cut',
    blurb:
      'An emerald cut of quiet authority — long, mirror-clean step facets that draw the eye into the stone. D colour, internally flawless, where clarity has nowhere to hide.',
  },
  oval: {
    title2: 'Oval',
    cut: 'oval brilliant',
    blurb:
      'An oval brilliant that elongates the finger and the light alike — D colour, internally flawless, cut for a soft, elliptical blaze with no shadow at its heart.',
  },
  cushion: {
    title2: 'Cushion',
    cut: 'cushion brilliant',
    blurb:
      'A cushion brilliant with pillow-soft corners and a deep, romantic glow — D colour, internally flawless, cut to gather light into a warm interior fire.',
  },
  pear: {
    title2: 'Pear',
    cut: 'pear brilliant',
    blurb:
      'A pear brilliant — half round, half marquise — tapering to a single luminous point. D colour, internally flawless, cut for perfect symmetry and a bright, teardrop silhouette.',
  },
  marquise: {
    title2: 'Marquise',
    cut: 'marquise brilliant',
    blurb:
      'A marquise brilliant drawn to two fine points — the boat-shaped cut that maximises spread and presence. D colour, internally flawless, with brilliance running the full length of the stone.',
  },
};

export const colors = [
  {
    name: 'White', slug: 'white', rarity: 'D–F Colourless', tint: '#ffffff',
    glow: 'radial-gradient(circle at 32% 28%, #ffffff, #dfe6ef 55%, #aab4c2)', shadow: '0 0 34px 4px rgba(220,230,245,0.45)',
    blurb: 'The most prized white diamonds show no colour at all. On GIA’s D–Z scale, the D–F range is truly colourless — light passes through utterly unclouded. It is the absence of colour, not a colour, and the rarest of the whites.',
    facts: [
      { k: 'Colour Grade', v: 'D – F (Colourless)' },
      { k: 'Cause of Colour', v: 'Pure carbon lattice' },
      { k: 'Rarity', v: 'Under 1% grade D' },
      { k: 'Notable Stones', v: 'Koh-i-Noor · Cullinan I' },
    ],
  },
  {
    name: 'Yellow', slug: 'yellow', rarity: 'Fancy Vivid', tint: '#ffdf5e',
    glow: 'radial-gradient(circle at 32% 28%, #fff6cf, #f2d24e 55%, #c9971f)', shadow: '0 0 34px 4px rgba(242,210,78,0.5)',
    blurb: 'Yellow diamonds owe their warmth to nitrogen woven into the carbon lattice. The finest — “canary” Fancy Vivid stones — glow with pure, saturated colour and are the most coveted of the fancy yellows.',
    facts: [
      { k: 'Colour Grade', v: 'Fancy Light → Fancy Vivid' },
      { k: 'Cause of Colour', v: 'Nitrogen' },
      { k: 'Rarity', v: '≈ 1 in 10,000 diamonds' },
      { k: 'Notable Stones', v: 'Tiffany Yellow · The Incomparable' },
    ],
  },
  {
    name: 'Pink', slug: 'pink', rarity: 'Argyle Rare', tint: '#ff9fc0',
    glow: 'radial-gradient(circle at 32% 28%, #ffe6ef, #f4a6c4 55%, #d16a97)', shadow: '0 0 34px 4px rgba(244,166,196,0.5)',
    blurb: 'Pink diamonds carry no impurity at all — their blush comes from a rare distortion of the crystal lattice. Australia’s Argyle mine yielded roughly 90% of the world’s pinks before closing in 2020, making every stone a vanishing rarity.',
    facts: [
      { k: 'Colour Grade', v: 'Fancy → Fancy Vivid / Deep' },
      { k: 'Cause of Colour', v: 'Crystal lattice distortion' },
      { k: 'Rarity', v: 'Argyle mine closed 2020' },
      { k: 'Notable Stones', v: 'The Pink Star · Graff Pink' },
    ],
  },
  {
    name: 'Blue', slug: 'blue', rarity: 'Type IIb', tint: '#8fc9ff',
    glow: 'radial-gradient(circle at 32% 28%, #dff0ff, #7fb4e6 55%, #3f74b8)', shadow: '0 0 34px 4px rgba(127,180,230,0.5)',
    blurb: 'Type IIb blues are coloured by trace boron and can even conduct electricity. Formed far deeper in the earth than almost any other diamond, they are among the rarest stones on the planet.',
    facts: [
      { k: 'Colour Grade', v: 'Fancy → Fancy Deep' },
      { k: 'Cause of Colour', v: 'Boron' },
      { k: 'Rarity', v: 'Type IIb — under 0.1%' },
      { k: 'Notable Stones', v: 'The Hope · Oppenheimer Blue' },
    ],
  },
] as const;

export const csData = [
  {
    letter: 'C', name: 'Cut', image: '/images/fourcs/cut.png',
    desc: 'The only C shaped by human hand. Precise angles and proportions release a diamond\u2019s fire \u2014 its return of white and coloured light. A superior cut can make a smaller stone outshine a larger one.',
    stat: 'Light in, brilliance out',
  },
  {
    letter: 'C', name: 'Colour', image: '/images/fourcs/colour.png',
    desc: 'Graded from D (icy colourless) through Z, the finest white diamonds show no hue at all \u2014 a rarity that lets light pass utterly unclouded. Beyond Z lies the realm of fancy colour.',
    stat: 'D — the absence of colour',
  },
  {
    letter: 'C', name: 'Clarity', image: '/images/fourcs/clarity.png',
    desc: 'Nature\u2019s fingerprint. Under 10\u00d7 magnification, inclusions and blemishes tell each stone\u2019s story. Flawless (FL) diamonds \u2014 free of any internal marks \u2014 are exceedingly rare.',
    stat: 'Flawless under the loupe',
  },
  {
    letter: 'C', name: 'Carat', image: '/images/fourcs/carat.png',
    desc: 'A measure of weight, not size \u2014 one carat equals 0.2 grams. As carat rises, rarity climbs steeply; a stone twice the weight is far more than twice as rare.',
    stat: '0.2g of the extraordinary',
  },
] as const;

export const founder = {
  name: 'Nikunj Kalathiya',
  title: 'CEO & Master Diamantaire',
  since: '2015',
  monogram: 'N',
} as const;

export const founderMilestones = [
  { year: '2015', title: 'The House Begins', text: 'Nikunj Kalathiya founds Gopinathji Diamonds with a single bench and one rule he has never broken: cut for the light a stone can give, never for the weight a scale can read.' },
  { year: '2017', title: 'Word Travels', text: 'The first stones reach collectors beyond the city, carried by word of mouth among those who value the eye over the invoice.' },
  { year: '2019', title: 'A Standard Set', text: 'Every stone that leaves Gopinathji Diamonds is independently certified. The house standard becomes a benchmark others measure against.' },
  { year: '2022', title: 'Bespoke Diamonds', text: 'Private commissions begin — a single diamond cut and set to one hand, the start of the house’s bespoke work.' },
  { year: '2024', title: 'The Bench Grows', text: 'A team of diamantaires is trained to the same unforgiving eye, so the house can craft more without loosening its standard.' },
  { year: 'Today', title: 'Every Stone, by Hand', text: 'The finest rough still crosses Nikunj’s table first — and no stone is called finished until it has passed his eye.' },
] as const;

export const founderValues = [
  { name: 'Patience', line: 'A great stone is never hurried. Some wait years on the shelf for the one hand meant to open them.' },
  { name: 'Integrity', line: 'We cut for light, never for carat. What the loupe reveals to us, we reveal to you — in full.' },
  { name: 'Light', line: 'The cutter has one ambition: to set free the fire the earth locked inside, and take no credit for it.' },
] as const;

export const quotes = [
  { q: 'They did not sell me a diamond. They revealed one \u2014 turning it in the light until I understood exactly what I was holding.', a: 'Ananya R. · Private Client' },
  { q: 'The bespoke ring they crafted from my grandmother\u2019s stone is the most treasured object I own. Flawless in every sense.', a: 'Marcus L. · Commission, 2025' },
  { q: 'An education as much as a purchase. I have never trusted a house more completely.', a: 'Priya & Devan · Engagement' },
] as const;

// Per-shape measurements & proportions. Table %, depth %, girdle, culet and
// length-to-width ratios follow GIA / industry ideal-cut ranges for each shape;
// the millimetre dimensions are internally consistent for an ~8ct stone
// (length = width × ratio, depth mm = depth % × width).
export const shapeSpecs: Record<string, ReadonlyArray<{ k: string; v: string }>> = {
  round: [
    { k: 'Shape & Cut', v: 'Round Brilliant' },
    { k: 'Measurements', v: '13.02 – 13.08 × 8.01 mm' },
    { k: 'Table', v: '57%' },
    { k: 'Depth', v: '61.4%' },
    { k: 'Girdle', v: 'Thin – Medium, Faceted' },
    { k: 'Culet', v: 'None' },
    { k: 'Fluorescence', v: 'None' },
    { k: 'Polish / Symmetry', v: 'Excellent / Excellent' },
  ],
  princess: [
    { k: 'Shape & Cut', v: 'Square Modified Brilliant' },
    { k: 'Measurements', v: '10.48 × 10.42 × 7.45 mm' },
    { k: 'Table', v: '70%' },
    { k: 'Depth', v: '71.5%' },
    { k: 'Length / Width', v: '1.01' },
    { k: 'Girdle', v: 'Medium – Slightly Thick' },
    { k: 'Culet', v: 'None' },
    { k: 'Polish / Symmetry', v: 'Excellent / Excellent' },
  ],
  emerald: [
    { k: 'Shape & Cut', v: 'Emerald (Step Cut)' },
    { k: 'Measurements', v: '12.62 × 9.01 × 5.79 mm' },
    { k: 'Table', v: '63%' },
    { k: 'Depth', v: '64.2%' },
    { k: 'Length / Width', v: '1.40' },
    { k: 'Girdle', v: 'Medium – Slightly Thick' },
    { k: 'Culet', v: 'None' },
    { k: 'Polish / Symmetry', v: 'Excellent / Excellent' },
  ],
  oval: [
    { k: 'Shape & Cut', v: 'Oval Brilliant' },
    { k: 'Measurements', v: '14.82 × 10.22 × 6.13 mm' },
    { k: 'Table', v: '58%' },
    { k: 'Depth', v: '60.0%' },
    { k: 'Length / Width', v: '1.45' },
    { k: 'Girdle', v: 'Thin – Medium, Faceted' },
    { k: 'Culet', v: 'None' },
    { k: 'Polish / Symmetry', v: 'Excellent / Excellent' },
  ],
  cushion: [
    { k: 'Shape & Cut', v: 'Cushion Brilliant' },
    { k: 'Measurements', v: '11.68 × 10.62 × 7.02 mm' },
    { k: 'Table', v: '64%' },
    { k: 'Depth', v: '66.1%' },
    { k: 'Length / Width', v: '1.10' },
    { k: 'Girdle', v: 'Medium – Thick' },
    { k: 'Culet', v: 'None' },
    { k: 'Polish / Symmetry', v: 'Excellent / Excellent' },
  ],
  pear: [
    { k: 'Shape & Cut', v: 'Pear Modified Brilliant' },
    { k: 'Measurements', v: '15.51 × 10.01 × 6.21 mm' },
    { k: 'Table', v: '58%' },
    { k: 'Depth', v: '62.0%' },
    { k: 'Length / Width', v: '1.55' },
    { k: 'Girdle', v: 'Thin – Medium, Faceted' },
    { k: 'Culet', v: 'None' },
    { k: 'Polish / Symmetry', v: 'Excellent / Excellent' },
  ],
  marquise: [
    { k: 'Shape & Cut', v: 'Marquise Brilliant' },
    { k: 'Measurements', v: '17.21 × 8.60 × 5.20 mm' },
    { k: 'Table', v: '57%' },
    { k: 'Depth', v: '60.5%' },
    { k: 'Length / Width', v: '2.00' },
    { k: 'Girdle', v: 'Thin – Medium, Faceted' },
    { k: 'Culet', v: 'None' },
    { k: 'Polish / Symmetry', v: 'Excellent / Excellent' },
  ],
};

export const auroraGrades = [
  { name: 'Cut', note: 'Proportion · Symmetry · Polish', grade: '3EX', pct: '100%' },
  { name: 'Colour', note: 'Grade scale D–Z', grade: 'D', pct: '100%' },
  { name: 'Clarity', note: 'Flawless under 10×', grade: 'FL', pct: '100%' },
  { name: 'Carat', note: 'Weight · 8.02ct', grade: '8.02', pct: '88%' },
] as const;
