export interface SplashScreenProps {
  onFinish: () => void;
}
interface TabIconProps {
  icon: any;
  color: string;
  name: string;
  focused: boolean;
}

export interface ScreenHeaderBtnProps {
  iconUrl: ImageSourcePropType;
  handlePress: () => void;
  width?: number;
  height?: number;
}

export interface CustomHeaderProps {
  notificationCount: number;
  onNotificationPress: () => void;
  onProfilePress: () => void;
}

export declare interface Transaction {
  transaction_id: string;
  transaction_date_time: string;
  buyer_name: string;
  transaction_amount: string;
  plate_number: string;
  copra_weight: number;
  payment_method: string;
  status: string;
}

export interface SearchInputProps {
  initialQuery?: string;
  icon: ImageSourcePropType;
  handlePress: () => void;
}

export interface addFABProps {
  onPress: () => void;
}

export interface AddTransactionModalProps {
  visible: boolean;
  onClose: () => void;
}
interface TransactionCardProps {
  transaction: Transaction;
  isEditMode: boolean;
  onPress: () => void;
}

export interface FilterModalProps {
  visible: boolean;
  onApplyFilters: (filters: {
    selectedPeriod: string;
    startDate: Date;
    endDate: Date;
    selectedStatus: string[];
  }) => void;
  onClose: () => void;
}

export interface Filters {
  selectedPeriod: string;
  startDate: Date;
  endDate: Date;
  selectedStatus: string[];
}

export interface UpdateTransactionModalProps {
  visible: boolean;
  onClose: () => void;
  onUpdate: (updatedTransaction: Transaction) => void;
  transaction: Transaction | null;
}

export interface BookingCalendarProps {
  onDateSelect: (date: string) => void;
}

interface LogoutModalProps {
  isVisible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export interface VirtualQueueHeaderProps {
  queueNumber: string;
  currentlyUnloading: number;
  totalTrucks: number;
  completed: number;
  onTheWay: number;
}

export interface QueueItem {
  id: string;
  time: string;
  plateNumber: string;
  owner: string;
  date: string;
}

export interface QueueItem {
  id: string;
  time: string;
  plateNumber: string;
  owner: string;
  date: string;
}

export interface Booking {
  id: string;
  destination: string;
  date: string;
  weight: string;
  plateNumber: string;
  status: string;
}

export interface BookingHistorySidebarProps {
  isVisible: boolean;
  onClose: () => void;
  bookingHistory: Booking[];
}

export interface QRCodeModalProps {
  isVisible: boolean;
  onClose: () => void;
  qrCodeData: string;
}

export interface SetPriceModalProps {
  visible: boolean;
  onClose: () => void;
  onSetPrice: (date: string, price: number) => void;
  selectedDate: string;
}

export interface PriceCardProps {
  title: string;
  price: string;
  subtitle?: string;
}
