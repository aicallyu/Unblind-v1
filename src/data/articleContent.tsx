import { ReactNode } from 'react'

// Types for article content
export interface HighlightBoxData {
  type: 'highlight'
  content: ReactNode
  copyText: string
  shareText: string
}

export interface ContentImageData {
  type: 'image'
  src: string
  alt: string
  caption: string
}

export interface TableData {
  type: 'table'
  headers: string[]
  rows: string[][]
}

export interface ParagraphData {
  type: 'paragraph'
  content: ReactNode
}

export interface HeadingData {
  type: 'heading'
  text: string
}

export interface ListData {
  type: 'list'
  items: ReactNode[]
}

export interface SilentOculusSectionData {
  type: 'silent-oculus'
}

export interface HorizontalRuleData {
  type: 'hr'
}

export type ContentBlock =
  | HighlightBoxData
  | ContentImageData
  | TableData
  | ParagraphData
  | HeadingData
  | ListData
  | SilentOculusSectionData
  | HorizontalRuleData

export interface ArticleContent {
  slug: string
  content: ContentBlock[]
}

// Article 001: The Decision Was Made Before You Entered the Room
const article001: ArticleContent = {
  slug: '001-the-decision-was-made',
  content: [
    {
      type: 'paragraph',
      content: 'You prepared for weeks. You rehearsed your opening. You refined your slides until they gleamed. You walked into that boardroom convinced the next hour would determine everything.',
    },
    {
      type: 'paragraph',
      content: "It didn't.",
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>The decision was already made.</strong> Not consciously. Not maliciously. But irrevocably. Before you opened your mouth, before you shook hands, before you even crossed the threshold, the outcome had crystallized in the minds of the people who held your fate.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: 'This is not pessimism. This is physics. The physics of perception, power, and the invisible architecture that shapes every high-stakes interaction you will ever have.',
    },
    {
      type: 'heading',
      text: 'The Mismatch: Where Reality Breaks from Perception',
    },
    {
      type: 'paragraph',
      content: (
        <>
          Here is the uncomfortable truth that nobody teaches in business school: There are two versions of every meeting. The one you experience. And the one everyone else experiences.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          The gap between these two realities is what we call <strong>The Mismatch</strong>.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: "The Mismatch operates in the space between your intentions and their interpretations. You believe you projected confidence. They registered anxiety. You thought you demonstrated expertise. They perceived arrogance. You aimed for warmth. They felt manipulation.",
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/dAwJFAO6Mjc.webp',
      alt: 'Two business professionals face off in a dark meeting room',
      caption: '// The gap between intention and perception shapes everything',
    },
    {
      type: 'paragraph',
      content: (
        <>
          This is not about being misunderstood. This is about a fundamental communication failure that occurs at speeds your conscious mind cannot process. Research in social cognition reveals that humans form lasting impressions within <strong>seven seconds</strong> of meeting someone. Seven seconds. That is roughly the time it takes to say your name and title.
        </>
      ),
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>Everything that follows, every brilliant argument, every compelling data point, every persuasive appeal, filters through that initial judgment.</strong> Not replaces it. Filters through it.
        </>
      ),
      copyText: 'Everything that follows, every brilliant argument, every compelling data point, every persuasive appeal, filters through that initial judgment. Not replaces it. Filters through it.',
      shareText: 'Everything that follows, every brilliant argument, every compelling data point, every persuasive appeal, filters through that initial judgment. Not replaces it. Filters through it.',
    },
    {
      type: 'paragraph',
      content: 'The Mismatch costs you deals. It costs you promotions. It costs you the transformation you believe you deserve.',
    },
    {
      type: 'heading',
      text: 'The Decision Before the Decision',
    },
    {
      type: 'paragraph',
      content: 'Seth Godin calls it "the decision before the decision." The invisible box that constrains all thinking before deliberation even begins.',
    },
    {
      type: 'paragraph',
      content: 'In every negotiation, every pitch, every interview, a meta-decision has already occurred:',
    },
    {
      type: 'table',
      headers: ['Visible Decision', 'Hidden Pre-Decision'],
      rows: [
        ['"Should we fund this startup?"', '"Is this founder one of us?"'],
        ['"Is this candidate qualified?"', '"Do I trust this person?"'],
        ['"Should we accept these terms?"', '"Does this feel like a win?"'],
        ['"Is this proposal viable?"', '"Do I want to work with them?"'],
      ],
    },
    {
      type: 'paragraph',
      content: <strong>The hidden column drives everything. The visible column provides justification.</strong>,
    },
    {
      type: 'paragraph',
      content: 'This is not cynicism. This is how human cognition operates under uncertainty. When stakes are high and information is incomplete, the brain defaults to pattern recognition, tribal signals, and emotional resonance. Logic arrives later, often as rationalization.',
    },
    {
      type: 'paragraph',
      content: 'Understanding this distinction separates professionals who consistently win from those who consistently wonder why they lost.',
    },
    {
      type: 'heading',
      text: 'The Extended Truth Matrix: Reading What Was Never Said',
    },
    {
      type: 'paragraph',
      content: (
        <>
          If The Mismatch describes the problem, <strong>The Extended Truth Matrix</strong> offers the map.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: 'Every human interaction generates four simultaneous data streams:',
    },
    {
      type: 'paragraph',
      content: <><strong>Verbal Content:</strong> The words spoken. The explicit message. What gets transcribed.</>,
    },
    {
      type: 'paragraph',
      content: <><strong>Paralinguistic Signals:</strong> Tone, pace, pitch, volume. The music beneath the lyrics.</>,
    },
    {
      type: 'paragraph',
      content: <><strong>Micro-Expressions:</strong> Involuntary facial movements lasting 1/25th of a second. The truth that leaks through the mask.</>,
    },
    {
      type: 'paragraph',
      content: <><strong>Systemic Positioning:</strong> Who speaks first. Who sits where. Who interrupts whom. The power geometry of the room.</>,
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/QFIm0dP7nCN.webp',
      alt: 'Extreme close-up of a human eye reflecting a boardroom',
      caption: '// Micro-expressions reveal what words conceal',
    },
    {
      type: 'paragraph',
      content: "Most professionals optimize obsessively for the first stream and remain blind to the other three. They craft perfect arguments while missing that the CFO's jaw tightened imperceptibly at their third slide. They polish their delivery while ignoring that they were seated at the far end of the table, a positioning that broadcast their status before introductions began.",
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>The Extended Truth Matrix demands attention to all four streams simultaneously.</strong> Not sequentially. Simultaneously. This is where human capacity hits its limits.
        </>
      ),
      copyText: 'The Extended Truth Matrix demands attention to all four streams simultaneously. Not sequentially. Simultaneously. This is where human capacity hits its limits.',
      shareText: 'The Extended Truth Matrix demands attention to all four streams simultaneously. Not sequentially. Simultaneously. This is where human capacity hits its limits.',
    },
    {
      type: 'paragraph',
      content: 'The conscious mind can track perhaps one stream effectively. The unconscious absorbs fragments of the others but cannot synthesize them into actionable intelligence in real time.',
    },
    {
      type: 'paragraph',
      content: 'You are, in effect, fighting blind. Responding to 25% of the information that determines your outcome.',
    },
    {
      type: 'heading',
      text: 'The Architecture of Invisible Power',
    },
    {
      type: 'paragraph',
      content: 'Beyond individual perception lies something larger: The systemic forces that pre-shape outcomes before any participant arrives.',
    },
    {
      type: 'paragraph',
      content: "Consider the meeting you attended last week. Who set the agenda? Who chose the time? Who determined who would be present and, critically, who would be absent? Who selected the room, the seating arrangement, the duration?",
    },
    {
      type: 'paragraph',
      content: 'These decisions, made hours or days before deliberation, established the boundaries of what could be decided. They determined what options would be considered legitimate. They pre-selected which voices would carry weight.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/5y6cPsg2e5m.webp',
      alt: 'Overhead view of a corporate boardroom with hierarchical seating',
      caption: '// The architecture of the room is the architecture of power',
    },
    {
      type: 'paragraph',
      content: "This is not conspiracy. This is architecture. Every organization, every negotiation, every human system operates within structures that advantage certain outcomes over others. The professional who ignores this architecture optimizes within a game whose rules were written to ensure their loss.",
    },
    {
      type: 'paragraph',
      content: <strong>Recognizing the architecture does not guarantee victory. But failing to recognize it guarantees defeat.</strong>,
    },
    {
      type: 'heading',
      text: 'The Uncomfortable Implication',
    },
    {
      type: 'paragraph',
      content: 'If decisions form before deliberation begins, what is the point of deliberation?',
    },
    {
      type: 'paragraph',
      content: 'This is the wrong question.',
    },
    {
      type: 'paragraph',
      content: <><strong>How do you shape the conditions that shape the decision?</strong></>,
    },
    {
      type: 'paragraph',
      content: 'This requires a fundamental shift in where you invest your attention:',
    },
    {
      type: 'paragraph',
      content: <><strong>Before the room:</strong> Understanding the power dynamics, the pre-existing relationships, the unstated agendas, the tribal affiliations that will filter everything you say.</>,
    },
    {
      type: 'paragraph',
      content: <><strong>Upon entry:</strong> Managing the micro-moments that form first impressions. Your posture, your eye contact, your spatial positioning, the energy you project before language begins.</>,
    },
    {
      type: 'paragraph',
      content: <><strong>During exchange:</strong> Reading the Extended Truth Matrix in real time. Detecting The Mismatch as it forms. Adjusting not just your words but your entire presence based on signals most professionals never perceive.</>,
    },
    {
      type: 'paragraph',
      content: <><strong>Beyond the room:</strong> Recognizing that the meeting is one node in a larger system. The decision will be discussed after you leave. Shaped by conversations you will never witness. Influenced by people who were never present.</>,
    },
    {
      type: 'paragraph',
      content: 'Mastery requires operating across all four phases. Simultaneously. Continuously.',
    },
    {
      type: 'heading',
      text: 'Where Human Limits Meet Machine Perception',
    },
    {
      type: 'paragraph',
      content: "Here is where things get interesting.",
    },
    {
      type: 'paragraph',
      content: 'The human brain, for all its remarkable capability, cannot process the Extended Truth Matrix at the speed and scale required for consistent mastery. You can train yourself to catch more signals. You can develop sharper intuition. But you will always operate with incomplete information, filtered through your own biases and blind spots.',
    },
    {
      type: 'paragraph',
      content: 'This is precisely the gap that artificial intelligence was built to close.',
    },
    {
      type: 'paragraph',
      content: (
        <>
          At <strong>Onioko</strong>, we are building infrastructure that extends human perception into the spaces where decisions actually form. Not replacing judgment. Augmenting it. Providing the pattern recognition, the micro-expression analysis, the systemic mapping that transforms how professionals prepare for, navigate, and influence high-stakes interactions.
        </>
      ),
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/PIQyfShs7KX.webp',
      alt: 'Business professional stands before city lights and holographic data',
      caption: '// AI-augmented perception: seeing what was always invisible',
    },
    {
      type: 'paragraph',
      content: 'This is not about giving you better slides. This is about giving you vision into the 75% of the interaction you currently cannot see.',
    },
    {
      type: 'heading',
      text: 'The Point of No Return',
    },
    {
      type: 'paragraph',
      content: 'Once you understand that decisions form before deliberation begins, you cannot unlearn it. You will notice The Mismatch everywhere. In every meeting, every negotiation, every conversation that matters.',
    },
    {
      type: 'paragraph',
      content: "You will see the micro-expression that contradicts the verbal agreement. You will feel the power geometry of every room you enter. You will recognize the pre-decisions that constrain what can be discussed.",
    },
    {
      type: 'highlight',
      content: <strong>And you will find it intolerable to operate without this awareness.</strong>,
      copyText: 'And you will find it intolerable to operate without this awareness.',
      shareText: 'And you will find it intolerable to operate without this awareness.',
    },
    {
      type: 'paragraph',
      content: 'This is not an upgrade to your professional toolkit. This is an evolution in how you perceive and navigate the world of high-stakes human interaction.',
    },
    {
      type: 'paragraph',
      content: <strong>The decision was made before you entered the room.</strong>,
    },
    {
      type: 'paragraph',
      content: <strong>The question is whether you will learn to make it yours.</strong>,
    },
  ],
}

