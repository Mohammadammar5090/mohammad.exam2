
document.addEventListener("DOMContentLoaded", function(event) {
    var menuTitle = document.querySelector("#menuTitle"); // Get the menu title element

    // Add event listener for the #chicken element
    document.querySelector("#chicken").addEventListener("click", function() {
        fetchData("chicken.json");
        menuTitle.textContent = "Sandwiches"; // Update the menu title

    });

    // Add event listener for the #beef element
    document.querySelector("#beef").addEventListener("click", function() {
        fetchData("beef.json");
        menuTitle.textContent = "Dinner"; // Update the menu title

    });

    // Add event listener for the #sushi element
    document.querySelector("#sushi").addEventListener("click", function() {
        fetchData("sushi.json");
        menuTitle.textContent = "Lunch"; // Update the menu title

    });
var lastDisplayedIndex = 0;
    function fetchData(jsonFile) {
        var itemHTML = null;
        var xttp = new XMLHttpRequest();
        xttp.onreadystatechange = function() {
            if ((this.readyState == 4) && (this.status == 200)) {
                itemHTML = this.responseText;
                var xttpJson = new XMLHttpRequest();

                xttpJson.onreadystatechange = function() {
                    if ((this.readyState == 4) && (this.status == 200)) {
                        var entry = JSON.parse(this.responseText);
                        document.querySelector(".container").innerHTML = null;

                        // if (jsonFile === "chicken.json") {
                        //     var modifiedItemHTML = itemHTML.replace(/id="menu"/g, 'id="chicken"');
                        //      modifiedItemHTML.replace(/id="pr_menu"/g, 'id="pr_chicken"');
                        //      itemHTML=modifiedItemHTML
                        // }
                        // if (jsonFile === "beef.json") {
                        //     var modifiedItemHTML = itemHTML.replace(/id="menu"/g, 'id="beef"');
                        //      modifiedItemHTML.replace(/id="pr_menu"/g, 'id="pr_beef"');
                        //      itemHTML=modifiedItemHTML
                        // }
                        //     if (jsonFile === "sushi.json") {
                        //     var modifiedItemHTML = itemHTML.replace(/id="menu"/g, 'id="sushi"');
                        //      modifiedItemHTML.replace(/id="pr_menu"/g, 'id="pr_sushi"');
                        //      itemHTML=modifiedItemHTML
                        // }

                        for (var i = 0; i < entry.length; i++) {
                            var itemModified = itemHTML.replace(new RegExp("{{name}}", "g"), entry[i].name);
                            itemModified = itemModified.replace(new RegExp("{{description}}", "g"), entry[i].description);

                            document.querySelector(".container").innerHTML += itemModified;
                        }
                    document.querySelector(".button").innerHTML+="<a href='index.html'>Back</a>"
                    }
                };

                xttpJson.open("GET", jsonFile, true);
                xttpJson.send(null);
            }
        };

        xttp.open("GET", "item.html", true);
        xttp.send(null);
    }

});















// var lastDisplayedIndex = 0;
//
// document.addEventListener("DOMContentLoaded", function(event) {
//     document.querySelector("#chicken").addEventListener("click", function() {
//         fetchData("chicken.json");
//     });
//
//     document.querySelector("#beef").addEventListener("click", function() {
//         fetchData("beef.json");
//     });
//
//     document.querySelector("#sushi").addEventListener("click", function() {
//         fetchData("sushi.json");
//     });
// });
//
// function fetchData(jsonFile) {
//     var itemHTML = null;
//     var xttp = new XMLHttpRequest();
//     xttp.onreadystatechange = function () {
//         if ((this.readyState == 4) && (this.status == 200)) {
//             itemHTML = this.responseText;
//             var xttpJson = new XMLHttpRequest();
//
//             xttpJson.onreadystatechange = function () {
//                 if ((this.readyState == 4) && (this.status == 200)) {
//                     var entry = JSON.parse(this.responseText);
//                     document.querySelector(".container").innerHTML = null;
//                     if (jsonFile === "chicken.json") {
//                             var modifiedItemHTML = itemHTML.replace(/id="menu"/g, 'id="chicken"');
//                              modifiedItemHTML.replace(/id="pr_menu"/g, 'id="pr_chicken"');
//                              itemHTML=modifiedItemHTML
//
//                             // itemHTML.querySelector("#chicken").addEventListener("click", )
//
//                         }
//                         if (jsonFile === "beef.json") {
//                             var modifiedItemHTML = itemHTML.replace(/id="menu"/g, 'id="beef"');
//                              modifiedItemHTML.replace(/id="pr_menu"/g, 'id="pr_beef"');
//                              itemHTML=modifiedItemHTML
//
//                             // itemHTML.querySelector("#beef").addEventListener("click", )
//
//                         }
//                             if (jsonFile === "sushi.json") {
//                             var modifiedItemHTML = itemHTML.replace(/id="menu"/g, 'id="sushi"');
//                              modifiedItemHTML.replace(/id="pr_menu"/g, 'id="pr_sushi"');
//                              itemHTML=modifiedItemHTML
//
//                              // itemHTML.querySelector("#sushi").addEventListener("click", )
//
//                         }
//
//                     var startIndex = lastDisplayedIndex;
//                     var endIndex = Math.min(startIndex + 3, entry.length); // Display 3 items or less if there are fewer than 3 left
//
//                     for (var i = startIndex; i < endIndex; i++) {
//                         var itemModified = itemHTML.replace(new RegExp("{{name}}", "g"), entry[i].name);
//                         itemModified = itemModified.replace(new RegExp("{{description}}", "g"), entry[i].description);
//                         document.querySelector(".container").innerHTML += itemModified;
//                     }
//
//                     lastDisplayedIndex = endIndex;
//
//                 }
//             };
//
//             xttpJson.open("GET", jsonFile, true);
//             xttpJson.send(null);
//         }
//     };
//
//     xttp.open("GET", "item.html", true);
//     xttp.send(null);
// }
//
//













//
// function loadItem(){
//   //Call server to get the entriy and the items
//   var item=null;
//   var xttp=new XMLHttpRequest();
//   xttp.onreadystatechange=function(){
//     if((this.readyState==4)&&(this.status==200)){
//       item = this.responseText;
//       var xttp=new XMLHttpRequest();
//       xttp.onreadystatechange=function(){
//         if((this.readyState==4)&&(this.status==200)){
//           var entry= JSON.parse(this.responseText);
//           item = item.replace(new RegExp("{{name}}", "g"), entry.name);
//           item = item.replace(new RegExp("{{description}}", "g"), entry.description);
//             item = item.replace(new RegExp("{{pr}}", "g"), entry.pr);
//           document.querySelector("#content").innerHTML=document.querySelector("#content").innerHTML+item;
//         }
//       };
//       xttp.open("GET", "item.json", true);
//       xttp.send(null);//for POST only
//     }
//   };
//   xttp.open("GET", "item.html", true);
//   xttp.send(null);//for POST only
// }
