$(document).ready(function () {

    $("#add").click(function () {
        var item = $('#addItem').val();
        var qty = $('#qty').val();
        if (item == '') {
            console.log("no items added");
        } else {
            addItems(item, qty);
            $('#addItem').val('');
            $('#qty').val('');
            $('#addItem').focus();
        };
    });
    $('.list').on('click', 'div.del', deleteItems);

    function addItems(item, qty) {
        $('<li class="listItem"><span class="item">' + qty + ' ' + item + '</span><div class="del"></div></li>').hide().prependTo('.list').slideDown('slow');

    }

    function deleteItems() {
        $(this).parent().slideUp('slow', function () {
            $(this).remove();
        });
    }
});