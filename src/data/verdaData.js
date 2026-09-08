// VERDA Platform Core Data & Research Repository
// Based on the VERDA 7-Page Design Specification

export const VERDA_METRICS = [
  { label: 'Unmet Market Need', value: '53.8%', sub: 'No trusted delivery brand known' },
  { label: 'Terrace Garden Intent', value: '76.9%', sub: 'Eager to adopt guided farming app' },
  { label: 'Agricultural Branches', value: '14+', sub: 'Interdisciplinary domain coverage' },
  { label: 'Synthetic Chemicals', value: '0.0%', sub: '100% certified organic inputs' },
];

export const AGRICULTURE_FOUNDATION = {
  title: 'The Lifeline of Human Civilization & Economy',
  quote: 'The agriculture industry is one of the oldest and most essential sectors of the economy. It focuses on the production of food, raw materials, and other agricultural goods through farming and livestock. This industry supports livelihoods, ensures food security, and contributes significantly to a country\'s economic development.',
  pillars: [
    {
      id: 'food-security',
      title: 'Global Food Security',
      desc: 'Sustains human life by producing nutritious, chemical-free staple crops, fresh produce, and essential proteins.',
      icon: 'Wheat',
      color: 'from-amber-500/20 to-emerald-500/20',
      badge: 'Nutritional Sovereignty'
    },
    {
      id: 'economic-growth',
      title: 'Economic Engine & Trade',
      desc: 'Accounts for a substantial share of GDP in agrarian economies and supplies vital raw materials to manufacturing.',
      icon: 'TrendingUp',
      color: 'from-emerald-500/20 to-teal-500/20',
      badge: 'Rural Empowerment'
    },
    {
      id: 'livelihoods',
      title: 'Livelihoods & Employment',
      desc: 'Employs over 1 billion people globally, protecting generational farming knowledge and family farm dignity.',
      icon: 'Users',
      color: 'from-verda-500/20 to-green-600/20',
      badge: 'Inclusive Growth'
    },
    {
      id: 'ecological-balance',
      title: 'Ecological Regeneration',
      desc: 'Rebuilds living topsoil micro-biomes, restores groundwater reserves, and sequesters atmospheric carbon.',
      icon: 'Sprout',
      color: 'from-lime-500/20 to-verda-500/20',
      badge: 'Carbon Sequestration'
    }
  ]
};

