export default function Footer() {
    const socialLinks = [
        { icon: "fa-facebook-f", url: "#" },
        { icon: "fa-twitter", url: "#" },
        { icon: "fa-instagram", url: "#" },
        { icon: "fa-linkedin", url: "#" },
    ];

    const footerLinks = [
        ["About us", "Services", "Blog", "Contact us"],
        ["Support", "Knowledge base", "Live chat"],
        ["Jobs", "Our team", "Leadership", "Privacy Policy"],
        ["Nordic Chair", "Kruzo Aero", "Ergonomic Chair"],
    ];

    return (
        <footer className="footer-section">
            <div className="container relative">
                <div className="sofa-img">
                    <img src="/sofa.png" alt="Sofa" className="img-fluid" />
                </div>

                <div className="row">
                    <div className="col-lg-8">
                        <div className="subscription-form">
                            <h3 className="d-flex align-items-center">
                                <span className="me-1">
                                    <img src="/envelope-outline.svg" alt="Envelope" className="img-fluid" />
                                </span>
                                <span>Subscribe to Newsletter</span>
                            </h3>
                            <form action="#" className="row g-3">
                                <div className="col-auto">
                                    <input type="text" className="form-control" placeholder="Enter your name" />
                                </div>
                                <div className="col-auto">
                                    <input type="email" className="form-control" placeholder="Enter your email" />
                                </div>
                                <div className="col-auto">
                                    <button className="btn btn-primary">
                                        <span className="fa fa-paper-plane"></span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="row g-5 mb-5">
                    <div className="col-lg-4">
                        <div className="mb-4 footer-logo-wrap">
                            <a href="#" className="footer-logo">Furni<span>.</span></a>
                        </div>
                        <p className="mb-4">
                            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant.
                        </p>
                        <ul className="list-unstyled custom-social">
                            {socialLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.url}>
                                        <span className={`fa fa-brands ${link.icon}`}></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-lg-8">
                        <div className="row links-wrap">
                            {footerLinks.map((group, index) => (
                                <div className="col-6 col-sm-6 col-md-3" key={index}>
                                    <ul className="list-unstyled">
                                        {group.map((item, itemIndex) => (
                                            <li key={itemIndex}>
                                                <a href="#">{item}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-top copyright">
                    <div className="row pt-4">
                        <div className="col-lg-6">
                            <p className="mb-2 text-lg-start">
                                Copyright 2024. All Rights Reserved. Designed with love by <a href="https://untree.co">Untree.co</a> Distributed By <a href="https://themewagon.com">ThemeWagon</a>
                            </p>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-end">
                            <ul className="list-unstyled d-inline-flex ms-auto">
                                <li className="me-4"><a href="#">Terms &amp; Conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
