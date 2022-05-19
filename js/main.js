 // nav
 let divauth = document.getElementById("auth");

 const logout = () => {
     let li = document.createElement("li")
     li.classList = "nav-item"
     let a = document.createElement("a")
     a.classList = "nav-link active"
     a.innerText = "Login"
     a.id = "login"

     //delete user's links
     divauth.innerHTML = ""
     li.appendChild(a);
     //add login link
     divauth.appendChild(li)
     document.getElementById("login").addEventListener("click", () => {
         location.reload();
     });
 }
 document.getElementById("logout").addEventListener("click", logout);