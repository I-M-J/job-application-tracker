### Answers to Questions
---
#### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
- getElementById: It selects a single element from the document by the unique id address. It returns null when no match is found.
- getElementsByClassName: It selects multiple elements having the same classname. It returns a HTMLCollection. HTMLCollection is a live collection that changes automatically if the DOM changes.
- querySelector: It selects single element, the first matching one using the CSS selectors.
- querySelectorAll: It selects all matching elements using the CSS selectors and returns a NodeList. NodeList is static collection that does not update automatically when the DOM changes.
#### 2. How do you create and insert a new element into the DOM?
1. We find and select the parent element for the new element.
2. We create the new element using document.createElement('tagName') and set attributes or add child elements to the newly created element.
3. We append the new element as a child element to the parent element by using parentElement.appendChild(newElement)
#### 3. What is Event Bubbling? And how does it work?
- Event Bubbling is a type of event propagation where an event starts at the most specific element / child element (the target) and then bubbles up through its ancestors / parent elements in the DOM Tree.
- When an event, let's say, a click happens on a button, which is inside a div, and the div is inside a section, the event would first trigger the Event Listener of the button, then the Event Listener of the div, then section, body and finally the document.
- This Event Bubbling allows the parent to react when an event occurs in a child.
#### 4. What is Event Delegation in JavaScript? Why is it useful?
- Event Delegation is a technique where one Event Listener is added to a parent element instead of attaching multiple Event Listener to each of the child element.
- This process is efficient as it does not require adding a lot of Event Listener to each of the child elements.
#### 5. What is the difference between preventDefault() and stopPropagation() methods?
- preventDefault() stops the browser to run any predefined code for a button, for example: \<input type="reset"> by default clears the form field. However, with the prevertDefault(), browser ignores the default behavior of clearing the form fields.
- stopPropagation() stop the Event to bubble up to any parent element, however it lets the other Event Listeners from the same element to run.