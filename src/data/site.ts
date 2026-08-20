export interface Project {
  id: string;
  name: string;
  type: string;
  category: string;
  location: string;
  area: string;
  year: string;
  status: string;
  scope: string[];
  materials: string[];
  description: string;
  image: string;
}

export const PROJECTS: Project[] = [
  {
    id: "royal-garden",
    name: "Royal Garden",
    type: "Interior design",
    category: "Penthouse · Bole",
    location: "Addis Ababa, Bole",
    area: "128 m²",
    year: "2025",
    status: "Completed",
    scope: ["Concept", "Design", "Documentation", "Turn-key finishing"],
    materials: ["Sage velvet", "Travertine", "Brushed brass", "Oak herringbone"],
    description:
      "A penthouse above a private garden courtyard in Bole. Floor-to-ceiling glass pulls the greenery inside, while sage velvet, travertine and brushed brass keep the palette grounded. The whole south elevation opens to the living zone, so the highland light does most of the work.",
    image:
      "https://image.qwenlm.ai/generated-images/5c9940e2-73eb-4745-b9ba-db2e6a9bae17/_result.png",
  },
  {
    id: "essence",
    name: "Essence",
    type: "Interior design",
    category: "Apartment · Kazanchis",
    location: "Addis Ababa, Kazanchis",
    area: "62 m²",
    year: "2024",
    status: "Completed",
    scope: ["Concept", "Design", "Documentation", "Furniture & styling"],
    materials: ["Lime plaster", "Pale oak", "Bouclé", "Paper lantern"],
    description:
      "Sixty-two square metres distilled to what matters. Lime plaster, pale oak and one sculptural lamp per room; storage hides behind flush panels so nothing competes with the light. A quiet interior that photographs like a still life.",
    image:
      "https://image.qwenlm.ai/generated-images/09862f26-af29-41da-b3fb-6ba2b1f46397/_result.png",
  },
  {
    id: "shades",
    name: "Shades",
    type: "Interior design",
    category: "Apartment · Gerji",
    location: "Addis Ababa, Gerji",
    area: "84 m²",
    year: "2024",
    status: "Completed",
    scope: ["Concept", "Design", "Lighting scenes", "Turn-key finishing"],
    materials: ["Charcoal plaster", "Walnut", "Cognac leather", "Smoked glass"],
    description:
      "An evening apartment for a film producer in Gerji. Charcoal plaster and walnut absorb the day's noise; layered LEDs, cognac leather and smoked glass take over after dark. Every source is dimmable, every scene programmable.",
    image:
      "https://image.qwenlm.ai/generated-images/610dabaf-76e9-4e98-a5b2-44dbc16f02f5/_result.png",
  },
  {
    id: "sable",
    name: "Sable",
    type: "Interior design",
    category: "Master suite · Summit",
    location: "Addis Ababa, Summit",
    area: "46 m²",
    year: "2023",
    status: "Completed",
    scope: ["Concept", "Design", "Joinery", "Styling"],
    materials: ["Oatmeal linen", "Travertine", "Curved upholstery", "Wool carpet"],
    description:
      "A master suite in a Summit villa, rebuilt around morning light. Oatmeal linen, a curved headboard and travertine night tables soften the wake-up; blackout layers keep it entirely optional.",
    image:
      "https://image.qwenlm.ai/generated-images/d0dd6608-b679-42ca-a666-851563428510/_result.png",
  },
  {
    id: "moonstone",
    name: "Moonstone",
    type: "Interior design",
    category: "Bathing suite · Old Airport",
    location: "Addis Ababa, Old Airport",
    area: "14 m²",
    year: "2025",
    status: "Completed",
    scope: ["Concept", "Design", "Documentation", "Turn-key finishing"],
    materials: ["Grey moonstone", "Brushed brass", "Cove lighting", "Honed stone"],
    description:
      "A bathroom carved from grey stone with delicate veining. The oval bathtub sits off-axis to catch the cove light, brass fixtures float off the wall, and storage disappears into the marble run.",
    image:
      "https://image.qwenlm.ai/generated-images/04068e77-999f-4c97-b2c3-f0e58e9ff87c/_result.png",
  },
  {
    id: "aura",
    name: "Aura",
    type: "Interior design",
    category: "Dining room · CMC",
    location: "Addis Ababa, CMC",
    area: "38 m²",
    year: "2023",
    status: "Completed",
    scope: ["Concept", "Design", "Custom lighting", "Styling"],
    materials: ["Alabaster", "Dark oak", "Warm plaster", "Ceramic"],
    description:
      "A dining room for long evenings on the CMC heights. Arched alcoves hold the glow of three alabaster pendants; dark oak and warm plaster keep the room candle-lit even at full power.",
    image:
      "https://image.qwenlm.ai/generated-images/1441db40-ad1c-4307-a08d-90218a029870/_result.png",
  },
  {
    id: "otto",
    name: "Otto",
    type: "Interior design",
    category: "Compact apartment · Mexico",
    location: "Addis Ababa, Mexico Square",
    area: "54 m²",
    year: "2026",
    status: "In implementation",
    scope: ["Concept", "Design", "Documentation", "Turn-key finishing"],
    materials: ["Oak millwork", "Graphite steel", "Linen", "Terrazzo"],
    description:
      "A compact apartment off Mexico Square that refuses to feel small. One oak millwork wall carries the kitchen, wardrobe, desk and pantry; a graphite core hides the utilities. Fifty-four square metres, zero wasted centimetres.",
    image:
      "https://image.qwenlm.ai/generated-images/77f11e68-188e-4e80-a4e2-200240c21b32/_result.png",
  },
  {
    id: "etoile",
    name: "Etoile",
    type: "Interior design",
    category: "Garden villa · Piassa",
    location: "Addis Ababa, Piassa",
    area: "96 m²",
    year: "2022",
    status: "Completed",
    scope: ["Concept", "Restoration works", "Design", "Turn-key finishing"],
    materials: ["Restored parquet", "Deep veranda", "Brass", "Dusty-blue velvet"],
    description:
      "A mid-century garden villa in Piassa, restored rather than renovated. Original parquet, high ceilings and the deep veranda were repaired by local craftspeople; the new layer — brass, dusty-blue velvet, honed stone — reads as a respectful second chapter.",
    image:
      "https://image.qwenlm.ai/generated-images/58fb0dce-6bce-4eb6-ba07-56ec1012855f/_result.png",
  },
  {
    id: "sommet",
    name: "Sommet",
    type: "Interior design",
    category: "Top-floor flat · Sarbet",
    location: "Addis Ababa, Sarbet",
    area: "71 m²",
    year: "2023",
    status: "Completed",
    scope: ["Concept", "Design", "Skylight works", "Turn-key finishing"],
    materials: ["Honest beams", "Skylights", "Pale oak", "Linen"],
    description:
      "The top floor of a Sarbet block, opened to the sky. Skylights replaced dead corners, the timber structure stayed honest, and a window-seat reading nook now owns the best view of the Entoto hills.",
    image:
      "https://image.qwenlm.ai/generated-images/3920427b-c9bb-4b29-8f7d-a4e870a580ed/_result.png",
  },
];

