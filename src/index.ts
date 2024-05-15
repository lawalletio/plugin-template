import AppIndex from "./app/page";

type FComponent = () => React.JSX.Element;
type AppProps = Record<string, FComponent>;

export const App: AppProps = {
  "/": AppIndex,
};

export const PluginRoutes = Object.keys(App);
