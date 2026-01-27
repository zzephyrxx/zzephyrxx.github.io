// Custom Mermaid Configuration for hand-drawn style
document.addEventListener('DOMContentLoaded', function() {
  if (typeof mermaid !== 'undefined') {
    // Apply hand-drawn sketch style to Mermaid diagrams
    mermaid.initialize({
      theme: 'default',
      fontFamily: 'Comic Sans MS, Comic Neue, cursive',
      themeVariables: {
        primaryColor: 'rgba(255, 255, 255, 0.7)',
        primaryBorderColor: '#333',
        lineColor: '#333',
        secondaryColor: 'rgba(240, 240, 255, 0.5)',
        tertiaryColor: 'transparent'
      },
      flowchart: {
        curve: 'basis',
        useMaxWidth: true,
        htmlLabels: true,
        padding: 15
      },
      sequence: {
        useMaxWidth: true,
        mirrorActors: false,
        bottomMarginAdj: 10,
        boxMargin: 10,
        noteMargin: 10
      },
      gantt: {
        useMaxWidth: true
      },
      er: {
        useMaxWidth: true
      },
      pie: {
        useMaxWidth: true
      },
      // Add sketchiness to diagram elements
      startOnLoad: true,
      securityLevel: 'loose'
    });
    
    // Add roughjs effect for hand-drawn style if available
    if (typeof rough !== 'undefined') {
      // Apply rough.js effects after mermaid diagrams are rendered
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.addedNodes && mutation.addedNodes.length > 0) {
            for (let i = 0; i < mutation.addedNodes.length; i++) {
              const node = mutation.addedNodes[i];
              if (node.classList && node.classList.contains('mermaid')) {
                applyRoughStyle(node);
              }
            }
          }
        });
      });
      
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
      
      function applyRoughStyle(container) {
        const svgElements = container.querySelectorAll('svg *');
        svgElements.forEach(el => {
          if (el.tagName === 'rect' || el.tagName === 'path' || el.tagName === 'line' || el.tagName === 'polygon') {
            el.setAttribute('stroke-linecap', 'round');
            el.setAttribute('stroke-linejoin', 'round');
            
            // Add slight randomness to stroke width for hand-drawn effect
            const currentWidth = parseFloat(el.getAttribute('stroke-width') || 1);
            el.setAttribute('stroke-width', currentWidth * (0.9 + Math.random() * 0.2));
            
            // Add slight jitter to paths
            if (el.tagName === 'path') {
              const d = el.getAttribute('d');
              if (d) {
                el.setAttribute('d', addJitterToPath(d));
              }
            }
          }
        });
      }
      
      function addJitterToPath(pathData) {
        // Simple jitter function - in a real implementation you'd use a proper path parser
        return pathData.replace(/([0-9]+(\.[0-9]+)?)/g, (match) => {
          const num = parseFloat(match);
          return (num + (Math.random() * 2 - 1)).toFixed(1);
        });
      }
    }
  }
});
