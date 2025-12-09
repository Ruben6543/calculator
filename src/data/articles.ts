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
  content: string;
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
    content: `Quantum computing represents one of the most exciting frontiers in modern science. Unlike classical computers that use bits (0s and 1s), quantum computers use quantum bits or "qubits" that can exist in multiple states simultaneously through a phenomenon called superposition.

This fundamental difference allows quantum computers to process vast amounts of information exponentially faster than their classical counterparts. Researchers are exploring applications in cryptography, drug discovery, financial modeling, and climate simulation.

Recent breakthroughs have brought us closer to practical quantum computing. Companies like IBM, Google, and others have made significant strides in increasing qubit stability and reducing error rates. However, challenges remain, including maintaining quantum coherence and scaling up systems.

The implications for scientific research are profound. Quantum computers could help us understand complex molecular structures, optimize supply chains, and solve problems that are currently intractable for classical computers. As we stand on the brink of this technological revolution, it's clear that quantum computing will reshape our understanding of computation and problem-solving.`,
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
    content: `Contemporary poetry has undergone remarkable transformations in recent decades, reflecting the rapid changes in our society, technology, and cultural landscape. Modern poets are breaking free from traditional forms and exploring new ways to express human experience.

The rise of spoken word poetry and performance poetry has brought verse back to public spaces, making it more accessible and immediate. Social media platforms have created new venues for poets to share their work, reaching audiences that might never have encountered poetry otherwise.

Themes in modern poetry often address pressing contemporary issues: climate change, social justice, mental health, and the complexities of digital life. Poets are using language in innovative ways, blending traditional techniques with new media, creating multimedia experiences that challenge our understanding of what poetry can be.

This evolution reflects a broader shift in how we consume and create art. Poetry is no longer confined to academic circles or literary journals—it's alive in coffee shops, on Instagram, in podcasts, and on stages around the world. As society continues to evolve, so too will poetry, serving as both a mirror and a lens through which we understand our changing world.`,
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
    content: `Building web applications that can scale to millions of users requires careful architecture and thoughtful design decisions. Scalability isn't just about handling more traffic—it's about maintaining performance, reliability, and user experience as your application grows.

Key principles include horizontal scaling, where you add more servers rather than making individual servers more powerful. Load balancing distributes traffic across multiple servers, preventing any single point of failure. Caching strategies reduce database load by storing frequently accessed data in memory.

Database optimization is crucial. Techniques like indexing, query optimization, and read replicas can dramatically improve performance. For applications with high read-to-write ratios, consider using content delivery networks (CDNs) to serve static assets closer to users.

Microservices architecture allows different parts of your application to scale independently. This modular approach makes it easier to maintain and update individual components without affecting the entire system.

Monitoring and observability are essential for understanding how your application performs under load. Real-time metrics help identify bottlenecks before they become critical issues. Remember, scalability is an ongoing process, not a one-time achievement.`,
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
    content: `Personalized medicine is transforming healthcare by tailoring treatments to individual patients based on their genetic makeup, lifestyle, and environment. This approach moves beyond the one-size-fits-all model, offering more effective and targeted therapies.

Genetic testing has become more accessible and affordable, allowing healthcare providers to identify genetic predispositions to certain diseases. This information enables early intervention and preventive measures that can significantly improve patient outcomes.

Artificial intelligence plays a crucial role in analyzing vast amounts of genetic and clinical data. Machine learning algorithms can identify patterns that would be impossible for humans to detect, leading to more accurate diagnoses and treatment recommendations.

The integration of genomics, AI, and clinical data is creating unprecedented opportunities for precision medicine. Patients are receiving treatments that are specifically designed for their unique genetic profile, resulting in better outcomes and fewer side effects.

As this field continues to evolve, we're seeing remarkable advances in cancer treatment, rare disease diagnosis, and pharmacogenomics—the study of how genes affect a person's response to drugs. The future of medicine is personalized, and we're witnessing this transformation in real-time.`,
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
    content: `Digital art has revolutionized the way we create, consume, and think about art. From NFTs to virtual reality installations, technology has opened new frontiers for artistic expression that were unimaginable just decades ago.

Artists are now using code, algorithms, and digital tools to create works that challenge traditional notions of art. Digital platforms have democratized art creation, allowing anyone with a computer or smartphone to become an artist.

The art market has also transformed. Online galleries, digital auctions, and blockchain-based ownership have changed how art is bought, sold, and collected. NFTs have created new revenue streams for digital artists while raising questions about authenticity and value.

Virtual and augmented reality are creating immersive art experiences that blur the line between the physical and digital worlds. Museums are digitizing their collections, making art accessible to global audiences without physical travel.

As we move forward, the intersection of art and technology will continue to evolve, creating new forms of expression and challenging our understanding of what art can be.`,
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
    content: `Universities have long been pillars of knowledge and progress, but their role in society is evolving. Today's institutions must balance tradition with innovation, serving both their immediate communities and the global society.

Beyond education, universities drive research that addresses pressing global challenges. They serve as incubators for innovation, fostering entrepreneurship and economic development in their regions. Community engagement programs extend university resources to local residents, creating partnerships that benefit everyone.

However, universities face challenges: rising costs, accessibility, and ensuring that education remains relevant in a rapidly changing world. They must adapt their curricula to prepare students for careers that may not yet exist, while maintaining the critical thinking and broad knowledge that define a liberal education.

The future of universities lies in their ability to be both repositories of knowledge and engines of change. By embracing technology, fostering inclusivity, and strengthening community ties, universities can continue to serve as beacons of progress and enlightenment.`,
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
    content: `Climate science continues to reveal the urgent reality of our changing planet. Recent research shows accelerating rates of ice sheet loss, rising sea levels, and increasingly extreme weather patterns. The scientific consensus is clear: human activities are the primary driver of climate change.

New studies are providing more precise predictions about regional impacts, helping communities prepare for changes ahead. Research into carbon capture technologies and renewable energy solutions offers hope for mitigation strategies.

The latest data shows that while the challenges are significant, there is still time to take meaningful action. Transitioning to renewable energy, protecting natural carbon sinks like forests and oceans, and developing sustainable technologies are all critical steps.

Understanding climate science is essential for making informed decisions about our future. As research continues to evolve, it provides the foundation for policies and actions that can help preserve our planet for future generations.`,
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
    content: `Machine learning is a subset of artificial intelligence that enables computers to learn from data without being explicitly programmed. At its core, machine learning uses algorithms to identify patterns in data and make predictions or decisions.

There are three main types of machine learning: supervised learning (learning from labeled examples), unsupervised learning (finding patterns in unlabeled data), and reinforcement learning (learning through trial and error with rewards).

Common applications include recommendation systems, image recognition, natural language processing, and predictive analytics. Python has become the dominant language for machine learning, with libraries like TensorFlow, PyTorch, and scikit-learn making it accessible to developers.

Getting started requires understanding basic concepts: datasets, features, models, training, and evaluation. While the field can seem complex, many tools and frameworks have made machine learning more approachable for beginners.

As machine learning continues to evolve, it's becoming an essential skill for developers across industries. The key is to start with fundamentals and build practical experience through projects.`,
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
    content: `Great literature transcends its time, speaking to universal human experiences that remain relevant regardless of when they were written. Classic novels endure because they explore fundamental questions about love, loss, identity, justice, and the human condition.

Works like "1984" by George Orwell continue to resonate because they address themes of power, surveillance, and individual freedom that remain pressing concerns. "To Kill a Mockingbird" speaks to issues of racial injustice that, sadly, remain relevant today.

These novels provide windows into different times and places while revealing truths about human nature that are timeless. They challenge readers to think critically about society, morality, and their own values.

Reading classics also connects us to a shared cultural heritage, creating common ground for discussion and understanding across generations. They remind us that while technology and society change, fundamental human experiences and struggles remain constant.

In an age of rapid change, classic literature offers stability and wisdom, helping us understand not just where we've been, but who we are and who we might become.`,
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
    content: `Mental health in academic settings has become a critical concern. Students and faculty face unique pressures: intense workloads, competitive environments, financial stress, and the pressure to succeed. These factors can take a significant toll on mental well-being.

Universities are increasingly recognizing the need for comprehensive mental health support. This includes counseling services, peer support programs, stress management workshops, and creating cultures that prioritize well-being over constant productivity.

For students, the transition to university life can be overwhelming. Academic pressure, social adjustment, and financial concerns create a perfect storm of stressors. Early intervention and accessible support services are crucial.

Faculty members also face challenges: job insecurity, publication pressure, work-life balance, and the emotional demands of teaching and research. Supporting faculty mental health is essential for creating healthy academic environments.

Creating change requires a cultural shift—moving away from glorifying overwork and toward valuing balance, self-care, and seeking help when needed. Mental health should be treated with the same importance as physical health in academic settings.`,
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
    content: `Street art has transformed from being dismissed as vandalism to being recognized as a legitimate and powerful form of cultural expression. Artists like Banksy have brought global attention to the medium, demonstrating its potential for social commentary and artistic innovation.

Street art serves multiple purposes: it beautifies urban spaces, gives voice to marginalized communities, and challenges viewers to think critically about their environment. It's democratic art—accessible to everyone, not confined to galleries or museums.

Cities around the world are embracing street art, commissioning murals and creating legal spaces for artists to work. This shift recognizes the value that street art brings to communities: cultural identity, tourism, and civic pride.

The political dimension of street art cannot be overlooked. It has been a tool for protest, social commentary, and raising awareness about important issues. In authoritarian regimes, street art can be one of the few ways to express dissent publicly.

As street art gains recognition, it raises questions about commercialization, gentrification, and the balance between artistic freedom and public order. The evolution of street art reflects broader conversations about public space, art, and community.`,
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
    content: `Online education has moved from a niche alternative to a mainstream option, accelerated by global events that forced institutions to adapt quickly. This shift has revealed both the potential and limitations of digital learning.

The benefits are clear: accessibility for students who can't attend in-person, flexibility for working professionals, and the ability to reach global audiences. Online platforms offer interactive features, multimedia content, and personalized learning paths that can enhance the educational experience.

However, challenges remain. The lack of face-to-face interaction can impact learning outcomes and student engagement. Not all subjects translate well to online formats, and some students struggle with the self-discipline required for remote learning.

The future likely lies in hybrid models that combine the best of both worlds: online flexibility with in-person connection. Blended learning allows students to access content digitally while maintaining valuable human interaction.

As technology continues to evolve, we'll see more immersive experiences through virtual and augmented reality. The key is ensuring that technology serves pedagogy, not the other way around. Quality education, whether online or in-person, requires thoughtful design and genuine engagement.`,
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
    content: `We're living in an exciting era of space exploration. Private companies like SpaceX and Blue Origin are revolutionizing space travel, while NASA and international partners plan ambitious missions to the Moon, Mars, and beyond.

Recent technological advances have made space exploration more feasible and cost-effective. Reusable rockets have dramatically reduced launch costs, opening new possibilities for research and commercial ventures.

Upcoming missions include returning humans to the Moon, establishing lunar bases, and eventually sending humans to Mars. These missions will test new technologies and provide insights into long-duration spaceflight.

Robotic missions continue to expand our understanding of the solar system. Probes are exploring asteroids, studying the outer planets, and searching for signs of life on other worlds. The James Webb Space Telescope is revealing the universe in unprecedented detail.

Space exploration drives innovation that benefits life on Earth, from medical technologies to materials science. As we look to the stars, we're also learning more about our own planet and how to protect it.`,
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
    content: `Web security is not optional—it's fundamental to building trustworthy applications. Every developer must understand and implement security best practices to protect users and data.

Authentication and authorization are critical. Use strong password hashing (like bcrypt), implement multi-factor authentication, and follow the principle of least privilege. Never trust user input—always validate and sanitize data on both client and server sides.

HTTPS is essential for protecting data in transit. Use secure headers, implement Content Security Policy (CSP), and keep dependencies updated to patch known vulnerabilities. SQL injection and cross-site scripting (XSS) remain common attack vectors that must be prevented.

Regular security audits, penetration testing, and code reviews help identify vulnerabilities before attackers do. Implement proper error handling that doesn't leak sensitive information, and use logging to monitor for suspicious activity.

Security is an ongoing process, not a one-time setup. Stay informed about new threats and vulnerabilities, and be proactive in addressing them. Remember: the cost of a security breach far exceeds the effort required to prevent one.`,
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
    content: `University life is a unique journey of growth, challenges, and discovery. As a current student, I've learned that success isn't just about grades—it's about finding balance, building relationships, and discovering your passions.

The academic workload can be intense, but time management is key. Learning to prioritize, say no when necessary, and take breaks has been crucial for maintaining both academic performance and mental health.

Beyond academics, university offers opportunities for personal development: clubs, sports, volunteer work, and internships. These experiences have been as valuable as my coursework, teaching me skills I couldn't learn in a classroom.

Building a support network of friends, mentors, and advisors has been essential. University can be overwhelming, but you don't have to navigate it alone. Reaching out for help—whether academic or personal—is a sign of strength, not weakness.

My advice to fellow students: embrace the journey, be open to new experiences, and remember that it's okay not to have everything figured out. University is a time for exploration, growth, and becoming who you're meant to be.`,
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
    content: `Nutrition science is often clouded by misinformation, fad diets, and conflicting advice. It's essential to distinguish between evidence-based recommendations and popular myths that lack scientific support.

One common myth is that carbohydrates are inherently bad. The truth is that complex carbohydrates from whole grains, fruits, and vegetables are essential for health. The problem lies in processed foods and added sugars, not carbohydrates themselves.

Another misconception is that you need to "detox" your body with special diets or products. Your liver and kidneys naturally detoxify your body—no special products are needed. A balanced diet rich in fruits, vegetables, and whole foods supports these natural processes.

The "superfood" concept is often exaggerated. While some foods are nutrient-dense, no single food provides all the nutrients you need. A varied, balanced diet is more important than focusing on specific "superfoods."

Evidence-based nutrition emphasizes whole foods, plant-based options, and moderation. Be skeptical of extreme claims, and remember that sustainable, long-term dietary patterns matter more than short-term fixes.`,
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
    content: `Storytelling is one of humanity's oldest and most powerful tools for communication. Whether in business, education, or personal relationships, effective storytelling can transform how messages are received and remembered.

Good stories have structure: a beginning that hooks the audience, a middle that builds tension or interest, and an end that provides resolution or calls to action. They create emotional connections that facts alone cannot achieve.

In business, storytelling helps brands connect with customers, making products and services more relatable. In education, stories make complex concepts memorable and engaging. In leadership, stories inspire and motivate teams.

The key elements include relatable characters, clear conflict or challenge, and meaningful resolution. Authenticity matters—audiences can sense when stories are contrived or manipulative.

Mastering storytelling requires practice. Pay attention to the stories that move you, analyze what makes them effective, and adapt those techniques to your own communication. Whether you're presenting data, teaching a concept, or sharing an idea, framing it as a story can make all the difference.`,
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
    content: `Renewable energy technologies are advancing at an unprecedented pace, making clean energy more efficient, affordable, and accessible than ever before. These breakthroughs are crucial for addressing climate change and creating sustainable energy systems.

Solar panel efficiency continues to improve, with new materials and designs capturing more sunlight and converting it to electricity. Battery storage technology is solving the intermittency problem, allowing solar and wind energy to be stored and used when needed.

Wind turbines are becoming larger and more efficient, with offshore wind farms generating massive amounts of clean energy. Innovations in turbine design and placement are maximizing energy capture while minimizing environmental impact.

Emerging technologies like tidal energy, geothermal systems, and advanced biofuels are expanding the renewable energy portfolio. Research into fusion energy offers the potential for virtually limitless clean power, though it remains in experimental stages.

The economic case for renewable energy is strengthening as costs continue to fall. In many regions, renewable energy is now cheaper than fossil fuels, driving adoption and investment. These technological advances, combined with supportive policies, are accelerating the transition to a clean energy future.`,
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
    content: `Museums are undergoing a digital transformation, using technology to enhance visitor experiences and reach global audiences. Virtual tours, augmented reality, and interactive exhibits are revolutionizing how we engage with art and history.

Digital collections make museum holdings accessible to anyone with an internet connection, breaking down geographical and financial barriers. High-resolution images and 3D scans allow detailed exploration of artifacts that might be too fragile to display regularly.

Augmented reality apps overlay information and reconstructions onto physical exhibits, providing context and bringing history to life. Virtual reality experiences can transport visitors to different times and places, creating immersive educational opportunities.

Social media and online programming have expanded museums' reach, engaging new audiences and creating communities around collections. Digital initiatives also provide new revenue streams and ways to support museum operations.

However, the digital transformation raises questions about the role of physical spaces and the value of in-person experiences. The most successful museums are finding ways to blend digital and physical experiences, using technology to enhance rather than replace traditional museum visits.`,
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
    content: `As artificial intelligence becomes more powerful and pervasive, ethical considerations become increasingly critical. We must ensure that AI systems are developed and deployed in ways that are fair, transparent, and beneficial to society.

Bias in AI systems is a major concern. Machine learning models trained on biased data will perpetuate and amplify those biases, leading to discriminatory outcomes. Addressing this requires diverse teams, careful data selection, and ongoing monitoring.

Transparency and explainability are essential, especially in high-stakes applications like healthcare and criminal justice. Users and affected parties have a right to understand how AI systems make decisions that impact their lives.

Privacy concerns arise as AI systems process vast amounts of personal data. Strong data protection measures and clear consent mechanisms are necessary to protect individual rights.

The potential for job displacement and economic inequality must be addressed through education, retraining programs, and policies that ensure the benefits of AI are widely shared. As we develop increasingly capable AI, we must also consider long-term safety and alignment with human values.

Ethical AI development requires collaboration between technologists, ethicists, policymakers, and affected communities. The goal should be AI that augments human capabilities and serves the common good, not systems that replace human judgment or perpetuate inequality.`,
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
    content: "This is draft content.",
    author: "Test Author",
    pubDate: new Date("2024-01-20"),
    status: "draft",
  },
];
