import { Button } from './ui/button';

export function TimeFilters({ activeFilter, setActiveFilter }) {
  const filters = [
    { id: 'all', label: 'All Day' },
    { id: 'morning', label: 'Morning (8AM - 11AM)' },
    { id: 'afternoon', label: 'Afternoon (12PM - 3PM)' },
    { id: 'evening', label: 'Evening (4PM - 7PM)' }
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {filters.map(filter => (
        <Button
          key={filter.id}
          variant={activeFilter === filter.id ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveFilter(filter.id)}
          className="rounded-full"
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
}