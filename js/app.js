// Init Variables
const jokeElement = document.querySelector('.content__box-joke'),
      jokeBtn     = document.querySelector('.content__box-btn');




// Generate jokes function
const  generateJokes = async function() {
    const config  = {
        headers: {
            'Accept' : 'application/json'
        }
    }

    const res = await fetch('https://icanhazdadjoke.com', config)
    
    const data = await res.json();

    jokeElement.innerHTML = data.joke;

}


// Event listeners
jokeBtn.addEventListener('click', generateJokes);




// screen mousemove animation
document.addEventListener('mousemove',parallax);
    function parallax(e){   
        this.querySelectorAll('.cross').forEach(layer => {
            const speed = layer.getAttribute('data-speed')

            const x = (window.innerWidth - e.pageX*speed)/100
            const y = (window.innerHeight - e.pageY*speed)/100

            layer.style.transform = `translateX(${x}px) translateY(${y}px)`
        })
    }