const validateDto = (ajvValidate) => {
  return (req, res, next) => {
    const validBody = ajvValidate(req.body);
    const validUser = ajvValidate(req.user);
    if (validBody || validUser) {
      next();
    } else {
      const errors = ajvValidate.errors;
      res.status(400).json(errors);
    }
  };
};

const validateBodyAndUser = (ajvValidatebody, ajvValidateUser) => {
  return (req, res, next) => {
    const validBody = ajvValidatebody(req.body);
    const validUser = ajvValidateUser(req.user);
    if (validBody && validUser) {
      next();
    } else {
      const errorsBody = ajvValidatebody.errors;
      const errorsUser = ajvValidateUser.errors;
      res.status(400).json({ errorsBody, errorsUser });
    }
  };
};

module.exports = { validateDto, validateBodyAndUser };
