/* ============================================================
   M&N FORENSICS — SHARED SCRIPT
   ============================================================ */

/* ------------------------------------------------------------
   1. SERVICE MODAL CONTENT — edit this object to change the
      text that appears inside each "Our Services" pop-up.
      Each key matches a data-service attribute on a card.
   ------------------------------------------------------------ */
const SERVICE_CONTENT = {

  "death-investigations": {
    caseNo: "CASE FILE NO. 01",
    icon: "fa-dna",
    title: "Death Investigations",
    intro: "Independent, scientifically rigorous medico-legal death investigations for families, attorneys, insurers and government agencies seeking clarity in cases where the cause or circumstances of death are disputed, unexplained, or require an independent second opinion.",
    sections: [
      {
        heading: "What this service covers",
        list: [
          "Independent review of post-mortem and toxicology reports",
          "Scene reconstruction and timeline analysis",
          "Cause and manner of death assessments",
          "Second-opinion reports for inquests and litigation",
          "Liaison with pathologists, police and legal teams"
        ]
      },
      {
        heading: "Who it's for",
        text: "Families seeking answers, legal practitioners building or challenging a case, insurers assessing claims linked to unexplained deaths, and government bodies requiring an independent forensic opinion."
      },
      {
        heading: "How we work",
        text: "Every file is assigned a dedicated case reference and handled with strict confidentiality. We review all available documentation, identify gaps or inconsistencies, and produce a clear, court-ready written opinion supported by scientific reasoning."
      }
    ]
  },

  "human-identification": {
    caseNo: "CASE FILE NO. 02",
    icon: "fa-fingerprint",
    title: "Human Identification",
    intro: "Scientific identification services that bring certainty to families and authorities when remains are unidentified, decomposed, skeletal, or fragmentary — combining anthropological, odontological and biometric methods.",
    sections: [
      {
        heading: "What this service covers",
        list: [
          "Biological profiling (age, sex, ancestry, stature estimation)",
          "Comparative dental and radiographic identification",
          "Fingerprint and biometric comparison",
          "Coordination with DNA laboratories for confirmatory testing",
          "Identification reports for civil registration and legal closure"
        ]
      },
      {
        heading: "Who it's for",
        text: "Government agencies handling unidentified remains, NGOs working on missing-persons cases, families seeking closure, and legal teams requiring formal identification evidence."
      },
      {
        heading: "Our approach",
        text: "We apply internationally recognised identification protocols, cross-referencing multiple lines of evidence before reaching a conclusion, and document every step so findings withstand scrutiny in formal proceedings."
      }
    ]
  },

  "forensic-pathology": {
    caseNo: "CASE FILE NO. 03",
    icon: "fa-microscope",
    title: "Forensic Pathology Consultation",
    intro: "Specialist pathology consultation services supporting practitioners and legal teams with independent interpretation of autopsy findings, histology, and injury patterns.",
    sections: [
      {
        heading: "What this service covers",
        list: [
          "Independent review of autopsy and histopathology findings",
          "Injury pattern interpretation and mechanism analysis",
          "Cause-of-death correlation with clinical history",
          "Peer review of existing pathology reports",
          "Written opinions suitable for court submission"
        ]
      },
      {
        heading: "Who it's for",
        text: "Legal practitioners, insurance assessors, and families who require a qualified second opinion on pathology findings already on record."
      },
      {
        heading: "Confidentiality",
        text: "All pathology material is handled under strict chain-of-custody and confidentiality protocols, with access limited to the consulting forensic team."
      }
    ]
  },

  "forensic-anthropology": {
    caseNo: "CASE FILE NO. 04",
    icon: "fa-user-doctor",
    title: "Forensic Anthropology",
    intro: "Recovery, analysis and interpretation of skeletal and decomposed remains to support identification, time-since-death estimation, and trauma analysis.",
    sections: [
      {
        heading: "What this service covers",
        list: [
          "Excavation and recovery of buried or surface remains",
          "Skeletal analysis: age, sex, stature and ancestry estimation",
          "Trauma analysis — perimortem vs postmortem damage",
          "Estimation of time since death (taphonomy)",
          "Expert reports for legal and humanitarian purposes"
        ]
      },
      {
        heading: "Who it's for",
        text: "Law enforcement agencies, mass-grave and humanitarian investigations, legal teams, and researchers requiring qualified anthropological analysis of human remains."
      },
      {
        heading: "Field & laboratory work",
        text: "Recovery work follows internationally accepted excavation standards to preserve context, with subsequent laboratory analysis conducted using calibrated, peer-reviewed methods."
      }
    ]
  },
"crime-scene": {
  caseNo: "CASE FILE NO. 05",
  icon: "fa-magnifying-glass",
  title: "Crime Scene Investigation",
  intro: "Scientific Scene Interpretation. Evidence Integrity. Justice Through Forensic Excellence. Our Crime Scene Investigation Unit provides professional medico-legal and forensic crime scene services focused on the scientific recognition, documentation, recovery, preservation, interpretation, and reconstruction of forensic evidence.",

  sections: [
    {
      heading: "What this service covers",
      list: [
        "Comprehensive crime scene processing and documentation",
        "Medico-legal death scene investigation",
        "Scene photography, mapping and measurement",
        "Systematic evidence recovery and packaging",
        "Bloodstain pattern analysis and reconstruction",
        "Trace evidence recognition and recovery",
        "Biological evidence collection and preservation",
        "Human remains recovery and scene documentation",
        "Shooting and violent crime scene reconstruction",
        "Decomposition scene investigations",
        "Buried and concealed remains scene processing",
        "Forensic entomology evidence collection",
        "Chain-of-custody management",
        "Scene reconstruction reports and diagrams",
        "Independent forensic scene review and consultation",
        "Expert forensic reporting and courtroom testimony"
      ]
    },
    {
      heading: "Who it's for",
      text: "Law enforcement agencies, legal professionals, insurers investigating suspicious incidents, corporate clients responding to workplace incidents, healthcare institutions, and families seeking independent forensic assessment of complex medico-legal scenes."
    },
    {
      heading: "Bloodstain Pattern Analysis & Reconstruction",
      text: "Our bloodstain pattern analysis services assist in reconstructing mechanisms of injury, movement during violent events, sequence of actions, positions of individuals, and possible weapons involved. Findings are interpreted scientifically and objectively within the broader context of the scene and investigative evidence."
    },
    {
      heading: "Trace Evidence & Entomology",
      text: "We recover and document trace evidence including hair, fibers, soil, glass, paint, biological residues, and gunshot-related materials. In decomposition cases, forensic entomology evidence is collected and preserved to support postmortem interval estimation, scene reconstruction, and medico-legal interpretation."
    },
    {
      heading: "Approach",
      text: "Our multidisciplinary forensic approach integrates crime scene science with forensic pathology support, forensic anthropology, forensic genetics, forensic toxicology, forensic entomology, bloodstain pattern analysis, decomposition science, and trace evidence interpretation to ensure comprehensive scene reconstruction and scientifically defensible conclusions."
    },
    {
      heading: "Standards",
      text: "All scene processing, evidence recovery, documentation, and preservation follow recognized forensic and medico-legal standards. We emphasize scientific integrity, objective evidence interpretation, proper chain-of-custody procedures, ethical forensic practice, and internationally aligned investigative methodologies to ensure evidence remains admissible and defensible through legal proceedings."
    },
    {
      heading: "Why Choose M&N Forensics",
      text: "Our Crime Scene Investigation Unit combines advanced forensic scientific training, extensive medico-legal investigative experience, expertise in decomposition scenes, bloodstain pattern interpretation, forensic entomology, trace evidence recovery, human remains recovery, multidisciplinary forensic integration, and professional courtroom experience."
    },
    {
      heading: "Mission",
      text: "To preserve truth at the scene through scientific investigation, objective evidence interpretation, and professional forensic excellence."
    }
  ]
},
 "dna-forensics": {
  caseNo: "CASE FILE NO. 06",
  icon: "fa-dna",
  title: "DNA Forensics & Forensic Genetics",
  intro: "Advancing Justice Through Molecular Science. Our DNA Forensics and Forensic Genetics Unit provides advanced forensic genetic consultation and scientific support services focused on the identification, interpretation, preservation, and forensic application of biological evidence within medico-legal and criminal investigations.",

  sections: [
    {
      heading: "What this service covers",
      list: [
        "DNA evidence consultation and interpretation",
        "Human identification support",
        "Missing persons and kinship investigations",
        "Biological evidence recovery guidance",
        "DNA sampling strategy consultation",
        "Forensic genetics case review",
        "Crime scene biological evidence assessment",
        "Touch DNA interpretation support",
        "Degraded and low-template DNA consultation",
        "Disaster victim identification support",
        "DNA-related chain-of-custody assessment",
        "Forensic laboratory quality assurance consultation",
        "Independent forensic review of DNA evidence",
        "Expert forensic reporting and courtroom testimony"
      ]
    },

    {
      heading: "Who it's for",
      text: "Law enforcement agencies, legal professionals, healthcare institutions, insurance investigators, government agencies, forensic practitioners, and families seeking expert assistance with human identification, kinship analysis, missing persons investigations, or forensic DNA evidence interpretation."
    },

    {
      heading: "DNA Evidence & Crime Scene Interpretation",
      text: "DNA evidence is one of the most scientifically significant forms of forensic evidence. Our approach emphasizes scientific integrity, contamination prevention, proper evidence handling, contextual interpretation of DNA findings, and objective evidence-based conclusions. DNA findings are evaluated alongside crime scene evidence, bloodstain patterns, trace evidence, pathology findings, decomposition processes, and investigative circumstances."
    },

    {
      heading: "Touch DNA & Low-Template DNA",
      text: "We provide expert consultation on touch DNA and low-level DNA evidence, including secondary transfer considerations, contamination risks, DNA persistence, mixed DNA profiles, stochastic effects, and the contextual interpretation of low-template genetic findings. Our goal is to ensure scientifically responsible evaluation while minimizing the risk of wrongful conclusions."
    },

    {
      heading: "Human Identification",
      text: "Our DNA Forensics Unit supports investigations involving unknown human remains, decomposed and skeletonized remains, burnt and fragmented remains, missing persons cases, disaster victim identification, kinship analysis, and biological relationship investigations. We integrate forensic genetics with forensic anthropology, forensic entomology, and medico-legal death investigation to strengthen identification outcomes."
    },

    {
      heading: "Quality Assurance",
      text: "Our services emphasize evidence integrity, chain-of-custody preservation, quality assurance principles, objective interpretation methodologies, scientific transparency, documentation, traceability, ethical forensic practice, and laboratory quality assessment to ensure the reliability of forensic genetic evidence."
    },

    {
      heading: "Prevention of Miscarriage of Justice",
      text: "DNA evidence possesses immense evidentiary power. Improper collection, contamination, misinterpretation, statistical misunderstanding, or overstatement of findings may lead to wrongful implications. We promote scientifically responsible evidence evaluation, objective interpretation of genetic findings, accurate judicial understanding of DNA evidence, and independent scientific review when necessary."
    },

    {
      heading: "Why Choose M&N Forensics",
      text: "Our DNA Forensics Unit combines advanced academic training in forensic genetics, practical medico-legal investigative experience, expertise in decomposition-related investigations, understanding of low-template and touch DNA interpretation, multidisciplinary forensic integration, scientific methodologies, courtroom experience, and a commitment to ethical and objective forensic practice."
    },

    {
      heading: "Mission",
      text: "To advance justice through responsible forensic genetics, scientific integrity, and objective interpretation of biological evidence."
    }
  ]
},
"forensic-toxicology": {
  caseNo: "CASE FILE NO. 07",
  icon: "fa-flask",
  title: "Forensic Toxicology Unit",
  intro: "Scientific Detection. Objective Interpretation. Medico-Legal Clarity. Our Forensic Toxicology Unit provides specialized medico-legal and scientific consultation services focused on the detection, interpretation, and evaluation of drugs, alcohol, poisons, toxins, chemicals, and environmental contaminants in forensic and investigative contexts.",

  sections: [
    {
      heading: "Overview",
      text: "Forensic toxicology plays a critical role in criminal investigations, medico-legal death investigations, public safety assessments, workplace incidents, environmental exposure evaluations, and judicial proceedings. The interpretation of toxicological findings often provides essential scientific insight into impairment, poisoning, intoxication, exposure, physiological effects, and potential cause or contribution to death. Our multidisciplinary approach integrates forensic toxicology with forensic pathology support, crime scene investigation, decomposition science, forensic anthropology, and medico-legal investigative interpretation to provide comprehensive and scientifically defensible forensic conclusions."
    },

    {
      heading: "Specialized Forensic Toxicology Services",
      list: [
        "Forensic toxicology consultation and interpretation",
        "Postmortem toxicology review",
        "Blood alcohol analysis consultation",
        "Alcohol-related impairment interpretation",
        "Poisoning investigation support",
        "Drug and toxic substance interpretation",
        "Environmental contamination investigations",
        "Biological sample interpretation",
        "Toxicological case review and consultation",
        "Crime scene toxicological evidence guidance",
        "Decomposition-related toxicological interpretation",
        "Medico-legal death investigation support",
        "Independent toxicology evidence review",
        "Expert forensic reporting and courtroom testimony"
      ]
    },

    {
      heading: "Blood Alcohol Analysis and Interpretation",
      text: "Blood alcohol analysis remains one of the most significant areas of forensic toxicology within criminal and medico-legal investigations. Accurate interpretation of alcohol-related findings is essential in driving under the influence investigations, impairment assessments, occupational incidents, violent crime investigations, sudden and unexplained deaths, and medico-legal cause and manner of death evaluations."
    },

    {
      heading: "Our Blood Alcohol Consultation Considers",
      list: [
        "Sampling procedures and specimen integrity",
        "Timing and physiological interpretation",
        "Postmortem alcohol production",
        "Decomposition-related alcohol artifacts",
        "Pharmacological and toxicological principles",
        "Associated pathology and scene findings"
      ]
    },

    {
      heading: "Postmortem Toxicology and Poisoning Investigations",
      text: "Postmortem toxicology forms a critical component of medico-legal death investigation. Toxic substances, drugs, chemicals, or poisons may contribute directly or indirectly to death, impairment, behavioral changes, or physiological collapse."
    },

    {
      heading: "Investigations We Support",
      list: [
        "Suspected poisoning",
        "Drug-related deaths",
        "Toxic chemical exposure",
        "Overdose investigations",
        "Occupational toxic exposure",
        "Sudden unexplained deaths",
        "Environmental toxicological incidents",
        "Complex decomposition cases"
      ]
    },

    {
      heading: "Scientific Considerations in Toxicology Interpretation",
      list: [
        "Postmortem redistribution",
        "Decomposition effects",
        "Specimen degradation",
        "Environmental contamination",
        "Drug interactions",
        "Physiological and pathological variables"
      ]
    },

    {
      heading: "Environmental Contamination and Toxic Exposure",
      text: "Environmental toxicology investigations involve the scientific assessment of harmful substances within environmental or occupational settings that may affect human health, biological evidence, or medico-legal investigations."
    },

    {
      heading: "Environmental Toxicology Services",
      list: [
        "Chemical exposure investigations",
        "Environmental contamination assessment",
        "Occupational toxicological incidents",
        "Hazardous substance interpretation",
        "Biological and environmental sample correlation",
        "Toxic exposure scene evaluation",
        "Environmental evidence interpretation"
      ]
    },

    {
      heading: "Scientific Integrity and Evidence Interpretation",
      text: "Toxicological evidence possesses significant scientific and legal implications. Improper interpretation, contamination, analytical limitations, or failure to consider contextual factors may result in inaccurate conclusions and potential miscarriages of justice."
    },

    {
      heading: "Our Professional Standards",
      list: [
        "Objective and evidence-based interpretation",
        "Scientific integrity and transparency",
        "Contextual toxicological evaluation",
        "Quality assurance principles",
        "Proper evidence preservation and chain-of-custody",
        "Ethical forensic practice",
        "Medico-legal accuracy and defensibility"
      ]
    },

    {
      heading: "Integrated Medico-Legal Approach",
      text: "Our Forensic Toxicology Unit works collaboratively with forensic and investigative professionals to strengthen the interpretation of toxicological findings and enhance overall forensic reconstruction and medico-legal understanding."
    },

    {
      heading: "Professional Collaboration",
      list: [
        "Crime scene investigators",
        "Forensic pathologists",
        "Forensic anthropologists",
        "Legal professionals",
        "Law enforcement agencies",
        "Healthcare institutions"
      ]
    },

    {
      heading: "Why Choose M&N Forensics and Death Investigations Consultants",
      list: [
        "Advanced forensic scientific training",
        "Medico-legal investigative experience",
        "Understanding of decomposition-related toxicology",
        "Expertise in blood alcohol interpretation",
        "Multidisciplinary forensic integration",
        "Scientific and evidence-based methodologies",
        "Professional courtroom and expert witness experience",
        "Commitment to ethical forensic practice and justice"
      ]
    },

    {
      heading: "Our Mission",
      text: "To provide scientifically reliable toxicological interpretation that advances truth, protects justice, and supports accurate medico-legal decision-making."
    }
  ]
},
 "corporate-investigations":{
  caseNo: "CASE FILE NO. 08",
  icon: "fa-briefcase",
  title: "Corporate & Insurance Fraud Investigations",
  intro: "Scientific Integrity. Independent Review. Protection Against Fraud and Miscarriage of Justice. Our Corporate and Insurance Fraud Investigations Unit provides specialized medico-legal and forensic scientific consultation services focused on the independent review, evaluation, and investigation of suspected fraudulent forensic, pathological, toxicological, and human identification-related matters.",

  sections: [
    {
      heading: "What this service covers",
      list: [
        "Insurance fraud investigation support",
        "Independent medico-legal case review",
        "Review of disputed or suspicious postmortem findings",
        "Autopsy report interpretation and verification",
        "Forensic toxicology review and interpretation",
        "Review of suspected falsified toxicology findings",
        "DNA and forensic genetics evidence review",
        "Evaluation of suspected falsified forensic genetic results",
        "Human identification verification",
        "Skeletal remains re-evaluation and identification support",
        "Forensic anthropology and archaeology consultation",
        "Corporate forensic risk consultation",
        "Independent forensic laboratory review",
        "Scientific evidence interpretation for legal proceedings",
        "Expert forensic reporting and courtroom testimony"
      ]
    },

    {
      heading: "Who it's for",
      text: "Insurance companies, corporate organizations, legal professionals, law enforcement agencies, healthcare institutions, government departments, and individuals requiring independent forensic review of complex medico-legal, toxicological, genetic, identification, or fraud-related matters."
    },

    {
      heading: "Independent Medico-Legal Review",
      text: "We assist in reviewing disputed causes of death, evaluating inconsistencies in autopsy findings, assessing medico-legal interpretation accuracy, identifying scientific discrepancies, correlating pathology findings with scene evidence, evaluating decomposition-related artifacts, and reviewing documentation and evidentiary integrity."
    },

    {
      heading: "Forensic Toxicology & DNA Review",
      text: "Our services include independent review of toxicology reports, alcohol and drug-related findings, suspected poisoning cases, postmortem toxicological results, contamination concerns, DNA evidence interpretation, forensic genetics review, kinship assessments, laboratory quality assurance evaluation, and identification of scientific inconsistencies in forensic reporting."
    },

    {
      heading: "Human Identification & Decomposed Remains",
      text: "We provide forensic anthropology consultation, skeletal remains analysis, human identification verification, recovery and interpretation of decomposed remains, biological profile estimation, DNA-assisted identification consultation, forensic archaeology support, and decomposition-related investigations."
    },

    {
      heading: "Approach",
      text: "Our multidisciplinary forensic expertise integrates forensic genetics, crime scene investigation, forensic toxicology, forensic anthropology and archaeology, medico-legal death investigation, decomposition science, forensic taphonomy, and laboratory quality assurance principles to provide comprehensive, objective, and scientifically defensible evaluations."
    },

    {
      heading: "Scientific Integrity",
      text: "Our work is grounded in independent scientific review, objective forensic interpretation, evidence-based analysis, ethical forensic practice, transparency, scientific accountability, professional integrity, and confidentiality. We are committed to protecting justice, institutional integrity, and public trust in forensic science."
    },

    {
      heading: "Why Choose M&N Forensics",
      text: "Our Corporate & Insurance Fraud Investigations Unit combines advanced forensic scientific expertise, practical medico-legal investigative experience, independent and objective scientific review, expertise in forensic evidence interpretation, understanding of complex decomposition cases, courtroom experience, ethical practice, and a commitment to scientific integrity and justice."
    },

    {
      heading: "Mission",
      text: "To protect justice, institutional integrity, and scientific truth through independent forensic investigation and objective medico-legal review."
    }
  ]
},

  

  "quality-assurance": {
    caseNo: "CASE FILE NO. 09",
    icon: "fa-clipboard-check",
    title: "Laboratory Quality Assurance",
    intro: "ISO-aligned quality assurance, auditing and process review services for forensic and clinical laboratories seeking to strengthen accreditation readiness.",
    sections: [
      {
        heading: "What this service covers",
        list: [
          "ISO 17025 / 17020 gap analysis and audit support",
          "Standard operating procedure (SOP) review and drafting",
          "Internal audit facilitation and corrective-action planning",
          "Chain-of-custody and quality-control system review",
          "Staff training on quality management principles"
        ]
      },
      {
        heading: "Who it's for",
        text: "Forensic, clinical and research laboratories preparing for accreditation, renewing accreditation, or strengthening internal quality systems."
      },
      {
        heading: "Outcome",
        text: "Clients receive a clear gap-analysis report with prioritised, practical recommendations to close compliance gaps ahead of formal assessment."
      }
    ]
  },

  "expert-witness": {
    caseNo: "CASE FILE NO. 10",
    icon: "fa-scale-balanced",
    title: "Expert Witness & Court Testimony",
    intro: "Independent expert witness services for civil and criminal proceedings — from written reports to testimony delivered in court or before tribunals.",
    sections: [
      {
        heading: "What this service covers",
        list: [
          "Preparation of independent expert reports",
          "Pre-trial consultation with legal teams",
          "Testimony in court, inquests and tribunals",
          "Cross-examination preparation and clarification statements",
          "Plain-language explanation of technical findings for non-experts"
        ]
      },
      {
        heading: "Who it's for",
        text: "Legal practitioners and litigants requiring a qualified, independent forensic expert to provide opinion evidence in court or formal hearings."
      },
      {
        heading: "Our standard",
        text: "Reports and testimony are prepared in accordance with the duties owed to the court — independent, objective and confined to matters within our area of expertise."
      }
    ]
  }

};


