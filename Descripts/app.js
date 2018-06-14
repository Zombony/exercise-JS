function User(fullName) {
	this.fullName = fullName;
	Object.defineProperties(this,{ 
		firstName: {
			get: function(){
				var arr = fullName.split(" ");
				return arr[0];
			},
			set: function(val){
				var arr = this.fullName.split(" ");
				arr[0] = val;
				return this.fullName = arr.join(" ");
			}
		},

		lastName: {
			get: function(){
				var arr = fullName.split(" ");
				return arr[1];
			},
			set: function(val){
				var arr = this.fullName.split(" ");
				arr[1] = val;
				return this.fullName = arr.join(" ");
			}
		}
	});
}

var vasya = new User("Василий Попкин");

// // чтение firstName/lastName
alert( vasya.firstName ); // Василий
alert( vasya.lastName ); // Попкин

// // запись в lastName
vasya.firstName = 'Никита';
vasya.lastName = 'Сидоров';
alert( vasya.fullName ); // Василий Сидоров
