import { useState } from "react"
import { Grid } from "@mui/material"

import data from '../EmployeeData.json'
import { Sidebar } from "./Sidebar"
import Employee from "./Employee"
import { EmployeeProps } from "src/types/employee"

export const Content = () => {
    const [fontValue, setFontValue] = useState<number | number[]>(data.employees[0].popularity)
    const [employee, setEmployee] = useState<EmployeeProps>(data.employees[0])

    function handleListItem(e: React.MouseEvent) {
        const target = e.target as HTMLInputElement;
        const res = data.employees.find(item => item.name === target.innerText)
        if (res) {
            setFontValue(res.popularity)
            setEmployee(res)
        }
    }

    function handleSliderChange(value: number | number[]) {
        setFontValue(value)
    }

    return (
        <Grid container position={'absolute'} top={0}>
            <Sidebar
                employee={employee}
                fontValue={fontValue}
                handleListItem={handleListItem}
            />

            <Employee
                employee={employee}
                fontValue={fontValue}
                handleSliderChange={handleSliderChange}
            />
        </Grid>
    )
}
