  // js/collections/todos.js

var mapp = mapp || {};
var ChordList = Backbone.Collection.extend({

	model: mapp.Chord,
	localStorage: new Backbone.LocalStorage('chords-backbone')

});

// Create our global collection of **Todos**.
mapp.Chords = new ChordList();
