export const PORTFOLIO_DATA = {
  creator: {
    name: "Alex Vance",
    role: "Senior Video Editor & Motion Designer",
    tagline: "High-Retention Visual Storytelling for Creators & Brands",
    bio: "Over 6 years of turning raw A-roll and chaotic footage into cinematic, high-retention stories. Specializing in viral pacing, kinetic typography, 3D motion graphics, and frame-accurate sound design.",
    status: "Available for Q3/Q4 Projects",
    experienceYears: "6+",
    viewsGenerated: "75M+",
    projectsCompleted: "180+",
    clientSatisfaction: "4.9/5.0",
    turnaroundTime: "24-48h",
    location: "Global / Remote (EST & GMT Aligned)",
    email: "alex.vance.edits@gmail.com",
    calendlyUrl: "https://calendly.com",
    discord: "alexvance_edits",
    twitter: "https://x.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
  },

  metrics: [
    { label: "Total Views Generated", value: "75M+", change: "+18M this year", icon: "Flame" },
    { label: "Avg. Viewer Retention", value: "68.4%", change: "+24% vs. avg", icon: "TrendingUp" },
    { label: "Projects Delivered", value: "180+", change: "100% on time", icon: "CheckCircle2" },
    { label: "Turnaround Guarantee", value: "< 48h", change: "24h Rush available", icon: "Zap" },
  ],

  categories: [
    { id: "all", name: "All Work" },
    { id: "short-form", name: "Short-Form (Reels / TikTok / Shorts)" },
    { id: "youtube", name: "YouTube Long-Form" },
    { id: "commercial", name: "Commercials & SaaS Promos" },
    { id: "motion-vfx", name: "3D Motion & VFX" },
  ],

  projects: [
    {
      id: "project-1",
      title: "The $100M AI Startup Playbook",
      category: "youtube",
      aspectRatio: "16:9",
      client: "Tech Unlocked (1.2M Subs)",
      duration: "14:20",
      views: "2.4M Views",
      retentionRate: "72.1% Retention",
      thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      tags: ["Premiere Pro", "After Effects", "Sound Design", "3D Maps", "Kinetic Type"],
      highlight: "Retained 70%+ viewers through first 8 minutes using custom sound design and kinetic chapter breaks.",
      challenge: "Transform a 2-hour technical talking-head interview into an engaging, dynamic 14-minute masterclass.",
      solution: "Created custom 3D isometric infographics, integrated animated B-roll with rhythmic whip pans, and crafted 140+ individual sound effects.",
      results: "Video hit #1 trending in tech and drove 35,000+ new subscribers in 7 days."
    },
    {
      id: "project-2",
      title: "Viral TikTok Retention Hook: Finance",
      category: "short-form",
      aspectRatio: "9:16",
      client: "Caleb Wealth (850k Followers)",
      duration: "00:54",
      views: "4.8M Views",
      retentionRate: "94.2% Completion",
      thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      tags: ["Reels", "Viral Captions", "Speed Ramps", "Sound SFX", "CapCut Pro"],
      highlight: "Over 4.8M views with a 0.8s micro-hook and synchronized word-by-word animated captions.",
      challenge: "Keep Gen-Z finance audience glued for the full 60 seconds to maximize algorithmic shareability.",
      solution: "Implemented split-second visual pattern interrupts every 1.5 seconds, sound risers before each revelation, and high-contrast bold subtitles.",
      results: "18,400+ shares and generated 4,200 newsletter signups from a single short."
    },
    {
      id: "project-3",
      title: "Apex Next-Gen Cyber Wearable Launch",
      category: "commercial",
      aspectRatio: "16:9",
      client: "Apex Hardware Global",
      duration: "01:15",
      views: "1.1M Views",
      retentionRate: "89.0% VTR",
      thumbnail: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      tags: ["Cinema 4D", "DaVinci Resolve", "Commercial Grade", "Sound Foley"],
      highlight: "High-octane commercial ad featuring 3D holographic UI overlays and custom bass-heavy sound engineering.",
      challenge: "Deliver an Apple/Nike level product launch video on a tight 5-day deadline before Kickstarter launch.",
      solution: "3D camera tracking combined with DaVinci Resolve ACES color management and custom foley impacts.",
      results: "Kickstarter campaign funded 350% of its goal within the first 48 hours."
    },
    {
      id: "project-4",
      title: "The Psychology Behind Addiction Algorithms",
      category: "youtube",
      aspectRatio: "16:9",
      client: "MindFrame Media (600k Subs)",
      duration: "18:45",
      views: "1.8M Views",
      retentionRate: "69.5% Retention",
      thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      tags: ["Documentary", "DaVinci Resolve", "Film Grain", "Audio Mastering"],
      highlight: "Cinematic documentary pacing, vintage 16mm film emulation, and orchestral tension score building.",
      challenge: "Structure complex psychological research papers into a gripping narrative flow without boring viewers.",
      solution: "Developed custom chapters, analog CRT screen displacement effects, and soundscape layering.",
      results: "Average view duration exceeded 12 minutes, placing it in the top 1% of the channel's history."
    },
    {
      id: "project-5",
      title: "Luxury Real Estate Cinematic Reel",
      category: "short-form",
      aspectRatio: "9:16",
      client: "Vanguard Estates Beverly Hills",
      duration: "00:42",
      views: "1.9M Views",
      retentionRate: "88.6% Completion",
      thumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      tags: ["Speed Ramps", "Smooth Zoom", "Teal & Orange", "Music Sync"],
      highlight: "Seamless match-cuts through architectural spaces synchronized to an electro-lounge rhythm.",
      challenge: "Showcase an $18M mansion in under 45 seconds while maintaining an ultra-prestigious luxury vibe.",
      solution: "Speed ramping, sky replacement, motion-tracked 3D floor plan callouts, and clean color grading.",
      results: "Property sold within 3 weeks with the buyer citing the viral reel as their first discovery point."
    },
    {
      id: "project-6",
      title: "3D HUD & Sci-Fi Title Sequence",
      category: "motion-vfx",
      aspectRatio: "16:9",
      client: "Obsidian Interactive",
      duration: "00:35",
      views: "850K Views",
      retentionRate: "96.4% Completion",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
      tags: ["Blender 3D", "After Effects", "VFX Compositing", "Sound FX"],
      highlight: "Complex multi-plane 3D camera projection with futuristic telemetry and glitch transitions.",
      challenge: "Create a AAA-grade opening cinematic for an unreleased sci-fi title.",
      solution: "Crafted procedural particle systems, holographic wireframes, and sub-harmonic impact audio.",
      results: "Selected for Motion Design World Feature 2024."
    }
  ],

  colorGradingPresets: [
    {
      id: "teal-orange",
      name: "Cinematic Teal & Orange",
      subtitle: "Hollywood Blockbuster Contrast",
      rawImg: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80&sat=-80&con=-20",
      gradedImg: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
      description: "Separates skin tones with warm amber highlights while pulling shadows toward rich ocean teal.",
      scope: "Vectorscope skin-line aligned, RGB parade highlights balanced @ 90 IRE"
    },
    {
      id: "cyberpunk",
      name: "Cyberpunk Neon Night",
      subtitle: "Ultraviolet & Cyan Shadows",
      rawImg: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80&sat=-90&con=-30",
      gradedImg: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
      description: "Deep crushed blacks with glowing neon pinks and electric cyan reflections for futuristic aesthetic.",
      scope: "Chroma saturation boosted 140%, shadow pedestal pulled to 5 IRE"
    },
    {
      id: "golden-hour",
      name: "Golden Hour Warmth",
      subtitle: "Soft Highlight Rolloff & Glow",
      rawImg: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80&sat=-85&con=-25",
      gradedImg: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      description: "Emulates vintage anamorphic glass with warm halation, golden midtones, and dreamy highlight blooming.",
      scope: "Highlights softly compressed at 95 IRE, warm color temp offset +650K"
    },
    {
      id: "film-noir",
      name: "35mm Moody Film Noir",
      subtitle: "High Dynamic Range & Film Grain",
      rawImg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80&sat=-95&con=-35",
      gradedImg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      description: "Authentic Kodak Vision3 500T emulation with rich micro-contrast, organic grain, and dense blacks.",
      scope: "Custom S-Curve gamma with highlight rolloff and fine luma noise"
    }
  ],

  soundboardSFX: [
    { id: "whoosh", name: "Fast Whip Whoosh", type: "whoosh", icon: "Wind", desc: "Dynamic speed-ramp scene transition" },
    { id: "impact", name: "Heavy Cinematic Impact", type: "impact", icon: "Zap", desc: "Title reveal & climax beat drop" },
    { id: "riser", name: "Tension Synth Riser", type: "riser", icon: "Activity", desc: "Builds anticipation before the punchline" },
    { id: "bassDrop", name: "Deep Sub-Bass 808", type: "bassDrop", icon: "Radio", desc: "Earth-shaking frequency resonance" },
    { id: "glitch", name: "Digital Signal Glitch", type: "glitch", icon: "Cpu", desc: "Tech HUD displacement & error effect" },
    { id: "click", name: "Mechanical Shutter Tick", type: "click", icon: "Sliders", desc: "Paced UI clicks & chapter markers" }
  ],

  services: [
    {
      id: "short-form",
      title: "Viral Short-Form Suite",
      bestFor: "TikTok, IG Reels, YouTube Shorts",
      turnaround: "24-48 Hours",
      priceStarting: "$150",
      popular: true,
      features: [
        "Dynamic 0.8s micro-retention hooks",
        "Animated word-by-word karaoke captions",
        "Pacing & sound effects every 1.5s",
        "9:16 portrait re-framing & zoom punches",
        "B-roll sourcing & meme integration",
        "2 Free revisions included"
      ]
    },
    {
      id: "youtube-mastery",
      title: "YouTube Retention Engine",
      bestFor: "Talking Head, Documentaries, Vlogs (8-20m)",
      turnaround: "3-4 Business Days",
      priceStarting: "$450",
      popular: false,
      features: [
        "Story pacing audit & dead air cutdown",
        "Custom 2D/3D map & data animations",
        "Multi-cam color matching & grading",
        "100+ Layered SFX & royalty-free music",
        "Thumbnail concept advice & A/B testing",
        "Frame.io timestamped review workflow"
      ]
    },
    {
      id: "commercial-ads",
      title: "Commercial & SaaS Promos",
      bestFor: "Product Launches, Paid Ads, Brand Hype",
      turnaround: "4-6 Business Days",
      priceStarting: "$850",
      popular: false,
      features: [
        "3D product rendering & screen tracking",
        "Kinetic typography & branding lockups",
        "Broadcast-level audio mastering (LUFS)",
        "Cinema-grade DaVinci Resolve color grade",
        "Multi-aspect ratio exports (16:9, 9:16, 1:1)",
        "Commercial licensed sound design & VO sync"
      ]
    },
    {
      id: "monthly-retainer",
      title: "Dedicated Creator Retainer",
      bestFor: "Full-Time Creators & Fast Agencies",
      turnaround: "Continuous Priority",
      priceStarting: "$2,800/mo",
      popular: false,
      features: [
        "Up to 12 Short-form or 4 Long-form edits/mo",
        "Guaranteed 24-48h rush queue jump",
        "Dedicated private Slack/Discord channel",
        "Raw footage cloud ingestion pipeline",
        "Unlimited revisions within scope",
        "Bi-weekly retention & CTR strategy calls"
      ]
    }
  ],

  workflowSteps: [
    {
      step: "01",
      title: "Briefing & Raw Ingestion",
      desc: "Send your raw files via Google Drive, Dropbox, or Frame.io with your creative vision, brand guide, and references.",
      icon: "UploadCloud"
    },
    {
      step: "02",
      title: "Story Arc & The Retention Cut",
      desc: "I remove pauses, trim the fluff, and structure the narrative flow to keep viewers hooked from the very first frame.",
      icon: "Scissors"
    },
    {
      step: "03",
      title: "Motion Graphics & Kinetic Polish",
      desc: "Custom animated typography, 3D callouts, tracking badges, zoom ramps, and visual pattern interrupts are integrated.",
      icon: "Layers"
    },
    {
      step: "04",
      title: "Cinema Sound & Color Grade",
      desc: "Multi-track audio soundscapes (whooshes, risers, foley) plus studio color grading tailored to your mood.",
      icon: "Sparkles"
    },
    {
      step: "05",
      title: "Frame.io Review & 4K Delivery",
      desc: "Leave frame-accurate comments directly on the video player. Rapid polish followed by full 4K ProRes master export.",
      icon: "CheckCircle2"
    }
  ],

  techArsenal: [
    { name: "Adobe Premiere Pro", category: "NLE Timeline", proficiency: "Expert (6+ Yrs)", icon: "Film" },
    { name: "DaVinci Resolve Studio", category: "Color & Fairlight Audio", proficiency: "Color Specialist", icon: "Palette" },
    { name: "Adobe After Effects", category: "VFX & 2D/3D Motion", proficiency: "Advanced Motion", icon: "Layers" },
    { name: "Blender 3D", category: "3D Modeling & Lighting", proficiency: "3D Product Animation", icon: "Box" },
    { name: "Adobe Audition", category: "Audio Restoration & Mix", proficiency: "LUFS Mastering", icon: "Volume2" },
    { name: "Topaz Video AI", category: "Upscaling & Frame Interp", proficiency: "4K/8K Enhancement", icon: "Sparkles" },
    { name: "Frame.io", category: "Client Collaboration", proficiency: "Real-time Feedback", icon: "MessageSquare" },
    { name: "Photoshop & Illustrator", category: "Graphic Assets", proficiency: "Thumbnails & Overlays", icon: "Image" }
  ],

  hardwareSpecs: [
    { item: "Workstation", spec: "Apple M3 Max (16-Core CPU, 40-Core GPU, 128GB RAM)" },
    { item: "Secondary Rig", spec: "Custom PC: AMD Ryzen 9 7950X • NVIDIA RTX 4090 24GB" },
    { item: "Monitoring", spec: "Calibrated 32\" 4K HDR Reference Display (100% DCI-P3)" },
    { item: "Audio", spec: "Yamaha HS8 Studio Monitors • Beyerdynamic DT 990 Pro" },
    { item: "Storage NAS", spec: "48TB RAID 10 High-Speed NVMe Storage (10Gbps Network)" }
  ],

  testimonials: [
    {
      id: "t1",
      name: "Marcus Vance",
      role: "Host @ Tech Unlocked (1.2M Subscribers)",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      quote: "Alex took our average view duration from 4:20 up to 9:45 in just three videos. His sound design and graphic pacing are unmatched. He's not just an editor; he's a retention scientist.",
      stat: "+124% Watch Time"
    },
    {
      id: "t2",
      name: "Elena Rostova",
      role: "Creative Director @ Apex Hardware",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      quote: "The product commercial Alex created generated over $350K on our Kickstarter weekend. He nailed the 3D aesthetic and sound design on the first draft. Super communicative on Frame.io.",
      stat: "$350K Funded"
    },
    {
      id: "t3",
      name: "David Sterling",
      role: "Creator & Investor (850k on TikTok)",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      quote: "If you want your short-form content to actually convert and go viral, Alex is your guy. He delivers every single reel within 24 hours and his hooks are lethal.",
      stat: "14M+ Reel Views"
    }
  ],

  faqs: [
    {
      q: "What is your typical turnaround time?",
      a: "For short-form reels and TikToks, turnaround is typically 24-48 hours. For standard YouTube videos (8-15 mins), delivery is 3-4 business days. Need it faster? Rush 24-hour turnaround is available upon request."
    },
    {
      q: "How does the feedback and revision process work?",
      a: "I upload all drafts to Frame.io, where you can click anywhere on the video timeline to leave frame-accurate timestamped notes. All packages include free revision rounds to guarantee you are 100% thrilled."
    },
    {
      q: "How do I send my raw footage?",
      a: "You can share files via Google Drive, Dropbox, WeTransfer, OneDrive, or Frame.io. For large multi-gigabyte projects, I can provide a dedicated private cloud upload link."
    },
    {
      q: "Are the music and sound effects licensed?",
      a: "Yes, 100%! I hold commercial licenses through Artlist, Epidemic Sound, and Audiio. You will never receive copyright strikes or demonetization claims on any platform."
    },
    {
      q: "Can we do a paid test project first?",
      a: "Absolutely! I encourage creators and brands to book a single video or short-form test before committing to a monthly retainer."
    }
  ]
};
