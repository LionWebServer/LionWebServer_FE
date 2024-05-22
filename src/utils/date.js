import { format } from 'date-fns';

export const formatDate = (date) => {
  if (!date) return '';
  return format(new Date(date), 'yyyy-MM-dd');
};

export const formatISODate = (date) => {
  if (!date) return undefined;
  return new Date(date).toISOString();
};
