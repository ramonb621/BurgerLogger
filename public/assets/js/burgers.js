$(function(){
    $(".change-devour").on("click", function(event){
        var id = $(this).data("id");
        var newDevour = $(this).data("newDevour");

        var newDevourState = {
            devoured: newDevour
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function() {
                console.log("you ate this", newDevour);

                location.reload();
            }
        );
    });
    $(".create-form").on("submit", function(event){
        event.preventDefault();
        
        var newBurger = {
            buger_name: $("#bg").val().trim(),
            devoured: $("[name = devoured]")
        }
    })

})