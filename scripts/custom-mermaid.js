// Mermaid configuration: transparent background and dual-mode palette
(function () {
  if (typeof mermaid === 'undefined') {
    // Should not happen if loaded with defer after mermaid.min.js
    console.warn('Mermaid script not loaded.')
    return
  }

  const isDark =
    (window.localStorage && localStorage.preferredThemeMode === 'dark') ||
    !!document.getElementById('stylesheet-theme-dark')

  // Modern Light Theme
  const lightVars = {
    background: 'transparent',
    primaryColor: '#ffffff',
    primaryTextColor: '#2c3e50',
    primaryBorderColor: '#5c6bc0', // Soft Indigo
    secondaryColor: '#e8eaf6',
    tertiaryColor: '#e3f2fd',
    lineColor: '#5c6bc0',
    edgeLabelBackground: '#ffffff',
    nodeBorder: '#5c6bc0',
    clusterBkg: '#f5f7fa',
    clusterBorder: '#cbd5e1',
    fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
    fontSize: '16px',
  }

  // Modern Dark Theme
  const darkVars = {
    background: 'transparent',
    primaryColor: '#282c34', // Matches code block dark bg
    primaryTextColor: '#dce2ea',
    primaryBorderColor: '#82aaff', // Bright Blue
    secondaryColor: '#2c3e50',
    tertiaryColor: '#292d3e',
    lineColor: '#89ddff', // Cyan-ish
    edgeLabelBackground: '#282c34',
    nodeBorder: '#82aaff',
    clusterBkg: '#232832',
    clusterBorder: '#64748b',
    fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
    fontSize: '16px',
  }

  // Initialize immediately to ensure config is set before auto-rendering (which happens on DOMContentLoaded)
  mermaid.initialize({
    theme: 'base',
    themeVariables: isDark ? darkVars : lightVars,
    flowchart: {
      useMaxWidth: true,
      htmlLabels: true,
      padding: 20,
      curve: 'basis',
    },
    sequence: {
      useMaxWidth: true,
    },
    startOnLoad: true,
    securityLevel: 'loose',
  })
})()
