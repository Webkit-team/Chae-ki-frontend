import { Box, Modal } from "@mui/material";

const CustomModal = ({ open, handleClose, sx, children, ...props }) => {

    return (<>

        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box
                sx={{
                    position: "absolute", top: "50%", left: "50%",
                    transform: "translate(-50%, -50%)",
                    // width: 400,
                    // height: 300,
                    // alignItems:"center",
                    overflow: "auto",
                    bgcolor: 'background.paper',
                    border: '3px solid',
                    boxShadow: 24,
                    pt: 4, pb: 4, pl: 4, pr: 4,
                    ...sx
                }}
                {...props}
                >
                {children}
            </Box>

        </Modal>

    </>)
}

export default CustomModal;