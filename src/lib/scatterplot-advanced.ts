export type AdvancedScatterId = "splom" | "bubble" | "hexbin";

export type AdvancedScatter = {
  id: AdvancedScatterId;
  title: string;
  subtitle: string;
  description: string;
  problemSolved: string;
  termId: string;
};

export const SCATTER_ADVANCED_INTRO =
  "Standard 2D scatterplots break down with many variables or many points. Three advanced representations extend what you can see.";

export const ADVANCED_SCATTERPLOTS: AdvancedScatter[] = [
  {
    id: "splom",
    title: "Scatterplot matrix (SPLOM)",
    subtitle: "All pairs at once",
    description:
      "A grid of small scatterplots — one cell for every pair of variables. Lets you scan correlations and clusters across many dimensions without picking axes one at a time.",
    problemSolved: "Multivariate comparison — more than two attributes per observation.",
    termId: "scatter-splom",
  },
  {
    id: "bubble",
    title: "Bubble chart",
    subtitle: "Size encodes a 3rd variable",
    description:
      "Keep x and y positions, but map a third numeric attribute to marker area (or colour). Reveals an extra dimension without adding another spatial axis.",
    problemSolved: "Four variables in one view — x, y, bubble size, and colour.",
    termId: "scatter-bubble",
  },
  {
    id: "hexbin",
    title: "Hexbin / 2D density plot",
    subtitle: "Binned density surface",
    description:
      "Hexagonal (or rectangular) bins summarise point counts. Colour or contour lines show where mass concentrates — designed for thousands of points where raw scatterplots collapse.",
    problemSolved: "Thousands of points collapse in a raw scatterplot — hexbins recover structure.",
    termId: "scatter-hexbin",
  },
];
