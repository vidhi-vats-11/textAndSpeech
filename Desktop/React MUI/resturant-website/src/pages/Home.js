import React from 'react'
import Layout from '../components/Layout/Layout'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import banner from '../images/banner.jpeg'
import '../styles/HomeStyles.css';

const Home = () => {
  return (
    <Layout>
      <div className="Home" style={{backgroundImage:`url(${banner})`}}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food in India</p>
          <Link to='/menu'>
          <Button>
            ORDER NOW
          </Button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home