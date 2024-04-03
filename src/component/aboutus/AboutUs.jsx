export const AboutUs = () => {

    return (

        <>
            <div className="accordion accordion-flush container mt-5" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" >
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <b>Key Features:</b>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            Developed a dynamic web application using React.js to showcase a curated collection of bikes, featuring a modern and intuitive user interface. Utilized React.js for front-end development, JavaScript (ES6+), HTML5, CSS3 and Bootstrap5 for enhanced interactivity and responsiveness.<br />
                            <ul>
                                <li>Implemented a carousel component for dynamic image display, enhancing visual appeal and user engagement.</li>
                                <li>Integrated real-time filtering functionality to showcase trending bikes based on user preferences.</li>
                                <li>Designed and implemented a search feature allowing users to find bikes by model and brand quickly.</li>
                                <li>Developed a user review system for sharing and displaying reviews, fostering community engagement.</li>
                                <li>Created a contact form with form validation and submission handling to facilitate user inquiries and feedback.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <b> Technologies Used</b>
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" >
                            <ul>
                                <li>React.js</li>
                                <li>JavaScript (ES6+)</li>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>React Router</li>
                                <li>Bootstrap (for styling)</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <b>Accomplishments</b>
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul>
                               <li>Successfully delivered a polished and feature-rich web application within project deadlines.</li>
                               <li>Collaborated effectively with team members to implement complex features and resolve technical challenges.</li>
                               <li>Demonstrated proficiency in React.js development and front-end best practices.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

