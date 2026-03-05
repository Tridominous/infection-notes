import fs from 'fs';

const dir = 'src/content/lectures/';

// Helper: replace an ASCII code block with a mermaid block
function replaceBlock(content, asciiSnippet, mermaidCode) {
  const idx = content.indexOf(asciiSnippet);
  if (idx === -1) return { content, found: false };
  content = content.replace(asciiSnippet, mermaidCode);
  return { content, found: true };
}

function process(file, replacements) {
  const filepath = dir + file;
  let content = fs.readFileSync(filepath, 'utf8');
  let count = 0;
  for (const [ascii, mermaid] of replacements) {
    const result = replaceBlock(content, ascii, mermaid);
    content = result.content;
    if (result.found) count++;
  }
  fs.writeFileSync(filepath, content);
  console.log(`${file}: ${count} replacements`);
}

// ===== LECTURE 1 =====
process('1-intro.md', [
  // Patient Sample Journey
  [`\`\`\`
PRE-ANALYTICAL          ANALYTICAL              POST-ANALYTICAL
    STAGE         -->       STAGE         -->       STAGE

Sample collection      Testing/processing      Result interpretation
Transport to lab       Culture/microscopy      Reporting to clinician
Reception/booking      Identification (ID)     Treatment decisions
                       AST testing             Archiving/storage
\`\`\``,
`\`\`\`mermaid
flowchart LR
    A["PRE-ANALYTICAL<br/>Sample collection<br/>Transport to lab<br/>Reception/booking"] --> B["ANALYTICAL<br/>Testing/processing<br/>Culture/microscopy<br/>Identification & AST"]
    B --> C["POST-ANALYTICAL<br/>Result interpretation<br/>Reporting to clinician<br/>Treatment decisions<br/>Archiving/storage"]
\`\`\``],

  // Identification Flowchart
  [`\`\`\`
             CLINICAL SAMPLE
                   |
            Gram Stain / Microscopy
                   |
         \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
    GRAM POSITIVE           GRAM NEGATIVE
    (Purple cocci/rods)     (Pink/red rods)
         |                       |
    Catalase Test           Oxidase Test
    \u250c\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2510           \u250c\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2510
  (+ve)    (-ve)        (+ve)      (-ve)
Staphylococci Streptococci  |    Enterobacteriaceae
    |           |        Pseudomonas    |
Coagulase   Haemolysis   Neisseria   API 20E
  Test      Pattern     Campylobacter    |
 \u250c\u2500\u2500\u2534\u2500\u2500\u2510   \u250c\u2500\u2500\u2534\u2500\u2500\u2510                  Database ID
(+)  (-)  \u03b1  \u03b2  \u03b3                  (e.g. E. coli,
S.aureus CoNS |   |                 Klebsiella)
             |  Lancefield
        Optochin Grouping
        \u250c\u2500\u2500\u2534\u2500\u2500\u2510  (A,B,C,D,F,G)
       S    R
    S.pneum  Other \u03b1-strep
\`\`\``,
`\`\`\`mermaid
flowchart TD
    A["CLINICAL SAMPLE"] --> B["Gram Stain / Microscopy"]
    B --> C["GRAM POSITIVE<br/>(Purple cocci/rods)"]
    B --> D["GRAM NEGATIVE<br/>(Pink/red rods)"]
    C --> E["Catalase Test"]
    D --> F["Oxidase Test"]
    E --> G["(+ve) Staphylococci"]
    E --> H["(-ve) Streptococci"]
    F --> I["(+ve) Pseudomonas<br/>Neisseria<br/>Campylobacter"]
    F --> J["(-ve) Enterobacteriaceae"]
    G --> K["Coagulase Test"]
    H --> L["Haemolysis Pattern"]
    J --> M["API 20E - Database ID<br/>(E. coli, Klebsiella)"]
    K --> N["(+) S. aureus"]
    K --> O["(-) CoNS"]
    L --> P["alpha"]
    L --> Q["beta"]
    L --> R["gamma"]
    P --> S["Optochin"]
    Q --> T["Lancefield Grouping<br/>(A,B,C,D,F,G)"]
    S --> U["S = S. pneumoniae"]
    S --> V["R = Other alpha-strep"]
\`\`\``],

  // Bacteriology mind map
  [`\`\`\`
                    BACTERIOLOGY
                         |
         \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
       Cocci   Bacilli  Spiral  Miscellaneous
       /   \\    / | \\      |         |
    G+ve  G-ve G+ve AFB G-ve  Treponema  Mycoplasma
     |      |    |    |    |   pallidum   Chlamydia
  Staph  Neisseria | Myco- E.coli        Coxiella
  Strep        |   bact.  Klebsiella     Rickettsia
            Coryne- |     Salmonella
            bacterium |   Shigella
            Bacillus  TB  Yersinia
            Clostridium   Helicobacter
                          Vibrio
                          Haemophilus
\`\`\``,
`\`\`\`mermaid
flowchart TD
    A["BACTERIOLOGY"] --> B["Cocci"]
    A --> C["Bacilli"]
    A --> D["Spiral"]
    A --> E["Miscellaneous"]
    B --> F["G+ve: Staph, Strep"]
    B --> G["G-ve: Neisseria"]
    C --> H["G+ve: Corynebacterium<br/>Bacillus, Clostridium"]
    C --> I["AFB: Mycobacterium, TB"]
    C --> J["G-ve: E.coli, Klebsiella<br/>Salmonella, Shigella<br/>Yersinia, Helicobacter<br/>Vibrio, Haemophilus"]
    D --> K["Treponema pallidum"]
    E --> L["Mycoplasma, Chlamydia<br/>Coxiella, Rickettsia"]
\`\`\``],
]);

