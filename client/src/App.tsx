import React, {useEffect, useState} from 'react';
import {Button} from 'primereact/button';
import HitService from './HitService';
import {Hit} from './Hit';
import Table from './Table';
import Target from './Target';

function App() {
  const [hits, setHits] = useState([] as Hit[]);

  useEffect(
    () =>
      HitService.subscribeToHits((hit) =>
        setHits((oldHits) => [...oldHits, hit])
      ),
    []
  );

  return (
    <div className="grid">
      <div className="col-12 lg:col-6">
        <Target hits={hits} />
      </div>
      <div className="col-12 lg:col-6">
        <div className="grid">
          <div className="col-12 align-items-center">
            <Button
              className="w-full"
              label="Emergency stop"
              onClick={HitService.doEmergencyStop}
            />
          </div>
          <div className="col-12">
            <Table hits={hits} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
