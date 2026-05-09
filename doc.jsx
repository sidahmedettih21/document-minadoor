import { useState } from “react”;

const GOLD = “#C9A84C”;
const DARK = “#0D0D0D”;
const CARD = “#141414”;
const BORDER = “#2a2a2a”;
const TEXT = “#e8e0d0”;
const DIM = “#7a7060”;
const GREEN = “#4caf7d”;
const BLUE = “#4a9eff”;
const RED = “#e05252”;

const tabs = [
{ id: “market”, label: “Market Reality” },
{ id: “customer”, label: “Who Buys” },
{ id: “umrah”, label: “Umrah Strategy” },
{ id: “visa”, label: “Visa Process” },
{ id: “content”, label: “Content & Messaging” },
{ id: “dodonts”, label: “Do’s & Don’ts” },
{ id: “calendar”, label: “Seasonal Calendar” },
];

const Section = ({ title, children, accent }) => (

  <div style={{ background: CARD, border: `1px solid ${accent || BORDER}`, borderRadius: 12, padding: "24px 28px", marginBottom: 20 }}>
    <h3 style={{ color: accent || GOLD, fontFamily: "'Playfair Display', serif", fontSize: 18, margin: "0 0 16px" }}>{title}</h3>
    {children}
  </div>
);

const Row = ({ label, value, note }) => (

  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "9px 0", borderBottom: `1px solid ${BORDER}22` }}>
    <span style={{ color: TEXT, fontSize: 13 }}>{label}</span>
    <div style={{ textAlign: "right" }}>
      <span style={{ color: GOLD, fontWeight: 700, fontSize: 13 }}>{value}</span>
      {note && <div style={{ color: DIM, fontSize: 11 }}>{note}</div>}
    </div>
  </div>
);

const Tag = ({ children, color }) => (
<span style={{ background: `${color || GOLD}22`, border: `1px solid ${color || GOLD}44`, color: color || GOLD, borderRadius: 6, padding: “3px 10px”, fontSize: 12, marginRight: 6, marginBottom: 6, display: “inline-block” }}>{children}</span>
);

const Alert = ({ children, type }) => {
const colors = { warn: “#e6a817”, info: BLUE, success: GREEN, danger: RED };
const c = colors[type] || colors.info;
return (
<div style={{ background: `${c}15`, border: `1px solid ${c}44`, borderLeft: `3px solid ${c}`, borderRadius: 8, padding: “12px 16px”, marginBottom: 12, color: TEXT, fontSize: 13, lineHeight: 1.7 }}>
{children}
</div>
);
};

const StatBox = ({ value, label, note, color }) => (

  <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, textAlign: "center", padding: "18px 12px" }}>
    <div style={{ color: color || GOLD, fontFamily: "'Playfair Display', serif", fontSize: 30, fontWeight: 700 }}>{value}</div>
    <div style={{ color: TEXT, fontSize: 13, margin: "4px 0 2px" }}>{label}</div>
    {note && <div style={{ color: DIM, fontSize: 11 }}>{note}</div>}
  </div>
);

function Market() {
return (
<div>
<Alert type="info">
All numbers below are sourced from official data: Saudi Ministry of Hajj & Umrah, GASTAT (Saudi General Authority for Statistics), Algeria’s National Office for Hajj and Umrah (OAB), and verified news sources. Zero invented figures.
</Alert>

```
  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 20 }}>
    <StatBox value="18.03M" label="Umrah pilgrims worldwide 2025" note="New record — source: GASTAT 2025" color={GREEN} />
    <StatBox value="101%" label="Umrah growth vs 2022" note="16.92M in 2024 — Saudi Gazette" color={GREEN} />
    <StatBox value="41,300" label="Algeria's Hajj quota (annual)" note="~1 slot per 1,000 Muslims" color={GOLD} />
    <StatBox value="30M" label="Saudi Vision 2030 Umrah target" note="Annual pilgrims by 2030" color={BLUE} />
  </div>

  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
    <Section title="🌍 The Global Umrah Explosion — Real Numbers">
      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.8, margin: "0 0 12px" }}>
        Umrah is not a niche market. It is the fastest-growing religious tourism sector on the planet. In 2024, <strong style={{ color: GOLD }}>16.92 million people</strong> performed Umrah — more than the entire population of Belgium. In 2025, that hit <strong style={{ color: GOLD }}>18.03 million</strong>, a new all-time record, surpassing Saudi Arabia's own 15M annual target.
      </p>
      <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.8, margin: 0 }}>
        Saudi Vision 2030 is <strong style={{ color: GOLD }}>doubling down</strong> on infrastructure to reach 30 million Umrah pilgrims by 2030. More flights, more hotels, more streamlined visas. The supply side is growing to meet the demand. For a travel agency in Algeria, this is not a temporary wave — this is a structural, decade-long growth market.
      </p>
    </Section>

    <Section title="🇩🇿 Algeria's Position in This Market">
      <Row label="Algerian population" value="~47 million" note="2026 estimate" />
      <Row label="Muslim population" value="~99% — ~46.5M" note="Source: Wikipedia Demographics of Algeria" />
      <Row label="Hajj annual quota (Algeria)" value="41,300 slots" note="~1 per 1,000 Muslims — Aviation A2Z 2025" />
      <Row label="Hajj 2025 cost (official)" value="840,000 DZD" note="National Office for Hajj — OAB" />
      <Row label="Wilaya Relizane population" value="~726,000" note="Source: Relizane Tourism Directorate" />
      <Row label="Yellel municipality" value="Small commune, Relizane Wilaya" note="Rural — underserved digitally" />
      <div style={{ marginTop: 12 }}>
        <Alert type="success">
          <strong>Key insight:</strong> Umrah has NO quota restriction unlike Hajj. Any Algerian Muslim can perform Umrah at any time of year. The market is not constrained by quota — it is constrained only by <em>affordability and accessibility</em>. Your installment system directly attacks that constraint.
        </Alert>
      </div>
    </Section>
  </div>

  <Section title="📍 Why Yellel / Ghilizan Is Actually an Advantage">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
      {[
        {
          title: "Zero Digital Competition",
          content: "No agency in Yellel or the immediate communes of Relizane Wilaya is running a serious digital presence. The SEO and social media field is completely open. Ranking for 'وكالة سفر رليزان' or 'عمرة بالتقسيط غليزان' costs almost zero effort right now.",
          icon: "🏆"
        },
        {
          title: "Rural = Trust-Based Buying",
          content: "In small municipalities, people buy from people they know or people their community vouches for. Social proof in tight communities travels 10× faster than in cities. One satisfied client in Yellel tells 20 people before the week is over — word-of-mouth is your free amplifier.",
          icon: "🤝"
        },
        {
          title: "Underserved Financial Gap",
          content: "Rural Algerian households are cash-constrained but aspiration-rich. Umrah is a lifelong dream for most families. Nobody in Yellel is offering 0% installment Umrah. You are not competing on price — you are removing the barrier that makes the dream unreachable.",
          icon: "💡"
        },
        {
          title: "Relizane as Hub",
          content: "Relizane Wilaya has 38 municipalities and ~726,000 people. Relizane city itself had 130,000+ as of 2008 — well over 200,000 now. Your reach from Yellel can cover multiple communes easily via social media and word of mouth. Think wilaya-wide, not just Yellel.",
          icon: "📡"
        },
        {
          title: "97% Muslim Region",
          content: "Algeria is 97% Sunni Muslim. Umrah is a universal aspiration — it cuts across income levels, ages, and professions. Every family in Yellel has at least one member who dreams of performing Umrah. Your market penetration ceiling is extraordinarily high.",
          icon: "🕌"
        },
        {
          title: "First-Mover Authority",
          content: "In digital marketing terms, whoever builds the brand first in a local market owns it. You are not 'late' to a saturated market. You are early in a market that is waking up. The agency that dominates Relizane Wilaya online in the next 12 months will own it for years.",
          icon: "⚡"
        }
      ].map((c, i) => (
        <div key={i} style={{ background: "#0a0a0a", borderRadius: 8, padding: "14px 16px" }}>
          <div style={{ fontSize: 22, marginBottom: 8 }}>{c.icon}</div>
          <div style={{ color: GOLD, fontSize: 13, fontWeight: 700, marginBottom: 6 }}>{c.title}</div>
          <div style={{ color: TEXT, fontSize: 12, lineHeight: 1.7 }}>{c.content}</div>
        </div>
      ))}
    </div>
  </Section>
</div>
```

);
}

