/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    var globalCommentId = 1;

    var newCommentString = `
                <div class="newGlobalComment row container-white-shadow-2 comment-item">
                    <div class="col-lg-12">
                        <div class="row ">
                            <div class="col-lg-1">
                                <img src="img/Avatar.png" class="img-responsive img-circle" alt="">
                            </div>
                            <div class="col-lg-11">
                                <h4>you</h4>
                                <p class="time">few seconds ago</p>
                            </div>
                        </div>
                        <div class="row">
                            <p class="comment-text">I’m just testing the comment section. I really like this car. I especially like the fact that it only costs $3M. That’s amazing.</p>
                        </div>
                    </div>
                </div>
    `;

    $('#comment-area').elastic();

    $('#submit-comment').click(function(event){
        event.preventDefault();
        $('#comment-list').append(newCommentString);

        var $newGlobalComment = $('.newGlobalComment');
        $newGlobalComment.find('.comment-text').text($('#comment-area').val());
        $newGlobalComment.removeClass('newGlobalComment');

        //$.scrollTo($newGlobalComment);
        $('html, body').animate({   scrollTop: $newGlobalComment.offset().top - 70}, "slow");

        $('#comment-area').val('');

        return false;
    });

    $('.comment-reply-icon').click(function(){
        $('html, body').animate({   scrollTop: $('#team').offset().top - 70}, "slow");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});