// Article 002: Why You Cannot See What You Cannot See
const article002: ArticleContent = {
  slug: '002-why-you-cannot-see',
  content: [
    {
      type: 'paragraph',
      content: "You believe you see reality. You don't.",
    },
    {
      type: 'paragraph',
      content: (
        <>
          What you perceive is a carefully constructed simulation, assembled by a brain that discards far more than it keeps. The gaps in your vision are not accidents. They are architecture. And that architecture is running silently beneath every decision you make, every risk you assess, every opportunity you evaluate.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          This is <strong>The Structural Blind Spot</strong>. Not missing information. Not ignorance. Not a failure of attention. Something far more dangerous: An active filtration system that removes critical data before it ever reaches your conscious awareness.
        </>
      ),
    },
    {
      type: 'highlight',
      content: <strong>You cannot see what you cannot see. And you cannot see that you cannot see it.</strong>,
      copyText: 'You cannot see what you cannot see. And you cannot see that you cannot see it.',
      shareText: 'You cannot see what you cannot see. And you cannot see that you cannot see it.',
    },
    {
      type: 'heading',
      text: 'The Illusion of Complete Perception',
    },
    {
      type: 'paragraph',
      content: "Your eyes are open. The room is bright. You feel certain you're taking in everything around you.",
    },
    {
      type: 'paragraph',
      content: 'You are not.',
    },
    {
      type: 'paragraph',
      content: "Right now, electromagnetic radiation is passing through your body: Radio waves, gamma rays, X-rays, microwaves. Visible light represents only one ten-trillionth of this spectrum. Everything else? Invisible. Not because it isn't there, but because you have no biological receptors to detect it.",
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/rSRFu8nBEkv.webp',
      alt: 'Silhouette stands unaware in beams of unseen light',
      caption: '// Human perception captures only a sliver of reality',
    },
    {
      type: 'paragraph',
      content: 'This is not a metaphor. This is the literal condition of human perception.',
    },
    {
      type: 'paragraph',
      content: "Your acoustic range narrows with age. Your peripheral vision is a blur you've learned to ignore. Your brain fills in gaps during eye movements so seamlessly that you never notice the moments of functional blindness occurring dozens of times per minute.",
    },
    {
      type: 'paragraph',
      content: 'The system works so well that it creates what researchers call "the perfect illusion of continuous, correct and super-detailed visual input." You believe you see everything. You see almost nothing.',
    },
    {
      type: 'highlight',
      content: <strong>And here is the critical failure: Your confidence in your perception is inversely proportional to its accuracy.</strong>,
      copyText: 'Your confidence in your perception is inversely proportional to its accuracy.',
      shareText: 'Your confidence in your perception is inversely proportional to its accuracy.',
    },
    {
      type: 'heading',
      text: 'The Architecture of Invisibility',
    },
    {
      type: 'paragraph',
      content: 'Blind spots are not passive. They are structural.',
    },
    {
      type: 'paragraph',
      content: "Consider what this means: Your brain is not simply failing to notice things. It is actively constructing a version of reality that excludes them. The filtration happens before conscious processing begins. By the time you're \"thinking,\" the data has already been curated.",
    },
    {
      type: 'paragraph',
      content: (
        <>
          This is <strong>The Perception Layer</strong>: The invisible infrastructure between raw reality and conscious experience.
        </>
      ),
    },
    {
      type: 'table',
      headers: ['What You Think Happens', 'What Actually Happens'],
      rows: [
        ['You observe reality directly', 'Your brain constructs a model of reality'],
        ['Gaps in knowledge are identifiable', 'Structural gaps are invisible by design'],
        ['More attention equals more perception', 'Attention operates within pre-set filters'],
        ['You can choose what to notice', "The choice happens before you're aware"],
      ],
    },
    {
      type: 'paragraph',
      content: <strong>The implications are severe.</strong>,
    },
    {
      type: 'paragraph',
      content: 'In low-stakes environments, this architecture serves you. It prevents cognitive overload. It allows efficient processing. Research shows humans can handle only about seven units of meaningful information at a time. Without aggressive filtration, you would be paralyzed by data.',
    },
    {
      type: 'paragraph',
      content: 'But in high-stakes environments? The same system that protects you becomes the system that blinds you.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/8FgMrMVdw5G.webp',
      alt: 'Extreme close-up of a human eye with mechanical filters',
      caption: '// Your perception filters were calibrated for survival, not strategy',
    },
    {
      type: 'heading',
      text: 'The Danger Zone: When Filters Fail Forward',
    },
    {
      type: 'paragraph',
      content: 'High-stakes decisions operate at the edge of your perceptual capacity.',
    },
    {
      type: 'paragraph',
      content: "You're in the room. The pressure is real. Information is flowing faster than you can process. And your brain, doing exactly what it's designed to do, begins cutting. Simplifying. Filtering.",
    },
    {
      type: 'paragraph',
      content: <><strong>Your filters were calibrated for survival, not strategy.</strong></>,
    },
    {
      type: 'paragraph',
      content: 'They were built to notice predators, not patterns. To detect immediate threats, not systemic risks. To process physical danger, not organizational complexity.',
    },
    {
      type: 'paragraph',
      content: 'What gets filtered out in critical moments:',
    },
    {
      type: 'list',
      items: [
        <><strong>Weak signals</strong>: Early indicators that haven't yet become obvious problems</>,
        <><strong>Contradictory data</strong>: Information that conflicts with existing mental models</>,
        <><strong>Peripheral patterns</strong>: Relationships and connections outside your focal attention</>,
        <><strong>Emotional undertones</strong>: The unspoken dynamics shaping room behavior</>,
        <><strong>Structural context</strong>: The systems and incentives driving visible actions</>,
      ],
    },
    {
      type: 'paragraph',
      content: "You don't notice these things being removed. That's the point. The filtration is seamless. The confidence remains intact. You walk out of the room believing you understood what happened.",
    },
    {
      type: 'paragraph',
      content: 'You understood what your filters allowed you to understand. Nothing more.',
    },
    {
      type: 'heading',
      text: 'The Metacognitive Trap',
    },
    {
      type: 'paragraph',
      content: "Here is where it gets dangerous.",
    },
    {
      type: 'paragraph',
      content: 'You cannot think your way out of a structural blind spot. The very apparatus you would use to detect the gap is the apparatus creating it.',
    },
    {
      type: 'paragraph',
      content: (
        <>
          This is <strong>The Metacognitive Trap</strong>: The belief that awareness of blind spots eliminates them.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: "It doesn't.",
    },
    {
      type: 'paragraph',
      content: "Knowing that blind spots exist does not reveal their contents. You can read this entire article, nod in agreement, and walk away with your filters completely intact. Understanding the architecture of invisibility does not dismantle it.",
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/derRxsm5KFZ.webp',
      alt: 'Lone figure in a boardroom only sees one reality layer',
      caption: "// Understanding the trap doesn't free you from it",
    },
    {
      type: 'paragraph',
      content: "Why? Because metacognition operates on the same perceptual layer. You're using filtered tools to search for what the filter removed. It's like trying to see ultraviolet light by squinting harder. The biological limitation is structural, not attentional.",
    },
    {
      type: 'paragraph',
      content: 'This creates a profound vulnerability in high-performing professionals:',
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>The Competence Paradox:</strong> The more expertise you develop in a domain, the more refined your filters become. You learn to ignore noise. You build pattern recognition. You develop intuition. And with each layer of mastery, your blind spots become more sophisticated, more invisible, more dangerous.
        </>
      ),
      copyText: 'The Competence Paradox: The more expertise you develop in a domain, the more refined your filters become. With each layer of mastery, your blind spots become more sophisticated, more invisible, more dangerous.',
      shareText: 'The Competence Paradox: The more expertise you develop in a domain, the more refined your filters become. With each layer of mastery, your blind spots become more sophisticated, more invisible, more dangerous.',
    },
    {
      type: 'paragraph',
      content: <strong>Your greatest strength becomes the architecture of your blindness.</strong>,
    },
    {
      type: 'heading',
      text: 'The Cost of Invisible Infrastructure',
    },
    {
      type: 'paragraph',
      content: "Consider the decisions you've made in the last year.",
    },
    {
      type: 'paragraph',
      content: 'The strategic directions chosen. The opportunities evaluated. The risks assessed. The people trusted or doubted. Each one filtered through perceptual architecture you did not choose and cannot directly observe.',
    },
    {
      type: 'paragraph',
      content: 'What did you miss?',
    },
    {
      type: 'paragraph',
      content: "You don't know. You can't know. That's the definition of a structural blind spot.",
    },
    {
      type: 'paragraph',
      content: 'But the costs are real:',
    },
    {
      type: 'list',
      items: [
        <><strong>Strategic misfires</strong>: Pursuing paths that looked clear because warning signals were filtered</>,
        <><strong>Talent failures</strong>: Misjudging people because emotional data was below the perception threshold</>,
        <><strong>Systemic risks</strong>: Missing organizational dysfunction because it existed in peripheral awareness</>,
        <><strong>Innovation blindness</strong>: Failing to see opportunities that didn't match existing pattern libraries</>,
      ],
    },
    {
      type: 'paragraph',
      content: "These are not failures of intelligence. They are failures of perception. And they happen to the smartest people in the room, often because they're the smartest people in the room.",
    },
    {
      type: 'heading',
      text: 'Beyond Human Filters',
    },
    {
      type: 'paragraph',
      content: 'The question is not whether to trust your perception. You have no choice. Perception is the only interface you have with reality.',
    },
    {
      type: 'paragraph',
      content: <><strong>What exists beyond your filters that matters?</strong></>,
    },
    {
      type: 'paragraph',
      content: 'This is where the problem transforms into possibility.',
    },
    {
      type: 'paragraph',
      content: "If human perception is structurally limited, the answer is not to try harder with the same apparatus. The answer is to build systems that perceive what humans cannot. To create infrastructure that operates outside the biological constraints. To develop tools that don't share your blind spots because they don't share your architecture.",
    },
    {
      type: 'paragraph',
      content: "This is the work happening at the edge of AI development. Not artificial intelligence as a faster human, but as a fundamentally different perceptual system. One that can process the signals you cannot detect. One that can hold the complexity you must simplify. One that can see into your structural blind spots and report back.",
    },
    {
      type: 'paragraph',
      content: 'Not replacing human judgment. Extending the perception layer that feeds it.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/5V_qnQR96xj.webp',
      alt: 'Person reflection is featureless in ornate mirror',
      caption: '// The mirror shows what you allow yourself to see',
    },
    {
      type: 'heading',
      text: 'The Uncomfortable Truth',
    },
    {
      type: 'paragraph',
      content: 'You will finish reading this and return to seeing the world through filtered architecture.',
    },
    {
      type: 'paragraph',
      content: 'That will not change. Your biology is not updating based on insight. The structural blind spots remain.',
    },
    {
      type: 'paragraph',
      content: <><strong>Your relationship to certainty.</strong></>,
    },
    {
      type: 'paragraph',
      content: "The most dangerous belief in high-stakes environments is confident completeness. The sense that you've seen enough, understood enough, considered enough. That the room held no secrets from your perception.",
    },
    {
      type: 'paragraph',
      content: 'It always does.',
    },
    {
      type: 'paragraph',
      content: "The path forward is not perfect vision. It's building systems and relationships and tools that extend beyond your limits. It's recognizing that the most critical information in any situation might be exactly the information your filters are designed to remove.",
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>Structural invisibility is the most dangerous kind. Because it doesn't feel like missing something. It feels like seeing everything.</strong>
        </>
      ),
      copyText: "Structural invisibility is the most dangerous kind. Because it doesn't feel like missing something. It feels like seeing everything.",
      shareText: "Structural invisibility is the most dangerous kind. Because it doesn't feel like missing something. It feels like seeing everything.",
    },
    {
      type: 'paragraph',
      content: "And that feeling? That's the filter working perfectly.",
    },
  ],
}

