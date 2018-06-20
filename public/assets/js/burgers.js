$(function() {
    $(".change-devour").on("click", function(event) {
        console.log("clicked");

        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");

        var newDevourState = {
            devoured: newDevourState
        };

        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function() {
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        console.log("clicked");
        
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                location.reload();
            }
        );
    });
});