// ===== LECTURE 2 =====
process('2-skin-infections.md', [
  [`\`\`\`
WOUND SWAB --> Inoculate agar (streak for single colonies)
  |
  +-------+--------+---------+---------+-------+
  v       v        v         v         v
Blood   Blood+Mz  MacConkey  Sabouraud MSA
(CO2)   (anaerob)            (if need) (MRSA)
  |
Gram Stain + Confirmatory Tests
\`\`\``,
`\`\`\`mermaid
flowchart TD
    A["WOUND SWAB"] --> B["Inoculate agar<br/>(streak for single colonies)"]
    B --> C["Blood Agar<br/>(CO2)"]
    B --> D["Blood Agar + Mz<br/>(anaerobic)"]
    B --> E["MacConkey"]
    B --> F["Sabouraud<br/>(if needed)"]
    B --> G["MSA<br/>(MRSA screen)"]
    C --> H["Gram Stain +<br/>Confirmatory Tests"]
\`\`\``],
]);

// ===== LECTURE 3 =====
process('3-respiratory-infections.md', [
  // Sputum processing
  [`\`\`\`
SPUTUM --> Sputasol --> Liquefy --> Class II Cabinet
  |
  +------------------+------------------+
  v                  v                  v
Chocolate Agar     Blood Agar         MacConkey
+ Bacitracin       + Optochin         (aerobic)
  |                  |
5-10% CO2          5-10% CO2
37C, 48hrs         37C, 48hrs
  |                  |
H. influenzae?     S. pneumoniae?     GN rods?
\`\`\``,
`\`\`\`mermaid
flowchart TD
    A["SPUTUM"] --> B["Sputasol - Liquefy<br/>Class II Cabinet"]
    B --> C["Chocolate Agar<br/>+ Bacitracin"]
    B --> D["Blood Agar<br/>+ Optochin"]
    B --> E["MacConkey<br/>(aerobic)"]
    C --> F["5-10% CO2<br/>37C, 48hrs"]
    D --> G["5-10% CO2<br/>37C, 48hrs"]
    F --> H["H. influenzae?"]
    G --> I["S. pneumoniae?"]
    E --> J["GN rods?"]
\`\`\``],

  // Respiratory ID flowchart
  [`\`\`\`
RESPIRATORY SAMPLE
     |
Gram Stain + Culture
     |
  +----------+----------+
  |          |          |
GP          GN       ACID-FAST
  |          |          |
Catalase   Oxidase    ZN/Auramine
  |          |          |
Cat+ Cat-  Ox+  Ox-  M. tuberculosis
Staph Strep  |    |
  |    |   Pseud  Entero-    H. influenzae
Coag Haem  Neiss  bacteriaceae  (choc agar, X+V)
  |    |   Legionella*
S.a  CoNS
     |   |
   Alpha Beta
     |    |
  Optochin Lancefield
     |
  S   R
S.pneum Other
\`\`\``,
`\`\`\`mermaid
flowchart TD
    A["RESPIRATORY SAMPLE"] --> B["Gram Stain + Culture"]
    B --> C["GP"]
    B --> D["GN"]
    B --> E["ACID-FAST"]
    C --> F["Catalase"]
    D --> G["Oxidase"]
    E --> H["ZN/Auramine<br/>M. tuberculosis"]
    F --> I["Cat+ Staph"]
    F --> J["Cat- Strep"]
    G --> K["Ox+ Pseudomonas<br/>Neisseria, Legionella"]
    G --> L["Ox- Enterobacteriaceae<br/>H. influenzae"]
    I --> M["Coagulase"]
    J --> N["Haemolysis"]
    M --> O["+ S. aureus"]
    M --> P["- CoNS"]
    N --> Q["Alpha - Optochin"]
    N --> R["Beta - Lancefield"]
    Q --> S["S = S. pneumoniae"]
    Q --> T["R = Other"]
\`\`\``],
]);

