const chai = require('chai');
const assert = chai.assert;

describe('Unit Tests', function () {
  describe('Basic Assertions', function () {
    it('#isNull, #isNotNull', function () {
      assert.isNull(null);
      assert.isNotNull(1);
    });
    });


    it('#isDefined, #isUndefined', function () {
      assert.isDefined(null);
      assert.isUndefined(undefined);
      assert.isDefined('hello');
    });

    it('#isOk, #isNotOk', function () {
      assert.isNotOk(null);
      assert.isOk("I'm truthy");
      assert.isOk(true);
    });

    it('#isTrue, #isNotTrue', function () {
      assert.isTrue(true);
      assert.isTrue(!!'double negation');
      assert.isNotTrue({ value: 'truthy' });
    });
  });

  describe('Equality', function () {
    it('#equal, #notEqual', function () {
      assert.equal(12, '12');
      assert.notEqual({ value: 1 }, { value: 1 });
      assert.equal(6 * '2', '12');
      assert.notEqual(6 + '2', '12');
    });

    it('#strictEqual, #notStrictEqual', function () {
      assert.notStrictEqual(6, '6');
      assert.strictEqual(6, 3 * 2);
      assert.strictEqual(6 * '2', 12);
      assert.notStrictEqual([1, 'a', {}], [1, 'a', {}]);
    });

    it('#deepEqual, #notDeepEqual', function () {
      assert.notDeepEqual({ a: '1' }, { a: 1 });
      assert.deepEqual({ a: '1' }, { a: '1' });
      assert.notDeepEqual({ a: '1' }, { a: 1 });
    });
  });

  function weirdNumbers(delta) {
    return 1 + delta - Math.random();
  }

  describe('Comparisons', function () {
    it('#isAbove, #isAtMost', function () {
      assert.isAtMost('hello'.length, 5);
      assert.isAbove(1, 0);
      assert.isAbove(Math.PI, 3);
      assert.isAtMost(1 - Math.random(), 1);
    });

    it('#isBelow, #isAtLeast', function () {
      assert.isAtLeast('world'.length, 5);
      assert.isBelow(2 * Math.random(), 2);
      assert.isBelow(5 % 2, 2);
      assert.isBelow(2 / 3, 1);
    });

    it('#approximately', function () {
      assert.approximately(weirdNumbers(0.5), 1, 0.5);
      assert.approximately(weirdNumbers(0.2), 1, 0.8);
    });
  });

  const winterMonths = ['dec', 'jan', 'feb', 'mar'];
  const backendLanguages = ['php', 'python', 'javascript', 'ruby', 'asp'];

  describe('Arrays', function () {
    it('#isArray, #isNotArray', function () {
      assert.isArray('isThisAnArray?'.split(''));
      assert.isNotArray([1, 2, 3].indexOf(2));
    });

    it('Array #include, #notInclude', function () {
      assert.notInclude(winterMonths, 'jul');
      assert.include(backendLanguages, 'javascript');
    });
  });

  const formatPeople = function (name, age) {
    return '# name: ' + name + ', age: ' + age + '\n';
  };

  describe('Strings', function () {
    it('#isString, #isNotString', function () {
      assert.isNotString(Math.sin(Math.PI / 4));
      assert.isString(process.env.PATH);
      assert.isString(JSON.stringify({ type: 'object' }));
    });

    it('String #include, #notInclude', function () {
      assert.include('Arrow', 'row');
      assert.notInclude('dart', 'queue');
    });

    it('#match, #notMatch', function () {
      const regex = /^#\sname\:\s[\w\s]+,\sage\:\s\d+\s?$/;
      assert.match(formatPeople('John Doe', 35), regex);
      assert.notMatch(formatPeople('Paul Smith III', 'twenty-four'), regex);
    });
  });

  const Car = function () {
    this.model = 'sedan';
    this.engines = 1;
    this.wheels = 4;
  };

  const Plane = function () {
    this.model = '737';
    this.engines = ['left', 'right'];
    this.wheels = 6;
    this.wings = 2;
  };

  const myCar = new Car();
  const airlinePlane = new Plane();

  describe('Objects', function () {
    it('#property, #notProperty', function () {
      assert.notProperty(myCar, 'wings');
      assert.property(airlinePlane, 'engines');
      assert.property(myCar, 'wheels');
    });

    it('#typeOf, #notTypeOf', function () {
      assert.typeOf(myCar, 'object');
      assert.typeOf(myCar.model, 'string');
      assert.notTypeOf(airlinePlane.wings, 'string');
      assert.isArray(airlinePlane.engines);
      assert.typeOf(myCar.wheels, 'number');
    });

    it('#instanceOf, #notInstanceOf', function () {
      assert.notInstanceOf(myCar, Plane);
      assert.instanceOf(airlinePlane, Plane);
      assert.instanceOf(airlinePlane, Object);
      assert.notInstanceOf(myCar.wheels, String);
    });
  });

  // -----------------------------------------------------------------------------//
