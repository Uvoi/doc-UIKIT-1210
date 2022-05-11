import { Story } from '@storybook/react';
import { addDays, subDays } from 'date-fns';
import { useEffect, useRef, useState } from 'react';

import { DatePicker, Props } from './DatePicker';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
};

const Template: Story<Props> = (args) => {
  const [value, setValue] = useState<Date | null>(addDays(new Date(), 180));
  const ref = useRef(null);

  useEffect(() => {
    console.log(ref.current);
  }, [ref]);

  return <DatePicker {...args} ref={ref} value={value} onChange={setValue} />;
};

export const Default = Template.bind({});

Default.args = {
  inputProps: {
    label: 'Дата начала:',
    error: false,
    helperText: undefined,
    placeholder: 'Выберите дату',
  },
  disabled: false,
  minDate: subDays(new Date(), 90),
  maxDate: addDays(new Date(), 90),
};

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
