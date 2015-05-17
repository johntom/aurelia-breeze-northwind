import {inject} from 'aurelia-dependency-injection';
import {OrderService} from './order-service';

@inject(OrderService)
export class Order {
  service;
  entityManager;
  order;
  isBusy = false;

  constructor(service) {
    this.service = service;
  }

  activate(info) {
    var promise;

    if (info.id === 'new') {
      promise = this.service.createOrder();
    } else {
      promise = this.service.getOrder(info.id);
    }

    return promise.then(result => {
      this.entityManager = result.entityManager;
      this.order = result.order;
    });
  }

  attached() {
    $('select').material_select();
    $('.datepicker').pickadate({
      format: 'm/d/yyyy',
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    });
  }

  get isDirty() {
    return this.entityManager.hasChanges();
  }

  save() {
    var id = this.entity.OrderID;
    isBusy = true;
    this.entityManager.saveChanges()
      .then(saveResult => {
        if (id !== this.entity.OrderID) {
          // todo: update location.
        }
      });
  }
}
