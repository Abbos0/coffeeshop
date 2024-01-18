function Toggle(){
    Navbar = document.getElementById("navbar")
    Navbar.classList.toggle("toggle")
  }




  const Form = document.querySelector(".form")
  const Name = document.querySelector(".name")
  const Email = document.querySelector(".email")
  const Call = document.querySelector(".call")
  const Input = document.querySelector("#input")
  const Submit = document.querySelector(".submit")



  const changeHandler = ()=>{
    const SecretKey = '8933fcfd1e22f162fc583a46dfa2d836'
    fetch(`https://api.openweathermap.org/data/2.5/form?q=${Input}&appid=${SecretKey}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            Name.innerHTML = data.name;
            Email.innerHTML = data.email;
            Call.innerHTML = data.call;
            SendMessage(data)
        })
}
  const SendMessage = (fore) =>{
    search = `%0A 👦Name: ${fore.name}%0A 📧 Email: ${fore.email} %0A 📞 Call: ${fore.call}   `
    chat_id = -1002128588085
    token = `6834109969:AAEhUkHL4MsMs8Be2CWGY9oC7KXSbW8JHAM`
    url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${search}&parse_mode=html`

    let api = new   XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
}   
