//Handling feedback form with jquery
$(function () {
    $.getJSON('api', updateFeedback);

    /** method to detect what is happening in the form **/
    $('.feedback-form').submit(function (e) {
        e.preventDefault();
        $.post('api', {
            fullname: $('#feedback-form-fullname').val(),
            title: $('#feedback-form-title').val(),
            message: $('#feedback-form-message').val()
        }, updateFeedback);
    });

    // e = event
    $('.feedback-messages').on('click', function (e) {
        if (e.target.className = "glyphicon glyphicon-remove") {
            $.ajax({
                url: 'api/' + e.target.id,
                type: 'DELETE',
                success: updateFeedback
            }); //AJAX 
        } // delete target
    }); // feedback messages

    // parsing the data to feedback.ejs
    function updateFeedback(data) {
        var output = '';
        // should i try with template literals [``]  example output += ` `; and then output += ` html code `; in order to avoid 14 local output variables?
        $.each(data, function (key, item) {

            output += '    <div class="container">';
            output += '          <button class="feedback-delete btn btn-danger"><span id=" ' + key + ' "  class="glyphicon glyphicon-remove">x</span></button>';
            output += '        <div class="row">';
            output += '            <div class="col-sm feedback-fullname">';
            output += '             <small class="bg-dark text-white">' + item.fullname + '</small> ';
            output += '            </div>';
            output += '        <div class="col-sm feedback-title">';
            output += '        <bold class="bg-dark text-white">' + item.title + ':</bold';
            output += '         </div';
            output += '        <div class="col-sm feedback-message">';
            output += '            <em>' + item.message + '</em> ';
            output += '            </div>';
            output += '        </div>';
            output += '    </div>';

        });
        $('.feedback-messages').html(output);
    }
});