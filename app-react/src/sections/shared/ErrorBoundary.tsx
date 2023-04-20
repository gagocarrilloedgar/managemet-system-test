import { Component, ErrorInfo, ReactNode } from "react";

export class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean },
  { error: Error }
> {
  state = {
    hasError: false,
    error: new Error()
  };

  public static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error("Uncaught error:", error, errorInfo);
  }

  private resetError() {
    this.setState({ hasError: false });
  }

  render() {
    const { hasError, error } = this.state;

    if (hasError) {
      return (
        <>
          <h2>Something went wrong.</h2>
          {error.message && <span>Here's the error: {error.message}</span>}
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
