const numbers = [
    [1, 2, 3],      //0
    [4, 5, 6],      //1
    [7, 8, 9]];     //2
console.log(numbers[2][1]);

for(let arr of numbers){
    console.log(arr);
    for(let num of arr){
        console.log(num);
    }
}

const oneDim = numbers.flat();
console.log(oneDim);

let numArray = [
	[1, 2, 3],
	[4, 5, 6],
	[
		[7, 8, 9],
		[10, 11, 12],
		[13, 14, 15]
	],
];

console.table(numArray[2][0][0]);
const twoDim = numArray.flat(2)
console.log(twoDim);


//sort
let numArr =[4,8,1,0,-14, 22, 77, 1388, 20];
numArr.sort((a, b)=> a-b);
console.log(numArr);

let movies = ['Shrek', 'Caddyshack', 'Batman', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien', 'The Count of Monte Cristo'];
// console.log(movies.sort());
// console.log(movies.sort().reverse());

let index = movies.indexOf("Batman");

//replacing movie
const deletedMovie = movies.splice(index,1,"ToyStory");

console.log(index);
console.log(deletedMovie);

console.log(movies);

movies.forEach( (movie) => {
console.log(movie);
});

console.log("=====foreach=====")
movies.forEach((movie, index) => {
console.log(index +')' + movie);
});

console.log("=====for...of=====")

console.log(movies);
for(let m of movies){
    console.log(m);

    if(m === "ToyStory"){
        break;
    }
}

//spread 
const moviesCopy = [...movies];
const newMovies = ["Transformers", ...movies, "Titanic"];

console.log(movies);
console.log(moviesCopy);
console.log(newMovies);

console.log(movies == moviesCopy);

