import React from 'react'

export default function About(props) {

    let myStyle = {
        color: props.mode === "dark"?"white":"#0c4379",
        backgroundColor:props.mode === 'dark'?"rgb(36 74 104)":"white"
    }
    return (
        <div className="container" style={{color: props.mode === "dark"?"white":"#0c4379"}}>
            <h1 className="my-3">About Text Utils</h1>
            <p>
            Welcome to Text Utils—your one-stop solution for efficient and intuitive text manipulation! Whether you're a student, a professional, or just someone who loves working with words, Text Utils is here to simplify your tasks and boost your productivity.
            </p>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What Can You Do with Text Utils?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        <strong>Text Formatting:</strong> Change text cases, capitalize, or lowercase your content with a single click.<br/><br/>
                        <strong>Word and Character Count:</strong> Get real-time insights into the length of your content.<br/><br/>
                        <strong>Text Cleaning:</strong> Remove extra spaces, unwanted symbols, or blank lines effortlessly.<br/><br/>
                        <strong>Custom Transformations:</strong> Perform unique text transformations tailored to your needs.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Why Choose Text Utils?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>User-Friendly Interface:</strong> A sleek and modern design that's easy to navigate.<br/><br/>
                            <strong>Fast and Reliable:</strong> Experience instant results with optimized performance.<br/><br/>
                            <strong>Secure and Private:</strong> Your data stays with you—no text is stored or shared.<br/><br/>
                            <strong>Cross-Platform:</strong> Works seamlessly across all devices and browsers.
                        </div>
                    </div>
                </div>
                    <p className="my-5">
                        Text Utils is more than just a tool—it's your ultimate companion for handling text like a pro. Dive in and explore how we can make your life easier!
                    </p>
                </div>
            </div>
    )
}