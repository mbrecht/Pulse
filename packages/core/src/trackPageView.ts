import { getConfig } from "./config";
import trackEvent from "./trackEvent";

export type PageViewOptions = {
  /*
   * Path of current page
   * Defaults to window.location.pathname
   */
  path?: string;

  /*
   * Referer path
   * Defaults to document.referrer
   */
  referrer?: string;

  /*
   * Page title
   * Defaults to document.title
   */
  title?: string;

  /*
   * Page specific metadata
   * Defaults to context set in config options
   */
  context?: Record<string, unknown>;
};

export default function trackPageView(options: PageViewOptions) {
  const defaultOptions: Partial<PageViewOptions> = {
    path: window.location.pathname,
    referrer: document.referrer,
    title: document.title,
    context: getConfig()?.context,
  };

  const mergedOptions = {
    ...defaultOptions,
    options,
  };

  trackEvent("pageview", mergedOptions);
}
