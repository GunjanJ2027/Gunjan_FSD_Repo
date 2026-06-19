


// import React from 'react';
// import { TIME_SLOTS, DAYS } from '../hooks/use-scheduler';

// // Color palette for participants
// export const USER_COLORS = [
//   'bg-blue-500', 'bg-purple-500', 'bg-pink-500', 'bg-amber-500', 'bg-teal-500'
// ];

// export function CalendarGrid({ scheduler, selectedParticipant }) {
//   const { availability, commonSlots, activeFilter, toggleSlot, participants } = scheduler;

//   // Filter slots based on morning/afternoon/evening choices
//   const filteredTimeSlots = TIME_SLOTS.filter(slot => {
//     const hour = parseInt(slot.split(':')[0], 10);
//     if (activeFilter === 'morning') return hour < 12;
//     if (activeFilter === 'afternoon') return hour >= 12 && hour < 16;
//     if (activeFilter === 'evening') return hour >= 16;
//     return true;
//   });

//   return (
//     <div className="w-full border rounded-xl bg-background shadow-sm overflow-hidden flex flex-col h-[70vh]">
//       {/* Scrollable Viewport */}
//       <div className="overflow-auto flex-1 relative custom-scrollbar">
//         <div className="min-w-[700px] grid grid-cols-[80px_repeat(5,1fr)]">
          
//           {/* Top Left Empty Corner (Sticky) */}
//           <div className="sticky top-0 left-0 z-30 bg-background/95 backdrop-blur-md border-r border-b p-3"></div>

//           {/* Days Header (Sticky Top) */}
//           {DAYS.map(day => (
//             <div key={day} className="sticky top-0 z-20 bg-background/95 backdrop-blur-md border-b p-3 text-center text-sm font-semibold text-foreground">
//               {day}
//             </div>
//           ))}

//           {/* Grid Body */}
//           {filteredTimeSlots.map(time => (
//             <React.Fragment key={time}>
              
//               {/* Time Row Label (Sticky Left) */}
//               <div className="sticky left-0 z-10 bg-background/95 backdrop-blur-md border-r border-b p-2 text-xs text-muted-foreground flex items-start justify-center font-mono">
//                 <span className="-mt-2.5 bg-background px-1">{time}</span>
//               </div>

//               {/* Interactive Cells */}
//               {DAYS.map(day => {
//                 const slotKey = `${day}-${time}`;
//                 const attendingIds = availability[slotKey] || [];
//                 const isCommon = commonSlots.includes(slotKey);
//                 const isSelectedUserAttending = selectedParticipant && attendingIds.includes(selectedParticipant.id);

//                 return (
//                   <div
//                     key={slotKey}
//                     onClick={() => selectedParticipant && toggleSlot(day, time, selectedParticipant.id)}
//                     className={`h-24 border-r border-b p-1.5 relative cursor-pointer transition-colors duration-200 group hover:bg-accent/40
//                       ${isCommon ? 'bg-green-500/10' : ''}
//                     `}
//                   >
//                     {/* Common Overlap Highlight */}
//                     {isCommon && (
//                       <div className="absolute inset-0 border-2 border-green-500/50 pointer-events-none rounded m-0.5" />
//                     )}

//                     {/* Participant Color Pills */}
//                     <div className="flex flex-wrap gap-1.5 w-full h-full content-start overflow-hidden relative z-0">
//                       {attendingIds.map(id => {
//                         const pIndex = participants.findIndex(p => p.id === id);
//                         const p = participants[pIndex];
//                         if (!p) return null;
                        
//                         const colorClass = USER_COLORS[pIndex % USER_COLORS.length];

//                         return (
//                           <div
//                             key={id}
//                             title={p.name}
//                             className={`h-6 px-2.5 flex items-center justify-center rounded text-[11px] font-medium text-white shadow-sm ${colorClass} transition-transform hover:-translate-y-0.5`}
//                           >
//                             {p.name.split(' ')[0]}
//                           </div>
//                         );
//                       })}
//                     </div>

