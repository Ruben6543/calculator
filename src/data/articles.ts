// Static mock data for articles
export interface Article {
  id: string;
  category:
    | "Science"
    | "Literature"
    | "Programming"
    | "Medicine"
    | "Art"
    | "Opinion"
    | "Other";
  title: string;
  excerpt: string;
  author: string;
  pubDate: Date;
  status: "published" | "draft";
}

export const CATEGORIES: Article["category"][] = [
  "Science",
  "Literature",
  "Programming",
  "Medicine",
  "Art",
  "Opinion",
  "Other",
];

export const ARTICLES: Article[] = [
  {
    id: "1",
    category: "Science",
    title: "The Future of Quantum Computing",
    excerpt:
      "Exploring the revolutionary potential of quantum computing and its implications for scientific research and technology.",
    author: "Dr. Sarah Chen",
    pubDate: new Date("2024-01-15"),
    status: "published",
  },
  {
    id: "2",
    category: "Literature",
    title: "Modern Poetry and Its Evolution",
    excerpt:
      "A deep dive into contemporary poetry movements and how they reflect our changing society.",
    author: "Prof. James Wilson",
    pubDate: new Date("2024-01-10"),
    status: "published",
  },
  {
    id: "3",
    category: "Programming",
    title: "Building Scalable Web Applications",
    excerpt:
      "Best practices for creating web applications that can handle millions of users efficiently.",
    author: "Alex Martinez",
    pubDate: new Date("2024-01-08"),
    status: "published",
  },
  {
    id: "4",
    category: "Medicine",
    title: "Advances in Personalized Medicine",
    excerpt:
      "How genetic testing and AI are revolutionizing patient care and treatment outcomes.",
    author: "Dr. Emily Rodriguez",
    pubDate: new Date("2024-01-05"),
    status: "published",
  },
  {
    id: "5",
    category: "Art",
    title: "Digital Art in the Modern Era",
    excerpt:
      "Exploring how technology has transformed artistic expression and the art market.",
    author: "Maria Garcia",
    pubDate: new Date("2024-01-03"),
    status: "published",
  },
  {
    id: "6",
    category: "Opinion",
    title: "The Role of Universities in Society",
    excerpt:
      "A thoughtful reflection on how universities can better serve their communities and students.",
    author: "Dr. Robert Thompson",
    pubDate: new Date("2024-01-01"),
    status: "published",
  },
  {
    id: "7",
    category: "Science",
    title: "Climate Change: The Latest Research",
    excerpt:
      "Recent findings on climate patterns and what they mean for our planet's future.",
    author: "Dr. Lisa Anderson",
    pubDate: new Date("2023-12-28"),
    status: "published",
  },
  {
    id: "8",
    category: "Programming",
    title: "Introduction to Machine Learning",
    excerpt:
      "A beginner-friendly guide to understanding machine learning concepts and applications.",
    author: "David Kim",
    pubDate: new Date("2023-12-25"),
    status: "published",
  },
  {
    id: "9",
    category: "Literature",
    title: "Classic Novels That Still Matter",
    excerpt:
      "Why certain literary works continue to resonate with readers across generations.",
    author: "Prof. Elizabeth Brown",
    pubDate: new Date("2023-12-22"),
    status: "published",
  },
  {
    id: "10",
    category: "Medicine",
    title: "Mental Health Awareness in Academia",
    excerpt:
      "Addressing the mental health challenges faced by students and faculty in higher education.",
    author: "Dr. Michael Chang",
    pubDate: new Date("2023-12-20"),
    status: "published",
  },
  {
    id: "11",
    category: "Art",
    title: "Street Art as Cultural Expression",
    excerpt:
      "How street art has evolved from vandalism to recognized form of cultural and political expression.",
    author: "Sophie Turner",
    pubDate: new Date("2023-12-18"),
    status: "published",
  },
  {
    id: "12",
    category: "Opinion",
    title: "The Future of Online Education",
    excerpt:
      "Examining how online learning platforms are reshaping higher education.",
    author: "Dr. Amanda White",
    pubDate: new Date("2023-12-15"),
    status: "published",
  },
  {
    id: "13",
    category: "Science",
    title: "Space Exploration: New Horizons",
    excerpt:
      "Latest developments in space technology and upcoming missions to explore our solar system.",
    author: "Dr. John Smith",
    pubDate: new Date("2023-12-12"),
    status: "published",
  },
  {
    id: "14",
    category: "Programming",
    title: "Web Security Best Practices",
    excerpt:
      "Essential security measures every developer should implement in their web applications.",
    author: "Rachel Green",
    pubDate: new Date("2023-12-10"),
    status: "published",
  },
  {
    id: "15",
    category: "Other",
    title: "University Life: A Student Perspective",
    excerpt:
      "Personal experiences and insights from a current university student navigating academic life.",
    author: "Student Writer",
    pubDate: new Date("2023-12-08"),
    status: "published",
  },
  {
    id: "16",
    category: "Medicine",
    title: "Nutrition Science: Debunking Myths",
    excerpt:
      "Separating fact from fiction in popular nutrition advice based on scientific evidence.",
    author: "Dr. Patricia Lee",
    pubDate: new Date("2023-12-05"),
    status: "published",
  },
  {
    id: "17",
    category: "Literature",
    title: "The Art of Storytelling",
    excerpt:
      "How effective storytelling techniques can enhance communication in any field.",
    author: "Prof. Mark Davis",
    pubDate: new Date("2023-12-03"),
    status: "published",
  },
  {
    id: "18",
    category: "Science",
    title: "Renewable Energy Breakthroughs",
    excerpt:
      "Recent innovations in solar, wind, and other renewable energy technologies.",
    author: "Dr. Jennifer Taylor",
    pubDate: new Date("2023-12-01"),
    status: "published",
  },
  {
    id: "19",
    category: "Art",
    title: "Museums in the Digital Age",
    excerpt:
      "How museums are adapting to digital technologies and virtual experiences.",
    author: "Carlos Mendez",
    pubDate: new Date("2023-11-28"),
    status: "published",
  },
  {
    id: "20",
    category: "Opinion",
    title: "Ethics in Artificial Intelligence",
    excerpt:
      "Critical considerations for developing AI systems that are fair, transparent, and beneficial.",
    author: "Dr. Kevin Park",
    pubDate: new Date("2023-11-25"),
    status: "published",
  },
  // Draft article (should not be displayed)
  {
    id: "21",
    category: "Programming",
    title: "Draft Article",
    excerpt: "This is a draft article that should not appear on the homepage.",
    author: "Test Author",
    pubDate: new Date("2024-01-20"),
    status: "draft",
  },
];
