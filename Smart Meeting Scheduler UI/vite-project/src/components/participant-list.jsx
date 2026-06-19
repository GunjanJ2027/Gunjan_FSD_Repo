

// import { useState } from 'react';
// import { Button } from './ui/button';
// import { Input } from './ui/input';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
// import { USER_COLORS } from './calendar-grid';

// export function ParticipantList({ participants, addParticipant, activeParticipantId, setActiveParticipantId }) {
//   const [newName, setNewName] = useState('');
//   const [isOpen, setIsOpen] = useState(false);

//   const handleAdd = (e) => {
//     e.preventDefault();
//     if (!newName.trim()) return;
//     addParticipant(newName);
//     setNewName('');
//     setIsOpen(false);
//   };

//   return (
//     <div className="flex flex-col gap-4 bg-card p-5 rounded-xl border shadow-sm h-full">
//       <div className="flex items-center justify-between">
//         <h3 className="font-semibold text-lg">Participants</h3>
//         <Dialog open={isOpen} onOpenChange={setIsOpen}>
//           <DialogTrigger asChild>
//             <Button variant="outline" size="sm" className="h-8 shadow-sm">+ Add</Button>
//           </DialogTrigger>
//           <DialogContent>
//             <DialogHeader>
//               <DialogTitle>Add New Participant</DialogTitle>
//             </DialogHeader>
//             <form onSubmit={handleAdd} className="flex gap-3 pt-4">
//               <Input 
//                 placeholder="Enter participant's name..." 
//                 value={newName} 
//                 onChange={(e) => setNewName(e.target.value)} 
//                 autoFocus
//               />
//               <Button type="submit">Add</Button>
//             </form>
//           </DialogContent>
//         </Dialog>
//       </div>

//       <div className="flex flex-wrap gap-2">
//         {participants.map((p, index) => {
//           const isActive = activeParticipantId === p.id;
//           const colorClass = USER_COLORS[index % USER_COLORS.length];

//           return (
//             <button
//               key={p.id}
//               onClick={() => setActiveParticipantId(p.id)}
//               className={`
//                 flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border-2 outline-none
//                 ${isActive 
//                   ? 'border-primary ring-4 ring-primary/10 bg-accent text-accent-foreground' 
//                   : 'border-transparent hover:bg-muted text-muted-foreground'
//                 }
//               `}
//             >
//               <span className={`w-3 h-3 rounded-full ${colorClass} shadow-sm`}></span>
//               {p.name}
//             </button>
//           );
//         })}
//         {participants.length === 0 && (
//           <p className="text-sm text-muted-foreground py-2">No participants added yet.</p>
//         )}
//       </div>
      
//       <p className="text-xs text-muted-foreground mt-auto pt-2 border-t">
//         Select a participant above to paint their availability onto the calendar.
//       </p>
//     </div>
//   );
// }



import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { USER_COLORS } from '../hooks/use-scheduler';

export function ParticipantList({ participants, addParticipant, activeParticipantId, setActiveParticipantId }) {
  const [newName, setNewName] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newName.trim()) return;
    addParticipant(newName);
    setNewName('');
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col gap-4 bg-card p-5 rounded-xl border shadow-sm h-full">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">Participants</h3>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="h-8 shadow-sm">+ Add</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Participant</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAdd} className="flex gap-3 pt-4">
              <Input 
                placeholder="Enter participant's name..." 
                value={newName} 
                onChange={(e) => setNewName(e.target.value)} 
                autoFocus
              />
              <Button type="submit">Add</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-wrap gap-2">
        {participants.map((p, index) => {
          const isActive = activeParticipantId === p.id;
          const colorClass = USER_COLORS[index % USER_COLORS.length];

          return (
            <button
              key={p.id}
              onClick={() => setActiveParticipantId(p.id)}
              className={`
                flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border-2 outline-none
                ${isActive 
                  ? 'border-primary ring-4 ring-primary/10 bg-accent text-accent-foreground' 
                  : 'border-transparent hover:bg-muted text-muted-foreground'
                }
              `}
            >
              <span className={`w-3 h-3 rounded-full ${colorClass} shadow-sm`}></span>
              {p.name}
            </button>
          );
        })}
        {participants.length === 0 && (
          <p className="text-sm text-muted-foreground py-2">No participants added yet.</p>
        )}
      </div>
      
      <p className="text-xs text-muted-foreground mt-auto pt-2 border-t">
        Select a participant above to paint their availability onto the calendar.
      </p>
    </div>
  );
}