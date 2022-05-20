import React from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Hit } from './Hit'

function InstantCellTemplate(hit: Hit) {
  return new Date(hit.instant).toLocaleString()
}

function Table(props: { hits: Hit[] }) {
  const { hits } = props

  return (
    <DataTable
      value={hits}
      responsiveLayout="scroll"
      sortField="instant"
      sortOrder={-1}
      paginator
      paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
      rows={10}
      rowsPerPageOptions={[10, 20, 30]}
    >
      <Column field="x" header="X" />
      <Column field="y" header="Y" />
      <Column
        field="instant"
        header="Time"
        body={InstantCellTemplate}
        sortable
      />
    </DataTable>
  )
}

export default Table
