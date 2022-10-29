
const form_text = document.querySelectorAll(".form-text");
const kAdi = document.getElementById("kadi");
const ksifre = document.getElementById("ksifre");
var element = document.getElementById("btn");

element.onclick = function () {
  if (form_text != null) {
    if (kAdi.value == "celil" && ksifre.value == "123") {
     window.location = "index.html";
    } else {
      alert("Kullanici Adi Veya Şifre Hatalı");
    }
  }
};
