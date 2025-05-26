export type PulseConfig = {
  /*
   * Required: Your analytics endpoint
   * Example: https://www.my-collector.com/events
   */
  endpoint: string;

  /*
   * Optional: Your app identifier
   */
  appId?: string;

  /*
   * Automatically track pageviews on route change
   * Defaults to false
   */
  autoPageviews?: boolean;

  /*
   * Optional: object that you may extend to pass to your collector
   */
  context?: Record<string, unknown>;

  /*
   * Optional: enable to show debug messages
   * Defaults to false
   */
  debug?: boolean;
};

export const defaultConfig: Partial<PulseConfig> = {
  autoPageviews: false,
  debug: false,
};

let _config: PulseConfig | null = null;

export function getConfig() {
  return _config;
}

export function setConfig(config: PulseConfig | null) {
  _config = config;
}
