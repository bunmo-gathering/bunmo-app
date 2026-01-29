import { Action, Target, Variant } from "../types/bridgeEvnet";

const getBridgeEventSegment = (eventName: string) => {
  const segments = eventName.split("_");

  const action = segments[0] as Action;
  const target = segments[1] as Target;
  const variant = (segments[2] || null) as Variant;

  return { action, target, variant };
};

export { getBridgeEventSegment };
