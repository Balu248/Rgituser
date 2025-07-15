import React, { useState } from 'react'
import Nav from './Nav'

const Adduser = () => {
    const [input, xinput] = useState(
        { id: "", nodeid: "", avatarurl: "", url: "", hurl: "", follower: "", following: "", gisturl: "", suburl: "", orgurl: "", reposurl: "", eventurl: "", type: "", usertype: "" }
    )
    const inputhandler = (event) => {
        xinput({ ...input, [event.target.name]: event.target.value })
    }
    const readvalues = () => {
        console.log(input)
    }
    return (
        <div style={{
        backgroundImage: 'url("https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?cs=srgb&dl=pexels-jplenio-1103970.jpg&fm=jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }}>
            <Nav/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">ID</label>
                                <input type="number" className="form-control" name='id' value={input.id} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Node ID</label>
                                <input type="number" className="form-control" name='nodeid' value={input.nodeid} onChange={inputhandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-control">Avatar Url</label>
                                <input type="url" name='avatarurl' id="" className="form-control"  value={input.avatarurl} onChange={inputhandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-control">Url</label>
                                <input type="url" name='url' id="" className="form-control"  value={input.url} onChange={inputhandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-control">html Url</label>
                                <input type="url" name="hurl" id="" className="form-control"  value={input.hurl} onChange={inputhandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-control">Followers Url</label>
                                <input type="url" name="follower" id="" className="form-control"  value={input.follower} onChange={inputhandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-control">Following Url</label>
                                <input type="url" name="following" id="" className="form-control"  value={input.following} onChange={inputhandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-control">Gists Url</label>
                                <input type="url" name="gisturl" id="" className="form-control" value={input.gisturl} onChange={inputhandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-control">Subscriptions Url</label>
                                <input type="url" name="suburl" id="" className="form-control"  value={input.suburl} onChange={inputhandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-control">Organization Url</label>
                                <input type="url" name="orgurl" id="" className="form-control" value={input.orgurl} onChange={inputhandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-control">Repository Url</label>
                                <input type="url" name="reposurl" id="" className="form-control"  value={input.reposurl} onChange={inputhandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-control">Events Url</label>
                                <input type="url" name="eventurl" id="" className="form-control"  value={input.eventurl} onChange={inputhandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-contol">Type</label>
                                <select name="type" id="" className="form-control" value={input.type} onChange={inputhandler}>
                                    <option className="option"></option>
                                    <option className="option">User</option>
                                    <option className="option">Organization</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                 <label htmlFor="" className="form-contol">User Type</label>
                                <select name="usertype" id="" className="form-control" value={input.usertype} onChange={inputhandler}>
                                    <option className="option"></option>
                                    <option className="option">Private</option>
                                    <option className="option">Public</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readvalues}>SUBMIT</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adduser