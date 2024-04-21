import { ToastProps } from "./Toast";
import { Observable } from "./observable";

type Events =
  | { type: "ADD_TOAST"; toast: Pick<ToastProps, "id" | "message" | "variant"> }
  | { type: "REMOVED_TOAST"; toastId: number };

export const observable = new Observable<Events>();

export function toast(message: string) {
  observable.notify({
    type: "ADD_TOAST",
    toast: { id: Math.random(), message },
  });
}

toast.success = (message: string) => {
  observable.notify({
    type: "ADD_TOAST",
    toast: { id: Math.random(), message, variant: "success" },
  });
};

toast.error = (message: string) => {
  observable.notify({
    type: "ADD_TOAST",
    toast: { id: Math.random(), message, variant: "error" },
  });
};

toast.remove = (id: number) => {
  observable.notify({ type: "REMOVED_TOAST", toastId: id });
};
