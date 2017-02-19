function login(){
	uname = document.getElementById('uname').value
	pass = document.getElementById('pass').value
	if (uname === '')
		alert("Username Required")
	else if (pass === '')
		alert('Password Required')
	document.getElementById('uname').value=''
	document.getElementById('pass').value=''
}