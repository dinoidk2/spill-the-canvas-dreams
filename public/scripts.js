
document.addEventListener("DOMContentLoaded", function() {
  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('visible');
    });
  }
  
  // Copy to Clipboard functionality
  const copyButtons = document.querySelectorAll('.copy-btn');
  const copyToast = document.getElementById('copyToast');
  
  if (copyButtons.length > 0) {
    copyButtons.forEach(button => {
      button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-copy');
        const textToCopy = document.getElementById(targetId).textContent;
        
        navigator.clipboard.writeText(textToCopy).then(() => {
          // Show toast notification
          if (copyToast) {
            copyToast.classList.add('visible');
            
            setTimeout(() => {
              copyToast.classList.remove('visible');
            }, 2000);
          }
        }).catch(err => {
          console.error('Failed to copy text: ', err);
        });
      });
    });
  }
  
  // Gallery Filter (for Hobbies page)
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  if (filterButtons.length > 0 && galleryItems.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        const filter = this.getAttribute('data-filter');
        
        // Show/hide gallery items based on filter
        galleryItems.forEach(item => {
          if (filter === 'all' || item.getAttribute('data-category') === filter) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }
  
  // Hobby Modal (for Hobbies page)
  const hobbyModal = document.getElementById('hobbyModal');
  const hobbyItems = document.querySelectorAll('.gallery-item');
  const modalTitle = document.getElementById('modalTitle');
  const modalImage = document.getElementById('modalImage');
  const modalDescription = document.getElementById('modalDescription');
  
  if (hobbyModal && hobbyItems.length > 0) {
    // Data for hobbies
    const hobbiesData = [
      {
        name: 'Drawing',
        description: 'Creating artwork with pencils, charcoal, and digital tools. Drawing allows me to express my thoughts and emotions in visual form, capturing moments and ideas with simple lines and shapes.',
        image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop'
      },
      {
        name: 'Painting',
        description: 'I dabble in gouache, watercolor, and digital painting. Each medium offers its own unique qualities that allow me to explore color, texture, and emotion in different ways.',
        image: 'https://images.unsplash.com/photo-1541753866388-0b3c701627d3?w=800&auto=format&fit=crop'
      },
      {
        name: 'Reading',
        description: 'Reading transports me to different worlds and perspectives. I enjoy diving into stories that challenge my thinking and expand my understanding of human experience and emotion.',
        image: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=800&auto=format&fit=crop'
      },
      {
        name: 'Watching',
        description: 'I love immersing myself in animated series and shows that combine beautiful visuals with compelling storytelling. These media inspire my own artistic journey and creative thinking.',
        image: 'https://images.unsplash.com/photo-1578022761797-b8636ac1773c?w=800&auto=format&fit=crop'
      }
    ];
    
    hobbyItems.forEach((item, index) => {
      item.addEventListener('click', function() {
        if (modalTitle && modalImage && modalDescription && index < hobbiesData.length) {
          const hobbyData = hobbiesData[index];
          
          modalTitle.textContent = hobbyData.name;
          modalImage.src = hobbyData.image;
          modalImage.alt = hobbyData.name;
          modalDescription.textContent = hobbyData.description;
          
          hobbyModal.classList.add('visible');
        }
      });
    });
    
    // Close modal
    const closeButton = hobbyModal?.querySelector('.modal-close');
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        hobbyModal.classList.remove('visible');
      });
    }
    
    // Close modal when clicking outside content
    hobbyModal?.addEventListener('click', (e) => {
      if (e.target === hobbyModal) {
        hobbyModal.classList.remove('visible');
      }
    });
  }
  
  // Gallery Modal (for Gallery page)
  const artworkModal = document.getElementById('artworkModal');
  const artworkItems = document.querySelectorAll('.gallery-page .gallery-item');
  const artModalTitle = document.getElementById('artModalTitle');
  const artModalImage = document.getElementById('artModalImage');
  const artModalTechnique = document.getElementById('artModalTechnique');
  const artModalYear = document.getElementById('artModalYear');
  
  if (artworkModal && artworkItems.length > 0) {
    // Data for artworks
    const artworksData = [
      {
        title: 'Impressionist Sunset',
        image: 'https://images.unsplash.com/photo-1579541591969-96baa433f545?w=800&auto=format&fit=crop',
        technique: 'Digital Painting',
        year: '2023'
      },
      {
        title: 'Abstract Emotions',
        image: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=800&auto=format&fit=crop',
        technique: 'Mixed Media',
        year: '2024'
      },
      {
        title: 'Nature\'s Whisper',
        image: 'https://images.unsplash.com/photo-1552160793-cbae0e200ce9?w=800&auto=format&fit=crop',
        technique: 'Watercolor',
        year: '2022'
      },
      {
        title: 'Vibrant Dreams',
        image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&auto=format&fit=crop',
        technique: 'Acrylic on Canvas',
        year: '2023'
      },
      {
        title: 'Urban Symphony',
        image: 'https://images.unsplash.com/photo-1574610664346-311a39e1a179?w=800&auto=format&fit=crop',
        technique: 'Digital Art',
        year: '2024'
      },
      {
        title: 'Peaceful Solitude',
        image: 'https://images.unsplash.com/photo-1598839949930-48e9e039f8eb?w=800&auto=format&fit=crop',
        technique: 'Oil on Canvas',
        year: '2022'
      }
    ];
    
    artworkItems.forEach((item, index) => {
      item.addEventListener('click', function() {
        if (artModalTitle && artModalImage && artModalTechnique && artModalYear && index < artworksData.length) {
          const artworkData = artworksData[index];
          
          artModalTitle.textContent = artworkData.title;
          artModalImage.src = artworkData.image;
          artModalImage.alt = artworkData.title;
          artModalTechnique.textContent = artworkData.technique;
          artModalYear.textContent = artworkData.year;
          
          artworkModal.classList.add('visible');
        }
      });
    });
    
    // Close modal
    const closeButton = artworkModal.querySelector('.modal-close');
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        artworkModal.classList.remove('visible');
      });
    }
    
    // Close modal when clicking outside content
    artworkModal.addEventListener('click', (e) => {
      if (e.target === artworkModal) {
        artworkModal.classList.remove('visible');
      }
    });
  }
  
  // Contact Form Submit
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // In a real implementation, you would send this data to a server
      console.log('Form submitted:', { name, email, message });
      
      // Show success message
      if (copyToast) {
        copyToast.textContent = 'Message sent successfully!';
        copyToast.classList.add('visible');
        
        setTimeout(() => {
          copyToast.classList.remove('visible');
        }, 3000);
      }
      
      // Reset form
      contactForm.reset();
    });
  }
  
  // Enhanced Cursor Trail Effect for static HTML mode
  let positions = [];
  const colors = ['#9B87F5', '#FFD166', '#6BAED9', '#7ECBA1', '#FEC6D6', '#FFA07A'];
  let lastPosition = { x: 0, y: 0, time: Date.now() };
  
  // Create cursor dot
  const cursorDot = document.createElement('div');
  cursorDot.className = 'cursor-dot';
  document.body.appendChild(cursorDot);
  
  document.addEventListener('mousemove', (e) => {
    // Update main cursor dot
    const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    
    const cursorX = e.clientX + scrollX;
    const cursorY = e.clientY + scrollY;
    
    cursorDot.style.opacity = '1';
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
    
    const now = Date.now();
    
    // Add trail dots based on movement or time
    if (
      Math.abs(cursorX - lastPosition.x) > 10 || 
      Math.abs(cursorY - lastPosition.y) > 10 ||
      now - lastPosition.time > 100
    ) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      
      // Create a trail dot
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.left = (cursorX - 7.5) + 'px';
      trail.style.top = (cursorY - 7.5) + 'px';
      trail.style.backgroundColor = randomColor;
      document.body.appendChild(trail);
      
      // Store position data
      positions.push({
        element: trail,
        id: now,
        x: cursorX,
        y: cursorY
      });
      
      lastPosition = { x: cursorX, y: cursorY, time: now };
    }
    
    // Limit the number of trail elements
    if (positions.length > 50) {
      const oldestDot = positions.shift();
      if (oldestDot && oldestDot.element && oldestDot.element.parentNode) {
        oldestDot.element.parentNode.removeChild(oldestDot.element);
      }
    }
  });
  
  document.addEventListener('mouseout', () => {
    cursorDot.style.opacity = '0';
  });
  
  document.addEventListener('mouseenter', () => {
    cursorDot.style.opacity = '1';
  });
  
  // Clean up trails periodically
  setInterval(() => {
    if (positions.length > 0) {
      const oldestDot = positions.shift();
      if (oldestDot && oldestDot.element && oldestDot.element.parentNode) {
        oldestDot.element.parentNode.removeChild(oldestDot.element);
      }
    }
  }, 50);
});
