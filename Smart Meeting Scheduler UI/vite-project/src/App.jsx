

// import { useState } from 'react';
// import { useScheduler } from './hooks/use-scheduler';
// import { CalendarGrid } from './components/calendar-grid';
// import { ParticipantList } from './components/participant-list';
// import { TimeFilters } from './components/time-filters';

// function App() {
//   const scheduler = useScheduler();
//   const [activeParticipantId, setActiveParticipantId] = useState(
//     scheduler.participants[0]?.id || null
//   );

//   const activeParticipant = scheduler.participants.find(
//     p => p.id === activeParticipantId
//   );

//   return (
//     <div className="min-h-screen bg-slate-50 text-foreground font-sans flex flex-col overflow-hidden">
//       {/* Top Navigation Bar */}
//       <header className="bg-background border-b px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm">
//         <div>
//           <h1 className="text-2xl font-bold tracking-tight text-primary">Smart Scheduler</h1>
//           <p className="text-sm text-muted-foreground mt-0.5">
//             Select a participant, then click the grid to paint their availability.
//           </p>
//         </div>
//         <div className="hidden md:block">
//           <TimeFilters 
//             activeFilter={scheduler.activeFilter} 
//             setActiveFilter={scheduler.setActiveFilter} 
//           />
//         </div>
//       </header>

//       {/* Main Workspace */}
//       <main className="flex flex-1 overflow-hidden max-w-[1600px] w-full mx-auto">
//         {/* Left Sidebar - Controls */}
//         <aside className="w-80 border-r bg-background p-6 flex flex-col gap-6 overflow-y-auto hidden lg:flex shadow-[4px_0_24px_-15px_rgba(0,0,0,0.1)] z-10">
//           <ParticipantList 
//             participants={scheduler.participants}
//             addParticipant={scheduler.addParticipant}
//             activeParticipantId={activeParticipantId}
//             setActiveParticipantId={setActiveParticipantId}
//           />
          
//           <div className="mt-auto bg-green-500/10 border border-green-500/20 rounded-xl p-4">
//             <h4 className="text-sm font-semibold text-green-700 flex items-center gap-2">
//               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
//               Perfect Match
//             </h4>
//             <p className="text-xs text-green-600/80 mt-1">
//               Slots highlighted in green indicate that all selected participants are available.
//             </p>
//           </div>
//         </aside>

//         {/* Right Canvas - Calendar Grid */}
//         <section className="flex-1 bg-slate-50 p-4 md:p-6 overflow-hidden flex flex-col relative">
//           {/* Mobile Time Filters */}
//           <div className="md:hidden mb-4 overflow-x-auto pb-2">
//              <TimeFilters 
//               activeFilter={scheduler.activeFilter} 
//               setActiveFilter={scheduler.setActiveFilter} 
//             />
//           </div>
          
//           <CalendarGrid 
//             scheduler={scheduler} 
//             selectedParticipant={activeParticipant} 
//           />
//         </section>
//       </main>
//     </div>
//   );
// }

// export default App;


import { useState } from 'react';
import { useScheduler } from './hooks/use-scheduler';
import { CalendarGrid } from './components/calendar-grid';
import { ParticipantList } from './components/participant-list';
import { TimeFilters } from './components/time-filters';

function App() {
  const scheduler = useScheduler();
  const [activeParticipantId, setActiveParticipantId] = useState(
    scheduler.participants[0]?.id || null
  );

  const activeParticipant = scheduler.participants.find(
    p => p.id === activeParticipantId
  );

  return (
    <div className="min-h-screen bg-slate-50 text-foreground font-sans flex flex-col overflow-hidden">
      {/* Top Navigation Bar */}
      <header className="bg-background border-b px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-primary">Smart Scheduler</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            Select a participant, then click the grid to paint their availability.
          </p>
        </div>
        <div className="hidden md:block">
          <TimeFilters 
            activeFilter={scheduler.activeFilter} 
            setActiveFilter={scheduler.setActiveFilter} 
          />
        </div>
      </header>

      {/* Main Workspace */}
      <main className="flex flex-1 overflow-hidden max-w-[1600px] w-full mx-auto">
        {/* Left Sidebar - Controls */}
        <aside className="w-80 border-r bg-background p-6 flex flex-col gap-6 overflow-y-auto hidden lg:flex shadow-[4px_0_24px_-15px_rgba(0,0,0,0.1)] z-10">
          <ParticipantList 
            participants={scheduler.participants}
            addParticipant={scheduler.addParticipant}
            activeParticipantId={activeParticipantId}
            setActiveParticipantId={setActiveParticipantId}
          />
          
          <div className="mt-auto bg-green-500/10 border border-green-500/20 rounded-xl p-4">
            <h4 className="text-sm font-semibold text-green-700 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              Perfect Match
            </h4>
            <p className="text-xs text-green-600/80 mt-1">
              Slots highlighted in green indicate that all selected participants are available.
            </p>
          </div>
        </aside>

        {/* Right Canvas - Calendar Grid */}
        <section className="flex-1 bg-slate-50 p-4 md:p-6 overflow-hidden flex flex-col relative">
          {/* Mobile Time Filters */}
          <div className="md:hidden mb-4 overflow-x-auto pb-2">
             <TimeFilters 
              activeFilter={scheduler.activeFilter} 
              setActiveFilter={scheduler.setActiveFilter} 
            />
          </div>
          
          <CalendarGrid 
            scheduler={scheduler} 
            selectedParticipant={activeParticipant} 
          />
        </section>
      </main>
    </div>
  );
}

export default App;