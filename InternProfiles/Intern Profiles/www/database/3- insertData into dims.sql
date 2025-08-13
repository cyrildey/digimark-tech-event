-- Step 1: Insert Data into Admins, Parents, Supervisors, and Interns tables

-- Insert Admin Data
INSERT INTO Admins (user_id, fullname, email) 
VALUES 
(1, 'John Doe', 'john.doe@admin.com'),
(2, 'Alice Brown', 'alice.brown@admin.com'),
(3, 'Bob White', 'bob.white@admin.com'),
(4, 'Charlie Green', 'charlie.green@admin.com'),
(5, 'David Blue', 'david.blue@admin.com');

-- Insert Parent Data
INSERT INTO Parents (user_id, fullname, email) 
VALUES 
(1, 'Jane Doe', 'jane.doe@parent.com'),
(2, 'Emma Smith', 'emma.smith@parent.com'),
(3, 'Lily Clark', 'lily.clark@parent.com'),
(4, 'Olivia Taylor', 'olivia.taylor@parent.com'),
(5, 'Sophia Anderson', 'sophia.anderson@parent.com');

-- Insert Supervisor Data
INSERT INTO Supervisors (user_id, fullname, email) 
VALUES 
(1, 'Mark Smith', 'mark.smith@supervisor.com'),
(2, 'Rachel Adams', 'rachel.adams@supervisor.com'),
(3, 'Paul Williams', 'paul.williams@supervisor.com'),
(4, 'Nancy Johnson', 'nancy.johnson@supervisor.com'),
(5, 'James Brown', 'james.brown@supervisor.com');

-- Insert Intern Data
INSERT INTO Interns (user_id, fullname, dob, school_name, department, level, region, town, quarter, additional_info)
VALUES 
(1, 'Emily Johnson', '2000-05-10', 'Tech University', 'Software Engineering', 3, 'Center', 'Yaoundé', 'Ekounou', 'Has experience in software development.'),
(2, 'Michael Harris', '2001-07-15', 'Science College', 'Data Science', 2, 'East', 'Douala', 'Bassa', 'Has experience with Python and Machine Learning.'),
(3, 'Sarah Lee', '1999-09-05', 'Engineering Institute', 'Mechanical Engineering', 4, 'Northwest', 'Bafoussam', 'Nkolbisson', 'Interested in robotics and automation.'),
(4, 'John Carter', '2000-11-22', 'Medical University', 'Biomedical Engineering', 3, 'Southwest', 'Buea', 'Molyko', 'Worked on medical device projects.'),
(5, 'Olivia King', '2002-02-28', 'Business School', 'Business Administration', 1, 'West', 'Limbe', 'Tiko', 'Studied business strategy and entrepreneurship.');

-- Insert Parent-Intern Relationship Data
INSERT INTO ParentInterns (parent_id, intern_id) 
VALUES 
(1, 1), 
(2, 2), 
(3, 3), 
(4, 4), 
(5, 5);

-- Step 2: Insert InternshipPosition Data
INSERT INTO InternshipPositions (
    created_by, 
    title_en, 
    title_fr, 
    description_en, 
    description_fr, 
    type, 
    duration, 
    amount, 
    start_date, 
    specialty_id
) VALUES 
(1, 
    'Photography, Video Production, and Content Management', 
    E'Photographie, production vid\u00e9o et gestion de contenu', 
    'Immerse yourself in an innovative training program designed to master the art of visual storytelling. Participants will explore cutting-edge photography and videography techniques, including advanced lighting setups, cinematic composition, and digital post-production workflows using industry-leading tools like Adobe Premiere, Final Cut Pro, and DaVinci Resolve. This program also delves into content strategy, analytics, and cross-platform integration, empowering participants to create engaging multimedia assets tailored for marketing, education, and cultural preservation.', 
    E'Plongez dans un programme de formation innovant con\u00e7u pour ma\u00eetriser l\'art du storytelling visuel. Les participants exploreront des techniques de photographie et de vid\u00e9ographie de pointe, y compris des configurations d\'\u00e9clairage avanc\u00e9es, des compositions cin\u00e9matographiques et des flux de travail num\u00e9riques post-production avec des outils de pointe comme Adobe Premiere, Final Cut Pro et DaVinci Resolve. Ce programme aborde \u00e9galement la strat\u00e9gie de contenu, les analyses et l\'int\u00e9gration multi-plateformes, permettant aux participants de cr\u00e9er des actifs multim\u00e9dias engageants adapt\u00e9s au marketing, \u00e0 l\'\u00e9ducation et \u00e0 la pr\u00e9servation culturelle.', 
    'Onsite', 
    '6 months', 
    50000, 
    '2025-06-01', 
    1),

