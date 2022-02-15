import { SelectOption } from 'src/shared/components/select';

import { HOGWARTS_HOUSES } from './api';

export const HOGWARTS_HOUSE_OPTIONS: SelectOption[] = [
  { value: HOGWARTS_HOUSES.gryffindor, label: 'Гриффиндор' },
  { value: HOGWARTS_HOUSES.slytherin, label: 'Слизерин' },
  { value: HOGWARTS_HOUSES.hufflepuff, label: 'Пуффендуй' },
  { value: HOGWARTS_HOUSES.ravenclaw, label: 'Когтевран' },
];
