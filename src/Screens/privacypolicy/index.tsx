import React from "react";
import { StyleSheet, View } from "react-native";
import { Screen, Text } from "../../Components";
import { AppStackScreenProps } from "../../utils/interfaces";
import { spacing } from "../../theme";

interface PrivacyPolicyProps extends AppStackScreenProps<"ForgotPassword"> {}

export function PrivacyPolicy(props: PrivacyPolicyProps) {
  const today = new Date();
  const effectiveDate = today.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  type Section = {
    title: string;
    body?: string[];
    bullets?: string[];
  };

  const sections: Section[] = [
    {
      title: "1. Overview",
      body: [
        "This Privacy Policy explains how FiveTips ('we', 'our', 'us') collects, uses, discloses, and safeguards your information when you use the application, related services, and any content provided (collectively, the 'Service').",
        "By accessing or using the Service you consent to the practices described in this Policy. If you do not agree, discontinue use immediately.",
      ],
    },
    {
      title: "2. Information We Collect",
      bullets: [
        "Account Data: email address, name (if provided), profile metadata, subscription tier.",
        "Authentication Data: hashed credentials or tokens managed by our auth provider (e.g., Supabase).",
        "Usage Data: app interactions, screens viewed, feature engagement, timestamps.",
        "Device & Technical Data: device model, OS version, app version, language, approximate region (non-precise).",
        "Analytics & Performance: crash logs, latency metrics, error events.",
        "Generated Insights: AI produced analytics and confidence outputs (these may be logged for quality).",
        "Support Communications: messages you send through contact forms or support channels.",
      ],
      body: [
        "We do NOT intentionally collect: government IDs, precise GPS, biometric data, or payment card numbers (billing handled by the app store).",
      ],
    },
    {
      title: "3. How We Use Information",
      bullets: [
        "Provide & maintain core functionality (authentication, personalization).",
        "Generate non-personalized analytical insights & model improvements.",
        "Process subscriptions, eligibility, and trial status.",
        "Monitor performance, detect abuse, prevent fraud.",
        "Respond to support inquiries and feedback.",
        "Comply with legal or regulatory obligations.",
        "Improve UX, feature relevance, and stability.",
      ],
    },
    {
      title: "4. Legal Bases (Where Applicable)",
      body: [
        "Depending on jurisdiction, processing may rely on: (a) performance of a contract; (b) legitimate interests (product improvement, security); (c) consent (where expressly obtained); (d) compliance with legal obligations.",
      ],
    },
    {
      title: "5. Data Retention",
      body: [
        "We retain personal data only as long as necessary for the purposes described, unless a longer retention period is required by law (e.g., accounting, security logs). Aggregated or anonymized data may be retained indefinitely.",
      ],
    },
    {
      title: "6. Sharing & Disclosure",
      bullets: [
        "Service Providers: hosting, analytics, logging, error monitoring, email delivery.",
        "Infrastructure & Auth: platforms like Supabase or similar managed services.",
        "Legal Compliance: if required by law, subpoena, or valid governmental request.",
        "Business Transfers: merger, acquisition, restructuring (subject to safeguards).",
        "Protection of Rights: to investigate abuse, fraud, security threats.",
      ],
      body: [
        "We do not sell your personal data for monetary value. We do not share for third‑party direct marketing.",
      ],
    },
    {
      title: "7. Cookies & Tracking",
      body: [
        "The mobile app may use local storage or similar mechanisms for session persistence. Web or hybrid components may utilize analytics scripts. You can restrict certain tracking via OS-level privacy settings.",
      ],
    },
    {
      title: "8. AI & Generated Content",
      body: [
        "AI outputs may be logged (de‑identified where feasible) to enhance quality and safety. Do not input sensitive personal data into free-form text fields.",
      ],
    },
    {
      title: "9. Data Security",
      body: [
        "We implement reasonable administrative, technical, and organizational safeguards. No system is 100% secure; you are responsible for protecting your account credentials.",
      ],
    },
    {
      title: "10. International Transfers",
      body: [
        "Data may be processed in regions different from your residence. Where required, appropriate safeguards (standard contractual clauses or equivalent) are used to protect personal data.",
      ],
    },
    {
      title: "11. Your Rights",
      bullets: [
        "Access: request a copy of personal data.",
        "Rectification: correct inaccurate or incomplete information.",
        "Deletion: request removal subject to legal/legitimate retention grounds.",
        "Restriction: limit certain processing where contested.",
        "Objection: to processing based on legitimate interests (where applicable).",
        "Portability: obtain structured export (where technically feasible).",
        "Withdraw Consent: for operations relying solely on consent.",
      ],
      body: [
        "To exercise rights, use in‑app support or contact channel. We may verify identity before fulfilling a request.",
      ],
    },
    {
      title: "12. Children's Privacy",
      body: [
        "The Service is not directed to individuals under 18. We do not knowingly collect data from minors. If you believe a minor provided data, contact us for removal.",
      ],
    },
    {
      title: "13. Third‑Party Links",
      body: [
        "Links to external resources are not controlled by us; their privacy practices are governed by their own policies.",
      ],
    },
    {
      title: "14. Changes to This Policy",
      body: [
        "We may update this Policy periodically. Material changes will be communicated via in‑app notice or email (where feasible). Continued use after updates signifies acceptance.",
      ],
    },
    {
      title: "15. Contact",
      body: [
        "For privacy inquiries or rights requests, reach us through the Contact Support section in the app.",
      ],
    },
    {
      title: "Effective Date",
      body: [`This Privacy Policy is effective as of ${effectiveDate}.`],
    },
  ];

  return (
    <Screen preset="auto" contentContainerStyle={styles.screenContentContainer}>
      <Text weight="bold" text="Privacy Policy" style={styles._title} />
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
        text="This document is a general template and does not constitute legal advice. Consult qualified counsel to adapt it for your jurisdiction and business model."
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