(1, 
    'AR/VR Development and Motion Interactive Media', 
    E'D\u00e9veloppement AR/VR et m\u00e9dias interactifs en mouvement', 
    'Step into the future with this comprehensive training program focused on augmented reality (AR), virtual reality (VR), and motion interactive media. Participants will gain hands-on experience with advanced hardware and software, including ARKit, ARCore, Unity, and Unreal Engine. Learn to build immersive applications for VR headsets, integrate 3D motion design, and craft interactive user experiences. This course equips you to innovate across education, entertainment, and advertising industries, using the latest AR/VR technologies.', 
    E'Plongez dans l\'avenir avec ce programme de formation complet ax\u00e9 sur la r\u00e9alit\u00e9 augment\u00e9e (AR), la r\u00e9alit\u00e9 virtuelle (VR) et les m\u00e9dias interactifs en mouvement. Les participants acquerront une exp\u00e9rience pratique avec du mat\u00e9riel et des logiciels avanc\u00e9s, y compris ARKit, ARCore, Unity et Unreal Engine. Apprenez \u00e0 cr\u00e9er des applications immersives pour les casques VR, \u00e0 int\u00e9grer des conceptions 3D en mouvement et \u00e0 concevoir des exp\u00e9riences utilisateur interactives. Ce cours vous pr\u00e9pare \u00e0 innover dans les secteurs de l\'\u00e9ducation, du divertissement et de la publicit\u00e9 en utilisant les derni\u00e8res technologies AR/VR.', 
    'Online', 
    '3 months', 
    50000, 
    '2025-04-15', 
    2),

(1, 
    'UI/UX Design (Web, Mobile, Desktop)', 
    E'Conception UI/UX (Web, Mobile, Bureau)', 
    'This transformative training empowers participants to create intuitive, user-centered designs for digital platforms, including web, mobile, and desktop applications. Learn human-centered design principles, advanced prototyping tools such as Figma and Adobe XD, and cutting-edge responsive design techniques. The program also covers accessibility standards, user testing methodologies, and integrating feedback into iterative designs, ensuring participants can deliver seamless and innovative user experiences.', 
    E'Cette formation transformatrice permet aux participants de cr\u00e9er des conceptions intuitives et centr\u00e9es sur l\'utilisateur pour les plateformes num\u00e9riques, y compris les applications Web, mobiles et de bureau. Apprenez les principes de conception centr\u00e9s sur l\'humain, les outils de prototypage avanc\u00e9s tels que Figma et Adobe XD, et les techniques de conception r\u00e9active de pointe. Le programme couvre \u00e9galement les normes d\'accessibilit\u00e9, les m\u00e9thodologies de test utilisateur et l\'int\u00e9gration des retours dans des conceptions it\u00e9ratives, garantissant que les participants peuvent offrir des exp\u00e9riences utilisateur innovantes et fluides.',
    'Online', 
    '4 months', 
    50000, 
    '2025-05-20', 
    2),

(1, 
    'Data-Driven and Digital Marketing', 
    E'Marketing ax\u00e9 sur les donn\u00e9es et num\u00e9rique', 
    'This forward-thinking program revolutionizes marketing strategies by harnessing the power of data analytics and digital platforms. Participants will master tools like Google Analytics, Tableau, and Power BI to analyze customer behavior, design predictive marketing models, and optimize campaigns. Explore advanced topics such as search engine marketing (SEM), social media advertising, and A/B testing to develop high-impact, ROI-driven strategies tailored for global audiences.', 
    E'Ce programme innovant r\u00e9volutionne les strat\u00e9gies de marketing en exploitant la puissance des analyses de donn\u00e9es et des plateformes num\u00e9riques. Les participants ma\u00eetriseront des outils comme Google Analytics, Tableau et Power BI pour analyser le comportement des clients, concevoir des mod\u00e8les de marketing pr\u00e9dictif et optimiser les campagnes. Explorez des sujets avanc\u00e9s tels que le marketing par moteur de recherche (SEM), la publicit\u00e9 sur les r\u00e9seaux sociaux et les tests A/B pour d\u00e9velopper des strat\u00e9gies \u00e0 fort impact, ax\u00e9es sur le ROI, adapt\u00e9es \u00e0 un public mondial.',
    'Online', 
    '3 months', 
    50000, 
    '2025-05-10', 
    3),

