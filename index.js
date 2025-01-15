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

// let textToBeFormatted = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let textToBeFormatted ="Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

let rowValues = textToBeFormatted.split("\n");

// if there is no escape sequence \n
if(rowValues.length <= 1)
{
    alert("Please enter escape sequence \n for new rows");
}
else
{
    let cellValues = "";
    let displayRow = "";
    console.log(`**************** Formatted Rows ******************`)

    for(let i = 0; i < rowValues.length; i++){
        cellValues = rowValues[i].split(",");

        //if delimiter is missing 

        if(cellValues.length <= 1)
        {
            alert(`Please enter delimiter ',' to seperate cell values in row ${i+1}`);
            break;
        }
        //if there is less number or more number of cell values or \n replaced with other escape sequence
        //next row will be treated as current row
        else if(cellValues.length !== 4){
            alert(`Please check for 4 cell vaues per row with delimiter ',' & escape sequence is \\n for new rows in row ${i+1}`);
            break;
        }
        else
        {  
            displayRow = "";            
            for (let j = 0; j < cellValues.length; j++)
            {
                displayRow += cellValues[j] + ",\t\t";
                
            }
            console.log(`${displayRow.slice(0, displayRow.lastIndexOf(","))}`);
        }
    }
}
