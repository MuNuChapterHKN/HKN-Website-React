import { useEffect, useState } from 'react';

export function useMaxWidth(maxWidth: number): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const updateMatches = () => {
      setMatches(window.innerWidth <= maxWidth);
    };

    updateMatches();
    window.addEventListener('resize', updateMatches);

    return () => window.removeEventListener('resize', updateMatches);
  }, [maxWidth]);

  return matches;
}

export function useTeamMembersPerPage(): number {
  const [numPeople, setNumPeople] = useState(6);

  useEffect(() => {
    const updateNumPeople = () => {
      if (window.innerWidth > 1050) {
        setNumPeople(4);
      } else if (window.innerWidth > 800) {
        setNumPeople(3);
      } else {
        setNumPeople(6);
      }
    };

    updateNumPeople();
    window.addEventListener('resize', updateNumPeople);

    return () => window.removeEventListener('resize', updateNumPeople);
  }, []);

  return numPeople;
}
