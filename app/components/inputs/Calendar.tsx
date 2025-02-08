'use client';
import { DateRange as OriginalDateRange, DateRangeProps, Range, RangeKeyDict } from 'react-date-range';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

interface CalendarProps {
  value: Range;
  disabledDates?: Date[];
  onChange: (value: RangeKeyDict) => void;
}
interface ExtendedDateRangeProps extends DateRangeProps {
  refs?: React.RefObject<any>;  // Adjust as necessary
}

const DateRange: React.ComponentType<ExtendedDateRangeProps> = OriginalDateRange as any;

const Calendar: React.FC<CalendarProps> = ({
  value,
  disabledDates,
  onChange,
}) => {
  return (
    <DateRange
      rangeColors={['#262626']}
      ranges={[value]}
      date={new Date()}
      onChange={onChange}
      direction="vertical"
      showDateDisplay={false}
      minDate={new Date()}
      disabledDates={disabledDates}
    />
  );
};

export default  Calendar;