// ===== LECTURE 4 =====
process('4-gastrointestinal.md', [
  // Cholera detection
  [`\`\`\`
FAECAL SAMPLE
     |
  +--+--+
  v     v
APW    TCBS agar
(enrichment)  (selective)
  |     |
  v     v
Subculture   Bright yellow colonies?
  |     |
  +--+--+
     |
Oxidase (+) + Gram stain (GN comma) + Antisera
     |
API20E confirmation
\`\`\``,
`\`\`\`mermaid
flowchart TD
    A["FAECAL SAMPLE"] --> B["APW<br/>(enrichment)"]
    A --> C["TCBS agar<br/>(selective)"]
    B --> D["Subculture"]
    C --> E["Bright yellow<br/>colonies?"]
    D --> F["Oxidase (+)<br/>Gram stain (GN comma)<br/>Antisera"]
    E --> F
    F --> G["API20E confirmation"]
\`\`\``],

  // C. difficile two-step
  [`\`\`\`
STOOL SAMPLE (loose/watery -- Bristol 5-7)
         |
   Step 1: GDH EIA or NAAT screen
         |
    +-----+-----+
    |             |
 Negative      Positive
    |             |
 Report NEG   Step 2: Toxin EIA (A/B)
                  |
           +------+------+
           |              |
        Positive       Negative
           |              |
     REPORT CDI+      ? Toxigenic carrier
     (treat)          (clinical correlation;
                       consider PCR reflex)
\`\`\``,
`\`\`\`mermaid
flowchart TD
    A["STOOL SAMPLE<br/>(loose/watery - Bristol 5-7)"] --> B["Step 1: GDH EIA<br/>or NAAT screen"]
    B --> C["Negative"]
    B --> D["Positive"]
    C --> E["Report NEG"]
    D --> F["Step 2: Toxin EIA (A/B)"]
    F --> G["Positive"]
    F --> H["Negative"]
    G --> I["REPORT CDI+<br/>(treat)"]
    H --> J["Toxigenic carrier?<br/>(clinical correlation;<br/>consider PCR reflex)"]
\`\`\``],
]);

