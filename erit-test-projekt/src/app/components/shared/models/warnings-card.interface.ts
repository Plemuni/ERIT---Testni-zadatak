export interface WarningsCardItem {
  itemIcon: ItemIcon;
  date: string;
  text: string;
}

interface ItemIcon {
  status: IconStatus;
  type: string;
}

type IconStatus = 'success' | 'error' | 'info';
