import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg bg-dark">
                    <div class="container">
                        <a class="navbar-brand" href="#">   <img width="40%" src="https://encased-locations.000webhostapp.com/photo/logo.svg" class="d-inline-block align-top" alt="" /></a>
                        <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="fa fa-bars w3-text-white"></i>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarText">
                            <ul class="navbar-nav " style={{ marginLeft: "auto" }}>
                                <li class="nav-item">
                                    <a class="nav-link w3-text-white" href="#">
                                        kard
                </a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link w3-text-white" href="#">
                                        kardless
                </a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link w3-text-white" href="#">
                                        security
                </a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link w3-text-white" href="#">
                                        rewards
                </a>
                                </li>
                                <li class="nav-item ">
                                    <span class="small btn btn-light" href="#">
                                        get the app
                  </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
