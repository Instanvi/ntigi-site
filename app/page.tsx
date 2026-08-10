// This file intentionally left minimal.
// The next-intl middleware (proxy.ts) redirects all "/" requests
// to the locale-prefixed route (e.g. /en or /fr) before this page renders.
export default function RootPage() {
  return null;
}
