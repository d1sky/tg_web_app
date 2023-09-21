import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';

export default function Form() {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
        <Stack
            component="form"
            sx={{
                padding: '15px'
            }}
            spacing={2}
            noValidate
            autoComplete="off"
        >

            <FormControl fullWidth sx={{ m: 5 }}>
                <InputLabel htmlFor="outlined-adornment-amount">ФИО</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    label="Amount"
                />
            </FormControl>

            <FormControl fullWidth sx={{ m: 5 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Телефон</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    label="Amount"
                />
            </FormControl>

            <FormControl fullWidth sx={{ m: 5 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Кадастр</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    label="Amount"
                />
            </FormControl>

            <FormControl fullWidth sx={{ m: 5 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Населенный пункт</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    label="Amount"
                />
            </FormControl>

            <FormControlLabel control={<Switch defaultChecked />} label="Созадть выезд на пробы" />

            <Button variant="contained" size="large">Сохранить</Button>
        </Stack>
    );
}