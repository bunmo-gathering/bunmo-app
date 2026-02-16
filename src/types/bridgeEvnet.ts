import { BridgeGetEventToken, BridgePostEventToken } from "../constants/event";

type Action = "OPEN" | "CLOSE";
type Target = "MODAL" | "BOTTOMSHEET";
type Variant = "CONFIRM" | "ALERT" | "SELECT" | null;

interface BridgeEvent {
  type: BridgeGetEventToken | BridgePostEventToken;
  payload?: any;
}

export type { Action, BridgeEvent, Target, Variant };
