import { useEffect, useState } from "react";
import { Toast } from "./Toast";
import { ToastProps } from "./Toast";
import { observable, toast } from "./utils";

export function ToastContainer() {
  const [toasts, setToasts] = useState<
    Pick<ToastProps, "id" | "message", "variant">[]
  >([]);

  useEffect(() => {
    return observable.subscribe((event) => {
      if (event.type === "ADD_TOAST") {
        setToasts((prevToasta) => [...prevToasta, event.toast]);
      }
    });
  }, []);

  const handleRemoveToast = (id: number) => {
    console.log(id);
    const filteredToasts = toasts.filter((t) => t.id !== id);
    setToasts(filteredToasts);
  };

  return (
    <div className="absolute bottom-0 end-0 p-4 space-y-2 w-full h-full justify-end pointer-events-none flex flex-col max-w-xs ">
      {toasts.map((t) => (
        <Toast
          key={t.id}
          id={t.id}
          variant={t.variant}
          message={t.message}
          onClose={() => handleRemoveToast(t.id)}
        />
      ))}
    </div>
  );
}
