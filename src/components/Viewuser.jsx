import React, { useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const Viewuser = () => {
    const [gitData, xgitData] = useState(
        []
    )
    const fetchData=()=>{
        axios.get().then().catch()
    }
    return (
        <div className='bg-primary-subtle p-4 rounded'>
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Node id</th>
                                            <th scope="col">Avatar url</th>
                                            <th scope="col">Url</th>
                                            <th scope="col">Html Url</th>
                                            <th scope="col">Follower Url</th>
                                            <th scope="col">Following Url</th>
                                            <th scope="col">Gists Url</th>
                                            <th scope="col">Subscription Url</th>
                                            <th scope="col">Organization Url</th>
                                            <th scope="col">Repository Url</th>
                                            <th scope="col">Event Url</th>
                                            <th scope="col">Type</th>
                                            <th scope="col">User Type</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {gitData.map(
                                            (value, index) => {
                                                return (
                                                    <tr>
                                                        <th scope="row">{value.id}</th>
                                                        <td>{value.node_id}</td>
                                                        <td>{value.avatar_url}</td>
                                                        <td>{value.url}</td>
                                                        <td>{value.html_url}</td>
                                                        <td>{value.followers_url}</td>
                                                        <td>{value.following_url}</td>
                                                        <td>{value.gists_url}</td>
                                                        <td>{value.subscriptions_url}</td>
                                                        <td>{value.organizations_url}</td>
                                                        <td>{value.repos_url}</td>
                                                        <td>{value.events_url}</td>
                                                        <td>{value.type}</td>
                                                        <td>{value.user_view_type}</td>


                                                    </tr>
                                                )

                                            }
                                        )}

                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewuser