
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
        description: 'Creating artwork with pencils, charcoal, and digital tools.',
        image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop'
      },
      {
        name: 'Painting',
        description: 'Expressing myself through colors, brushstrokes, and canvas.',
        image: 'https://images.unsplash.com/photo-1541753866388-0b3c701627d3?w=800&auto=format&fit=crop'
      },
      {
        name: 'Reading Manga',
        description: 'Exploring Japanese comic books and graphic novels.',
        image: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=800&auto=format&fit=crop'
      },
      {
        name: 'Reading Manhwa',
        description: 'Diving into Korean comics and their unique storytelling style.',
        image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&auto=format&fit=crop'
      },
      {
        name: 'Reading Manhua',
        description: 'Enjoying Chinese comics with their distinctive artistic approach.',
        image: 'https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?w=800&auto=format&fit=crop'
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
    const closeButton = hobbyModal.querySelector('.modal-close');
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        hobbyModal.classList.remove('visible');
      });
    }
    
    // Close modal when clicking outside content
    hobbyModal.addEventListener('click', (e) => {
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
  
  // Cursor Trail Effect
  const cursorDot = document.createElement('div');
  cursorDot.className = 'cursor-dot';
  document.body.appendChild(cursorDot);
  
  let mouseX = 0;
  let mouseY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursorDot.style.opacity = '1';
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
  });
  
  document.addEventListener('mouseout', () => {
    cursorDot.style.opacity = '0';
  });
  
  // Click Trail Effect
  document.addEventListener('click', (e) => {
    const colors = [
      'rgba(155, 135, 245, 0.6)',  // Purple
      'rgba(107, 174, 217, 0.6)',  // Blue
      'rgba(255, 209, 102, 0.6)',  // Yellow
      'rgba(254, 198, 214, 0.6)'   // Pink
    ];
    
    for (let i = 0; i < 5; i++) {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.left = (mouseX - 7.5) + 'px';
      trail.style.top = (mouseY - 7.5) + 'px';
      trail.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      
      const size = Math.random() * 20 + 10;
      trail.style.width = size + 'px';
      trail.style.height = size + 'px';
      
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 90 + 10;
      const velocityX = Math.cos(angle) * distance;
      const velocityY = Math.sin(angle) * distance;
      
      document.body.appendChild(trail);
      
      let posX = mouseX;
      let posY = mouseY;
      
      const animate = () => {
        posX += velocityX / 10;
        posY += velocityY / 10;
        trail.style.left = (posX - size/2) + 'px';
        trail.style.top = (posY - size/2) + 'px';
      };
      
      const intervalId = setInterval(animate, 20);
      
      setTimeout(() => {
        clearInterval(intervalId);
        document.body.removeChild(trail);
      }, 1000);
    }
  });
});
