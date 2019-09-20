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

    devour = function(){
        if (document.burgerForm.burger_name.value == ''){
            return 1;
        }else{
            return 0;
        }
    }

    $(".create-form").on("submit", function(event){
        event.preventDefault();
        
        var newBurger = {
            burger_name: $("#bg").val().trim(),
            devoured: devour()
        };
        
        $.ajax("api/burgers/", {
            type:"POST",
            data: newBurger
        }).then(
            function(){
                console.log("You made a new burger!");
                location.reload();
            }
        );
    });

})