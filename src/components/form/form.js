import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import * as React from 'react';

export default function Form() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <div>
                <FormControl fullWidth sx={{ m: 5 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">ФИО</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        label="Amount"
                    />
                </FormControl>
            </div>
            <div>
                <FormControl fullWidth sx={{ m: 5 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">Телефон</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        label="Amount"
                    />
                </FormControl>
            </div>
            <div>
                <FormControl fullWidth sx={{ m: 5 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">Кадастр</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        label="Amount"
                    />
                </FormControl>
            </div>
            <div>
                <FormControl fullWidth sx={{ m: 5 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">Населенный пункт</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        label="Amount"
                    />
                </FormControl>
            </div>
        </Box>
    );
}