import { Stack, Button } from "@mui/material"


export const MuiButton = () => {
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
            <Button variant="text">Text</Button>
            <Button variant="contained">Text</Button>
            <Button variant="outlined">Text</Button>

        </Stack>

        <Stack spacing={2} direction='row'>
            <Button variant='text' color="primary">Primary</Button>
            <Button variant='outlined' color="secondary">Primary</Button>
            <Button variant='contained' color="error">Primary</Button>
            <Button variant='contained' color="warning">Primary</Button>
            <Button variant='contained' color="info">Primary</Button>
            <Button variant='contained' color="success">Primary</Button>


        </Stack>

        </Stack>
    </Stack>
  )
}
