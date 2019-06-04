function Validator(args) {
  const errors = [];
  this._args = args;

  this.errors = () => errors;
  this.setError = (msg) => errors.push(msg);

  this.add = (param, errorMsg, callback) => {
    const res = callback(this._args[this._args.indexOf(param)]);
    if (res == false) {
      this.setError(errorMsg);
      throw new Error(errors);
    }
  };

  this.hasErrors = () => !!errors.length;

  args.map((element) => {
    if (element === undefined) {
      errors.push(`some args - undefined, please send correct argument in post`);
    }
  });

  if (this.hasErrors()) {
    throw new Error(`fill in all args :(`);
  }
}

Validator.prototype.typeOf = function(value) {
  let checkedValue = typeof value;
  if (checkedValue === 'object') {
    if (value) {
      if (Array.isArray(value)) {
        checkedValue = 'array';
      }
    } else {
      checkedValue = 'null';
    }
  }
  return checkedValue;
};

Validator.prototype.checkArgumentsTypes = function(typeList) {
  const argList = this._args;
  for (let i = 0; i < typeList.length; i++) {
    if (this.typeOf(argList[i]) !== typeList[i]) {
      throw new Error(`Wrong type of ${i + 1} argument: expecting ${typeList[i]}, found ${this.typeOf(argList[i])}`);
    }
  }
  return argList;
};

module.exports = Validator;
