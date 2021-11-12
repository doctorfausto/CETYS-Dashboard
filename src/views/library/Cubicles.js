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
import 'src/css/status.css'
import 'src/scss/status.scss'
import Select, { StylesConfig } from 'react-select'
import { defaults } from 'chart.js'
//import StatusCubicle from './CubicleStatus'

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
    <div class="card" style={{width: '100%'}}>
      {/* <ul class="list-group list-group-flush">
        <li class="status available list-group-item">Disponible</li>
      </ul> */}
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

const CubicleRoom = ({children}) => {
  var statusColors = [
    {
        id: 1,
        value: "bg-success",
        label: "Disponible",
    },
    {
        id: 2,
        value: "bg-primary",
        label: "Reservado"
    },
    {
        id: 3,
        value: "bg-danger",
        label: "Ocupado"
    }
  ]

  var [setStatusCubicle, optValue] = useState(statusColors.value)
  var [defaultStatusCubicle, defaultOptValue] = useState(statusColors[0])

  var optHandle = opt =>
  {
    optValue(opt.value)
  }

  var select = document.getElementsByClassName(" css-qc6sy-singleValue")
  var label = [].map.call(select, item => item.textContent)
  
  var setColor = () => {
    for (let i = 0; i < label.length; i++)
    {
      if (label[i] == defaultStatusCubicle.label)
      {
        setColor = defaultStatusCubicle.value
        return setColor
      } else {
        setColor = setStatusCubicle
        return setColor
      }
    }
  }

  // var setColor = () => {
  //   if (setStatusCubicle == defaultStatusCubicle.label)
  //   {
  //     setColor = defaultStatusCubicle
  //     return setColor
  //   } else {
  //     setColor = setStatusCubicle
  //     return setColor
  //   }
  // }
  // if (setStatusCubicle == defaultStatusCubicle)
  // {
  //   console.log("TRUE")
  //   console.log(setStatusCubicle)
  //   console.log(defaultStatusCubicle)
  //   setColor = defaultStatusCubicle
  // } else {
  //   console.log("FALSE")
  //   setColor = setStatusCubicle
  // }

  const classes = classNames(setColor(), 'card-img-top w-75 rounded mb-3 mx-auto') 
  return (
    <CCol xl="3" md="5" sm="7" xs="13" className="mb-4">
      <div className={classes} style={{paddingTop: '75%'}}></div>
      {children}
      <Select
        id="statusCubicle"
        options={statusColors}
        defaultValue={statusColors[0]}
        onChange={optHandle}
        className="w-100 mb-3" 
        placeholder="Estado"
      />
      <CubicleView/>
    </CCol>
  )
}

//className="bg-success"
const Cubicles = () => {
  return (
    <>
      <CCard>
        <CCardHeader>
          Cubículos
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CubicleRoom>
              <h6 align="center">Cubículo 1</h6>
            </CubicleRoom>
            <CubicleRoom>
              <h6 align="center">Cubículo 2</h6>
            </CubicleRoom>
            <CubicleRoom>
              <h6 align="center">Cubículo 3</h6>
            </CubicleRoom>
            <CubicleRoom>
              <h6 align="center">Cubículo 4</h6>
            </CubicleRoom>
            <CubicleRoom>
              <h6 align="center">Cubículo 5</h6>
            </CubicleRoom>
            <CubicleRoom>
              <h6 align="center">Cubículo 6</h6>
            </CubicleRoom>
            <CubicleRoom>
              <h6 align="center">Cubículo 7</h6>
            </CubicleRoom>
            <CubicleRoom>
              <h6 align="center">Cubículo 8</h6>
            </CubicleRoom>
            <CubicleRoom>
              <h6 align="center">Cubículo 9</h6>
            </CubicleRoom>
            <CubicleRoom>
              <h6 align="center">Cubículo 10</h6>
            </CubicleRoom>
            <CubicleRoom>
              <h6 align="center">Cubículo 11</h6>
            </CubicleRoom>
            <CubicleRoom>
              <h6 align="center">Cubículo 12</h6>
            </CubicleRoom>
            <CubicleRoom>
              <h6 align="center">Cubículo 13</h6>
            </CubicleRoom>
            <CubicleRoom>
              <h6 align="center">Cubículo 14</h6>
            </CubicleRoom>
            <CubicleRoom>
              <h6 align="center">Sala de video</h6>
            </CubicleRoom>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Cubicles