// 14 Branches of Agriculture from Page 3
export const AGRICULTURE_BRANCHES = [
  {
    id: 'crop-science',
    title: 'Crop Science',
    category: 'Plant & Soil',
    shortDesc: 'Agronomy, crop genetics, yield optimization, and heirloom seed preservation.',
    fullDesc: 'Crop science focuses on improving the yield, nutritional value, and pest resistance of food crops through natural breeding, heirloom variety selection, and sustainable crop rotation.',
    verdaIntegration: 'Provides verified non-GMO heirloom seeds with high germination viability rates.',
    icon: 'Wheat',
    tags: ['Agronomy', 'Seed Genetics', 'Crop Rotation']
  },
  {
    id: 'agricultural-engineering',
    title: 'Agricultural Engineering',
    category: 'Tech & Systems',
    shortDesc: 'Farm machinery, smart irrigation, IoT microclimate sensors, and automation.',
    fullDesc: 'Application of engineering principles to agricultural production, processing, soil conservation, and automated precision watering mechanisms for urban and rural settings.',
    verdaIntegration: 'Smart IoT drip irrigation kits, solar mini-pumps, and automated terrace watering timers.',
    icon: 'Cpu',
    tags: ['IoT Sensors', 'Drip Systems', 'Smart Hardware']
  },
  {
    id: 'horticulture',
    title: 'Horticulture',
    category: 'Plant & Soil',
    shortDesc: 'Cultivation of fruits, vegetables, culinary herbs, and ornamental flora.',
    fullDesc: 'The art and science of cultivating garden crops, focusing on intensive management of high-value fruits, vegetables, microgreens, and medicinal herbs in confined urban or greenhouse spaces.',
    verdaIntegration: 'Complete terrace grow guides for compact kitchen gardens, vertical planters, and fruiting vines.',
    icon: 'Flower2',
    tags: ['Vegetable Gardening', 'Kitchen Herbs', 'Urban Terraces']
  },
  {
    id: 'agroforestry',
    title: 'Agroforestry',
    category: 'Ecology & Trees',
    shortDesc: 'Integrated management of trees, crops, and perennial shrub ecosystems.',
    fullDesc: 'A dynamic, ecologically based natural resources management system that integrates trees on farms and in the agricultural landscape to diversify production and regenerate biodiversity.',
    verdaIntegration: 'Permaculture multi-tier canopy planning tools and perennial fruit tree starter kits.',
    icon: 'Trees',
    tags: ['Multi-Tier Canopy', 'Permaculture', 'Biodiversity']
  },
  {
    id: 'plant-pathology',
    title: 'Plant Pathology',
    category: 'Plant Health',
    shortDesc: 'Diagnosis, prevention, and organic control of plant diseases and fungal pathogens.',
    fullDesc: 'The study of pathogens (fungi, bacteria, viruses) causing plant diseases and the environmental conditions that trigger them, prioritizing biological controls over toxic fungicides.',
    verdaIntegration: 'AI Leaf Doctor camera scanner that diagnoses blight, powdery mildew, and root rot in under 3 seconds.',
    icon: 'Microscope',
    tags: ['AI Disease Scan', 'Bio-Fungicides', 'Foliar Health']
  },
  {
    id: 'soil-science',
    title: 'Soil Science',
    category: 'Plant & Soil',
    shortDesc: 'Soil biology, humus composition, mycorrhizal networks, and fertility dynamics.',
    fullDesc: 'Examines the physical, chemical, and biological properties of soils, emphasizing living micro-flora, earthworm ecology, moisture retention, and pH balance for organic nutrition.',
    verdaIntegration: 'Microbial bio-elixirs (Jeevamrutha), organic vermicompost, and home soil test protocols.',
    icon: 'Layers',
    tags: ['Living Soil', 'Micro-Biome', 'Humus & Compost']
  },
  {
    id: 'agricultural-biotechnology',
    title: 'Agricultural Biotechnology',
    category: 'Tech & Systems',
    shortDesc: 'Beneficial bio-inoculants, mycorrhizal fungi, and bio-stimulant synthesis.',
    fullDesc: 'Using biological organisms and processes to produce natural microbial boosters, nitrogen-fixing bacteria (Rhizobium, Azotobacter), and organic pest-inhibiting bio-cultures.',
    verdaIntegration: 'Doorstep liquid bio-fertilizers and active beneficial nematode packages.',
    icon: 'Dna',
    tags: ['Bio-Inoculants', 'Mycorrhizae', 'Natural Enzymes']
  },
  {
    id: 'animal-husbandry',
    title: 'Animal Husbandry',
    category: 'Livestock & Animals',
    shortDesc: 'Ethical livestock care, native breed conservation, and manure-soil circularity.',
    fullDesc: 'The agricultural practice of breeding, raising, and ethical management of farm animals, creating symbiotic zero-waste loops through natural cow dung, urine, and biogas generation.',
    verdaIntegration: 'Indigenous cow Panchagavya and aged manure fertilizer sourcing.',
    icon: 'ShieldCheck',
    tags: ['Ethical Livestock', 'Zero-Waste Loop', 'Bio-Manure']
  },
  {
    id: 'entomology',
    title: 'Entomology',
    category: 'Plant Health',
    shortDesc: 'Beneficial pollinators, predatory insects, and natural biological pest control.',
    fullDesc: 'Study of insects in relation to agriculture, focusing on nurturing pollinators (bees, hoverflies) while deploying natural predators (ladybugs, parasitic wasps) to defeat aphids and caterpillars without toxins.',
    verdaIntegration: 'Companion planting companion guides, yellow sticky traps, and cold-pressed neem extracts.',
    icon: 'Bug',
    tags: ['Beneficial Predators', 'Neem Defense', 'Pollinator Gardens']
  },
  {
    id: 'fisheries-science',
    title: 'Fisheries Science & Aquaponics',
    category: 'Livestock & Animals',
    shortDesc: 'Sustainable aquaculture, symbiotic aquaponic systems, and fish emulsion nutrients.',
    fullDesc: 'Managing freshwater resources and closed-loop aquaponic ecosystems where fish waste naturally fertilizes organic vegetables in a closed water recirculation loop.',
    verdaIntegration: 'Balcony aquaponic starter blueprints and organic fish hydrolysate growth tonic.',
    icon: 'Fish',
    tags: ['Aquaponics', 'Fish Hydrolysate', 'Water Recirculation']
  },
  {
    id: 'agriculture-economics',
    title: 'Agriculture Economics',
    category: 'Economics & Policy',
    shortDesc: 'Farm financial viability, fair trade pricing, organic premiums, and market access.',
    fullDesc: 'Economic principles applied to agriculture, optimizing input costs, stabilizing farmer revenues, eliminating predatory middlemen, and ensuring price transparency for consumers.',
    verdaIntegration: 'Direct farm-to-consumer marketplace connecting growers with organic buyers at 30% higher margins.',
    icon: 'Coins',
    tags: ['Fair Trade', 'Direct Market', 'Farmer Margins']
  },
  {
    id: 'agriculture-extension',
    title: 'Agriculture Extension',
    category: 'Economics & Policy',
    shortDesc: 'Community education, practical workshops, peer-to-peer farmer field knowledge.',
    fullDesc: 'Bridging the gap between scientific research and field practice by disseminating hands-on farming techniques, local weather advisories, and terrace gardening masterclasses.',
    verdaIntegration: 'In-app interactive tutorials, community knowledge exchange, and local masterclasses.',
    icon: 'GraduationCap',
    tags: ['Farmer Training', 'Gardening Tutorials', 'Peer Community']
  },
  {
    id: 'dairy-science',
    title: 'Dairy Science',
    category: 'Livestock & Animals',
    shortDesc: 'Ethical milk production, pasture management, and lacto-fermented soil sprays.',
    fullDesc: 'Science of dairy production and processing, emphasizing pasture-fed organic dairy and repurposing whey/buttermilk as natural antifungal foliar sprays.',
    verdaIntegration: 'Buttermilk-asafoetida organic mildew treatment recipes & guidance.',
    icon: 'Milk',
    tags: ['Lacto-Sprays', 'Pasture Health', 'Soil Probiotics']
  },
  {
    id: 'organic-farming',
    title: 'Organic Farming (Core)',
    category: 'Core Focus',
    shortDesc: 'Ecological farming avoiding synthetic pesticides, chemical fertilizers, and GMOs.',
    fullDesc: 'A holistic production management system that promotes agro-ecosystem health, including biodiversity, biological cycles, and soil biological activity by using exclusively natural inputs.',
    verdaIntegration: 'The cornerstone of Vaibhav Nursery — full suite of verified inputs, smart schedules, AI scans, and market produce trading.',
    icon: 'Sparkles',
    isPrimary: true,
    tags: ['Zero Synthetics', 'Soil Living Web', '100% Certified']
  }
];

