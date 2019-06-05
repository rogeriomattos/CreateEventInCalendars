var eventCalendar = {
    openCalendar : {
        
        google : function(event){
            var query = "http://www.google.com/calendar/event?"+
                    "action=TEMPLATE"+
                    "&text="+event.summary+
                    "&dates="+event.startDateTime+"/"+event.endDateTime+
                    "&details="+event.body+
                    "&location="+event.location;
            window.open(query, "_blank");
        }
    }
};
console.log(eventCalendar);