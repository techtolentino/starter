// store each checklist val
var checkListItems = Array.prototype.slice.call(
    document.getElementsByClassName("checklist--item-status")
);

checkListItems.forEach(function(item){
    var checkBox = item.getAttribute("id");

    // check checkboxes if they're stored
    if (window.localStorage.getItem(checkBox) === "true") {
        item.setAttribute("checked", "checked");
    }

    // saving checkbox to store
    item.addEventListener("change", function() {
        window.localStorage.setItem(checkBox, item.checked)
    });
});

// reset form
document.getElementById('checklist--submit').addEventListener("click", function() {
    var checklist = document.getElementById("checklist");

    checklist.reset();
    window.localStorage.clear();
    checkListItems.forEach(function(item) {
        item.removeAttribute("checked")
    });
});
