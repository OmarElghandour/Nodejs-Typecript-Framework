module.exports = function (plop) {
  // import {inquirer} from 'inspector';

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

  plop.setGenerator('model', {
    description: 'Generate a TypeScript model file interactively',
    prompts: [
      {
        type: 'input',
        name: 'modelName',
        message: 'Enter the model name (e.g., User):',
      },
      {
        type: 'input',
        name: 'modelProperties',
        message: 'Enter the properties for your model (comma-separated, e.g., id,name,email):',
        filter: (input) => input.split(',').map((prop) => prop.trim()),
      },
      {
        type: 'input',
        name: 'propertyTypes',
        message: 'Enter the type for each property (comma-separated, e.g., string,number,Date):',
        filter: (input) => input.split(',').map((type) => type.trim()),
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/models/{{modelName}}.ts',
        templateFile: 'plop-templates/model.ts.hbs',
      },
    ],
  });



};
