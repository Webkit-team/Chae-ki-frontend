import { TextField } from "@mui/material"

const CustomTextField = ({ sx, ...props}) => {
    return (
        <TextField
            sx={{
                width: 300,
                "& .MuiInputBase-root": {
                    height: "2.7em"
                },
                "& .MuiInputBase-input": {
                    height: "1em",
                    fontSize: "0.9em"
                },
                "& .MuiFormHelperText-root": {
                    width: 280,
                    marginLeft: "8px",
                    marginRight: "8px",
                    marginBottom: "25px",
                    // fontSize: "0.73em"
                }
                }}

            {...props}
        >
            
        </TextField>
    )
}

export default CustomTextField