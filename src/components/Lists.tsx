import List from '@mui/material/List'
import { ListItemButton } from '@mui/material'
import ListItemText from '@mui/material/ListItemText'

import data from '../EmployeeData.json'
import { color, fontFamily } from 'src/components/shared/global'
import { EmployeeProps } from 'src/types/employee'

type ListsProps = {
  employee: any
  fontValue: number | number[]
  handleListItem: (e: React.MouseEvent) => void
}

export const Lists = ({ employee, fontValue, handleListItem }: ListsProps) => {
  return (
    <List sx={{ mt: 6 }}>
      {data.employees.map((item: EmployeeProps, index: number) => {
        return (
          <ListItemButton
            key={index}
            onClick={handleListItem}
            selected={item.name === employee.name}>
            <ListItemText
              disableTypography
              sx={{
                m: 0,
                color: color[index],
                textAlign: 'center',
                fontFamily: fontFamily[index],
                fontSize: employee.name === item.name ? `${fontValue}vh` : `${item.popularity}vh`
              }}
              primary={item.name}
            />
          </ListItemButton>
        )
      })}
    </List>
  )
}
