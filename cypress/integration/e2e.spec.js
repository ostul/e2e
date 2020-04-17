let lplus = require('lplus')
let rplus = require('rplus')

let lplusTodoPage = new lplus.TodoPage()
let rplusTodoPage = new rplus.TodoPage()




describe('L Plus', () => {
    beforeEach(() => {
        lplusTodoPage.navigate()
        lplusTodoPage.addTodo('Clean room')
    })

    it('should add a new todo to the list', () => {
        lplusTodoPage.validateTodoText(0, 'Clean room')
        lplusTodoPage.validateToggleState(0, false)
    })

    describe('toggling todos', () => {
        it('should toggle test correctly', () => {
            lplusTodoPage.toggleTodo(0)
            lplusTodoPage.validateTodoCompletedState(0, true)
        })

        it('should clear completed', () => {
            lplusTodoPage.toggleTodo(0)
            lplusTodoPage.clearCompleted()
            lplusTodoPage.validateNumberOfTodosShown(0)
        })
    })
})


describe('R Plus', () => {
    beforeEach(() => {
        rplusTodoPage.navigate()
        rplusTodoPage.addTodo('Clean room')
    })

    it('should add a new todo to the list', () => {
        rplusTodoPage.validateTodoText(0, 'Clean room')
        rplusTodoPage.validateToggleState(0, false)
    })

    describe('toggling todos', () => {
        it('should toggle test correctly', () => {
            rplusTodoPage.toggleTodo(0)
            rplusTodoPage.validateTodoCompletedState(0, true)
        })

        it('should clear completed', () => {
            rplusTodoPage.toggleTodo(0)
            rplusTodoPage.clearCompleted()
            rplusTodoPage.validateNumberOfTodosShown(0)
        })
    })
})