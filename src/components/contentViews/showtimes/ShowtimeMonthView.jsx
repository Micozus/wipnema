import React from "react";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ShowtimeDateView from "./ShowtimeDateView";
import {monthNames} from "../constants";

const ShowTimeMonthView = (props) => {

    const sortedDates = props.dates.sort((a, b) => a - b);

    const showtimesFilteredByDay = sortedDates.map(date => {

        const filteredShowtimes = props.showtimes.filter(showtime => new Date(showtime.start_at).getDate() === date);
        return (
            <ShowtimeDateView
                key={date}
                showtimes={filteredShowtimes}
                date={date}
                title={props.title}
                poster={props.poster}
                onSelect={props.onSelect}
            />
        );
    });

    const expanded = new Date(Date.now()).getMonth() === props.month;

    return (
        <ExpansionPanel defaultExpanded={expanded}>
            <ExpansionPanelSummary
                expandIcon={<i className="material-icons">
                    expand_more
                </i>}
            >
                <Typography>{monthNames[props.month]}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails
                classes={{root: 'cardBg'}}
            >
                {showtimesFilteredByDay}
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};

export default ShowTimeMonthView;
