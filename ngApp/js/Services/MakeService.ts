namespace app.Services {
  interface IMakeResourceClass extends ng.resource.IResource<IMakeResourceClass>, app.Interfaces.IMake {

  }

  interface IMakeResource extends ng.resource.IResourceClass<IMakeResourceClass> {

  }
  export class MakeService {
    private MakeResource: IMakeResource;

    public getMake() {
      return this.MakeResource.query().$promise;
    }

    constructor(private $resource: ng.resource.IResourceService) {
      this.MakeResource = <IMakeResource>$resource('/api/makes/:id');
    }
  }
  angular.module('app').service('MakeService', MakeService);
}
