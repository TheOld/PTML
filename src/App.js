import { useEffect, Fragment } from 'react';

// Store
import useStore from './store/useStore';

import './App.scss';
// Components

import Form from './components/Form/Form';
import DataTable from './components/DataTable/DataTable';

const App = () => {
  const { fetchExclusions } = useStore();
  // When app is ready, we'll fetch the exclusions list
  useEffect(() => {
    fetchExclusions();
  }, [fetchExclusions]);

  return (
    <Fragment>
      <header>
        <h1>PartsTrader parts service</h1>
      </header>
      <main>
        <Form />
        <DataTable />
      </main>
    </Fragment>
  );
};

export default App;