// Dual Empathy Maps from Page 4
export const EMPATHY_MAPS = {
  farmer: {
    title: 'Commercial / International Organic Farmer',
    role: 'Large & Medium Scale Transitioning Farmer',
    avatar: '👨‍🌾',
    location: 'Rural & Regional Farmland',
    primaryGoal: 'Scale profitable organic yields, secure international certification, and connect with stable buyers.',
    thinksFeels: [
      'How can I maintain soil fertility without costly chemical fertilizers?',
      'How can I reduce operational costs while strictly upholding organic standards?',
      'What will global organic regulations & pesticide residue bans look like in the next 5 years?',
      'Will my farm survive the 2-3 year conversion period before soil yields stabilize?'
    ],
    hears: [
      'What advice are fellow organic farmers & pioneer growers giving me?',
      'What are international certifiers (USDA Organic, EU Eco, APEDA) and auditors emphasizing?',
      'What does the news report about surging consumer demand for organic produce?',
      'What are co-operative farming unions and agrarian boards recommending for subsidies?'
    ],
    sees: [
      'What lucrative market export trends are emerging in organic grains & spices?',
      'What inspiring success stories are global organic farmers sharing online?',
      'What are other leading countries doing better in mechanized organic weed control?',
      'What seasonal weather shifts and climate irregularities are impacting our crop cycles?'
    ],
    saysDoes: [
      'How do I clearly articulate my farm\'s chemical-free purity to potential buyers & partners?',
      'What local or international organic agriculture summits and B2B expos should I attend?',
      'How do I negotiate transparent, fair-trade pricing directly with ethical supermarket chains?'
    ],
    pains: [
      'Certification process is excessively expensive, paper-heavy, and time-consuming.',
      'Initial yield drop during the first 2-3 years of transition away from synthetic inputs.',
      'Difficulty sourcing bulk, standardized organic bio-inputs and certified bio-pesticides reliably.'
    ],
    gains: [
      'Vibrant living topsoil with superior moisture retention and natural earthworm activity.',
      'Premium pricing (+30% to +60%) from direct contracts without exploitative middlemen.',
      'Zero health risks from toxic pesticide exposure for farm workers and family.'
    ],
    verdaSolution: 'Vaibhav Nursery provides bulk bio-fertilizer doorstep logistics, digital audit-ready certification logs, and a direct buyer marketplace.'
  },
  enthusiast: {
    title: 'Organic Farming Enthusiast / Home Grower',
    role: 'Terrace, Balcony & Kitchen Garden Grower',
    avatar: '🌱',
    location: 'Urban & Suburban Apartments / Homes',
    primaryGoal: 'Grow fresh, 100% pesticide-free vegetables and herbs at home with step-by-step guidance.',
    thinksFeels: [
      'Why am I so drawn to organic farming despite the learning curve and initial hurdles?',
      'How can I keep going when skeptics say terrace farming is too slow or unproductive?',
      'How do I balance my passion for clean homegrown food without making costly mistakes?',
      'Can I really feed my family fresh greens harvested straight from our rooftop?'
    ],
    hears: [
      'What practical advice do organic horticulturists give on revitalizing potting soil naturally?',
      'What do my neighbours and family say when they see lush tomato plants on our terrace?',
      'Podcasts and videos talking about microplastics and chemical residues in store-bought produce.'
    ],
    sees: [
      'More conscious consumers choosing organic products at farmer markets and supermarkets.',
      'Innovative urban gardening kits, grow bags, vertical towers, and automated drip gadgets.',
      'Growing educational documentaries, books, and social reels about sustainable living.'
    ],
    saysDoes: [
      'Do I openly talk about natural pest control methods (neem oil spray, marigold companions)?',
      'Am I documenting my plant care milestones and harvest photos for friends and family?',
      'Do I share excess organic cherry tomatoes and fresh mint with neighbors?'
    ],
    pains: [
      'Anxiety over plant pests or yellowing leaves without knowing what natural remedy to use.',
      'Frustration when potting mix hardens or low-quality store seeds fail to germinate.',
      'Lack of time and fear of forgetting daily watering schedules.'
    ],
    gains: [
      'Immense joy and therapeutic satisfaction harvesting fresh, chemical-free food at home.',
      'Noticeably superior taste, crunch, and vitality in homegrown salads and herbs.',
      'Deeper spiritual connection to nature and a cleaner, greener home environment.'
    ],
    verdaSolution: 'Vaibhav Nursery delivers pre-mixed living soil kits, AI leaf disease diagnostics, and smart daily watering schedule notifications.'
  }
};