// Article 003: Optimization Is Usually Too Late
const article003: ArticleContent = {
  slug: '003-optimization-too-late',
  content: [
    {
      type: 'paragraph',
      content: 'This is the silent architecture of most organizational failure. Not incompetence. Not lack of effort. A fundamental misalignment between where errors originate and where corrections are applied.',
    },
    {
      type: 'paragraph',
      content: 'You optimized the wrong thing. And by the time you realized it, the damage was already structural.',
    },
    {
      type: 'heading',
      text: 'The Downstream Illusion',
    },
    {
      type: 'paragraph',
      content: 'Every organization has a favorite place to intervene: The end of the chain.',
    },
    {
      type: 'paragraph',
      content: 'Sales numbers dropping? Retrain the sales team. Customer complaints rising? Improve support scripts. Conversion rates falling? Redesign the landing page.',
    },
    {
      type: 'paragraph',
      content: 'These feel productive. They are measurable. They create the satisfying sensation of action.',
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>But here is the uncomfortable truth:</strong> By the time a problem becomes visible in your metrics, it has already metastasized through your entire system. You are not treating the disease. You are managing symptoms while the source continues to spread.
        </>
      ),
      copyText: 'By the time a problem becomes visible in your metrics, it has already metastasized through your entire system. You are not treating the disease. You are managing symptoms while the source continues to spread.',
      shareText: 'By the time a problem becomes visible in your metrics, it has already metastasized through your entire system.',
    },
    {
      type: 'paragraph',
      content: (
        <>
          This is <strong>The Downstream Illusion</strong>: The belief that optimization at the point of measurement equals optimization at the point of origin.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: 'It does not.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/JYv-IGlvyyt.webp',
      alt: 'A dramatic pipeline system splitting in two at dusk',
      caption: '// The disconnect between upstream problems and downstream solutions',
    },
    {
      type: 'heading',
      text: 'Where Errors Actually Live',
    },
    {
      type: 'paragraph',
      content: 'Consider the anatomy of a typical business decision:',
    },
    {
      type: 'table',
      headers: ['Stage', 'What Happens', 'Visibility'],
      rows: [
        ['Perception', 'How the situation is interpreted', 'Almost invisible'],
        ['Framing', 'How options are constructed', 'Low visibility'],
        ['Analysis', 'How data is processed', 'Moderate visibility'],
        ['Decision', 'The choice itself', 'Visible'],
        ['Action', 'Implementation', 'Highly visible'],
        ['Outcome', 'Results and metrics', 'Maximum visibility'],
      ],
    },
    {
      type: 'paragraph',
      content: 'Organizations obsess over the bottom three rows. They scrutinize actions. They measure outcomes. They optimize decisions.',
    },
    {
      type: 'paragraph',
      content: 'But the error happened in the top three rows. In perception. In framing. In the invisible architecture of how the problem was understood before anyone tried to solve it.',
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>By the time you reach the optimization phase, the critical failure has already occurred.</strong> You are polishing the output of a broken input. You are perfecting the execution of the wrong strategy.
        </>
      ),
      copyText: 'By the time you reach the optimization phase, the critical failure has already occurred. You are polishing the output of a broken input. You are perfecting the execution of the wrong strategy.',
      shareText: 'You are polishing the output of a broken input. You are perfecting the execution of the wrong strategy.',
    },
    {
      type: 'heading',
      text: 'The Upstream Blindness',
    },
    {
      type: 'paragraph',
      content: 'Why do intelligent people consistently optimize downstream when the problem lives upstream?',
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Visibility bias.</strong> Upstream errors are structurally invisible. You cannot easily measure perception. You cannot quantify framing. The metrics that drive organizational attention live at the end of the chain, not the beginning.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Action addiction.</strong> Downstream interventions feel like progress. They generate activity. They produce deliverables. Upstream work feels philosophical, abstract, slow. Organizations reward visible motion, even when that motion is therapeutically useless.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Accountability theater.</strong> When something fails, someone must be blamed. Downstream actors are visible. Upstream architects are often anonymous. The salesperson who missed quota is easier to identify than the strategist who framed the market incorrectly.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Temporal distance.</strong> Upstream errors and downstream consequences are separated by time. The perception failure happened six months ago. The metric failure is happening now. The connection is invisible unless you deliberately trace it.
        </>
      ),
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/NHnB0Syvy0P.webp',
      alt: 'A person reaching across a canyon of broken bridges',
      caption: '// Failed connections and the dangers of unseen upstream errors',
    },
    {
      type: 'heading',
      text: 'The Cascade Effect',
    },
    {
      type: 'paragraph',
      content: "Every upstream error creates a cascade of downstream complications. And here is what makes this particularly dangerous: Each downstream stage adds its own logic, its own optimization, its own justification.",
    },
    {
      type: 'paragraph',
      content: 'By the time the original error reaches the output, it has been rationalized at every step. The final product looks coherent. It appears optimized. It seems like the result of careful deliberation.',
    },
    {
      type: 'highlight',
      content: <strong>But it is merely the most polished version of a fundamentally flawed premise.</strong>,
      copyText: 'It is merely the most polished version of a fundamentally flawed premise.',
      shareText: 'It is merely the most polished version of a fundamentally flawed premise.',
    },
    {
      type: 'paragraph',
      content: 'Consider a company launching a new product:',
    },
    {
      type: 'paragraph',
      content: 'The market research team frames the customer problem based on available data. This framing contains subtle assumptions about what customers actually want. These assumptions are never questioned because they appear objective.',
    },
    {
      type: 'paragraph',
      content: 'The product team builds features based on this framing. They optimize functionality within the given parameters. They do excellent work within a potentially flawed scope.',
    },
    {
      type: 'paragraph',
      content: 'The marketing team crafts messaging based on the product features. They optimize conversion within the positioning they inherited. Their campaigns are sophisticated expressions of upstream assumptions.',
    },
    {
      type: 'paragraph',
      content: 'The sales team executes based on the marketing materials. They optimize their techniques within the narrative they received. Their performance is measured against targets derived from the original framing.',
    },
    {
      type: 'paragraph',
      content: 'When the product underperforms, where does the organization look? Sales execution. Marketing effectiveness. Product features.',
    },
    {
      type: 'paragraph',
      content: 'Almost never at the original perception of the customer problem. Almost never at the framing that shaped every subsequent decision.',
    },
    {
      type: 'paragraph',
      content: <strong>The problem was upstream. The solution was downstream. They never met.</strong>,
    },
    {
      type: 'heading',
      text: 'The Optimization Trap',
    },
    {
      type: 'paragraph',
      content: 'Here is the cruel irony: The better you become at downstream optimization, the more you entrench upstream errors.',
    },
    {
      type: 'paragraph',
      content: 'Each optimization cycle reinforces the existing framing. Each improvement within the current parameters makes the parameters themselves more invisible. The system becomes more efficient at producing the wrong outcomes.',
    },
    {
      type: 'highlight',
      content: <><strong>This is The Optimization Trap:</strong> Excellence in execution masking failure in conception.</>,
      copyText: 'The Optimization Trap: Excellence in execution masking failure in conception.',
      shareText: 'The Optimization Trap: Excellence in execution masking failure in conception.',
    },
    {
      type: 'paragraph',
      content: 'Organizations can spend years perfecting processes that should never have existed. They can achieve operational excellence within strategic frameworks that are fundamentally misaligned with reality.',
    },
    {
      type: 'paragraph',
      content: 'The metrics improve. The dashboards turn green. The quarterly reports look strong.',
    },
    {
      type: 'paragraph',
      content: 'And the foundational error continues to compound, invisible and unchallenged.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/nVcbd6dfCc7.webp',
      alt: 'A shattered hourglass spilling golden sand turning to smoke',
      caption: '// Irreversible loss and the consequences of acting too late',
    },
    {
      type: 'heading',
      text: 'Recognizing the Pattern',
    },
    {
      type: 'paragraph',
      content: 'How do you know when you are optimizing too late? Several signals reveal the pattern:',
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Recurring problems.</strong> You solve the same issue repeatedly, in slightly different forms. Each solution works temporarily. The underlying pattern persists. This suggests you are treating symptoms while the source remains active.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Diminishing returns.</strong> Each optimization cycle produces smaller improvements. You have extracted most of the efficiency available within your current framing. Further gains require reframing, not refinement.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Surprising failures.</strong> Outcomes that should work based on your optimization logic consistently underperform. The gap between expected and actual results suggests your model of the situation is flawed upstream.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Competitor divergence.</strong> Others in your space achieve results you cannot replicate through optimization. They may be operating from a different upstream framing that makes their downstream execution fundamentally different.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Internal friction.</strong> Teams resist changes that seem logical. They sense something is wrong but cannot articulate it. Often, this intuition is detecting upstream misalignment that downstream metrics cannot capture.
        </>
      ),
    },
    {
      type: 'heading',
      text: 'The Upstream Discipline',
    },
    {
      type: 'paragraph',
      content: 'Addressing upstream errors requires a different discipline than downstream optimization:',
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Perception audits.</strong> Regularly examine the assumptions embedded in how you perceive situations. What are you taking as given that could be questioned? What framing did you inherit without examination?
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Origin tracing.</strong> When problems emerge, trace them backward through the chain. Not to assign blame, but to identify where the trajectory first diverged from reality. The visible failure is rarely the actual failure.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Framing diversity.</strong> Deliberately construct alternative interpretations of the same situation. If you can only see one way to frame a problem, you are probably trapped in an upstream error you cannot detect.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: (
        <>
          <strong>Early intervention points.</strong> Build organizational attention into the upstream stages. Create visibility for perception and framing, not just action and outcome. What gets measured gets managed, even at the source.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: 'The challenge is cultural as much as procedural. Organizations must learn to value invisible upstream work as highly as visible downstream execution. They must reward the prevention of errors, not just the correction of symptoms.',
    },
    {
      type: 'heading',
      text: 'The Structural Reality',
    },
    {
      type: 'paragraph',
      content: 'This pattern extends beyond organizations into individual decision making, into relationships, into how societies address complex problems.',
    },
    {
      type: 'paragraph',
      content: 'We consistently optimize where we can see, not where we should act. We perfect the execution of flawed strategies. We achieve excellence within broken frameworks.',
    },
    {
      type: 'highlight',
      content: <strong>The problem was upstream. The solution was downstream. They never met.</strong>,
      copyText: 'The problem was upstream. The solution was downstream. They never met.',
      shareText: 'The problem was upstream. The solution was downstream. They never met.',
    },
    {
      type: 'paragraph',
      content: 'This is not a failure of effort. It is a failure of architecture. The structure of how we allocate attention systematically directs resources away from where they would be most effective.',
    },
    {
      type: 'paragraph',
      content: 'Understanding this gap is the first step toward closing it.',
    },
    {
      type: 'paragraph',
      content: 'The question is not whether you are optimizing. You almost certainly are. The question is whether you are optimizing the right part of the chain.',
    },
    {
      type: 'paragraph',
      content: <strong>By the time most people ask that question, the answer has already been determined.</strong>,
    },
    {
      type: 'paragraph',
      content: <strong>Upstream.</strong>,
    },
  ],
}

