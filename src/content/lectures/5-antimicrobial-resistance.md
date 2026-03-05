---
title: "Antibiotic Resistance and Susceptibility Testing"
order: 5
icon: "💊"
description: "Antimicrobial resistance mechanisms, MRSA, ESBL detection, disc diffusion, automated AST, and EUCAST standardisation"
---

# Lecture 5: Antibiotic Resistance and Antibiotic Susceptibility Testing

## Table of Contents
1. [Learning Outcomes](#1-learning-outcomes)
2. [Key Terminology](#2-key-terminology)
3. [Modes of Antimicrobial Action](#3-modes-of-antimicrobial-action)
4. [Factors Promoting Resistance](#4-factors-promoting-resistance)
5. [Consequences of Resistance](#5-consequences-of-resistance)
6. [MRSA](#6-mrsa)
7. [Antifungal Resistance](#7-antifungal-resistance)
8. [Proposals to Combat Resistance](#8-proposals-to-combat-resistance)
9. [Antibiotic Susceptibility Testing Methods](#9-antibiotic-susceptibility-testing-methods)
10. [Automated AST Methods](#10-automated-ast-methods)
11. [EUCAST and Standardisation](#11-eucast-and-standardisation)
12. [AST in LEDCs](#12-ast-in-ledcs)
13. [Rapid AST](#13-rapid-ast)
14. [Future Directions](#14-future-directions)
15. [SDL Questions](#15-sdl-questions)
16. [Key Resources](#16-key-resources)

---

## 1. Learning Outcomes

- Demonstrate understanding of the problem of antibiotic resistance and proposed strategies to reduce it
- Discuss various methods for antibiotic/antimicrobial susceptibility testing including advantages and disadvantages

---

## 2. Key Terminology

| Term | Definition |
|---|---|
| **Antibiotic** | Chemical produced by a microorganism that kills or inhibits growth of another microorganism |
| **Antimicrobial agent** | Chemical/natural/synthetic product that kills or inhibits growth of microorganisms |
| **Selective toxicity** | Drug kills harmful microbes without damaging host; some require monitoring (e.g. vancomycin, gentamicin, tobramycin) |
| **MIC** | **Minimum Inhibitory Concentration** -- lowest concentration of antimicrobial that inhibits visible growth |
| **Antimicrobial resistance** | Lack of effect of an antimicrobial against a previously susceptible microbe; increase in MIC |

> **Key problem**: No antibiotic is effective against ALL microbes -- treatment must be accurately targeted

---

## 3. Modes of Antimicrobial Action

Different antibiotics act on different bacterial cell targets:

| Target | Antibiotic Examples | Used For |
|---|---|---|
| **Cell wall synthesis** | Vancomycin, Penicillins | MRSA (vancomycin); general GP infections |
| **Protein synthesis (50S)** | Erythromycin (macrolide) | *Legionella*, *S. pneumoniae*, *Campylobacter* |
| **Protein synthesis (30S)** | Gentamicin, Tobramycin | Serious GN infections |
| **DNA replication** | Fluoroquinolones (e.g. ciprofloxacin) | Broad spectrum |
| **Folic acid synthesis** | Trimethoprim, Sulfonamides | UTIs |
| **Cell membrane** | Polymyxins | Last-resort GN infections |

### 3.1 Mechanisms of Antimicrobial Resistance

| Mechanism | How It Works | Example |
|---|---|---|
| **Enzymatic inactivation** | Enzyme degrades or modifies the antibiotic | **Beta-lactamases** hydrolyse beta-lactam ring; aminoglycoside-modifying enzymes |
| **Target modification** | Mutation alters the drug target so antibiotic cannot bind | **PBP2a** in MRSA (MecA gene); altered 23S rRNA in macrolide resistance |
| **Efflux pumps** | Actively pump antibiotic out of the cell | Tetracycline resistance (Tet pumps); fluoroquinolone efflux in *P. aeruginosa* |
| **Reduced permeability** | Altered or lost outer membrane porins reduce drug entry | **OprD** porin loss in *P. aeruginosa* --> carbapenem resistance |
| **Target bypass** | Alternative metabolic pathway circumvents drug action | MRSA uses **PBP2a** instead of normal PBPs for cell wall synthesis |

### 3.2 How Resistance Spreads -- Horizontal Gene Transfer (HGT)

| Method | Mechanism | Example |
|---|---|---|
| **Conjugation** | Direct cell-to-cell transfer via **pilus**; transfers plasmids | ESBL genes (CTX-M) on plasmids between Enterobacteriaceae |
| **Transduction** | **Bacteriophage** (virus) transfers DNA between bacteria | *S. aureus* resistance genes via phage |
| **Transformation** | Free DNA from dead bacteria taken up by living bacteria | Penicillin resistance in *S. pneumoniae* |

> **Key**: Plasmid-mediated resistance is the biggest clinical threat because **one plasmid can carry multiple resistance genes** --> multidrug resistance from a single transfer event

### 3.3 Beta-Lactamase Classification (Ambler)

| Class | Type | Key Enzymes | Clinical Significance |
|---|---|---|---|
| **A** | Serine | **TEM**, **SHV**, **CTX-M** (ESBLs); **KPC** (carbapenemase) | CTX-M most common ESBL globally; KPC in *K. pneumoniae* |
| **B** | **Metallo** (Zn-dependent) | **NDM-1**, VIM, IMP | NOT inhibited by clavulanic acid; inhibited by EDTA; "superbugs" |
| **C** | Serine | **AmpC** | Chromosomal (inducible) in *Enterobacter*, *Citrobacter*; cephalosporin resistance |
| **D** | Serine | **OXA** (oxacillinases) | Some have carbapenemase activity (OXA-48) |

### 3.4 Key Resistance Genes to Know

| Gene | Organism | Resistance | Detection |
|---|---|---|---|
| **MecA** | MRSA | Methicillin (all beta-lactams) | Cefoxitin disc screen / PCR |
| **CTX-M** | Enterobacteriaceae | ESBLs (3rd-gen cephalosporins) | Cefpodoxime +/- clavulanic acid; **synergy test** |
| **KPC** | *K. pneumoniae* | Carbapenems | Modified Hodge test / **CarbaNP** / PCR |
| **NDM-1** | Various GN | Carbapenems (metallo) | EDTA synergy / PCR |
| **VanA/VanB** | Enterococci | Vancomycin (VRE) | Vancomycin disc; PCR |

> **ESBL screening**: Zone of inhibition around cefpodoxime disc **increases** when clavulanic acid is added (synergy = ESBL positive)

---

## 4. Factors Promoting Resistance

### 4.1 Inappropriate Antimicrobial Use

| Factor | Detail |
|---|---|
| Sub-optimal levels | Incomplete courses; incorrect dosing |
| **Antibiotics for viral infections** | Common GP prescribing error |
| Self-medication | Antibiotics sold without medical supervision |
| **Empirical treatment** | Before culture results available |
| Hospital hygiene failures | Spread of resistant organisms |
| Counterfeit/outdated drugs | Quality control failures |
| Poverty/war/natural disasters | Cold chain disruption |
| **Antibiotics in food** | Agricultural use |
| Exposure to resistance genes | **MecA** (MRSA), **CTX-M** (ESBL) |

### 4.2 Consequences

- Infections resistant to available antibiotics
- **Increased cost** of treatment
- **Poor prognosis** for patients
- MDR-TB and XDR-TB emergence

---

## 5. Consequences of Resistance

### 5.1 Proficiency Testing Results (48 Labs)

| Test Organism | Accuracy |
|---|---|
| MRSA | **100%** |
| VRE (*E. faecium*) | **100%** |
| Fluoroquinolone-resistant *P. aeruginosa* | **100%** |
| Erythromycin-resistant *S. pneumoniae* | **97%** |
| Carbapenem-resistant *Serratia marcescens* | **75%** |
| **ESBL *Klebsiella pneumoniae*** | **42%** |

> ESBL detection is the **most challenging** -- lowest accuracy across labs

---

## 6. MRSA

- **Methicillin-Resistant *Staphylococcus aureus***
- Most frequent **nosocomial** (hospital-acquired) pathogen
- Usually resistant to several antibiotics including **flucloxacillin**
- Treatment: **Vancomycin**
- **Mandatory surveillance reporting** in UK: MRSA bacteraemia (since 2007), MSSA bacteraemia (since 2011)
- Resistance gene: **MecA** --> encodes **PBP2a** (penicillin-binding protein 2a) with low affinity for all beta-lactams
- Detection: **Cefoxitin disc test** (surrogate for methicillin); zone <22mm = MRSA. Confirm with **PCR for MecA gene**
- **CA-MRSA** (community-acquired): often PVL-positive; skin/soft tissue infections in otherwise healthy people
- **HA-MRSA** (hospital-acquired): typically in hospitalised/debilitated patients; bacteraemia, surgical site infections

> Increased antibiotic usage leads to increased antibiotic resistance

---

## 7. Antifungal Resistance

- Historically lagged behind antibacterial resistance research
- *Candida albicans* death rate increased significantly after 1970 due to:
  - More immunosuppressive therapies
  - Indiscriminate broad-spectrum antibiotic use
  - Indwelling IV devices
  - HIV/AIDS (1980s)
- **Antifungal susceptibility testing NOT routine** in hospital labs
  - Carried out in designated **Mycology Reference Laboratories** (e.g. Bristol)
- Systemic antifungal therapy requires **drug level monitoring** (e.g. itraconazole) + LFT monitoring

---

## 8. Proposals to Combat Resistance

### 8.1 Clinical Strategies

| Strategy | Detail |
|---|---|
| **Culture the patient** | Take sample for ID/AST before starting antibiotics |
| **Target empiric therapy** | To likely pathogens and local antibiogram |
| **Target definitive therapy** | Based on AST results |
| **Narrow spectrum** preferred | Avoid broad spectrum where possible |
| **Combination therapy** | Antimicrobial cocktails |
| **DOT** | Directly observed therapy (used in TB treatment) |
| **Restrict use** | Serious/life-threatening infections only |

### 8.2 Systems Approaches

- Passive and interactive prescriber education
- Antibiotic policy and standardised order forms
- Formulary restrictions and prior approval systems
- Pharmacy substitution/switch programmes
- Multidisciplinary drug utilisation evaluation (DUE)
- Computerised decision support / online ordering

### 8.3 CDC Four Core Actions

1. **Prevent infection**
2. **Diagnose and treat effectively**
3. **Use antimicrobials wisely** (optimise use)
4. **Prevent transmission**

> Clinicians, pharmacists, nurses, allied healthcare staff AND patients all hold the solution

---

## 9. Antibiotic Susceptibility Testing Methods

### 9.1 Disc Diffusion

- Standardised **Mueller-Hinton (MH) agar**
- Antibiotic-impregnated discs placed on inoculated agar
- Bacteria grow but are inhibited by diffusing antibiotic -- **zone of inhibition (ZOI)**
- ZOI measured and compared to **EUCAST standardised breakpoints** to determine **S** (susceptible), **I** (intermediate), or **R** (resistant)

### 9.2 BSAC Method (Historical)

- Devised by Jenny Andrews and Prof Richard Wise (City Hospital Birmingham)
- Late 1990s/post-2000
- Standardised zone sizes for many bacteria vs range of antibiotics
- Standard inoculum: **0.5 McFarland**
- Reproducible results across all UK labs using BSAC method
- Prior to BSAC: Stoke's or Modified Stoke's method
- **2016: Replaced by EUCAST method**

### 9.3 E-test

- **Gold standard** but expensive
- Gradient strip: determines exact **MIC** value
- Elliptical zone of inhibition; read MIC where zone meets strip

### 9.4 Broth Dilution

- Serial dilutions of antimicrobial in broth
- Used for: disinfectants, novel antimicrobials, fastidious organisms
- Includes negative control

### 9.5 Accuracy

- Accurate measurement critical for:
  - Determining effective patient treatment
  - Rapid detection of resistant strains
- **Quality culture (QC) is essential**

---

## 10. Automated AST Methods

| System | Manufacturer | Notes |
|---|---|---|
| **Vitek 2** | Biomerieux | Widely used automated ID + AST |
| **BD Phoenix** | BD | Automated AST |
| **MAST Urisystem** | MAST | Multi-point technology |

---

## 11. EUCAST and Standardisation

- **EUCAST harmonisation** of AST across Europe since **2016**
- Standardised inoculum: **0.5 McFarland** (Inoclic method -- wire)
- Published standardised ZOI breakpoints for S/I/R determination
- Templates available for rapid interpretation

---

## 12. AST in LEDCs

- Phenotypic methods predominate (disc diffusion)
- First-line and second-line antibiotic panels tested
- **ESBL screening**: Cefpodoxime +/- Clavulanic acid
- ESBL *E. coli* detected (Ghana 2010)
- Resource limitations affect surveillance quality
- Same fundamental disc diffusion principles apply

---

## 13. Rapid AST

- Used in **bacteraemia and sepsis** -- time-critical
- **EUCAST RAST** (Rapid AST) guidelines for blood cultures
- Direct from positive blood culture bottles
- Enables faster targeted therapy

> https://www.eucast.org/rapid_ast_in_bloodcultures

---

## 14. Future Directions

| Approach | Details |
|---|---|
| **Vaccines** | Shift focus to prevention of infectious diseases |
| **WHO One Health** | Integrated human-animal-environment approach |
| **Quorum sensing** | Disrupt bacterial communication |
| **Bacteriophage therapy** | Viruses that kill bacteria |
| **Antibiotic cycling** | Rotating antibiotic use to reduce resistance pressure |
| **Antibiotic stewardship** | Structured programmes to optimise prescribing |
| **Natural products** | Artemisins (malaria), honey, tea tree oil, garlic, turmeric, chilli |
| **Antimicrobial peptides** | Broad spectrum; from plants and animals |
| **Soil bacteria** | Environmental sources of novel antibiotics |
| **Genomics** | Genetics and genomics as the way forward for resistance detection |

---

## 15. SDL Questions

1. **What was the Chennai Declaration?** A roadmap to tackle antimicrobial resistance in India (2012); multistakeholder approach to curb resistance through prescribing guidelines, infection control, and public awareness
2. **Why is bacterial inoculum size crucial in AST?** Incorrect inoculum gives false S/R results. Too heavy = false R; too light = false S. 0.5 McFarland is the standard. **Inoclic method** uses a calibrated wire loop vs the traditional colony suspension method
3. **Manual vs automated AST advantages/disadvantages?**
   - **Manual (disc diffusion/broth)**: cheap, flexible, widely available; labour-intensive, subjective reading, slower
   - **Automated (Vitek2/MAST)**: standardised, faster results, computer-generated; expensive, requires maintenance, may miss unusual resistance patterns

---

## 16. Key Resources

- **EUCAST**: https://www.eucast.org/ -- breakpoint tables and guidelines
- **EUCAST RAST**: https://www.eucast.org/rapid_ast_in_bloodcultures
- **WHO One Health**: https://www.who.int/publications/i/item/9789240075924
- **PHE Annual Epidemiological Commentary**: MRSA, MSSA, *E. coli* bacteraemia
- Steward CD et al. (2000) *Diagn Microbiol Infect Dis* 38:59-67 -- AST proficiency
- **YouTube**: Ninja Nerd, Medicosis Perfectionalis, Dr. Matt
