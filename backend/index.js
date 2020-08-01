const express = require('express');
const csurf = require('csurf');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');


dotenv.config();
const adminRoutes = require('./routes/admin');
const voterRoutes = require('./routes/voter');
const authRoutes = require('./routes/auth');
const genRoutes = require('./routes/general');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/admin/', adminRoutes);
app.use(voterRoutes);
app.use(genRoutes);
app.use(authRoutes);

app.listen(PORT, console.log(`Server running at PORT ${PORT}`));