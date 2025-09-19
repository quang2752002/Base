"use client"

import { useEffect, useState } from "react"
import Footer from "../layout/footer/page";
import TopBar from "../layout/topbar/page";
import Sidebar from "../layout/sidebar/page";
import ScrollTop from "../layout/scroll/page";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/vendor/fontawesome-free/css/all.min.css";
import "@/styles/css/sb-admin-2.min.css";
export default function ArticlePage(){
    const [articles,setArticles]=useState([]);
    
    return(
        <>       
    <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>               
                   


                    <div className="row">

                        <div className="col-md-12">
                            <div className="card shadow mb-4">
                                <div
                                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                                    <div className="dropdown no-arrow">
                                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                            aria-labelledby="dropdownMenuLink">
                                            <div className="dropdown-header">Dropdown Header:</div>
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="chart-area">
                                        <canvas id="myAreaChart"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                    </div>

                   
                </div> 
        </>
    );

}