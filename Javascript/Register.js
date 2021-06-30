$(document).ready(function () {
	$("#influencer-icon").click(function () {
	  $("#influencer-icon").hide();
	  $("#design-paragraph").show();
	});
	$("#influencer-paragraph").click(function () {
	  $("#influencer-icon").show();
	  $("#influencer-paragraph").hide();
	});
      
	$("#content-icon").click(function () {
	  $("#content-icon").hide();
	  $("#content-paragraph").show();
	});
	$("#content-paragraph").click(function () {
	  $("#content-icon").show();
	  $("#content-paragraph").hide();
	});
      
	$("#brand-icon").click(function () {
	  $("#brand-icon").hide();
	  $("#brand-paragraph").show();
	});
	$("#brand-paragraph").click(function () {
	  $("#brand-icon").show();
	  $("#brand-paragraph").hide();
	});
      });

      
	//form function
	function feedback(form) {
	  var name = document.forms["feedback"]["name"].value;
	  var email = document.forms["feedback"]["email"].value;
	  var message = document.forms["feedback"]["message"].value;
	  alert(
	    " Your subscription to our list has been confirmed.Thank you for subscribing! "
	  );}