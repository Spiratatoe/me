import { useEffect, useRef } from 'react';
import './BubbleCursor.css';

class Particle {
  constructor(x, y) {
    this.initialLifeSpan = Math.floor(Math.random() * 60 + 60);
    this.lifeSpan = this.initialLifeSpan;
    this.velocity = {
      x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 10),
      y: -0.4 + Math.random() * -1,
    };
    this.position = { x, y };
    this.baseDimension = 4;
  }

  update(context) {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.velocity.x += ((Math.random() < 0.5 ? -1 : 1) * 2) / 75;
    this.velocity.y -= Math.random() / 600;
    this.lifeSpan--;

    const scale =
      0.2 + (this.initialLifeSpan - this.lifeSpan) / this.initialLifeSpan;

    context.fillStyle = '#e6f1f7';
    context.strokeStyle = '#3a92c5';
    context.beginPath();
    context.arc(
      this.position.x - (this.baseDimension / 2) * scale,
      this.position.y - this.baseDimension / 2,
      this.baseDimension * scale,
      0,
      2 * Math.PI
    );

    context.stroke();
    context.fill();
    context.closePath();
  }
}

function BubbleCursor({ wrapperElement }) {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const cursorRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );
    let canvas = null;
    let context = null;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let isInitialized = false;

    const onWindowResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      if (!canvas) return;

      if (wrapperElement) {
        canvas.width = wrapperElement.clientWidth;
        canvas.height = wrapperElement.clientHeight;
      } else {
        canvas.width = width;
        canvas.height = height;
      }
    };

    const onTouchMove = (e) => {
      if (e.touches.length > 0) {
        for (let i = 0; i < e.touches.length; i++) {
          addParticle(e.touches[i].clientX, e.touches[i].clientY);
        }
      }
    };

    const onMouseMove = (e) => {
      if (wrapperElement) {
        const boundingRect = wrapperElement.getBoundingClientRect();
        cursorRef.current.x = e.clientX - boundingRect.left;
        cursorRef.current.y = e.clientY - boundingRect.top;
      } else {
        cursorRef.current.x = e.clientX;
        cursorRef.current.y = e.clientY;
      }

      addParticle(cursorRef.current.x, cursorRef.current.y);
    };

    const addParticle = (x, y) => {
      particlesRef.current.push(new Particle(x, y));
    };

    const updateParticles = () => {
      if (!canvas || !context) return;

      if (particlesRef.current.length === 0) {
        return;
      }

      context.clearRect(0, 0, canvas.width, canvas.height);

      // Update
      for (let i = 0; i < particlesRef.current.length; i++) {
        particlesRef.current[i].update(context);
      }

      // Remove dead particles
      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        if (particlesRef.current[i].lifeSpan < 0) {
          particlesRef.current.splice(i, 1);
        }
      }

      if (particlesRef.current.length === 0) {
        context.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    const loop = () => {
      updateParticles();
      animationFrameRef.current = requestAnimationFrame(loop);
    };

    const bindEvents = () => {
      const element = wrapperElement || document.body;
      element.addEventListener('mousemove', onMouseMove);
      element.addEventListener('touchmove', onTouchMove, { passive: true });
      element.addEventListener('touchstart', onTouchMove, { passive: true });
      window.addEventListener('resize', onWindowResize);
    };

    const unbindEvents = () => {
      const element = wrapperElement || document.body;
      element.removeEventListener('mousemove', onMouseMove);
      element.removeEventListener('touchmove', onTouchMove);
      element.removeEventListener('touchstart', onTouchMove);
      window.removeEventListener('resize', onWindowResize);
    };

    const init = () => {
      if (prefersReducedMotion.matches) {
        console.log(
          'This browser has prefers reduced motion turned on, so the cursor did not init'
        );
        return false;
      }

      canvas = canvasRef.current;
      if (!canvas) return;

      context = canvas.getContext('2d');
      if (!context) return;

      canvas.style.top = '0px';
      canvas.style.left = '0px';
      canvas.style.pointerEvents = 'none';
      canvas.style.position = 'fixed';

      if (wrapperElement) {
        canvas.width = wrapperElement.clientWidth;
        canvas.height = wrapperElement.clientHeight;
      } else {
        canvas.width = width;
        canvas.height = height;
      }

      isInitialized = true;
      bindEvents();
      loop();
    };

    init();

    return () => {
      // Cancel animation frame first
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }

      // Remove event listeners
      unbindEvents();

      // Clear particles
      particlesRef.current = [];

      // Clear references
      canvas = null;
      context = null;
    };
  }, [wrapperElement]);

  return <canvas ref={canvasRef} />;
}

export default BubbleCursor;