// Article 004: AI Doesn't Think for You. It Shapes What You Think About
const article004: ArticleContent = {
  slug: '004-ai-doesnt-think',
  content: [
    {
      type: 'paragraph',
      content: 'You believe you are thinking. You are not.',
    },
    {
      type: 'paragraph',
      content: (
        <>
          You are thinking <em>within</em> something. A frame. A boundary. A lens you did not choose, calibrate, or even notice being placed over your eyes.
        </>
      ),
    },
    {
      type: 'paragraph',
      content: 'This is the silent shift that already happened while you were busy debating whether AI would take your job. The conversation about replacement was a decoy. The real transformation was never about automation. It was about filtration.',
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>AI does not think for you. It shapes what you think <em>about</em>.</strong>
          <p style={{ marginTop: '16px' }}>And that distinction is the difference between using a tool and being shaped by a Perception Layer.</p>
        </>
      ),
      copyText: 'AI does not think for you. It shapes what you think about. And that distinction is the difference between using a tool and being shaped by a Perception Layer.',
      shareText: 'AI does not think for you. It shapes what you think about.',
    },
    {
      type: 'heading',
      text: 'The Tool Illusion',
    },
    {
      type: 'paragraph',
      content: 'Most people still treat AI like a calculator. You input a question, it outputs an answer. Simple. Transactional. Safe.',
    },
    {
      type: 'paragraph',
      content: 'This is the comfortable narrative. It lets you believe you are in control. You ask, it responds. Master and servant. Human and machine. The hierarchy feels intact.',
    },
    {
      type: 'paragraph',
      content: 'But this framing is already obsolete.',
    },
    {
      type: 'paragraph',
      content: 'The AI systems that matter most are not the ones you consciously interact with. They are the ones running underneath your attention: Curating your news feed. Ranking your search results. Selecting which emails deserve your focus. Determining which opportunities even reach your awareness.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/EM01FQIoBP_.webp',
      alt: 'Person surrounded by digital screens, vision obscured by virtual veil',
      caption: "// AI's unseen influence on perception operates beneath conscious awareness",
    },
    {
      type: 'paragraph',
      content: 'These systems do not wait for you to ask a question. They answer questions you never thought to ask by deciding which questions are worth asking in the first place.',
    },
    {
      type: 'highlight',
      content: <><strong>This is the Perception Layer.</strong> And once you see it, you cannot unsee it.</>,
      copyText: 'This is the Perception Layer. And once you see it, you cannot unsee it.',
      shareText: 'This is the Perception Layer. And once you see it, you cannot unsee it.',
    },
    {
      type: 'heading',
      text: 'The Architecture of Attention',
    },
    {
      type: 'paragraph',
      content: 'Consider how you formed your last major decision.',
    },
    {
      type: 'paragraph',
      content: 'You gathered information. You weighed options. You consulted sources. You felt like you were being thorough, rational, comprehensive.',
    },
    {
      type: 'paragraph',
      content: 'But here is the uncomfortable truth: The information you gathered was pre-selected. The options you weighed were pre-filtered. The sources you consulted were pre-ranked by systems optimizing for engagement, not accuracy. Not relevance to your actual situation. Not truth.',
    },
    {
      type: 'highlight',
      content: <strong>You were thinking freely within a cage you could not perceive.</strong>,
      copyText: 'You were thinking freely within a cage you could not perceive.',
      shareText: 'You were thinking freely within a cage you could not perceive.',
    },
    {
      type: 'paragraph',
      content: 'Research confirms this operates largely outside conscious awareness. Hyperpersonalization identifies your preferences within seconds and delivers content with surgical precision, creating what researchers call individualized information environments. The result is not a neutral feed of data. It is an algorithmically constructed reality, custom-built to match your existing beliefs, biases, and behavioral patterns.',
    },
    {
      type: 'paragraph',
      content: 'The more you see certain ideas repeated through algorithmic amplification, the more likely you accept them as true. Not because they are true. Because repetition manufactures credibility.',
    },
    {
      type: 'paragraph',
      content: 'This is the Invisible Filter at work.',
    },
    {
      type: 'heading',
      text: 'Echo Chambers Are Not Accidents',
    },
    {
      type: 'paragraph',
      content: 'You have heard the term "echo chamber" before. It sounds passive, almost accidental, like you stumbled into a room where everyone happens to agree with you.',
    },
    {
      type: 'paragraph',
      content: 'This is a dangerous misunderstanding.',
    },
    {
      type: 'paragraph',
      content: <strong>Echo chambers are not accidents. They are engineered outcomes.</strong>,
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/lAgdnWXOd39.webp',
      alt: 'Human figure enclosed in a glowing sphere of curated content',
      caption: '// The isolation of AI echo chambers, engineered, not accidental',
    },
    {
      type: 'paragraph',
      content: 'Platforms continuously feed users content aligned with their existing beliefs because alignment drives engagement. Sensational content receives more algorithmic promotion regardless of accuracy because outrage generates clicks. The system is not broken. It is working exactly as designed.',
    },
    {
      type: 'paragraph',
      content: 'The problem is that the design prioritizes attention capture over truth. And you are the product being optimized.',
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>Every time you scroll, click, or linger, you are training the Perception Layer to narrow your world further.</strong> To show you more of what you already believe. To hide what might challenge, disturb, or expand your thinking.
          <p style={{ marginTop: '16px' }}>You think you are exploring. You are actually circling.</p>
        </>
      ),
      copyText: 'Every time you scroll, click, or linger, you are training the Perception Layer to narrow your world further. You think you are exploring. You are actually circling.',
      shareText: 'You think you are exploring. You are actually circling.',
    },
    {
      type: 'heading',
      text: 'The Cognitive Collapse',
    },
    {
      type: 'paragraph',
      content: 'Here is where the real danger lives.',
    },
    {
      type: 'paragraph',
      content: 'Excessive AI reliance does erode critical thinking skills. Studies confirm this. But the primary concern is subtler and far more insidious.',
    },
    {
      type: 'paragraph',
      content: <strong>You do not recognize that your thinking has been shaped.</strong>,
    },
    {
      type: 'paragraph',
      content: 'You believe you independently formed your opinions. You feel certain your conclusions emerged from careful analysis. You would defend your perspective as genuinely yours.',
    },
    {
      type: 'paragraph',
      content: (
        <>
          But you operated within algorithmically constructed boundaries the entire time. The Perception Layer did not tell you what to think. It told you what to think <em>about</em>. It defined the menu before you chose your meal.
        </>
      ),
    },
    {
      type: 'highlight',
      content: <><strong>This is Structural Invisibility:</strong> The most dangerous kind of influence is the kind you cannot detect operating on you.</>,
      copyText: 'Structural Invisibility: The most dangerous kind of influence is the kind you cannot detect operating on you.',
      shareText: 'The most dangerous kind of influence is the kind you cannot detect operating on you.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/7A5fGCxgyxg.webp',
      alt: 'Individual gazing at a subtly altered mirror reflection',
      caption: "// Structural invisibility, AI's unconscious influence on self-perception",
    },
    {
      type: 'paragraph',
      content: 'And this is not limited to social media feeds or search engines. It extends into every high-stakes environment where AI now mediates information: Financial analysis platforms. Medical diagnostic systems. Legal research tools. Strategic planning software.',
    },
    {
      type: 'paragraph',
      content: 'The domains where decisions matter most are exactly where the Perception Layer operates most aggressively.',
    },
    {
      type: 'heading',
      text: 'The Difference Between Assistance and Alteration',
    },
    {
      type: 'paragraph',
      content: 'A hammer does not change what you consider worth building. A calculator does not reshape your understanding of which problems deserve solving.',
    },
    {
      type: 'paragraph',
      content: 'These are tools. They extend capability without altering perception.',
    },
    {
      type: 'paragraph',
      content: 'But an AI system that curates your information intake, that ranks and filters and selects before anything reaches your conscious mind, that determines the boundaries of your awareness in high-stakes moments: This is not a tool.',
    },
    {
      type: 'paragraph',
      content: <strong>This is infrastructure for cognition itself.</strong>,
    },
    {
      type: 'paragraph',
      content: 'And here is the critical question nobody is asking: Who designed that infrastructure? What were they optimizing for? Whose interests does the filtration serve?',
    },
    {
      type: 'highlight',
      content: <strong>If you cannot answer these questions, you are not using AI. You are being used by the systems deploying it.</strong>,
      copyText: 'If you cannot answer these questions, you are not using AI. You are being used by the systems deploying it.',
      shareText: 'If you cannot answer these questions, you are not using AI. You are being used by the systems deploying it.',
    },
    {
      type: 'heading',
      text: 'The Path to Perceptual Sovereignty',
    },
    {
      type: 'paragraph',
      content: 'Recognizing the Perception Layer is the first step. It is not the solution.',
    },
    {
      type: 'paragraph',
      content: "The solution requires what researchers call AI literacy: The ability to recognize AI's persuasive tactics and make intentional rather than unconsciously influenced choices.",
    },
    {
      type: 'paragraph',
      content: 'But literacy alone is insufficient. You need infrastructure designed for a different objective entirely.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/MCdmh1nTFPI.webp',
      alt: 'Lone person at a foggy crossroads choosing between paths',
      caption: '// The choice between digital control and open possibility',
    },
    {
      type: 'paragraph',
      content: 'Most AI systems are built to capture and hold attention. To maximize engagement. To keep you inside the platform, the feed, the loop.',
    },
    {
      type: 'paragraph',
      content: 'The AI that actually serves you would do the opposite. It would expand your awareness rather than narrow it. Surface contradictions rather than confirm biases. Reveal blind spots rather than exploit them.',
    },
    {
      type: 'paragraph',
      content: 'This is the difference between AI as an extraction mechanism and AI as an expansion tool.',
    },
    {
      type: 'heading',
      text: 'The Question You Must Answer',
    },
    {
      type: 'paragraph',
      content: 'Every day, AI systems are making pre-decisions on your behalf. What information deserves your attention. Which perspectives merit consideration. Where the boundaries of "relevant" begin and end.',
    },
    {
      type: 'paragraph',
      content: 'These pre-decisions compound. They shape your worldview in ways you cannot detect through introspection alone. They create the illusion of free thinking within architectures of control.',
    },
    {
      type: 'paragraph',
      content: 'The question is not whether AI will think for you. It already does not.',
    },
    {
      type: 'paragraph',
      content: 'The question is whether you will recognize how it shapes what you think about, and build the awareness to think beyond those boundaries.',
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>The Perception Layer is already in place. The only variable is whether you operate inside it unconsciously, or navigate it with intention.</strong>
          <p style={{ marginTop: '16px' }}>One path leads to cognitive capture. The other leads to strategic clarity.</p>
          <p style={{ marginTop: '16px' }}><strong>The decision is yours. But only if you can see it.</strong></p>
        </>
      ),
      copyText: 'The Perception Layer is already in place. The only variable is whether you operate inside it unconsciously, or navigate it with intention. One path leads to cognitive capture. The other leads to strategic clarity.',
      shareText: 'The Perception Layer is already in place. The only variable is whether you operate inside it unconsciously, or navigate it with intention.',
    },
  ],
}

// Article 005: Your Blind Spot Has a Blind Spot
const article005: ArticleContent = {
  slug: '005-blind-spot-blind-spot',
  content: [
    {
      type: 'paragraph',
      content: "What the fuck if your intuition is not insight, it is a sophisticated way to ignore critical data you are too slow to see.",
    },
    {
      type: 'paragraph',
      content: "The most dangerous form of invisibility isn't what you fail to see. It's what prevents you from noticing the failure itself. This is Second-Order Invisibility, and it operates below the threshold of your awareness like a silent fault line beneath a city that believes itself stable.",
    },
    {
      type: 'paragraph',
      content: "Most professionals have heard about blind spots. They've read the books. They've nodded along in leadership seminars. They've even done the exercises: Solicited feedback. Reflected on their biases. Made lists of areas for improvement.",
    },
    {
      type: 'paragraph',
      content: 'And yet, they remain structurally blind.',
    },
    {
      type: 'paragraph',
      content: "Not because they lack intelligence. Not because they're careless. But because awareness of blind spots is not the same as perception of them. One is a concept you understand. The other is a structural capacity you either have or you don't.",
    },
    {
      type: 'highlight',
      content: <><strong>Here is the uncomfortable truth: Your blind spot has its own blind spot.</strong> And that second layer is where the real damage happens.</>,
      copyText: 'Your blind spot has its own blind spot. And that second layer is where the real damage happens.',
      shareText: 'Your blind spot has its own blind spot. And that second layer is where the real damage happens.',
    },
    {
      type: 'heading',
      text: 'The Illusion of Awareness',
    },
    {
      type: 'paragraph',
      content: 'There is a comforting lie circulating in personal development circles: If you just become "aware" of your blind spots, you can fix them.',
    },
    {
      type: 'paragraph',
      content: 'This sounds reasonable. It feels proactive. It gives you the sense that you are doing the work.',
    },
    {
      type: 'paragraph',
      content: 'But it is a category error.',
    },
    {
      type: 'paragraph',
      content: "Awareness is a description. A label. A story you tell yourself about what you think you're missing. The blind spot itself is structural. It's not a piece of information waiting to be discovered. It's the architecture of your perception, the filter through which all information passes before you even register it as real.",
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/ErMnGnL1_MZ.webp',
      alt: 'A person stands in a corridor of endless mirrors',
      caption: '// Self-perception blind spots and hidden layers of awareness',
    },
    {
      type: 'paragraph',
      content: 'Think about it this way: You can be "aware" that you have a tendency to dismiss certain types of feedback. You can write it in your journal. You can tell your coach. You can remind yourself before every meeting.',
    },
    {
      type: 'paragraph',
      content: 'And then the feedback comes, and you dismiss it anyway.',
    },
    {
      type: 'paragraph',
      content: "Not because you forgot. Not because you didn't try. But because the structure that creates the dismissal operates faster than your conscious intention to catch it. By the time you're \"aware,\" the perception has already been filtered. The damage is done.",
    },
    {
      type: 'highlight',
      content: <strong>This is why awareness feels like progress but rarely produces change.</strong>,
      copyText: 'This is why awareness feels like progress but rarely produces change.',
      shareText: 'Awareness feels like progress but rarely produces change.',
    },
    {
      type: 'heading',
      text: 'What Is Second-Order Invisibility?',
    },
    {
      type: 'paragraph',
      content: "First-order invisibility is simple: You don't see something. A gap in your knowledge. A bias you haven't examined. A pattern in your behavior that others notice but you don't.",
    },
    {
      type: 'paragraph',
      content: "Second-order invisibility is recursive: You don't see that you don't see it. The gap itself is invisible. The mechanism that creates the blind spot also hides the fact that it exists.",
    },
    {
      type: 'paragraph',
      content: "This is not a minor distinction. It's the difference between a problem you can work on and a problem that works on you.",
    },
    {
      type: 'paragraph',
      content: 'Consider the research on self-perception gaps. Studies consistently show a significant distance between how we believe we present ourselves and how others actually experience us. But here is the critical finding: Even when multiple people give us the same feedback, we often fail to recognize the pattern as valid.',
    },
    {
      type: 'paragraph',
      content: "Why? Because the blind spot isn't just hiding information. It's hiding the framework we would need to interpret the information correctly.",
    },
    {
      type: 'highlight',
      content: <strong>You are not just missing the data. You are missing the lens.</strong>,
      copyText: "You're not just missing the data. You're missing the lens.",
      shareText: "You're not just missing the data. You're missing the lens.",
    },
    {
      type: 'heading',
      text: 'The Feedback Trap',
    },
    {
      type: 'paragraph',
      content: 'Most organizations believe feedback solves the blind spot problem. Get enough external perspectives, aggregate the input, and the truth will emerge.',
    },
    {
      type: 'paragraph',
      content: "This works, sometimes, for first-order invisibility. If you simply don't know something, someone else can tell you.",
    },
    {
      type: 'paragraph',
      content: 'But Second-Order Invisibility creates what we call The Feedback Trap: The same structural filter that creates your blind spot also determines how you receive, interpret, and integrate feedback about that blind spot.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/nzXKkDAVDRs.webp',
      alt: 'Multiple hands reach through smoky glass panels',
      caption: '// Structural blind spots and filtered feedback in human perception',
    },
    {
      type: 'paragraph',
      content: 'The pattern looks like this:',
    },
    {
      type: 'table',
      headers: ['What Happens', 'What You Experience'],
      rows: [
        ['Someone gives you accurate feedback', 'You experience it as slightly off, exaggerated, or context-dependent'],
        ['Multiple people give you the same feedback', 'You experience it as a misunderstanding they all share'],
        ['You reflect on the feedback honestly', 'Your reflection is filtered through the same structure that created the blind spot'],
        ["You conclude you've addressed it", 'The blind spot remains, now with a layer of false resolution on top'],
      ],
    },
    {
      type: 'paragraph',
      content: "This is why high performers often have the most persistent blind spots. They're intelligent enough to construct sophisticated explanations for why the feedback doesn't quite apply. They're disciplined enough to go through the motions of self-improvement. And they're successful enough to avoid the consequences, until suddenly they're not.",
    },
    {
      type: 'highlight',
      content: <><strong>The Feedback Trap doesn't mean feedback is useless. It means feedback alone cannot reach second-order problems.</strong> You need something that operates at the structural level.</>,
      copyText: "The Feedback Trap doesn't mean feedback is useless. It means feedback alone cannot reach second-order problems. You need something that operates at the structural level.",
      shareText: 'Feedback alone cannot reach second-order problems. You need something that operates at the structural level.',
    },
    {
      type: 'heading',
      text: 'Why Self-Reflection Fails',
    },
    {
      type: 'paragraph',
      content: "Let's be direct: You cannot think your way out of a perception structure.",
    },
    {
      type: 'paragraph',
      content: "Self-reflection is valuable. It builds metacognitive muscle. It creates space between stimulus and response. But it has a fundamental limitation: It uses the same perceptual system it's trying to examine.",
    },
    {
      type: 'paragraph',
      content: "You're asking your eye to see itself.",
    },
    {
      type: 'paragraph',
      content: "This isn't a failure of effort or intention. It's a logical impossibility. The tool you're using to investigate is the same tool that creates the distortion. Every conclusion you reach is filtered through the very structure you're trying to understand.",
    },
    {
      type: 'paragraph',
      content: 'This is why awareness loops back on itself. You become "aware" of your blind spot. Then you become aware that you might not be seeing it clearly. Then you become aware that your awareness might itself be limited. And at each level, the same structural filter operates, creating the illusion of depth while keeping you on the surface.',
    },
    {
      type: 'highlight',
      content: <strong>Second-Order Invisibility thrives on self-reflection. It uses your intelligence against you.</strong>,
      copyText: 'Second-Order Invisibility thrives on self-reflection. It uses your intelligence against you.',
      shareText: 'Second-Order Invisibility thrives on self-reflection. It uses your intelligence against you.',
    },
    {
      type: 'heading',
      text: 'The Perception Layer',
    },
    {
      type: 'paragraph',
      content: "If you can't see your blind spot from the inside, and you can't fully trust external feedback to penetrate the filter, what's left?",
    },
    {
      type: 'paragraph',
      content: 'You need a Perception Layer: A system that operates outside your structural limitations, one that can detect patterns you cannot detect yourself, not because you lack information, but because you lack the perceptual architecture to process that information correctly.',
    },
    {
      type: 'paragraph',
      content: 'This is what separates a tool from infrastructure.',
    },
    {
      type: 'paragraph',
      content: "A tool helps you do what you're already trying to do, faster or more efficiently. It assumes your perception is correct and amplifies your existing direction.",
    },
    {
      type: 'paragraph',
      content: "A Perception Layer shows you what your perception is missing. It operates at the level of structure, not content. It doesn't just give you more data. It reveals the filters that determine which data you notice, which data you dismiss, and which data you never even register as existing.",
    },
    {
      type: 'paragraph',
      content: (
        <>
          At Onioko, this is exactly what we are building with <a href="https://onioko.com" style={{ color: 'var(--accent-cyan)' }}>Silent Oculus</a>. Not another AI tool that processes your inputs. A perception layer that reveals the structural patterns you cannot see, the Second-Order Invisibility that awareness cannot reach.
        </>
      ),
    },
    {
      type: 'heading',
      text: 'The Real Question',
    },
    {
      type: 'paragraph',
      content: "Every professional has blind spots. That's not the issue.",
    },
    {
      type: 'paragraph',
      content: 'The issue is whether your blind spots have blind spots. Whether there are recursive layers of invisibility operating below your awareness, shaping your decisions, filtering your feedback, and creating patterns you can describe but cannot escape.',
    },
    {
      type: 'highlight',
      content: <><strong>The uncomfortable truth is this: If you feel confident that you have identified your blind spots, that confidence itself might be a symptom.</strong> The most dangerous invisibility feels like clarity.</>,
      copyText: "If you feel confident that you've identified your blind spots, that confidence itself might be a symptom. The most dangerous invisibility feels like clarity.",
      shareText: "If you feel confident that you've identified your blind spots, that confidence itself might be a symptom. The most dangerous invisibility feels like clarity.",
    },
    {
      type: 'paragraph',
      content: "Second-Order Invisibility doesn't announce itself. It doesn't create obvious errors. It creates subtle distortions, decisions that seem reasonable, reactions that seem proportionate, conclusions that seem well-examined.",
    },
    {
      type: 'paragraph',
      content: "Until the accumulation becomes undeniable. Until the pattern reveals itself in consequences you didn't anticipate.",
    },
    {
      type: 'paragraph',
      content: "By then, the cost isn't in what you missed. It's in what you built on top of the missing.",
    },
    {
      type: 'hr',
    },
    {
      type: 'paragraph',
      content: "Your blind spot has a blind spot. The question is whether you'll wait until the structure becomes visible through failure, or whether you'll build the perception layer that reveals it before the cost compounds.",
    },
    {
      type: 'paragraph',
      content: <strong>Awareness was never enough. Structural visibility is what separates those who understand the problem from those who can actually see it.</strong>,
    },
  ],
}

