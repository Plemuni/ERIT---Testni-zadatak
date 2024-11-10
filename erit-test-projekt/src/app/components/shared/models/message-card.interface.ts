export interface MessageCardItem {
  id: number;
  itemIcon: ItemIcon;
  dates: MessageCardDate[];
  text: MessageCardContent;
  buttons: MessageCardButton[];
}

interface MessageCardContent {
  title: string;
  content: string;
}

interface MessageCardDate {
  icon: string;
  date: string;
}

interface ItemIcon {
  status?: IconStatus;
  type?: string;
  src?: string;
}

interface MessageCardButton {
  src: string;
  pin?: PinButton;
}

type IconStatus = 'success' | 'error' | 'info';
export type PinButton = 'pin' | 'unpin';
