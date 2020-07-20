exports.beforeSuite = function (title, fn) {
    before(function () {
        let suites = this.test.parent.suites || []
        suites.forEach(s => {
            if (s.pending === false) {
                s.beforeAll(title, fn)
                let hook = s._beforeAll.pop()
                s._beforeAll.unshift(hook)
            }
        })
    })
}

exports.beforeEachSuite = function (title, fn) {
    before(function () {
        let suites = [...this.test.parent.suites || []]
        while (suites.length > 0) {
            const s = suites.shift()
            if (s.pending === false) {
                suites.push(...s.suites || [])
                s.beforeAll(title, fn)
                let hook = s._beforeAll.pop()
                s._beforeAll.unshift(hook)
            }
        }
    })
}

exports.afterEachSuite = function (title, fn) {
    before(function () {
        let suites = [...this.test.parent.suites || []]
        while (suites.length > 0) {
            const s = suites.shift()
            if (s.pending === false) {
                suites.push(...s.suites || [])
                s.afterAll(title, fn)
            }
        }
    })
}

exports.afterSuite = function (title, fn) {
    before(function () {
        let suites = this.test.parent.suites || []
        suites.forEach(s => {
            s.afterAll(title, fn)
        })
    })
}
