import moment from "moment";
import { format, utcToZonedTime } from "date-fns-tz";

export const convertIosDate = (iosDate: string) =>
  moment(iosDate).utc().format("YYYY-MM-DD");
export const primitiveValueOfDate = new Date().valueOf();

const today = new Date();
const timeZone = "Africa/Kigali";

export const todayDateTime = format(
  utcToZonedTime(today, timeZone),
  "yyy-MM-dd HH:mm:ss"
);
export const dateTimeWithoutSecond = format(
  new Date(todayDateTime),
  "yyy-MM-dd HH:mm"
);
export const currentDate = format(new Date(todayDateTime), "yyy-MM-dd");
