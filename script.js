<script>
    // 1. SUPABASE CONNECTION
    const SUPABASE_URL = 'https://xagvaournxmpybwlhswl.supabase.co';
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhZ3Zhb3VybnhtcHlid2xoc3dsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzODU4NjYsImV4cCI6MjA4NTk2MTg2Nn0.SAWYxtvQlA6YuCZ3zKMFarlLkoh79WXU__51WrM_gxE';
    
    // Correctly using the variables defined above
    const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    // 2. FORM SUBMISSION LOGIC
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Loading State
            const originalText = submitBtn.innerText;
            submitBtn.innerText = 'Sending...';
            submitBtn.disabled = true;

            // Get Form Data
            const formData = new FormData(contactForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message')
            };

            // 3. SEND TO SUPABASE
            const { error } = await _supabase
                .from('contact_submissions') 
                .insert([data]);

            if (error) {
                console.error('Supabase Error:', error);
                alert('Error: ' + error.message);
            } else {
                alert('Success! Your message was sent.');
                contactForm.reset();
            }

            // Reset Button
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
        });
    }

   // Optimized Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
    hamburger.addEventListener('click', (e) => {
        // Prevent any other scripts from stopping this click
        e.stopPropagation(); 
        
        console.log("Hamburger clicked!"); // Check your F12 console for this!
        
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close menu if clicking anywhere else on the screen
document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

</script>