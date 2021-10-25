import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import {
  CButton,
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody
} from '@coreui/react'
import {
  cilUser
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { Link } from 'react-router-dom'
import { rgbToHex } from '@coreui/utils'
import { DocsLink } from 'src/components'
import 'src/scss/status.scss'

// const CubicleView = () => {
//   return (
//     <div class="card">
//       <table className="table w-100">
//         <tbody>
//         <tr>
//           <td>
//             <ul>
//               <li class="status available">Disponible</li>
//               <li class="status reserved">Reservado</li>
//               <li class="status occupied">Ocupado</li>
//             </ul>
//           </td>
//         </tr>
//         <tr>
//           <td>
//             <CIcon icon={cilUser}/> 2 - 4
//           </td>
//         </tr>
//         <tr>
//           <td>Tiempo límite: 0 - 2 horas</td>
//         </tr>
//         <tr>
//           <td>Tiempo restante: 02:00:00</td>
//         </tr>
//         </tbody>
//       </table>
//     </div>
//   )
// }

// const CubicleRoom = ({className, children}) => {
//   const classes = classNames(className, 'theme-color w-75 rounded mb-3')
//   return (
//     <CCol xl="2" md="4" sm="6" xs="12" className="mb-4">
//       <div className={classes} style={{paddingTop: '75%'}}></div>
//       {children}
//       <CubicleView/>
//     </CCol>
//   )
// }

const CubicleView = () => {
  return (
    <div class="card" style={{width: '75%'}}>
      <ul class="list-group list-group-flush">
        <li class="status available list-group-item">Disponible</li>
      </ul>
      <div class="card-body">
        <CIcon icon={cilUser}/> 2 - 4
      </div>
      <div class="list-group-item">
        Tiempo Límite: 0 - 2 horas
      </div>
      <div class="list-group-item">
        Tiempo restante: 02:00:00
      </div>
    </div>
  )
}

// paddingTop: '10%', paddingBottom: '10%', paddingLeft: '0%', paddingRight: '0%' 
const CubicleRoom = ({className, children}) => {
  const classes = classNames(className, 'card-img-top w-75 rounded mb-3')
  return (
    <CCol xl="2" md="4" sm="6" xs="12" className="mb-4">
      <div className={classes} style={{paddingTop: '75%'}}></div>
      {children}
      <CubicleView/>
    </CCol>
  )
}

const Cubicles = () => {
  return (
    <>
      <CCard>
        <CCardHeader>
          Cubículos
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CubicleRoom className="bg-success">
              <h6>Cubículo 1</h6>
            </CubicleRoom>
            <CubicleRoom className="bg-success">
              <h6>Cubículo 2</h6>
            </CubicleRoom>
            <CubicleRoom className="bg-success">
              <h6>Cubículo 3</h6>
            </CubicleRoom>
            <CubicleRoom className="bg-success">
              <h6>Cubículo 4</h6>
            </CubicleRoom>
            <CubicleRoom className="bg-success">
              <h6>Cubículo 5</h6>
            </CubicleRoom>
            <CubicleRoom className="bg-success">
              <h6>Cubículo 6</h6>
            </CubicleRoom>
            <CubicleRoom className="bg-success">
              <h6>Cubículo 7</h6>
            </CubicleRoom>
            <CubicleRoom className="bg-success">
              <h6>Cubículo 8</h6>
            </CubicleRoom>
            <CubicleRoom className="bg-success">
              <h6>Cubículo 9</h6>
            </CubicleRoom>
            <CubicleRoom className="bg-success">
              <h6>Cubículo 10</h6>
            </CubicleRoom>
            <CubicleRoom className="bg-success">
              <h6>Cubículo 11</h6>
            </CubicleRoom>
            <CubicleRoom className="bg-success">
              <h6>Cubículo 12</h6>
            </CubicleRoom>
            <CubicleRoom className="bg-success">
              <h6>Cubículo 13</h6>
            </CubicleRoom>
            <CubicleRoom className="bg-success">
              <h6>Cubículo 14</h6>
            </CubicleRoom>
            <CubicleRoom className="bg-success">
              <h6>Sala de video</h6>
            </CubicleRoom>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Cubicles