(1, 
    'Risk Analytics and Project Management', 
    E'Analyse des risques et gestion de projet', 
    'Prepare to lead in high-stakes environments with this cutting-edge program combining risk analytics and project management. Learn to leverage machine learning and simulation tools for identifying, assessing, and mitigating risks in critical sectors like finance, healthcare, and IT. Gain expertise in Agile methodologies, resource planning, and regulatory compliance while managing complex projects with tools like Jira and Trello to deliver impactful results.', 
    E'Pr\u00e9parez-vous \u00e0 diriger dans des environnements \u00e0 enjeux \u00e9lev\u00e9s avec ce programme de pointe combinant analyse des risques et gestion de projet. Apprenez \u00e0 exploiter les outils d\'apprentissage automatique et de simulation pour identifier, \u00e9valuer et att\u00e9nuer les risques dans des secteurs critiques comme la finance, la sant\u00e9 et l\'informatique. Acqu\u00e9rez une expertise dans les m\u00e9thodologies Agile, la planification des ressources et la conformit\u00e9 r\u00e9glementaire tout en g\u00e9rant des projets complexes avec des outils comme Jira et Trello pour obtenir des r\u00e9sultats percutants.',
    'Onsite', 
    '6 months', 
    50000, 
    '2025-06-30', 
    4),
(1, 
    'Network and System Administration', 
    E'Administration de r\u00e9seau et de syst\u00e8mes', 
    'Dive into advanced IT infrastructure management with this hands-on program. Participants will master Linux and Windows server administration, network troubleshooting, and optimization using next-gen tools and protocols. Explore topics like cybersecurity, disaster recovery, and scalable system design while gaining expertise in securing enterprise networks against modern threats.', 
    E'Plongez dans la gestion avanc\u00e9e des infrastructures informatiques avec ce programme pratique. Les participants ma\u00eetriseront l\'administration des serveurs Linux et Windows, le d\u00e9pannage r\u00e9seau et l\'optimisation \u00e0 l\'aide d\'outils et de protocoles de nouvelle g\u00e9n\u00e9ration. Explorez des sujets comme la cybers\u00e9curit\u00e9, la reprise apr\u00e8s sinistre et la conception de syst\u00e8mes \u00e9volutifs tout en acqu\u00e9rant une expertise dans la s\u00e9curisation des r\u00e9seaux d\'entreprise contre les menaces modernes.', 
    'Onsite', 
    '5 months', 
    50000, 
    '2025-06-25', 
    5),

(1, 
    'DevOps (CI/CD Pipelines, Docker, Kubernetes)', 
    'DevOps (Pipelines CI/CD, Docker, Kubernetes)', 
    'Transform your development and operations workflow with this high-tech program in DevOps. Learn to build self-healing CI/CD pipelines, orchestrate microservices with Docker and Kubernetes, and implement Infrastructure as Code (IaC) using Terraform. This program empowers participants to deploy resilient and scalable systems while integrating monitoring and logging solutions for proactive infrastructure management.', 
    E'Transformez votre flux de travail de d\u00e9veloppement et d\'op\u00e9rations avec ce programme de haute technologie en DevOps. Apprenez \u00e0 construire des pipelines CI/CD auto-r\u00e9parateurs, \u00e0 orchestrer des microservices avec Docker et Kubernetes, et \u00e0 mettre en \u0153uvre l\'Infrastructure as Code (IaC) \u00e0 l\'aide de Terraform. Ce programme permet aux participants de d\u00e9ployer des syst\u00e8mes r\u00e9silients et \u00e9volutifs tout en int\u00e9grant des solutions de surveillance et de journalisation pour une gestion proactive de l\'infrastructure.', 
    'Online', 
    '3 months', 
    50000, 
    '2025-04-30', 
    1),

(1, 
    'Digital Forensics (Incident Response, Investigation Tools)', 
    E'Informatique l\u00e9gale (R\u00e9ponse aux incidents, outils d\'enqu\u00eate)', 
    'Join a cutting-edge program that prepares participants to handle cyber incidents with precision and expertise. Gain skills in forensic analysis tools like EnCase and Autopsy, learn malware reverse engineering techniques, and master secure evidence handling. This program equips participants to investigate complex cyberattacks, recover critical data, and ensure compliance with legal standards, empowering them to become leaders in digital security.', 
    E'Rejoignez un programme de pointe qui pr\u00e9pare les participants \u00e0 g\u00e9rer les incidents cybern\u00e9tiques avec pr\u00e9cision et expertise. Acqu\u00e9rez des comp\u00e9tences dans les outils d\'analyse m\u00e9dico-l\u00e9gale comme EnCase et Autopsy, apprenez des techniques de r\u00e9tro-ing\u00e9nierie des logiciels malveillants et ma\u00eetrisez la gestion s\u00e9curis\u00e9e des preuves. Ce programme permet aux participants d\'enqu\u00eater sur des cyberattaques complexes, de r\u00e9cup\u00e9rer des donn\u00e9es critiques et de garantir la conformit\u00e9 aux normes l\u00e9gales, les pr\u00e9parant \u00e0 devenir des leaders en s\u00e9curit\u00e9 num\u00e9rique.', 
    'Onsite', 
    '4 months', 
    50000, 
    '2025-05-15', 
    1),

