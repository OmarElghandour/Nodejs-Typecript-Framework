module.exports = function (plop) {
  plop.setGenerator('controller', {
    description: 'Generate a TypeScript controller',
    prompts: [
      {
        type: 'input',
        name: 'controllerName',
        message: 'Enter the name of the controller (in PascalCase)',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/controllers/{{pascalCase controllerName}}Controller.ts',
        templateFile: 'plop-templates/controller.ts.hbs',
      },
    ],
  });
};
