export function caseStudyHref(projectId) {
  return `/#/projects/${encodeURIComponent(projectId)}`;
}

export function homeProjectHref(projectId) {
  return `/#${encodeURIComponent(projectId)}`;
}

export function projectIdFromHash(hash) {
  const match = hash.match(/^#\/projects\/([^/?#]+)\/?$/);
  if (!match) return null;
  try { return decodeURIComponent(match[1]); }
  catch { return "unknown"; }
}
