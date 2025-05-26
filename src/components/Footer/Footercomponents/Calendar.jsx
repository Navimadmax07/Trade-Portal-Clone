import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const EventCalendar = () => {
  const events = [
    {
      title: "No Event",
      start: new Date().toISOString().split("T")[0],
    },
    {
      title: "Vanijya Utsav",
      start: "2021-09-23",
    },
    {
      title: "Exporters Colclave",
      start: "2021-09-23",
      end: "2021-09-30",
    },
    {
      title: "Meeting",
      start: "2020-02-12T10:30:00",
      end: "2020-02-12T12:30:00",
    },
  ];

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 15px",
      }}
    >
      <div style={{ margin: "20px 0" }}>
        <div className="col-md-12">
          <div
            style={{
              border: "1px solid rgba(0,0,0,.125)",
              borderRadius: ".25rem",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                padding: ".75rem 1.25rem",
                backgroundColor: "rgba(0,0,0,.03)",
                borderBottom: "1px solid rgba(0,0,0,.125)",
              }}
            >
              <h3
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  marginTop: "1.5rem",
                  textTransform: "uppercase",
                  marginBottom: "0",
                }}
              >
                Event Calendar
              </h3>
            </div>

            <div style={{ padding: "1.25rem" }}>
              <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                initialDate={new Date()}
                editable={true}
                eventLimit={true}
                events={events}
                headerToolbar={{
                  left: "prev,next today",
                  center: "title",
                  right: "dayGridMonth,dayGridWeek,dayGridDay",
                }}
                height="auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
