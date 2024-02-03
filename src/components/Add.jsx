import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from "@mui/icons-material";

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})
const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
})

const Add = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" area-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
            <Typography variant="h6" color="gray" textAlign="center">Create Post</Typography>
            <UserBox>
                <Avatar src="https://avatars.githubusercontent.com/u/39523813?v=4" sx={{ width: 30, height: 30 }} />
                <Typography fontWeight={500} variant="span">John Doe</Typography>
            </UserBox>
            <TextField 
             sx={{width: "100%"}}
             id="standard-multiline-static"
             multiline
             rows={3}
             placeholder="What's on your mind?"
             variant="standard"
            />
            <Stack direction="row" gap={1} mt={2} mb={3}>
                <EmojiEmotions  color="primary" />
                <Image color="secondary" />
                <VideoCameraBack color="success" />
                <PersonAdd color="error" />
            </Stack>
            <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                
                <Button>POST</Button>
                <Button><DateRange /></Button>
            </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
