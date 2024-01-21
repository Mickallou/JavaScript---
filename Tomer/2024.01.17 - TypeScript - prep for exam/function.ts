// Basic function expression typescript
const fn: Function = () => {
    console.log(`hello`);
}

fn();

// Implicity define a function + return type
const fn2 = (text: string, num: number): string => {
    return `this is a beautiful world ${text} ${num}`;
}

const str: string = fn2(`Mickael`, 8);
console.log(str);

// Optional arguments
const fn3 = (text: string, num?: number): string => {
    if (num)
        return `Hi ${text}, your lucky number is ${num}`;

    return `Hi ${text}`;
}

const str2: string = fn3(`Mickael`); // The else
console.log(str2);
const str3: string = fn3(`Mickael`, 8); // The if
console.log(str3);

// Default arguments values
const fn4 = (text: string, num: number = 23): string => {
    return `Hi ${text}, your lucky number is ${num}`;
}

const str4: string = fn4(`Mickael`);
console.log(str4);
const str5: string = fn4(`Mickael`, 8);
console.log(str5);

