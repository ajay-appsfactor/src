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

// export function getCurrentTime(timezone) {
//     console.log("timezone slected :", timezone);
//   return moment().tz(timezone).format("YYYY-MM-DD HH:mm:ss");
// }

// export function getCurrentTime(timezone = "UTC") {
//   return moment().tz(moment(),timezone).utc().toDate();
// }


    // Convert UTC -> tenant timezone
    // const formattedData = data.map((item) => ({
    //   ...item,
    //   created_at: moment(item.created_at)
    //     .tz(company.timezone || "UTC")
    //     .format("YYYY-MM-DD HH:mm:ss"),
    // }));

// import moment from "moment-timezone";

// const tz = company.timezone; 
// const utcTime = moment.tz(moment(), tz).utc().toDate();

// await prisma.order.create({
//   data: {
//     delivery_date: utcTime,
//     companyId: company.id,
//   },
// });