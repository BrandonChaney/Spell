export default class Spell {
    constructor(data) {
        this.name = data.name
        this.description = data.description
        this.level = data.level
        this.range = data.range
        this.duration = data.duration
        this.components = data.components
        this.user = data.user
    }

    get Template() {
        return `<div class="col-5 m-auto card shadow mt-5">
        <div class="card-body">
            <h4 class="card-title">${this.name}</h4>
            <p class="card-text">Level: ${this.level} | Range: ${this.range}</p>
            <p class="card-text">Duration: ${this.duration} | Components: ${this.components}</p>
            <p class="card-text">user: ${this.user}</p>
            
        </div>
    </div>`

    }
}