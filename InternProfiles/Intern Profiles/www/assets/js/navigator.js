function setNavigator(element){
    document.getElementsByClassName('navbar')[0].innerHTML = `
     <a href="home.html" id="homeElement">
            <img src="assets/images/icons/redhomeicon.svg" alt="" width="20px" height="auto"> <br> <p>Home</p>
    </a>


   <a href="profile.html" id="profilElement">
            <img class="profile" src="assets/images/PROF.png" alt="" width="20px" height="auto"> <br> <p>Profile</p>
        </a>

`
document.getElementById(element+'Element').classList.add('active')
}