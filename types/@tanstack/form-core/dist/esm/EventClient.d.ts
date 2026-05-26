import { EventClient } from "@tanstack/devtools-event-client";
import { AnyFormOptions, AnyFormState } from "./FormApi";
type ExtractEventNames<T> = T extends `${string}:${infer EventName}`
  ? EventName
  : never;
export type BroadcastFormState = {
  id: string;
  state: AnyFormState;
};
export type BroadcastFormApi = {
  id: string;
  state: AnyFormState;
  options: AnyFormOptions;
};
export type BroadcastFormSubmissionState =
  | {
      id: string;
      submissionAttempt: number;
      successful: false;
      stage: "validateAllFields" | "validate";
      errors: any[];
    }
  | {
      id: string;
      submissionAttempt: number;
      successful: false;
      stage: "inflight";
      onError: unknown;
    }
  | {
      id: string;
      submissionAttempt: number;
      successful: true;
    };
export type BroadcastFormId = {
  id: string;
};
type EventMap = {
  "form-state": BroadcastFormState;
  "form-api": BroadcastFormApi;
  "form-submission": BroadcastFormSubmissionState;
  "request-form-state": BroadcastFormId;
  "request-form-reset": BroadcastFormId;
  "request-form-force-submit": BroadcastFormId;
  "form-unmounted": BroadcastFormId;
};
export type EventClientEventMap = keyof EventMap;
export type EventClientEventNames = ExtractEventNames<EventClientEventMap>;
declare class FormEventClient extends EventClient<EventMap> {
  constructor();
}
export declare const formEventClient: FormEventClient;
export {};
