  // js/views/app.js

  var mapp = mapp || {};

  // The Application
  // ---------------

  // Our overall **AppView** is the top-level piece of UI.
  mapp.AppView = Backbone.View.extend({

  		el: '#fretboard',
  		initialize: function(){
          this.$main = this.$('#main');
          this.$footer = this.$('#footer');
          window.mapp.Chords.on( 'add', this.addOne, this );
      		window.mapp.Chords.on( 'reset', this.addAll, this );
      		window.mapp.Chords.on( 'all', this.render, this );
      		mapp.Chords.fetch();

  		},

	  	// Re-rendering the App just means refreshing the statistics -- the rest
	    // of the app doesn't change.
	    render: function() {
	      if ( mapp.Chords.length ) {
	      	//render myChords from localStorage in footer
	        	this.$footer.html();
			   }
	    },

		addOne: function( chord ) {
	      var view = new mapp.ChordView({ model: chord });
	      $('#chord-list').append( view.render().el );
          //jtab.render(this.$el,this.model.get('title'))
	    },

    // Add all items in the **Todos** collection at once.
    addAll: function() {
      this.$('#chord-list').html('');
      console.log(this.$('#chord-list'));
      console.log(mapp.Chords.length)
      mapp.Chords.each(this.addOne, this);
      }
  });