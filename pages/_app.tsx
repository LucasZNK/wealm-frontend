import '../styles/globals.css';
import { Hydrate, QueryClientProvider } from 'react-query';
import { queryClient } from '../src/api';

function MyApp({ Component, pageProps }: any) {
  const t = '1';
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
