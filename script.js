// Part 1: JavaScript Basics (Variables and Conditionals)
let count = 0; // Initialize counter variable
const countDisplay = document.getElementById('count');

// Function to update counter display and apply conditional styling
function updateCounter() {
    countDisplay.textContent = count;
    // Conditional: Change color based on count value
    if (count > 0) {
        countDisplay.style.color = 'green';
    } else if (count < 0) {
        countDisplay.style.color = 'red';
    } else {
        countDisplay.style.color = 'black';
    }
}

// Part 2: JavaScript Functions
// Function 1: Format a string to capitalize first letter
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function 2: Generate a random item for the list
function generateRandomItem(index) {
    const items = ['Apple', 'Banana', 'Orange', 'Grape', 'Mango'];
    return capitalizeFirstLetter(items[index % items.length]);
}

// Part 3: JavaScript Loops
// Loop Example 1: Generate a list using for loop
function generateList(count) {
    const list = document.getElementById('dynamic-list');
    list.innerHTML = ''; // Clear previous list
    for (let i = 0; i < count; i++) {
        const li = document.createElement('li');
        li.textContent = `${generateRandomItem(i)} (Item ${i + 1})`;
        list.appendChild(li);
    }
}

// Loop Example 2: Countdown using while loop (console-based for demonstration)
function startCountdown(seconds) {
    let time = seconds;
    while (time >= 0) {
        console.log(`Countdown: ${time} seconds remaining`);
        time--;
    }
    console.log('Countdown finished!');
}

// Part 4: DOM Manipulation
// DOM Interaction 1: Increment counter on button click
document.getElementById('increment-btn').addEventListener('click', () => {
    count++;
    updateCounter();
});

// DOM Interaction 2: Reset counter on button click
document.getElementById('reset-btn').addEventListener('click', () => {
    count = 0;
    updateCounter();
});

// DOM Interaction 3: Generate dynamic list on button click
document.getElementById('generate-list-btn').addEventListener('click', () => {
    const input = document.getElementById('list-count');
    const value = parseInt(input.value);
    if (value >= 1 && value <= 10) {
        generateList(value);
        startCountdown(value); // Run countdown in console
    } else {
        alert('Please enter a number between 1 and 10');
    }
});

// DOM Interaction 4: Toggle content visibility
document.getElementById('toggle-btn').addEventListener('click', () => {
    const content = document.getElementById('toggle-content');
    content.classList.toggle('hidden');
});