import "./ContactSection.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, TextField } from "@mui/material";
import contact from "../../assets/contact.png";
import party from "../../assets/party.png";

const style = {
  position: "absolute",
  top: "10%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  backgroundColor: "#f5fcff",
  border: "none",
  borderRadius: "4px",
  borderBottom: "4px solid #226ebd",
  boxShadow: 24,
  p: 4,
};

function ContactSection() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const form = useRef();

  const onSubmit = (data) => {
    console.log(data);

    const templateParams = {
      name: data.name, // Sender's name
      email: data.email, // Recipient's email address
      message: data.message, // Message content
    };

    emailjs
      .send(
        "service_zxd3jl4", // Replace with your EmailJS service ID
        "template_7bi4izv", // Replace with your EmailJS template ID
        templateParams, // Pass the dynamic data here
        "5-g8v-qALB5fFWRu_" // Replace with your EmailJS public key
      )
      .then((result) => {
        console.log(result.text);
        setOpen(true);
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="home-parent-container">
      <div className="home-sub-container">
        <div className="contact-container" id="contact">
          <div className="contact-section">
            <div className="contact-title">
              <h6>Get in Touch</h6>
              <h3>Contact Me</h3>
            </div>
            <div className="form-div">
              <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                <label className="mb-2">Enter Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control info-field"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-danger">This field is required</span>
                )}
                <br />

                <label className="mb-2 mt-3">Enter Recipient Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control info-field"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-danger mt-1 mb-2">
                    This field is required
                  </span>
                )}
                <br />
                <label className="mb-2 mt-3">Message</label>
                <br />
                <TextField
                  name="message"
                  sx={{ width: "100%", marginBottom: "30px" }}
                  id="outlined-multiline-static"
                  placeholder="Type your message..."
                  multiline
                  rows={4}
                  className="textarea-width"
                />
                <br />
                <div className="submit-btn">
                  <Button variant="contained" type="submit">
                    <span>Submit</span>
                  </Button>
                </div>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style} className="submit-box">
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      Successfully sent
                      <img src={party} alt="party" className="ms-2" />
                    </Typography>
                  </Box>
                </Modal>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
