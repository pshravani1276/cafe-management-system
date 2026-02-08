import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div>
            <div className="conatiner">
                <div className="row">
                    <div className="col-lg-3">
                        {/* <!--Main Navigation--> */}
                        <header>
                            {/* <!-- Sidebar --> */}
                            <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
                                <div class="position-sticky">
                                    <div class="list-group list-group-flush mx-3 mt-4">
                                        <Link to={"/admin"}>
                                            <a
                                                class="list-group-item list-group-item-action py-2 ripple"
                                                aria-current="true"
                                            >
                                                <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span>
                                            </a>
                                        </Link>
                                        <Link to={"/admin/addmenu"}>
                                            <a class="list-group-item list-group-item-action py-2 ripple">
                                                <i class="fas fa-chart-area fa-fw me-3"></i><span>Add Menu</span>
                                            </a>
                                        </Link>
                                        <Link to={"/admin/menu"}>
                                            <a class="list-group-item list-group-item-action py-2 ripple"
                                            ><i class="fas fa-lock fa-fw me-3"></i><span>Menu</span></a
                                            >
                                        </Link>
                                    </div>
                                </div>
                            </nav>
                            {/* <!-- Sidebar --> */}

                        </header>

                        <main style={{ marginTop: "58px" }}>
                            <div class="container pt-4"></div>
                        </main>
                    </div>
                    <div className="col-lg-9">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}
