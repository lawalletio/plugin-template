import AppIndex from "./app/page";

type AppProps = Record<string, () => React.JSX.Element>;

export const App: AppProps = {
  "/": AppIndex,
};

export const PluginRoutes = Object.keys(App);
