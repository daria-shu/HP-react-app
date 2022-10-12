
mocha.setup('bdd');
let assert = chai.assert;

describe("Tests", function () {

    it('pow function test', function () {
        assert.equal(pow(2, 3), 8);
        assert.equal(pow(2, 2), 4);
        // assert.equal(pow(-2, 2), -4);
        // assert.equal(pow(2, -2), 0.25);
    });

    it('convert kg function test', function () {
        assert.equal(weightConverter(2), 4.410);
        assert.equal(weightConverter(55), 121.275);
        assert.equal(weightConverter(8), 17.64);
    });

    it('true test', function () {
        assert.isTrue(retTr())
    });


    it('fibonacci test',
        function () {
            assert.isTrue(GenerateFibonacci(5))
            assert.isFalse(GenerateFibonacci(6))
        });


})


mocha.run()