import { useEffect } from 'react';

export default function useFreezeScroll(freezeScroll: boolean) {
  useEffect(() => {
    if (freezeScroll) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [freezeScroll]);
}
