import { useState, useMemo } from 'react';
export const USER_COLORS = ['bg-blue-500', 'bg-purple-500', 'bg-pink-500', 'bg-amber-500', 'bg-teal-500'];
// Generates hours from 8 AM to 8 PM
export const TIME_SLOTS = Array.from({ length: 12 }, (_, i) => {
  const hour = i + 8;
  return `${hour.toString().padStart(2, '0')}:00`;
});

export const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export function useScheduler() {
  const [participants, setParticipants] = useState([
    { id: '1', name: 'Alex M.', color: 'user-1' },
    { id: '2', name: 'Sarah T.', color: 'user-2' }
  ]);
  
  // Schedule state map: "Day-Time" -> Set of participantIds available
  const [availability, setAvailability] = useState({
    'Monday-09:00': ['1', '2'],
    'Tuesday-10:00': ['1'],
    'Wednesday-09:00': ['1', '2'],
  });

  const [activeFilter, setActiveFilter] = useState('all'); // all, morning, afternoon, evening

  const addParticipant = (name) => {
    const id = crypto.randomUUID();
    setParticipants([...participants, { id, name, color: `user-${(participants.length % 5) + 1}` }]);
  };

  const toggleSlot = (day, time, participantId) => {
    const key = `${day}-${time}`;
    setAvailability((prev) => {
      const current = prev[key] || [];
      const updated = current.includes(participantId)
        ? current.filter((id) => id !== participantId)
        : [...current, participantId];
      return { ...prev, [key]: updated };
    });
  };

  // Compute intervals where ALL active participants are free
  const commonSlots = useMemo(() => {
    const commons = [];
    DAYS.forEach(day => {
      TIME_SLOTS.forEach(time => {
        const key = `${day}-${time}`;
        const slotUsers = availability[key] || [];
        if (participants.length > 0 && participants.every(p => slotUsers.includes(p.id))) {
          commons.push(key);
        }
      });
    });
    return commons;
  }, [availability, participants]);

  return {
    participants,
    availability,
    commonSlots,
    activeFilter,
    setActiveFilter,
    addParticipant,
    toggleSlot
  };
}