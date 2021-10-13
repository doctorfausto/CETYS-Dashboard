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

const CubicleView = () => {
  return (
    <table className="table w-100">
      <tbody>
      <tr>
        <td>
          <ul>
            <li class="status available">Available</li>
            <li class="status reserved">Reserved</li>
            <li class="status occupied">Occupied</li>
          </ul>
        </td>
      </tr>
      <tr>
        <Link to="/library/cubicles/request-cubicle">
          <button class='btn btn-outline-primary btn-block' type='button'>Request</button>
        </Link>
      </tr>
      <tr>
        <td>
          <CIcon icon={cilUser}/> 2 - 4
        </td>
      </tr>
      <tr>
        <td className="text-muted">Limit Time: 0 - 2 hours</td>
      </tr>
      <tr>
        <td className="text-muted">Time Left: 02:00:00</td>
      </tr>
      </tbody>
    </table>
  )
}

const CubicleRoom = ({className, children}) => {
  const classes = classNames(className, 'theme-color w-75 rounded mb-3')
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
          Cubicles
          <DocsLink href="https://coreui.io/docs/utilities/colors/"/>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CubicleRoom className="bg-primary">
              <h6>Cubicle 1</h6>
            </CubicleRoom>
            <CubicleRoom className="bg-secondary">
              <h6>Cubicle 2</h6>
            </CubicleRoom>
            <CubicleRoom className="bg-success">
              <h6>Cubicle 3</h6>
            </CubicleRoom>
            <CubicleRoom className="bg-danger">
              <h6>Cubicle 4</h6>
            </CubicleRoom>
            <CubicleRoom className="bg-warning">
              <h6>Cubicle 5</h6>
            </CubicleRoom>
            <CubicleRoom className="bg-info">
              <h6>Cubicle 6</h6>
            </CubicleRoom>
            <CubicleRoom className="bg-light">
              <h6>Cubicle 7</h6>
            </CubicleRoom>
            <CubicleRoom className="bg-dark">
              <h6>Cubicle 8</h6>
            </CubicleRoom>
            <CubicleRoom className="bg-dark">
              <h6>Cubicle 9</h6>
            </CubicleRoom>
            <CubicleRoom className="bg-dark">
              <h6>Cubicle 10</h6>
            </CubicleRoom>
            <CubicleRoom className="bg-dark">
              <h6>Cubicle 11</h6>
            </CubicleRoom>
            <CubicleRoom className="bg-dark">
              <h6>Cubicle 12</h6>
            </CubicleRoom>
            <CubicleRoom className="bg-dark">
              <h6>Cubicle 13</h6>
            </CubicleRoom>
            <CubicleRoom className="bg-dark">
              <h6>Cubicle 14</h6>
            </CubicleRoom>
            <CubicleRoom className="bg-dark">
              <h6>Sala de video</h6>
            </CubicleRoom>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Cubicles
