$(function () {
    $(".monch").on("click", function(event) {
    const id = $(this).attr("data-id");
    const name = $(this).attr("data-type")
    const eaten = $(this).attr("data-eaten");

    console.log(`${id}. ${name} - ${eaten}`)

    const isEaten = {
        eaten: true
    };

    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: isEaten
    }).then(() => {
        console.log(`changed eaten to: ${isEaten}`);
        location.reload();
    });
});

    $("#new-burg").on("click", event => {
        event.preventDefault();
        console.log($("#borg").val());
        const newBorg = {
            name: $("#borg")
                .val()
                .trim(),
            eaten: false
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBorg
        }).then(() => {
            console.log("created new borg");
            location.reload();
        });
    });
});