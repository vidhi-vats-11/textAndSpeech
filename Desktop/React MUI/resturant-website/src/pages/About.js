import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my:15,
          textAlign:"center",
          p:2,
          "& h4":{
            fontWeight:'bold',
            my:2,
            fontSize:'2rem',
          },
          "& p":{
            textAlign:"justify",
          },
          "@media (max-width:600px)":{
            mt:0,
            "& h4":{
              fontSize:'1.5rem',
            }
          }
        }}
      >
        <Typography variant='h4'>Welcome To My Resturant</Typography>
      </Box>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, voluptatem nihil quod debitis maxime sed tempora iusto fugiat quos error placeat repudiandae numquam laborum ipsa illum inventore molestias totam sit libero tenetur et. Nam pariatur cupiditate molestias omnis quas adipisci quis porro repellendus, blanditiis vero, quos reiciendis maiores dolorem fugit, expedita unde ipsam obcaecati impedit saepe beatae esse ex vitae nemo? Maxime ex porro atque possimus hic accusamus sint reprehenderit vero dolores enim recusandae distinctio alias corporis, cum suscipit et ratione architecto, rerum ut. Quia nesciunt enim quasi ipsum vitae deserunt corporis, perspiciatis aliquid aut doloremque iste autem, unde magnam.
      </p>
      <br/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis aspernatur et iusto voluptatem nesciunt perferendis, vel magni doloribus dolore voluptate porro. Possimus accusamus nemo dolor, sequi asperiores ducimus eius culpa beatae distinctio laborum! Eaque a exercitationem ea facilis, molestias, accusamus animi fuga ex ipsam rem saepe perferendis quidem temporibus repudiandae! Veritatis, sed at, a officiis, molestiae enim nesciunt culpa id alias rem odio sapiente ducimus pariatur quam facere aut optio in deserunt eos sunt quae? Deleniti nulla molestias magnam eaque mollitia sint iure quidem perferendis aspernatur, molestiae, sunt ducimus. Placeat nobis ex voluptatum nostrum dignissimos aut dolorem incidunt recusandae perspiciatis.
      </p>
    </Layout>
  )
}

export default About