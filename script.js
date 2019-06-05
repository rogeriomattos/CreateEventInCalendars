
  
$( document ).ready(function() {
  

    $('#outlook365').click(function(){
        var startDateTime = new Date($('#start-time').val()).toISOString();    
        var endDateTime = new Date($('#end-time').val()).toISOString();
        var location = $('#location').val();
        var summary = $('#summary').val();
        var body = $("#body").val();
        var allDay = $("#allDay").is(':checked');
        
        var query = "https://outlook.office.com/owa//?path=/calendar/action/compose&rru=addevent"+
                    "&startdt="+ startDateTime +
                    "&enddt="+ endDateTime +
                    "&subject="+ summary +
                    "&location="+ location + 
                    "&body="+ body +
                    "&allday="+allDay;

        window.open(query, "_blank");
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
        var startDateTime = new Date($('#start-time').val()).toISOString();    
        var endDateTime = new Date($('#end-time').val()).toISOString();
        var location = $('#location').val();
        var summary = $('#summary').val();
        var body = $("#body").val();
        var allDay = $("#allDay").is(':checked');
        var today = new Date().toISOString();
        var query = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Our Company//NONSGML v1.0//PT\n"+
                    "BEGIN:VEVENT\nUID:"+
                        "\nDTSTAMP:"+today+
                        "\nATTENDEE;CN=My Self ;RSVP=TRUE"+
                        "\nORGANIZER;CN=Me"+
                        "\nDTSTART:" + startDateTime +
                        "\nDTEND:" + endDateTime +
                        "\nLOCATION:" + location + 
                        "\nSUMMARY:"+ summary +
                        "\nBODY:"+ body +
                    "\nEND:VEVENT"+
                    "\nEND:VCALENDAR";

        var element = document.createElement('a');
        element.setAttribute('href', "data:text/calendar;charset=utf8,"+escape(query));
        element.setAttribute('download', "Evento");

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
        
        //window.open();
    });
});