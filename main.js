var oldScroll = window.pageYOffset;
var navbar = document.getElementById("nav");
var form = document.getElementById("mailform");

// window.onscroll = function() {
// var currScroll = window.pageYOffset;
//   if (oldScroll > currScroll) {
//     navbar.style.top = "0";
//   } else {
//     navbar.style.top = "-80px";
//   }
//   oldScroll = currScroll;
// }

showHideNav = function () {
  var items = document.querySelector('.nav-items');
  if(items.className === "nav-items") {
      items.className += " show";
  } else {
      items.className = "nav-items";
  }
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const regex = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    const name = form.elements[0].value;
    const email = form.elements[1].value;
    const subject = form.elements[2].value;
    const body = form.elements[3].value;

    if(!name || !email || !subject || !body) {
        alert("All fields are required");
    } else if(!regex.test(email)) {
        alert("Enter correct format of mail");
    } else {
        window.open(`mailto:shiva11101998@gmail.com?subject=${subject}&body=${body}\nThanks and Regards,\n${name}`);
        form.reset();
    }
});