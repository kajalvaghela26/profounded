import React from "react";
import { style } from "./MaterialUI";
import {
  Box,
  Typography,
  Modal,
  TextField,
  InputLabel,
  Button,
} from "@mui/material";
import Textarea from "@mui/joy/Textarea";
// import TextField from '@mui/material/TextField';
import "./style.scss";
const From = ({ openFrom, close }) => {
  return (
    <>
      <Modal
        open={openFrom}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h3"
            component="h2"
            className="head-title"
          >
            Ready to unlock the future of education?
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            className="sub-title"
          >
            Connect with us today for a demo!
          </Typography>
          <Typography>
            <InputLabel shrink htmlFor="bootstrap-input" className="label">
              Name:
            </InputLabel>
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="Name"
              size="small"
            />

            <InputLabel shrink htmlFor="bootstrap-input" className="sub-label">
              Email:
            </InputLabel>
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="Email Address"
              size="small"
            />

            <InputLabel shrink htmlFor="bootstrap-input" className="sub-label">
              Comment:
            </InputLabel>
            <Textarea placeholder="Type anything…" minRows={5} size="sm" />
            <Button variant="outlined" className="btn-submit">
              Submit
            </Button>
          </Typography>
          <Typography className="policy">
            Privacy Policy: We hate spam and promise to keep your email address
            safe
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
export default From;
