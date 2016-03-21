namespace app.Services {

  interface ICarResourceClass extends ng.resource.IResource<ICarResourceClass>, app.Interfaces.ICar {

  }

  interface ICarResource extends ng.resource.IResourceClass<ICarResourceClass> {

  }


  export class CarService {
    private CarResource: ICarResource;

    public getAllSync() {
      return this.CarResource.query().$promise;
    }

    public getMakeCars({}) {
      
    }

    constructor(private $resource: ng.resource.IResourceService) {
      this.CarResource = <ICarResource>$resource('/api/cars/:id');
    }
  }

  angular.module('app').service('CarService', CarService);
}
