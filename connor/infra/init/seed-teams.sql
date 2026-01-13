INSERT INTO teams (team_members, team_leader, hours) VALUES
(
  '[{"id": 1, "name": "Sarah Chen", "role": "Senior Developer"},
    {"id": 2, "name": "Mike Johnson", "role": "Developer"},
    {"id": 3, "name": "Emma Davis", "role": "QA Engineer"}]'::JSONB,
  'Sarah Chen',
  160
),
(
  '[{"id": 4, "name": "James Wilson", "role": "Tech Lead"},
    {"id": 5, "name": "Lisa Anderson", "role": "Backend Developer"},
    {"id": 6, "name": "Tom Brown", "role": "Frontend Developer"},
    {"id": 7, "name": "Amy White", "role": "DevOps Engineer"}]'::JSONB,
  'James Wilson',
  200
),
(
  '[{"id": 8, "name": "David Lee", "role": "Product Manager"},
    {"id": 9, "name": "Rachel Green", "role": "UX Designer"},
    {"id": 10, "name": "Chris Martinez", "role": "UI Designer"}]'::JSONB,
  'David Lee',
  120
),
(
  '[{"id": 11, "name": "Jennifer Taylor", "role": "Data Lead"},
    {"id": 12, "name": "Kevin Moore", "role": "Data Analyst"},
    {"id": 13, "name": "Michelle Garcia", "role": "Data Scientist"},
    {"id": 14, "name": "Brian Clark", "role": "ML Engineer"}]'::JSONB,
  'Jennifer Taylor',
  180
),
(
  '[{"id": 15, "name": "Jessica Rodriguez", "role": "Engineering Manager"},
    {"id": 16, "name": "Daniel Kim", "role": "Senior Engineer"},
    {"id": 17, "name": "Laura Thompson", "role": "Engineer"}]'::JSONB,
  'Jessica Rodriguez',
  150
),
(
  '[{"id": 18, "name": "Robert Palmer", "role": "Security Lead"},
    {"id": 19, "name": "Sophie Turner", "role": "Security Engineer"},
    {"id": 20, "name": "Alex Morgan", "role": "Penetration Tester"}]'::JSONB,
  'Robert Palmer',
  140
),
(
  '[{"id": 21, "name": "Maria Santos", "role": "Mobile Lead"},
    {"id": 22, "name": "John Davies", "role": "iOS Developer"},
    {"id": 23, "name": "Nina Patel", "role": "Android Developer"},
    {"id": 24, "name": "Carlos Ruiz", "role": "Mobile QA"}]'::JSONB,
  'Maria Santos',
  170
),
(
  '[{"id": 25, "name": "Andrew Scott", "role": "Cloud Architect"},
    {"id": 26, "name": "Emily Watson", "role": "Cloud Engineer"},
    {"id": 27, "name": "Marcus Johnson", "role": "SRE"}]'::JSONB,
  'Andrew Scott',
  190
),
(
  '[{"id": 28, "name": "Victoria Chang", "role": "Frontend Lead"},
    {"id": 29, "name": "Peter Griffin", "role": "React Developer"},
    {"id": 30, "name": "Olivia Bennett", "role": "Vue Developer"},
    {"id": 31, "name": "Lucas Martinez", "role": "Frontend QA"}]'::JSONB,
  'Victoria Chang',
  165
),
(
  '[{"id": 32, "name": "William Harris", "role": "Backend Lead"},
    {"id": 33, "name": "Grace Thompson", "role": "Java Developer"},
    {"id": 34, "name": "Ryan Cooper", "role": "Python Developer"}]'::JSONB,
  'William Harris',
  155
),
(
  '[{"id": 35, "name": "Amanda Foster", "role": "QA Manager"},
    {"id": 36, "name": "Jason Lee", "role": "Test Automation Engineer"},
    {"id": 37, "name": "Hannah Brooks", "role": "Manual QA"},
    {"id": 38, "name": "Tyler Reed", "role": "Performance Tester"}]'::JSONB,
  'Amanda Foster',
  175
),
(
  '[{"id": 39, "name": "Christopher Young", "role": "Infrastructure Lead"},
    {"id": 40, "name": "Sophia Adams", "role": "Systems Engineer"},
    {"id": 41, "name": "Nathan Hill", "role": "Network Engineer"}]'::JSONB,
  'Christopher Young',
  145
),
(
  '[{"id": 42, "name": "Isabella Wright", "role": "AI Research Lead"},
    {"id": 43, "name": "Ethan Mitchell", "role": "ML Researcher"},
    {"id": 44, "name": "Mia Campbell", "role": "NLP Engineer"},
    {"id": 45, "name": "Noah Parker", "role": "Computer Vision Engineer"}]'::JSONB,
  'Isabella Wright',
  195
),
(
  '[{"id": 46, "name": "Benjamin Turner", "role": "Platform Lead"},
    {"id": 47, "name": "Ava Collins", "role": "Platform Engineer"},
    {"id": 48, "name": "Jacob Stewart", "role": "Tools Developer"}]'::JSONB,
  'Benjamin Turner',
  160
),
(
  '[{"id": 49, "name": "Madison Phillips", "role": "Analytics Lead"},
    {"id": 50, "name": "Logan Evans", "role": "Business Analyst"},
    {"id": 51, "name": "Chloe Morris", "role": "Data Analyst"},
    {"id": 52, "name": "Mason Rogers", "role": "BI Developer"}]'::JSONB,
  'Madison Phillips',
  185
),
(
  '[{"id": 53, "name": "Alexander Rivera", "role": "API Lead"},
    {"id": 54, "name": "Zoe Murphy", "role": "API Developer"},
    {"id": 55, "name": "Jackson Cook", "role": "Integration Engineer"}]'::JSONB,
  'Alexander Rivera',
  150
),
(
  '[{"id": 56, "name": "Lily Richardson", "role": "Design Lead"},
    {"id": 57, "name": "Sebastian Bell", "role": "Product Designer"},
    {"id": 58, "name": "Aria Howard", "role": "Interaction Designer"},
    {"id": 59, "name": "Henry Ward", "role": "Design Systems Engineer"}]'::JSONB,
  'Lily Richardson',
  130
),
(
  '[{"id": 60, "name": "Samuel Torres", "role": "Database Lead"},
    {"id": 61, "name": "Ella Peterson", "role": "DBA"},
    {"id": 62, "name": "Owen Gray", "role": "Database Developer"}]'::JSONB,
  'Samuel Torres',
  140
),
(
  '[{"id": 63, "name": "Scarlett Hayes", "role": "Content Platform Lead"},
    {"id": 64, "name": "Jack Ramirez", "role": "CMS Developer"},
    {"id": 65, "name": "Layla James", "role": "Content Engineer"},
    {"id": 66, "name": "Leo Watson", "role": "SEO Engineer"}]'::JSONB,
  'Scarlett Hayes',
  170
),
(
  '[{"id": 67, "name": "Harper Brooks", "role": "E-commerce Lead"},
    {"id": 68, "name": "Elijah Kelly", "role": "Payment Systems Engineer"},
    {"id": 69, "name": "Abigail Sanders", "role": "Shopping Cart Developer"}]'::JSONB,
  'Harper Brooks',
  160
),
(
  '[{"id": 70, "name": "Luke Price", "role": "Support Engineering Lead"},
    {"id": 71, "name": "Evelyn Bennett", "role": "Support Engineer"},
    {"id": 72, "name": "Gabriel Wood", "role": "Technical Support"},
    {"id": 73, "name": "Avery Barnes", "role": "Customer Success Engineer"}]'::JSONB,
  'Luke Price',
  180
),
(
  '[{"id": 74, "name": "Charlotte Ross", "role": "Compliance Lead"},
    {"id": 75, "name": "Carter Henderson", "role": "Compliance Engineer"},
    {"id": 76, "name": "Amelia Coleman", "role": "Security Compliance Analyst"}]'::JSONB,
  'Charlotte Ross',
  125
),
(
  '[{"id": 77, "name": "Wyatt Jenkins", "role": "Observability Lead"},
    {"id": 78, "name": "Sofia Perry", "role": "Monitoring Engineer"},
    {"id": 79, "name": "Grayson Powell", "role": "Logging Engineer"},
    {"id": 80, "name": "Penelope Long", "role": "APM Specialist"}]'::JSONB,
  'Wyatt Jenkins',
  175
),
(
  '[{"id": 81, "name": "Julian Patterson", "role": "Release Engineering Lead"},
    {"id": 82, "name": "Nora Hughes", "role": "Release Engineer"},
    {"id": 83, "name": "Levi Flores", "role": "Build Engineer"}]'::JSONB,
  'Julian Patterson',
  155
),
(
  '[{"id": 84, "name": "Aurora Washington", "role": "Architecture Lead"},
    {"id": 85, "name": "Adrian Butler", "role": "Solutions Architect"},
    {"id": 86, "name": "Violet Simmons", "role": "Enterprise Architect"},
    {"id": 87, "name": "Jaxon Foster", "role": "Technical Architect"}]'::JSONB,
  'Aurora Washington',
  165
);
