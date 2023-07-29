function RouteDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalFunction = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling function "${propertyKey}" with arguments:`, args);
    const result = originalFunction.apply(this, args);
    console.log(`Function "${propertyKey}" returned:`, result);
    return result;
  };

  return descriptor;
}

  export default RouteDecorator;
  