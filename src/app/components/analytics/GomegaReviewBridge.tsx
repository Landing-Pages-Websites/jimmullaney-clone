const REVIEW_BRIDGE_SRC =
  "https://app.gomega.ai/review-bridge/v14/review-bridge.js";
const REVIEW_BRIDGE_INTEGRITY =
  "sha384-9auMSdWanYkrre8/1lzZigc/FIrNeRXYmafXg0Lfh80V7fey2zPuBGlggCrqLr08";

export default function GomegaReviewBridge() {
  return (
    <script
      src={REVIEW_BRIDGE_SRC}
      integrity={REVIEW_BRIDGE_INTEGRITY}
      crossOrigin="anonymous"
      defer
    />
  );
}
