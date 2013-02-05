  // js/models/chord.js

  var mapp = mapp || {};

  // Chord Model
  // ----------
  // Our basic **Chord** 

  mapp.Chord = Backbone.Model.extend({

    // Default attributes for the todo
    // and ensure that each todo created has `title` and `completed` keys.
    defaults: {
      title: '',
      children: [],
      root: 0
    }

  });