(1, 
    'Penetration Testing (Identifying Vulnerabilities)', 
    E'Test d\'Intrusion (Identification des Vuln\u00e9rabilit\u00e9s)', 
    'This high-impact program equips participants with the skills to proactively identify and mitigate vulnerabilities in complex systems. Using industry-leading tools like Metasploit, Burp Suite, and Wireshark, participants will simulate real-world cyberattacks to evaluate security infrastructure. Learn to analyze exploit patterns, design robust countermeasures, and provide actionable recommendations to safeguard critical systems.', 
    E'Ce programme \u00e0 fort impact dote les participants des comp\u00e9tences n\u00e9cessaires pour identifier et att\u00e9nuer de mani\u00e8re proactive les vuln\u00e9rabilit\u00e9s dans des syst\u00e8mes complexes. En utilisant des outils de pointe tels que Metasploit, Burp Suite et Wireshark, les participants simuleront des cyberattaques r\u00e9elles pour \u00e9valuer l\'infrastructure de s\u00e9curit\u00e9. Apprenez \u00e0 analyser les sch\u00e9mas d\'exploitation, \u00e0 concevoir des contre-mesures robustes et \u00e0 fournir des recommandations concr\u00e8tes pour prot\u00e9ger les syst\u00e8mes critiques.', 
    'Onsite', 
    '4 months', 
    50000, 
    '2025-06-20', 
    1),

(1, 
    'Cryptographic Systems (Encryption Techniques and Practices)', 
    E'Syst\u00e8mes Cryptographiques (Techniques et Pratiques de Chiffrement)', 
    'Delve into the intricate world of cryptographic systems with this advanced program. Participants will master symmetric and asymmetric encryption, hashing algorithms, and blockchain cryptography. The course covers quantum-resistant encryption techniques, secure communication protocols, and real-world applications in data protection, enabling participants to engineer future-ready, secure systems.', 
    E'Plongez dans le monde complexe des syst\u00e8mes cryptographiques avec ce programme avanc\u00e9. Les participants ma\u00eetriseront le chiffrement sym\u00e9trique et asym\u00e9trique, les algorithmes de hachage et la cryptographie blockchain. Le cours couvre les techniques de chiffrement r\u00e9sistantes aux ordinateurs quantiques, les protocoles de communication s\u00e9curis\u00e9s et les applications concr\u00e8tes de protection des donn\u00e9es, permettant aux participants de concevoir des syst\u00e8mes s\u00e9curis\u00e9s pr\u00eats pour l\'avenir.', 
    'Online', 
    '5 months', 
    50000, 
    '2025-06-15', 
    2),

(1, 
    'Wireless Transmission Security', 
    E'S\u00e9curit\u00e9 des Transmissions Sans Fil', 
    'This specialized program focuses on fortifying wireless communication systems against modern threats. Participants will explore advanced wireless protocols, intrusion detection systems, and secure network design techniques. Learn to mitigate risks like eavesdropping, data breaches, and unauthorized access while implementing state-of-the-art encryption for Wi-Fi, Bluetooth, and IoT networks.', 
    E'Ce programme sp\u00e9cialis\u00e9 se concentre sur le renforcement des syst\u00e8mes de communication sans fil contre les menaces modernes. Les participants exploreront des protocoles sans fil avanc\u00e9s, des syst\u00e8mes de d\u00e9tection d\'intrusion et des techniques de conception de r\u00e9seaux s\u00e9curis\u00e9s. Apprenez \u00e0 att\u00e9nuer les risques tels que l\'\u00e9coute clandestine, les violations de donn\u00e9es et les acc\u00e8s non autoris\u00e9s tout en mettant en \u0153uvre un chiffrement de pointe pour les r\u00e9seaux Wi-Fi, Bluetooth et IoT.', 
    'Onsite', 
    '3 months', 
    50000, 
    '2025-06-05', 
    3),

