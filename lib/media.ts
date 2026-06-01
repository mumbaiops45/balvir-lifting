// Pexels CDN helpers
export const pexelsImg = (id: number, w = 1260, h = 750) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&dpr=1`;

export const pexelsThumb = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1`;

// Pexels video poster
export const pexelsVideoPoster = (id: number) =>
  `https://images.pexels.com/videos/${id}/free-video-${id}.jpg`;

// Direct Pexels video CDN (SD quality — more likely to stream)
export const pexelsVideoSrc = (id: number) =>
  `https://videos.pexels.com/video-files/${id}/${id}-sd_960_540_25fps.mp4`;

// ─────────────────────────────────────────────
// 15 IMAGES
// ─────────────────────────────────────────────
export interface PexelsImage {
  id: number;
  title: string;
  category: string;
  wide?: boolean; // spans 2 columns in masonry
}

export const galleryImages: PexelsImage[] = [
  { id: 1004409,  title: "Modern elevator interior",        category: "Elevator",     wide: true },
  { id: 2724749,  title: "Glass curtain-wall tower",        category: "Architecture" },
  { id: 374907,   title: "Corporate office building",       category: "Commercial" },
  { id: 1115804,  title: "Skyscraper at dusk",              category: "Architecture", wide: true },
  { id: 290386,   title: "High-rise construction",          category: "Construction" },
  { id: 1438037,  title: "Luxury building facade",          category: "Commercial" },
  { id: 3926482,  title: "Grand hotel lobby",               category: "Hospitality", wide: true },
  { id: 1884283,  title: "Industrial steel framework",      category: "Industrial" },
  { id: 323780,   title: "Modern office atrium",            category: "Commercial" },
  { id: 442150,   title: "Interior design — lobby",         category: "Interiors",   wide: true },
  { id: 325185,   title: "Warehouse facility",              category: "Industrial" },
  { id: 1105766,  title: "Construction crane at work",      category: "Construction" },
  { id: 273209,   title: "Night-time city skyline",         category: "Architecture", wide: true },
  { id: 209251,   title: "Corporate headquarters",          category: "Commercial" },
  { id: 236698,   title: "Modern glass skyscraper",         category: "Architecture" },
];

// ─────────────────────────────────────────────
// 10 VIDEOS
// ─────────────────────────────────────────────
export interface PexelsVideo {
  id: number;
  title: string;
  category: string;
}

export const showcaseVideos: PexelsVideo[] = [
  { id: 7599305,  title: "Elevator arrival — corporate lobby",  category: "Elevator" },
  { id: 16668277, title: "Escalator in modern mall",            category: "Escalator" },
  { id: 13885687, title: "Glass building — blue sky",           category: "Architecture" },
  { id: 30331618, title: "High-rise construction site",         category: "Construction" },
  { id: 31373454, title: "Aerial — urban skyline",              category: "Architecture" },
  { id: 35300419, title: "Waterfront skyscrapers",              category: "Commercial" },
  { id: 36302349, title: "Modern towers — time lapse",          category: "Architecture" },
  { id: 37149347, title: "Industrial elevator shaft",           category: "Industrial" },
  { id: 37149043, title: "Escalator descent — public space",    category: "Escalator" },
  { id: 34970095, title: "Lift ride — scenic architecture",     category: "Elevator" },
];
