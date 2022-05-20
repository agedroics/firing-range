import React, { useEffect, useRef, useState } from 'react'
import { Button } from 'primereact/button'
import { Toast } from 'primereact/toast'
import HitService from './HitService'
import { Hit } from './Hit'
import Table from './Table'
import Target from './Target'

function App() {
  const [hits, setHits] = useState([] as Hit[])
  const toast = useRef<Toast>(null)

  useEffect(() => {
    const client = HitService.subscribeToHits((hit) =>
      setHits((oldHits) => [...oldHits, hit])
    )
    return () => {
      client.deactivate()
    }
  }, [])

  function doEmergencyStop() {
    HitService.doEmergencyStop().then(() =>
      toast.current?.show({
        severity: 'success',
        summary: 'Success',
        detail: 'Emergency stop executed',
      })
    )
  }

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
              onClick={doEmergencyStop}
            />
          </div>
          <div className="col-12">
            <Table hits={hits} />
          </div>
        </div>
      </div>
      <Toast ref={toast} />
    </div>
  )
}

export default App
