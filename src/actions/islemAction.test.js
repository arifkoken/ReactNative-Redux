const islemAction = require("./islemAction")
// @ponicode
describe("islemAction.sayiChanged", () => {
    test("0", () => {
        let callFunction = () => {
            islemAction.sayiChanged("Foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            islemAction.sayiChanged("Hello, world!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            islemAction.sayiChanged("This is a Text")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            islemAction.sayiChanged("foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            islemAction.sayiChanged(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
