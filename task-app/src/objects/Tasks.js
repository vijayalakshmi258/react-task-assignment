export default class Tasks {
    static ids = 0
    constructor(title, dueDate, dueTime) {
        this.id = ++Tasks.ids
        this.title = title
        this.dueDate = dueDate
        this.dueTime = dueTime
    }
}