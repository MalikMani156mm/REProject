// ReviewsCarousel.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
    {
        name: "Inam Khan",
        date: "13-03-2025",
        rating: 5,
        review: "Their professional team makes real estate dealings easier and more transparent for everyone involved.",
    },
    {
        name: "Hira Waraich",
        date: "26-02-2025",
        rating: 4,
        review: "Outstanding service and dedication towards clients. One of the most trusted names in Islamabad’s market.",
    },
    {
        name: "Adnan Ali",
        date: "14-04-2025",
        rating: 5,
        review: "Highly recommended for investors looking for genuine advice and secure investment opportunities in property.",
    },
    {
        name: "Shaista Naz",
        date: "23-02-2025",
        rating: 5,
        review: "They go above and beyond in helping clients. A reliable and experienced real estate marketing company indeed.",
    },
    {
        name: "Iqbal Malik",
        date: "25-02-2025",
        rating: 5,
        review: "Great customer service with detailed guidance. Truly one of the leading real estate firms in the region.",
    },
    {
        name: "Salman Anees",
        date: "15-02-2025",
        rating: 5,
        review: "I found their consultants very helpful and informed. A well-organized team with deep industry knowledge.",
    },
];

export default function ReviewsCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 992, // tablets
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768, // mobile
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4 fw-bold text-primary-emphasis" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', lineHeight: '1.3em', color: '#202f7c' }}>
                Hear It From Our Valuable Customers
            </h2>
            <Slider {...settings}>
                {reviews.map((rev, i) => (
                    <div key={i} className="px-3">
                        <div className="card shadow-sm p-3 mb-4">
                            <div className="d-flex justify-content-center  align-items-center mb-2">
                                <span className="text-warning me-2">
                                    {"★".repeat(rev.rating)}
                                </span>
                            </div>
                            <p className="mb-3">{rev.review}</p>
                            <div className="d-flex justify-content-center align-items-center">
                                <div>
                                    <strong>{rev.name}</strong>
                                    <br />
                                    <small className="text-muted">{rev.date}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
