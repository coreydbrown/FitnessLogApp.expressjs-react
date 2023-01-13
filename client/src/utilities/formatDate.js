import moment from "moment";

export const formatDateLong = (date) => moment(date).format("MMMM Do, YYYY");
export const formatDateMedium = (date) => moment(date).format("MMM Do, YYYY");
// export const formatDateShort = (date) => moment(date).format("MMMM Do, YYYY");
