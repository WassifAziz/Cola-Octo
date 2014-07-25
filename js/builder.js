$(window).load(function() {

    var width = 700;
    var column_width = 20;
    var main_column_width = 700;


    //        var width=prompt("Set email width");
    $('.main_container_table').attr('width', width);
    //
    //         var column_width=prompt("Set column width");
    $('.margin_column').attr('width', column_width);
    //
    //        var total_column_width = column_width*2;
    //        var main_column_width = width - total_column_width;
    //        //alert(new_container_width);
    $('.main_column').attr('width', main_column_width);

    
    
    $(function() {
        var tbdiv = $('.builder-table'); //was #draggable table
        $(tbdiv).draggable({
            connectToSortable: ".sortable",
            helper: "clone",
            revert: "invalid"
        });

        $(".sortable").sortable({
            revert: true,
            receive: function(event, ui) {
                var html = [];
            }
        });

    });


    setInterval(function() {

        $('.main_row').each(function() {

            var TabIn = $('.sortable').find('table').length;

            if (TabIn >= 1) {
                console.log('has ' + TabIn);

                //$(".sortable").sortable('refresh');

                $(this).removeClass('main_row');

                $(this).find('td').removeClass('sortable');

                $(this).find('td').removeClass('ui-sortable');

                $(this).after('<tr class="main_row"><td bgcolor="#FFFFFF" class="sortable" id=""></td></tr>');

                $(".sortable").sortable({
                    revert: true,
                    receive: function(event, ui) {
                        var html = [];
                    }
                });

            } else {
                console.log('no table');
            }

        });

    }, 1000);


    //INLINE EDIT SCRIPT
    $(function() {
        $('.editable').inlineEdit({
            control: 'textarea'
        });
    });


    /*$('.loader').on('click', function(){
        $('.generated').load('week.html');
    });*/

    
    
//    $(".builder-table").click(function(){
//        
//        var value = $(this).html();
//        value = value.replace(/\s+/g, '');
//        (value).appendTo(".main_row td");
//        
//    });
    
    $(".builder-table").click(function(){

        var value = $(this).html().trim();;
        $(value).appendTo(".main_row td");

    });
    
    
    
    $("#draggable a").click(function(e){
         e.preventDefault();
    });
    
            $("#mobileToggle").click(function() {
                $("#droparea").animate({width: '360px'}, 200);
            });
            $("#tabletToggle").click(function() {
                $("#droparea").animate({width: '768px'}, 200);
            });
            $("#desktopToggle").click(function() {
                $("#droparea").animate({width: '100%'}, 200);
            });
    $("#previewMode").click(function() {
        $("#draggable").toggle();
        $("#droparea").toggleClass("preview");
        $("i").toggle();
        if (!$("#droparea").hasClass("preview"))
    {
        $("#droparea").width(700);
    }
    });

});//END LOAD FUNCTION