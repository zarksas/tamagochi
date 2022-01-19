let tamagochi = {
    name: "Karl",
    food: 2,
    energy: 4,
    mood: 2,

    getStatus() {
        if (this.food <= 0 || this.energy <= 0 || this.mood <= 0) {
            console.log(`${this.name} умер :(`)
        } else 
        console.log(`Имя: ${this.name}, Еда: ${(this.food < 3) ? 'Я голоден('+ this.food + ')' : 'Я не голоден(' + this.food + ')' }, Энергия: ${this.energy < 3 ? 'Я хочу спать(' + this.energy + ')': 'Я не хочу спать(' + this.energy + ')'}, Настроение: ${this.mood < 3 ? 'Мне скучно(' + this.mood + ')': 'Мне весело(' + this.mood + ')'}`);
        
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