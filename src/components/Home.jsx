import React from 'react'
import Nav from './Nav'

const Home = () => {
  return (
    <div style={{
        backgroundImage: 'url("https://blog.openreplay.com/images/a-practical-guide-to-github-actions/images/hero.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }}>
        <Nav/>
        <div className="container">
            <div className="row">
                <div className="row justify-content-center">
          <div className="col-12 text-center">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                   

                   <h1>Welcome to GitHuB</h1>
                  <h3>Open source, open minds – feel free to fork, clone, or star the project</h3>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>

  )
}

export default Home