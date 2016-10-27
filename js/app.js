// store each checklist val
var timeOut
    , checkListItems = Array.prototype.slice.call(
        document.getElementsByClassName("checklist--item-status-box")
    );

// scroll to top function
function scrollToTop() {
    if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
        window.scrollBy(0, -50);
        timeOut = setTimeout('scrollToTop()', 11);
    } else clearTimeout(timeOut);
}

checkListItems.forEach(function (item) {
    var checkBox = item.getAttribute("id");

    if (!window.localStorage.getItem(checkBox) || window.localStorage.getItem(checkBox) === "incomplete") {
        item.classList.remove("checklist--item-status-box--DONE");
    } else {
        item.classList.add("checklist--item-status-box--DONE");
    }

    // saving checkbox to store
    item.addEventListener("click", function () {
        if (!window.localStorage.getItem(checkBox) || window.localStorage.getItem(checkBox) === "incomplete") {
            window.localStorage.setItem(checkBox, "done")
            item.classList.add("checklist--item-status-box--DONE");
        } else {
            window.localStorage.setItem(checkBox, "incomplete")
            item.classList.remove("checklist--item-status-box--DONE");
        }
    });
});

// reset form
document.getElementById('checklist--submit').addEventListener("click", function () {
    var checklist = document.getElementById("checklist");

    checklist.reset();
    window.localStorage.clear();
    checkListItems.forEach(function (item) {
        item.classList.remove("checklist--item-status-box--DONE");
    });

    scrollToTop();
});