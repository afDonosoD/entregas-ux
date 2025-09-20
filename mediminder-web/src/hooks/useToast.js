import { useCallback } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import * as bootstrap from 'bootstrap'

export function useToast() {
  const showToast = useCallback((message, options = {}) => {
    const toastRoot = document.getElementById("toast-root");
    if (!toastRoot) return;

    const allowedTypes = ["primary", "success", "danger", "warning"];
    if (options.type && !allowedTypes.includes(options.type)) return;
    const style = options.type ?? "primary";

    // Create wrapper
    const toastEl = document.createElement("div");
    toastEl.className = `toast align-items-center ${style}-style border-0`;
    toastEl.role = "alert";
    toastEl.ariaLive = "assertive";
    toastEl.ariaAtomic = "true";

    // Custom delay (default 3s)
    const delay = options.delay ?? 3000;

    // Inner HTML
    toastEl.innerHTML = `
      <div class="d-flex">
        <div class="toast-body">${message}</div>
        <button type="button" class="btn-close ${style}-text me-2 m-auto"
          data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    `;

    // Append to container
    toastRoot.appendChild(toastEl);

    // Initialize bootstrap toast
    const toast = new bootstrap.Toast(toastEl, { delay });
    toast.show();

    // Remove from DOM after hidden
    toastEl.addEventListener("hidden.bs.toast", () => {
      toastEl.remove();
    });
  }, []);

  return { showToast };
}
