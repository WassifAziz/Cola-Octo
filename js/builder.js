$(window).load(function() {
    
    $('#droparea table').click(function(e){   
        e.preventDefault(); 
    });
    
    $('a').click(function(e){   
        e.preventDefault(); 
    });

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






    
    
    //double click to insert
//    $(".builder-table").click(function(){
//
//        var value = $(this).parent().html();
//        value = value.trim();
//        $(value).appendTo(".main_row td");
//
//    });
    

    //DELETE ROW
    //    $('#droparea').on('click', 'tr', function() { 
    //        if (confirm('Are you sure you delete this section?')) {
    //            $(this).parents("tr").remove()  
    //        } else {
    //            // Do nothing!
    //        }
    //    });
    //    

    
    //trumbowyg EDITOR


    
    $(".trumbowyg.closable").on("click", function() {
            
        $('.trumbowyg.closable').trumbowyg({
            closable: true
        });
        $('.trumbowyg').parent("tr").parent("tbody").parent("table").removeClass("ui-draggable");

    
    });
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    ////UNUSD SCRIPTS
    
    //INLINE EDIT SCRIPT
//    $(function() {
//        $('.editable').inlineEdit({
//            control: 'textarea'
//        });
//
//    });
    
    
    
//////DELETE BUTTONS ON CLICK
//    $(this).on('click', function() { 
//        
//        $(this).append('<p class="delete" style="display:block;">Delete?</p>');
//
//        $('#droparea > table > tbody > tr').each(function(){
//
//                                
//            $(this).addClass("current_selected");
//            
//        
//
//
//        });
//
//
//
//    });
    
    
    
    
//        var originalLeave = $.fn.popover.Constructor.prototype.leave;
//        $.fn.popover.Constructor.prototype.leave = function(obj){
//        var self = obj instanceof this.constructor ?
//        obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)
//        var container, timeout;
//
//        originalLeave.call(this, obj);
//
//        if(obj.currentTarget) {
//        container = $(obj.currentTarget).siblings('.popover')
//        timeout = self.timeout;
//        container.one('mouseenter', function(){
//          //We entered the actual popover – call off the dogs
//          clearTimeout(timeout);
//          //Let's monitor popover content instead
//          container.one('mouseleave', function(){
//            $.fn.popover.Constructor.prototype.leave.call(self, self);
//          });
//        })
//        }
//        };
    
    
    
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
    
    
    
    
    
    
    
    
    
    
    

});//END LOAD FUNCTION