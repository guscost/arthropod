const __ROOT_PATH__ =
  (
    document.querySelector('meta[name="root-path"]') as HTMLMetaElement
  )?.content?.replace(/\/$/, "") || "";

function __LOAD_SCRIPT__(src: string, async = false) {
  const dynamicScript = document.createElement("script");
  dynamicScript.type = "text/javascript";
  dynamicScript.src = src + ".js";
  dynamicScript.async = async;
  document.body.appendChild(dynamicScript);
}

(function () {
  // Tailwind & Config
  __LOAD_SCRIPT__(__ROOT_PATH__ + "/js/lib/tailwind.min");
  __LOAD_SCRIPT__(__ROOT_PATH__ + "/js/lib/tailwind-config");

  // Module loader
  __LOAD_SCRIPT__(__ROOT_PATH__ + "/js/lib/define");

  // Dependencies
  __LOAD_SCRIPT__(__ROOT_PATH__ + "/js/lib/react.min");
  __LOAD_SCRIPT__(__ROOT_PATH__ + "/js/lib/react-dom.min");
  __LOAD_SCRIPT__(__ROOT_PATH__ + "/js/lib/lucide-react.min");
  __LOAD_SCRIPT__(__ROOT_PATH__ + "/js/lib/extras.min");
  __LOAD_SCRIPT__(__ROOT_PATH__ + "/js/lib/dnd-kit.min");
  __LOAD_SCRIPT__(__ROOT_PATH__ + "/js/lib/radix-ui.min");
  __LOAD_SCRIPT__(__ROOT_PATH__ + "/js/lib/shadcn.min");
  __LOAD_SCRIPT__(__ROOT_PATH__ + "/js/lib/chart.min");
  __LOAD_SCRIPT__(__ROOT_PATH__ + "/js/lib/form.min");

  // App entrypoint
  __LOAD_SCRIPT__(__ROOT_PATH__ + "/js/index");
})();