(1, 
    'Blockchain and Web3 Integration (Advanced)', 
    E'Int\u00e9gration Blockchain et Web3 (Avanc\u00e9)', 
    'Elevate your blockchain expertise with this advanced program, exploring next-generation Web3 innovations. Participants will design decentralized ecosystems, implement advanced smart contracts, and build scalable dApps with seamless tokenization. The course emphasizes emerging trends in decentralized finance (DeFi), secure identity solutions, and multi-chain interoperability, equipping participants to redefine digital ecosystems.', 
    E'Am\u00e9liorez votre expertise blockchain avec ce programme avanc\u00e9 explorant les innovations Web3 de nouvelle g\u00e9n\u00e9ration. Les participants concevront des \u00e9cosyst\u00e8mes d\u00e9centralis\u00e9s, mettront en \u0153uvre des contrats intelligents avanc\u00e9s et construiront des dApps \u00e9volutifs avec une tokenisation transparente. Le cours met l\'accent sur les tendances \u00e9mergentes de la finance d\u00e9centralis\u00e9e (DeFi), les solutions d\'identit\u00e9 s\u00e9curis\u00e9es et l\'interop\u00e9rabilit\u00e9 multi-cha\u00eenes, permettant aux participants de red\u00e9finir les \u00e9cosyst\u00e8mes num\u00e9riques.', 
    'Online', 
    '6 months', 
    50000, 
    '2025-07-01', 
    4),

(1, 
    'Digital Electronic and IoT Development', 
    E'D\u00e9veloppement \u00c9lectronique Num\u00e9rique et IoT', 
    'This program combines IoT and electronics engineering to enable participants to create smart, connected devices for the future. Participants will explore IoT protocols, sensor programming, and secure integration with cloud platforms. With a focus on smart home automation, wearable tech, and industrial IoT applications, this course prepares participants to lead in the development of cutting edge smart technologies.', 
    E'Ce programme combine l\'IoT et l\'ing\u00e9nierie \u00e9lectronique pour permettre aux participants de cr\u00e9er des appareils intelligents et connect\u00e9s pour l\'avenir. Les participants exploreront les protocoles IoT, la programmation de capteurs et l\'int\u00e9gration s\u00e9curis\u00e9e avec les plateformes cloud. En mettant l\'accent sur l\'automatisation des maisons intelligentes, les technologies portables et les applications industrielles de l\'IoT, ce cours pr\u00e9pare les participants \u00e0 diriger le d\u00e9veloppement de technologies intelligentes de pointe.', 
    'Onsite', 
    '5 months', 
    50000, 
    '2025-07-25', 
    5),

(1, 
    'Drone Development and Maintenance', 
    E'D\u00e9veloppement et Maintenance de Drones', 
    'Immerse yourself in the revolutionary field of drone technology with this comprehensive program. Participants will master drone hardware assembly, GPS-based navigation systems, and real-time obstacle avoidance algorithms. Learn advanced troubleshooting techniques and explore innovative use cases such as autonomous delivery, disaster response, and precision agriculture, positioning yourself at the forefront of drone innovation.', 
    E'Plongez dans le domaine r\u00e9volutionnaire de la technologie des drones avec ce programme complet. Les participants ma\u00eetriseront l\'assemblage du mat\u00e9riel des drones, les syst\u00e8mes de navigation bas\u00e9s sur le GPS et les algorithmes d\'\u00e9vitement d\'obstacles en temps r\u00e9el. Apprenez des techniques avanc\u00e9es de d\u00e9pannage et explorez des cas d\'utilisation innovants tels que la livraison autonome, la r\u00e9ponse aux catastrophes et l\'agriculture de pr\u00e9cision, vous pla\u00e7ant \u00e0 l\'avant-garde de l\'innovation en mati\u00e8re de drones.', 
    'Onsite', 
    '4 months', 
    50000, 
    '2025-07-20', 
    3),

(1, 
    'Web Development (Front-End and Back-End Technologies)', 
    E'D\u00e9veloppement Web (Technologies Front-End et Back-End)', 
    'Build modern web applications that blend aesthetic appeal with powerful functionality. This program covers front-end frameworks, back-end development, and deployment strategies, ensuring you are ready to create dynamic and secure web solutions.', 
    E'Cr\u00e9ez des applications Web modernes qui allient attrait esth\u00e9tique et fonctionnalit\u00e9s puissantes. Ce programme couvre les frameworks front-end, le d\u00e9veloppement back-end et les strat\u00e9gies de d\u00e9ploiement, vous assurant d\'\u00eatre pr\u00eat \u00e0 cr\u00e9er des solutions Web dynamiques et s\u00e9curis\u00e9es.', 
    'Onsite', 
    '2 months', 
    50000, 
    '2025-07-20', 
    4),
