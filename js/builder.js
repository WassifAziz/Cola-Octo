$(window).load(function() {

    $('#droparea table').click(function(e) {
        e.preventDefault();
    });

    $('a').click(function(e) {
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

    //allow contents in builder table to be dragged outside of container div
    $('.builder-table').draggable({
        appendTo: 'body'
    });

    setInterval(function() {

        $('.main_row').each(function() {

            var TabIn = $('.sortable').find('table').length;
            
            if (TabIn >= 1) {
                //console.log('has ' + TabIn);

                //$(".sortable").sortable('refresh');

                $(this).removeClass('main_row');

                $(this).find('td').removeClass('sortable');

                $(this).find('td').removeClass('ui-sortable');

                //                $(this).draggable({disabled:true});

                $('.editable').each(function(index) {//give tr a tabindex attribute in order to count them
                    $(this).attr('tabindex', index)
                });
                
                $(this).after('<tr class="main_row editable"><td bgcolor="#FFFFFF" class="sortable" id=""></td></tr>');

                $(".sortable").sortable({
                    revert: true,
                    receive: function(event, ui) {
                        var html = [];
                    }
                });

            } else {
                //console.log('no table');
            }

        });
        
        
        $('.editable').on('click', function() {

            var TrTotal = $(this).attr('tabindex');

            console.log('clicked ' + TrTotal);
            
            
            /*if ($(this, 'td:contains("some text")').length > 1) {
                //alert ("I have text");
                console.log('has text');
            }*/
            
            
            if (!$(this, "td").text().trim().length) {
                console.log('no text');//if td doesn't have text
            }
            else{
                console.log('HAS text');// if td HAS text
                $(this).addClass('trumbowyg closable');
                $('.trumbowyg.closable').trumbowyg({
                    closable: true
                });
                $('.editable').removeClass('trumbowyg closable');
            }
            
            //$(this, "td").addClass('trumbowyg closable');
            
            
            //editor functions
            /*$('.trumbowyg.closable').trumbowyg({
                closable: true
            });
           
            $("#droparea td").on('click', this, function () {

                $(this, "td").addClass('trumbowyg closable');

                $('.trumbowyg.closable').trumbowyg({
                    closable: true
                });

            });*/
            
        });
        
        
        
    }, 1000);



   /* $('.editable').on('click', function() {
        //console.log('clicked ' + TrTotal);
        var TrTotal = $(this).attr('tabindex');
        //console.log('hello');
        console.log('clicked ' + TrTotal);

        $(this, "td").addClass('trumbowyg closable');


    });
*/


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
    //    $(".trumbowyg.closable").on("click", function() {
    //            
    //        $('.trumbowyg.closable').trumbowyg({
    //            closable: true
    //        });
    //        $('.trumbowyg').parent("tr").parent("tbody").parent("table").removeClass("ui-draggable");
    //
    //    
    //    });
    //    






    /*$("#droparea td").on('click', this, function () {
                
        $(this, "td").addClass('trumbowyg closable');

            $('.trumbowyg.closable').trumbowyg({
                closable: true
            });

    });*/

    /*$("#droparea td").each(function(){
        var TrTotal = $('#droparea tr.editrow').length;
        //var TrTotal = setInterval($('#droparea tr.editrow').length, 1000);
            
        $("#droparea td").on('click', this, function () {
        
           console.log('clicked' + TrTotal);

        });
    });*/

    //onclick close button, reenable draggable
    //    $(".trumbowyg-close-button").on('click', function() {
    //        alert();
    //    });









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
<<<<<<< HEAD

    
    
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
=======
>>>>>>> origin/double_click_insert



    //    $(".builder-table").click(function(){
    //        
    //        var value = $(this).html();
    //        value = value.replace(/\s+/g, '');
    //        (value).appendTo(".main_row td");
    //        
    //    });









}); //END LOAD FUNCTION
