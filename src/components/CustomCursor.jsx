import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  // Use refs instead of state to avoid re-renders
  const cursorDotRef = useRef(null);
  const cursorTrailRef = useRef(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const trailPositionRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    // Check if we're on a device that supports hover
    const mediaQuery = window.matchMedia('(hover: hover)');
    if (!mediaQuery.matches) return;

    // Initialize cursor elements
    const cursorDot = cursorDotRef.current;
    const cursorTrail = cursorTrailRef.current;
    
    // Handle mouse movement
    const updatePosition = (e) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
      
      // Show cursor elements on first movement
      if (!isVisibleRef.current) {
        cursorDot.style.opacity = '1';
        cursorTrail.style.opacity = '0.4';
        isVisibleRef.current = true;
      }
    };

    // Animation loop with optimized trail following behavior
    const animate = () => {
      // Calculate new trail position with easing
      trailPositionRef.current = {
        x: trailPositionRef.current.x + (positionRef.current.x - trailPositionRef.current.x) * 0.15,
        y: trailPositionRef.current.y + (positionRef.current.y - trailPositionRef.current.y) * 0.15
      };
      
      // Apply transforms directly without state updates
      if (cursorDot && cursorTrail) {
        cursorDot.style.transform = `translate(${positionRef.current.x}px, ${positionRef.current.y}px)`;
        cursorTrail.style.transform = `translate(${trailPositionRef.current.x}px, ${trailPositionRef.current.y}px)`;
      }
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Handle cursor appearance on interactive elements
    const handleElementInteraction = (e) => {
      const target = e.target;
      
      // Button, link, input, or other interactive element
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'input' ||
        target.classList.contains('clickable-element')
      ) {
        cursorDot.classList.add('cursor-expanded');
        cursorTrail.classList.add('cursor-expanded');
      } else if (
        target.tagName.toLowerCase() === 'p' ||
        target.tagName.toLowerCase() === 'h1' ||
        target.tagName.toLowerCase() === 'h2' ||
        target.tagName.toLowerCase() === 'h3' ||
        target.tagName.toLowerCase() === 'span' ||
        target.classList.contains('text-element')
      ) {
        cursorDot.classList.add('cursor-text');
      }
    };

    const handleElementLeave = () => {
      if (cursorDot && cursorTrail) {
        cursorDot.classList.remove('cursor-expanded', 'cursor-text');
        cursorTrail.classList.remove('cursor-expanded');
      }
    };

    // Event listeners
    window.addEventListener('mousemove', updatePosition, { passive: true });
    document.addEventListener('mouseover', handleElementInteraction, { passive: true });
    document.addEventListener('mouseout', handleElementLeave, { passive: true });
    
    // Start animation
    animationFrameRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleElementInteraction);
      document.removeEventListener('mouseout', handleElementLeave);
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Handle mouse leaving window
  useEffect(() => {
    const handleMouseLeave = () => {
      if (cursorDotRef.current && cursorTrailRef.current) {
        cursorDotRef.current.style.opacity = '0';
        cursorTrailRef.current.style.opacity = '0';
      }
    };

    const handleMouseEnter = () => {
      if (cursorDotRef.current && cursorTrailRef.current && isVisibleRef.current) {
        cursorDotRef.current.style.opacity = '1';
        cursorTrailRef.current.style.opacity = '0.4';
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorTrailRef}
        className="cursor-trail"
        style={{ opacity: 0 }}
      />
      <div
        ref={cursorDotRef}
        className="cursor-dot"
        style={{ opacity: 0 }}
      />
    </>
  );
};

export default CustomCursor;