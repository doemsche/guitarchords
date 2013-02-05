 // js/views/chord.js

  var mapp = mapp || {};

  // Chord Item View
  // --------------

  // The DOM element for a todo item...
  mapp.ChordView = Backbone.View.extend({

    //... is a list tag.
    tagName:  'li',

    // Cache the template function for a single item.
    template: _.template( $('#chord-template').html() ),
    events: {
 
    },

    // The TodoView listens for changes to its model, re-rendering. Since there's
    // a one-to-one correspondence between a **Todo** and a **TodoView** in this
    // app, we set a direct reference on the model for convenience.
    initialize: function() {
      this.model.on( 'change', this.render, this );
      this.model.on( 'destroy', this.remove, this);
    },

    // Re-renders the todo item to the current state of the model and
    // updates the reference to the todo's edit input within the view.
    render: function() {
      this.$el.html( this.template( this.model.toJSON() ) );
      console.log(this)
      return this;

    },

    //remove
    clear: function(){
      this.model.destroy();
    }
  });