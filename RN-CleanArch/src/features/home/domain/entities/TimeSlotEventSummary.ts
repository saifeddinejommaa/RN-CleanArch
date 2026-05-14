import InterventionPointSummary from './InterventionPointSummary';
import TimeSlotStateTypeCode from './TimeSlotStateTypeCode';

type TimeSlotEventSummary = {
  timeSlotId: number;
  startDateTime: Date;
  startDateTimeUtc: Date;
  state?: TimeSlotStateTypeCode;
  interventionPoint?: InterventionPointSummary;
};

export default TimeSlotEventSummary;
