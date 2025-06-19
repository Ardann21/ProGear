//To find and return a product object from the products array that matches a given productId.
export function getProduct(productId) {
  // Variable to hold the matching product, if found
  let matchingProduct;

  // Loop through all products in the catalog
  products.forEach((product) => {
    // If this product's id matches the requested productId
    if (product.id === productId) {
      // Assign it to matchingProduct
      matchingProduct = product;
    }
  });

  // Return the found product object
  return matchingProduct;
}

export const products = [
  // Cardio Machines

  {
    id: "01",
    category: "Cardio Machines",
    image: "images/inspire-t7s-treadmill-430075.webp",
    name: "Treadmill X100",
    priceCents: 120000,
    desc: "Experience peak performance—and peak entertainment—with the Inspire Series T7S Treadmill.",
    spec: `
      <ul>
        <li>Motor: 3.0 HP continuous duty</li>
        <li>Speed Range: 0.5–12 mph</li>
        <li>Incline: 0–15% electric</li>
        <li>Deck: 60" L x 22" W commercial-grade</li>
        <li>Console: 15.6" HD touchscreen</li>
        <li>Foldable: yes, with soft-drop mechanism</li>
      </ul>
    `,
  },
  {
    id: "02",
    category: "Strength Stations",
    image: "images/Centr-FID7-Hero-1-1200x1200-1.webp",
    name: "FID7 Pro Adjustable Bench",
    priceCents: 50000,
    desc: "Versatile incline/decline bench with adjustable backrest and seat—ideal for presses, flyes, and core work.",
    spec: `
      <ul>
        <li>Positions: 7 backrest angles, 3 seat angles</li>
        <li>Material: Heavy-duty steel frame</li>
        <li>Padding: High-density foam upholstery</li>
        <li>Max Load: 600 lbs</li>
        <li>Dimensions: 52" L x 19" W x 17"–49" H</li>
      </ul>
    `,
  },
  // Free Weights
  {
    id: "03",
    category: "Free Weights",
    image: "images/free-weights.png",
    name: "Free Weights",
    priceCents: 3200,
    desc: "Compact 5 kg cast-iron dumbbell pair—ideal for toning and endurance training.",
    spec: `
      <ul>
        <li>Material: Cast-iron with anti-rust powder coat</li>
        <li>Weight: 5 kg each</li>
        <li>Grip: 28 mm knurled steel handle</li>
        <li>Finish: Matte black</li>
      </ul>
    `,
  },
  {
    id: "04",
    category: "Cable & Functional Trainers",
    image: "images/resistance_gear.png",
    name: "Resistance Band Set",
    priceCents: 2500,
    desc: "A set of 5 resistance bands ranging from light to heavy—ideal for strength training and rehabilitation.",
    spec: `
      <ul>
        <li>Includes: 5 bands (10–40 lbs resistance)</li>
        <li>Material: Natural latex</li>
        <li>Handles: Ergonomic foam grips</li>
        <li>Carry Case: Mesh pouch included</li>
      </ul>
    `,
  },
  {
    id: "05",
    category: "Floors & Mats",
    image: "images/fitnessmat.webp",
    name: "Yoga Mat",
    priceCents: 2000,
    desc: "Eco-friendly, non-slip yoga mat with extra cushioning for joint support during your practice.",
    spec: `
      <ul>
        <li>Thickness: 6 mm</li>
        <li>Material: TPE (Thermoplastic Elastomer)</li>
        <li>Dimensions: 183 cm × 61 cm</li>
        <li>Weight: 1.2 kg</li>
      </ul>
    `,
  },
  {
    id: "06",
    category: "Resistance & Mobility",
    image: "images/ex-bal-01.jpg",
    name: "Exercise Ball",
    priceCents: 3400,
    desc: "Durable, anti-burst exercise ball for stability training, core workouts, and physical therapy.",
    spec: `
      <ul>
        <li>Diameter: 65 cm</li>
        <li>Max Load: 2000 lbs</li>
        <li>Material: Anti-burst PVC</li>
        <li>Includes: Pump and measuring tape</li>
      </ul>
    `,
  },
  {
    id: "07",
    category: "Cardio Machines",
    image: "images/cardio.png",
    name: "Elliptical Trainer E200",
    priceCents: 75000,
    desc: "Smooth, low-impact workout with multi-grip handles and adjustable resistance levels.",
    spec: `
      <ul>
        <li>Resistance Levels: 1–20 magnetic</li>
        <li>Stride Length: 18"</li>
        <li>Display: 5" LCD console</li>
        <li>Heart Rate: Contact sensors</li>
      </ul>
    `,
  },
  {
    id: "08",
    category: "Cardio Machines",
    image: "images/rowing.webp",
    name: "Rowing Machine R500",
    priceCents: 68000,
    desc: "Full-body cardio with air resistance and performance monitor.",
    spec: `
      <ul>
        <li>Resistance: Air flywheel</li>
        <li>Monitor: Time, distance, calories</li>
        <li>Foldable: Yes</li>
        <li>Seat: Sliding, padded</li>
      </ul>
    `,
  },
  {
    id: "09",
    category: "Strength Stations",
    image: "images/rack.jpg",
    name: "Power Rack PR100",
    priceCents: 90000,
    desc: "Heavy-duty steel rack with safety bars and pull-up station.",
    spec: `
      <ul>
        <li>Material: 11-gauge steel</li>
        <li>Weight Capacity: 1000 lbs</li>
        <li>Accessories: Dip handles, band pegs</li>
      </ul>
    `,
  },
  {
    id: "10",
    category: "Strength Stations",
    image: "images/cable_cross.jpg",
    name: "Cable Crossover CC300",
    priceCents: 82000,
    desc: "Dual adjustable pulleys for versatile strength training.",
    spec: `
      <ul>
        <li>Pulleys: Adjustable from high to low</li>
        <li>Weight Stacks: 150 lbs each side</li>
        <li>Handles: 2 pairs included</li>
      </ul>
    `,
  },
  {
    id: "11",
    category: "High-Intensity & Plyo Gear",
    image: "images/PYLO.webp",
    name: "Plyo Box Set",
    priceCents: 12000,
    desc: "Three-height stackable plywood boxes for jump training.",
    spec: `
      <ul>
        <li>Heights: 20", 24", 30"</li>
        <li>Material: High-strength plywood</li>
        <li>Finish: Protective coating</li>
      </ul>
    `,
  },
  {
    id: "12",
    category: "High-Intensity & Plyo Gear",
    image: "images/battle_ropes.jpg",
    name: "Battle Ropes 50 ft",
    priceCents: 4500,
    desc: "Heavy-duty 1.5 diameter rope for high-intensity interval training.",
    spec: `
      <ul>
        <li>Length: 50 ft</li>
        <li>Diameter: 1.5"</li>
        <li>Ends: Heat-shrink caps</li>
      </ul>
    `,
  },
  {
    id: "13",
    category: "Resistance & Mobility",
    image: "images/foamm.webp",
    name: "Foam Roller Pro",
    priceCents: 3000,
    desc: "High-density foam roller for deep tissue massage and mobility.",
    spec: `
      <ul>
        <li>Length: 33 cm</li>
        <li>Diameter: 14 cm</li>
        <li>Density: Extra firm</li>
      </ul>
    `,
  },
  {
    id: "14",
    category: "Resistance & Mobility",
    image: "images/yoga_b.webp",
    name: "Yoga Block Pair",
    priceCents: 1800,
    desc: "Lightweight EVA foam blocks for yoga, stretching, and balance.",
    spec: `
      <ul>
        <li>Dimensions: 23 × 15 × 7.5 cm</li>
        <li>Material: EVA foam</li>
      </ul>
    `,
  },
  {
    id: "15",
    category: "Accessories & Wearables",
    image: "images/watch.jpg",
    name: "Fitness Tracker Watch",
    priceCents: 25000,
    desc: "Smart watch with heart-rate monitoring, GPS, and activity tracking.",
    spec: `
      <ul>
        <li>Battery: Up to 10 days</li>
        <li>Waterproof: 5 ATM</li>
        <li>Features: GPS, Sleep tracking</li>
      </ul>
    `,
  },
  {
    id: "16",
    category: "Accessories & Wearables",
    image: "images/gloves.jpg",
    name: "Lifting Gloves",
    priceCents: 2200,
    desc: "Durable synthetic leather gloves with wrist support straps.",
    spec: `
      <ul>
        <li>Material: Synthetic leather</li>
        <li>Padding: Gel-infused palm</li>
        <li>Closure: Velcro strap</li>
      </ul>
    `,
  },
  // Bundles & Packages
  {
    id: "17",
    category: "Bundles & Packages",
    image: "images/starter-bundle.webp",
    name: "Home Gym Starter Bundle",
    priceCents: 150000,
    desc: "Includes dumbbells, resistance bands, and a yoga mat—for a complete home workout.",
    spec: `
      <ul>
        <li>Contents: Dumbbell pair, band set, yoga mat</li>
        <li>Value: $200+ value</li>
      </ul>
    `,
  },
  {
    id: "18",
    category: "Bundles & Packages",
    image: "images/cardio-pack.jpg",
    name: "Cardio Duo Pack",
    priceCents: 40000,
    desc: "Rowing machine and elliptical package for ultimate cardio variety.",
    spec: `
      <ul>
        <li>Includes: R500 Rower, E200 Elliptical</li>
        <li>Save: 15% compared to individual prices</li>
      </ul>
    `,
  },
];
