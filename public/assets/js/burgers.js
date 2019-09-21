$(function(){
    $(".change-devour").on("click", function(event){
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");

        // newDevour = function(newDevour){
        //     if(devour() === false){
        //         return true;
        //     }else{
        //         return false;
        //     }
        // }

        var newDevourState = {
            devoured: newDevour
        };
        console.log(newDevourState);
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

    devour = function(){
        if (document.burgerForm.burger_name.value == ''){
            return 1;
        }else{
            return 0;
        }
    };

})