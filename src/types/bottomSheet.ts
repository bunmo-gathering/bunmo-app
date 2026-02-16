import { Variant } from "./bridgeEvnet";

type SelectOptionVariant = "default" | "destructive";

interface SelectOption {
  icon: string;
  label: string;
  variant: SelectOptionVariant;
}

interface BottomSheetData {
  title: string;
}

interface SelectBottomSheetData extends BottomSheetData {
  selectOptions: SelectOption[];
}

interface BottomSheetState {
  visible: boolean;
  variant: Variant | null;
  payload: SelectBottomSheetData | null;
}

export type { BottomSheetState, SelectOption };
