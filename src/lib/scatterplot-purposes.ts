export type ScatterPurposeId = "correlation" | "clusters" | "outliers" | "distribution";

export type ScatterPoint = {
  id: string;
  x: number;
  y: number;
  cluster: number;
  outlier?: boolean;
};

export type ScatterAxes = {
  xLabel: string;
  yLabel: string;
  xHint: string;
  yHint: string;
};

export type ScatterPurpose = {
  id: ScatterPurposeId;
  title: string;
  subtitle: string;
  description: string;
  displayCaption: string;
  termId: string;
};

export const SCATTERPURPOSE_INTRO =
  "A scatterplot places each observation as a dot along two numeric axes. The same graphic can answer different analytical questions depending on what you look for.";

export const SCATTER_PURPOSES: ScatterPurpose[] = [
  {
    id: "correlation",
    title: "Correlation",
    subtitle: "Relationship between two variables",
    description:
      "Plot variable A on the x-axis and variable B on the y-axis. The cloud's tilt reveals correlation: rising left-to-right = positive, falling = negative, round blob = weak or none.",
    displayCaption: "More study hours align with higher exam scores — an upward trend shows positive correlation.",
    termId: "scatter-correlation",
  },
  {
    id: "clusters",
    title: "Cluster detection",
    subtitle: "Natural groups in the plane",
    description:
      "When dots form separate clumps, clusters may exist before you run any clustering algorithm. Color or encircle groups to make segments visible.",
    displayCaption: "Two groups separate in the plane — low-effort students (left) and high performers (right).",
    termId: "scatter-clusters",
  },
  {
    id: "outliers",
    title: "Outlier detection",
    subtitle: "Points off the main pattern",
    description:
      "Outliers sit far from the bulk of the data or break a trend. They warrant investigation: data error, special case, or genuinely different behaviour.",
    displayCaption: "One point breaks away from its neighbors — flag it for investigation.",
    termId: "scatter-outliers",
  },
  {
    id: "distribution",
    title: "Distribution & spread",
    subtitle: "Range, density, and variance",
    description:
      "Scatterplots show how widely values scatter on each axis and whether points pile up in one region. Margins and ellipses summarise spread without a full histogram.",
    displayCaption: "Each cluster occupies a different corner — spread across both axes is visible.",
    termId: "scatter-distribution",
  },
];
