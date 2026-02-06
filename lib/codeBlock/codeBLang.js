// 代码块语言识别
$(function () {
  $('figure.highlight').each(function () {
    var $this = $(this);
    var className = $this.attr('class');
    // Extract language: class is usually "highlight language-javascript code-area" or "highlight javascript code-area"
    // Remove known classes
    var lang = className.replace('highlight', '').replace('code-area', '').replace('line-numbers', '').trim();
    
    // If language starts with "language-", remove it
    if (lang.startsWith('language-')) {
        lang = lang.replace('language-', '');
    }

    if (!lang) return;

    // Capitalize first letter
    var langName = lang.charAt(0).toUpperCase() + lang.slice(1);
    
    // Common overrides
    var map = {
        'Js': 'JavaScript', 'Ts': 'TypeScript', 'Html': 'HTML', 'Css': 'CSS', 
        'Yml': 'YAML', 'Json': 'JSON', 'Md': 'Markdown', 'Py': 'Python',
        'Cpp': 'C++', 'Csharp': 'C#', 'Go': 'Go', 'Java': 'Java', 'Sql': 'SQL', 'Shell': 'Shell', 'Bash': 'Bash'
    };
    if (map[langName]) langName = map[langName];

    var $label = $('<div class="code_lang" title="代码语言">' + langName + '</div>');
    $this.prepend($label);
  });
});
