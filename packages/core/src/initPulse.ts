import { defaultConfig, PulseConfig, setConfig } from "./config.ts";

export default function initPulse(config: PulseConfig) {
  const mergedConfig = {
    ...defaultConfig,
    ...config,
  };

  // Guard against SSR
  if (typeof window === "undefined") {
    if (mergedConfig.debug) {
      console.warn(
        "Cannot initialize Pulse without a window object. Ignoring.",
      );
    }
  }

  setConfig(mergedConfig);

  if (mergedConfig.debug) {
    console.log("Pulse initialized with config: ", mergedConfig);
  }
}
