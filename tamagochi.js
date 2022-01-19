let tamagochi = {
    name: "Karl",
    food: 2,
    energy: 4,
    mood: 5,

    getStatus() {
        console.log(`Имя: ${this.name}, Еда: ${this.food}, Энергия: ${this.energy}, Настроение: ${this.mood}`);
    },

    setName(newName) {
        this.name = newName;
    }
}