export type GlossaryEntry = {
  id: string;
  label: string;
  oneLine: string;
  explanation: string;
  whyItMatters: string;
  citation?: {
    authors: string;
    year: number;
    title: string;
    source: string;
    snippet: string;
    url?: string;
  };
};

export const GLOSSARY: Record<string, GlossaryEntry> = {
  matrix: {
    id: "matrix",
    label: "Matrix",
    oneLine: "A grid of numbers — rows × columns.",
    explanation:
      "A matrix stores relationships between two kinds of things. Row i and column j meet at cell (i,j). Here: users×movie ratings, or accounts×IP logins.",
    whyItMatters:
      "Clustering always starts from a matrix. Rows and columns are the two axes you can reorganize.",
    citation: {
      authors: "Koren, Y., Bell, R., & Volinsky, C.",
      year: 2009,
      title: "Matrix factorization techniques for recommender systems",
      source: "Computer, 42(8), 30–37",
      snippet:
        "Recommender systems rely on a user-item matrix R where each entry r_ui is the rating user u gave item i. The matrix is typically very sparse — most users rate only a fraction of items.",
      url: "https://doi.org/10.1109/MC.2009.263",
    },
  },
  row: {
    id: "row",
    label: "Row",
    oneLine: "One horizontal line — one user or one account.",
    explanation:
      "Each row is one entity. All numbers in that row describe how that user/account interacts with every column (every movie or IP).",
    whyItMatters: "Row clustering asks: which rows look alike when you read them left-to-right?",
  },
  column: {
    id: "column",
    label: "Column",
    oneLine: "One vertical line — one movie or one IP address.",
    explanation:
      "Each column is one attribute across all rows. Reading top-to-bottom shows how every user/account scored on that movie or IP.",
    whyItMatters: "Column clustering asks: which columns have the same rating pattern down the column?",
  },
  vector: {
    id: "vector",
    label: "Vector",
    oneLine: "A row written as a list of numbers: [5, 5, 1, 1].",
    explanation:
      "A vector is an ordered list of ratings. User U1's vector is their scores on every movie. We compare vectors to see if two users have similar taste.",
    whyItMatters:
      "Each user becomes a point in rating-space. Close points = similar taste = same cluster.",
    citation: {
      authors: "Breese, J. S., Heckerman, D., & Kadie, C.",
      year: 1998,
      title: "Empirical analysis of predictive algorithms for collaborative filtering",
      source: "Proceedings of UAI 1998, 43–52",
      snippet:
        "Collaborative filtering represents each user as a vector of ratings over items. Predictions are made by finding users with similar rating vectors and aggregating their preferences.",
      url: "https://arxiv.org/abs/1301.7363",
    },
  },
  "euclidean-distance": {
    id: "euclidean-distance",
    label: "Euclidean distance",
    oneLine: "How far apart two rating vectors are.",
    explanation:
      "d(x,y) = √(Σ(xᵢ − yᵢ)²). If U1=[5,5,1,1] and U2=[4,5,1,2], the distance is small because both love horror and dislike action. U1 vs U3=[1,1,5,5] gives a huge distance.",
    whyItMatters:
      "In movie recommender systems, small Euclidean distance between two users means they would get similar recommendations.",
    citation: {
      authors: "Sarwar, B., Karypis, G., Konstan, J., & Riedl, J.",
      year: 2001,
      title: "Item-based collaborative filtering recommendation algorithms",
      source: "Proceedings of WWW 2001, 285–295",
      snippet:
        "The similarity between two users is computed from their rating vectors. A common approach is to compute the Euclidean distance (or cosine similarity) between the vectors of items they have both rated.",
      url: "https://doi.org/10.1145/371920.372071",
    },
  },
  "manhattan-distance": {
    id: "manhattan-distance",
    label: "Manhattan distance",
    oneLine: "Sum of absolute differences — city-block distance.",
    explanation:
      "d(x,y) = Σ|xᵢ − yᵢ|. Also called L1 distance. Counts how many 'steps' apart two rating vectors are along each movie dimension, without squaring.",
    whyItMatters:
      "Useful when you care about total difference across all ratings equally. Common in text mining and when outliers should matter less than with Euclidean.",
    citation: {
      authors: "Sarwar, B., Karypis, G., Konstan, J., & Riedl, J.",
      year: 2001,
      title: "Item-based collaborative filtering recommendation algorithms",
      source: "Proceedings of WWW 2001, 285–295",
      snippet:
        "Similarity between users can be measured using Pearson correlation, cosine similarity, or distance metrics such as Manhattan distance on their rating vectors.",
      url: "https://doi.org/10.1145/371920.372071",
    },
  },
  "cosine-similarity": {
    id: "cosine-similarity",
    label: "Cosine similarity",
    oneLine: "Measures the angle between two vectors — pattern, not magnitude.",
    explanation:
      "sim = (x·y)/(‖x‖‖y‖). Values near 1 = same direction (similar taste pattern). We use distance = 1 − sim so smaller still means closer. U1 and U2 can differ slightly in rating strength but still score high similarity.",
    whyItMatters:
      "Very popular in recommender systems when you care about rating pattern (loves horror, hates action) more than absolute score levels.",
    citation: {
      authors: "Sarwar, B., Karypis, G., Konstan, J., & Riedl, J.",
      year: 2001,
      title: "Item-based collaborative filtering recommendation algorithms",
      source: "Proceedings of WWW 2001, 285–295",
      snippet:
        "Cosine similarity measures the angle between two rating vectors and is widely used in collaborative filtering to find users with similar taste patterns.",
      url: "https://doi.org/10.1145/371920.372071",
    },
  },
  "distance-matrix": {
    id: "distance-matrix",
    label: "Distance matrix",
    oneLine: "Every row compared to every other row — all distances in one table.",
    explanation:
      "Before clustering, compute distance for each pair. Small values in the table tell you who should be grouped. Dark cells = similar users.",
    whyItMatters:
      "This is the lookup table the clustering algorithm uses to decide cluster membership.",
  },
  cluster: {
    id: "cluster",
    label: "Cluster",
    oneLine: "A group of similar users, movies, or accounts.",
    explanation:
      "Users in the same cluster have small distances between them. Horror fans U1 & U2 form one cluster; action fans U3 & U4 form another.",
    whyItMatters:
      "Clusters let you segment users for recommendations, marketing, or fraud detection.",
    citation: {
      authors: "Jain, A. K.",
      year: 2010,
      title: "Data clustering: 50 years beyond K-means",
      source: "Pattern Recognition Letters, 31(8), 651–666",
      snippet:
        "The objective of clustering is to group data points into clusters such that points within a cluster are more similar to each other than to points in other clusters.",
      url: "https://doi.org/10.1016/j.patrec.2009.09.011",
    },
  },
  "row-clustering": {
    id: "row-clustering",
    label: "Row clustering",
    oneLine: "Group similar users together. Movie columns stay in place.",
    explanation:
      "Compare user rating vectors. Place similar users in adjacent rows. The heatmap shows horizontal color bands — horror lovers grouped, action lovers grouped.",
    whyItMatters:
      "Finds broad groups (e.g. all horror fans) but still considers every movie when forming those groups.",
    citation: {
      authors: "Breese, J. S., Heckerman, D., & Kadie, C.",
      year: 1998,
      title: "Empirical analysis of predictive algorithms for collaborative filtering",
      source: "Proceedings of UAI 1998, 43–52",
      snippet:
        "Users can be clustered based on the similarity of their rating patterns. Users in the same cluster are likely to agree on their preferences for unrated items.",
      url: "https://arxiv.org/abs/1301.7363",
    },
  },
  "column-clustering": {
    id: "column-clustering",
    label: "Column clustering",
    oneLine: "Group similar movies together. User rows stay in place.",
    explanation:
      "Read each movie column top-to-bottom. Horror1 and Horror2 get similar ratings from the same users, so they cluster. Only columns reorder.",
    whyItMatters: 'Answers: "Which movies appeal to the same audience?"',
    citation: {
      authors: "Sarwar, B., Karypis, G., Konstan, J., & Riedl, J.",
      year: 2001,
      title: "Item-based collaborative filtering recommendation algorithms",
      source: "Proceedings of WWW 2001, 285–295",
      snippet:
        "Item-based collaborative filtering computes similarity between columns of the rating matrix — items that tend to be rated similarly by the same users are clustered together.",
      url: "https://doi.org/10.1145/371920.372071",
    },
  },
  biclustering: {
    id: "biclustering",
    label: "Biclustering",
    oneLine: "A specific user group + a specific movie group — matched together.",
    explanation:
      "Row clustering finds broad groups (e.g. all horror fans) but still looks at every movie. Biclustering goes deeper: it identifies a specific group of users who share interest in a specific group of movies — a tight block in the matrix.",
    whyItMatters:
      "Finds tight segments: 'these exact users + these exact movies' — for targeted recommendations or fraud rings.",
    citation: {
      authors: "Madeira, S. C., & Oliveira, A. L.",
      year: 2004,
      title: "Biclustering algorithms for biological data analysis: a survey",
      source: "IEEE/ACM Transactions on Computational Biology and Bioinformatics, 1(1), 24–45",
      snippet:
        "A bicluster is a subset of rows and a subset of columns that exhibit a coherent pattern. The same formulation applies to any data matrix — purchase records, ratings, or network logs.",
      url: "https://doi.org/10.1109/TCBB.2004.11",
    },
  },
  submatrix: {
    id: "submatrix",
    label: "Submatrix",
    oneLine: "The highlighted rectangle — only those users × those movies.",
    explanation:
      "Cut out rows {U1,U2} and columns {Horror1,Horror2}. The four cells inside are the bicluster. Everything else is a different story.",
    whyItMatters: "This block is the actionable finding — a segment you can target directly.",
  },
  heatmap: {
    id: "heatmap",
    label: "Heatmap",
    oneLine: "The matrix as colored squares — bright = high rating.",
    explanation:
      "Colors replace numbers so your eye catches patterns. After clustering reorders rows/columns, blocks of color jump out.",
    whyItMatters: "Standard way to explore rating matrices and spot segments quickly.",
    citation: {
      authors: "Wilkinson, L., & Friendly, M.",
      year: 2009,
      title: "The history of the heat map",
      source: "The American Statistician, 63(2), 179–184",
      snippet:
        "A heat map encodes matrix values as color. Reordering rows and columns to place similar values adjacent reveals block structure in the data.",
      url: "https://doi.org/10.1198/tas.2009.0033",
    },
  },
  reorder: {
    id: "reorder",
    label: "Reorder",
    oneLine: "Shuffle row/column positions without changing any numbers.",
    explanation:
      "The ratings stay the same — only who sits next to whom changes. Similar users slide together so bands become visible.",
    whyItMatters: "Clustering output is a permutation, not new data.",
  },
  rating: {
    id: "rating",
    label: "Rating",
    oneLine: "5 = loves it, 1 = dislikes it.",
    explanation:
      "Each cell is how much a user liked a movie (or how often an account hit an IP). These numbers become vectors for distance calculation.",
    whyItMatters: "High ratings inside the bicluster block define the pattern. Low ratings outside it don't.",
  },
  "bicluster-overlap": {
    id: "bicluster-overlap",
    label: "Overlap",
    oneLine: "The core visualization challenge for biclusters.",
    explanation:
      "A bicluster is a subset of rows and columns scattered across a big matrix. The same row or column can belong to multiple biclusters. Highlighting one block can obscure another — you must show the submatrix clearly while keeping the full data in context.",
    whyItMatters:
      "Every bicluster visualization technique tries to solve overlap: make local blocks readable without hiding global structure.",
    citation: {
      authors: "Henry, N., & Fekete, J.-D.",
      year: 2007,
      title: "MatrixExplorer: a dual-representation system to explore social networks",
      source: "IEEE Transactions on Visualization and Computer Graphics, 13(6), 1307–1314",
      snippet:
        "Visualizing multiple biclusters in a single matrix is challenging because overlapping row and column sets create visual clutter — reordering and linked views help reveal structure without losing context.",
      url: "https://doi.org/10.1109/TVCG.2007.70569",
    },
  },
  "parallel-coordinates": {
    id: "parallel-coordinates",
    label: "Parallel coordinates",
    oneLine: "Each line = one row traced across all column axes.",
    explanation:
      "Vertical axes represent columns (movies, IPs, genes). One polyline per row connects its values. Bicluster rows spike together on the bicluster columns — the joint pattern pops even when the raw matrix is shuffled.",
    whyItMatters:
      "Shows row-wise patterns across many dimensions without reordering the matrix. Useful when you have many columns.",
    citation: {
      authors: "Inselberg, A.",
      year: 1985,
      title: "The plane with parallel coordinates",
      source: "The Visual Computer, 1(2), 69–91",
      snippet:
        "Parallel coordinates map a high-dimensional dataset onto a 2D plane by drawing one polyline per observation across parallel axes — patterns appear as clusters of similar lines.",
      url: "https://doi.org/10.1007/BF01898350",
    },
  },
  "bipartite-graph": {
    id: "bipartite-graph",
    label: "Bipartite graph",
    oneLine: "Rows and columns as two node sets, edges = membership.",
    explanation:
      "Also called a BiGraph. Rows sit on the left, columns on the right. Edges connect row–column pairs that belong to the same bicluster (or share a strong tie). Membership is explicit — you see who connects to whom without cropping the matrix.",
    whyItMatters:
      "Ideal when biclusters overlap heavily: edges show multiple memberships without fighting for rectangle space on a heatmap.",
    citation: {
      authors: "Tanay, A., Sharan, R., Kupiec, M., & Shamir, R.",
      year: 2002,
      title: "Revealing modularity and organization in the yeast molecular network by automated biclustering",
      source: "Physical Review E, 65(3), 031902",
      snippet:
        "Bipartite graph representations link rows and columns directly, making bicluster membership visible as dense edge bundles between the two node sets.",
      url: "https://doi.org/10.1103/PhysRevE.65.031902",
    },
  },
  "submatrix-inset": {
    id: "submatrix-inset",
    label: "Submatrix inset",
    oneLine: "Full heatmap + zoomed bicluster side by side.",
    explanation:
      "Show the full reordered matrix for context, draw a border around the bicluster block, then extract an enlarged inset of just those rows × columns. Solves overlap by keeping global structure while magnifying the local pattern.",
    whyItMatters:
      "Matches what you see in the Explore heatmap: black border on the block plus a detail view you can act on.",
    citation: {
      authors: "Wilkinson, L., & Friendly, M.",
      year: 2009,
      title: "The history of the heat map",
      source: "The American Statistician, 63(2), 179–184",
      snippet:
        "Linked overview and detail views let analysts inspect a submatrix of interest without losing orientation in the full data matrix.",
      url: "https://doi.org/10.1198/tas.2009.0033",
    },
  },
  scatterplot: {
    id: "scatterplot",
    label: "Scatterplot",
    oneLine: "One dot per observation, two numeric axes.",
    explanation:
      "Each point's x and y position encodes two measured attributes. The shape of the cloud reveals correlation, clusters, outliers, and spread — without binning into a heatmap.",
    whyItMatters:
      "A quick 2D projection of matrix rows: pick two column summaries (e.g. avg horror vs avg action) and every user becomes one dot.",
    citation: {
      authors: "Wilkinson, L.",
      year: 2005,
      title: "The Grammar of Graphics",
      source: "Springer, 2nd ed.",
      snippet:
        "The scatterplot is the fundamental graphic for displaying the joint distribution of two continuous variables and assessing their relationship.",
      url: "https://doi.org/10.1007/0-387-28695-0",
    },
  },
  "scatter-correlation": {
    id: "scatter-correlation",
    label: "Correlation",
    oneLine: "Does y rise when x rises?",
    explanation:
      "The overall tilt of the point cloud indicates correlation. A downward slope means high x tends to pair with low y — as with horror fans rating action movies poorly.",
    whyItMatters: "Validates whether two attributes move together before building a recommender model.",
  },
  "scatter-clusters": {
    id: "scatter-clusters",
    label: "Cluster detection",
    oneLine: "Separate clumps in the plane.",
    explanation:
      "Tight groups of points suggest natural segments. You can spot the same horror vs action fan split visually before running row clustering on the full matrix.",
    whyItMatters: "Scatterplots preview what clustering will find in higher dimensions.",
  },
  "scatter-outliers": {
    id: "scatter-outliers",
    label: "Outlier detection",
    oneLine: "Points far from the crowd.",
    explanation:
      "Outliers deviate from the main trend or sit between clusters. They may be data errors, edge-case users, or signals of a third segment worth modelling separately.",
    whyItMatters: "One unusual row can distort distance matrices — catch it early.",
  },
  "scatter-distribution": {
    id: "scatter-distribution",
    label: "Distribution & spread",
    oneLine: "How wide and dense is the cloud?",
    explanation:
      "Scatterplots show the range on each axis and whether points concentrate in corners or spread evenly. Bounding boxes or ellipses summarise variance per group.",
    whyItMatters: "Tells you if clusters are tight or overlapping before you commit to a visualization.",
  },
  "scatter-sampling": {
    id: "scatter-sampling",
    label: "Sampling",
    oneLine: "Plot a subset instead of every point.",
    explanation:
      "Random or stratified sampling displays a representative fraction of the data. Structure is preserved while overplotting drops — e.g. 10,000 points instead of 1 million.",
    whyItMatters: "The simplest way to reduce visible points without changing the graphic type.",
    citation: {
      authors: "Ellis, G., & Dix, A.",
      year: 2007,
      title: "A Taxonomy of Clutter Reduction for Information Visualization",
      source: "IEEE Transactions on Visualization and Computer Graphics, 13(6), 1216–1223",
      snippet:
        "Sampling is a primary clutter-reduction strategy: reducing the number of visual elements displayed while preserving overall data structure.",
      url: "https://doi.org/10.1109/TVCG.2007.70569",
    },
  },
  "scatter-filtering": {
    id: "scatter-filtering",
    label: "Filtering",
    oneLine: "Show only the selected subset.",
    explanation:
      "Interactive filtering, brushing, or queries restrict which observations are drawn. Irrelevant categories disappear from the view, cutting clutter without altering the remaining points.",
    whyItMatters: "Focus on one segment at a time — core to linked brushing in scatterplots.",
    citation: {
      authors: "Becker, R. A., & Cleveland, W. S.",
      year: 1987,
      title: "Brushing scatterplots",
      source: "Technometrics, 29(2), 127–142",
      snippet:
        "Brushing identifies subsets of data by interactively selecting regions of a scatterplot, dynamically linking observations across views.",
      url: "https://doi.org/10.1080/00401706.1987.10488199",
    },
  },
  "scatter-transparency": {
    id: "scatter-transparency",
    label: "Transparency",
    oneLine: "Alpha blending reveals density through overlap.",
    explanation:
      "Rendering points with low opacity (e.g. α = 0.1–0.2) lets stacked marks accumulate into darker regions. Dense areas become visible without removing any observations.",
    whyItMatters: "Keeps all data in the plot while making overlap readable.",
    citation: {
      authors: "Unwin, A., Theisel, H., & Wilkinson, L.",
      year: 2006,
      title: "Snapscree plots and alphashapes for scatterplot density",
      source: "Proceedings of COMPSTAT 2006, 327–338",
      snippet:
        "Alpha blending and density-based overlays address overplotting in scatterplots by making overlapping regions visually distinguishable through accumulated opacity.",
      url: "https://doi.org/10.1007/978-3-7908-1708-3_28",
    },
  },
  "scatter-binning": {
    id: "scatter-binning",
    label: "Hexbin / aggregation",
    oneLine: "Count points per grid or hex cell.",
    explanation:
      "Replace raw points with bins whose colour encodes count. Hexbin plots and 2D histograms scale to large n where individual marks are useless.",
    whyItMatters: "Groups many points into one cell — works as both aggregation and density view.",
    citation: {
      authors: "Carr, D. B., Littlefield, R. J., Nicholson, W. L., & Littlefield, J. S.",
      year: 1987,
      title: "Scatterplot matrix techniques for large N",
      source: "Journal of the American Statistical Association, 82(398), 424–434",
      snippet:
        "Hexagonal binning aggregates scatterplot points into cells, encoding frequency as colour to reveal structure in datasets too large for raw point plots.",
      url: "https://doi.org/10.1080/01621459.1987.10478440",
    },
  },
  "scatter-splom": {
    id: "scatter-splom",
    label: "Scatterplot matrix",
    oneLine: "Grid of all variable pairs.",
    explanation:
      "A SPLOM lays out a miniature scatterplot for every pair of attributes. Scan diagonals and off-diagonals to compare correlations and clusters across many variables at once.",
    whyItMatters: "Solves the two-axis limit of a single scatterplot when you have 4+ variables.",
  },
  "scatter-bubble": {
    id: "scatter-bubble",
    label: "Bubble chart",
    oneLine: "Marker size = third variable.",
    explanation:
      "Bubble charts keep x and y positions but map a third numeric field to circle area (and optionally colour to a fourth). Adds dimensions without adding spatial axes.",
    whyItMatters: "Encodes three or more attributes in one scatterplot view.",
  },
  "scatter-hexbin": {
    id: "scatter-hexbin",
    label: "Hexbin / density plot",
    oneLine: "Binned density for large n.",
    explanation:
      "Hexagonal bins (or kernel density contours) summarise where points concentrate. Designed for thousands of observations where both raw plots and transparency still look like a solid blob.",
    whyItMatters: "Solves severe overplotting and clutter at scale.",
  },
  "bicluster-exclusion": {
    id: "bicluster-exclusion",
    label: "Why cells are excluded",
    oneLine: "Low ratings are not part of the joint pattern.",
    explanation:
      "U1 rates Action1=1 and Action2=1 — those cells are weak. The bicluster is built from cells where users jointly rate movies highly. Action movies aren't co-preferred by U1 & U2, so they're outside this block. That doesn't mean action is unimportant globally — it's just not part of THIS bicluster.",
    whyItMatters:
      "Each bicluster tells one local story. You need separate biclusters for action fans, comedy fans, etc.",
    citation: {
      authors: "Madeira, S. C., & Oliveira, A. L.",
      year: 2004,
      title: "Biclustering algorithms for biological data analysis: a survey",
      source: "IEEE/ACM TCBB, 1(1), 24–45",
      snippet:
        "A bicluster exhibits homogeneity only within its selected rows and columns. Entries outside the bicluster are not constrained to follow the same pattern.",
      url: "https://doi.org/10.1109/TCBB.2004.11",
    },
  },
};

export function getTerm(id: string): GlossaryEntry | undefined {
  return GLOSSARY[id];
}
