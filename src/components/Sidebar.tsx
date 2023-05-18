import { Grid } from "@mui/material"

import { Lists } from "./Lists"
import { Image } from "./shared/Image"
import logo from '../images/logo/the-godfather.svg'
import { EmployeeProps } from "src/types/employee"

type SidebarProps = {
    employee: EmployeeProps
    fontValue: number | number[]
    handleListItem: (e: React.MouseEvent) => void
}

export const Sidebar = ({ employee, fontValue, handleListItem }: SidebarProps) => {
    return (
        <Grid item
            md={3}
            xs={12}
            minHeight={'100vh'}
            sx={{
                backgroundColor: 'rgba(37,37,45, 0.6)',
                boxShadow: '0px 2px 2px #25252d'
            }}>
            <Image src={logo} sx={{ display: 'block', margin: 'auto', p: [1, 1, 2, 8] }} />
            <Lists
                employee={employee}
                fontValue={fontValue}
                handleListItem={handleListItem}
            />
        </Grid>
    )
}
