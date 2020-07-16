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

exports.afterSuite = function (title, fn) {
    before(function () {
        let suites = this.test.parent.suites || []
        suites.forEach(s => {
            s.afterAll(title, fn)
        })
    })
}
