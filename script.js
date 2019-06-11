
  
$( document ).ready(function() {
  

    $('#outlook365').click(function(){
        var event ={
            startDateTime : new Date($('#start-time').val()).toISOString(),    
            endDateTime : new Date($('#end-time').val()).toISOString(),
            location : $('#location').val(),
            summary : $('#summary').val(),
            body : $("#body").val(),
            allDay : $("#allDay").is(':checked'),
        };

        eventCalendar.openCalendar.outlook365(event);
    });

    $("#google").click(function(){
        var event = {
            startDateTime : new Date($('#start-time').val()).toISOString().replace(".000","").replace(/[^a-zA-Z0-9]/g, ""),    
            endDateTime : new Date($('#end-time').val()).toISOString().replace(".000","").replace(/[^a-zA-Z0-9]/g, ""), 
            location : $('#location').val(),
            summary : $('#summary').val(),
            body : $("#body").val(),
            allDay : $("#allDay").is(':checked'),
        } 
        if(event.allDay){
           event.startDateTime = event.startDateTime.split("T")[0];
           
           event.endDateTime = new Date($('#start-time').val());
          
           event.endDateTime.setDate(event.endDateTime.getDate()+1);
          
           event.endDateTime = event.endDateTime.toISOString().replace(/[^a-zA-Z0-9]/g, "").split("T")[0];
        }
        
        eventCalendar.openCalendar.google(event);
        
    });

    $("#fileIcs").click(function(){
        
        var event ={
            startDateTime : new Date($('#start-time').val()).toISOString(),    
            endDateTime : new Date($('#end-time').val()).toISOString(),
            location : $('#location').val(),
            summary : $('#summary').val(),
            body : $("#body").val(),
            allDay : $("#allDay").is(':checked'),
            today : new Date().toISOString(),
        };

        eventCalendar.openCalendar.ics(event);
    });
});