import type { Dataset } from "./types";
import type { TeachingDataset } from "./lesson-data";
import type { BiclusterVizData } from "./bicluster-viz";

export function teachingToVizData(data: TeachingDataset): BiclusterVizData {
  return {
    rows: data.rows,
    cols: data.cols,
    matrix: data.matrix,
    biclusterRowIndices: data.bicluster.rowIndices,
    biclusterColIndices: data.bicluster.colIndices,
    biclusterLabel: data.bicluster.label,
    rowLabel: data.rowLabel,
    colLabel: data.colLabel,
    accent: data.theme.accent,
    valueHigh: 5,
  };
}

export function datasetToVizData(dataset: Dataset): BiclusterVizData {
  const block = dataset.biclusterBlock;
  const rowOrder = dataset.rowOrders.bicluster;
  const colOrder = dataset.colOrders.bicluster;
  return {
    rows: rowOrder.map((i) => dataset.rows[i]),
    cols: colOrder.map((i) => dataset.cols[i]),
    matrix: rowOrder.map((ri) => colOrder.map((ci) => dataset.baseMatrix[ri][ci])),
    biclusterRowIndices: Array.from(
      { length: block.rowEnd - block.rowStart + 1 },
      (_, i) => block.rowStart + i,
    ),
    biclusterColIndices: Array.from(
      { length: block.colEnd - block.colStart + 1 },
      (_, i) => block.colStart + i,
    ),
    biclusterLabel: block.label,
    rowLabel: dataset.rowLabel,
    colLabel: dataset.colLabel,
    accent: dataset.theme.accent,
    valueHigh: 1,
  };
}
