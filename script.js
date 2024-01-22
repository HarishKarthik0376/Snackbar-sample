let notib = document.querySelector("#notificationbox");
document.getElementById("submit").addEventListener("click",function(){
    let notification = document.createElement("div");
    notification.innerHTML = '<i class="fa-solid fa-circle-check"></i> Submitted successfully!!';
    notification.querySelector('i').classList.add('one');
    notib.appendChild(notification);
    notification.setAttribute('class',"notification");
   setTimeout(() => {
        notification.remove();
   }, 6000);

})
document.getElementById("error").addEventListener("click",function(){
    let notification = document.createElement("div");
    notification.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> There is an error!!';
    notification.querySelector('i').classList.add('two');
    notification.setAttribute('class',"notification");
    notification.classList.add('noti1');
    notib.appendChild(notification);
    setTimeout(() => {
        notification.remove();
   }, 6000);


})
document.getElementById("invalid").addEventListener("click",function(){
    let notification = document.createElement("div");
    notification.innerHTML = '<i class="fa-solid fa-circle-xmark"></i> Details are invalid!!';
    notib.appendChild(notification);
    notification.querySelector('i').classList.add('three');
    notification.setAttribute('class',"notification");
    notification.classList.add('noti2');
    setTimeout(() => {
        notification.remove();
   }, 6000);


})
