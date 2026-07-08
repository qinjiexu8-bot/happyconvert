import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../styles.css";

class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error("HappyConvert render failed", error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <main className="boot-fallback" role="alert">
          <div className="boot-fallback-card">
            <img src="/logo.svg" alt="HappyConvert" className="boot-fallback-logo" />
            <strong>HappyConvert could not start</strong>
            <span>Refresh the page. If this keeps happening, restart the dev server.</span>
            <pre>{this.state.error.message}</pre>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Missing #root element");
}

createRoot(rootElement).render(
  <AppErrorBoundary>
    <App />
  </AppErrorBoundary>
);
