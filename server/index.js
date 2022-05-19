const express = require('express');
const path = require('path')

const userRoute = require('./routes/users')

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
  res.json({status:'API is running'})
})

app.use('/api', userRoute)

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
