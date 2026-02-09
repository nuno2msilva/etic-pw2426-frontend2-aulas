class Post {
    title: string;
    content: string;
    datePublished: Date;

    constructor(title: string, content: string, datePublished: Date) {
        this.title = title;
        this.content = content;
        this.datePublished = datePublished;
    }

    gerarData() {
        console.log(Date.now());
    }
}

const post = new Post ("Post 1", "DEscription", new Date());
console.log(post.title);
post.gerarData

class News extends Post {
    gerarData(): void {
        const date = new Date().getFullYear();
        console.log(date);
    }
}

function random<T>(valor: T): T {
    return valor;
}

const cenas2 = random<string>("Nome");
const cenas = random<number>(10);
const cenas3 = random<boolean>(true);


class Zoo<T>{
    animal: T;

    constructor (animal:T){
        this.animal = animal;
    }
}

const cao = new Zoo <Animal>({
    name: "Dog",
    age: 10,
    color: "brown"
})


