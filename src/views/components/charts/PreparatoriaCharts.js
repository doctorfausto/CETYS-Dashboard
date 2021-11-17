import React from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
import { DocsLink } from 'src/components'

const Charts = () => {
  const random = () => Math.round(Math.random() * 100)

  return (
    <CRow>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>
            Accesos por día
            {/* <DocsLink href="http://www.chartjs.org" /> */}
          </CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
                datasets: [
                  {
                    label: 'Accesos a cubículos',
                    backgroundColor: '#DD76DA',
                    data: [random(), random(), random(), random(), random(), random(), random()],
                  },
                ],
              }}
              labels="días"
            />
          </CCardBody>
        </CCard>
      </CCol>
      
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Accesos por semestre</CCardHeader>
          <CCardBody>
            <CChartDoughnut
              data={{
                labels: ['Primero', 'Segundo', 'Tercero', 'Cuarto', 'Quinto', 'Sexto'],
                datasets: [
                  {
                    backgroundColor: ['#00D8FF', '#DD1B16', '#DF1B76', '#A45621', '#A13683', '#F2663A'],
                    data: [random(), random(), random(), random(), random(), random()],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Charts