(1, 
    'Mobile App Development (iOS, Android)', 
    E'D\u00e9veloppement d\'applications mobiles (iOS, Android)', 
    'Master the art of mobile app development in this comprehensive program designed for both iOS and Android platforms. Participants will learn to develop high-performance apps using Swift, Kotlin, and cross-platform frameworks like Flutter and React Native. Gain expertise in API integration, UI/UX optimization, and advanced debugging techniques to create robust and scalable mobile solutions for modern users.', 
    E'Ma\u00eetrisez l\'art du d\u00e9veloppement d\'applications mobiles dans ce programme complet con\u00e7u pour les plateformes iOS et Android. Les participants apprendront \u00e0 d\u00e9velopper des applications hautes performances avec Swift, Kotlin, et des frameworks multiplateformes tels que Flutter et React Native. Acqu\u00e9rez une expertise en int\u00e9gration d\'API, optimisation UI/UX, et techniques de d\u00e9bogage avanc\u00e9es pour cr\u00e9er des solutions mobiles robustes et \u00e9volutives pour les utilisateurs modernes.', 
    'Onsite', 
    '4 months', 
    50000, 
    '2025-06-05', 
    5),
(1, 
    'AI Development, Big Data, and Data Analysis', 
    E'D\u00e9veloppement d\'IA, Big Data et analyse de donn\u00e9es', 
    'This cutting-edge program combines artificial intelligence, big data, and data analysis into a comprehensive learning journey. Master advanced machine learning models, natural language processing (NLP), and computer vision techniques. Explore tools like Hadoop, Spark, and Tableau to process and visualize massive datasets, providing actionable insights for decision-making across industries.',E'Ce programme de pointe combine l\'intelligence artificielle, le big data et l\'analyse de donn\u00e9es dans un parcours d\'apprentissage complet. Ma\u00eetrisez des mod\u00e8les avanc\u00e9s d\'apprentissage automatique, le traitement du langage naturel (NLP), et les techniques de vision par ordinateur. Explorez des outils tels que Hadoop, Spark, et Tableau pour traiter et visualiser des ensembles de donn\u00e9es massifs, fournissant des informations exploitables pour la prise de d\u00e9cision dans divers secteurs.', 
    'Online', 
    '6 months', 
    50000, 
    '2025-07-10', 
    1),
(1, 
    'Desktop Application Development', 
    E'D\u00e9veloppement d\'applications de bureau', 
    'This hands-on program is designed for participants to create powerful and efficient desktop applications for Windows and macOS. Learn to utilize frameworks like Electron and Qt, integrate advanced UI/UX principles, and implement secure database interactions. With a focus on cross-platform development, participants will build scalable, high-performance applications tailored to user needs.', 
    E'Ce programme pratique est con\u00e7u pour permettre aux participants de cr\u00e9er des applications de bureau puissantes et efficaces pour Windows et macOS. Apprenez \u00e0 utiliser des frameworks comme Electron et Qt, int\u00e9grer des principes avanc\u00e9s de UI/UX, et mettre en \u0153uvre des interactions s\u00e9curis\u00e9es avec les bases de donn\u00e9es. Avec un accent sur le d\u00e9veloppement multiplateforme, les participants construiront des applications \u00e9volutives et performantes adapt\u00e9es aux besoins des utilisateurs.', 
    'Onsite', 
    '5 months', 
    50000, 
    '2025-07-15', 
    2)
;

-- Step 3: Insert InternshipApplication Data
INSERT INTO InternshipApplications (internshipPosition_id, intern_id, level_of_education)
VALUES 
(1, 1, 'Bachelor in Software Engineering'),
(2, 2, 'Bachelor in Data Science'),
(3, 3, 'Master in Mechanical Engineering'),
(4, 4, 'Bachelor in Biomedical Engineering'),
(5, 5, 'Bachelor in Business Administration');

-- Step 4: Insert Task Data
INSERT INTO Tasks (assigned_by, internshipPosition_id, description, due_date, status) 
VALUES 
(1, 1, 'Develop web app', '2025-04-30', 'Pending'),
(2, 2, 'Analyze data for the project', '2025-04-15', 'Pending'),
(3, 3, 'Work on robotics design', '2025-05-01', 'Pending'),
(4, 4, 'Assist in medical device testing', '2025-05-20', 'Pending'),
(5, 5, 'Create business strategy plan', '2025-06-15', 'Pending');

-- Assign Task to Intern
INSERT INTO AssignedTasks (task_id, assigned_to, completion_rate)
VALUES 
(1, 1, 0),
(2, 2, 0),
(3, 3, 0),
(4, 4, 0),
(5, 5, 0);

-- Step 5: Insert Attendance Data
INSERT INTO Attendances (intern_id, internshipPosition_id, status)
VALUES 
(1, 1, 'Present'),
(2, 2, 'Present'),
(3, 3, 'Absent'),
(4, 4, 'Late'),
(5, 5, 'Present');

-- Step 6: Insert PaymentHistory Data
INSERT INTO PaymentHistorys (ref, internshipPosition_id, intern_id, amount, payedDate) 
VALUES 
('PAY12345', 1, 1, 50000, '2025-03-10'),
('PAY12346', 2, 2, 55000, '2025-03-15'),
('PAY12347', 3, 3, 60000, '2025-04-01'),
('PAY12348', 4, 4, 65000, '2025-05-01'),
('PAY12349', 5, 5, 40000, '2025-06-01');