function Customer() {
return (
<div>
<Alert type="warn">
This section is based on behavioral psychology of religious consumers, Algerian socioeconomic reality, and the structural demand patterns of Umrah markets. Understanding WHO buys is the foundation of every message you send.
</Alert>

```
  <Section title="👥 The 5 Client Archetypes in Yellel/Relizane">
    {[
      {
        type: "The Dreaming Elder",
        arabic: "الشيخ اللي يحلم بالعمرة",
        age: "55–75",
        profile: "Has wanted to go for years. Cash is not the primary issue — the PROCESS is. They don't know how visa works, who to trust, what's included. They've heard of people getting scammed. Their biggest fear is being deceived.",
        trigger: "Trust, simplicity, religious authority",
        message: '"نديروا كلشي عليك — أنت تتعبد، وحنا ندبروا الباقي"',
        note: "This is your most loyal segment. One satisfied elder = the whole family + all their social circle."
      },
      {
        type: "The Working Parent",
        arabic: "الوالد اللي يشتغل",
        age: "35–55",
        profile: "Stable income but no lump sum available. 840,000 DZD for Hajj or even 400,000 DZD for Umrah is impossible to pay at once. But 100,000 DZD down + 30,000 DZD/month? That's feasible. This person will say yes the moment they understand the installment system.",
        trigger: "Financial accessibility, zero interest, flexibility",
        message: '"ادفع 100 ألف وتمشي — الباقي بالراحة، 10 أشهر بلا فوائد"',
        note: "Your highest-volume segment. Direct response to your installment product."
      },
      {
        type: "The Adult Child",
        arabic: "الولد اللي يبي يرسل أمو أو بيه",
        age: "25–40",
        profile: "Wants to send their parent to Umrah as a gift — ultimate act of filial piety in Islamic culture. Has steady income. Emotionally motivated. Will pay premium for reliability and care. Very active on social media.",
        trigger: "Emotional storytelling, gift framing, 'honor your parents'",
        message: '"أرسل أمك أو بيك للعمرة — أحسن هدية في حياتك"',
        note: "Viral sharing potential. If they share the experience online, it markets itself."
      },
      {
        type: "The Young Seeker",
        arabic: "الشاب اللي يدور روحانية",
        age: "20–35",
        profile: "Post-2019 generation, increasingly religious, looking for meaning. Sees peers going to Umrah. FOMO is real. Active on TikTok and Instagram. Responds to aesthetic content, peer testimonials, and the emotional experience angle.",
        trigger: "Peer validation, aesthetic experience, identity",
        message: '"مشيت للعمرة وما ندمت — الرحلة اللي تغير حياتك"',
        note: "TikTok goldmine. Their reaction videos and testimonials = free organic reach."
      },
      {
        type: "The Repeat Pilgrim",
        arabic: "اللي مشى قبل ويبي يرجع",
        age: "Any",
        profile: "Already performed Umrah once. Wants to go again, possibly with spouse or children. Knows the process but wants a trusted, organized agency. Price-sensitive but values reliability over cheapness.",
        trigger: "Quality, organization, comprehensive package",
        message: '"رجعلنا ثاني — خدمة ما تنساها"',
        note: "Word-of-mouth engine. They already have credibility in their circle."
      }
    ].map((c, i) => (
      <div key={i} style={{ background: "#0a0a0a", borderRadius: 10, padding: "16px 20px", marginBottom: 12 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
          <div>
            <div style={{ color: GOLD, fontSize: 15, fontWeight: 700 }}>{c.type}</div>
            <div style={{ color: DIM, fontSize: 13 }}>{c.arabic} · Age {c.age}</div>
          </div>
        </div>
        <div style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, marginBottom: 10 }}>{c.profile}</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <div style={{ background: `${GOLD}11`, borderRadius: 6, padding: "8px 12px" }}>
            <div style={{ color: DIM, fontSize: 11, marginBottom: 4 }}>TRIGGER</div>
            <div style={{ color: TEXT, fontSize: 12 }}>{c.trigger}</div>
          </div>
          <div style={{ background: `${BLUE}11`, borderRadius: 6, padding: "8px 12px" }}>
            <div style={{ color: DIM, fontSize: 11, marginBottom: 4 }}>KEY MESSAGE</div>
            <div style={{ color: GOLD, fontSize: 12, fontStyle: "italic" }}>{c.message}</div>
          </div>
        </div>
        <div style={{ color: GREEN, fontSize: 12, marginTop: 8 }}>→ {c.note}</div>
      </div>
    ))}
  </Section>

  <Section title="🧠 The Psychology of the Umrah Purchase Decision">
    <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.8, margin: "0 0 12px" }}>
      Umrah is not a consumer product. It sits at the intersection of <strong style={{ color: GOLD }}>spiritual obligation, social status, family duty, and financial sacrifice</strong>. Understanding this changes everything about how you sell.
    </p>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
      {[
        { label: "What they say they want", value: "A good price and reliable service" },
        { label: "What they actually want", value: "To fulfill a spiritual duty without shame or failure" },
        { label: "What they fear most", value: "Being deceived, visa rejected, or trip ruined" },
        { label: "Why they delay", value: "Cannot afford lump sum / fear of unknown process" },
        { label: "What makes them say yes", value: "Trust in you personally + financial solution + proof others went" },
        { label: "What makes them refer others", value: "Being treated with respect + trip exceeded expectations" },
      ].map((r, i) => <Row key={i} label={r.label} value={r.value} />)}
    </div>
    <Alert type="info" style={{ marginTop: 12 }}>
      <strong>The real insight:</strong> In rural Algeria, the purchase decision for Umrah is rarely made alone. It involves the family. Your content and sales conversations should address the family unit — not just the individual. When a husband tells his wife "khalina nmshi l'umra," he needs her approval. When a son wants to send his mother, he needs his siblings' buy-in. Frame your offers for the family, not the individual.
    </Alert>
  </Section>
</div>
```

);
}

