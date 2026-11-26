// Files in /public are served under the site's base path (e.g. /nca/ on
// GitHub Pages). Wrap every hard-coded public path in this so it still
// resolves when the site isn't at the root of its domain.
export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
