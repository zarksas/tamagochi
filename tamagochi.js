let tamagochi = {
    name: "Karl",
    food: 2,
    energy: 4,
    mood: 3,

    getStatus() {
        console.log(`Имя: ${this.name}, Еда: ${this.food}, Энергия: ${this.energy}, Настроение: ${this.mood}`);
    },

    setName(newName) {
        this.name = newName;
    },

    eat() {
        if (this.food < 5) {
            this.food ++;
            this.mood --;
        }
    },

    sleep() {
        if (this.energy < 5) {
            this.energy ++;
            this.food --;
        }
    },

    play() {
        if (this.mood < 5) {
            this.mood ++;
            this.energy --;
        }
    }

}