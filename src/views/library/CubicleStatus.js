import React, { useState } from 'react'
import classNames from 'classnames'
import 'src/scss/status.scss'
import Select from 'react-select'

function StatusCubicle() 
{
    var statusColors = [
        {
            value: 1,
            label: "Disponible"
        },
        {
            value: 2,
            label: "Reservado"
        },
        {
            value: 3,
            label: "Ocupado"
        }
    ]

    var [setStatusCubicle, optValue] = useState(statusColors.backgroundColor)
    var optHandle = e =>
    {
        optValue(e.label)
    }

    return(
        <div>
            <style>{'body {background-color:'+setStatusCubicle+';}'}</style>
            <Select options={statusColors} onChange={optHandle}></Select>
        </div>
    )
}
export default StatusCubicle