// 代码块一键复制
$(function () {
    var $copyIcon = $('<i class="fa fa-copy code_copy" title="复制代码" aria-hidden="true"></i>');
    $('.code-area').prepend($copyIcon);

    // Initialize ClipboardJS
    var clipboard = new ClipboardJS('.code_copy', {
        text: function(trigger) {
            // Locate the code content
            // In Hexo default highlight, it's inside td.code pre
            var $figure = $(trigger).closest('figure.highlight');
            var $codePre = $figure.find('td.code pre');
            
            // Fallback if not using table layout (e.g. some plugins)
            if ($codePre.length === 0) {
                $codePre = $figure.find('pre');
            }
            
            return $codePre.text();
        }
    });

    // Success feedback
    clipboard.on('success', function(e) {
        e.clearSelection();
        var $icon = $(e.trigger);
        $icon.removeClass('fa-copy').addClass('fa-check');
        
        setTimeout(function() {
            $icon.removeClass('fa-check').addClass('fa-copy');
        }, 2000);
    });

    clipboard.on('error', function(e) {
        console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
    });
});
