/****************
       Copyright (C) 2012 Shawn Wilson <shawn@ch2a.ca>
       
  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <http://www.gnu.org/licenses/>.

******************/

/********
 *
 *  This is yet another template for making jQuery plugins.  
 *  Plugins created using this template can be called/initialized
 *  by using the following code:
 *
 *
 *  <script type="text/javascript" src="jquery-myplugin.js"></script>
 *  <script type="text/javascript">
 *     
 *     $("document").ready(function() {
 *
 *        // Call the public init method.
 *        $(myselection).myplugin(arg1, arg2, ... );
 * 
 *        // Call a public method with arguments.
 *        $(myselection).myplugin("mymethod", arg1, arg2, ...);
 *     } 
 *  </script>
 *
 *******/
   

(function($) {

   /******  PRIVATE ******/

   var myfunc = function() {
      null;
   } // endfunction      
      
   
   /****** PUBLIC ******/

   var methods = {
 
      /********
       * INIT
       ********/
      init : function(arg1, arg2) { 
         var jqNodes = this,
             domNode = jqNodes.get(0);

         /* 
          *  Initialization code goes here.  It is called like this:
          *    $(blah).myplugin(somearg1, somearg2)
          */

         return jqNodes;
      }, // endfunction

  
      /********
       * MYMETHOD
       ********/
      mymethod : function(arg1, arg2) {
         var jqNodes = this,
             domNode = jqNodes.get(0);

         /* 
          *  Method code goes here.  It is called like this:
          *    $(blah).myplugin('mymethod', somearg1, somearg2)
          */

         return jqNodes;
      }, // endfunction
  
   }; // endobject
 


   /***** PLUGIN SCAFFOLD *****/

   $.fn.myplugin = function(method) {
      var jqNodes = this;

      /* Figure out which method to call and pass the appropriate
         parameters. */
      if (methods[method]) {
         return methods[method].apply( 
               jqNodes, Array.prototype.slice.call(arguments, 1) 
            );
      } // endif 

      /* If an object or a number is passed where the method name would 
         normally go OR no parameters are passed, just call the init 
         routine. */
      if (typeof(method) === 'object' || 
          typeof(method) === 'number' ||
          !method) {
         return methods.init.apply(jqNodes, arguments);
      } // endif

      $.error('Method ' + method + ' does not exist on jQuery.myplugin');
   
   }; // endfunction

})(jQuery);
