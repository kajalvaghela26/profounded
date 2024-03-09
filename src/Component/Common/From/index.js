import React from "react";
import {
  Box,
  Typography,
  Modal,
  TextField,
  InputLabel,
  Button,
} from "@mui/material";
// import {useStyles} from './MaterialUI'
import Textarea from "@mui/joy/Textarea";
// import TextField from '@mui/material/TextField';
import "./style.scss";
import { style } from "./MaterialUI";
const From = ({ openFrom, close }) => {
  return (
    <>
      <Modal
        open={openFrom}
        // onClose={close}
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
            Connect with us today for a product demo!
          </Typography>
          <Typography>
            <InputLabel shrink htmlFor="bootstrap-input" className="label">
              Name<span style={{ color: "red" }}>*</span>:
            </InputLabel>
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="Name"
              size="small"
              required
            />

            <InputLabel shrink htmlFor="bootstrap-input" className="sub-label">
              Email<span style={{ color: "red" }}>*</span>:
            </InputLabel>
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="Email Address"
              size="small"
              required
            />

            <InputLabel shrink htmlFor="bootstrap-input" className="sub-label">
             Phone Number:
            </InputLabel>
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="Phone Number"
              size="small"
            />
            <InputLabel shrink htmlFor="bootstrap-input" className="sub-label">
              Comment:
            </InputLabel>
            <Textarea placeholder="Type anything…" minRows={5} size="sm" />
            <div className="btn-header">
              <div className="btn-header-submit">
                <Button variant="outlined" className="btn-submit">
                  Submit
                </Button>
              </div>
              <div className="btn-header-submit">
                <Button variant="outlined" className="btn-submit" onClick={close}>
                  Cancle
                </Button>
              </div>
            </div>
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
