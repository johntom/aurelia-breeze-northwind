import {  inject }from 'aurelia-framework';

import $ from 'jquery';
//import materialize from 'Dogfalo/materialize';
//import 'Dogfalo/materialize';
/////////////////////////////////
export class Test {
constructor(router) {
	this.message = "Test materialize!";
}

// activate() {
// }
 attached() {

     $(document).ready(function(){
       console.log('timer 1')

			 var options = [
			    {selector: '.class', offset: 200, callback: 'globalFunction()' },
			    {selector: '.other-class', offset: 200, callback: 'globalFunction()' },
					{selector: '#staggered-test', offset: 50, callback: 'Materialize.toast("This is our ScrollFire Demo!", 1500 )' },
					{selector: '#staggered-test', offset: 400, callback: 'Materialize.showStaggeredList("#staggered-test")' },
					{selector: '#image-test', offset: 500, callback: 'Materialize.fadeInImage("#image-test")' },
					{selector:".whoosh", offset: 10, callback: "alert('fired')"}
			  ];
			  Materialize.scrollFire(options);

				// Materialize.scrollFire([{ selector:".whoosh", offset: 10, callback: "alert('fired')"}]);

        // setTimeout(() => {
        //   // debugger;
        //   Materialize.scrollFire([{ selector:".whoosh", offset: 10, callback: "alert('fired')"}]);
				//
        // }, 5000);

      //   $('scrollFire').scrollFire([{ selector:".whoosh", offset: 10, callback: "alert('fired')"}]),
      //  Materialize.scrollFire([{this.whoosh, offset: 10, callback: "alert('fired')"}]);
      // this.whoosh;



 //        this.requestLoop = setTimeout(this.refresh.bind(this), 2000);
 // console.log('timer 2')

      $('.collapsible').collapsible({
          accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
        }),
     $('.materialboxed').materialbox();
      $('.tooltipped').tooltip({
        delay: 50
      });
      //
      ////     $('.tabs-wrapper .row').pushpin({ top: $('.tabs-wrapper').offset().top }),
      //    $('#sticky').pushpin();



     });
    //

  }

}
