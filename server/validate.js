async function validateRequest(req, res, required) {
  for (let key in required) {
    if (key == "email") {
      req
        .check(key, key + " must not be empty")
        .notEmpty()
        .isEmail();
    } else {
      req.check(key, key + " must not be empty").notEmpty();
    }
  }

  let errors = req.validationErrors();
  if (errors) {
    let response = {
      errors: []
    };
    errors.forEach(function(err) {
      response.errors.push(err.msg);
    });
    return response;
  } else {
    let successResponse = {
      success: true
    };
    return successResponse;
  }
}

export default validateRequest;