// ===== LECTURE 7 =====
process('7-lab-practical.md', [
  // Gram stain procedure
  [`\`\`\`
Step 1: Crystal Violet \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 1 minute \u2500\u2500\u2500\u2500 PRIMARY STAIN
        Wash with water
Step 2: Gram's Iodine \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 1 minute \u2500\u2500\u2500\u2500 MORDANT (fixes dye)
        Wash with water
Step 3: 95% Alcohol \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 10 seconds MAX \u2500\u2500 DECOLOURISER
        Wash with water
Step 4: Safranin \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 1 minute \u2500\u2500\u2500\u2500 COUNTERSTAIN
        Wash with tap water
        Blot dry with blotting paper
\`\`\``,
`\`\`\`mermaid
graph TD
    A["Step 1: Crystal Violet<br/>(1 minute) - PRIMARY STAIN"] --> B["Wash with water"]
    B --> C["Step 2: Gram's Iodine<br/>(1 minute) - MORDANT"]
    C --> D["Wash with water"]
    D --> E["Step 3: 95% Alcohol<br/>(10 seconds MAX) - DECOLOURISER"]
    E --> F["Wash with water"]
    F --> G["Step 4: Safranin<br/>(1 minute) - COUNTERSTAIN"]
    G --> H["Wash with tap water<br/>Blot dry with blotting paper"]
\`\`\``],

  // Haemolysis patterns
  [`\`\`\`
                    HAEMOLYSIS ON BLOOD AGAR

    Beta (B)              Alpha (a)            Gamma (y)
    = COMPLETE            = PARTIAL             = NONE
    Clear zone            Green/brown zone      No change
    around colony         around colony         around colony

    Staphylococcus:       Streptococcus:        Staphylococcus:
    Suspect S. aureus     "Environmental         Coagulase-negative
    -> coagulase test     Streptococci"          Staphylococci
                          -> Optochin test
    Streptococcus:
    Suspect S. pyogenes   S. pneumoniae is       Streptococcus:
    or S. agalactiae      alpha-haemolytic       Environmental
    -> Lancefield         AND Optochin           Streptococci
       grouping           SENSITIVE              -> Esculin test
\`\`\``,
`\`\`\`mermaid
graph TD
    H["HAEMOLYSIS ON BLOOD AGAR"] --> B["Beta (B) = COMPLETE<br/>Clear zone around colony"]
    H --> A2["Alpha (a) = PARTIAL<br/>Green/brown zone around colony"]
    H --> G2["Gamma (y) = NONE<br/>No change around colony"]
    B --> B1["Staphylococcus:<br/>Suspect S. aureus<br/>then coagulase test"]
    B --> B2["Streptococcus:<br/>Suspect S. pyogenes<br/>or S. agalactiae<br/>then Lancefield grouping"]
    A2 --> A3["Optochin test"]
    A3 --> A4["S. pneumoniae is<br/>alpha-haemolytic<br/>AND Optochin SENSITIVE"]
    G2 --> G3["Staph: Coagulase-negative<br/>Staphylococci"]
    G2 --> G4["Strep: Environmental<br/>then Esculin test"]
\`\`\``],

  // Master flowchart
  [`\`\`\`
                         COLONY ON AGAR
                              |
                         GRAM STAIN
                        /            \\
                       /              \\
              GRAM POSITIVE          GRAM NEGATIVE
             (Blue/Purple)            (Pink/Red)
              /        \\              /          \\
           COCCI     BACILLI       COCCI       BACILLI
             |          |            |            |
         CATALASE    [Rare in     OXIDASE      OXIDASE
          TEST       practicals]   TEST         TEST
          /    \\                     |          /      \\
      (+)ve  (-)ve              (+)ve       (+)ve    (-)ve
        |       |                  |           |         |
   STAPH    STREP           NEISSERIA    PSEUDOMONAS   API 20E
     |         |               spp      (if typical      |
  COAGULASE  HAEMOLYSIS         |       pigmentation)  IDENTIFY
   TEST     on Blood        Gonogen                  ENTEROBACTERALES
   /   \\      agar          test to                    |
(+)  (-)     /   |    \\     confirm              E. coli
  |    |    B    a     y    species             Klebsiella
S.aureus CoNS   |    |    |                    Salmonella
              LANCEFIELD Optochin  Esculin      Proteus
              GROUPING    test     test         Shigella
                |          |                    etc.
           A = S. pyogenes |
           B = S. agalactiae  S. pneumoniae
                              (if sensitive)

   IF LARGE OVAL GRAM +VE WITH BUDDING --> YEAST --> GERM TUBE TEST
   Germ tube (+) = C. albicans
   Germ tube (-) = Other Candida spp --> Chromogenic agar / MALDI-TOF
\`\`\``,
`\`\`\`mermaid
graph TD
    A["COLONY ON AGAR"] --> B["GRAM STAIN"]
    B --> C["GRAM POSITIVE<br/>(Blue/Purple)"]
    B --> D["GRAM NEGATIVE<br/>(Pink/Red)"]
    C --> E["COCCI"]
    C --> F["BACILLI"]
    D --> G3["COCCI"]
    D --> H3["BACILLI"]
    E --> I3["CATALASE TEST"]
    I3 --> J3["(+)ve STAPH"]
    I3 --> K3["(-)ve STREP"]
    J3 --> L3["COAGULASE TEST"]
    L3 --> M3["(+) S. aureus"]
    L3 --> N3["(-) CoNS"]
    K3 --> O3["HAEMOLYSIS on Blood agar"]
    O3 --> P3["Beta - LANCEFIELD GROUPING<br/>A = S. pyogenes<br/>B = S. agalactiae"]
    O3 --> Q3["Alpha - Optochin test<br/>S = S. pneumoniae"]
    O3 --> R3["Gamma - Esculin test"]
    G3 --> S3["OXIDASE (+ve)<br/>NEISSERIA spp<br/>Gonogen test"]
    H3 --> T3["OXIDASE TEST"]
    T3 --> U3["(+ve) PSEUDOMONAS"]
    T3 --> V3["(-)ve API 20E<br/>E. coli, Klebsiella<br/>Salmonella, Proteus<br/>Shigella etc."]
\`\`\`

**IF LARGE OVAL GRAM +VE WITH BUDDING --> YEAST --> GERM TUBE TEST**
- Germ tube (+) = C. albicans
- Germ tube (-) = Other Candida spp --> Chromogenic agar / MALDI-TOF`],

  // Sample-to-agar matching
  [`\`\`\`
CLINICAL SAMPLE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500> AGAR MEDIA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500> INCUBATION

Urine (MSU/CSU) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500> CLED agar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500> Aerobic, 37C

Sputum \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500> Blood agar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500> CO2, 37C
                             Chocolate agar \u2500\u2500\u2500\u2500\u2500\u2500> CO2, 37C
                             MacConkey agar \u2500\u2500\u2500\u2500\u2500\u2500> Aerobic, 37C

Faeces \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500> DCA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500> Aerobic, 37C
                             Bismuth sulphite \u2500\u2500\u2500> Aerobic, 37C
                             TSI slope \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500> Aerobic, 37C

Wound/Burn Swab \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500> Blood agar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500> CO2, 37C
                             Blood agar + Metro \u2500> Anaerobic
                             MacConkey agar \u2500\u2500\u2500\u2500\u2500\u2500> Aerobic, 37C
                             Sabourauds agar \u2500\u2500\u2500\u2500> Aerobic, 25-30C

Urethral Swab (STI) \u2500\u2500\u2500\u2500\u2500> NYC agar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500> CO2, 37C
\`\`\``,
`| Clinical Sample | Agar Media | Incubation |
|---|---|---|
| **Urine** (MSU/CSU) | CLED agar | Aerobic, 37C |
| **Sputum** | Blood agar | CO2, 37C |
| | Chocolate agar | CO2, 37C |
| | MacConkey agar | Aerobic, 37C |
| **Faeces** | DCA | Aerobic, 37C |
| | Bismuth sulphite | Aerobic, 37C |
| | TSI slope | Aerobic, 37C |
| **Wound/Burn Swab** | Blood agar | CO2, 37C |
| | Blood agar + Metro | Anaerobic |
| | MacConkey agar | Aerobic, 37C |
| | Sabourauds agar | Aerobic, 25-30C |
| **Urethral Swab** (STI) | NYC agar | CO2, 37C |`],
]);

