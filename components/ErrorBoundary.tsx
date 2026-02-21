"use client";

import { Component, type ReactNode } from "react";
import Link from "next/link";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("ErrorBoundary caught:", error);
  }

  render() {
    if (this.state.hasError && this.props.fallback) {
      return this.props.fallback;
    }
    if (this.state.hasError) {
      return (
        <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center">
          <p className="font-medium text-red-800">Something went wrong in this section.</p>
          <Link href="/" className="mt-4 inline-block text-sm text-red-600 hover:underline">
            Back to Home
          </Link>
        </div>
      );
    }
    return this.props.children;
  }
}
