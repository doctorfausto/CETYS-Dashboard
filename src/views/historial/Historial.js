import PropTypes from 'prop-types'
import React, { lazy } from 'react'
import classNames from 'classnames'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout 
} from '@coreui/react'
import {
  cilPeople
} from '@coreui/icons'
import avatar1 from "src/assets/images/avatars/Alec.png"
import avatar2 from "src/assets/images/avatars/Fausto.png"
import avatar3 from "src/assets/images/avatars/Gerardo.png"
import avatar4 from "src/assets/images/avatars/Isaac.png"
import avatar5 from "src/assets/images/avatars/Juan Pablo.png"
import avatar6 from "src/assets/images/avatars/Oscar.png"
import avatar7 from "src/assets/images/avatars/Raul.png"
import avatar8 from "src/assets/images/avatars/Diego.png"
import avatar9 from "src/assets/images/avatars/1.jpg"
import avatar10 from "src/assets/images/avatars/2.jpg"
import CIcon from '@coreui/icons-react'
import { rgbToHex } from '@coreui/utils'
import { DocsLink } from 'src/components'

const WidgetsDropdown = lazy(() => import('src/views/components/widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('src/views/components/widgets/WidgetsBrand.js'))

const Historial = () => {
  return (
    <>
      <WidgetsBrand withCharts/>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Usuarios
            </CCardHeader>
            <CCardBody>
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center"><CIcon icon={cilPeople}/></th>
                    <th>Usuario</th>
                    <th className="text-center">Área</th>
                    <th>Estadía</th>
                    <th className="text-center">Cubiculo</th>
                    <th>Activity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr> {/*BEGIN*/}
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={avatar1} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>Alec Ortega Cisneros</div>
                      <div className="small text-muted">
                        <span>T030247</span>
                      </div>
                    </td>
                    <td className="text-center">
                      <small>
                        Ingeniería
                      </small>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>50%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2021 - Jul 10, 2021</small>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="success" value="50" />
                    </td>
                    <td className="text-center">
                      <small>
                        Cubiculo 1
                      </small>
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>10 sec ago</strong>
                    </td>
                  </tr>{/*END*/}
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={avatar2} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-danger"></span>
                      </div>
                    </td>
                    <td>
                      <div>Manuel Valenzuela</div>
                      <div className="small text-muted">
                        <span>T013135</span>
                      </div>
                    </td>
                    <td className="text-center">
                      <small>
                        Ingeniería
                      </small>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>10%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="info" value="10" />
                    </td>
                    <td className="text-center">
                      <small>
                        Cubiculo 2
                      </small>
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>5 minutes ago</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={avatar3} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-warning"></span>
                      </div>
                    </td>
                    <td>
                      <div>Gerardo Antonio</div>
                      <div className="small text-muted">
                        <span>T045681</span>
                      </div>
                    </td>
                    <td className="text-center">
                      <small>
                        Administración
                      </small>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>74%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="warning" value="74" />
                    </td>
                    <td className="text-center">
                     <small>
                        Cubiculo 3
                      </small>
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>1 hour ago</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={avatar4} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-secondary"></span>
                      </div>
                    </td>
                    <td>
                      <div>Isaac Sánchez</div>
                      <div className="small text-muted">
                        <span>T025437</span>
                      </div>
                    </td>
                    <td className="text-center">
                      <small>
                        Ingeniería
                      </small>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>98%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="danger" value="98" />
                    </td>
                    <td className="text-center">
                      <small>
                        Cubiculo 4
                      </small>
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>Last month</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={avatar5} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>Juan Pablo Hernández</div>
                      <div className="small text-muted">
                        <span>T051324</span>
                      </div>
                    </td>
                    <td className="text-center">
                      <small>
                        Humanidades
                      </small>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>22%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="info" value="22" />
                    </td>
                    <td className="text-center">
                      <small>
                        Cubiculo 5
                      </small>
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>Last week</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={avatar6} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-danger"></span>
                      </div>
                    </td>
                    <td>
                      <div>Oscar Altamirano</div>
                      <div className="small text-muted">
                        <span>T061243</span>
                      </div>
                    </td>
                    <td className="text-center">
                      <small>
                        Administración
                      </small>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>43%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="success" value="43" />
                    </td>
                    <td className="text-center">
                      <small>
                        Cubiculo 6
                      </small>
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>Yesterday</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={avatar7} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>Raul</div>
                      <div className="small text-muted">
                        <span>T015324</span>
                      </div>
                    </td>
                    <td className="text-center">
                      <small>
                        Humanidades
                      </small>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>50%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2021 - Jul 10, 2021</small>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="success" value="50" />
                    </td>
                    <td className="text-center">
                      <small>
                        Cubiculo 7
                      </small>
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>10 sec ago</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={avatar8} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>Diego Garibay</div>
                      <div className="small text-muted">
                        <span>T085642</span>
                      </div>
                    </td>
                    <td className="text-center">
                      <small>
                        Preparatoria
                      </small>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>50%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2021 - Jul 10, 2021</small>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="success" value="50" />
                    </td>
                    <td className="text-center">
                      <small>
                        Cubiculo 8
                      </small>
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>10 sec ago</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={avatar9} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>Alejandra</div>
                      <div className="small text-muted">
                        <span>T031246</span>
                      </div>
                    </td>
                    <td className="text-center">
                      <small>
                       Humanidades
                      </small>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>50%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2021 - Jul 10, 2021</small>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="success" value="50" />
                    </td>
                    <td className="text-center">
                     <small>
                        Cubiculo 9
                      </small>
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>10 sec ago</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={avatar10} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>Hugo</div>
                      <div className="small text-muted">
                        <span>T029787</span>
                      </div>
                    </td>
                    <td className="text-center">
                      <small>
                       Preparatoria
                      </small>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>50%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2021 - Jul 10, 2021</small>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="success" value="50" />
                    </td>
                    <td className="text-center">
                      <small>
                        Cubiculo 10
                      </small>
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>10 sec ago</strong>
                    </td>
                  </tr>
                </tbody>
              </table>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Historial
