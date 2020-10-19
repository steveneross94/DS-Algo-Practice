## Queues
- like an entrance to a roller coaster, i.e. FIFO
- where might we see it? 
  - waitlist app for tickets
  - restaurant app for reservations
  - uber/lyft

- 3 methods you'll see
  - enqueue(push) O(1)
  - dequeue(pop) O(1) - difference from pop is that it takes the first person in line
  - peek O(1)
- Why would you not want to use an array to build a queue?
  - very inefficient to remove the first item from the list, as you'll have to move all of the indexes in the array
