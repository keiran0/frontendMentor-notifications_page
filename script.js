var numberOfNotifications = document.querySelectorAll(".notification").length;
var notificationList = document.querySelectorAll(".notification");
var unreadList = document.querySelectorAll(".unread");

const dot = document.createElement("span");
dot.innerHTML = "&#9679";
dot.classList.add("red-dot");

function addUnreadDot() {
    for (var i=0; i<unreadList.length; i++) {
        document.querySelectorAll(".time")[i].parentNode.insertBefore(dot.cloneNode(true),document.querySelectorAll(".time")[i]);
    }
}

function checkNotificationCount() {
    var unreadNotifications = 0
    for (var i=0; i<numberOfNotifications; i++) {
        if (notificationList[i].classList.contains("unread")) {
            unreadNotifications++;
        }
    }
    document.querySelector(".notification-count").textContent = unreadNotifications;
}

for (var i=0; i<numberOfNotifications; i++) {
    notificationList[i].addEventListener("click", function() {
        this.classList.remove("unread");
        this.querySelector(".red-dot").remove();
        checkNotificationCount();
    })
}



document.querySelector(".mark-as-read").addEventListener("click", function(){
    for (var i=0; i<numberOfNotifications; i++) {
        document.querySelectorAll(".notification")[i].classList.remove("unread");
        document.querySelectorAll(".red-dot")[0].remove();
        checkNotificationCount();
        }
    
})

addUnreadDot();
// document.querySelectorAll(".notification").getAttribute()