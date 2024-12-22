particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: [
                "#FF1F7D",
                "#00FFC3",
                "#00B8FF",
                "#9D00FF"
            ]
        },
        shape: {
            type: ["polygon"],
            polygon: {
                nb_sides: 4,
                draw: {
                    enable: true,
                    stroke: {
                        width: 1,
                        color: "#ffffff"
                    }
                }
            }
        },
        opacity: {
            value: 0.7,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 5,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 1,
                sync: false
            }
        },
        rotate: {
            value: 45,
            random: true,
            direction: "clockwise",
            animation: {
                enable: true,
                speed: 5,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.2,
            width: 1,
            triangles: {
                enable: true,
                color: "#ffffff",
                opacity: 0.1
            }
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "bounce",
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: ["grab", "bubble"]
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 0.6
                }
            },
            bubble: {
                distance: 200,
                size: 8,
                duration: 2,
                opacity: 0.8,
                speed: 3
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});


const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";

async function getquote(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        quote.innerHTML = data.content;
        author.innerHTML = data.author;
    } catch (error) {
        console.error("Error fetching quote:", error);
        quote.innerHTML = "An error occurred while fetching the quote.";
        author.innerHTML = "Please try again";
    }
}

function tweet() {
    const tweetText = `${quote.innerHTML} ---- by ${author.innerHTML}`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(tweetUrl, "Tweet Window", "width=600, height=300");
}

getquote(api_url);