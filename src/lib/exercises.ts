export type ExerciseModuleId =
  | "clustering"
  | "biclusters"
  | "scatter-purposes"
  | "scatter-clutter"
  | "scatter-advanced"
  | "explore";

export type ExerciseModule = {
  id: ExerciseModuleId;
  label: string;
  question?: string;
  accent: string;
};

export const EXERCISE_MODULES: ExerciseModule[] = [
  {
    id: "clustering",
    label: "Clustering",
    accent: "#FF2D6B",
  },
  {
    id: "biclusters",
    label: "Bicluster viz",
    question: "Q2",
    accent: "#FFE600",
  },
  {
    id: "scatter-purposes",
    label: "Scatter purposes",
    question: "Q3",
    accent: "#9B5DE5",
  },
  {
    id: "scatter-clutter",
    label: "Clutter & overplotting",
    question: "Q4",
    accent: "#0066FF",
  },
  {
    id: "scatter-advanced",
    label: "Advanced scatterplots",
    question: "Q5",
    accent: "#00B4A0",
  },
  {
    id: "explore",
    label: "Explore",
    accent: "#FF5500",
  },
];
