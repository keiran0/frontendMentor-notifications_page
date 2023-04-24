var numberOfNotifications = document.querySelectorAll(".notification").length;
var notificationList = document.querySelectorAll(".notification");
var unreadList = document.querySelectorAll(".unread");

const dot = document.createElement("span");
dot.innerHTML = "&#9679";
dot.classList.add("red-dot");

function checkNotificationCount() {
    var unreadNotifications = 0
    for (var i=0; i<numberOfNotifications; i++) {
        if (notificationList[i].classList.contains("unread")) {
            unreadNotifications++;
        }
    }
    document.querySelector(".notification-count").textContent = unreadNotifications;
}

// if notification has unread in classlist, add red dot
function addUnreadDot() {
    for (var i=0; i<notificationList.length; i++) {
        if (notificationList[i].classList.contains("unread")) {
            document.querySelectorAll(".time")[i].parentNode.insertBefore(dot.cloneNode(true),document.querySelectorAll(".time")[i]);
        }
        
    }
}

for (var i=0; i<numberOfNotifications; i++) {
    notificationList[i].addEventListener("click", function() {
        this.classList.remove("unread");
        this.querySelector(".red-dot").remove();
        checkNotificationCount();
    })
    checkNotificationCount();
}

document.querySelector(".mark-as-read").addEventListener("click", function() {
    for (var i=0; i<numberOfNotifications; i++) {
        console.log(i);
        try {
            document.querySelectorAll(".notification")[i].classList.remove("unread");
        } catch (err) {}
        
        try {
            document.querySelectorAll(".red-dot")[0].remove();
        } catch (err) {}
    }
    checkNotificationCount();
})



addUnreadDot();
checkNotificationCount();