import { useLayoutEffect, useState } from 'react';

export default function useWindowPosition(id) {
  console.log('useWindowPosition');
  console.log(id);
  const [animation, setAnimation] = useState(false);

  useLayoutEffect(() => {
    function updatePosition() {
      console.log('updatePosition');
      console.log(window.document.getElementById(id));
      const offsetHeight = window.document.getElementById(id).offsetHeight;
      if (window.pageYOffset > offsetHeight * 0.7) {
        setAnimation(true);
      }
    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, [id]);

  return animation;
}