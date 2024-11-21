import React, { useState } from 'react';
import "./projects.css";

const Projects = () => {
        const [toggleState, setToggleState] =  useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="projects section" id="projects">
            <h2 className="section__title">Project Highlights</h2>
            <span className="section__subtitle">My Hands-on Experience</span>

            <div className="projects__container container grid">
                <div className="projects__content img__container project1">
                    <div>
                        <i className="uil uil-brackets-curly projects__icon"></i>
                        <h3 className="projects__title">GenZ Hiring</h3>
                    </div>
                    <span className="projects__button" onClick={() => toggleTab(1)}>View More
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                    <div className={toggleState===1 ? "projects__modal active-modal": "projects__modal"}>
                        <div className="projects__modal-content img__container project1">
                            <i onClick={()=>toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                            <h3 className="projects__modal-title">GenZ Hiring</h3>
                            <p className="projects__modal-description">Developed an AI-powered resume analysis tool for personalized job suggestions, tailored resumes, and optimized career alignment for users.</p>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">                    
                                    <i class="uil uil-check-circle projects__modal-icon">
                                    </i>
                                    <p className="projects__modal-info">Built a resume analysis tool using LLM, LangChain, and ChatGPT 3.5, offering tailored suggestions aligned with career goals.
                                    </p>
                                </li>

                                <li className="projects__modal-project">                    
                                    <i class="uil uil-check-circle projects__modal-icon">
                                    </i>
                                    <p className="projects__modal-info">Leveraged SerpAPI and web scraping to deliver personalized job suggestions, reducing job search time by 50%.
                                    </p>
                                </li>

                                <li className="projects__modal-project">                    
                                    <i class="uil uil-check-circle projects__modal-icon">
                                    </i>
                                    <p className="projects__modal-info">Created customized resumes optimized for specific job applications, boosting success rates for users.
                                    </p>
                                </li>

                                <li className="projects__modal-project">                    
                                    <i class="uil uil-check-circle projects__modal-icon">
                                    </i>
                                    <p className="projects__modal-info">Designed for students, professionals, and job seekers, providing an efficient way to enhance career opportunities.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="projects__content img__container project2">
                    <div>
                        <i className="uil uil-code-branch projects__icon"></i>
                        <h3 className="projects__title">Intrusion Prediction</h3>
                    </div>
                    <span className="projects__button" onClick={() => toggleTab(2)}>View More
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                    <div className={toggleState===2 ? "projects__modal active-modal": "projects__modal"}>
                        <div className="projects__modal-content  img__container project2">
                            <i onClick={()=>toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                            <h3 className="projects__modal-title">Intrusion Detection Prediction</h3>
                            <p className="projects__modal-description">Developed an intrusion detection system using machine learning, achieving 94% accuracy in detecting cyber attacks through advanced preprocessing and model optimization.
                            </p>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">                    
                                    <i class="uil uil-check-circle projects__modal-icon">
                                    </i>
                                    <p className="projects__modal-info">Developed a cybersecurity solution using machine learning to predict cyber attacks based on network packet data.
                                    </p>
                                </li>

                                <li className="projects__modal-project">                    
                                    <i class="uil uil-check-circle projects__modal-icon">
                                    </i>
                                    <p className="projects__modal-info">Applied preprocessing techniques (EDA, cleaning, sampling, scaling, and visualization) to prepare the dataset, reducing data redundancy by 39%.
                                    </p>
                                </li>

                                <li className="projects__modal-project">                    
                                    <i class="uil uil-check-circle projects__modal-icon">
                                    </i>
                                    <p className="projects__modal-info">Used Naive Bayes, Random Forest, and hyperparameter-tuned XGBoost models, achieving an average accuracy of 94%.
                                    </p>
                                </li>

                                <li className="projects__modal-project">                    
                                    <i class="uil uil-check-circle projects__modal-icon">
                                    </i>
                                    <p className="projects__modal-info">Conducted hyperparameter tuning and cross-validation to enhance model performance, with XGBoost outperforming other classifiers.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="projects__content img__container project3">
                    <div>
                        <i className="uil uil-arrow projects__icon"></i>
                        <h3 className="projects__title">Protection Online</h3>
                    </div>
                    <span className="projects__button" onClick={() => toggleTab(3)}>View More
                        <i className="uil uil-arrow-right projects__button-icon"></i>
                    </span>

                    <div className={toggleState===3 ? "projects__modal active-modal": "projects__modal"}>
                        <div className="projects__modal-content  img__container project3">
                            <i onClick={()=>toggleTab(0)} className="uil uil-times projects__modal-close"></i>

                            <h3 className="projects__modal-title">Protection Online</h3>
                            <p className="projects__modal-description">Developed a secure Chrome extension using AI to summarize e-commerce privacy policies, detect malicious websites, and ensure regulatory compliance.</p>

                            <ul className="projects__modal-projects grid">
                                <li className="projects__modal-project">                    
                                    <i class="uil uil-check-circle projects__modal-icon">
                                    </i>
                                    <p className="projects__modal-info">Utilized Mistral 7B (2-bit quantized LLM) for summarizing privacy policies, regional language translation, and regulatory checks (DPDPA 2023, IT Act 2000).
                                    </p>
                                </li>

                                <li className="projects__modal-project">                    
                                    <i class="uil uil-check-circle projects__modal-icon">
                                    </i>
                                    <p className="projects__modal-info">Achieved 93% reduction in privacy policy reading time with Generative AI techniques and intuitive user design.
                                    </p>
                                </li>

                                <li className="projects__modal-project">                    
                                    <i class="uil uil-check-circle projects__modal-icon">
                                    </i>
                                    <p className="projects__modal-info">Employed a four-layered security framework with SSL certification, Google Safe Browsing, crowd sourcing, and obfuscated JavaScript handling.
                                    </p>
                                </li>

                                <li className="projects__modal-project">                    
                                    <i class="uil uil-check-circle projects__modal-icon">
                                    </i>
                                    <p className="projects__modal-info">Trained an RNN model on the Mendeley dataset for malicious website detection, achieving 89%+ accuracy.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            
            </div>
        </section>
    )
}

export default Projects