
var openCalendar = {
    google : function(event){
        if(event.allDay){
            event.endDateTime = new Date( event.startDateTime); 
            event.startDateTime = event.startDateTime.split("T")[0];
            event.endDateTime.setDate(event.endDateTime.getDate()+1);
            event.endDateTime = event.endDateTime.toISOString().replace(/[^a-zA-Z0-9]/g, "").split("T")[0];
        }

        event.startDateTime = event.startDateTime.replace(".000","").replace(/[^a-zA-Z0-9]/g, "");
        event.endDateTime = event.endDateTime.replace(".000","").replace(/[^a-zA-Z0-9]/g, ""); 

        var url = "http://www.google.com/calendar/event?"+
            "action=TEMPLATE"+
            "&text="+event.summary+
            "&dates="+event.startDateTime+"/"+event.endDateTime+
            "&details="+event.body+
            "&location="+event.location;
            window.open(url, "_blank");
    },

    outlook365 : function(event){
        var url =  "https://outlook.office.com/owa//?path=/calendar/action/compose&rru=addevent"+
            "&startdt="+ event.startDateTime +
            "&enddt="+ event.endDateTime +
            "&subject="+ event.summary +
            "&location="+ event.location + 
            "&body="+ event.body +
            "&allday="+event.allDay;

        window.open(url, "_blank");
    },
    
    ics : function(event){
        var query = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Our Company//NONSGML v1.0//PT\n"+
            "BEGIN:VEVENT\nUID:"+
            "\nDTSTAMP:"+event.today+
            "\nATTENDEE;CN=My Self ;RSVP=TRUE"+
            "\nORGANIZER;CN=Me"+
            "\nDTSTART:" + event.startDateTime +
            "\nDTEND:" + event.endDateTime +
            "\nLOCATION:" + event.location + 
            "\nSUMMARY:"+ event.summary +
            "\nBODY:"+ event.body +

            "\nEND:VEVENT"+
            "\nEND:VCALENDAR";

        var element = document.createElement('a');
        element.setAttribute('href', "data:text/calendar;charset=utf8,"+escape(query));
        element.setAttribute('download', "Evento");

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    } 
};
