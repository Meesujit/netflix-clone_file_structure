// Asynchronous function to load components with error handling
async function loadComponent(id, url) {
    try {
        const response = await fetch(url);
        if (!response) {
            throw new Error(`Failed to load ${url}`);
        }
        const data = await response.text(); // Get the text from the response
        document.getElementById(id).innerHTML = data;
        console.log(data);
    } catch (error) {
        console.error(`Error loading component with id "${id}":`, error);
    }
}

// -> Adding the Sections
loadComponent('hero_section','./sections/HeroSection/HeroSection.html');
// -> Adding the navbar Components
loadComponent('navbar','./components/Navbar/Navbar.html');
loadComponent('signup','./components/Button/SignUp/SignUpButton.html');
loadComponent('dropdown','./components/Button/DropDownButton/DropDownButton.html');

// -> Adding the Hero Section
loadComponent('hero', './components/Hero/Hero.html')
loadComponent('primaryContent', './components/Hero/HeroContentComponent/HeroContent.html');
loadComponent('secondaryContent','./components/Hero/HeroInputComponent/HeroInput.html');
loadComponent('emailInput', './components/Button/EmailButton/EmailButton.html');




loadComponent('service_section','./sections/ServiceSection/ServiceSection.html');
loadComponent('trending', './components/Trending/Trending.html');
loadComponent('trendingHeader','./components/Trending/TrendingHeader/TrendingHeader.html');
loadComponent('carousel', './components/Trending/carousel/carousel.html');
loadComponent('service-card', './components/Trending/service-card/serviceCard.html');
loadComponent('faq','./components/Trending/faq/faq.html')
loadComponent('email','./components/Trending/Email/Email.html')
loadComponent('emailInput', './components/Button/EmailButton/EmailButton.html');



loadComponent('footer_section', './sections/FooterSection/FooterSection.html')
loadComponent('footer', './components/footer/footer.html');