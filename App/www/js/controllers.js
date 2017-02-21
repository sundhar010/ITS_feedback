angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('LoginCtrl', function($scope,$http) {
	$scope.login=function (){
	var uname = document.getElementById('uname').value
	var pass = document.getElementById('pass').value
	if (uname === '')
		alert("Username Required")
	else if (pass === '')
		alert('Password Required')
	var send = {
		'username' : uname,
		'password' : pass
	};

	var url ='http://127.0.0.1:8000/api/mobile_login/'
	$http({'url':url,'method':'POST','data':send}).then(function(response){
		alert(response.status)
	},
	function(response){
		alert("error")
	});
	document.getElementById('uname').value=''
	document.getElementById('pass').value=''
	}	
})

	
	