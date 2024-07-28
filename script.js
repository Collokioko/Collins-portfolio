var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0"
}
function closemenu(){
    sidemenu.style.right="-200px"
}

  const scriptURL = 'https://script.google.com/macros/s/AKfycbyoasLvY3FbKy-9zKbbdL6Q26LYsIrlS9aP--2sL7o-2b7AWt-79f2E_Ov2CSfxRQj2/exec'
  const form = document.forms['submit-to-google-sheet']

  const msg =document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message sent successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },2000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
  document.addEventListener('DOMContentLoaded', function() {
    const icon = document.getElementById('icon');
    const navUl = document.querySelector('nav ul');

    icon.addEventListener('click', function() {
        navUl.classList.toggle('show');
    });
});

