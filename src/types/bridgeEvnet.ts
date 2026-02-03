import { BridgeGetEventToken, BridgePostEventToken } from "../constants/event";

type Action = "OPEN" | "CLOSE";
type Target = "MODAL";
type Variant = "CONFIRM" | "ALERT" | null;

interface BridgeEvent {
  type: BridgeGetEventToken | BridgePostEventToken;
  payload?: any;
}

export type { Action, BridgeEvent, Target, Variant };
