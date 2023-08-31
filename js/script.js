const btn = document.getElementById("submitbutton");
const outputName = document.getElementById("hasilnama");
const outputLahir = document.getElementById("hasillahir");
const outputGender = document.getElementById("hasilgender");
const outputPesan = document.getElementById("hasilpesan");

btn.onclick = (event) => {
	console.log('click');
    outputName.innerText= "Name : " + document.querySelector("[name='nama']").value;
    outputLahir.innerText = "Birthdate : " + document.querySelector("[name='lahir']").value;
    outputGender.innerText = "Gender : " + document.querySelector("[name='gender']").value;
    outputPesan.innerText = "Message : " + document.querySelector("[name='pesan']").value;
}