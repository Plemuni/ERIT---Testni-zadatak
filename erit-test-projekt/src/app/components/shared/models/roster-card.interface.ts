export interface RosterCardData {
  day: string;
  code: string;
  footer?: RosterCardFooter;
}

interface RosterCardFooter {
  description?: string;
  icon?: string;
}
