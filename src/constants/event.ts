/**
 * WebView와 Native 간의 브릿지 이벤트 타입 정의
 * 형식: [행동_대상_형태]
 * 예: OPEN_MODAL_CONFIRM, OPEN_BOTTOMSHEET_SELECT, OPEN_TOPSHEET_INFO
 */
type BridgeGetEventToken = "NONE" | "OPEN_MODAL_CONFIRM" | "OPEN_MODAL_ALERT";

type BridgePostEventToken = "ACTION_CONFIRMED" | "ACTION_CANCELED";

export type { BridgeGetEventToken, BridgePostEventToken };
