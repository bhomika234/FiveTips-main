import React from "react";
import { StyleSheet, View } from "react-native";
import { Screen, Text } from "../../Components";
import { AppStackScreenProps } from "../../utils/interfaces";
import { spacing } from "../../theme";
interface TermsConditionsProps extends AppStackScreenProps<"ForgotPassword"> {}

export function TermsConditions(props: TermsConditionsProps) {
  const today = new Date();
  const effectiveDate = today.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Each section: title + body (array paragraphs) OR bullets
  const sections: {
    title: string;
    body?: string[];
    bullets?: string[];
  }[] = [
    {
      title: "1. Acceptance of Terms",
      body: [
        "These Terms & Conditions (the 'Terms') govern your access to and use of the FiveTips mobile application, website, services, content, features, and subscriptions (collectively, the 'Service'). By creating an account, accessing, or using the Service you confirm that you have read, understood, and agree to be bound by these Terms.",
        "If you do not agree, you must discontinue use immediately. If you use the Service on behalf of an organization, you represent that you have authority to bind that organization to these Terms.",
      ],
    },
    {
      title: "2. Nature of Information – No Financial Advice",
      bullets: [
        "All content (including AI-generated insights, tips, signals, analytics, charts, confidence scores, and educational material) is provided strictly for general informational and educational purposes.",
        "FiveTips is NOT a broker, fiduciary, financial planner, investment advisor, portfolio manager, or tax advisor.",
        "Nothing in the Service constitutes an offer, solicitation, recommendation, endorsement, or advice to buy, sell, or hold any security, cryptocurrency, commodity, or other financial instrument.",
        "You are solely responsible for any investment decisions you make. Always perform your own due diligence or consult a licensed professional.",
      ],
      body: [
        "By using the Service you acknowledge and agree that you assume all risk for any investment decisions and outcomes.",
      ],
    },
    {
      title: "3. Eligibility",
      body: [
        "You must be at least 18 years old (or the age of majority in your jurisdiction) to use the Service. You warrant that the registration information you provide is accurate, complete, and kept current. We may suspend or terminate access if we believe information is inaccurate or these Terms are violated.",
      ],
    },
    {
      title: "4. Account & Security",
      bullets: [
        "You are responsible for safeguarding your login credentials.",
        "Immediately notify us of any unauthorized access or suspected breach.",
        "We are not liable for losses arising from compromised credentials unless caused directly by our negligence.",
      ],
    },
    {
      title: "5. Subscription, Trials & Billing",
      body: [
        "Certain features require an active paid subscription. Trial periods (if offered) permit limited-time access; after expiration, billing continues automatically unless canceled at least 24 hours before renewal.",
        "Prices, features, and plan structures may change with prior notice where required. Taxes and processing fees may apply.",
        "Refunds (if any) follow the relevant app store (Apple App Store / Google Play) policies. We do not process refunds for purchases made through third‑party platforms.",
      ],
    },
    {
      title: "6. AI & Data Limitations",
      bullets: [
        "Outputs may be probabilistic, incomplete, outdated, or inconsistent.",
        "Data sources may include third‑party feeds; accuracy, latency, or continuity is not guaranteed.",
        "Confidence scores are heuristic and NOT predictive guarantees.",
      ],
      body: [
        "You agree not to rely solely on any single metric or AI output when making financial decisions.",
      ],
    },
    {
      title: "7. User Conduct",
      bullets: [
        "Do not scrape, reverse engineer, or exploit the Service.",
        "Do not upload malicious code, attempt unauthorized access, or interfere with infrastructure.",
        "Do not use content to build or train competing models/services without written consent.",
        "Do not misuse branding, trademarks, or intellectual property.",
      ],
    },
    {
      title: "8. Intellectual Property",
      body: [
        "All trademarks, logos, service marks, graphs, UI components, generated analytics, and proprietary algorithms are owned or licensed by FiveTips and protected by applicable intellectual property laws.",
        "You are granted a limited, non‑exclusive, non‑transferable, revocable license to access and use the Service for personal, non‑commercial purposes only.",
      ],
    },
    {
      title: "9. Third‑Party Links & Services",
      body: [
        "The Service may reference third‑party content, APIs, or integrations. We do not endorse nor assume responsibility for third‑party sites, data accuracy, availability, or security. Use of third‑party resources is at your own risk.",
      ],
    },
    {
      title: "10. Risk Disclosure",
      bullets: [
        "Investing involves risk including possible loss of principal.",
        "Market conditions can change rapidly and unpredictably.",
        "Past performance, back‑tests, simulations, or confidence scores do NOT guarantee future results.",
      ],
      body: [
        "You should carefully consider your financial situation, risk tolerance, and consult licensed advisors before acting on any information from the Service.",
      ],
    },
    {
      title: "11. Privacy & Data",
      body: [
        "Use of the Service is also governed by our Privacy Policy (available in‑app). By using the Service you consent to data processing as described therein, including aggregation or anonymization for analytics and model improvement.",
      ],
    },
    {
      title: "12. Suspension & Termination",
      body: [
        "We may suspend or terminate access (with or without notice) for violations of these Terms, suspected fraud, legal compliance, or security concerns. Upon termination your right to use the Service ceases immediately; sections that by nature should survive (e.g., IP, disclaimers, limitation of liability) will remain in effect.",
      ],
    },
    {
      title: "13. Disclaimer of Warranties",
      body: [
        "THE SERVICE IS PROVIDED 'AS IS' AND 'AS AVAILABLE' WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ACCURACY, COMPLETENESS, RELIABILITY, NON‑INFRINGEMENT, MERCHANTABILITY, OR FITNESS FOR A PARTICULAR PURPOSE. YOUR USE IS AT YOUR SOLE RISK.",
      ],
    },
    {
      title: "14. Limitation of Liability",
      body: [
        "TO THE MAXIMUM EXTENT PERMITTED BY LAW, FIVE TIPS (AND ITS AFFILIATES, OFFICERS, EMPLOYEES, LICENSORS, PARTNERS) SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES; NOR ANY LOSS OF PROFITS, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES ARISING FROM OR RELATED TO YOUR USE OR INABILITY TO USE THE SERVICE, EVEN IF ADVISED OF THE POSSIBILITY.",
        "IN NO EVENT WILL OUR TOTAL AGGREGATE LIABILITY EXCEED (A) THE AMOUNT PAID BY YOU IN THE THREE (3) MONTHS PRECEDING THE CLAIM OR (B) FIFTY U.S. DOLLARS (USD $50), WHICHEVER IS GREATER.",
      ],
    },
    {
      title: "15. Indemnification",
      body: [
        "You agree to defend, indemnify, and hold harmless FiveTips and its affiliates from any claims, damages, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or related to: (a) your use of the Service; (b) violation of these Terms; or (c) infringement of any third‑party rights.",
      ],
    },
    {
      title: "16. Changes to the Service & Terms",
      body: [
        "We may modify or discontinue features at any time. We may update these Terms; material changes will be communicated via in‑app notice or email (where feasible). Continued use after changes constitutes acceptance of the revised Terms.",
      ],
    },
    {
      title: "17. Governing Law & Dispute Resolution",
      body: [
        "These Terms shall be governed by and construed in accordance with the laws of your primary operating jurisdiction (unless overridden by mandatory local law). Any disputes shall first attempt informal resolution; if unresolved, they may be submitted to binding arbitration or courts of competent jurisdiction as determined by our governing policy. Local consumer protection laws may still apply.",
      ],
    },
    {
      title: "18. Severability",
      body: [
        "If any provision of these Terms is held invalid or unenforceable, the remaining provisions shall remain in full force and effect.",
      ],
    },
    {
      title: "19. No Waiver",
      body: [
        "Failure to enforce any right or provision will not constitute a waiver of that right or provision.",
      ],
    },
    {
      title: "20. Contact",
      body: [
        "Questions about these Terms may be directed via the Contact Support section in the app.",
      ],
    },
    {
      title: "21. Acknowledgements",
      bullets: [
        "This is not financial advice.",
        "Past performance does not guarantee future results.",
        "You understand and accept investment risks.",
        "You are solely responsible for your decisions.",
      ],
    },
    {
      title: "Effective Date",
      body: [`These Terms are effective as of ${effectiveDate}.`],
    },
  ];

  return (
    <Screen preset="auto" contentContainerStyle={styles.screenContentContainer}>
      {/* <Text weight="bold" text="Terms & Conditions" style={styles._title} /> */}
      {sections.map((sec, idx) => (
        <View key={idx} style={styles._section}>
          <Text
            weight="semiBold"
            text={sec.title}
            style={styles._sectionTitle}
          />
          {sec.body &&
            sec.body.map((p, i) => (
              <Text
                key={i}
                weight="medium"
                text={p}
                style={styles._paragraph}
              />
            ))}
          {sec.bullets && (
            <View style={styles._bullets}>
              {sec.bullets.map((b, bi) => (
                <View style={styles._bulletRow} key={bi}>
                  <Text weight="bold" text="•" style={styles._dot} />
                  <Text weight="medium" text={b} style={styles._bulletText} />
                </View>
              ))}
            </View>
          )}
        </View>
      ))}
      <Text
        weight="light"
        style={styles._footer}
        text="Note: This template is provided for general informational purposes and does not constitute legal advice. Consult a qualified attorney to adapt these Terms for your specific business and jurisdiction."
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screenContentContainer: {
    paddingHorizontal: spacing.md,
    paddingBottom: 80,
  },
  _title: {
    fontSize: 22,
    marginTop: spacing.lg,
  },
  _section: {
    marginTop: spacing.md,
  },
  _sectionTitle: {
    fontSize: 16,
  },
  _paragraph: {
    marginTop: spacing.xs,
    lineHeight: 18,
  },
  _bullets: {
    marginTop: spacing.xs,
    gap: 6,
  },
  _bulletRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
  _dot: {
    width: 12,
    lineHeight: 18,
  },
  _bulletText: {
    flex: 1,
    lineHeight: 18,
  },
  _footer: {
    marginTop: spacing.xl,
    lineHeight: 16,
    opacity: 0.7,
    marginBottom: spacing.xl,
  },
});
