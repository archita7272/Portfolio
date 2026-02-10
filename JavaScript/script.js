//  ==========================================
//          JAVASCRIPT
//          ========================================== -->


// ==========================================
        // MOBILE MENU TOGGLE
        // ==========================================
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');
        
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // ==========================================
        // NAVBAR SCROLL BEHAVIOR
        // ==========================================
        const navbar = document.getElementById('navbar');
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            // Add shadow when scrolled
            if (currentScroll > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            // Hide/show navbar on scroll
            if (currentScroll > lastScroll && currentScroll > 500) {
                navbar.classList.add('hidden');
            } else {
                navbar.classList.remove('hidden');
            }
            
            lastScroll = currentScroll;
        });
        
        // ==========================================
        // ACTIVE NAVIGATION LINK
        // ==========================================
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').slice(1) === current) {
                    link.classList.add('active');
                }
            });
        });
        
        // ==========================================
        // SCROLL REVEAL ANIMATIONS
        // ==========================================
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        // Observe all elements with fade-in class
        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
        
        // ==========================================
        // SCROLL TO TOP BUTTON
        // ==========================================
        const scrollTopBtn = document.getElementById('scrollTop');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 500) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });
        
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // ==========================================
        // CONTACT FORM SUBMISSION
        // ==========================================
        // const contactForm = document.getElementById('contactForm');
        // const formMessage = document.getElementById('formMessage');
        
        // contactForm.addEventListener('submit', async (e) => {
        //     e.preventDefault();
            
        //     // Get form data
        //     const formData = new FormData(contactForm);
        //     const data = Object.fromEntries(formData);
            
        //     // Here you would typically send the data to a server
        //     // For demonstration, we'll simulate a successful submission
            
        //     try {
        //         // Simulate API call
        //         await new Promise(resolve => setTimeout(resolve, 1000));
                
        //         // Show success message
        //         formMessage.textContent = 'Thank you for your message! I\'ll get back to you soon.';
        //         formMessage.className = 'form-message success';
                
        //         // Reset form
        //         contactForm.reset();
                
        //         // Hide message after 5 seconds
        //         setTimeout(() => {
        //             formMessage.style.display = 'none';
        //         }, 5000);
                
        //     } catch (error) {
        //         // Show error message
        //         formMessage.textContent = 'Oops! Something went wrong. Please try again.';
        //         formMessage.className = 'form-message error';
        //     }
            
        //     // Note: To actually send emails, you'll need to:
        //     // 1. Set up a backend API endpoint (Node.js, PHP, etc.)
        //     // 2. Use a service like SendGrid, Mailgun, or EmailJS
        //     // 3. Replace the simulated API call above with actual fetch() request
        //     // Example:
        //     /*
        //     try {
        //         const response = await fetch('YOUR_API_ENDPOINT', {
        //             method: 'POST',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //             body: JSON.stringify(data)
        //         });
                
        //         if (response.ok) {
        //             // Success handling
        //         } else {
        //             // Error handling
        //         }
        //     } catch (error) {
        //         // Error handling
        //     }
        //     */
        // });
        
        // ==========================================
        // SMOOTH SCROLLING FOR ANCHOR LINKS
        // ==========================================
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth',
                    });
                }
            });
        });
        
        // ==========================================
        // CHATBOT INTEGRATION HELPER
        // ==========================================
        // This function is ready for easy chatbot integration
        // Simply uncomment and add your chatbot script/widget
        
        /*
        function initializeChatbot() {
            // Example: Load chatbot script
            const chatbotScript = document.createElement('script');
            chatbotScript.src = 'YOUR_CHATBOT_SCRIPT_URL';
            chatbotScript.async = true;
            document.body.appendChild(chatbotScript);
            
            // Or inject chatbot HTML directly
            const chatbotContainer = document.getElementById('chatbot-container');
            chatbotContainer.innerHTML = '';

        }
        
        // Initialize chatbot when page loads
        window.addEventListener('load', initializeChatbot);
        */