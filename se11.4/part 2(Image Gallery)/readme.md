# Image Gallery Application

### Answer
#### Updated Javascript function

```javascript
 // set up the event handlers for each link
$(this).click(function(evt) {
//Slide the current image in 2000 ms(2 secs)
  $("#image").slideToggle(2000,function(){
//This function that runs when the slide motion is completed

  //toggle the next image back in 0 secs
    $("#image").slideToggle(0);
		$("#image").attr("src", imageURL);
    $("#caption").text(caption);
	});
  // cancel the default action of each link
  evt.preventDefault();
}); // end click 
```
