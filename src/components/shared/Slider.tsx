import { Box, Slider, Typography } from '@mui/material';

type SliderProps = {
    defaultValue: number | number[]
    handleChange: (value: number | number[]) => void
}

export const LinearSlider = ({ defaultValue, handleChange }: SliderProps) => {
    return (
        <Box display={['block', 'flex']}>
            <Typography id="input-slider" paddingRight={5} color='#fffeff' fontSize={20}>
                Popularity
            </Typography>
            <Slider
                sx={{
                    '& .MuiSlider-thumb': {
                        color: "#ffffff",
                        opacity: 1
                    },
                    '& .MuiSlider-track': {
                        color: "#191d24",
                        opacity: 1
                    },
                    '& .MuiSlider-rail': {
                        color: "#191d24",
                        opacity: 1
                    },
                    '& .MuiSlider-active': {
                        color: "#191d24",
                        opacity: 1
                    }
                }}
                min={1}
                max={10}
                color={'primary'}
                component={'span'}
                value={defaultValue}
                defaultValue={defaultValue}
                onChange={(event: Event, value: number | number[]) => handleChange((value))}
            />
        </Box>
    );
}

