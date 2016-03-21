namespace app.Controllers {
  export class HomeController {
    public cars: Array<app.Interfaces.ICar> = []; //the actual cars`
    public makes: Array<app.Interfaces.IMake> = []; //the corresp id #'s
    public selectedMake; //U for option in home.html
    // public theMakes; //array for selected cars
    public show = false;
    public message = "Sold Out!";

    public getCarsFromMake(cars, selectedMake) {
      return this.cars.filter(function(cars) {
          return this.cars.CarMakeId == this.selectedMake;
        })
      }


    public theCars = this.getCarsFromMake(this.cars, this.selectedMake);


    constructor(
      private MakeService: app.Services.MakeService,
      private CarService: app.Services.CarService
      //, private $timeout: ng.ITimeoutService,
      // private $uibModal: ng.ui.bootstrap.IModalService
    ) {

    MakeService.getMake().then((res) => {
      for(let m of res) {
        this.makes.push(m);
        // this.theMakes = this.makes[0]
        // this.getCarsFromMake();
      }
    })
    CarService.getAllSync().then((res) => {
      for(let c of res) {
        this.cars.push(c);

      }
    })
    }
  }

  angular.module('app').controller('HomeController', HomeController);
}
