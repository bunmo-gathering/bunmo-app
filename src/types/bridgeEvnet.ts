import { BridgeEventType } from "../constants/event";

type Action = "OPEN" | "CLOSE";
type Target = "MODAL";
type Variant = "CONFIRM" | "ALERT" | null;

interface BridgeEvent {
  type: BridgeEventType;
  payload: any;
}

export type { Action, BridgeEvent, Target, Variant };
