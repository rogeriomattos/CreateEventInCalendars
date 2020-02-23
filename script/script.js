    function createEvent(){
        return {
            startDateTime : new Date(document.getElementById("start-time").value).toISOString(),    
            endDateTime : new Date(document.getElementById("end-time").value).toISOString(),
            location :document.getElementById("location").value,
            summary : document.getElementById("summary").value,
            body : document.getElementById("body").value,
            allDay : document.getElementById("allDay").checked,
            today : new Date().toISOString()
        };
    }

    function addOutlook365(){
        var event = createEvent();
        openCalendar.outlook365(event);
    }

    function addGoogle(){
        var event = createEvent();
        openCalendar.google(event);
    }
    function addFileIcs(){
        var event = createEvent();
        openCalendar.ics(event);
    }
