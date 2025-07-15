import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const Viewuser = () => {

    const [loader, xloader] = useState(true)

    const [gitData, xgitData] = useState(
        []
    )
    const fetchData = () => {
        axios.get("https://api.github.com/users").then(
            (res) => {
                xloader(false)
                xgitData(res.data)
            }
        ).catch(
            () => {
                alert("Something went wrong")
            }
        )
    }
    useEffect(() => { fetchData() }, [])
    return (
        <div style={{
            backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1701590725721-add548ecdf61?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh'
        }}>
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table className="table table-striped table-hover table-bordered bg-light text-dark shadow rounded-3">
                                    <thead className="table-dark">
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
                                    {loader ? (<div class="d-flex align-items-center">
                                        <strong role="status">Loading...</strong>
                                        <div class="spinner-border ms-auto" aria-hidden="true"></div>
                                    </div>) : (<tbody>
                                        {gitData.map(
                                            (value, index) => {
                                                return (
                                                    <tr>
                                                        <th scope="row">{value.id}</th>
                                                        <td>{value.node_id}</td>
                                                        <td>
                                                            <img src={value.avatar_url} alt="avatar" width="50" className="rounded-circle" />
                                                        </td>
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

                                    </tbody>)}

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