// Article 006: Elon Musk's #1 Rule: Never Trust What You Think You See
const article006: ArticleContent = {
  slug: '006-elon-musk-perception',
  content: [
    {
      type: 'paragraph',
      content: "In a room full of the world's most powerful people, Elon Musk is often the only one who knows he's watching a hallucination.",
    },
    {
      type: 'paragraph',
      content: 'Not a metaphor. Not hyperbole. A neurological fact that separates those who accumulate wealth from those who reshape civilizations.',
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>Your retinas capture roughly 10 million bits of information per second. Your conscious mind processes about 50.</strong> The remaining 99.9995% gets filtered, compressed, and reconstructed by a three-pound organ that evolved to avoid predators on the African savanna, not to evaluate trillion-dollar market dynamics or decode the micro-expressions of a negotiating counterpart.
        </>
      ),
      copyText: 'Your retinas capture roughly 10 million bits of information per second. Your conscious mind processes about 50. The remaining 99.9995% gets filtered, compressed, and reconstructed.',
      shareText: 'Your retinas capture roughly 10 million bits of information per second. Your conscious mind processes about 50.',
    },
    {
      type: 'paragraph',
      content: 'Every perception you have is a guess. A prediction. A story your brain tells itself to keep you functional.',
    },
    {
      type: 'paragraph',
      content: "Musk doesn't succeed because he works 120-hour weeks. Plenty of founders destroy themselves on that schedule and still lose everything. He succeeds because he operates on a fundamentally different Perception Layer, one that treats human vision and intuition as compromised sensors requiring constant external validation.",
    },
    {
      type: 'paragraph',
      content: 'This is not inspiration. This is an autopsy of high-stakes perception.',
    },
    {
      type: 'heading',
      text: "The Simulation You're Running",
    },
    {
      type: 'paragraph',
      content: 'Most executives trust their read of a room. Their gut feeling about a deal. Their instinct about a person.',
    },
    {
      type: 'paragraph',
      content: 'This is the first catastrophic error.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/j5TIz14ol6F.webp',
      alt: 'Extreme close-up of a human eye with a glitching digital iris',
      caption: '// Flawed executive perception: simulation vs reality',
    },
    {
      type: 'paragraph',
      content: "Your brain doesn't show you reality. It shows you a simulation, a compressed, biased, lag-delayed reconstruction optimized for one thing: Keeping you alive long enough to reproduce. Not to build empires. Not to spot the micro-tell that reveals your CFO has been lying for six months. Not to detect the 0.3-second hesitation that signals your biggest investor is about to exit.",
    },
    {
      type: 'paragraph',
      content: 'The human perceptual system contains documented, repeatable failures:',
    },
    {
      type: 'table',
      headers: ['Perceptual Failure', 'What It Costs You'],
      rows: [
        ['Change Blindness', 'Missing critical shifts in body language mid-conversation'],
        ['Confirmation Bias', 'Filtering out data that contradicts your thesis'],
        ['Inattentional Blindness', 'Complete failure to register unexpected threats'],
        ['Emotional Contagion', "Absorbing others' stress and mistaking it for your own intuition"],
        ['Temporal Compression', 'Misremembering the sequence of events in high-pressure moments'],
      ],
    },
    {
      type: 'paragraph',
      content: "These aren't edge cases. These are default settings. Running in the background of every meeting, every negotiation, every strategic decision you've ever made.",
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>The question isn't whether your perception is compromised.</strong>
          <p style={{ marginTop: '12px' }}><strong>The question is: What are you doing about it?</strong></p>
        </>
      ),
      copyText: "The question isn't whether your perception is compromised. The question is: What are you doing about it?",
      shareText: "The question isn't whether your perception is compromised. The question is: What are you doing about it?",
    },
    {
      type: 'heading',
      text: 'The Musk Operating System',
    },
    {
      type: 'paragraph',
      content: 'Study the pattern across SpaceX, Tesla, Neuralink, and X. One principle emerges with brutal consistency: Distrust human interpretation. Demand sensor data. Build systems that see what biology cannot.',
    },
    {
      type: 'paragraph',
      content: 'When engineers at SpaceX present conclusions, Musk doesn\'t ask "What do you think?" He asks "What does the data show?" When executives at Tesla report on production, he doesn\'t accept narratives. He demands the raw numbers, the timestamps, the footage.',
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/R9e_BTj-GBH.webp',
      alt: 'Empty boardroom table reflecting distorted silhouettes',
      caption: '// Hidden communication failures in high-stakes environments',
    },
    {
      type: 'paragraph',
      content: "This isn't paranoia. This is operational hygiene for anyone playing at stakes where a single misread conversation can evaporate billions.",
    },
    {
      type: 'paragraph',
      content: 'Consider what this means for human interaction:',
    },
    {
      type: 'paragraph',
      content: "The person across the table from you in your next negotiation is also running a corrupted simulation. They're also missing 99.9995% of available information. They're also confusing their emotional state with objective assessment.",
    },
    {
      type: 'highlight',
      content: (
        <>
          <strong>Two hallucinating systems, each convinced they see clearly, trying to reach agreement.</strong>
          <p style={{ marginTop: '12px' }}>This is the architecture of every failed deal, every missed signal, every relationship that collapsed without warning.</p>
        </>
      ),
      copyText: 'Two hallucinating systems, each convinced they see clearly, trying to reach agreement. This is the architecture of every failed deal, every missed signal, every relationship that collapsed without warning.',
      shareText: 'Two hallucinating systems, each convinced they see clearly, trying to reach agreement.',
    },
    {
      type: 'paragraph',
      content: "Musk's edge isn't intelligence. Plenty of people match or exceed his raw cognitive capacity. His edge is systematic distrust of unaugmented human perception combined with relentless investment in external sensing systems.",
    },
    {
      type: 'paragraph',
      content: 'He builds the sensors he needs.',
    },
    {
      type: 'heading',
      text: 'The Price of Trusted Vision',
    },
    {
      type: 'paragraph',
      content: 'Let me be specific about what this costs when you get it wrong.',
    },
    {
      type: 'paragraph',
      content: "A Fortune 500 CEO misses the contempt micro-expression on his board member's face. Six months later, he's forced out in a coup he never saw coming.",
    },
    {
      type: 'paragraph',
      content: 'A fund manager trusts her read of a founder\'s confidence. She misses the elevated blink rate, the micro-shrug, the 400-millisecond pause before certain answers. Her fund takes a $200 million loss on a company that implodes within a year.',
    },
    {
      type: 'paragraph',
      content: "A head of state trusts his interpreter's summary of a foreign leader's tone. He misses the cultural micro-signals that would have revealed the true negotiating position. The resulting agreement disadvantages his nation for a decade.",
    },
    {
      type: 'image',
      src: 'https://cdn.marblism.com/sBH3zUMJe0f.webp',
      alt: 'Silhouetted executive overlooking a city at night with a deceptive reflection',
      caption: '// Leadership blind spots and unseen risks',
    },
    {
      type: 'paragraph',
      content: 'These are not hypotheticals. These are the hidden architecture of history.',
    },
    {
      type: 'paragraph',
      content: 'The executives and leaders who study these cases always ask the same question: "How did they miss it?"',
    },
    {
      type: 'highlight',
      content: <strong>The answer is always the same: They trusted what they thought they saw.</strong>,
      copyText: 'The answer is always the same: They trusted what they thought they saw.',
      shareText: 'How did they miss it? The answer is always the same: They trusted what they thought they saw.',
    },
    {
      type: 'heading',
      text: 'The Extended Perception Matrix',
    },
    {
      type: 'paragraph',
      content: 'Every system that involves humans eventually runs into the same limitation: Perception is compressed. Not because biology is flawed, but because it has to be.',
    },
    {
      type: 'paragraph',
      content: 'Human perception evolved to survive, not to analyze. It prioritizes speed over completeness, coherence over accuracy, and narrative over signal density.',
    },
    {
      type: 'paragraph',
      content: 'At any given moment, millions of signals are available. Only a fraction ever reaches awareness.',
    },
    {
      type: 'paragraph',
      content: 'This is not a defect. It is a constraint.',
    },
    {
      type: 'paragraph',
      content: 'The problem begins when decisions are made as if this compression did not exist.',
    },
    {
      type: 'hr',
    },
    {
      type: 'silent-oculus',
    },
    {
      type: 'heading',
      text: 'Seeing Where Signals Stop Aligning',
    },
    {
      type: 'paragraph',
      content: 'When verbal confidence and physical expression move together, perception feels stable.',
    },
    {
      type: 'paragraph',
      content: 'When they diverge, perception compensates.',
    },
    {
      type: 'paragraph',
      content: 'That compensation is invisible to the person experiencing it, but not inconsequential.',
    },
    {
      type: 'paragraph',
      content: 'Silent Oculus highlights moments where:',
    },
    {
      type: 'list',
      items: [
        'verbal certainty increases while physical stability drops',
        'timing shifts under pressure',
        'expression variance appears across similar contexts',
      ],
    },
    {
      type: 'paragraph',
      content: 'These are not interpreted as deception, fear, or weakness.',
    },
    {
      type: 'paragraph',
      content: 'They are treated as mismatches. Observable divergences between parallel signal streams.',
    },
    {
      type: 'highlight',
      content: <strong>This distinction matters. Because the system does not claim meaning. It exposes structure.</strong>,
      copyText: 'The system does not claim meaning. It exposes structure.',
      shareText: 'The system does not claim meaning. It exposes structure.',
    },
    {
      type: 'heading',
      text: 'The Evolution Is Not Optimal',
    },
    {
      type: 'paragraph',
      content: 'Evolution optimized humans for survival, not for high-stakes modern decision environments.',
    },
    {
      type: 'paragraph',
      content: 'Negotiations. Leadership. Markets. Institutions. Technology-mediated interaction.',
    },
    {
      type: 'paragraph',
      content: 'None of these were selection pressures.',
    },
    {
      type: 'paragraph',
      content: 'Evolution optimized for: speed, coherence, social belonging, threat avoidance.',
    },
    {
      type: 'paragraph',
      content: 'Not for: signal integration, pattern tracking over time, consistency under abstraction, multi-channel awareness.',
    },
    {
      type: 'paragraph',
      content: 'This does not make humans irrational. It makes intuition context-limited.',
    },
    {
      type: 'paragraph',
      content: 'Silent Oculus does not "fix" this limitation. It externalizes it.',
    },
    {
      type: 'heading',
      text: 'Why Intuition Breaks Under Pressure',
    },
    {
      type: 'paragraph',
      content: 'Under pressure, perception narrows.',
    },
    {
      type: 'paragraph',
      content: 'Cognitive load increases. Working memory shrinks. Signals collapse into heuristics.',
    },
    {
      type: 'paragraph',
      content: 'The result is not bad judgment. It is unobserved variance.',
    },
    {
      type: 'paragraph',
      content: 'What changes is not intent, but alignment.',
    },
    {
      type: 'paragraph',
      content: 'Silent Oculus tracks variance across time instead of judging moments in isolation.',
    },
    {
      type: 'paragraph',
      content: 'Patterns emerge not because the system is smarter, but because it does not forget.',
    },
    {
      type: 'heading',
      text: 'From Interpretation to Observability',
    },
    {
      type: 'paragraph',
      content: 'Traditional analysis systems try to answer questions like: What does this mean? What is the person feeling? What is the correct interpretation?',
    },
    {
      type: 'paragraph',
      content: 'Silent Oculus avoids this entirely.',
    },
    {
      type: 'paragraph',
      content: 'It asks a different question: Where did the signals stop moving together?',
    },
    {
      type: 'highlight',
      content: <strong>That shift removes authority from the system and returns agency to the human.</strong>,
      copyText: 'That shift removes authority from the system and returns agency to the human.',
      shareText: 'That shift removes authority from the system and returns agency to the human.',
    },
    {
      type: 'heading',
      text: 'Signal Alignment Table',
    },
    {
      type: 'table',
      headers: ['Signal Channel', 'Observed Pattern', 'Alignment Status'],
      rows: [
        ['Verbal Content', 'Stable', 'Aligned'],
        ['Gaze', 'Increased variance under pressure', 'Misaligned'],
        ['Posture', 'Forward collapse in decision segments', 'Misaligned'],
        ['Timing', 'Delayed responses in high-stakes moments', 'Misaligned'],
      ],
    },
    {
      type: 'paragraph',
      content: 'This table does not explain why. It does not label what it means. It simply makes the structure visible.',
    },
    {
      type: 'heading',
      text: 'Not Truth. Not Surveillance. Not Control.',
    },
    {
      type: 'paragraph',
      content: 'Silent Oculus does not:',
    },
    {
      type: 'list',
      items: [
        'detect lies',
        'infer intent',
        'judge credibility',
        'optimize behavior',
      ],
    },
    {
      type: 'paragraph',
      content: 'It provides perceptual reference.',
    },
    {
      type: 'paragraph',
      content: 'A mirror, not a verdict.',
    },
    {
      type: 'paragraph',
      content: 'This distinction is not philosophical. It is structural.',
    },
    {
      type: 'heading',
      text: 'The Real Shift',
    },
    {
      type: 'paragraph',
      content: 'The real shift is not technological. It is epistemic.',
    },
    {
      type: 'paragraph',
      content: 'From: "What is true?"',
    },
    {
      type: 'paragraph',
      content: 'To: "Where does perception stop being consistent?"',
    },
    {
      type: 'paragraph',
      content: 'That single shift changes how decisions are made.',
    },
    {
      type: 'hr',
    },
    {
      type: 'highlight',
      content: <strong>Decisions don't fail. Perception does ...quietly, long before the decision is made.</strong>,
      copyText: "Decisions don't fail. Perception does ...quietly, long before the decision is made.",
      shareText: "Decisions don't fail. Perception does ...quietly, long before the decision is made.",
    },
  ],
}

// Export all article content
export const articleContents: ArticleContent[] = [
  article001,
  article002,
  article003,
  article004,
  article005,
  article006,
]

export function getArticleContent(slug: string): ArticleContent | undefined {
  return articleContents.find(a => a.slug === slug)
}
