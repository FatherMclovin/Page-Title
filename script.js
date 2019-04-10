$("button").click(function(){
    var age= $(".age").val();
    var cookie= $(".cookie").val();
    if(age <=25 && cookie=== "oatmeal"){
        $(".message").text("Your Favorite cookie is oatmeal");
    }
    if(age <=25 && cookie=== "chocolatechip"){
        $(".message").text("Your Favorite cookie is chocolatechip");
    }
});


