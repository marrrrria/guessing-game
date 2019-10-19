class GuessingGame {
    constructor() {
    
    }

    setRange(min, max) {
        this.number = Math.ceil((max - min) / 2) + min;
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.number;
    }

    lower() {
        this.max = this.number;
        this.setRange(this.min, this.max);
    }

    greater() {
        this.min = this.number;
        this.setRange(this.min, this.max);
    }
}

module.exports = GuessingGame;