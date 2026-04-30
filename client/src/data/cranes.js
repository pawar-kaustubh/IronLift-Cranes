import { CONTACT_FORM_INITIAL_STATE } from "./forms";

export const CRANE_FLEET = [
  {
    slug: "tower-crane",
    tag: "01",
    name: "Tower Crane",
    capacity: "20 tons",
    reach: "265 ft",
    height: "260 ft",
    bestFor: "high-rise construction and dense urban builds",
    summary: "Ideal for long-duration vertical builds where reach and stability matter most.",
    description:
      "Tower cranes handle steel, precast, formwork, and material drops for multi-storey projects with limited ground space.",
    image:
      "https://images.pexels.com/photos/35342374/pexels-photo-35342374.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=1600",
    accentImage:
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80",
    inquiryMessage:
      "We need a tower crane for a high-rise build. Please advise the best mast height, hook reach, and mobilization plan.",
    details: ["Dense-city access", "Long-term rental", "Precision vertical lifts"],
  },
  {
    slug: "mobile-crane",
    tag: "02",
    name: "Mobile Crane",
    capacity: "75 tons",
    reach: "180 ft",
    height: "175 ft",
    bestFor: "fast-mobilization lifts and multi-stop projects",
    summary: "A versatile pick for quick deployments, city sites, and recurring lift windows.",
    description:
      "Mobile cranes move fast, rig quickly, and suit mixed commercial work where the lift plan changes throughout the day.",
    image:
      "https://images.pexels.com/photos/29502193/pexels-photo-29502193.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=1600",
    accentImage:
      "https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?auto=format&fit=crop&w=1200&q=80",
    inquiryMessage:
      "We need a mobile crane for a mixed-use project with multiple short lifts. Please suggest the best capacity and schedule.",
    details: ["Rapid mobilization", "City-friendly setup", "Short-cycle lifts"],
  },
  {
    slug: "crawler-crane",
    tag: "03",
    name: "Crawler Crane",
    capacity: "250 tons",
    reach: "350 ft",
    height: "335 ft",
    bestFor: "heavy infrastructure and long-span lifts",
    summary: "Built for heavy components, bridge work, industrial plants, and wind projects.",
    description:
      "Crawler cranes bring high capacity and stable tracked movement to the largest lifts across infrastructure and industrial sites.",
    image:
      "https://images.unsplash.com/photo-1763478481810-edeac96d94a6?auto=format&fit=crop&w=1200&q=80",
    accentImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    inquiryMessage:
      "We need a crawler crane for a heavy industrial lift. Please review ground conditions, lift radius, and rigging requirements.",
    details: ["Heavy components", "Tracked stability", "Industrial projects"],
  },
  {
    slug: "all-terrain-crane",
    tag: "04",
    name: "All-Terrain Crane",
    capacity: "120 tons",
    reach: "220 ft",
    height: "210 ft",
    bestFor: "rough access roads and mixed ground conditions",
    summary: "Flexible on-road/off-road performance for energy, utility, and remote sites.",
    description:
      "All-terrain cranes handle transition-heavy jobs where the rig must travel on public roads and still work on uneven job sites.",
    image:
      "https://www.manitowoc.com/sites/default/files/styles/product_1st_image/public/media/divers/images/2021-11/GMK4080-3-silhouette-transparent-800x600.png?itok=Xcq8aBEQ",
    accentImage:
      "https://images.unsplash.com/photo-1763573655767-f3911d60b3ac?auto=format&fit=crop&w=1200&q=80",
    inquiryMessage:
      "We need an all-terrain crane for a remote site. Please advise on road access, outrigger setup, and mobilization timing.",
    details: ["Mixed terrain", "Utility projects", "Fast road travel"],
  },
  {
    slug: "rough-terrain-crane",
    tag: "05",
    name: "Rough Terrain Crane",
    capacity: "90 tons",
    reach: "150 ft",
    height: "145 ft",
    bestFor: "unimproved jobsites, oilfields, and pipelines",
    summary: "A compact heavy lifter made for muddy, rocky, and uneven ground conditions.",
    description:
      "Rough-terrain cranes are at home on sites where the ground is too uneven for standard mobile equipment.",
    image:
      "https://media.istockphoto.com/id/950637700/photo/telescopic-crane.jpg?s=612x612&w=0&k=20&c=iXLZm64QL3_H1yy7zmdG0K4KJdJc4US7F_GydvESXA0=",
    accentImage:
      "https://images.unsplash.com/photo-1763573655767-f3911d60b3ac?auto=format&fit=crop&w=1200&q=80",
    inquiryMessage:
      "We need a rough-terrain crane for an industrial site with uneven access. Please suggest the safest setup and capacity.",
    details: ["Uneven ground", "Compact footprint", "Industrial yards"],
  },
  {
    slug: "truck-mounted-crane",
    tag: "06",
    name: "Truck-Mounted Crane",
    capacity: "50 tons",
    reach: "130 ft",
    height: "125 ft",
    bestFor: "highway-ready lifts and repeat delivery schedules",
    summary: "Best when you need quick road travel, simple staging, and repeatable lifts.",
    description:
      "Truck-mounted cranes reduce downtime when the project requires a lift crew that can move quickly between locations.",
    image:
      "https://images.unsplash.com/photo-1583246820648-e06ee5e2c267?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3JhbmUlMjB0cnVja3xlbnwwfHwwfHx8MA%3D%3D",
    accentImage:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
    inquiryMessage:
      "We need a truck-mounted crane for repeat lifts across multiple sites. Please help with the best deployment plan.",
    details: ["Fast road travel", "Repeat lifts", "Light logistics"],
  },
];

export function getCraneBySlug(slug) {
  if (!slug) return null;
  return CRANE_FLEET.find((crane) => crane.slug === slug) ?? null;
}

export function buildContactInitialState(selectedCrane) {
  return {
    ...CONTACT_FORM_INITIAL_STATE,
    projectType: selectedCrane?.name ?? "",
    message: selectedCrane?.inquiryMessage ?? CONTACT_FORM_INITIAL_STATE.message,
  };
}