export const STUDIO_IMAGE =
  "https://image.qwenlm.ai/generated-images/aa7ef201-f55b-4255-86c1-952ba37c3091/_result.png";

export const CONTACT = {
  address: "Bole, Addis Ababa, Ethiopia",
  phoneDisplay: "+251 718 044 064",
  phoneHref: "tel:+251718044064",
  email: "info@zemainteriors.et",
  hours: "Mon – Sat · 8:30 – 18:00",
  socials: [
    { name: "Instagram", url: "https://www.instagram.com/" },
    { name: "Facebook", url: "https://www.facebook.com/" },
    { name: "LinkedIn", url: "https://www.linkedin.com/" },
  ],
};

export const LANGUAGES = [
  { code: "EN", label: "English", active: true },
  { code: "AM", label: "አማርኛ", active: false },
];

export const NAV = [
  { id: "about", label: "About us" },
  { id: "services", label: "Concierge" },
  { id: "process", label: "Process" },
  { id: "projects", label: "Projects" },
  { id: "journal", label: "Journal" },
  { id: "contact", label: "Contact" },
];

export const MARQUEE_ITEMS = [
  "Interior design",
  "Concierge model",
  "Turn-key finishing",
  "Finishing works",
  "Bespoke joinery",
  "Addis Ababa — ET",
];

export interface Service {
  title: string;
  desc: string;
  tags: string[];
}

