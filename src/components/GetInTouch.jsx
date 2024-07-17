import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { styled } from '@mui/system';
import { Grid, TextField, Button, Typography } from '@mui/material';
import backgroundImage from '../assets/getintouch.jpg';

const FormContainer = styled('div')({
    backgroundColor: '#E4E2DD',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#E4E2DD',
    padding: '2rem',
    borderRadius: '8px',
    width: '50%',
    height: '80vh',
    margin: '2rem auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    '@media (max-width: 768px)': {
        width: '100%',
        height: 'auto',
    },
});

const GetInTouch = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('Hi Brando Team, I am interested to inquire with you.');

    const sendEmail = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: name,
            from_email: email,
            phone_number: phone,
            message,
        };

        emailjs.send('service_nm1lj7u', 'template_l5d53le', templateParams, 'ht6UUdbmOUT2JmJmC')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Email sent successfully!');
            }, (error) => {
                console.log('FAILED...', error);
                alert('Failed to send email.');
            });

        // Reset form fields after sending email
        setName('');
        setEmail('');
        setPhone('');
        setMessage('Hi Brando Team, I am interested to inquire with you.');
    };

    return (
        <>
        <div className='tag'>
        <FormContainer id="getintouch-section">
            <Typography variant="h2" align="center" gutterBottom>
                Get in Touch
            </Typography>
            <form onSubmit={sendEmail}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Name"
                            variant="filled"
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            InputProps={{ style: { color: '#E4E2DD', backgroundColor: '#333333', borderRadius: '4px' } }}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Email"
                            variant="filled"
                            fullWidth
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            InputProps={{ style: { color: '#E4E2DD', backgroundColor: '#333333', borderRadius: '4px' }}}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Phone Number"
                            variant="filled"
                            fullWidth
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            InputProps={{ style: { color: '#E4E2DD', backgroundColor: '#333333', borderRadius: '4px' }}}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Message"
                            variant="filled"
                            multiline
                            rows={4}
                            fullWidth
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            InputProps={{ style: { color: '#E4E2DD', backgroundColor: '#333333', borderRadius: '4px' } }}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{
                                backgroundColor: '#E4E2DD',
                                color: '#333333',
                                height: '56px',
                                '&:hover': { backgroundColor: '#333333', color: '#ffffff' },
                            }}
                        >
                            Send
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </FormContainer>
        </div>
        </>
    );
};

export default GetInTouch;
