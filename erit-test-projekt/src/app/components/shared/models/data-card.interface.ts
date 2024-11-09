export interface ChangeRequestItem {
  roster: string;
  date: string;
  shiftSwitch: [string, string];
  sender?: string;
  sentTo?: string;
  status: [ChangeRequestIcon, ChangeRequestIcon];
}

interface ChangeRequestIcon {
  icon: string;
  status: string;
}

export interface WorkTimeItem {
  licenseUnit: string;
  role: string;
  lastWork: LastWork;
  period: string;
  hours: Hour;
}

interface LastWork {
  accent: string;
  data: string;
}

interface Hour {
  accent?: string;
  data: string;
}
