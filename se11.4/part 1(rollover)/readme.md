# FAQs rollover application

### Answer
#### Javascript rollover.js

```javascript
$(document).ready(function(e) {
    $("h2").hover(function(){
        var id = "#" + $(this).parent().attr("id") +' p';
        $(id).show();
    },function(){
        var id = "#" + $(this).parent().attr("id") +' p';
        $(id).hide();
    });
});
```

#### index.html id updates

```html
<li id="what"><h2>What is jQuery?</h2>

<li id="why"><h2>Why is jQuery becoming so popular?</h2>

<li id="which"><h2>Which is harder to learn: jQuery or JavaScript?</h2>
```
