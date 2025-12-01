export const RANK_WIDTHS = {
  1: { desktop: 65, tablet: 55, mobile: 40 },
  2: { desktop: 75, tablet: 60, mobile: 45 },
  3: { desktop: 75, tablet: 60, mobile: 45 },
  4: { desktop: 80, tablet: 65, mobile: 48 },
  5: { desktop: 75, tablet: 60, mobile: 45 },
  6: { desktop: 80, tablet: 65, mobile: 48 },
  7: { desktop: 80, tablet: 65, mobile: 48 },
  8: { desktop: 85, tablet: 70, mobile: 50 },
  9: { desktop: 85, tablet: 70, mobile: 50 },
  10: { desktop: 110, tablet: 90, mobile: 65 },
};

export const getWidth = (rank, size = "desktop") => {
  return RANK_WIDTHS[rank]?.[size] || RANK_WIDTHS[1][size];
};