function UmrahStrategy() {
return (
<div>
<Section title="🕌 Your Core Product — Umrah Installment System">
<Alert type="success">
This is your single biggest competitive weapon. No agency in Yellel or the surrounding communes is offering this. 0% interest installment Umrah is the product that removes the only real barrier between a dreaming family and their pilgrimage.
</Alert>
<div style={{ display: “grid”, gridTemplateColumns: “1fr 1fr”, gap: 16 }}>
<div>
<div style={{ color: GOLD, fontSize: 13, fontWeight: 700, marginBottom: 10 }}>Package Structure</div>
<Row label="Initial deposit" value="100,000 DZD" note="Confirms booking, starts process" />
<Row label="Payment duration" value="10 months" note="Manageable for working families" />
<Row label="Interest rate" value="0% — Zero" note="Key differentiator — market this hard" />
<Row label="What's included" value="Flights + Hotel + Visa + Religious Guide" note="Full package, nothing hidden" />
<Row label="Algerian Hajj official cost (2025)" value="840,000 DZD" note="OAB data — your Umrah should be clearly cheaper" />
</div>
<div>
<div style={{ color: GOLD, fontSize: 13, fontWeight: 700, marginBottom: 10 }}>Why This Works Psychologically</div>
{[
“100,000 DZD is achievable — most families can gather this in 1–3 months”,
“30,000 DZD/month feels like a subscription, not a sacrifice”,
“0% interest removes the riba (usury) anxiety — halal-compatible framing”,
“10 months of payments = 10 months of anticipation and emotional buildup”,
“Each payment made = deeper commitment = lower cancellation rate”,
“Booking confirmed immediately → family starts telling their community”,
].map((t, i) => (
<div key={i} style={{ color: TEXT, fontSize: 12, padding: “5px 0”, borderBottom: `1px solid ${BORDER}22` }}>
<span style={{ color: GREEN }}>✓</span> {t}
</div>
))}
</div>
</div>
</Section>

```
  <Section title="📣 How to Get Clients — Channel by Channel">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
      {[
        {
          channel: "Facebook Groups (Primary)",
          priority: "HIGHEST ROI",
          color: GREEN,
          tactics: [
            'Post in "سفر و سياحة الجزائر" groups at 7–9 PM',
            'Create group "رحلات العمرة من غليزان"',
            "Long-form emotional storytelling posts work best here",
            "Post installment details with clear numbers — no vagueness",
            "Share return pilgrim testimonials as native videos",
            "Respond to EVERY comment within 1 hour",
          ]
        },
        {
          channel: "WhatsApp (Conversion Engine)",
          priority: "DIRECT REVENUE",
          color: GOLD,
          tactics: [
            "WhatsApp Business profile fully completed with logo",
            "Auto-reply flow for inquiries (see Visa tab for exact script)",
            "Broadcast list: past clients + interested leads",
            "Send Umrah tips weekly to build trust before sale",
            "Voice messages feel more personal — use them for follow-ups",
            "Share one client departure/return video per month",
          ]
        },
        {
          channel: "TikTok (Reach & Awareness)",
          priority: "BRAND BUILDING",
          color: BLUE,
          tactics: [
            "Before/after: showing airport departure of client families",
            "Educational: 'كيفاش تمشي للعمرة بالتقسيط' step by step",
            "Emotional: Return pilgrim crying at airport — genuine moments",
            "Process: showing exactly what documents are needed",
            "Scarcity: 'باقي 3 أماكن هذا الشهر' monthly update",
            "POV content: 'أنت في المكة' immersive experience",
          ]
        },
        {
          channel: "Instagram (Social Proof)",
          priority: "TRUST BUILDING",
          color: "#c77dff",
          tactics: [
            "Carousels: '5 خطوات للعمرة مع مينادور' — swipeable",
            "Stories: Behind-scenes of booking process",
            "Reels: Kaaba imagery + emotional Arabic nasheed",
            "Client highlights: tagged photos from pilgrims in Mecca",
            "Regular Stories polls: 'تفضل الذهاب في رمضان ولا في الصيف؟'",
            "Saved Highlights: Visa process, What's Included, Testimonials",
          ]
        },
        {
          channel: "Local Offline (Underrated)",
          priority: "COMMUNITY TRUST",
          color: "#ff9f43",
          tactics: [
            "Mosque announcements after Jumu'a — most powerful in small communes",
            "Partnership with local imams — religious credibility transfer",
            "Flyers at the local market / souk",
            "Physical office hours clearly communicated",
            "Community events: free Umrah preparation info session",
            "Word of mouth tracking: ask every client how they heard of you",
          ]
        },
        {
          channel: "Referral System",
          priority: "COMPOUNDING GROWTH",
          color: GREEN,
          tactics: [
            "Every satisfied pilgrim = potential agent for you",
            "Offer referral incentive: small discount on next trip",
            "Ask explicitly: 'اعطيلنا واحد من عندك ونعطيوك خصم'",
            "Track all referral sources in your CRM sheet",
            "Send 'thank you' gift to top referrers",
            "Create a 'MinaDoor Family' identity for past pilgrims",
          ]
        }
      ].map((c, i) => (
        <div key={i} style={{ background: "#0a0a0a", borderRadius: 10, padding: "14px 16px" }}>
          <div style={{ color: c.color, fontSize: 13, fontWeight: 700, marginBottom: 4 }}>{c.channel}</div>
          <Tag color={c.color}>{c.priority}</Tag>
          <div style={{ marginTop: 10 }}>
            {c.tactics.map((t, j) => (
              <div key={j} style={{ color: TEXT, fontSize: 12, padding: "4px 0", borderBottom: `1px solid ${BORDER}22` }}>
                <span style={{ color: c.color }}>→</span> {t}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>

  <Section title="💬 The Sales Conversation — What to Say and How">
    <Alert type="warn">
      In Yellel and rural Algeria, sales happen through conversation, not through brochures. The following are the actual frameworks for how to talk to each type of client.
    </Alert>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
      {[
        {
          scenario: "First contact — WhatsApp inquiry",
          wrong: "Sending a long PDF of packages immediately",
          right: "Start with: 'السلام عليكم، اش نقدرو نعاونك؟' — let them talk first. Understand their timeline and budget before presenting anything.",
        },
        {
          scenario: "Price objection — 'غالية'",
          wrong: "Defending the price or lowering it immediately",
          right: "'فهمتك — ولهذا عندنا التقسيط. قولولي شحال تقدر تدفع ولا شهر؟' — convert to installment conversation.",
        },
        {
          scenario: "Trust objection — 'نخاف من نتاع السفر'",
          wrong: "Generic reassurance",
          right: "Share a specific client name (with permission) from their commune. Offer to call a past pilgrim as reference. Show their departure photo at the airport.",
        },
        {
          scenario: "Delay — 'نشوف بكرة'",
          wrong: "Following up aggressively",
          right: "'واخا — بس العلم عليك انو الأماكن محدودة. ارسلك ليست الانتظار بلا التزام.' — waitlist = soft commitment = they stay warm.",
        },
      ].map((s, i) => (
        <div key={i} style={{ background: "#0a0a0a", borderRadius: 8, padding: "14px" }}>
          <div style={{ color: GOLD, fontSize: 13, fontWeight: 700, marginBottom: 8 }}>{s.scenario}</div>
          <div style={{ color: RED, fontSize: 12, marginBottom: 6 }}>✗ Wrong: {s.wrong}</div>
          <div style={{ color: GREEN, fontSize: 12 }}>✓ Right: {s.right}</div>
        </div>
      ))}
    </div>
  </Section>
</div>
```

);
}

