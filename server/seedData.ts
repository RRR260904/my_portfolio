export const initialSeedData = {
  profiles: [
    {
      name: "Alex Sterling",
      role: "Senior Full-Stack & Cloud Systems Architect",
      tagline: "Architecting resilient distributed systems, high-throughput APIs, and polished user-centric interfaces.",
      bio: "Passionate engineer with 8+ years building enterprise scale web applications, microservices, and reactive data pipelines. Specializing in Python/Django, Node.js, React, and cloud-native databases.",
      profile_image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      resume_url: "https://example.com/alex-sterling-resume.pdf",
      location: "San Francisco, CA (Open to Remote)",
      years_of_experience: 8,
      available_for_work: true,
      email: "alex.sterling.dev@example.com",
      phone: "+1 (415) 890-3421",
      is_active: true
    }
  ],
  about: [
    {
      title: "Engineering with Craftsmanship and Precision",
      description: "I bridge the gap between heavy distributed systems and modern web interfaces. Over the last decade, I have led technical initiatives scaling platforms from early prototype to millions of monthly active users. My philosophy centers on strict type safety, modular design patterns, low-latency queries, and elegant user feedback loops.",
      highlights: [
        "Led architecture for streaming platforms handling 50k+ events/sec with sub-50ms latency",
        "Author of popular open-source libraries in the Python & TypeScript ecosystems",
        "Deep focus on database optimization, zero-downtime migrations, and horizontal scaling",
        "Strong proponent of clean code, developer empathy, and continuous delivery"
      ],
      quote: "Software architecture is not about building for hypothetical scale; it is about keeping changes easy as scale inevitably arrives.",
      hobbies: [
        "Open Source Hacking",
        "Mechanical Keyboards",
        "Landscape Photography",
        "Mountain Biking"
      ],
      avatar_secondary: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      is_active: true
    }
  ],
  skills: [
    // Frontend
    { name: "React 19 / Next.js", category: "Frontend", proficiency: 96, icon: "Code", featured: true, display_order: 1, is_active: true },
    { name: "TypeScript", category: "Frontend", proficiency: 98, icon: "FileCode", featured: true, display_order: 2, is_active: true },
    { name: "Tailwind CSS", category: "Frontend", proficiency: 94, icon: "Palette", featured: false, display_order: 3, is_active: true },
    { name: "Framer Motion", category: "Frontend", proficiency: 90, icon: "Sparkles", featured: true, display_order: 4, is_active: true },
    { name: "Three.js / WebGL", category: "Frontend", proficiency: 78, icon: "Box", featured: false, display_order: 5, is_active: true },

    // Backend
    { name: "Python / Django / DRF", category: "Backend", proficiency: 95, icon: "Server", featured: true, display_order: 6, is_active: true },
    { name: "Node.js / Express", category: "Backend", proficiency: 92, icon: "Cpu", featured: true, display_order: 7, is_active: true },
    { name: "FastAPI / AsyncIO", category: "Backend", proficiency: 88, icon: "Zap", featured: false, display_order: 8, is_active: true },
    { name: "GraphQL & REST APIs", category: "Backend", proficiency: 94, icon: "Network", featured: false, display_order: 9, is_active: true },
    { name: "gRPC & Microservices", category: "Backend", proficiency: 84, icon: "Layers", featured: false, display_order: 10, is_active: true },

    // Database & Cloud
    { name: "MongoDB / Atlas", category: "Database & Cloud", proficiency: 95, icon: "Database", featured: true, display_order: 11, is_active: true },
    { name: "PostgreSQL & Redis", category: "Database & Cloud", proficiency: 92, icon: "HardDrive", featured: true, display_order: 12, is_active: true },
    { name: "AWS (ECS, Lambda, S3)", category: "Database & Cloud", proficiency: 89, icon: "Cloud", featured: true, display_order: 13, is_active: true },
    { name: "GCP / Cloud Run", category: "Database & Cloud", proficiency: 86, icon: "CloudRain", featured: false, display_order: 14, is_active: true },

    // DevOps & Tools
    { name: "Docker & Kubernetes", category: "DevOps & Tools", proficiency: 88, icon: "Container", featured: true, display_order: 15, is_active: true },
    { name: "CI/CD (GitHub Actions)", category: "DevOps & Tools", proficiency: 92, icon: "GitBranch", featured: false, display_order: 16, is_active: true },
    { name: "Terraform / IaC", category: "DevOps & Tools", proficiency: 82, icon: "Settings", featured: false, display_order: 17, is_active: true },
    { name: "Prometheus & Grafana", category: "DevOps & Tools", proficiency: 80, icon: "Activity", featured: false, display_order: 18, is_active: true }
  ],
  experiences: [
    {
      company: "Nexus Cloud Dynamics",
      role: "Lead Systems Architect & Full-Stack Engineer",
      period: "2023 - Present",
      start_date: "2023-03",
      end_date: "Present",
      is_current: true,
      location: "San Francisco, CA",
      description: "Spearheading multi-tenant cloud orchestration platform handling high-volume analytical ingest for Fortune 500 customers.",
      responsibilities: [
        "Architected real-time event streaming pipeline processing 250M+ messages daily using MongoDB Atlas and Kafka",
        "Reduced p99 API response times by 42% through optimized indexing, query caching, and query pipeline restructuring",
        "Mentored a team of 12 full-stack engineers and established strict code review and CI/CD quality benchmarks"
      ],
      technologies: ["Python", "Django REST Framework", "MongoDB", "TypeScript", "React", "Docker", "AWS"],
      company_url: "https://example.com/nexus",
      display_order: 1,
      is_active: true
    },
    {
      company: "Vanguard Tech Labs",
      role: "Senior Software Engineer",
      period: "2020 - 2023",
      start_date: "2020-01",
      end_date: "2023-02",
      is_current: false,
      location: "Austin, TX (Remote)",
      description: "Designed core transactional engines and client facing web dashboards for financial risk simulation products.",
      responsibilities: [
        "Built modular Django and Node.js microservices with JWT-based RBAC and end-to-end audit logging",
        "Implemented interactive reactive dashboard in React with Framer Motion transitions and canvas-rendered data visualizations",
        "Migrated legacy monolithic database to partitioned MongoDB cluster with zero data loss or downtime"
      ],
      technologies: ["Django", "Python", "MongoDB", "React", "Tailwind CSS", "Redis", "Jest"],
      company_url: "https://example.com/vanguard",
      display_order: 2,
      is_active: true
    },
    {
      company: "Aetheria Solutions",
      role: "Full-Stack Developer",
      period: "2018 - 2020",
      start_date: "2018-06",
      end_date: "2019-12",
      is_current: false,
      location: "Seattle, WA",
      description: "Developed enterprise SaaS collaboration tooling and automated reporting integrations.",
      responsibilities: [
        "Created RESTful endpoints consuming third-party OAuth APIs and Webhooks",
        "Implemented responsive UI components with clean design systems and accessible HTML5 semantics",
        "Optimized frontend bundle sizes by 35% through dynamic code-splitting and asset compression"
      ],
      technologies: ["Python", "JavaScript", "React", "MongoDB", "PostgreSQL", "Docker"],
      company_url: "https://example.com/aetheria",
      display_order: 3,
      is_active: true
    }
  ],
  education: [
    {
      institution: "University of California, Berkeley",
      degree: "Bachelor of Science",
      field_of_study: "Computer Science & Data Engineering",
      period: "2014 - 2018",
      start_year: 2014,
      end_year: 2018,
      grade: "Magna Cum Laude (3.89 GPA)",
      activities: ["President of Open Source Developers Club", "Undergraduate Teaching Assistant for Distributed Systems"],
      description: "Comprehensive coursework in Operating Systems, Database Management Systems, Distributed Computing, Algorithm Design, and Human-Computer Interaction.",
      display_order: 1,
      is_active: true
    }
  ],
  projects: [
    {
      title: "Krypton: Distributed Observability Mesh",
      slug: "krypton-observability-mesh",
      short_description: "High-throughput telemetry ingestion and latency anomaly detection platform with real-time alerting.",
      full_description: "Krypton is an enterprise observability engine engineered to aggregate trace events, logs, and system metrics across containerized microservices. Built with a reactive ingestion layer and a MongoDB time-series storage backend, it enables engineering teams to visualize bottleneck cascades and auto-detect latency deviations in milliseconds.",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80"
      ],
      technologies: ["Python", "Django REST", "MongoDB Atlas", "React", "Tailwind CSS", "Docker"],
      features: [
        "Real-time streaming telemetry ingestion supporting 10,000+ spans/sec",
        "Automated dependency graph construction with dynamic blast-radius mapping",
        "Customizable alert thresholds with Slack & PagerDuty webhook dispatchers",
        "Interactive flamegraph exploration with millisecond precision markers"
      ],
      problem: "Traditional logging tools were either exorbitantly priced at high volume or struggled with cross-service trace correlation across asynchronous message queues.",
      solution: "Engineered an asynchronous ingestion pipeline with PyMongo batch writes and lightweight distributed tracing headers, drastically reducing storage overhead while retaining full query fidelity.",
      challenges: "Handling sudden burst traffic spikes without dropping trace packets. Resolved by implementing backpressure-aware in-memory buffering and concurrent write workers.",
      github_url: "https://github.com/example/krypton-mesh",
      live_demo_url: "https://krypton-demo.example.com",
      video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      category: "Cloud Infrastructure",
      status: "Production Ready",
      featured: true,
      display_order: 1,
      is_active: true
    },
    {
      title: "OmniStore: Event-Driven E-Commerce Core",
      slug: "omnistore-ecommerce-engine",
      short_description: "Modular headless commerce platform featuring sub-second inventory locking and distributed checkout workflows.",
      full_description: "OmniStore is a modern developer-first headless commerce backend providing lightning-fast catalog search, dynamic inventory reservation locks, and multi-currency checkout. Built with Django REST Framework and MongoDB document models for flexible product variant schemas.",
      thumbnail: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80"
      ],
      technologies: ["Django", "Python", "MongoDB", "React", "Tailwind CSS", "Redis"],
      features: [
        "Optimistic locking for inventory reservation during flash sales",
        "Polymorphic product attribute catalogs with faceted aggregation queries",
        "Webhooks architecture for Stripe and shipment courier notifications",
        "Multi-region deployment ready with zero-downtime database migrations"
      ],
      problem: "Rigid SQL tables caused migration nightmares whenever merchants introduced arbitrary custom product variations and locale pricing.",
      solution: "Leveraged MongoDB's dynamic document schema to store custom variant matrices alongside structured compound indexes for sub-10ms category navigation.",
      challenges: "Eliminating race conditions when thousands of users contest the same limited-inventory SKU simultaneously.",
      github_url: "https://github.com/example/omnistore-core",
      live_demo_url: "https://omnistore-preview.example.com",
      video_url: "",
      category: "Full-Stack Web",
      status: "Completed",
      featured: true,
      display_order: 2,
      is_active: true
    },
    {
      title: "Vortex: AI Vector Search & Knowledge Hub",
      slug: "vortex-ai-knowledge-hub",
      short_description: "Semantic document retrieval and context augmentation pipeline with hybrid keyword-vector indexing.",
      full_description: "Vortex empowers development teams to index technical documentation, API specifications, and codebases into a semantic knowledge base. Features interactive query inspection, citation traceability, and automatic document recrawling.",
      thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
      ],
      technologies: ["Python", "FastAPI", "MongoDB Vector Search", "React", "Framer Motion"],
      features: [
        "Hybrid search combining BM25 lexical matches with dense vector embeddings",
        "Streaming Markdown response preview with interactive citation chips",
        "Role-based document access controls and workspace segregation",
        "Automated chunking strategies with overlap tuning"
      ],
      problem: "Traditional search engines failed to retrieve relevant code snippets and conceptual documentation when queries didn't share exact keywords.",
      solution: "Combined MongoDB Atlas Vector Search with hybrid reranking, boosting retrieval relevance score by 68%.",
      challenges: "Maintaining real-time search latency while chunking and embedding multi-gigabyte PDF archives.",
      github_url: "https://github.com/example/vortex-search",
      live_demo_url: "https://vortex-search.example.com",
      video_url: "",
      category: "AI & Search",
      status: "Completed",
      featured: true,
      display_order: 3,
      is_active: true
    },
    {
      title: "Aura: Developer Workflow CLI & Cloud Sync",
      slug: "aura-dev-cli",
      short_description: "Cross-platform CLI tool for syncing environment variables and secrets securely across developer workstations.",
      full_description: "Aura is a lightweight developer CLI tool designed to simplify local secrets management. It encrypts environment configurations locally and synchronizes team workspace environments with zero plain-text leaks.",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
      gallery: [],
      technologies: ["Python", "Cryptography", "MongoDB", "Click", "Docker"],
      features: [
        "AES-256-GCM envelope encryption for all sensitive environment values",
        "Automatic `.env` format parser with diff conflict resolution",
        "CI/CD injection command for automated ephemeral test environments"
      ],
      problem: "Engineers were sharing sensitive `.env` files over unencrypted channels, risking credentials leakage.",
      solution: "Built a CLI with end-to-end client-side encryption backed by a secure MongoDB cloud vault.",
      challenges: "Designing intuitive merge conflict resolution when two engineers modified the same environment variable simultaneously.",
      github_url: "https://github.com/example/aura-cli",
      live_demo_url: "",
      video_url: "",
      category: "Developer Tools",
      status: "Maintained",
      featured: false,
      display_order: 4,
      is_active: true
    }
  ],
  certifications: [
    {
      title: "AWS Certified Solutions Architect – Professional",
      issuer: "Amazon Web Services",
      issue_date: "2023-04",
      expiry_date: "2026-04",
      credential_id: "AWS-PSA-8849201",
      credential_url: "https://aws.amazon.com/verification",
      badge_image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=400&q=80",
      skills: ["Cloud Architecture", "High Availability", "Disaster Recovery", "VPC Security"],
      display_order: 1,
      is_active: true
    },
    {
      title: "MongoDB Certified Developer Associate",
      issuer: "MongoDB Inc.",
      issue_date: "2022-11",
      expiry_date: "2025-11",
      credential_id: "MONGO-DEV-439201",
      credential_url: "https://university.mongodb.com/certificates",
      badge_image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=400&q=80",
      skills: ["Aggregation Pipelines", "Index Optimization", "Sharding & Replication", "PyMongo"],
      display_order: 2,
      is_active: true
    },
    {
      title: "Certified Kubernetes Application Developer (CKAD)",
      issuer: "Cloud Native Computing Foundation (CNCF)",
      issue_date: "2022-06",
      expiry_date: "2025-06",
      credential_id: "CKAD-7719284",
      credential_url: "https://www.cncf.io/certification/ckad/",
      badge_image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=400&q=80",
      skills: ["Pod Orchestration", "ConfigMaps & Secrets", "Ingress Controllers", "Network Policies"],
      display_order: 3,
      is_active: true
    }
  ],
  achievements: [
    {
      title: "1st Place – Global Cloud Native Hackathon",
      description: "Awarded top honor out of 450+ international teams for developing an automated serverless microservices failover framework.",
      date: "2023",
      metric: "Top 1 of 450 Teams",
      organization: "Cloud Native Tech Summit",
      link: "https://example.com/hackathon-winner",
      icon: "Trophy",
      display_order: 1,
      is_active: true
    },
    {
      title: "High-Throughput Open Source Milestone",
      description: "Created a Python async connection pooling driver that surpassed 1.5M downloads and 3,200 GitHub stars.",
      date: "2022",
      metric: "1.5M+ Downloads",
      organization: "PyPI / GitHub",
      link: "https://github.com/example/async-pool",
      icon: "Star",
      display_order: 2,
      is_active: true
    },
    {
      title: "Technical Speaker & Workshop Lead",
      description: "Delivered keynote and hands-on workshop on 'Scaling MongoDB with Django REST Framework' to an audience of 1,200+ engineers.",
      date: "2024",
      metric: "1,200+ Attendees",
      organization: "PyCon Dev Conference",
      link: "https://example.com/talks/mongodb-django",
      icon: "Award",
      display_order: 3,
      is_active: true
    }
  ],
  social_links: [
    { platform: "GitHub", url: "https://github.com/example", username: "alexsterling-dev", display_order: 1, is_active: true },
    { platform: "LinkedIn", url: "https://linkedin.com/in/example", username: "alex-sterling-eng", display_order: 2, is_active: true },
    { platform: "Twitter/X", url: "https://x.com/example", username: "@sterling_arch", display_order: 3, is_active: true },
    { platform: "YouTube", url: "https://youtube.com/@example", username: "Alex Sterling Tech", display_order: 4, is_active: true },
    { platform: "Discord", url: "https://discord.com", username: "sterling#0001", display_order: 5, is_active: true }
  ],
  contact_info: [
    {
      email: "alex.sterling.dev@example.com",
      phone: "+1 (415) 890-3421",
      location: "San Francisco, California, USA",
      working_hours: "09:00 - 18:00 PST (Mon - Fri)",
      availability_note: "Currently accepting high-impact architectural consulting and select full-time senior engineering opportunities.",
      is_active: true
    }
  ],
  contact_messages: [
    {
      name: "Jordan Hayes",
      email: "jordan.hayes@cloudfrontier.io",
      subject: "Senior Architect role at CloudFrontier",
      message: "Hi Alex, we reviewed your work on distributed telemetry pipelines. We'd love to discuss leading our infrastructure engineering team.",
      created_at: new Date(Date.now() - 3600000 * 48).toISOString(),
      is_read: true,
      is_replied: false
    },
    {
      name: "Elena Rostova",
      email: "elena@fintechinnovate.com",
      subject: "Consulting on MongoDB sharding architecture",
      message: "Hello! We are preparing to shard our primary transaction database and would appreciate 2 weeks of architectural consultation.",
      created_at: new Date(Date.now() - 3600000 * 12).toISOString(),
      is_read: false,
      is_replied: false
    }
  ],
  site_settings: [
    {
      site_title: "Alex Sterling | Full-Stack & Cloud Systems Architect",
      meta_description: "Personal developer portfolio of Alex Sterling featuring production engineering projects, distributed systems architecture, skills, and technical experience.",
      og_image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      keywords: "fullstack, python, django, mongodb, react, distributed systems, software engineer, cloud architect",
      enable_glow_effects: true,
      theme_accent_color: "indigo-violet",
      footer_text: "Engineered with precision. All content sourced dynamically from MongoDB.",
      is_active: true
    }
  ]
};