/* ------------------------------------------------------------
   2. MOBILE NAV TOGGLE
   ------------------------------------------------------------ */
function initNav(){
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  const overlay = document.querySelector('.nav-overlay');
  if(!toggle || !nav) return;

  function closeNav(){
    nav.classList.remove('open');
    overlay && overlay.classList.remove('open');
    document.body.classList.remove('modal-open');
  }

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    overlay && overlay.classList.toggle('open');
    document.body.classList.toggle('modal-open');
  });

  overlay && overlay.addEventListener('click', closeNav);

  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
}


/* ------------------------------------------------------------
   3. SCROLL-REVEAL ANIMATIONS
   ------------------------------------------------------------ */
function initReveal(){
  const items = document.querySelectorAll('.reveal, .reveal-stagger');
  if(!('IntersectionObserver' in window) || items.length === 0){
    items.forEach(el => el.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  items.forEach(el => observer.observe(el));
}


/* ------------------------------------------------------------
   4. SERVICE MODAL (popup "case file" boxes)
   ------------------------------------------------------------ */
function buildModalMarkup(){
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.id = 'serviceModal';
  overlay.innerHTML = `
    <div class="modal-box" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <div class="modal-header">
        <div class="modal-stamp">CONFIDENTIAL</div>
        <button class="modal-close" aria-label="Close">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <div class="modal-header-inner">
          <div class="modal-case-no" id="modalCaseNo"></div>
          <h2 id="modalTitle"></h2>
        </div>
      </div>
      <div class="modal-body" id="modalBody"></div>
    </div>
  `;
  document.body.appendChild(overlay);
  return overlay;
}

function openServiceModal(key){
  const data = SERVICE_CONTENT[key];
  if(!data) return;

  let overlay = document.getElementById('serviceModal');
  if(!overlay) overlay = buildModalMarkup();

  overlay.querySelector('#modalCaseNo').textContent = data.caseNo;
  overlay.querySelector('#modalTitle').textContent = data.title;

  const body = overlay.querySelector('#modalBody');
  let html = `<div class="gold-line"></div><p>${data.intro}</p>`;

  data.sections.forEach(sec => {
    html += `<h3>${sec.heading}</h3>`;
    if(sec.text) html += `<p>${sec.text}</p>`;
    if(sec.list){
      html += '<ul>' + sec.list.map(li => `<li>${li}</li>`).join('') + '</ul>';
    }
  });

  html += `
    <div class="modal-footer-cta">
      <p>Have a case that needs this service?</p>
      <a href="contact.html" class="btn btn-primary">Request Consultation</a>
    </div>
  `;

  body.innerHTML = html;
  body.scrollTop = 0;

  overlay.classList.add('active');
  document.body.classList.add('modal-open');

  // attach close handlers each time (overlay rebuilt only once, but be safe)
  const closeBtn = overlay.querySelector('.modal-close');
  closeBtn.onclick = closeServiceModal;
  overlay.onclick = (e) => { if(e.target === overlay) closeServiceModal(); };
}

function closeServiceModal(){
  const overlay = document.getElementById('serviceModal');
  if(!overlay) return;
  overlay.classList.remove('active');
  document.body.classList.remove('modal-open');
}

function initServiceCards(){
  document.querySelectorAll('[data-service]').forEach(card => {
    card.addEventListener('click', () => openServiceModal(card.dataset.service));
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.addEventListener('keydown', (e) => {
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        openServiceModal(card.dataset.service);
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') closeServiceModal();
  });
}


/* ------------------------------------------------------------
   5. FAQ ACCORDION
   ------------------------------------------------------------ */
function initFAQ(){
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    if(!q || !a) return;
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(other => {
        if(other !== item){
          other.classList.remove('open');
          other.querySelector('.faq-a').style.maxHeight = null;
        }
      });
      if(isOpen){
        item.classList.remove('open');
        a.style.maxHeight = null;
      } else {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });
}


/* ------------------------------------------------------------
   6. CONTACT FORM (front-end only — shows confirmation)
   ------------------------------------------------------------ */
function initContactForm(){
  const form = document.querySelector('.contact-form');
  if(!form) return;
  const success = document.querySelector('.form-success');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(success){
      success.classList.add('show');
      success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    form.reset();
  });
}


/* ------------------------------------------------------------
   7. HEADER SHADOW ON SCROLL
   ------------------------------------------------------------ */
function initHeaderShadow(){
  const header = document.querySelector('header');
  if(!header) return;
  window.addEventListener('scroll', () => {
    if(window.scrollY > 10){
      header.style.boxShadow = '0 4px 18px rgba(6,20,46,.08)';
    } else {
      header.style.boxShadow = 'none';
    }
  });
}


/* ------------------------------------------------------------
   INIT
   ------------------------------------------------------------ */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initReveal();
  initServiceCards();
  initFAQ();
  initContactForm();
  initHeaderShadow();
});
