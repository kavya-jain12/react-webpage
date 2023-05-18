import { Box, Card, Grid, Typography } from "@mui/material"

import { Image } from "./shared/Image"
import { LinearSlider } from "./shared/Slider"
import { EmployeeProps } from "src/types/employee"

type SidebarProps = {
    employee: EmployeeProps
    fontValue: number | number[]
    handleSliderChange: (value: number | number[]) => void
}

const Employee = ({ employee, fontValue, handleSliderChange }: SidebarProps) => {
    return (
        <Grid item md={9} xs={12} rowSpacing={5}
            sx={{
                px: [5, 5, 5, 10],
                pt: [5, 5, 24],
                display: 'flex',
                flexDirection: ['column', 'row', 'row'],
                backgroundColor: ['#2e2e36', '#2e2e36', 'transparent']
            }}>

            <Grid item md={3} xs={12}>
                <Image
                    src={require(`../images/profile/${employee.image}`)}
                    width={150}
                    height={150}
                    sx={{
                        borderRadius: 1,
                        border: '1px solid #6e6f73'
                    }}
                />
            </Grid>

            <Grid item md={9} xs={12}>
                <Typography
                    color={'#fffeff'}
                    fontSize={30}
                    fontFamily={'Roboto-Light'}>
                    {employee.name}
                </Typography>

                <Box sx={{ mt: [4, 4, 5] }}>
                    <LinearSlider
                        defaultValue={fontValue}
                        handleChange={handleSliderChange} />

                    <Card
                        variant="outlined"
                        component={'div'}
                        sx={{
                            p: 3,
                            mt: 3,
                            mb: 10,
                            color: '#fffeff',
                            backgroundColor: "#191d24"
                        }}>
                        <Typography
                            fontSize={20}
                            sx={{ mb: 1 }}>
                            Biography
                        </Typography>
                        <Typography
                            lineHeight={1.6}
                            fontSize={14}
                            fontFamily={'Roboto-Regular'}>
                            {employee.biography}
                        </Typography>
                    </Card>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Employee