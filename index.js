// Part 1: Fizz Buzz

// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

for(let x = 1; x <=100; x++)
{
    
    if(x % 3 === 0 && x % 5 === 0 )
    {
        console.log(`Fizz Buzz`);
    }
    else if(x % 3 === 0)
    {
        console.log(`Fizz`);
    }
    else if(x % 5 === 0)
    {
        console.log(`Buzz`);
    }
    else
    {
        console.log(`${x}`);
    }
}

// Part 2: Prime Time
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.

//let n = prompt("Enter a number to find next Prime number  ");
let n = 165;
n = parseInt(n);
let originalNumber = n;

//this condition is always true and when it finds prime number exits loop
while( n >= originalNumber)
{
    let isPrime = true;
    for (let i = 2; i < n; i++)
    {
        //if n divisible by i
        if(n % i == 0)
        {
            isPrime = false;
            break;
        }
    }

    if(isPrime)
    {
        console.log(`Prime number following number ${originalNumber}: ${n}`);
        break;
    }
    n++;
}

// A CSV file, or “Comma-Separated Values” file is traditionally used to store tabular data. You may be familiar with CSVs through past use of programs such as Microsoft Excel or Google Sheets. While each of these programs save their data in different formats to preserve style (e.g., font color or cell backgrounds), at their core, they are storing CSV data.

let textToBeFormatted = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let rowValues = textToBeFormatted.split("\n");
let cellValues = "";
let displayRow = "";
console.log(`**************** Formatted Rows ******************`)
for(let i = 0; i < rowValues.length; i++){
    cellValues = rowValues[i].split(",");
    displayRow = "";
    
    for (let j = 0; j < cellValues.length; j++)
    {
        displayRow += cellValues[j] + ",";
        
    }
    console.log(`${displayRow}`);
}
