export interface IconCardItem {
  id?: number;
  itemIcon: ItemIcon;
  dates: IconCardDate[];
  text: IconCardContent;
  buttons: IconCardButton[];
}

interface IconCardContent {
  title?: string;
  content: string;
}

interface IconCardDate {
  icon?: string;
  date: string;
}

interface ItemIcon {
  status?: IconStatus;
  type?: string;
  src?: string;
}

interface IconCardButton {
  src: string;
  pin?: PinButton;
}

type IconStatus = 'success' | 'error' | 'info';
export type PinButton = 'pin' | 'unpin';