// 4 Survey Questions from Page 5
export const SURVEY_DATA = [
  {
    id: 'q1',
    question: 'Would you prefer buying organic products if they were delivered to your home at the same cost as conventional ones?',
    summary: 'Over 96% expressed positive willingness if price parity is achieved.',
    options: [
      { label: 'Yes, definitely', percentage: 57.7, color: '#38a85a' },
      { label: 'Maybe / Depends on quality', percentage: 38.5, color: '#d07849' },
      { label: 'No, prefer conventional', percentage: 3.8, color: '#ef4444' }
    ],
    insight: 'Cost parity combined with doorstep convenience removes the primary barrier to mass organic adoption.'
  },
  {
    id: 'q2',
    question: 'Do you know any trusted brands that provide home delivery of organic farming inputs or products?',
    summary: 'More than 53% have zero trusted brands, highlighting an unserved greenfield market.',
    options: [
      { label: 'No, I don\'t know any trusted brand', percentage: 53.8, color: '#d07849' },
      { label: 'Yes, I have heard of some brands', percentage: 46.2, color: '#38a85a' }
    ],
    insight: 'A massive 53.8% brand vacuum gives Vaibhav Nursery first-mover advantage as the trusted end-to-end plant nursery.'
  },
  {
    id: 'q3',
    question: 'If there was an app to guide terrace farming with tutorials & reminders, would you use it?',
    summary: '100% of participants showed openness to an interactive terrace farming companion app.',
    options: [
      { label: 'Yes, I\'d definitely try it', percentage: 76.9, color: '#38a85a' },
      { label: 'Maybe, if it\'s simple & intuitive', percentage: 23.1, color: '#84cc16' },
      { label: 'Not interested at all', percentage: 0.0, color: '#94a3b8' }
    ],
    insight: 'An astonishing 76.9% direct "Yes" confirms high user pull for Vaibhav Nursery\'s mobile guidance & reminders.'
  },
  {
    id: 'q4',
    question: 'If given the opportunity and proper guidance, would you be interested in growing your own vegetables at home?',
    summary: 'Overwhelming positive interest in urban and home vegetable cultivation.',
    options: [
      { label: 'Yes, I\'d love to grow fresh veggies', percentage: 71.4, color: '#38a85a' },
      { label: 'Maybe I could give it a try', percentage: 28.6, color: '#d07849' }
    ],
    insight: 'With the right seeds, soil mix, and schedule, urban households are enthusiastic about homegrown food.'
  }
];

