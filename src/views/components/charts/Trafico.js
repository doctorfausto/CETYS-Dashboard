import React, { lazy } from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

const Trafico = () => {

    const random = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    const rangoFecha = "11 oct - 17 oct";
    const labels = ['8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00'];

    //TODO: API call para datos del dia
    const data = {
        'Ingenieria':
        {
            'total': 0,
            'data': [random(0, 6),
            random(0, 6),
            random(0, 6),
            random(0, 6),
            random(0, 6),
            random(0, 6),
            random(0, 6),],
            'promedio': 0,
            'porcentaje': 30
        },
        'Humanidades':
        {
            'total': 0,
            'data': [random(0, 6),
            random(0, 6),
            random(0, 6),
            random(0, 6),
            random(0, 6),
            random(0, 6),
            random(0, 6),],
            'promedio': 0,
            'porcentaje': 20
        },
        'Administracion':
        {
            'total': 0,
            'data': [random(0, 6),
            random(0, 6),
            random(0, 6),
            random(0, 6),
            random(0, 6),
            random(0, 6),
            random(0, 6),],
            'promedio': 0,
            'porcentaje': 15
        },
        'Preparatoria':
        {
            'total': 0,
            'data': [random(0, 6),
            random(0, 6),
            random(0, 6),
            random(0, 6),
            random(0, 6),
            random(0, 6),
            random(0, 6),],
            'promedio': 0,
            'porcentaje': 35
        }
    }

    return (
        <CCard className="mb-4">
        <CCardBody>
          <CRow xs={{ cols: 1 }} md={{ cols: 4 }} className="text-center">
            <CCol sm={3}>
              <h4 id="traffic" className="card-title mb-0">
                Uso de cubículos
              </h4>
              {/* TODO: update a la fecha por API call */}
              <div className="small text-medium-emphasis">{rangoFecha}</div>
            </CCol>
            <CCol sm= {5} className="d-none d-md-block">
              <CButtonGroup className="me-2" role="group" aria-label="First group">
                {/* TODO: funcionalidad en los botones  */}
                <CButton color="primary">Lu.</CButton>
                <CButton color="primary">Ma.</CButton>
                <CButton color="primary">Mi.</CButton>
                <CButton color="primary">Ju.</CButton>
                <CButton color="primary">Vi.</CButton>
                <CButton color="primary">Sa.</CButton>
                <CButton color="primary">Semana</CButton>
              </CButtonGroup>
            </CCol>
            <CCol sm={2} className="d-none d-md-block">
              <CButtonGroup className="me-2" role="group" aria-label="Second group">
                {/* TODO: funcionalidad en los botones  */}
                <CButton color="secondary">ING</CButton>
                <CButton color="secondary">CSH</CButton>
                <CButton color="secondary">ADM</CButton>
                <CButton color="secondary">PREP</CButton>
              </CButtonGroup>
            </CCol>
            <CCol sm={2} className="d-none d-md-block">
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: labels,
              datasets: [
                {
                  label: 'Ingeniería',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-primary'),
                  pointHoverBackgroundColor: getStyle('--cui-primary'),
                  borderWidth: 2,
                  data: data['Ingenieria']['data'],
                  fill: true,
                },
                {
                  label: 'Ciencias Sociales y Humanidades',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: data['Humanidades']['data'],
                },
                {
                  label: 'Administracion',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-warning'),
                  pointHoverBackgroundColor: getStyle('--cui-warning'),
                  borderWidth: 2,

                  data: data['Administracion']['data'],
                },
                {
                  label: 'Preparatoria',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-danger'),
                  pointHoverBackgroundColor: getStyle('--cui-danger'),
                  borderWidth: 2,
                  data: data['Preparatoria']['data'],
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
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: 1,
                    max: 12,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>
        <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 4 }} className="text-center">
            <CCol className="mb-sm-2 mb-0">
              <div className="text-medium-emphasis">Ingeniería</div>
              <strong>{data['Ingenieria']['promedio']} ({data['Ingenieria']['porcentaje']}%)</strong>
              <CProgress thin className="mt-2" precision={1} value={data['Ingenieria']['porcentaje']} />
            </CCol>
            <CCol className="mb-sm-2 mb-0">
              <div className="text-medium-emphasis">Ciencias Sociales y Humanidades</div>
              <strong>{data['Humanidades']['promedio']} ({data['Humanidades']['porcentaje']}%)</strong>
              <CProgress thin className="mt-2" precision={1} color="info" value={data['Humanidades']['porcentaje']} />
            </CCol>
            <CCol className="mb-sm-2 mb-0">
              <div className="text-medium-emphasis">Administración</div>
              <strong>{data['Administracion']['promedio']} ({data['Administracion']['porcentaje']}%)</strong>
              <CProgress thin className="mt-2" precision={1} color="warning" value={data['Administracion']['porcentaje']} />
            </CCol>
            <CCol className="mb-sm-2 mb-0">
              <div className="text-medium-emphasis">Preparatoria</div>
              <strong>{data['Preparatoria']['promedio']} ({data['Preparatoria']['porcentaje']}%)</strong>
              <CProgress thin className="mt-2" precision={1} color="danger" value={data['Preparatoria']['porcentaje']} />
            </CCol>
            {/* <CCol className="mb-sm-2 mb-0">
              <div className="text-medium-emphasis">Bounce Rate</div>
              <strong>Average Rate (40.15%)</strong>
              <CProgress thin className="mt-2" precision={1} value={40} />
            </CCol> */}
          </CRow>
        </CCardFooter>
      </CCard>
    );
};
export default Trafico;
