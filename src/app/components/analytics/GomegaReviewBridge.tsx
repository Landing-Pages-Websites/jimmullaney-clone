const REVIEW_BRIDGE_SRC =
  "https://app.gomega.ai/review-bridge/latest/review-bridge.js";

export default function GomegaReviewBridge() {
  return (
    <script
      src={REVIEW_BRIDGE_SRC}
      crossOrigin="anonymous"
      defer
    />
  );
}
