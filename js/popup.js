"use strict";

$(window).on("load",function () {
    // console.log("s");

    // JSONファイルの読み込み
    try {
        $.getJSON("json/map_data.json" , function(data) {
            // change_json_name(data);
            // console.log(data);
            const fragment=document.createDocumentFragment();
            for (const key in data) {
                if (Object.hasOwnProperty.call(data, key)) {
                    const element = data[key];
                    // console.log(element);
                    const room=document.createElement("div");
                    room.id=key;
                    for (const val in element) {
                        if (Object.hasOwnProperty.call(element, val)) {
                            const val_element = element[val];
                            switch (val) {
                                case "data":
                                    room.dataset.name=val_element;
                                    break;
                                case "style":
                                    // console.log(val_element);
                                    for (const cssprop in val_element) {
                                        if (Object.hasOwnProperty.call(val_element, cssprop)) {
                                            const cssval = val_element[cssprop];
                                            $(room).css(cssprop,cssval);
                                        }
                                    }
                                    break;
                            
                                default:
                                    break;
                            }
                        }
                    }
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