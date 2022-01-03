import { getAllEvents } from '../dummy-data';

// export async function getAllEvents() {
//   const response = fs.readFileSync('../dummy-data.js')
//   const response = await fetch(`${firebaseURL}/events.json`);
//   const data = await response.json();

//   const events = [];

//   for (const key in data) {
//     events.push({
//       id: key,
//       ...data[key],
//     });
//   }

//   return events;
// }

export function getFeaturedEvents() {
  const allEvents = getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export function getEventById(id) {
  const allEvents = getAllEvents();
  return allEvents.find((event) => event.id === id);
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  const allEvents = getAllEvents();

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}