// ===== LECTURE 8 =====
process('8-free-living-amoebae.md', [
  [`\`\`\`
UNSPORULATED OOCYST (passed in faeces)
         |
  Environment (days-weeks, warmth + moisture)
         |
SPORULATED OOCYST (contains 2 sporocysts, each with 2 sporozoites)
         |
  Ingested via contaminated food/water
         |
EXCYSTATION in small intestine
         |
SPOROZOITES invade epithelial cells
         |
Asexual reproduction (merogony) --> Sexual reproduction (gametogony)
         |
OOCYST formed --> passed in faeces (cycle repeats)
\`\`\``,
`\`\`\`mermaid
flowchart TD
    A["UNSPORULATED OOCYST<br/>(passed in faeces)"] --> B["Environment<br/>(days-weeks, warmth + moisture)"]
    B --> C["SPORULATED OOCYST<br/>(2 sporocysts, each with 2 sporozoites)"]
    C --> D["Ingested via contaminated<br/>food/water"]
    D --> E["EXCYSTATION<br/>in small intestine"]
    E --> F["SPOROZOITES invade<br/>epithelial cells"]
    F --> G["Asexual reproduction<br/>(merogony)"]
    G --> H["Sexual reproduction<br/>(gametogony)"]
    H --> I["OOCYST formed"]
    I --> A
\`\`\``],
]);

console.log('Done!');
