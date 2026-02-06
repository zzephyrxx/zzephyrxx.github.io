// Mermaid configuration: transparent background and dual-mode palette
document.addEventListener('DOMContentLoaded', function () {
  if (typeof mermaid === 'undefined') return

  const isDark =
    (window.localStorage && localStorage.preferredThemeMode === 'dark') ||
    !!document.getElementById('stylesheet-theme-dark')

  const lightVars = {
    background: 'transparent',
    primaryColor: '#ffffff',
    primaryTextColor: '#333333',
    primaryBorderColor: '#697380',
    secondaryColor: '#f4f6f8',
    tertiaryColor: '#eef1f5',
    lineColor: '#6b7280',
    edgeLabelBackground: '#ffffff',
    fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
  }

  const darkVars = {
    background: 'transparent',
    primaryColor: '#1f2430',
    primaryTextColor: '#e5e7eb',
    primaryBorderColor: '#9ca3af',
    secondaryColor: '#2a2f3a',
    tertiaryColor: '#242832',
    lineColor: '#9aa0a6',
    edgeLabelBackground: '#1f2430',
    fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
  }

  mermaid.initialize({
    theme: 'base',
    themeVariables: isDark ? darkVars : lightVars,
    flowchart: {
      useMaxWidth: true,
      htmlLabels: true,
      padding: 12,
      curve: 'basis',
    },
    sequence: {
      useMaxWidth: true,
    },
    startOnLoad: true,
    securityLevel: 'loose',
  })
})
