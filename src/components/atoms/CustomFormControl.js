import { FormControl } from "@mui/material";

const CustomFormControl = ({sx, ...props}) => {

    return (<>
    
    <FormControl
        sx={{
            width: "20%",
            height: "100px",
            pt: "20px",
            "& .MuiInputBase-root": {
                height: "2.5em"
            },
            "& .MuiInputBase-input": {
                height: "0.9em",
                fontSize: "0.9em"
            },
            
        }}
        {...props}
    >


    </FormControl>
    
    </>)
}

export default CustomFormControl;