import React from 'react'
import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons'

const WidgetsDropdown = () => {
  return (
    <CRow>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="primary"
          value={
            <>
              1438{' '}
              {/* <span className="fs-6 fw-normal">
                (-12.4% <CIcon icon={cilArrowBottom} />)
              </span> */}
            </>
          }
          // title="Users"
          title="Ingeniería"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
          chart={
            <CChartLine
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
                datasets: [
                  {
                    label: 'Visitas',
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointBackgroundColor: getStyle('--cui-primary'),
                    data: [181, 225, 196, 231, 178, 206, 215],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawBorder: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    min: 100,
                    max: 250,
                    display: false,
                    grid: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                elements: {
                  line: {
                    borderWidth: 1,
                    tension: 0.4,
                  },
                  point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
            />
          }
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="info"
          value={
            <>
              1873{' '}
              {/* <span className="fs-6 fw-normal">
                (40.9% <CIcon icon={cilArrowTop} />)
              </span> */}
            </>
          }
           title="Ciencias Sociales y Humanidades"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
          chart={
            <CChartLine
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
                datasets: [
                  {
                    label: 'Visitas',
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointBackgroundColor: getStyle('--cui-info'),
                    data: [181, 174, 196, 225, 163, 213, 232],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawBorder: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    min: 100,
                    max: 250,
                    display: false,
                    grid: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                elements: {
                  line: {
                    borderWidth: 1,
                  },
                  point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
            />
          }
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="warning"
          value={
            <>
              1152{' '}
              {/* <span className="fs-6 fw-normal">
                (84.7% <CIcon icon={cilArrowTop} />)
              </span> */}
            </>
          }
          title="Administración"
        //   action={
        //     <CDropdown alignment="end">
        //       <CDropdownToggle color="transparent" caret={false} className="p-0">
        //         <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
        //       </CDropdownToggle>
        //       <CDropdownMenu>
        //         <CDropdownItem>Action</CDropdownItem>
        //         <CDropdownItem>Another action</CDropdownItem>
        //         <CDropdownItem>Something else here...</CDropdownItem>
        //         <CDropdownItem disabled>Disabled action</CDropdownItem>
        //       </CDropdownMenu>
        //     </CDropdown>
        //   }
          chart={
            <CChartLine
              className="mt-3"
              style={{ height: '70px' }}
              data={{
                labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
                datasets: [
                  {
                    label: 'Visitas',
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: [181, 241, 196, 225, 163, 288, 232],
                    fill: true,
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    display: false,
                  },
                  y: {
                    display: false,
                  },
                },
                elements: {
                  line: {
                    borderWidth: 2,
                    tension: 0.4,
                  },
                  point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
            />
          }
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CWidgetStatsA
          className="mb-4"
          color="danger"
          value={
            <>
              1496{' '}
              {/* <span className="fs-6 fw-normal">
                (-23.6% <CIcon icon={cilArrowBottom} />)
              </span> */}
            </>
          }
          title="Preparatoria"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
          chart={
            <CChartBar
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
                datasets: [
                  {
                    label: 'Visitas',
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: [181, 241, 196, 225, 163, 288, 232],
                    barPercentage: 0.6,
                  },
                ],
              }}
              options={{
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawTicks: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    grid: {
                      display: false,
                      drawBorder: false,
                      drawTicks: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
              }}
            />
          }
        />
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
