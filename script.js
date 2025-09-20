document.addEventListener('DOMContentLoaded', ()=>{
  const modal=document.getElementById('modal');
  const openModalBtn=document.getElementById('open-modal');
  const topCta=document.getElementById('cta-top');
  const overlay=document.getElementById('modal-overlay');
  const closeBtn=document.getElementById('modal-close');
  const scrollBtn=document.getElementById('scrollTop');
  const form=document.getElementById('early-form');

  function openModal(){
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden'; // Prevent background scrolling
  }
  
  function closeModal(){
    modal.setAttribute('aria-hidden','true');
    document.body.style.overflow=''; // Restore scrolling
    form.reset(); // Clear form when closing
  }

  // Open modal event listeners
  openModalBtn?.addEventListener('click',(e)=>{
    e.preventDefault();
    openModal();
  });
  topCta?.addEventListener('click',(e)=>{
    e.preventDefault();
    openModal();
  });

  // Close modal event listeners
  closeBtn?.addEventListener('click',closeModal);
  overlay?.addEventListener('click',closeModal);
  
  // Close modal with Escape key
  document.addEventListener('keydown',(e)=>{
    if(e.key==='Escape' && modal.getAttribute('aria-hidden')==='false'){
      closeModal();
    }
  });

  // Handle form submission
  form?.addEventListener('submit',(e)=>{
    e.preventDefault();
    const formData=new FormData(form);
    const name=formData.get('name');
    const email=formData.get('email');
    
    // Simple validation
    if(name && email){
      alert(`Thank you ${name}! We'll notify you at ${email} when we launch.`);
      closeModal();
    }
  });

  window.addEventListener('scroll',()=>{
    if(window.scrollY>200)scrollBtn.classList.add('show');else scrollBtn.classList.remove('show');
  });
  scrollBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

  const reveals=document.querySelectorAll('.reveal');
  const io=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible');});
  },{threshold:0.1});
  reveals.forEach(r=>io.observe(r));
});
