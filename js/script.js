$(document).ready(function() {
    $('.cuisines-select').on('click', function() {
        var test = $('.cuisines').select().val()
        var url =
            'https://api.spoonacular.com/food/videos/search?apiKey=064b936ced54438dbcacf34ce54cda10&query=' +
            test +
            '&number=20' //this is the query that would get called based on the dropdown selection
        console.log(test)
        $.get(url, function(res) {
            console.log(res)

            function cardtable() {
                var carding = "";
                for (var i = 0; i < res.videos.length; i++) {
                    carding +=
                        "<div class='card'>" + "<div class='card-body'>" +
                        "<h5 class='card-title'>" + res.videos[i].title + "</h5>" +
                        "<div class='video-container'>" +
                        "<iframe width = '250' src='https://www.youtube.com/embed/" +
                        res.videos[i].youTubeId +
                        "' style='bottom:0'  title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div></div></div>"
                }
                return carding;
            }
            var cards = cardtable();
            $(".card-group").html(cards)
        })
    })
})