// Problem & Solution Matrix from Page 6
export const PROBLEM_SOLUTION = {
  problem: {
    title: 'The Core Industry Problem',
    points: [
      'Lack of awareness and actionable, scientific guidance on natural organic farming methods.',
      'Severe difficulty in accessing verified high-quality inputs (pure heirloom seeds, enriched vermicompost, non-toxic pest repellents).',
      'No unified, transparent platform that combines doorstep inputs delivery with a guaranteed, fair marketplace for harvest produce.',
      'High friction and prohibitive fees for small farmers seeking official organic certification.'
    ]
  },
  solution: {
    title: 'The Vaibhav Nursery Ecosystem Solution',
    points: [
      'Doorstep Delivery of Premium Organic Inputs: Certified non-GMO seeds, mature compost, bio-fertilizers, and organic pest shields.',
      'AI-Powered Care Companion: Intelligent plant scanner, customized terrace watering calendar, and symptom doctor.',
      'Farm-to-Table Marketplace: Empowering farmers and rooftop growers to sell surplus organic harvest at fair, premium rates.',
      'Accessible Knowledge & Digital Certification: Step-by-step masterclasses and verifiable organic quality tracking.'
    ]
  }
};

// Plant Directory from Page 7 (Snake Plant featured in drawings + common home crops)
export const PLANT_DIRECTORY = [
  {
    id: 'snake-plant',
    name: 'Snake Plant (Sansevieria)',
    category: 'Indoor & Air Purifier',
    price: 163, // from drawing Page 7 "Snake Plant 163/-"
    rating: 4.9,
    difficulty: 'Very Easy',
    light: 'Low to Bright Indirect',
    water: 'Infrequent (every 10-14 days)',
    oxygen: 'High nighttime O2 producer',
    tagline: 'A hardy plant that tolerates low light and infrequent watering, producing oxygen at night.',
    image: '🪴',
    badge: 'Featured in Nursery Collection',
    careTips: [
      'Allow soil to completely dry out between waterings to prevent root rot.',
      'Thrives in almost any lighting condition, including shaded office corners.',
      'Wipe leaves gently with a damp organic cloth once a month to maximize photosynthesis.'
    ]
  },
  {
    id: 'roma-tomato',
    name: 'Organic Roma Tomato (Orga)',
    category: 'Terrace Vegetable',
    price: 95,
    rating: 4.8,
    difficulty: 'Moderate',
    light: 'Full Sunlight (6+ hours)',
    water: 'Daily moderate moisture',
    oxygen: 'High foliage transpirer',
    tagline: 'Sweet, juicy organic tomatoes ideal for terrace grow bags and rich vermicompost.',
    image: '🍅',
    badge: 'High Yield',
    careTips: [
      'Feed with Jeevamrutha or vermicompost tea every 15 days during flowering.',
      'Stake the main stem with bamboo sticks for support as fruit clusters swell.',
      'Prune lower suckers to direct energy into sweet, plump fruit clusters.'
    ]
  },
  {
    id: 'holy-basil',
    name: 'Holy Basil / Tulsi (Mua)',
    category: 'Medicinal & Herb',
    price: 75,
    rating: 5.0,
    difficulty: 'Easy',
    light: 'Direct Sunlight (4-6 hours)',
    water: 'Regular, moist well-drained soil',
    oxygen: 'Natural aromatic air purifier',
    tagline: 'Venerated medicinal herb packed with adaptogens and natural immunity boosters.',
    image: '🌿',
    badge: 'Aromatic & Medicinal',
    careTips: [
      'Pinch off flower heads regularly to encourage bushy, leafy foliage growth.',
      'Spray diluted cold-pressed neem oil if aphids appear on new leaf tips.',
      'Keep soil light and well-draining with 30% coco-peat and 30% organic compost.'
    ]
  },
  {
    id: 'spinach-greens',
    name: 'Organic Baby Spinach (Aqua)',
    category: 'Fast Harvest Greens',
    price: 60,
    rating: 4.7,
    difficulty: 'Very Easy',
    light: 'Partial to Full Sun (4 hours)',
    water: 'Consistent gentle misting',
    oxygen: 'Fresh micro-canopy',
    tagline: 'Nutrient-dense, iron-rich greens ready for harvest within 30 to 35 days.',
    image: '🥬',
    badge: '30-Day Harvest',
    careTips: [
      'Harvest outer leaves progressively to allow the center crown to keep producing.',
      'Keep soil consistently moist; avoid water-logging.',
      'Enrich soil with worm castings (vermicompost) prior to sowing seeds.'
    ]
  },
  {
    id: 'bell-pepper',
    name: 'Rainbow Bell Pepper',
    category: 'Terrace Vegetable',
    price: 110,
    rating: 4.9,
    difficulty: 'Moderate',
    light: 'Full Sun (6-8 hours)',
    water: 'Moderate, when top 1 inch is dry',
    oxygen: 'Active garden booster',
    tagline: 'Crisp, colorful sweet peppers packed with Vitamin C for kitchen gardens.',
    image: '🫑',
    badge: 'Nutrient Rich',
    careTips: [
      'Add bone meal or eggshell powder for calcium to prevent blossom end rot.',
      'Mulch the surface with dry straw or coco husk to preserve soil moisture.',
      'Protect young seedlings from harsh midday summer sun with 50% shade netting.'
    ]
  },
  {
    id: 'mint-wonder',
    name: 'Spearmint & Pudina',
    category: 'Kitchen Herb',
    price: 55,
    rating: 4.9,
    difficulty: 'Beginner',
    light: 'Morning Sun / Dappled Light',
    water: 'Likes constant light moisture',
    oxygen: 'Invigorating aroma',
    tagline: 'Fast-spreading, refreshing kitchen herb perfect for pots and hanging planters.',
    image: '🌱',
    badge: 'Fast Grower',
    careTips: [
      'Grow in a dedicated pot so its vigorous runners don\'t take over other plants.',
      'Snip stem tips often to stimulate dense, fragrant bushy branches.',
      'Give weekly liquid compost tea to maintain deep emerald green leaves.'
    ]
  }
];

