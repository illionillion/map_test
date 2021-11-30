"use strict";

$(window).on("load",function () {
    // console.log("s");

    // JSONファイルの読み込み
    try {
        $.getJSON("json/map_data2.json" , function(data) {
            // change_json_name(data);
            // console.log(data);
            const fragment=document.createDocumentFragment();
            for (const key in data) {
                if (Object.hasOwnProperty.call(data, key)) {
                    const element = data[key];
                    // console.log(element);
                    const room=document.createElement("div");
                    room.id=key;
                    room.dataset.name=element;
                    $(room).click(function(){
                        alert($(this).data("name"));
                    })
                    fragment.appendChild(room)
                }
            }
            $("#frame").append(fragment);
        });       
     } catch (error) {
       console.error('f')
     }

})