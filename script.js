function Toggle(){
    Navbar = document.getElementById("navbar")
    Navbar.classList.toggle("toggle")
  }

// ===================================Contact===============================
const Username = document.querySelector("#username")
const Sitename = document.querySelector("#sitename")
const Email = document.querySelector("#email")
const Call = document.querySelector("#call")
const Form = document.querySelector("#form")

const GetValue = (event) =>{
    event.preventDefault()
    console.log(Username.value, Email.value, Call.value);
}
const SendMessage = (e) =>{
    e.preventDefault()
    text = ` %0A 🔐 Site name: ${Sitename.value} https://abbos0.github.io/coffeeshop/  %0A 👦 Username: ${Username.value}  %0A 📩 Email:  ${Email.value} %0A 📞 Phone: ${Call.value}  `
    chat_id = -1002128588085 ,token = `6834109969:AAEhUkHL4MsMs8Be2CWGY9oC7KXSbW8JHAM`,url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}&parse_mode=html`
    let api = new   XMLHttpRequest();
    api.open("GET", url, true);
    api.send();Sitename.value = "" ,Username.value = "" ,Email.value = "",Call.value = "";
}  
Form.addEventListener("submit" , SendMessage )

// ===================================Contact===============================


