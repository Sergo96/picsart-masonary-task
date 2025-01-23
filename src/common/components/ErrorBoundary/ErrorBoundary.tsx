import React, { Component, JSX, PropsWithChildren } from 'react';

interface ErrorBoundaryProps {
  fallback: JSX.Element;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

export class ErrorBoundary extends Component<PropsWithChildren<ErrorBoundaryProps>, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState((prev) => ({ ...prev, errorInfo }));
    // Optionally, log the error to an external service like Sentry
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '1rem', textAlign: 'center' }}>
          {this.props.fallback || (
            <div>
              <h2>Something went wrong.</h2>
              <button onClick={this.handleReset}>Try Again</button>
            </div>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
