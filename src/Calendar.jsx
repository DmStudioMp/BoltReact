import React, { Component } from 'react'

export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            months : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November","December"]
        };
    }

  render() {
    return (
      <div id="calendar">
        <div id="calendar-header">
            <h3>Calendar</h3>
        </div>
        <div id="calendar-body">
            <div id="calendar-month">
                <h4>{this.state.months[new Date().getMonth()]}</h4>
            </div>
            <div id="calendar-days">
                <div id="calendar-days-header">
                    <div id="calendar-day">Sun</div>
                    <div id="calendar-day">Mon</div>
                    <div id="calendar-day">Tue</div>
                    <div id="calendar-day">Wed</div>
                    <div id="calendar-day">Thu</div>
                    <div id="calendar-day">Fri</div>
                    <div id="calendar-day">Sat</div>
                </div>
                <div id="calendar-days-body">
                    {
                        this.props.days.map((day, index) => {
                            return <div key={index} id="calendar-day">{day}</div>
                        }
                        ) 
                    }
                </div>
                
            </div>
        </div>
        </div>
        
    )
  }
}
