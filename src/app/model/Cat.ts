export class Cat {
    id: number;
    private nom: String;
    private age: number;
    private race: String;
    private vivant: boolean;

    constructor(){}

    public getId() : number {
        return this.id;
    }

    public setId(id:number) : void {
        this.id = id;
    }

    public getNom() : String {
        return this.nom;
    }

    public setNom(nom: String) : void {
        this.nom = nom;
    }

    public getAge() : number {
        return this.age;
    }

    public setAge(age: number) : void {
        this.age = age;
    }

    public getRace() : String {
        return this.race;
    }

    public setRace(race: String) : void {
        this.race = race;
    }

    public getVivant(): boolean {
        return this.vivant;
    }

    public setVivant(vivant: boolean) : void {
        this.vivant = vivant;
    }


}