//                     {/* Hover Hint (Only shows if the active user hasn't selected this slot) */}
//                     {selectedParticipant && !isSelectedUserAttending && (
//                       <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none flex items-center justify-center transition-opacity duration-200">
//                         <span className="text-xs font-medium text-muted-foreground bg-background/80 px-2 py-1 rounded shadow-sm">
//                           + Assign {selectedParticipant.name.split(' ')[0]}
//                         </span>
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import { TIME_SLOTS, DAYS, USER_COLORS } from '../hooks/use-scheduler';

// Fallback color palette if not exported from hook
const COLORS = USER_COLORS || [
  'bg-blue-500', 'bg-purple-500', 'bg-pink-500', 'bg-amber-500', 'bg-teal-500'
];

export function CalendarGrid({ scheduler, selectedParticipant }) {
  const { availability, commonSlots, activeFilter, toggleSlot, participants } = scheduler;

  const filteredTimeSlots = TIME_SLOTS.filter(slot => {
    const hour = parseInt(slot.split(':')[0], 10);
    if (activeFilter === 'morning') return hour < 12;
    if (activeFilter === 'afternoon') return hour >= 12 && hour < 16;
    if (activeFilter === 'evening') return hour >= 16;
    return true;
  });

  return (
    <div className="w-full bg-background border rounded-2xl shadow-sm flex flex-col h-full overflow-hidden ring-1 ring-black/5">
      
      {/* Scrollable Viewport */}
      <div className="overflow-auto flex-1 relative scrollbar-thin scrollbar-thumb-slate-200">
        <div className="min-w-[800px] grid grid-cols-[60px_repeat(5,1fr)]">
          
          {/* Top Left Corner */}
          <div className="sticky top-0 left-0 z-30 bg-background/95 backdrop-blur-md border-r border-b border-border/40"></div>

          {/* Days Header */}
          {DAYS.map(day => (
            <div key={day} className="sticky top-0 z-20 bg-background/95 backdrop-blur-md border-b border-border/40 py-4 text-center">
              <span className="text-sm font-semibold text-slate-700">{day}</span>
            </div>
          ))}

          {/* Grid Body */}
          {filteredTimeSlots.map(time => (
            <React.Fragment key={time}>
              
              {/* Time Axis */}
              <div className="sticky left-0 z-10 bg-background/95 backdrop-blur-md border-r border-b border-border/40 p-2">
                <span className="text-[11px] font-medium text-slate-400 absolute -top-2.5 left-2 bg-background px-1">
                  {time}
                </span>
              </div>

              {/* Interactive Cells */}
              {DAYS.map(day => {
                const slotKey = `${day}-${time}`;
                const attendingIds = availability[slotKey] || [];
                const isCommon = commonSlots.includes(slotKey) && participants.length > 1;

                // Determine border and background styles
                let cellStyles = "h-20 border-r border-b border-border/40 p-1.5 relative cursor-pointer transition-all duration-200 group ";
                
                if (isCommon) {
                  cellStyles += "bg-green-50 hover:bg-green-100 ";
                } else {
                  cellStyles += "hover:bg-slate-50 ";
                }

                return (
                  <div
                    key={slotKey}
                    onClick={() => selectedParticipant && toggleSlot(day, time, selectedParticipant.id)}
                    className={cellStyles}
                  >
                    {/* Perfect Match Highlight Frame */}
                    {isCommon && (
                      <div className="absolute inset-0 border-2 border-green-400 pointer-events-none rounded transition-all shadow-[inset_0_0_15px_rgba(74,222,128,0.15)] z-0" />
                    )}

                    {/* Participant Badges */}
                    <div className="flex flex-wrap gap-1.5 w-full h-full content-start overflow-hidden relative z-10">
                      {attendingIds.map(id => {
                        const pIndex = participants.findIndex(p => p.id === id);
                        const p = participants[pIndex];
                        if (!p) return null;
                        
                        const colorClass = COLORS[pIndex % COLORS.length];

                        return (
                          <div
                            key={id}
                            className={`px-2 py-0.5 flex items-center justify-center rounded-md text-[11px] font-medium text-white shadow-sm ${colorClass} transition-transform hover:scale-105`}
                          >
                            {p.name.split(' ')[0]}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}