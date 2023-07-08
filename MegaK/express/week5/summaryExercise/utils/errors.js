/* eslint-disable max-classes-per-file */
/* eslint-disable no-use-before-define */
function handleError(err, req, res, next) {
  if (err instanceof NotFoundError) {
    res.status(404);
    res.render('error', {
      message: 'Nie można znaleźć danego elementu.',
    });
    return;
  }
  console.error(err);

  res.status = (err instanceof ValidationError ? 400 : 500);

  res.render('error', {
    message: err instanceof ValidationError ? err.message : 'Przepraqszamy spróbuj ponownie',
  });
}

class ValidationError extends Error { }

class NotFoundError extends Error { }

module.exports = {
  handleError,
  ValidationError,
  NotFoundError,
};