-- Step 7: Insert Period Data
INSERT INTO Periods (start_time, end_time) 
VALUES 
('09:00', '12:00'),
('13:00', '16:00'),
('09:00', '12:00'),
('14:00', '17:00'),
('08:00', '11:00');

-- Insert Timetable Data
INSERT INTO Timetables (internshipPosition_id, period_id, supervisor_id, activity_name)
VALUES 
(1, 1, 1, 'Morning Session - Coding Practice'),
(2, 2, 2, 'Afternoon Session - Data Analysis'),
(3, 3, 3, 'Morning Session - Robotics Design'),
(4, 4, 4, 'Afternoon Session - Medical Device Testing'),
(5, 5, 5, 'Morning Session - Business Strategy Planning');

-- Step 8: Insert Cleaning Group and Roster Data
INSERT INTO CleaningGroups (group_id, intern_id) 
VALUES 
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

-- Insert Cleaning Roster Data
INSERT INTO CleaningRosters (group_id, schedule_date, task_description) 
VALUES 
(1, '2025-03-10', 'Clean up the office space.'),
(2, '2025-03-11', 'Clean up the conference room.'),
(3, '2025-03-12', 'Clean up the kitchen area.'),
(4, '2025-03-13', 'Clean up the hallway.'),
(5, '2025-03-14', 'Clean up the reception area.');

-- Step 9: Insert Equipment Data
INSERT INTO Equipments (name, quantity, description, image_url) 
VALUES 
('Laptop', 10, 'Dell XPS 13', 'https://example.com/laptop-image.jpg'),
('Projector', 5, 'Epson 4K Projector', 'https://example.com/projector-image.jpg'),
('Headphones', 20, 'Sony Noise-Cancelling', 'https://example.com/headphones-image.jpg'),
('Camera', 5, 'Canon EOS', 'https://example.com/camera-image.jpg'),
('Whiteboard', 10, 'Interactive Whiteboard', 'https://example.com/whiteboard-image.jpg');

-- Insert Equipment Borrowed Data
INSERT INTO EquipmentsBorrowed (equipment_id, borrowed_by, borrowed_date, return_date, status)
VALUES 
(1, 1, '2025-03-01', '2025-03-10', 'Borrowed'),
(2, 2, '2025-03-05', '2025-03-15', 'Borrowed'),
(3, 3, '2025-03-06', '2025-03-16', 'Borrowed'),
(4, 4, '2025-03-07', '2025-03-17', 'Borrowed'),
(5, 5, '2025-03-08', '2025-03-18', 'Borrowed');

-- Step 10: Insert Document Data
INSERT INTO Documents (user_id, file_path, description) 
VALUES 
(1, '/documents/internship-agreement1.pdf', 'Internship Agreement for Emily'),
(2, '/documents/internship-agreement2.pdf', 'Internship Agreement for Michael'),
(3, '/documents/internship-agreement3.pdf', 'Internship Agreement for Sarah'),
(4, '/documents/internship-agreement4.pdf', 'Internship Agreement for John'),
(5, '/documents/internship-agreement5.pdf', 'Internship Agreement for Olivia');

-- Step 11: Insert Certificate Data
INSERT INTO Certificates (intern_id, internshipPosition_id, template_path)
VALUES 
(1, 1, '/certificates/internship-certificate1.pdf'),
(2, 2, '/certificates/internship-certificate2.pdf'),
(3, 3, '/certificates/internship-certificate3.pdf'),
(4, 4, '/certificates/internship-certificate4.pdf'),
(5, 5, '/certificates/internship-certificate5.pdf');

-- Step 12: Insert Quiz and Questions Data
INSERT INTO Quizes (task_id, uploaded_by, title)
VALUES 
(1, 1, 'Web Development Quiz'),
(2, 2, 'Data Science Quiz'),
(3, 3, 'Robotics Quiz'),
(4, 4, 'Biomedical Engineering Quiz'),
(5, 5, 'Business Strategy Quiz');

-- Insert Questions for Quiz
INSERT INTO Questions (quiz_id, question, answer, type, option1, option2, option3) 
VALUES 
(1, 'What is HTML?', 'A markup language', 'mcq', 'Programming language', 'Markup language', 'Database language'),
(2, 'What is Python?', 'A programming language', 'mcq', 'Web framework', 'Programming language', 'Operating system'),
(3, 'What is robotics?', 'The study of robots', 'mcq', 'Physics', 'Robotics', 'Mathematics'),
(4, 'What is biomedical engineering?', 'Application of engineering principles to medicine', 'mcq', 'Biomedical', 'Engineering', 'Physics'),
(5, 'What is business strategy?', 'Plan for achieving business objectives', 'mcq', 'Financial planning', 'Business strategy', 'Marketing');

