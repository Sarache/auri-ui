import React from 'react';

var Button = function Button() {
  return React.createElement("button", null, "Hello, world!");
};

var Title = function Title() {
  return React.createElement("h1", null, "Title H1");
};

export { Button, Title };
