export type ClutterApproachId = "sampling" | "filtering" | "transparency" | "hexbin";

export type ClutterCategory = "reduce" | "change";

export type ClutterApproach = {
  id: ClutterApproachId;
  category: ClutterCategory;
  title: string;
  subtitle: string;
  description: string;
  example: string;
  termId: string;
};

export const CLUTTER_CATEGORIES: Record<
  ClutterCategory,
  { label: string; summary: string }
> = {
  reduce: {
    label: "1 · Reduce visible points",
    summary: "Show fewer points — sampling, filtering, or aggregation.",
  },
  change: {
    label: "2 · Change visual representation",
    summary: "Keep all data but draw it differently — transparency, jitter, hexbin, density.",
  },
};

export const SCATTER_CLUTTER_INTRO =
  "Overplotting makes scatterplots unreadable when many marks occupy the same region. Two general approaches fix this: reduce how many points you draw, or change how each point is drawn.";

export const CLUTTER_APPROACHES: ClutterApproach[] = [
  {
    id: "sampling",
    category: "reduce",
    title: "Sampling",
    subtitle: "Plot a representative subset",
    description:
      "Display only a random or stratified sample of the full dataset. Instead of plotting 1 million customers, plot 10,000 representative points — structure is preserved, clutter drops.",
    example:
      "140 students → 35 sampled points. Clusters remain visible without every mark stacking on top of another.",
    termId: "scatter-sampling",
  },
  {
    id: "filtering",
    category: "reduce",
    title: "Filtering",
    subtitle: "Show selected data only",
    description:
      "Interactively restrict which observations are drawn — by category, brush, or query. Only the filtered subset appears, removing irrelevant clutter from view.",
    example:
      "Brush one study group: hide the other two clusters so their points no longer add noise.",
    termId: "scatter-filtering",
  },
  {
    id: "transparency",
    category: "change",
    title: "Transparency (alpha blending)",
    subtitle: "See density through opacity",
    description:
      "Draw semi-transparent points so overlaps accumulate visually. If 100 points overlap, the area appears darker — dense regions emerge without removing any data.",
    example:
      "All 140 students stay in the plot, but α = 0.12 per point turns stacks into density clouds.",
    termId: "scatter-transparency",
  },
  {
    id: "hexbin",
    category: "change",
    title: "Hexbin / aggregation",
    subtitle: "Bin counts into cells",
    description:
      "Divide the plane into hexagonal or rectangular bins and encode the count per cell as colour. Also listed under aggregation — groups many points into one visual unit.",
    example:
      "Same 140 students collapsed into coloured bins — read density, not individual dots.",
    termId: "scatter-binning",
  },
];
