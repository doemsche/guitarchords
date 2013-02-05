// example.js - usage of Cranium MVC

// And todo instance
var todo1 = new Cranium.Model({
    title: "",
    completed: ""
});

console.log("First todo title - nothing set: " + todo1.get('title'));
todo1.set({title: "Do something"});
console.log("Its chagned now: " + todo1.get('title'));

// View instance
var todoView = new Cranium.View({
    // DOM element selector
  el: '#todo',

  // Todo template; Underscore temlating used
  template: _.template($('.todo-template').innerHTML),

  init: function (model) {
        this.render( model.toJSON() );

    this.on(model.id + 'update', this.render.bind(this));
  },
  render: function (data) {
    console.log("View about to render.");
        $(this.el).innerHTML = this.template( data );
  }
});

var todoController = new Cranium.Controller({
  // Specify the model to update
  model: todo1,

  // and the view to observe this model
  view:  todoView,

  events: {
    "#todo.click" : "toggleComplete"
  },

  // Initialize everything
  initialize: function () {
    this.view.init(this.model);
    return this;
  },
  // Toggles the value of the todo in the Model
  toggleComplete: function () {
    var completed = todoController.model.get('completed');
    console.log("Todo old 'completed' value?", completed);
    todoController.model.set({ completed: (!completed) ? 'checked': '' });
    console.log("Todo new 'completed' value?", todoController.model.get('completed'));
    return this;
  }
});


// Let's kick start things off
todoController.initialize();

todo1.set({ title: "Due to this change Model will notify View and it will re-render"});



var clicklink = new Cranium.Model({
    counter: 0,
    clicked: ""
});

console.log("clicklink has been clicked " + clicklink.get('counter') +" times");

// View instance
var clicklinkView = new Cranium.View({
    // DOM element selector
  el: '#clicklink',

  // Todo template; Underscore temlating used
  template: _.template($('.clicklink-template').innerHTML),

  init: function (model) {
    this.render( model.toJSON() );
    this.on(model.id + 'update', this.render.bind(this));
  },
  render: function (data) {
    $(this.el).innerHTML = this.template( data );
  }
});




var clicklinkController = new Cranium.Controller({
  // Specify the model to update
  model: clicklink,

  // and the view to observe this model
  view:  clicklinkView,

  events: {
    "#clicklink.click" : "addOne"
  },

  // Initialize everything
  initialize: function () {
    this.view.init(this.model);
    return this;
  },
  // Toggles the value of the todo in the Model
  addOne: function () {
      console.log("addOne Triggered");
      var counter = clicklinkController.model.get('counter');
      counter = counter + 1;
      counter%2 > 0 ? kind = "impair" : kind = "pair";
      clicklinkController.model.set({counter: counter});
      clicklinkController.model.set({clicked: kind});
      console.log(this);
      return this;
  }
});

// Let's kick start things off
clicklinkController.initialize();

clicklink.set({ counter: 0});