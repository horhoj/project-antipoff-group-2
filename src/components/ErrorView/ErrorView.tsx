import { useEffect } from 'react';

interface ErrorViewProps {
  error: null | unknown;
}

export function ErrorView({ error }: ErrorViewProps) {
  useEffect(() => {
    if (error !== null) {
      alert(JSON.stringify(error, null, 2));
    }
  }, [error]);
  return <></>;
}
