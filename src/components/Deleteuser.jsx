import React, { useState } from 'react'
import Nav from './Nav'

const Deleteuser = () => {
    const[input,xinput]=useState(
            {id:""}
        )
        const inputhandler=(event)=>{
            xinput({...input,[event.target.name]:event.target.value})
        }
        const readvalues=()=>{
            console.log(input)
        }
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
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">GitUser ID</label>
                            <input type="text" className="form-control" name='id' value={input.id} onChange={inputhandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readvalues}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Deleteuser