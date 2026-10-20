(() => {
  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];
  const body = document.body;
  window.addEventListener('load', () => setTimeout(() => body.classList.remove('loading'), 420));
  const progress = $('.progress i');
  const nav = $('#nav'); const menu = $('.menu-toggle');
  menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); menu.querySelector('span').textContent = open ? '×' : '＋'; });
  $$('#nav a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded','false'); menu.querySelector('span').textContent='＋'; }));
  const story = $('.story-scroll'), sticky = $('.story-sticky');
  const scenes = [
    {eyebrow:'THE BEGINNING',title:'Every journey<br>starts with a <em>why.</em>',body:'“The secret of getting ahead is getting started.” — Mark Twain. I began with curiosity: how do things work, and how can I make them better?',left:'CURIOSITY IS THE FIRST STEP',tone:'paper',x:12,y:0,link:'#about',linkText:'MEET THE TRAVELER'},
    {eyebrow:'LEARNING THE CRAFT',title:'Small steps<br>build <em>strong foundations.</em>',body:'I keep learning, experimenting, and improving. Computer science gives me tools to create; every challenge teaches me to think more clearly.',left:'LEARN / PRACTICE / REPEAT',tone:'paper',x:28,y:8,link:'#skills',linkText:'EXPLORE CAPABILITIES'},
    {eyebrow:'THE CROSSING',title:'Turn obstacles<br>into <em>lessons.</em>',body:'“It always seems impossible until it’s done.” — Nelson Mandela. Debugging, research, and cybersecurity taught me patience: progress comes from staying with the problem.',left:'PERSISTENCE OVER PERFECTION',tone:'red',x:47,y:3,link:'#work',linkText:'VIEW SELECTED WORK'},
    {eyebrow:'BUILDING WITH PURPOSE',title:'Ideas become real<br>when we <em>build.</em>',body:'I have explored security monitoring, intrusion detection, secure file sharing, databases, and application development—turning concepts into practical projects.',left:'IMAGINE / BUILD / IMPROVE',tone:'red',x:63,y:10,link:'#work',linkText:'OPEN PROJECT INDEX'},
    {eyebrow:'REAL-WORLD EXPERIENCE',title:'Details turn effort<br>into <em>impact.</em>',body:'My cyber-forensics internship with IFSO/N-DISC, Delhi Police, gave me exposure to real investigations and evidence workflows. It reminded me that careful work matters.',left:'STAY HUMBLE. STAY PRECISE.',tone:'paper',x:79,y:0,link:'#resume',linkText:'READ MY BACKGROUND'},
    {eyebrow:'THE NEXT CHAPTER',title:'Success is a path,<br>not a <em>finish line.</em>',body:'“Great things are done by a series of small things brought together.” — Vincent van Gogh. I want to keep learning, contribute to meaningful work, and build technology people can trust.',left:'FROM CURIOSITY TO CONTRIBUTION',tone:'dark',x:91,y:5,link:'#contact',linkText:'START A CONVERSATION'}
  ];
  let soundEnabled = true;
  let storyAutoStarted = false;
  let storyWasInView = false;
  let storyGestureRetryDone = false;
  function speak(text) {
    if (!soundEnabled) return;
    if (!('speechSynthesis' in window)) { alert('Speech playback is not supported in this browser. Try the latest Chrome or Edge.'); return; }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-IN'; utterance.rate = 0.94; utterance.pitch = 0.96;
    const voices = window.speechSynthesis.getVoices();
    const chosen = voices.find(v => /en-IN/i.test(v.lang)) || voices.find(v => /en-US|en-GB/i.test(v.lang));
    if (chosen) utterance.voice = chosen;
    window.speechSynthesis.speak(utterance);
  }
  const introScript = "Hello, I’m Raj Ratna Kumar. I’m a software and web development enthusiast with a strong interest in cybersecurity and digital forensics. My journey starts with curiosity: asking questions, learning the fundamentals, and turning ideas into useful projects. I believe progress comes from consistency, resilience, and the courage to keep learning. I’m excited to build dependable technology, solve real problems, and contribute to work that makes a meaningful impact. Welcome to my story.";
  $('#avatar-intro')?.addEventListener('click', () => speak(introScript));
  $('#intro-speak')?.addEventListener('click', () => speak(introScript));
  // Narration follows the story section, not the page-load intro. This makes the
  // first spoken chapter match what the visitor is actually looking at.
  const cleanHeading = html => html.replace(/<[^>]*>/g, ' ').replace(/&amp;/g, ' and ').replace(/\s+/g, ' ').trim();
  const narrateScene = (index, delay=0) => {
    if (!soundEnabled) return;
    const s = scenes[Math.max(0, Math.min(scenes.length - 1, index))];
    window.setTimeout(() => {
      if (!soundEnabled || !storyWasInView || (activeScene >= 0 && activeScene !== index)) return;
      speak(`${s.eyebrow}. ${cleanHeading(s.title)}. ${s.body}`);
    }, delay);
  };
  const storyVisible = () => {
    const r = story.getBoundingClientRect();
    return r.top < innerHeight * 0.78 && r.bottom > innerHeight * 0.2;
  };
  if ('IntersectionObserver' in window) {
    const storyObserver = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          storyWasInView = true;
          if (!storyAutoStarted && soundEnabled) {
            storyAutoStarted = true;
            narrateScene(Math.max(0, activeScene), 180);
          }
        } else if (entry.boundingClientRect.top > 0 || entry.boundingClientRect.bottom < 0) {
          storyWasInView = false;
        }
      }
    }, { threshold: 0.28 });
    storyObserver.observe(story);
  }
  // If the browser blocks speech until a gesture, retry when the visitor scrolls
  // into the story or taps a control. Do not hijack the opening introduction.
  const retryStoryAfterGesture = () => {
    if (storyGestureRetryDone) return;
    window.setTimeout(() => {
      if (soundEnabled && storyVisible() && !storyGestureRetryDone) {
        storyGestureRetryDone = true;
        storyWasInView = true;
        storyAutoStarted = true;
        narrateScene(Math.max(0, activeScene), 0);
      }
    }, 120);
  };
  window.addEventListener('wheel', retryStoryAfterGesture, { passive: true });
  window.addEventListener('touchstart', retryStoryAfterGesture, { passive: true });
  window.addEventListener('pointerdown', retryStoryAfterGesture, { passive: true });
  window.addEventListener('keydown', retryStoryAfterGesture);
  $('#story-speak')?.addEventListener('click', () => {
    storyWasInView = true;
    narrateScene(Math.max(0, activeScene), 0);
  });
  $('#sound-toggle')?.setAttribute('aria-pressed', 'true');
  if ($('#sound-toggle')) $('#sound-toggle').textContent = '◖ SOUND ON';
  $('#sound-toggle')?.addEventListener('click', e => {
    soundEnabled = !soundEnabled;
    e.currentTarget.setAttribute('aria-pressed', String(soundEnabled));
    e.currentTarget.textContent = soundEnabled ? '◖ SOUND ON' : '◖ SOUND OFF';
    if (!soundEnabled && 'speechSynthesis' in window) window.speechSynthesis.cancel();
    else if (storyVisible()) { storyWasInView = true; narrateScene(Math.max(0, activeScene), 0); }
    else speak(introScript);
  });
  let activeScene = -1, manualUntil = 0;
  function setScene(i) {
    i = Math.max(0, Math.min(scenes.length-1, i)); if (i === activeScene) return; const previousScene = activeScene; activeScene = i;
    const s = scenes[i]; const storyEl = $('.story-text');
    storyEl.classList.add('switching');
    setTimeout(() => {
      $('#story-number').textContent = String(i+1).padStart(2,'0'); $('#story-eyebrow').textContent = s.eyebrow;
      $('#story-title').innerHTML = s.title; $('#story-body').textContent = s.body;
      $('#story-foot-left').textContent = s.left; $('#story-link').href = s.link; $('#story-link').innerHTML = `${s.linkText} <span>↗</span>`;
      $('.scene-journey').className = `scene scene-journey tone-${s.tone}`;
      $('.scene-figure').style.left = `${s.x}%`; $('.scene-figure').style.bottom = `${s.y}%`;
      storyEl.classList.remove('switching');
      if (soundEnabled && previousScene >= 0 && i !== previousScene && storyVisible()) { storyWasInView = true; narrateScene(i, 90); }
    }, 170);
  }
  function update() {
    const max = document.documentElement.scrollHeight - innerHeight;
    const p = max > 0 ? scrollY / max : 0; progress.style.width = `${p*100}%`;
    const rect = story.getBoundingClientRect(); const range = story.offsetHeight - innerHeight;
    const local = Math.max(0, Math.min(1, -rect.top / Math.max(1, range)));
    sticky.style.setProperty('--journey-progress', local);
    $('.scene-figure').style.transform = `translate3d(${Math.sin(local*22)*8}px,${Math.sin(local*42)*4}px,0) scale(${1+local*.12})`;
    $('.scene-sun').style.transform = `translate(${local*120}px,${local*-80}px)`;
    $('.scene-path').style.transform = `translateY(${local*-12}%) scale(${1+local*.4})`;
    if (rect.top < innerHeight && rect.bottom > 0 && performance.now() > manualUntil) setScene(Math.min(5, Math.floor(local*6)));
    $$('.panel, .manifesto, .work, .skills, .timeline, .resume, .contact').forEach(el => { if(el.getBoundingClientRect().top < innerHeight*.82) el.classList.add('seen'); });
  }
  let ticking=false; addEventListener('scroll', () => { if(!ticking){requestAnimationFrame(()=>{update();ticking=false});ticking=true;} }, {passive:true}); addEventListener('resize', update);
  $('#story-prev').addEventListener('click', () => { manualUntil = performance.now()+1800; setScene(activeScene-1); });
  $('#story-next').addEventListener('click', () => { manualUntil = performance.now()+1800; setScene(activeScene+1); });
  addEventListener('keydown', e => { if(e.key==='ArrowDown' && story.getBoundingClientRect().top < innerHeight && story.getBoundingClientRect().bottom>0){manualUntil=performance.now()+1800;setScene(activeScene+1)} if(e.key==='ArrowUp' && story.getBoundingClientRect().top < innerHeight && story.getBoundingClientRect().bottom>0){manualUntil=performance.now()+1800;setScene(activeScene-1)} });
  $$('.project').forEach((p,i)=>{p.addEventListener('mouseenter',()=>{p.style.setProperty('--hover-index',i);});p.addEventListener('click',()=>p.classList.toggle('expanded'));p.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();p.classList.toggle('expanded')}})});
  update(); setScene(0);
})();


// Keep the supplied cinematic wallpaper looping; browsers may still require an initial user gesture.
(() => {
  const video = document.querySelector('.cinematic-wallpaper-video');
  if (!video) return;
  video.loop = true;
  video.muted = true;
  video.autoplay = true;
  video.playsInline = true;
  const tryPlay = () => {
    if (video.paused) {
      const p = video.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    }
  };
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) tryPlay();
  });
  window.addEventListener('pageshow', tryPlay);
  tryPlay();
})();
