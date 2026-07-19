import { Component, type ReactNode } from 'react';
import { Button } from './ui/Button';

type Props = { children: ReactNode };
type State = { error: Error | null };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };
  static getDerivedStateFromError(error: Error): State { return { error }; }
  componentDidCatch(error: Error) { console.error('[ErrorBoundary]', error); }
  render() {
    if (this.state.error) {
      return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, padding: 24, textAlign: 'center' }}>
          <h1 style={{ fontSize: 20, fontWeight: 700 }}>Bir şeyler ters gitti</h1>
          <p style={{ opacity: 0.7, maxWidth: 420 }}>{this.state.error.message}</p>
          <Button variant="unstyled" onClick={() => { this.setState({ error: null }); window.location.href = '/'; }}
            style={{ padding: '8px 20px', borderRadius: 8, border: '1px solid currentColor' }}>
            Ana sayfaya dön
          </Button>
        </div>
      );
    }
    return this.props.children;
  }
}
