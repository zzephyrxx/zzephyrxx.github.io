// 代码块收缩
$(function () {
  var $code_expand = $('<i class="fa fa-chevron-down code-expand" title="折叠代码" aria-hidden="true"></i>');
  
  $('.code-area').prepend($code_expand);
  
  $('.code-expand').on('click', function () {
    var $figure = $(this).closest('figure.highlight');
    if ($figure.hasClass('code-closed')) {
        $figure.removeClass('code-closed');
        $figure.find('table').slideDown(200); 
        $(this).removeClass('fa-chevron-right').addClass('fa-chevron-down');
    } else {
        $figure.addClass('code-closed');
        $figure.find('table').slideUp(200);
        $(this).removeClass('fa-chevron-down').addClass('fa-chevron-right');
    }
  });
});
