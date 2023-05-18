import { Box } from '@mui/material'

type ImageProps = {
    src: string
    caption?: string
    height?: number
    width?: number
    sx?: any
}

export const Image = ({ src, caption, height, width, sx }: ImageProps) => {
    return (
        <Box
            component="img"
            src={src}
            alt={caption}
            sx={{
                ...sx,
                height: height ?? 'auto',
                width: width ?? 'auto'
            }}
        />
    )
}
