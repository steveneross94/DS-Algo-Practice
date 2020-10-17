# Linked Lists

Two Types: 
1) Singly
2) Doubly


Problems we encountered with arrays:
- Static arrays limit memory, dynamic arrays can adjust, but every now and then that would inhibit performance. 
- Certain operations were performance intensive like inserting or deleting

Problems we encountered with Hash Tables:
- Lack of order

Solved by Linked Lists. Doesn't mean these are the end all be all solution.

So what is it? 
- a list that is linked. No shit.
- a list contains a set of nodes, nodes are "blocks", these nodes have two elements.
1) the value of the data
2) the pointer to the next value in line
- first node is called the head
- last node called the tail

Linked Lists are "null" terminated. This signifies that it's the end of the list

*Pointer* is a term that you'll hear a lot. 

JS doesn't come with Linked Lists available. Java does! So we have to build our own. 

___
## Why might LL be selected over an array or hash table?

Linked Lists have a loose structure, so you can insert a value into any region 

In an array, elements are indexed, in a linked list, you traverse the list until you get to an element

We'll have to use a while loop b/c we don't know how long the list will be. 

Linked List nodes are scattered across memory, so traversing is usually slower than an array iteration. However, inserts into a Linked List are faster because of that scattered location, because we don't need to shift or unshift like an array. 

You can delete nodes easily as opposed to arrays. 

The advantage over a hash table is that element of order.

## So, what's a pointer? 
Simply, a reference to another place in memory 