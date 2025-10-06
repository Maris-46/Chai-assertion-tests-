const chai = require('chai');
const assert = chai.assert;

suite('Unit Tests', function () {
  suite('Basic Assertions', function () {
    test('#isNull, #isNotNull', function () {
      assert.isNull(null, 'This is an optional error description - e.g. null is null');
      assert.isNotNull(1, '1 is not null');
    });

    test('#isDefined, #isUndefined', function () {
      assert.isDefined(null);
      assert.isUndefined(undefined);
      assert.isDefined('hello');
    });

    test('#isOk, #isNotOk', function () {
      assert.isNotOk(null);
      assert.isOk("I'm truthy");
      assert.isOk(true);
    });

    test('#isTrue, #isNotTrue', function () {
      assert.isTrue(true);
      assert.isTrue(!!'double negation');
      assert.isNotTrue({ value: 'truthy' });
    });
  });

  suite('Equality', function () {
    test('#equal, #notEqual', function () {
      assert.equal(12, '12');
      assert.notEqual({ value: 1 }, { value: 1 });
      assert.equal(6 * '2', '12');
      assert.notEqual(6 + '2', '12');
    });

    test('#strictEqual, #notStrictEqual', function () {
      assert.notStrictEqual(6, '6');
      assert.strictEqual(6, 3 * 2);
      assert.strictEqual(6 * '2', 12);
      assert.notStrictEqual([1, 'a', {}], [1, 'a', {}]);
    });

    test('#deepEqual, #notDeepEqual', function () {
      assert.notDeepEqual({ a: '1' }, { a: 1 });
      assert.deepEqual({ a: '1' }, { a: '1' });
      assert.notDeepEqual({ a: '1' }, { a: 1 });
    });
  });

  function weirdNumbers(delta) {
    return 1 + delta - Math.random();
  }

  suite('Comparisons', function () {
    test('#isAbove, #isAtMost', function () {
      assert.isAtMost('hello'.length, 5);
      assert.isAbove(1, 0);
      assert.isAbove(Math.PI, 3);
      assert.isAtMost(1 - Math.random(), 1);
    });

    test('#isBelow, #isAtLeast', function () {
      assert.isAtLeast('world'.length, 5);
      assert.isBelow(2 * Math.random(), 2);
      assert.isBelow(5 % 2, 2);
      assert.isBelow(2 / 3, 1);
    });

    test('#approximately', function () {
      assert.approximately(weirdNumbers(0.5), 1, 0.5);
      assert.approximately(weirdNumbers(0.2), 1, 0.8);
    });
  });

  const winterMonths = ['dec', 'jan', 'feb', 'mar'];
  const backendLanguages = ['php', 'python', 'javascript', 'ruby', 'asp'];

  suite('Arrays', function () {
    test('#isArray, #isNotArray', function () {
      assert.isArray('isThisAnArray?'.split(''));
      assert.isNotArray([1, 2, 3].indexOf(2));
    });

    test('Array #include, #notInclude', function () {
      assert.notInclude(winterMonths, 'jul');
      assert.include(backendLanguages, 'javascript');
    });
  });

  const formatPeople = function (name, age) {
    return '# name: ' + name + ', age: ' + age + '\n';
  };

  suite('Strings', function () {
    test('#isString, #isNotString', function () {
      assert.isNotString(Math.sin(Math.PI / 4));
      assert.isString(process.env.PATH);
      assert.isString(JSON.stringify({ type: 'object' }));
    });

    test('String #include, #notInclude', function () {
      assert.include('Arrow', 'row');
      assert.notInclude('dart', 'queue');
    });

    test('#match, #notMatch', function () {
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

  suite('Objects', function () {
    test('#property, #notProperty', function () {
      assert.notProperty(myCar, 'wings');
      assert.property(airlinePlane, 'engines');
      assert.property(myCar, 'wheels');
    });

    test('#typeOf, #notTypeOf', function () {
      assert.typeOf(myCar, 'object');
      assert.typeOf(myCar.model, 'string');
      assert.notTypeOf(airlinePlane.wings, 'string');
      assert.isArray(airlinePlane.engines);
      assert.typeOf(myCar.wheels, 'number');
    });

    test('#instanceOf, #notInstanceOf', function () {
      assert.notInstanceOf(myCar, Plane);
      assert.instanceOf(airlinePlane, Plane);
      assert.instanceOf(airlinePlane, Object);
      assert.notInstanceOf(myCar.wheels, String);
    });
  });
});
//actualizo para freecodecamp.com//