// Marketplace Products (Page 7 "Buy / Shop" & Page 6 "Doorstep Inputs")
export const SHOP_PRODUCTS = [
  {
    id: 'prod-1',
    name: 'Vaibhav Nursery Enriched Vermicompost (5kg)',
    category: 'Natural Fertilizers',
    price: 199,
    origPrice: 260,
    rating: 4.9,
    reviews: 320,
    image: '/vermicompost-sack.svg',
    badge: 'Best Seller',
    desc: 'Pure aged earthworm castings enriched with bio-active mycorrhizae and beneficial soil microbes.',
    inStock: true
  },
  {
    id: 'prod-2',
    name: 'Heirloom Vegetable Starter Seed Kit (12 Varieties)',
    category: 'Organic Seeds',
    price: 249,
    origPrice: 350,
    rating: 5.0,
    reviews: 184,
    image: '🌱',
    badge: 'Non-GMO',
    desc: 'High-germination native heirloom seeds: Tomato, Basil, Chilli, Spinach, Coriander, Brinjal & more.',
    inStock: true
  },
  {
    id: 'prod-3',
    name: 'Cold-Pressed Pure Neem Oil Spray (500ml)',
    category: 'Pest Defense',
    price: 180,
    origPrice: 220,
    rating: 4.8,
    reviews: 142,
    image: '🧴',
    badge: '100% Non-Toxic',
    desc: 'Water-soluble Azadirachtin bio-emulsion that repels 200+ garden pests without hurting honeybees.',
    inStock: true
  },
  {
    id: 'prod-4',
    name: 'Smart Drip Irrigation Kit for 10 Pots',
    category: 'Smart Hardware',
    price: 599,
    origPrice: 850,
    rating: 4.9,
    reviews: 96,
    image: '🚰',
    badge: 'Saves 70% Water',
    desc: 'Complete DIY terrace drip line with micro-emitters, adjustable flow stakes, and tap adapter.',
    inStock: true
  },
  {
    id: 'prod-5',
    name: 'Premium Breathable Fabric Grow Bags (Set of 5)',
    category: 'Grow Bags & Pots',
    price: 340,
    origPrice: 480,
    rating: 4.7,
    reviews: 215,
    image: '/grow-bag.svg',
    badge: 'Air Pruning',
    desc: 'Heavy-duty 350 GSM geotextile grow bags promoting fibrous root growth and optimal drainage.',
    inStock: true
  },
  {
    id: 'prod-6',
    name: 'Heavy-Duty Farming & Garden Tools Set (3-Piece)',
    category: 'Farming Tools',
    price: 380,
    origPrice: 520,
    rating: 4.9,
    reviews: 164,
    image: '🛠️',
    badge: 'Rust-Proof Steel',
    desc: 'Ergonomic cast-aluminum hand trowel, transplanting spade, and ultra-sharp bypass pruning shears with comfort-grip handles.',
    inStock: true
  }
];

