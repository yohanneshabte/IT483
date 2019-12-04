$(document).ready(function() {
	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	$("#arrivaldate").focus();
	$("form").submit(function(e){
		var completed = true;
		$("form input").each(function() {
			if($(this).val() === '') {
				$(this).css("border","1px red solid");
				if(!$(this).next().is(".error"))
					$(this).after("<span class='error' style='color: red; margin-left:1em'>This field is required.</span>");
				if(completed)
					$(this).focus();
				completed = false;
			} else {
				$(this).css("border","");
				$(this).next(".error").remove();	
				validate(this,e);
			}
		});
		if(!completed) 
				e.preventDefault();
	});
	function validate(element,e) {
		if(element.id == "email") {
			var r = new RegExp(emailPattern);
			if(!r.test($(element).val())) {
				$(element).after("<span class='error' style='color: red; margin-left:1em'>Must be a valid email address</span>");
				e.preventDefault();
			} else
				$(element).next(".error").remove();	
		} else if(element.id == "nights") {
			if(!isNumber($(element).val())) {
				$(element).after("<span class='error' style='color: red; margin-left:1em'>Must be a number</span>");
				e.preventDefault();
			} else
				$(element).next(".error").remove();	
		}
	}
}); // end ready
 
function isNumber(n) { 
    return !isNaN(parseFloat(n)) && !isNaN(n - 0); 
}
