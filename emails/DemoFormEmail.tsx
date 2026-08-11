import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
} from "@react-email/components";

interface DemoFormEmailProps {
  name: string;
  email: string;
  company: string;
  operationsArea: string;
  notes?: string;
}

export default function DemoFormEmail({
  name,
  email,
  company,
  operationsArea,
  notes,
}: DemoFormEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={headerTitle}>Demo Request Submission</Heading>
            <Text style={headerSubtitle}>New demo request from Ntigi website</Text>
          </Section>

          {/* Content */}
          <Section style={content}>
            <Text style={greeting}>Hello Ntigi Sales Team,</Text>
            <Text style={paragraph}>
              You have received a new demo request from your website. A potential customer is interested in seeing Ntigi in action. Please review the details below and reach out to schedule their personalized demo:
            </Text>

            {/* Contact Information */}
            <Section style={sectionBlock}>
              <Heading style={sectionHeading}>Requester Information</Heading>
              <Section style={infoBox}>
                <InfoRow label="Name" value={name} />
                <InfoRow label="Email" value={email} />
                <InfoRow label="Company" value={company} />
                <InfoRow label="Operations Area" value={operationsArea} />
              </Section>
            </Section>

            {/* Additional Notes */}
            {notes && (
              <Section style={sectionBlock}>
                <Heading style={sectionHeading}>Additional Notes</Heading>
                <Section style={messageBox}>
                  <Text style={messageText}>{notes}</Text>
                </Section>
              </Section>
            )}

            <Hr style={divider} />

            <Text style={footer}>
              Please reach out to this prospect within 24 hours to schedule their demo and answer any questions.
            </Text>
          </Section>

          {/* Footer */}
          <Section style={footerSection}>
            <Text style={footerText}>
              {new Date().getFullYear()} Ntigi. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <>
      <Text style={infoLabel}>{label}:</Text>
      <Text style={infoValue}>{value}</Text>
    </>
  );
}

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  maxWidth: "600px",
};

const header = {
  backgroundColor: "#1e40af",
  padding: "32px 24px",
  textAlign: "center" as const,
};

const headerTitle = {
  color: "#ffffff",
  fontSize: "28px",
  fontWeight: "bold",
  margin: "0 0 8px 0",
  padding: "0",
};

const headerSubtitle = {
  color: "#dbeafe",
  fontSize: "14px",
  margin: "0",
  fontWeight: "500",
};

const content = {
  padding: "32px 40px",
};

const greeting = {
  fontSize: "16px",
  lineHeight: "26px",
  fontWeight: "600",
  color: "#333",
  marginBottom: "12px",
};

const paragraph = {
  fontSize: "14px",
  lineHeight: "24px",
  color: "#555",
  marginBottom: "24px",
};

const sectionBlock = {
  marginBottom: "28px",
};

const sectionHeading = {
  fontSize: "18px",
  fontWeight: "700",
  color: "#1e40af",
  marginBottom: "16px",
  marginTop: "0",
};

const infoBox = {
  backgroundColor: "#f9fafb",
  border: "1px solid #e5e7eb",
  borderRadius: "8px",
  padding: "20px",
};

const infoLabel = {
  fontSize: "13px",
  fontWeight: "700",
  color: "#2563eb",
  marginBottom: "4px",
  marginTop: "12px",
};

const infoValue = {
  fontSize: "14px",
  color: "#333",
  marginTop: "0",
  marginBottom: "0",
};

const messageBox = {
  backgroundColor: "#f9fafb",
  border: "1px solid #e5e7eb",
  borderRadius: "8px",
  padding: "20px",
};

const messageText = {
  fontSize: "14px",
  color: "#333",
  lineHeight: "22px",
  whiteSpace: "pre-wrap" as const,
  margin: "0",
};

const divider = {
  borderColor: "#e5e7eb",
  margin: "24px 0",
};

const footer = {
  fontSize: "13px",
  color: "#6b7280",
  fontStyle: "italic" as const,
};

const footerSection = {
  backgroundColor: "#f9fafb",
  padding: "20px",
  textAlign: "center" as const,
  borderTop: "1px solid #e5e7eb",
};

const footerText = {
  fontSize: "12px",
  color: "#9ca3af",
  margin: "0",
};
