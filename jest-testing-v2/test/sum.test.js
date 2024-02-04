const { fetchData } = require("../sum");
test('should return data is Peanut Butter ', (done) => {
    function callBackFunction(data) {
        try {
            expect(data).toBe('Peanut butter');
            done();
        } catch (error) {
            done(error);
        }

    };

    fetchData(callBackFunction);

})