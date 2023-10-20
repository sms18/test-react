import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './Home.css';
import { QueryClient, QueryClientProvider } from 'react-query'; // Import from 'react-query', and fix the typos

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}> {/* Fix the typo here */}
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
  
);



