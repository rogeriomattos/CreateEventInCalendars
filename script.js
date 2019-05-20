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
        var startDateTime = new Date($('#start-time').val()).toISOString().replace(".000","").replace(/[^a-zA-Z0-9]/g, "");    
        var endDateTime = new Date($('#end-time').val()).toISOString().replace(".000","").replace(/[^a-zA-Z0-9]/g, ""); 
        var location = $('#location').val();
        var summary = $('#summary').val();
        var body = $("#body").val();
        var allDay = $("#allDay").is(':checked');
            
        if(allDay){
        startDateTime = startDateTime.split("T")[0];
        
        endDateTime = new Date($('#start-time').val());
        
        endDateTime.setDate(endDateTime.getDate()+1);
        
        endDateTime = endDateTime.toISOString().replace(/[^a-zA-Z0-9]/g, "").split("T")[0];
        }
        
        var query = "http://www.google.com/calendar/event?"+
                    "action=TEMPLATE"+
                    "&text="+summary+
                    "&dates="+startDateTime+"/"+endDateTime+
                    "&details="+body+
                    "&location="+location;
        window.open(query, "_blank");
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