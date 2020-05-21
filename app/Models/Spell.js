export default class Spell {


    constructor(data) {
        this.id = data.id || data._id
        this.name = data.name
        this.description = data.desc
        this.level = data.level
        this.range = data.range
        this.duration = data.duration
        this.components = data.components
        this.user = data.user || "not specified"


    }

    get Template() {
        return `<div class="col-9 m-auto card shadow mt-5">
        <div class="card-body">
            <h4 class="card-title"><b>${this.name}</b></h4>
            <p class="card-text"><b>Level:</b> ${this.level} |<b> Range:</b> ${this.range}</p>
            <p class="card-text"><b>Duration:</b> ${this.duration} | <b>Components:</b> ${this.components}</p>
            <p class="card-text"><b>Description:</b> ${this.description}</p>
            <button class="btn btn-info" onclick="app.spellsController.learn(${this.id})">Learn</button>
        </div>
    </div>`

    }
}