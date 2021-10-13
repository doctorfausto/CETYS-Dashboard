import React from 'react'
import {
    CCard,
    CCardBody,
  CCol,
  CProgress,
  CRow,
  CButton,
  CButtonGroup,
  CCardFooter
} from '@coreui/react'


const Histograma = () => {

    const data = {
        'Ingenieria': [20,15,30,20,31,50,31],
        'Humanidades': [41,12,24,43,53,23,53],
        'Administracion': [42,42,52,43,32,31,24],
        'Preparatoria': [52,32,42,31,42,42,52]
    }

    const semana = "11 oct - 17 oct";

    return(
        <CCard className="mb-4">
            <CCardBody>
                <CRow>
                    <CCol sm={3}>
                      <div className="border-start border-start-4 border-start-primary py-1 px-3">
                        <div className="text-medium-emphasis small">Ingenieria</div>
                        <div className="fs-5 fw-semibold">{data['Ingenieria'].reduce((a, b) => a + b, 0)}</div>
                      </div>
                    </CCol>
                    <CCol sm={3}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Ciencias Sociales y Humanidades</div>
                        <div className="fs-5 fw-semibold">{data['Humanidades'].reduce((a, b) => a + b, 0)}</div>
                      </div>
                    </CCol>
                    <CCol sm={3}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Administracion</div>
                        <div className="fs-5 fw-semibold">{data['Administracion'].reduce((a, b) => a + b, 0)}</div>
                      </div>
                    </CCol>
                    <CCol sm={3}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Preparatoria</div>
                        <div className="fs-5 fw-semibold">{data['Preparatoria'].reduce((a, b) => a + b, 0)}</div>
                      </div>
                    </CCol>
                </CRow>
        <CRow xs={{ cols: 1 }} md={{ cols: 1 }} className="text-center">
            <CCol>    
                <hr className="mt-0" />

                <div className="progress-group mb-4">
                <div className="progress-group-prepend">
                    <span className="text-medium-emphasis small">Monday</span>
                </div>
                <div className="progress-group-bars">
                    <CProgress thin color="primary" value={data['Ingenieria'][0]} />
                    <CProgress thin color="info" value={data['Humanidades'][0]} />
                    <CProgress thin color="warning" value={data['Administracion'][0]} />
                    <CProgress thin color="danger" value={data['Preparatoria'][0]} />
                </div>
                </div>
                <div className="progress-group mb-4">
                <div className="progress-group-prepend">
                    <span className="text-medium-emphasis small">Tuesday</span>
                </div>
                <div className="progress-group-bars">
                    <CProgress thin color="primary" value={data['Ingenieria'][1]} />
                    <CProgress thin color="info" value={data['Humanidades'][1]} />
                    <CProgress thin color="warning" value={data['Administracion'][1]} />
                    <CProgress thin color="danger" value={data['Preparatoria'][1]} />
                </div>
                </div>
                <div className="progress-group mb-4">
                <div className="progress-group-prepend">
                    <span className="text-medium-emphasis small">Wednesday</span>
                </div>
                <div className="progress-group-bars">
                    <CProgress thin color="primary" value={data['Ingenieria'][2]} />
                    <CProgress thin color="info" value={data['Humanidades'][2]} />
                    <CProgress thin color="warning" value={data['Administracion'][2]} />
                    <CProgress thin color="danger" value={data['Preparatoria'][2]} />
                </div>
                </div>
                <div className="progress-group mb-4">
                <div className="progress-group-prepend">
                    <span className="text-medium-emphasis small">Thursday</span>
                </div>
                <div className="progress-group-bars">
                    <CProgress thin color="primary" value={data['Ingenieria'][3]} />
                    <CProgress thin color="info" value={data['Humanidades'][3]} />
                    <CProgress thin color="warning" value={data['Administracion'][3]} />
                    <CProgress thin color="danger" value={data['Preparatoria'][3]} />
                </div>
                </div>
                <div className="progress-group mb-4">
                <div className="progress-group-prepend">
                    <span className="text-medium-emphasis small">Friday</span>
                </div>
                <div className="progress-group-bars">
                    <CProgress thin color="primary" value={data['Ingenieria'][4]} />
                    <CProgress thin color="info" value={data['Humanidades'][4]} />
                    <CProgress thin color="warning" value={data['Administracion'][4]} />
                    <CProgress thin color="danger" value={data['Preparatoria'][4]} />
                </div>
                </div>
                <div className="progress-group mb-4">
                <div className="progress-group-prepend">
                    <span className="text-medium-emphasis small">Saturday</span>
                </div>
                <div className="progress-group-bars">
                    <CProgress thin color="primary" value={data['Ingenieria'][5]} />
                    <CProgress thin color="info" value={data['Humanidades'][5]} />
                    <CProgress thin color="warning" value={data['Administracion'][5]} />
                    <CProgress thin color="danger" value={data['Preparatoria'][5]} />
                </div>
                </div>
                <div className="progress-group mb-4">
                <div className="progress-group-prepend">
                    <span className="text-medium-emphasis small">Sunday</span>
                </div>
                <div className="progress-group-bars">
                    <CProgress thin color="primary" value={data['Ingenieria'][6]} />
                    <CProgress thin color="info" value={data['Humanidades'][6]} />
                    <CProgress thin color="warning" value={data['Administracion'][6]} />
                    <CProgress thin color="danger" value={data['Preparatoria'][6]} />
                </div>
                </div>
            </CCol>
        </CRow>
        </CCardBody>
        <CCardFooter>
        <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="text-center">
            <CCol className="d-none d-md-block">
                <CButton color="primary">Anterior</CButton>
            </CCol>
            <CCol>
              <h4 id="traffic" className="card-title mb-0">
                {semana}
              </h4>
            </CCol>
            <CCol className="d-none d-md-block">
                <CButton color="primary">Siguiente</CButton>
            </CCol>
        </CRow>
        </CCardFooter>
        </CCard>
    );
};

export default Histograma;