import { getConfig } from "./config";

/*
 * Send an event to your collector
 *
 * @param name - Event name to be tracked
 * @param payload - Optional key-value object to send along with the event
 */
export default function trackEvent(
  name: string,
  payload?: Record<string, unknown>,
) {
  const config = getConfig();
  if (config === null) {
    console.error("Config is not set. Aborting.");
    return;
  }

  fetch(config.endpoint, {
    method: "POST",
    body: JSON.stringify({
      name,
      payload,
      timestamp: new Date().toISOString(),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
