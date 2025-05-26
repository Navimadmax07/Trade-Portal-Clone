$(document).ready(function () {
    $("a[data-theme]").click(function () {
    $("head link#theme").attr("href", $(this).data("theme"));
    $(this).toggleClass('active').siblings().removeClass('active');
    });
    $("a[data-effect]").click(function () {
    $("head link#effect").attr("href", $(this).data("effect"));
    $(this).toggleClass('active').siblings().removeClass('active');
    });
});



$(document).ready(function() {
    $("#hsinput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#hstable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

$(document).ready(function() {
    $('#datatable').DataTable({
        "pagingType": "full_numbers"
    });
});




$(document).ready(function() {
    var divtxt = $('body');
  
    $('#btnincfont').click(function() {
        var curSize = divtxt.css('fontSize');
        var newSize = parseInt(curSize.replace("px", "")) + 1;
        $(divtxt).css("fontSize", newSize + "px");
    });
  
    $('#btndecfont').click(function() {
        var curSize = divtxt.css('fontSize');
        var newSize = parseInt(curSize.replace("px", "")) - 1;
        $(divtxt).css("fontSize", newSize + "px");
    });
  
    $('#reset').click(function() {
        var curSize = divtxt.css('fontSize');

        $(divtxt).css("fontSize", "1em");
    });

});