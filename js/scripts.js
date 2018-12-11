function contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  $(document).ready(function() {
        $("form#new-contact").submit(function(event) {
            event.preventDefault();
          }

        }
      }