import * as React from 'react';
import type { Dayjs } from 'dayjs';
import DatePicker from '..';
import type { DatePickRef, RangePickerRef } from '../generatePicker/interface';

describe('DatePicker.typescript', () => {
  it('DatePicker ref methods', () => {
    const datePicker = (
      <DatePicker
        ref={picker => {
          picker?.focus();
          picker?.blur();
        }}
      />
    );
    expect(datePicker).toBeTruthy();
  });

  // https://github.com/ant-design/ant-design/issues/33417
  it('DatePicker ref methods with forwardRef', () => {
    const MyDatePicker = React.forwardRef((props, ref: DatePickRef<Dayjs>) => (
      <DatePicker {...props} ref={ref} />
    ));
    const datePicker = (
      <MyDatePicker
        ref={picker => {
          picker?.focus();
          picker?.blur();
        }}
      />
    );
    expect(datePicker).toBeTruthy();
  });

  it('RangePicker ref methods', () => {
    const rangePicker = (
      <DatePicker.RangePicker
        ref={picker => {
          picker?.focus();
          picker?.blur();
        }}
      />
    );
    expect(rangePicker).toBeTruthy();
  });

  it('RangePicker ref methods with forwardRef', () => {
    const MyRangePicker = React.forwardRef((props, ref: RangePickerRef<Dayjs>) => (
      <DatePicker.RangePicker {...props} ref={ref} />
    ));
    const datePicker = (
      <MyRangePicker
        ref={picker => {
          picker?.focus();
          picker?.blur();
        }}
      />
    );
    expect(datePicker).toBeTruthy();
  });
});