-- Step 13: Insert Project Data
INSERT INTO Projects (
    internshipposition_id, 
    supervisor_id, 
    project_url, 
    project_name_en, 
    project_name_fr, 
    description_en, 
    description_fr, 
    status
) VALUES 
(1, 1, NULL, 
    'AI-Enhanced Visual Storytelling Platform', 
    'Plateforme de narration visuelle am\u00e9lior\u00e9e par l IA', 
    'Revolutionize content creation with an AI-powered platform that allows users to generate interactive visual stories. Utilizing advanced machine learning algorithms, automated video editing, and intelligent enhancements, this platform empowers small businesses and individual creators to produce impactful multimedia content effortlessly.', 
    'R\u00e9volutionnez la cr\u00e9ation de contenu avec une plateforme aliment\u00e9e par l IA permettant aux utilisateurs de g\u00e9n\u00e9rer des histoires visuelles interactives. En utilisant des algorithmes avanc\u00e9s d apprentissage automatique, un montage vid\u00e9o automatis\u00e9 et des am\u00e9liorations intelligentes, cette plateforme permet aux petites entreprises et aux cr\u00e9ateurs individuels de produire facilement du contenu multim\u00e9dia percutant.', 
    'Pending'),
(1, 1, NULL, 
    'Community Heritage Preservation', 
    'Pr\u00e9servation du patrimoine communautaire', 
    'Collaborate with local communities to document and digitize cultural practices using cutting-edge photography and videography. This project aims to create a rich digital archive, promoting cultural appreciation and preserving endangered traditions through advanced digital asset management systems.', 
    'Collaborez avec les communaut\u00e9s locales pour documenter et num\u00e9riser les pratiques culturelles en utilisant la photographie et la vid\u00e9ographie de pointe. Ce projet vise \u00e0 cr\u00e9er une archive num\u00e9rique riche, promouvant l appr\u00e9ciation culturelle et pr\u00e9servant les traditions menac\u00e9es gr\u00e2ce \u00e0 des syst\u00e8mes avanc\u00e9s de gestion des actifs num\u00e9riques.', 
    'Pending'),
(1, 1, NULL, 
    'Interactive Educational Video Series', 
    'S\u00e9rie de vid\u00e9os \u00e9ducatives interactives', 
    'Develop an engaging and accessible video series for underserved communities, focusing on STEM and the arts. Incorporating interactive elements, data-driven adaptive learning techniques, and narrative-based storytelling, this project bridges educational gaps with creativity and innovation.', 
    'D\u00e9veloppez une s\u00e9rie de vid\u00e9os engageantes et accessibles pour les communaut\u00e9s mal desservies, ax\u00e9e sur les STEM et les arts. En int\u00e9grant des \u00e9l\u00e9ments interactifs, des techniques d apprentissage adaptatives bas\u00e9es sur les donn\u00e9es et une narration ax\u00e9e sur les histoires, ce projet comble les lacunes \u00e9ducatives avec cr\u00e9ativit\u00e9 et innovation.', 
    'Pending'),
(1, 1, NULL, 
    'Global Language Learning Platform', 
    E'Plateforme mondiale d\'apprentissage des langues', 
    'Develop a platform where users can learn languages through culturally relevant stories and multimedia.', 
    'D\u00e9veloppez une plateforme o\u00f9 les utilisateurs peuvent apprendre des langues gr\u00e2ce \u00e0 des histoires culturellement pertinentes et \u00e0 des contenus multim\u00e9dias.', 
    'Pending'),
(1, 1, NULL, 
    'AI-Driven Content Ideation Tool', 
    'Outil de g\u00e9n\u00e9ration d id\u00e9es de contenu aliment\u00e9 par l IA', 
    'Build a tool that uses AI to suggest content ideas based on trends and user interests.', 
    'Cr\u00e9ez un outil qui utilise l IA pour sugg\u00e9rer des id\u00e9es de contenu bas\u00e9es sur les tendances et les int\u00e9r\u00eats des utilisateurs.', 
    'Pending'),
(1, 1, NULL, 
    'Digital Sustainability Hub', 
    'Centre num\u00e9rique de durabilit\u00e9', 
    'Create a platform for sharing sustainability-related content, including blogs, videos, and tutorials.', 
    'Cr\u00e9ez une plateforme pour partager du contenu li\u00e9 \u00e0 la durabilit\u00e9, y compris des blogs, des vid\u00e9os et des tutoriels.', 
    'Pending');