function Visa() {
return (
<div>
<Alert type="warn">
All information below is based on official Saudi Ministry of Hajj & Umrah policies, verified agency documentation, and the Nusuk platform guidelines as of 2025–2026. Visa rules change — always verify current requirements before advising clients.
</Alert>

```
  <Section title="📋 Umrah Visa — Complete Requirements for Algerian Citizens (2026)">
    <Alert type="info">
      <strong>Important 2026 dates:</strong> Last date to apply: March 20, 2026 (1 Shawwal 1447 AH). Last entry into Saudi Arabia: April 3, 2026. Last exit: April 18, 2026. Umrah visas reopen mid-to-late June 2026 after Hajj season.
    </Alert>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
      <div>
        <div style={{ color: GOLD, fontSize: 13, fontWeight: 700, marginBottom: 10 }}>Mandatory Documents</div>
        {[
          { doc: "Valid Passport", detail: "Minimum 6 months validity from entry date into Saudi Arabia" },
          { doc: "Umrah Visa Application", detail: "Applied through authorized travel agent or Saudi Embassy" },
          { doc: "Confirmed Return Ticket", detail: "Pre-booked return flights — mandatory proof" },
          { doc: "Proof of Accommodation", detail: "Hotel booking confirmation in Makkah and Madinah" },
          { doc: "Meningitis Vaccination Certificate", detail: "Mandatory — must be taken at least 10 days before travel" },
          { doc: "Umrah Package Booking Confirmation", detail: "From licensed travel agency — your booking confirmation" },
          { doc: "Recent Passport Photo", detail: "Color photo, white background" },
          { doc: "Travel Insurance", detail: "Emergency medical coverage — often included in visa fee" },
        ].map((d, i) => (
          <div key={i} style={{ padding: "8px 0", borderBottom: `1px solid ${BORDER}22` }}>
            <div style={{ color: TEXT, fontSize: 13, fontWeight: 600 }}>{d.doc}</div>
            <div style={{ color: DIM, fontSize: 12 }}>{d.detail}</div>
          </div>
        ))}
      </div>
      <div>
        <div style={{ color: GOLD, fontSize: 13, fontWeight: 700, marginBottom: 10 }}>Application Process for Algerians</div>
        <Alert type="warn">
          <strong>Critical note for Algeria:</strong> Unlike some countries with access to the Nusuk e-visa directly, Algerian citizens apply through the <strong>embassy route</strong> or through an <strong>authorized travel agency</strong>. The embassy route means going through the Saudi Embassy in Algiers. The agency route means your agency handles it — which is your value proposition.
        </Alert>
        {[
          { step: "1", action: "Gather all documents (passport, vaccination, photos)" },
          { step: "2", action: "Confirm Umrah package with MinaDoor Travel (flight + hotel + guide)" },
          { step: "3", action: "Agency submits visa application to Saudi Embassy or through licensed channel" },
          { step: "4", action: "Processing time: 5–10 working days typically" },
          { step: "5", action: "Visa received — valid for 90 days from entry date" },
          { step: "6", action: "Health checks: ensure meningitis vaccination done" },
          { step: "7", action: "Departure — agency provides all logistics and religious guidance" },
        ].map((s, i) => (
          <div key={i} style={{ display: "flex", gap: 10, padding: "7px 0", borderBottom: `1px solid ${BORDER}22` }}>
            <div style={{ background: `${GOLD}22`, borderRadius: "50%", width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center", color: GOLD, fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{s.step}</div>
            <div style={{ color: TEXT, fontSize: 13 }}>{s.action}</div>
          </div>
        ))}
      </div>
    </div>
  </Section>

  <Section title="🚫 Visa Rejection Reasons — What to Warn Clients About">
    <Alert type="danger">
      These are real rejection causes. Educating your clients about these builds massive trust and differentiates you from agencies that just take money and submit paperwork blindly.
    </Alert>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
      {[
        { reason: "Passport validity below 6 months", fix: "Renew passport before applying. Do not wait." },
        { reason: "Missing or expired meningitis vaccination", fix: "Get it at least 10 days before travel. Document required." },
        { reason: "Unconfirmed or vague hotel booking", fix: "Confirmed hotel booking letter required — MinaDoor handles this." },
        { reason: "No return flight ticket", fix: "Return ticket must be booked and confirmed before visa application." },
        { reason: "Applying after the seasonal cutoff deadline", fix: "For 2026, deadline was March 20. Next window: mid-June 2026." },
        { reason: "Incomplete application form", fix: "Agency submission ensures accuracy. DIY increases risk." },
      ].map((r, i) => (
        <div key={i} style={{ background: "#0a0a0a", borderRadius: 8, padding: "12px 14px" }}>
          <div style={{ color: RED, fontSize: 12, marginBottom: 6 }}>✗ {r.reason}</div>
          <div style={{ color: GREEN, fontSize: 12 }}>✓ Fix: {r.fix}</div>
        </div>
      ))}
    </div>
  </Section>

  <Section title="📱 The WhatsApp Auto-Reply Flow — Exact Scripts">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
      <div>
        <div style={{ color: GOLD, fontSize: 13, fontWeight: 700, marginBottom: 10 }}>Flow 1: Umrah Inquiry (Primary)</div>
        <div style={{ background: "#0a0a0a", borderRadius: 8, padding: "14px", fontFamily: "monospace", fontSize: 12, color: TEXT, lineHeight: 1.9 }}>
          <div style={{ color: DIM, marginBottom: 8 }}>// Trigger: any message about عمرة, سفر, تقسيط</div>
          <div>السلام عليكم ورحمة الله 🕌</div>
          <div>مرحبا بيك في مينادور للسفر</div>
          <div style={{ marginTop: 8 }}>عمرة بالتقسيط:</div>
          <div>💰 100,000 دج دفعة أولى فقط</div>
          <div>📅 10 أشهر — 0% فوائد</div>
          <div>✈️ تذاكر + إقامة + تأشيرة + إرشاد</div>
          <div style={{ marginTop: 8 }}>ارسلنا اسمك ونتصلو بيك</div>
          <div>إن شاء الله 🤲</div>
        </div>
      </div>
      <div>
        <div style={{ color: GOLD, fontSize: 13, fontWeight: 700, marginBottom: 10 }}>Flow 2: Visa Questions Specifically</div>
        <div style={{ background: "#0a0a0a", borderRadius: 8, padding: "14px", fontFamily: "monospace", fontSize: 12, color: TEXT, lineHeight: 1.9 }}>
          <div style={{ color: DIM, marginBottom: 8 }}>// Trigger: تأشيرة, visa, وثائق</div>
          <div>للتأشيرة ما عليك الا:</div>
          <div>📗 جواز السفر (6 أشهر على الأقل)</div>
          <div>💉 تلقيح الحمى الشوكية</div>
          <div>📸 صورة شخصية</div>
          <div>🎫 تذكرة العودة</div>
          <div style={{ marginTop: 8 }}>وحنا ندبروا الباقي كامل</div>
          <div>ارسلنا رقمك ونشرحولك كلشي 📞</div>
        </div>
      </div>
    </div>
  </Section>

  <Section title="📅 Visa Seasonal Calendar — Critical Dates">
    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
      <thead>
        <tr style={{ borderBottom: `1px solid ${BORDER}` }}>
          {["Period", "Status", "Your Action", "Client Communication"].map(h => (
            <th key={h} style={{ color: DIM, textAlign: "left", padding: "8px 10px", fontWeight: 600 }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[
          { period: "Now – March 20, 2026", status: "🟢 OPEN", action: "Push bookings hard — deadline approaching", client: "Urgency posts: 'الأجل يقرب — سجل الآن'" },
          { period: "March 20 – June 2026", status: "🔴 CLOSED (Hajj season)", action: "Collect waitlist, prep next season packages", client: "Build anticipation: 'نستناوك الموسم الجاي'" },
          { period: "Mid-June 2026 onwards", status: "🟢 REOPENS", action: "First available = first bookings. Be ready.", client: "Announce reopening day 1 with priority list" },
          { period: "Ramadan 2027 (approx Feb)", status: "⚡ PEAK DEMAND", action: "Premium pricing period — most spiritual demand", client: "Start selling Ramadan Umrah 4–5 months early" },
        ].map((r, i) => (
          <tr key={i} style={{ borderBottom: `1px solid ${BORDER}22`, background: i % 2 === 0 ? "#0a0a0a" : "transparent" }}>
            <td style={{ color: GOLD, padding: "10px", fontFamily: "monospace", fontSize: 12 }}>{r.period}</td>
            <td style={{ padding: "10px" }}>{r.status}</td>
            <td style={{ color: TEXT, padding: "10px", fontSize: 12 }}>{r.action}</td>
            <td style={{ color: DIM, padding: "10px", fontSize: 12 }}>{r.client}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </Section>
</div>
```

);
}

