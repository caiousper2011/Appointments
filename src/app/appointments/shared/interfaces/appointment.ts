export interface Appointment {
  description: string;
  end: { dateTime: string };
  location: string;
  start: { dateTime: string };
  summary: string;
}