// Sample AI Diagnostic Scans for Page 7 Plant Scanner
export const SCAN_SAMPLES = [
  {
    id: 'scan-1',
    plantName: 'Roma Tomato Leaf',
    status: 'Early Blight Detected (Alternaria solani)',
    confidence: '96% Match',
    severity: 'Mild - Treatable',
    image: '🍂',
    symptoms: 'Concentric brown target-like rings with yellow halo on lower foliage.',
    organicRemedy: 'Spray baking soda + neem oil solution (1 tbsp soda + 5ml neem oil in 1L water). Remove affected lower leaves.',
    prevention: 'Avoid wetting leaves during watering; mulch base of plant with dried straw.'
  },
  {
    id: 'scan-2',
    plantName: 'Snake Plant (Sansevieria)',
    status: '100% Healthy & Thriving',
    confidence: '99% Match',
    severity: 'Optimal Condition',
    image: '🪴',
    symptoms: 'Erect, deep green variegated leaf blades with firm turgidity and zero blemishes.',
    organicRemedy: 'No intervention required! Maintain watering once every 12 days and enjoy clean oxygen.',
    prevention: 'Keep in bright filtered light for maximum leaf pattern contrast.'
  },
  {
    id: 'scan-3',
    plantName: 'Holy Basil (Tulsi)',
    status: 'Spider Mite & Aphid Cluster',
    confidence: '94% Match',
    severity: 'Moderate',
    image: '🌿',
    symptoms: 'Fine silk webbing on underside of leaf tips, tiny yellow specks, and leaf curling.',
    organicRemedy: 'Blast underside of foliage with strong water spray, followed by 1% cold-pressed neem oil spray in the evening.',
    prevention: 'Companion plant with French marigolds to deter mites naturally.'
  },
  {
    id: 'scan-4',
    plantName: 'Bell Pepper',
    status: 'Nitrogen & Iron Chlorosis',
    confidence: '91% Match',
    severity: 'Mild Nutrient Deficiency',
    image: '🫑',
    symptoms: 'Pale yellowing between green veins on newer top foliage.',
    organicRemedy: 'Apply 250ml diluted Jeevamrutha or fermented compost tea directly to root zone to unlock bio-available iron.',
    prevention: 'Top-dress potting soil with 2 scoops of enriched vermicompost.'
  }
];

