// Code Block Copy Functionality
$(function () {
    // Add copy icon to all code blocks
    // We target figure.highlight directly to ensure coverage
    var $copyIcon = $('<i class="fa fa-copy code_copy" title="Copy code" aria-hidden="true"></i>');
    $('figure.highlight').prepend($copyIcon);

    // Ensure ClipboardJS is available
    if (typeof ClipboardJS === 'undefined') {
        console.error('ClipboardJS is not loaded!');
        return;
    }

    // Initialize ClipboardJS
    var clipboard = new ClipboardJS('.code_copy', {
        text: function(trigger) {
            var $trigger = $(trigger);
            var $figure = $trigger.closest('figure.highlight');
            
            // 1. Try to find code in the standard Hexo table structure (td.code)
            var $code = $figure.find('td.code pre');
            
            // 2. Fallback: Try finding pre directly (non-table layout)
            if ($code.length === 0) {
                $code = $figure.find('pre');
            }
            
            // 3. Last resort: Get all text from figure (might include line numbers if not careful)
            if ($code.length === 0) {
                return $figure.text();
            }

            // Return the text content
            return $code.text();
        }
    });

    // Success feedback
    clipboard.on('success', function(e) {
        e.clearSelection();
        var $icon = $(e.trigger);
        $icon.removeClass('fa-copy').addClass('fa-check');
        
        // Optional: Change title temporarily
        var originalTitle = $icon.attr('title');
        $icon.attr('title', 'Copied!');
        
        setTimeout(function() {
            $icon.removeClass('fa-check').addClass('fa-copy');
            $icon.attr('title', originalTitle);
        }, 2000);
    });

    // Error handling
    clipboard.on('error', function(e) {
        console.error('Clipboard copy failed:', e);
        var $icon = $(e.trigger);
        $icon.removeClass('fa-copy').addClass('fa-times');
        $icon.attr('title', 'Copy failed');
        
        setTimeout(function() {
            $icon.removeClass('fa-times').addClass('fa-copy');
            $icon.attr('title', 'Copy code');
        }, 2000);
    });
});
