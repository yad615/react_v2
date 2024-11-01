import { useState } from 'react';
import viteLogo from '/vite.svg'; 

import React from 'react';

function Contact() {
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card border-0 shadow-lg rounded-4">
                        <div className="card-body p-5">
                            <h2 className="display-6 text-primary fw-bold text-center mb-4">Contacto</h2>
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="bg-primary bg-opacity-10 p-3 rounded-3 me-3">
                                            <i className="bi bi-envelope text-primary fs-4"></i>
                                        </div>
                                        <div>
                                            <h5 className="fw-bold mb-1">Email</h5>
                                            <a href="mailto:tucorreo@ejemplo.com" className="text-decoration-none text-muted">
                                                yadhira.alcantara@tecsup.edu.pe
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="bg-primary bg-opacity-10 p-3 rounded-3 me-3">
                                            <i className="bi bi-github text-primary fs-4"></i>
                                        </div>
                                        <div>
                                            <h5 className="fw-bold mb-1">GitHub</h5>
                                            <a 
                                                href="https://github.com/yad615" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-decoration-none text-muted">
                                                yad615
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="bg-primary bg-opacity-10 p-3 rounded-3 me-3">
                                            <i className="bi bi-geo-alt text-primary fs-4"></i>
                                        </div>
                                        <div>
                                            <h5 className="fw-bold mb-1">Tecsup</h5>
                                            <span className="text-muted">Lima, Perú</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