export const SERVICES: Service[] = [
  {
    title: "Comprehensive interior design",
    desc: "From a measured blank plan to a fully resolved concept: functional layouts, 3D visualisations, colour and material palettes, and a lighting story for every room.",
    tags: ["Functional layouts", "3D visualisations", "Material palettes", "Lighting design"],
  },
  {
    title: "Technical documentation",
    desc: "Construction and installation drawings, joinery details, electrical and hydraulic plans, plus schedules and a budget that holds. Contractors receive everything before they step on site.",
    tags: ["Construction drawings", "Installation plans", "Joinery details", "Cost schedule"],
  },
  {
    title: "Turn-key finishing works",
    desc: "Our vetted crews build what we drew. We run the schedule, order the materials, supervise every trade and report weekly with photos — you visit when it's pleasant, not when it's stressful.",
    tags: ["Vetted crews", "Site supervision", "Weekly photo reports", "Budget control"],
  },
  {
    title: "Furniture & bespoke joinery",
    desc: "Kitchens, wardrobes and built-ins produced to the millimetre with partner workshops in Addis, plus curated loose furniture and textiles chosen to survive real life.",
    tags: ["Custom kitchens", "Built-in storage", "Loose furniture", "Textiles"],
  },
  {
    title: "The Concierge model",
    desc: "One contract and one accountable team from the first sketch to the last key. We hand over a finished, furnished, cleaned interior — utilities connected, warranty paperwork filed.",
    tags: ["Single contract", "Full equipment", "Move-in ready", "Warranty handling"],
  },
];

export interface ProcessStep {
  title: string;
  text: string;
  icon: "compass" | "ruler" | "layers" | "hammer" | "key";
}

export const PROCESS: ProcessStep[] = [
  {
    title: "Consultation & quote",
    text: "We meet on site or at the studio in Bole, listen, measure and price the scope. You leave with a clear offer and a realistic timeline.",
    icon: "compass",
  },
  {
    title: "Concept & layouts",
    text: "Two to three functional concepts, moodboards and first material directions. We choose the path together.",
    icon: "ruler",
  },
  {
    title: "Design & 3D",
    text: "Full visualisations and complete technical documentation, frozen and priced before any work begins.",
    icon: "layers",
  },
  {
    title: "Implementation",
    text: "Finishing, joinery and installations under our supervision, with weekly photo reports and one point of contact.",
    icon: "hammer",
  },
  {
    title: "Handover & concierge",
    text: "Furniture, styling, deep clean, connected utilities. You arrive with keys — and toothbrushes.",
    icon: "key",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Zema took our fifty-four square metres and handed back a home that feels twice the size — and they finished two weeks early.",
    name: "Selam & Dawit",
    detail: "Private clients · Mexico, project Otto",
  },
  {
    quote:
      "One contract, one team, zero chaos. The concierge model is simply what renovation should feel like — we never chased a single contractor.",
    name: "Yonas T.",
    detail: "Private investor · Bole, project Royal Garden",
  },
  {
    quote:
      "They listened first and designed second. Every material still feels right two years in, which says more than any rendering ever could.",
    name: "Bethlehem A.",
    detail: "Homeowner · Piassa, project Etoile",
  },
];

export interface Post {
  date: string;
  category: string;
  title: string;
  excerpt: string;
  read: string;
  image: string;
}

export const POSTS: Post[] = [
  {
    date: "12 Jan 2026",
    category: "Guides",
    title: "Layered light: plan illumination before the walls go up",
    excerpt:
      "Ceiling points decide where you can read, cook and unwind. A lighting plan belongs in the technical stage — not at the lamp shop.",
    read: "6 min read",
    image:
      "https://image.qwenlm.ai/generated-images/610dabaf-76e9-4e98-a5b2-44dbc16f02f5/_result.png",
  },
  {
    date: "28 Nov 2025",
    category: "Materials",
    title: "Natural stone vs. sintered surfaces — an honest comparison",
    excerpt:
      "Moonstone marble ages like wine; sintered slabs shrug off lemon juice. Where each one earns its place in a real kitchen and bath.",
    read: "8 min read",
    image:
      "https://image.qwenlm.ai/generated-images/04068e77-999f-4c97-b2c3-f0e58e9ff87c/_result.png",
  },
  {
    date: "03 Oct 2025",
    category: "Stories",
    title: "Villa soul: restoring mid-century garden villas in Piassa",
    excerpt:
      "Original parquet, deep verandas and three-metre ceilings deserve craftspeople, not angle grinders. Notes from the Etoile project in Piassa.",
    read: "5 min read",
    image:
      "https://image.qwenlm.ai/generated-images/58fb0dce-6bce-4eb6-ba07-56ec1012855f/_result.png",
  },
  {
    date: "14 Aug 2025",
    category: "Studio",
    title: "The concierge model: one team from sketch to keys",
    excerpt:
      "Why we merged the drawing board with the building site — and what a single-contract renovation actually saves you in practice.",
    read: "7 min read",
    image:
      "https://image.qwenlm.ai/generated-images/aa7ef201-f55b-4255-86c1-952ba37c3091/_result.png",
  },
];

export const STATS = [
  { value: 12, suffix: "", label: "years of practice" },
  { value: 180, suffix: "+", label: "interiors delivered" },
  { value: 27, suffix: " 000 m²", label: "designed & finished" },
  { value: 98, suffix: "%", label: "clients who recommend us" },
];