// DIY Organic Farming Recipes
export const DIY_RECIPES = [
  {
    id: 'jeevamrutha',
    title: 'Jeevamrutha (Microbial Soil Nectar)',
    prepTime: '48 Hours Fermentation',
    shelfLife: '7-10 Days',
    icon: '🧪',
    purpose: 'Multiplies billions of beneficial soil bacteria, protozoa, and earthworms for explosive plant vitality.',
    ingredients: [
      '10 kg Fresh indigenous cow dung',
      '10 liters Fresh cow urine',
      '2 kg Organic jaggery (or sugarcane juice)',
      '2 kg Pulse flour (gram / chickpea besan)',
      'Handful of uncontaminated virgin soil (under a banyan tree)',
      '200 liters Clean chemical-free water'
    ],
    steps: [
      'Mix dung and urine thoroughly in a clean 200L plastic drum.',
      'Dissolve jaggery and pulse flour in 5 liters of water and add to the barrel.',
      'Add the handful of virgin banyan forest soil (inoculum of primal microbes).',
      'Fill remaining volume with water and stir clockwise with a wooden stick for 2 minutes.',
      'Cover with a breathable jute bag and keep under shade for 48 hours, stirring twice daily.',
      'Dilute 1:10 with water and drench potting soil or farm beds.'
    ]
  },
  {
    id: 'neem-spray',
    title: 'Cold-Pressed Neem Oil Foliar Guard',
    prepTime: '5 Minutes',
    shelfLife: 'Use within 24 Hours',
    icon: '🧴',
    purpose: 'Disrupts lifecycle of 200+ chewing and sucking pests without harming bees or beneficial predators.',
    ingredients: [
      '5 ml Pure cold-pressed neem oil (1500+ ppm Azadirachtin)',
      '2 ml Organic liquid soap or reetha nut extract (natural emulsifier)',
      '1 liter Lukewarm water'
    ],
    steps: [
      'Add the organic liquid soap directly into the pure neem oil and mix until thoroughly creamy.',
      'Pour the emulsified neem blend into lukewarm water and shake vigorously in a spray bottle.',
      'Spray both upper and underside of leaves during late afternoon or sunset to prevent sun scorch.',
      'Repeat once every 7 to 10 days for active prevention.'
    ]
  },
  {
    id: 'compost-tea',
    title: 'Aerated Vermicompost Tea',
    prepTime: '24 Hours Brew',
    shelfLife: '4-6 Hours post aeration',
    icon: '☕',
    purpose: 'Foliar probiotic that coats leaves in beneficial microbes, preventing fungal spores from settling.',
    ingredients: [
      '2 cups Fresh active vermicompost or worm castings',
      '1 tbsp Unsulphured blackstrap molasses',
      '5 liters Dechlorinated water',
      'Aquarium bubbler or stirring stick'
    ],
    steps: [
      'Place vermicompost in a fine mesh brew bag and suspend in 5L of water.',
      'Add blackstrap molasses to feed bacterial growth.',
      'Run aquarium aerator continuously for 24 hours until a sweet, earthy frothy foam appears.',
      'Strain liquid and spray directly onto leaves and root crowns within 6 hours.'
    ]
  }
];
