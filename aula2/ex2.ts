// PART 1
// Defining Player as a type
interface Player {
    name: string;
    age: number;
    game: string;
};


// With Partial<T>, all attributes become optional
// <T> stands for a generic type parameter
const playerPartial: Partial<Player> = {
    name: "Maria"
    // age and game are optional here
};

// With Readonly<T> - All attributes are read-only
const playerReadonly: Readonly<Player> = {
    name: "Pedro",
    age: 30,
    game: "Call of Duty"
};
// playerReadonly.name = "Other"; // Error! Cannot modify a read-only attribute

// With Pick<T, K> - Selects only the specified attributes
// <K> stands for the keys of the type T
const playerPick: Pick<Player, "name" | "game"> = {
    name: "Ana",
    game: "Minecraft"
    // age is not included
};

// With Omit<T, K> - Excludes the specified attributes
const playerOmit: Omit<Player, "age"> = {
    name: "Carlos",
    game: "Fortnite"
    // age is omitted
};

console.log("Complete player:", player);
console.log("Partial player:", playerPartial);
console.log("Readonly player:", playerReadonly);
console.log("Player Pick:", playerPick);
console.log("Player Omit:", playerOmit);


// PART 2

// Vehicle class with brand, model, year
class Vehicle {
    constructor(public brand: string, public model: string, public year: number) {}
    description(): string {
        return `${this.brand} ${this.model} (${this.year})`;
    }
}

// Car extends Vehicle, adds doors
class Car extends Vehicle {
    constructor(brand: string, model: string, year: number, public doors: number) {
        super(brand, model, year);
    }
    description(): string {
        return `${super.description()} with ${this.doors} doors.`;
    }
}

const myCar = new Car("Toyota", "Corolla", 2023, 4);
console.log(myCar.description());


// PART 3

// Generic class ListHandler<T>
// <T> is a type parameter - it can be any type (string, number, object, etc.)
// This allows the same class to work with different types while keeping type safety
class ListHandler<T> {
    private items: T[] = [];

    // Adds an element to the array
    add(item: T) { this.items.push(item); }

    // Removes an element from the array (first occurrence)
    remove(item: T) {
        const i = this.items.indexOf(item);
        if (i !== -1) {
            this.items.splice(i, 1);
            console.log(`${item} removed.`);
        } else {
            console.log(`${item} not found.`);
        }
    }
    
    // Returns all elements
    getAll() { return this.items; }
}

const list = new ListHandler<string>();
// list.add adds strings to the list
list.add("Apple");
list.add("Banana");
//list.remove removes a string from the list
list.remove("Banana");
// list.getAll returns array of strings from the list
console.log(list.getAll());