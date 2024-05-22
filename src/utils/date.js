import { format } from 'date-fns';

export const formatDate = (isoDate) => {
  if (!isoDate) return '';
  const date = new Date(isoDate);
  return format(date, 'yyyy-MM-dd');
};
export const formatISODate = (date) => {
  if (!date) return undefined;
  return new Date(date).toISOString();
};
