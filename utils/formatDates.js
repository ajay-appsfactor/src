
import moment from "moment-timezone";

export function formatDates(records, timezone = "UTC", fields = ["created_at", "updated_at"]) {
  return records.map((item) => {
    const newItem = { ...item };
    fields.forEach((field) => {
      if (newItem[field]) {
        newItem[field] = moment(newItem[field])
          .tz(timezone)
          .format("YYYY-MM-DD HH:mm:ss");
      }
    });
    return newItem;
  });
}