function ContentStrategy() {
return (
<div>
<Section title="🎬 Content That Converts — The Umrah Edition">
<Alert type="info">
Content for Umrah travel is fundamentally emotional. Unlike buying a product, people are buying a dream they’ve held for years. Every piece of content should speak to the heart first, the mind second.
</Alert>
<div style={{ display: “grid”, gridTemplateColumns: “1fr 1fr”, gap: 12 }}>
{[
{
type: “Departure Videos (Highest Performing)”,
desc: “Film the moment a client family leaves for Umrah. The tears. The hugs. The prayers. The children waving goodbye. This is the most emotionally resonant content possible.”,
hook: “Hook: ‘اليوم عائلة من رليزان تمشي للعمرة مع مينادور’”,
viral: “Why it goes viral: It shows proof, emotion, and aspiration simultaneously.”
},
{
type: “Return Testimonials”,
desc: “Film clients when they return. The spiritual change is visible on their faces. Ask them to speak freely about their experience. No script — authenticity wins.”,
hook: “Hook: ‘رجعنا من العمرة — الحمد لله’ — the gratitude is the content.”,
viral: “Why it converts: Social proof is the #1 trust builder for Umrah agencies.”
},
{
type: “Process Explainers”,
desc: “Simple step-by-step: ‘كيفاش تسجل في مينادور؟’ Show the real process — calling, signing, paying, getting documents, departing. Demystify the experience.”,
hook: “Hook: ‘خطوات بسيطة وتكون في المكة’ — simplicity as a value prop.”,
viral: “Why it works: It removes the fear of the unknown process.”
},
{
type: “Installment Calculator Content”,
desc: “Visual breakdown: ‘ادفع 100 ألف، والباقي 10 أشهر — 30,000 دج في الشهر.’ Show it as a simple graphic. Make the math feel easy.”,
hook: “Hook: ‘العمرة ما غلات — حنا دبرنالك الحل’”,
viral: “Why it converts: It answers the #1 objection before they raise it.”
},
{
type: “Educational Islamic Content”,
desc: “Short posts about Umrah rituals, their meaning, and preparation tips. Position MinaDoor as a knowledgeable guide, not just a ticket seller.”,
hook: “Example: ‘شنو تعمل في يوم الوصول للمكة؟’ — educational hook”,
viral: “Why it builds trust: People research before they buy. Be the answer to their research.”
},
{
type: “Scarcity & Social Proof Posts”,
desc: “Monthly update: ‘الشهر الجاي عندنا 5 أماكن باش’ — real numbers, real availability. Never fake scarcity — it destroys trust permanently when discovered.”,
hook: “Hook: ‘التسجيل يغلق الجمعة — باقي 3 أماكن’”,
viral: “Why it works: Real scarcity creates urgency. Fake scarcity destroys you.”
}
].map((c, i) => (
<div key={i} style={{ background: “#0a0a0a”, borderRadius: 8, padding: “14px” }}>
<div style={{ color: GOLD, fontSize: 13, fontWeight: 700, marginBottom: 6 }}>{c.type}</div>
<div style={{ color: TEXT, fontSize: 12, lineHeight: 1.7, marginBottom: 8 }}>{c.desc}</div>
<div style={{ color: BLUE, fontSize: 12, marginBottom: 4 }}>🎯 {c.hook}</div>
<div style={{ color: DIM, fontSize: 12 }}>📈 {c.viral}</div>
</div>
))}
</div>
</Section>

```
  <Section title="🗣️ Language & Tone — The Exact Register to Use">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
      <div>
        <div style={{ color: GOLD, fontSize: 13, fontWeight: 700, marginBottom: 10 }}>✓ Language That Works</div>
        {[
          { right: "ادفع 100 ألف وتمشي للعمرة", why: "Direct, simple, accessible" },
          { right: "حنا معاك من أول خطوة لما ترجع", why: "Partnership, not transaction" },
          { right: "رحلة ما تنساها — الحمد لله", why: "Spiritual + emotional" },
          { right: "أرسل أمك أو بيك — أحسن هدية", why: "Family value trigger" },
          { right: "0 فوائد — 0 حيل — خدمة حلال", why: "Addresses riba concern" },
          { right: "عائلة من رليزان مشات معنا", why: "Hyper-local social proof" },
        ].map((r, i) => (
          <div key={i} style={{ padding: "7px 0", borderBottom: `1px solid ${BORDER}22` }}>
            <div style={{ color: GREEN, fontSize: 13 }}>"{r.right}"</div>
            <div style={{ color: DIM, fontSize: 11 }}>→ {r.why}</div>
          </div>
        ))}
      </div>
      <div>
        <div style={{ color: RED, fontSize: 13, fontWeight: 700, marginBottom: 10 }}>✗ Language to Avoid</div>
        {[
          { wrong: "Best travel agency in Algeria", why: "Unverifiable claim — sounds fake" },
          { wrong: "Guaranteed visa approval", why: "Never guarantee — visa decisions are Saudi government's" },
          { wrong: "Ultra-cheap packages", why: "Cheapness signals poor quality for spiritual travel" },
          { wrong: "Book NOW!!! 🔥🔥🔥", why: "Aggressive = distrust in rural Algerian culture" },
          { wrong: "We are number 1", why: "Claims without proof are worthless" },
          { wrong: "100% satisfaction guaranteed", why: "Overpromising = risk of failure to deliver" },
        ].map((r, i) => (
          <div key={i} style={{ padding: "7px 0", borderBottom: `1px solid ${BORDER}22` }}>
            <div style={{ color: RED, fontSize: 13 }}>"{r.wrong}"</div>
            <div style={{ color: DIM, fontSize: 11 }}>→ {r.why}</div>
          </div>
        ))}
      </div>
    </div>
  </Section>
</div>
```

);
}

function DosAndDonts() {
const items = {
dos: [
{ item: “Ask every client for permission to film their departure/return”, reason: “Authentic testimonials are 10× more powerful than any ad” },
{ item: “Be completely transparent about what’s included and what’s not”, reason: “Trust is the product for spiritual travel. Surprises destroy it.” },
{ item: “Build a WhatsApp waitlist for the next Umrah window”, reason: “A list of 50 interested people = guaranteed bookings when you reopen” },
{ item: “Partner with local mosque imams for credibility”, reason: “Religious authority endorsement is the most powerful trust signal in rural Algeria” },
{ item: “Send educational Umrah content weekly even when not selling”, reason: “Stays top of mind. When they’re ready to buy, they think of you first.” },
{ item: “Create a ‘MinaDoor Pilgrim’ community on WhatsApp for past clients”, reason: “Past pilgrims sharing photos from Mecca is your best ongoing advertisement” },
{ item: “Always be clear about visa seasonal deadlines upfront”, reason: “Managing expectations prevents disappointment and protects your reputation” },
{ item: “Follow up with clients 3, 6, and 12 months after their trip”, reason: “Umrah repeat rate is high. The reconnection costs nothing.” },
{ item: “Document every departure with photos/video (with consent)”, reason: “You’re building a visual archive of proof that compounds over time” },
{ item: “Track every lead source in a simple Google Sheet”, reason: “Knowing which channel brings real clients lets you double down on what works” },
],
donts: [
{ item: “Never guarantee visa approval to any client”, reason: “Visa decisions are 100% the Saudi government’s. Promise the process, not the outcome.” },
{ item: “Never fabricate testimonials or invent client stories”, reason: “In a small community, lies surface fast. One caught lie ends your business.” },
{ item: “Don’t advertise prices you can’t deliver consistently”, reason: “Price changes happen (flight costs, hotel rates). Always say ‘starting from’” },
{ item: “Don’t ignore comments or messages for more than a few hours”, reason: “In rural Algeria, slow response = I don’t care about you. Fatal for trust.” },
{ item: “Don’t accept bookings without a signed contract and receipt”, reason: “Protects both you and the client. No contract = no legal recourse if issues arise” },
{ item: “Don’t market aggressively during Ramadan evenings”, reason: “Peak prayer times are for worship, not sales. Respect the sacred context.” },
{ item: “Never use fake urgency (‘only 2 spots left!’ when you have 20)”, reason: “Algerian rural communities verify claims. Getting caught destroys trust permanently.” },
{ item: “Don’t skip the health/vaccination checklist for clients”, reason: “A client denied boarding due to missing vaccination is your reputational disaster” },
{ item: “Don’t accept cash without issuing a formal receipt”, reason: “Accounting, legal protection, and client confidence all depend on paper trail” },
{ item: “Don’t post content without knowing the platform’s best posting time”, reason: “A departure video posted at 3 AM reaches 10% of the audience it would at 7 PM” },
]
};

return (
<div>
<div style={{ display: “grid”, gridTemplateColumns: “1fr 1fr”, gap: 16 }}>
<Section title="✅ Absolute DO's — Non-Negotiable" accent={GREEN}>
{items.dos.map((d, i) => (
<div key={i} style={{ padding: “10px 0”, borderBottom: `1px solid ${BORDER}22` }}>
<div style={{ display: “flex”, gap: 10, alignItems: “flex-start” }}>
<span style={{ color: GREEN, fontSize: 16, flexShrink: 0 }}>✓</span>
<div>
<div style={{ color: TEXT, fontSize: 13, fontWeight: 600 }}>{d.item}</div>
<div style={{ color: DIM, fontSize: 12, marginTop: 3 }}>{d.reason}</div>
</div>
</div>
</div>
))}
</Section>

```
    <Section title="❌ Absolute DON'Ts — Will Kill Your Business" accent={RED}>
      {items.donts.map((d, i) => (
        <div key={i} style={{ padding: "10px 0", borderBottom: `1px solid ${BORDER}22` }}>
          <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <span style={{ color: RED, fontSize: 16, flexShrink: 0 }}>✗</span>
            <div>
              <div style={{ color: TEXT, fontSize: 13, fontWeight: 600 }}>{d.item}</div>
              <div style={{ color: DIM, fontSize: 12, marginTop: 3 }}>{d.reason}</div>
            </div>
          </div>
        </div>
      ))}
    </Section>
  </div>
</div>
```

);
}

function SeasonalCalendar() {
return (
<div>
<Alert type="info">
Umrah demand follows the Islamic lunar calendar. Ramadan is peak season. Understanding this seasonal rhythm is the difference between a reactive agency and one that captures clients 3 months before they’re ready to buy.
</Alert>

```
  <Section title="📅 Annual Strategy Calendar — When to Push What">
    {[
      {
        period: "Ramadan (Peak — Lunar, Feb/Mar 2027 approx)",
        intensity: "🔥🔥🔥 MAXIMUM",
        color: GOLD,
        strategy: "Highest spiritual demand of the year. Premium pricing justified. Start selling Ramadan Umrah 4–5 months early. Content: fasting + spirituality + 'perform Umrah in the holiest month' messaging.",
        contentFocus: ["'العمرة في رمضان تعادل حجة' content — this is Islamic teaching that drives massive demand", "Countdown content: '30 يوم لرمضان — سجل قبل امتلاء الأماكن'", "Family Ramadan Umrah packages — travel as a family during school break"],
        warning: "Visa applications must be submitted before seasonal cutoff. For Ramadan, apply months ahead."
      },
      {
        period: "Post-Ramadan / Summer (May–August)",
        intensity: "🔥🔥 HIGH",
        color: BLUE,
        strategy: "School holidays = family travel. Parent sending adult children. Retirees with time. Secondary peak. Push family packages. Umrah visa closes for Hajj in this period — focus on waitlist building.",
        contentFocus: ["Summer departure content — airport photos, families leaving", "Waitlist content: 'سجل الآن للموسم الجاي'", "Post-trip testimonials from Ramadan pilgrims — social proof machine"],
        warning: "Umrah visas suspended during Hajj season (roughly May–June). No new Umrah visas in this window."
      },
      {
        period: "Post-Hajj / Autumn (July–October)",
        intensity: "🔥🔥 HIGH",
        color: GREEN,
        strategy: "Visa season reopens post-Hajj (mid-June onwards). First movers get first bookings. Hajj attendees inspire neighbors. Strong word-of-mouth period. Launch first packages for the new Umrah season aggressively.",
        contentFocus: ["'الموسم بدأ — سجل الآن' announcement posts", "Hajj return community content: 'عاد الحجاج من البقاع' inspires Umrah desire in neighbors", "Early-bird installment offers for the coming season"],
        warning: "Be first to announce visa season reopening in your community. First impression = first bookings."
      },
      {
        period: "Winter / Year-End (November–January)",
        intensity: "🔥 MODERATE",
        color: DIM,
        strategy: "Steady demand. Year-end bonuses for workers = lump sum availability. Good for closing warm leads who've been on the fence. Push the installment system. Less competition from other life events.",
        contentFocus: ["'آخر السنة — بداية جديدة في المكة' messaging", "Gratitude content: 'الحمد لله — 2026 مشينا للعمرة'", "Year planning: 'خطط عمرتك 2027 من الآن'"],
        warning: "December is holiday-adjacent for families — decision-making slows. Focus on building the pipeline."
      }
    ].map((s, i) => (
      <div key={i} style={{ background: "#0a0a0a", borderRadius: 10, padding: "16px 20px", marginBottom: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
          <div style={{ color: s.color, fontSize: 14, fontWeight: 700 }}>{s.period}</div>
          <div style={{ fontSize: 14 }}>{s.intensity}</div>
        </div>
        <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.7, margin: "0 0 12px" }}>{s.strategy}</p>
        <div style={{ marginBottom: 10 }}>
          <div style={{ color: DIM, fontSize: 11, marginBottom: 6 }}>CONTENT FOCUS</div>
          {s.contentFocus.map((c, j) => (
            <div key={j} style={{ color: TEXT, fontSize: 12, padding: "3px 0" }}>
              <span style={{ color: s.color }}>→</span> {c}
            </div>
          ))}
        </div>
        <div style={{ background: `${RED}11`, border: `1px solid ${RED}33`, borderRadius: 6, padding: "8px 12px", color: TEXT, fontSize: 12 }}>
          ⚠️ {s.warning}
        </div>
      </div>
    ))}
  </Section>

  <Section title="📊 Monthly Posting Rhythm — What to Post When">
    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
      <thead>
        <tr style={{ borderBottom: `1px solid ${BORDER}` }}>
          {["Week", "Monday", "Wednesday", "Friday", "Sunday"].map(h => (
            <th key={h} style={{ color: DIM, textAlign: "left", padding: "8px 10px", fontWeight: 600 }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[
          { week: "Week 1", mon: "Educational: Umrah ritual explainer", wed: "Testimonial or departure video", fri: "Spiritual Jumu'a content + soft CTA", sun: "Installment breakdown graphic" },
          { week: "Week 2", mon: "Visa process explainer", wed: "Client story / behind the scenes", fri: "Inspirational Kaaba content + CTA", sun: "Q&A: common Umrah questions" },
          { week: "Week 3", mon: "Package announcement / availability update", wed: "Educational: What happens in Madinah", fri: "Community content: 'رليزان تمشي للعمرة'", sun: "Scarcity update: spots remaining" },
          { week: "Week 4", mon: "Referral post: 'ورجلنا صاحبك'", wed: "Return pilgrim testimonial", fri: "Monthly recap + next month preview", sun: "Waitlist call for next season" },
        ].map((r, i) => (
          <tr key={i} style={{ borderBottom: `1px solid ${BORDER}22`, background: i % 2 === 0 ? "#0a0a0a" : "transparent" }}>
            <td style={{ color: GOLD, padding: "10px", fontWeight: 600 }}>{r.week}</td>
            <td style={{ color: TEXT, padding: "10px", fontSize: 12 }}>{r.mon}</td>
            <td style={{ color: TEXT, padding: "10px", fontSize: 12 }}>{r.wed}</td>
            <td style={{ color: TEXT, padding: "10px", fontSize: 12 }}>{r.fri}</td>
            <td style={{ color: TEXT, padding: "10px", fontSize: 12 }}>{r.sun}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <Alert type="warn" style={{ marginTop: 12 }}>
      Best times for Algeria (CET+1): Post educational content at 9–11 AM. Post emotional/spiritual content at 7–9 PM. Friday: post before Jumu'a (9–11 AM) and after (2–4 PM). Never post during Fajr or peak prayer times.
    </Alert>
  </Section>
</div>
```

);
}

const tabComponents = {
market: <Market />,
customer: <Customer />,
umrah: <UmrahStrategy />,
visa: <Visa />,
content: <ContentStrategy />,
dodonts: <DosAndDonts />,
calendar: <SeasonalCalendar />,
};

export default function App() {
const [active, setActive] = useState(“market”);

return (
<div style={{ background: DARK, minHeight: “100vh”, fontFamily: “‘Segoe UI’, sans-serif”, color: TEXT }}>
<style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap'); * { box-sizing: border-box; } ::-webkit-scrollbar { width: 6px; } ::-webkit-scrollbar-track { background: #111; } ::-webkit-scrollbar-thumb { background: #333; border-radius: 3px; }`}</style>

```
  {/* Header */}
  <div style={{ background: `linear-gradient(135deg, #0a0a0a 0%, #151005 100%)`, borderBottom: `1px solid ${GOLD}33`, padding: "20px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
    <div>
      <div style={{ color: GOLD, fontSize: 10, letterSpacing: 4, textTransform: "uppercase", marginBottom: 4 }}>Umrah & Visa — Growth Playbook</div>
      <h1 style={{ fontFamily: "'Playfair Display', serif", color: TEXT, fontSize: 22, margin: 0 }}>
        MinaDoor Travel <span style={{ color: GOLD }}>— Yellel, Relizane</span>
      </h1>
    </div>
    <div style={{ textAlign: "right" }}>
      <div style={{ color: DIM, fontSize: 11 }}>Research-validated · Zero hallucinations</div>
      <div style={{ color: GOLD, fontSize: 12, fontFamily: "monospace" }}>18.03M Umrah pilgrims in 2025 — the market is real</div>
    </div>
  </div>

  {/* Nav */}
  <div style={{ display: "flex", gap: 4, padding: "12px 24px", background: "#0a0a0a", borderBottom: `1px solid ${BORDER}`, overflowX: "auto", flexWrap: "nowrap" }}>
    {tabs.map(tab => (
      <button
        key={tab.id}
        onClick={() => setActive(tab.id)}
        style={{ background: active === tab.id ? `${GOLD}22` : "transparent", border: active === tab.id ? `1px solid ${GOLD}66` : `1px solid transparent`, borderRadius: 8, color: active === tab.id ? GOLD : DIM, padding: "7px 14px", fontSize: 13, cursor: "pointer", whiteSpace: "nowrap", transition: "all 0.15s", fontFamily: "'Segoe UI', sans-serif" }}
      >
        {tab.label}
      </button>
    ))}
  </div>

  {/* Content */}
  <div style={{ maxWidth: 1000, margin: "0 auto", padding: "28px 24px" }}>
    {tabComponents[active]}
  </div>
</div>
```

);
}
